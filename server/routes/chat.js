import express from "express";
import { chat } from "../controller/chat/chat.js";

const router = express.Router();

router.post("/", auth, chat);

export default router;
