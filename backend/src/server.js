import express from 'express'
import {ENV} from './lib/env.js'
import cors from 'cors'
import { connectDB } from './lib/db.js';
import {serve} from 'inngest/express'
import { functions, inngest } from './lib/inngest.js';
import {clerkMiddleware} from '@clerk/express'
import chatRoutes from './routes/chatRoutes.js'

const app = express()

app.use(express.json())

app.use(cors({
    origin: ENV.CORS || "http://localhost:5173",
    credentials: true // Server allows a broswer to include cookies on req.
}));

app.use(clerkMiddleware())  // this adds auth field to request objext: req.auth()

app.use("/api/inngest", serve({client:inngest, functions}))
app.use("/api/chat", chatRoutes)

app.get('/health', (req, res) => {
    res.status(200).json({msg: "Server is up and running"})
})

const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, () => {
            console.log("Server is running on port:", ENV.PORT);
        })
    } catch (error) {
        console.error("❌Error starting the server", error);
    }
}

startServer()