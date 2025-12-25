import mongoose from 'mongoose'
import {ENV} from './env.js'

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(ENV.DB_URL)
        console.log("✅ Connected to MongoDB: ", connectionInstance.connection.host);
    } catch (error) {
        console.log("❌ Error connecting to MongoDb: ", error);
        process.exit(1)
    }
}