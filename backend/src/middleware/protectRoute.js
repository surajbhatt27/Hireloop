import {requireAuth, clerkClient} from '@clerk/express'
import User from '../models/User.js'
import {upsertStreamUser} from '../lib/stream.js'

/**
 * Create the local user record for a Clerk user that has not been synced yet.
 * The Clerk webhook (Inngest) is the primary path - this is the safety net
 * for the window between signup and webhook delivery.
 */
const provisionUser = async (clerkId) => {
    const clerkUser = await clerkClient.users.getUser(clerkId)

    const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ')
        || clerkUser.fullName
        || clerkUser.primaryEmailAddress?.emailAddress
        || 'PairUp User'

    const email = clerkUser.primaryEmailAddress?.emailAddress
        || `${clerkId}@users.noreply.pairup.app`

    let user
    try {
        // $setOnInsert keeps this idempotent if two requests race each other.
        user = await User.findOneAndUpdate(
            {clerkId},
            {$setOnInsert: {clerkId, email, name, profileImage: clerkUser.imageUrl || ''}},
            {upsert: true, new: true, setDefaultsOnInsert: true}
        )
    } catch (error) {
        // Another request may have inserted the same email first.
        user = await User.findOne({clerkId})
        if(!user) throw error
    }

    //Make sure the person exists on Stream, otherwise chat/video calls fail.
    await upsertStreamUser({
        id: user.clerkId.toString(),
        name: user.name,
        image: user.profileImage
    })

    return user
}

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            const clerkId = req.auth().userId;
            if(!clerkId) return res.status(401).json({message: "Unauthorized - invalid token"})

                //find user in db by clerk ID
                let user = await User.findOne({clerkId})

                //not synced yet - create it on the fly
                if(!user) {
                    user = await provisionUser(clerkId)
                }

                if(!user) return res.status(404).json({message: "User not found"})
                
                // attach user to req.
                req.user = user
                next()

        } catch (error) {
            console.error("Error in protectRoute middleware", error);
            res.status(500).json({message: "Internal server error"})
            
        }
    }
]
