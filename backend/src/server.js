import express from 'express'
import {ENV} from './lib/env.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ENV.CORS || "http://localhost:5173",
    credentials: true
}));

app.get('/health', (req, res) => {
    res.status(200).json({msg: "Server is up and running"})
})

app.listen(ENV.PORT, () => {
    console.log("Server is running on port:", ENV.PORT);
    
})