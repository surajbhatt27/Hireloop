import express from 'express'
import {ENV} from './lib/env.js'
import cors from 'cors'
import { connectDB } from './lib/db.js';
import {serve} from 'inngest/express'
import { functions, inngest } from './lib/inngest.js';

const app = express()

app.use(cors({
    origin: ENV.CORS || "http://localhost:5173",
    credentials: true // Server allows a broswer to include cookies on req.
}));

app.use('/api/inngest', serve({client: inngest, functions}))

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