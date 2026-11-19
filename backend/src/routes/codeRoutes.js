import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createRateLimiter } from '../middleware/rateLimit.js';
import { executeCode } from '../controllers/codeController.js';

const router = express.Router();

//Burst guard - stops runaway loops from one client.
const burstLimiter = createRateLimiter({
    windowMs: 60 * 1000,
    max: 30,
    message: 'You are executing code too quickly. Try again in a moment.'
})

//Daily guard - protects the shared JDoodle quota.
const dailyLimiter = createRateLimiter({
    windowMs: 24 * 60 * 60 * 1000,
    max: 200,
    message: 'Daily code execution limit reached. Try again tomorrow.'
})

router.post('/execute', protectRoute, burstLimiter, dailyLimiter, executeCode);

export default router;
