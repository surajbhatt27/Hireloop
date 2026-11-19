import * as Y from 'yjs'
import * as syncProtocol from 'y-protocols/sync'
import * as awarenessProtocol from 'y-protocols/awareness'
import * as encoding from 'lib0/encoding'
import * as decoding from 'lib0/decoding'
import { WebSocketServer } from 'ws'
import { verifyToken } from '@clerk/backend'
import Session from '../models/Session.js'
import { ENV } from './env.js'

//y-websocket wire protocol message types
const MESSAGE_SYNC = 0
const MESSAGE_AWARENESS = 1
const MESSAGE_QUERY_AWARENESS = 3

export const WS_PATH = '/ws'

//How long a room is kept alive after the last participant disconnects.
const ROOM_TEARDOWN_MS = 30000

//A collaborative room, one per session.
class Room {
    constructor(name) {
        this.name = name
        this.doc = new Y.Doc()
        this.awareness = new awarenessProtocol.Awareness(this.doc)
        this.awareness.setLocalState(null) // the server itself is not a participant
        this.conns = new Map() // conn -> Set<awarenessClientId>
        this.teardownTimer = null
    }
}

const rooms = new Map()

const send = (room, conn, buf) => {
    if (conn.readyState !== conn.OPEN) return
    try {
        conn.send(buf)
    } catch (error) {
        console.error("Error sending ws message:", error?.message || error)
    }
}

const broadcast = (room, buf, origin = null) => {
    for (const conn of room.conns.keys()) {
        if (conn !== origin) send(room, conn, buf)
    }
}

//Seed the shared buffers with the problem starter code.
//This runs on the server, so there is exactly one writer and no seeding race.
const seedRoom = (room, starterCode) => {
    if (!starterCode) return

    const entries = starterCode instanceof Map
        ? Object.fromEntries(starterCode)
        : starterCode

    room.doc.transact(() => {
        for (const [language, code] of Object.entries(entries)) {
            if (!code || typeof code !== 'string') continue
            room.doc.getText(`code:${language}`).insert(0, code)
        }
    })
}

const getRoom = (name, session) => {
    let room = rooms.get(name)
    if (room) {
        if (room.teardownTimer) {
            clearTimeout(room.teardownTimer)
            room.teardownTimer = null
        }
        return room
    }

    room = new Room(name)
    rooms.set(name, room)

    seedRoom(room, session?.starterCode)

    room.doc.on('update', (update, origin) => {
        const encoder = encoding.createEncoder()
        encoding.writeVarUint(encoder, MESSAGE_SYNC)
        syncProtocol.writeUpdate(encoder, update)
        broadcast(room, encoding.toUint8Array(encoder), origin)
    })

    room.awareness.on('update', ({added, updated, removed}, origin) => {
        const changedClients = added.concat(updated).concat(removed)

        if (origin && room.conns.has(origin)) {
            const controlled = room.conns.get(origin)
            added.forEach(id => controlled.add(id))
            removed.forEach(id => controlled.delete(id))
        }

        const encoder = encoding.createEncoder()
        encoding.writeVarUint(encoder, MESSAGE_AWARENESS)
        encoding.writeVarUint8Array(
            encoder,
            awarenessProtocol.encodeAwarenessUpdate(room.awareness, changedClients)
        )
        broadcast(room, encoding.toUint8Array(encoder))
    })

    return room
}

const closeRoom = (name) => {
    const room = rooms.get(name)
    if (!room) return

    for (const conn of room.conns.keys()) {
        try { conn.close() } catch { /* already closed */ }
    }

    room.conns.clear()
    room.awareness.destroy()
    room.doc.destroy()
    rooms.delete(name)
}

const handleMessage = (room, conn, data) => {
    try {
        const decoder = decoding.createDecoder(new Uint8Array(data))
        const encoder = encoding.createEncoder()
        const messageType = decoding.readVarUint(decoder)

        switch (messageType) {
            case MESSAGE_SYNC: {
                encoding.writeVarUint(encoder, MESSAGE_SYNC)
                syncProtocol.readSyncMessage(decoder, encoder, room.doc, conn)
                if (encoding.length(encoder) > 1) {
                    send(room, conn, encoding.toUint8Array(encoder))
                }
                break
            }
            case MESSAGE_AWARENESS: {
                awarenessProtocol.applyAwarenessUpdate(
                    room.awareness,
                    decoding.readVarUint8Array(decoder),
                    conn
                )
                break
            }
            case MESSAGE_QUERY_AWARENESS: {
                const states = room.awareness.getStates()
                if (states.size > 0) {
                    const awarenessEncoder = encoding.createEncoder()
                    encoding.writeVarUint(awarenessEncoder, MESSAGE_AWARENESS)
                    encoding.writeVarUint8Array(
                        awarenessEncoder,
                        awarenessProtocol.encodeAwarenessUpdate(room.awareness, Array.from(states.keys()))
                    )
                    broadcast(room, encoding.toUint8Array(awarenessEncoder))
                }
                break
            }
            default:
                break
        }
    } catch (error) {
        console.error("Error handling ws message:", error?.message || error)
    }
}

