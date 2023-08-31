const express = require("express");
const userRoute = require("./user/user.js");
const adminRoute = require("./admin/admin.js");
const router = new express.Router();

router.use("/user",userRoute);
router.use("/admin",adminRoute);

module.exports = { router };