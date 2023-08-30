// import 'dotenv/config.js';
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import {router} from "./router/route.js";
import connectDB from "./db/conn.js";
const app = express();

const PORT = process.env.PORT || 8001;

// Configure CORS to allow requests from a specific domain (replace with your frontend domain)
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api",router);


app.listen(PORT,async() => {
    console.log(`server is listening to the port ${PORT}`);
    await connectDB();
});