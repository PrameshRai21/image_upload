import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`DB connected Successfully! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("DB connection failed!!!", error);
    }
}

export { connectDB }