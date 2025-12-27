import express from 'express'
import { getStreamToken } from '../controllers/chatController.js';
import { protetcRoute } from '../middleware/protectRoute.js';

const router = express.Router()

router.get("/token", protetcRoute, getStreamToken)

export default router;