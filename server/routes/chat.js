import express from "express";
import { chat } from "../controller/chat/chat.js";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.post("/", auth, chat);

export default router;
