// import "dotenv/config";
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const morgan = require("morgan");
const {router} = require("./router/route.js");
const connectDB = require("./db/conn.js");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api",router);


app.listen(PORT,async() => {
    console.log(`server is listening to the port ${PORT}`);
    await connectDB();
});