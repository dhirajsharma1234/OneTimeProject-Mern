import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        // const DB_URL = process.env.DB_URL;
        const DB_URL = "mongodb+srv://dhiraj:dhiraj@cluster0.ehhvfmx.mongodb.net/oneTime?retryWrites=true&w=majority";
        const conn = await mongoose.connect(DB_URL);

        if(conn) {
            console.log(`Db connected successfully........`);
        }
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export default connectDB;