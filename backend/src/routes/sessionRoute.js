import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import { 
    createSession, 
    endSession, 
    getActiveSessions, 
    getMyRecentSessions, 
    getSessionById, 
    joinPrivateSession, 
    joinSession 
} from '../controllers/sessionController.js'

const router = express.Router()

router.post('/', protectRoute, createSession)
router.get('/active', protectRoute, getActiveSessions)
router.post('/:id/join-private', protectRoute, joinPrivateSession)
router.get('/my-recent', protectRoute, getMyRecentSessions)

router.get('/:id', protectRoute, getSessionById)
router.post('/:id/join', protectRoute, joinSession)
router.post('/:id/end', protectRoute, endSession)

export default router