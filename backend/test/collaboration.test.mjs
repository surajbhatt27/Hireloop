import http from 'node:http'
import assert from 'node:assert/strict'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import WebSocket from 'ws'
import { attachCollaborationServer } from '../src/lib/collaboration.js'

//A stand-in for the Clerk check so the test does not need real credentials.
const STARTER = {
    javascript: 'function twoSum(nums, target) {\n    // Write your solution here\n}\n',
    python: 'def two_sum(nums, target):\n    # Write your solution here\n    pass\n',
}

const fakeAuthorize = async (token, sessionId) => {
    if (token !== 'valid-token') {
        return { ok: false, status: 401, reason: 'Invalid token' }
    }
    return {
        ok: true,
        clerkId: 'user_test',
        session: { _id: sessionId, starterCode: STARTER },
    }
}

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('ok')
})
attachCollaborationServer(server, { authorize: fakeAuthorize })

await new Promise((resolve) => server.listen(0, resolve))
const port = server.address().port
const url = `ws://127.0.0.1:${port}/ws`

const clients = []

const connect = async (room, token = 'valid-token') => {
    const doc = new Y.Doc()
    const provider = new WebsocketProvider(url, room, doc, {
        params: { token },
        WebSocketPolyfill: WebSocket,
        //Do not let the cross-tab channel stand in for the websocket.
        disableBc: true,
    })

    await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('sync timeout')), 8000)
        provider.on('sync', (synced) => {
            if (synced) {
                clearTimeout(timer)
                resolve()
            }
        })
    })

    clients.push({ doc, provider })
    return { doc, provider }
}

const waitFor = async (fn, timeout = 5000) => {
    const started = Date.now()
    while (Date.now() - started < timeout) {
        if (fn()) return true
        await new Promise((r) => setTimeout(r, 25))
    }
    return false
}

let passed = 0
let failed = 0
const check = (name, cond, extra = '') => {
    if (cond) { passed++; console.log('  PASS  ' + name) }
    else { failed++; console.log('  FAIL  ' + name + (extra ? ' -> ' + extra : '')) }
}

const room = 'session_test_' + Date.now()

try {
    console.log('\n== 1. The server seeds the shared buffer ==')
    const a = await connect(room)
    const jsText = a.doc.getText('code:javascript')
    check('javascript buffer is seeded with the starter code',
        jsText.toString() === STARTER.javascript, JSON.stringify(jsText.toString()))
    check('python buffer is seeded separately',
        a.doc.getText('code:python').toString() === STARTER.python)

    console.log('\n== 2. A second participant sees the same buffer ==')
    const b = await connect(room)
    check('second client received the seed',
        b.doc.getText('code:javascript').toString() === STARTER.javascript)

    console.log('\n== 3. Edits propagate to the other participant ==')
    a.doc.getText('code:javascript').insert(0, '// hello from A\n')
    const propagated = await waitFor(() =>
        b.doc.getText('code:javascript').toString().includes('// hello from A'))
    check('edit from A reached B', propagated)
    check('both buffers are identical',
        a.doc.getText('code:javascript').toString() === b.doc.getText('code:javascript').toString())

    console.log('\n== 4. Concurrent edits converge ==')
    const ta = a.doc.getText('code:javascript')
    const tb = b.doc.getText('code:javascript')
    const baseLength = ta.length

    //Both clients type at the same moment, without seeing each other first.
    ta.insert(baseLength, '\n// typed by A')
    tb.insert(baseLength, '\n// typed by B')

    const converged = await waitFor(() =>
        ta.toString() === tb.toString() &&
        ta.toString().includes('// typed by A') &&
        ta.toString().includes('// typed by B'))

    check('concurrent edits converge to the same text', converged,
        JSON.stringify({ a: ta.toString(), b: tb.toString() }))
    check('neither edit was lost',
        ta.toString().includes('// typed by A') && ta.toString().includes('// typed by B'))

    console.log('\n== 5. Someone joining late gets the current state ==')
    const c = await connect(room)
    check('late joiner sees the merged buffer',
        c.doc.getText('code:javascript').toString() === ta.toString(),
        JSON.stringify(c.doc.getText('code:javascript').toString()))

    console.log('\n== 6. Presence (awareness) is shared ==')
    a.provider.awareness.setLocalStateField('user', { name: 'Alice', color: '#22d3ee' })
    const sawAlice = await waitFor(() => {
        for (const [clientId, state] of b.provider.awareness.getStates()) {
            if (clientId !== b.doc.clientID && state.user?.name === 'Alice') return true
        }
        return false
    })
    check('the other participant sees the awareness state', sawAlice)

    console.log('\n== 7. Separate sessions do not share a buffer ==')
    const other = await connect(room + '_other')
    check('another room gets its own seeded copy',
        other.doc.getText('code:javascript').toString() === STARTER.javascript,
        JSON.stringify(other.doc.getText('code:javascript').toString()))

    other.doc.getText('code:javascript').insert(0, '// only in the other room\n')
    const isolated = await waitFor(() =>
        other.doc.getText('code:javascript').toString().includes('// only in the other room'))
    check('edit in the other room applied', isolated)
    check('the original room is unaffected',
        a.doc.getText('code:javascript').toString() === ta.toString())
    check('the other room did not leak into the original',
        !a.doc.getText('code:javascript').toString().includes('// only in the other room'))

    console.log('\n== 8. Unauthorised clients are refused ==')
    let refused = false
    try {
        await connect(room + '_denied', 'bad-token')
    } catch (error) {
        refused = true
    }
    check('connection with a bad token is rejected', refused)
} catch (error) {
    failed++
    console.log('  FAIL  unexpected error -> ' + error.message)
} finally {
    for (const { provider, doc } of clients) {
        provider.destroy()
        doc.destroy()
    }
    server.close()
}

console.log('\n================================')
console.log('passed: ' + passed + '   failed: ' + failed)
console.log('================================')
process.exit(failed === 0 ? 0 : 1)
