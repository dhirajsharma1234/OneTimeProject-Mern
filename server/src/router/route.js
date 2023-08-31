// import express from "express";
// import userRoute from "./user/user.js";
// import adminRoute from "./admin/admin.js";
const express = require("express");
const userRoute = require("./user/user.js");
const adminRoute = require("./admin/admin.js");
const router = new express.Router();

router.use("/user",userRoute);
router.use("/admin",adminRoute);

export { router };