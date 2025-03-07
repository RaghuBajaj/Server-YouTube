import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
        console.log(`\n MongoDB connected! DB HOST ConnectionInstance : ${ JSON.stringify(connectionInstance)} /n`);
    } catch (error) {
        console.log(`connection db error ${error}`);
        // throw error
        process.exit(1); // read about process, exit, exitcodes 
    }
};

export default connectDB;