//controller
import { oneTime } from "../../controllers/user/handler.js";
import express from "express";
const router = new express.Router();

router.route("/create").post(oneTime.createData);
router.route("/:token").get(oneTime.accessData);

export default router;