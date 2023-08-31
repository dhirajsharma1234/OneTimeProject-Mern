// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        const DB_URL = process.env.DB_URL;
        const conn = await mongoose.connect(DB_URL);

        if(conn) {
            console.log(`Db connected successfully........`);
        }
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export default connectDB;