import Session from "../models/Session.js"
import {chatClient, streamClient, cleanupStreamSession} from "../lib/stream.js"
import {closeCollaborationRoom} from "../lib/collaboration.js"

const SESSION_MS = 60000 // 1 minute in ms, sessions store duration in minutes

const MAX_LANGUAGES = 20
const MAX_STARTER_BYTES = 20000

/**
 * Sanitize the starter code map sent by the client.
 * It is used to seed the shared buffers, so keep it small and string-only.
 */
const sanitizeStarterCode = (starterCode) => {
    if (!starterCode || typeof starterCode !== 'object') return {}

    const clean = {}
    let count = 0

    for (const [language, code] of Object.entries(starterCode)) {
        if (count >= MAX_LANGUAGES) break
        if (typeof code !== 'string' || code.length === 0) continue
        if (code.length > MAX_STARTER_BYTES) continue
        if (!/^[a-z0-9#+._-]{1,32}$/i.test(language)) continue

        clean[language] = code
        count++
    }

    return clean
}

//A session is expired once its duration has elapsed since it actually started.
const isExpired = (session) => {
    if(!session.duration || !session.startedAt) return false
    const expiresAt = new Date(session.startedAt.getTime() + session.duration * SESSION_MS)
    return new Date() >= expiresAt
}

//Mark a session as completed and release the Stream resources it owns.
const completeSession = async (session) => {
    session.status = "completed"
    session.endedAt = new Date()
    await session.save()
    await cleanupStreamSession(session.callId)
    //Disconnect everyone from the collaborative editor.
    closeCollaborationRoom(session._id)
}

//Close out every active session whose timer has already elapsed.
const expireStaleSessions = async () => {
    const expired = await Session.find({
        status: "active",
        duration: {$ne: null},
        startedAt: {$ne: null},
        $expr: {
            $lte: [
                {$add: ["$startedAt", {$multiply: ["$duration", SESSION_MS]}]},
                new Date()
            ]
        }
    })

    for (const session of expired) {
        await completeSession(session)
    }
}

/**
 * Atomically claim the participant slot of a session.
 * The `participant: null` guard makes this safe against two people joining
 * at the same time - only one update can match.
 */
const claimParticipant = async (sessionId, userId) => {
    const current = await Session.findById(sessionId)

    if(!current) return {error: {status: 404, message: "Session not found"}}

    if(current.status !== "active") {
        return {error: {status: 400, message: "Cannot join a completed session"}}
    }

    if(current.host.toString() === userId.toString()) {
        return {error: {status: 400, message: "Host cannot join their own session"}}
    }

    const setFields = {participant: userId}

    //The timer starts when the second person joins, not when the room is created.
    if(current.duration && !current.startedAt) {
        setFields.startedAt = new Date()
    }

    const claimed = await Session.findOneAndUpdate(
        {_id: sessionId, status: "active", participant: null},
        {$set: setFields},
        {new: true}
    )

    if(!claimed) {
        return {error: {status: 409, message: "Session is full"}}
    }

    return {session: claimed}
}

export async function createSession(req, res) {
    try {
        const {problem, problemId, difficulty, isPrivate, duration, starterCode} = req.body
        const userId = req.user._id
        const clerkId = req.user.clerkId

        if(!problem || !difficulty) {
            return res.status(400).json({message: "Problem and difficulty are required"})
        }

        //generate a unique call id for the stream video
        const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`

        // create session in db - startedAt stays null until a participant joins
        const session = await Session.create({
            problem,
            problemId: problemId || null,
            starterCode: sanitizeStarterCode(starterCode),
            difficulty,
            host:userId,
            callId,
            isPrivate: isPrivate || false,
            duration: duration || null,
            startedAt: null
        })

        // create stream video call
        await streamClient.video.call("default", callId).getOrCreate({
            data: {
                created_by_id: clerkId,
                custom: {problem, difficulty, sessionId: session._id.toString()}
            }
        })

        //chat msg
        const channel = chatClient.channel("messaging", callId, {
            name: `${problem} Session`,
            created_by_id:clerkId,
            members:[clerkId]
        })

        await channel.create()

        res.status(201).json({session})
    } catch (error) {
        console.log("Error in createSession controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
        
    }
}

export async function getActiveSessions(_, res) {
    try {
        //Rooms whose timer ran out should not be advertised as joinable.
        await expireStaleSessions()

        const sessions = await Session.find({status: "active", isPrivate: false })
        .populate("host", "name profileImage email clerkId")
        .populate("participant", "name profileImage email clerkId")
        .sort({createdAt:-1})
        .limit(20)

        res.status(200).json({sessions})
    } catch (error) {
        console.log("Error in getActiveSession controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
    }
}

// join via invite link (by ID)
export async function joinPrivateSession(req, res) {
    try {
        const {id} = req.params
        const userId = req.user._id
        const clerkId = req.user.clerkId

        const {session, error} = await claimParticipant(id, userId)
        if(error) return res.status(error.status).json({message: error.message})

        const channel = chatClient.channel("messaging", session.callId)
        await channel.addMembers([clerkId])

        res.status(200).json({session})
    } catch (error) {
        console.log("Error in joinPrivateSession controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
    }
}

export async function getMyRecentSessions(req, res) {
    try {
        const userId = req.user._id
        // get sessions where user is either host for participant
        const sessions = await Session.find({
            status: "completed",
            $or: [{host: userId}, {participant: userId}]
        })
        .populate("host", "name profileImage email clerkId")
        .populate("participant", "name profileImage email clerkId")
        .sort({createdAt: -1})
        .limit(20)

        res.status(200).json({sessions})
    } catch (error) {
        console.log("Error in getMyRecentSessions controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
    }
}

export async function getSessionById(req, res) {
    try {
        const {id} = req.params
        const session = await Session.findById(id)
        .populate("host", "name email profileImage clerkId")
        .populate("participant", "name email profileImage clerkId")

        if(!session) return res.status(404).json({message: "Session not found"})

        // Check if session has expired
        if(session.status === "active" && isExpired(session)) {
            await completeSession(session)
        }

        res.status(200).json({session})
    }catch (error) {
        console.log("Error in getSessionById controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
    }
}

export async function joinSession(req, res) {
    try {
        const {id} = req.params
        const userId = req.user._id
        const clerkId = req.user.clerkId

        const existing = await Session.findById(id)
        if(!existing) return res.status(404).json({message: "Session not found"})

        //Private rooms are only reachable through their invite link.
        if(existing.isPrivate) {
            return res.status(403).json({message: "This is a private session. Use the invite link to join"})
        }

        const {session, error} = await claimParticipant(id, userId)
        if(error) return res.status(error.status).json({message: error.message})

        const channel = chatClient.channel("messaging", session.callId)
        await channel.addMembers([clerkId])

        res.status(200).json({session})
    } catch (error) {
        console.log("Error in joinSession controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
    }
}

export async function endSession(req, res) {
    try {
        const {id} = req.params
        const userId = req.user._id

        const session = await Session.findById(id)
        if(!session) return res.status(404).json({message: "Session not found"})

        //check if user is the host
        if(session.host.toString() !== userId.toString()) {
            return res.status(403).json({message: "Only the host can end the session"})
        }

        //session is already completed.
        if(session.status === "completed") {
            return res.status(400).json({message: "Session is already completed"})
        }

        //delete stream video call + chat channel, mark the session as completed
        await completeSession(session)

        res.status(200).json({session, message: "Session ended successfully"})
    } catch (error) {
        console.log("Error in endSession controller:", error.message);
        res.status(500).json({message: "Internal server Error"})
    }
}
