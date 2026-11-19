import {StreamChat} from 'stream-chat'
import {StreamClient} from '@stream-io/node-sdk'
import {ENV} from './env.js'

const apiKey = ENV.STREAM_API_KEY
const apiSecret = ENV.STREAM_API_SECRET

if(!apiKey || !apiSecret) {
    console.error("STREAM_API_KEY or STREAM_API_SECRET is missing")
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret) // for chat msg
export const streamClient = new StreamClient(apiKey, apiSecret) // for video call

export const upsertStreamUser = async(userData) => {
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted successfully:", userData);
    } catch (error) {
        console.error("Error upserting stream user: ", error);
        
    }
}

export const deleteStreamUser = async(userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log("Stream user deleted successfully:", userId);

    } catch (error) {
        console.error("Error deleting stream user: ", error);

    }
}

/**
 * Release the Stream resources tied to a session (video call + chat channel).
 * Safe to call for a session that was already cleaned up - individual failures
 * are logged but never thrown, so callers can always continue.
 */
export const cleanupStreamSession = async(callId) => {
    if(!callId) return

    try {
        await streamClient.video.call("default", callId).delete({hard: true})
    } catch (error) {
        console.error("Error deleting stream call:", error?.message || error)
    }

    try {
        await chatClient.channel("messaging", callId).delete()
    } catch (error) {
        console.error("Error deleting stream chat channel:", error?.message || error)
    }
}