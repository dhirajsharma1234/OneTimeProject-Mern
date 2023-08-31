// import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import {router} from "./router/route.js";
import connectDB from "./db/conn.js";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api",router);


app.listen(PORT,async() => {
    console.log(`server is listening to the port ${PORT}`);
    await connectDB();
});