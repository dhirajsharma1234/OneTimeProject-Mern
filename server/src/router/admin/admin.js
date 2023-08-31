//controller
// import { oneTime } from "../../controllers/admin/handler.js";
// import express from "express";
const { oneTime } = require("../../controllers/admin/handler.js");
const express = require("express");
const router = new express.Router();

router.route("/logs").get(oneTime.getAllUrlData);
router.route("/log/:urlId")
.get(oneTime.getSingleUrlData)
.delete(oneTime.deleteUrlData);

export default router;