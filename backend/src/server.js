import express from 'express'
import {ENV} from './lib/env.js'
import cors from 'cors'
import { connectDB } from './lib/db.js';

const app = express()

app.use(cors({
    origin: ENV.CORS || "http://localhost:5173",
    credentials: true
}));

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