const setupConnection = (room, conn) => {
    conn.binaryType = 'arraybuffer'
    room.conns.set(conn, new Set())

    conn.on('message', (message) => handleMessage(room, conn, message))
    conn.on('close', () => closeConnection(room, conn))
    conn.on('error', () => closeConnection(room, conn))

    //sync step 1 - lets the client send us its state
    const encoder = encoding.createEncoder()
    encoding.writeVarUint(encoder, MESSAGE_SYNC)
    syncProtocol.writeSyncStep1(encoder, room.doc)
    send(room, conn, encoding.toUint8Array(encoder))

    //current awareness states (cursors of people already here)
    const states = room.awareness.getStates()
    if (states.size > 0) {
        const awarenessEncoder = encoding.createEncoder()
        encoding.writeVarUint(awarenessEncoder, MESSAGE_AWARENESS)
        encoding.writeVarUint8Array(
            awarenessEncoder,
            awarenessProtocol.encodeAwarenessUpdate(room.awareness, Array.from(states.keys()))
        )
        send(room, conn, encoding.toUint8Array(awarenessEncoder))
    }
}

const closeConnection = (room, conn) => {
    const controlled = room.conns.get(conn)
    if (!controlled) return

    room.conns.delete(conn)
    awarenessProtocol.removeAwarenessStates(room.awareness, Array.from(controlled), null)

    if (room.conns.size === 0) {
        room.teardownTimer = setTimeout(() => {
            if (room.conns.size === 0) {
                room.awareness.destroy()
                room.doc.destroy()
                rooms.delete(room.name)
            }
        }, ROOM_TEARDOWN_MS)
        if (typeof room.teardownTimer.unref === 'function') room.teardownTimer.unref()
    }
}

const rejectUpgrade = (socket, status, reason) => {
    const body = reason || 'Unauthorized'
    socket.write(
        `HTTP/1.1 ${status} ${body}\r\n` +
        'Connection: close\r\n' +
        'Content-Type: text/plain\r\n' +
        `Content-Length: ${Buffer.byteLength(body)}\r\n\r\n` +
        body
    )
    socket.destroy()
}

/**
 * Verify the Clerk session token and confirm the user belongs to the session.
 * Returns the clerk user id, or null when access should be refused.
 */
const authorize = async (token, sessionId) => {
    let payload
    try {
        payload = await verifyToken(token, {secretKey: ENV.CLERK_SECRET_KEY})
    } catch (error) {
        console.error("WS token verification failed:", error?.message || error)
        return {ok: false, status: 401, reason: 'Invalid token'}
    }

    const clerkId = payload?.sub
    if (!clerkId) return {ok: false, status: 401, reason: 'Invalid token'}

    let session
    try {
        session = await Session.findById(sessionId)
            .populate('host', 'clerkId')
            .populate('participant', 'clerkId')
    } catch (error) {
        console.error("WS session lookup failed:", error?.message || error)
        return {ok: false, status: 500, reason: 'Server error'}
    }

    if (!session) return {ok: false, status: 404, reason: 'Session not found'}
    if (session.status !== 'active') return {ok: false, status: 403, reason: 'Session is not active'}

    const isMember =
        session.host?.clerkId === clerkId ||
        session.participant?.clerkId === clerkId

    if (!isMember) return {ok: false, status: 403, reason: 'Not a participant of this session'}

    return {ok: true, clerkId, session}
}

/**
 * Attach the collaborative editing WebSocket server to the main HTTP server.
 * Rooms are named after the session id, so access is scoped to that session.
 *
 * `authorize` can be replaced in tests; it must resolve to
 * `{ok: true, session}` or `{ok: false, status, reason}`.
 */
export const attachCollaborationServer = (httpServer, {authorize: authorizeFn = authorize} = {}) => {
    const wss = new WebSocketServer({noServer: true})

    httpServer.on('upgrade', async (req, socket, head) => {
        let url
        try {
            url = new URL(req.url, 'http://localhost')
        } catch {
            return rejectUpgrade(socket, 400, 'Bad request')
        }

        if (!url.pathname.startsWith(WS_PATH)) {
            return rejectUpgrade(socket, 404, 'Not found')
        }

        const sessionId = decodeURIComponent(url.pathname.slice(WS_PATH.length).replace(/^\//, ''))
        const token = url.searchParams.get('token')

        if (!sessionId || !token) {
            return rejectUpgrade(socket, 401, 'Missing token')
        }

        const auth = await authorizeFn(token, sessionId)
        if (!auth.ok) {
            return rejectUpgrade(socket, auth.status, auth.reason)
        }

        const room = getRoom(sessionId, auth.session)

        wss.handleUpgrade(req, socket, head, (ws) => {
            wss.emit('connection', ws, req, room)
        })
    })

    wss.on('connection', (conn, req, room) => {
        setupConnection(room, conn)
    })

    return wss
}

//Tear down the room when a session ends.
export const closeCollaborationRoom = (sessionId) => {
    if (!sessionId) return
    closeRoom(String(sessionId))
}
