//controller
const { oneTime } = require("../../controllers/user/handler.js");
const express = require("express");
const router = new express.Router();

router.route("/create").post(oneTime.createData);
router.route("/:token").get(oneTime.accessData);

module.exports = router;