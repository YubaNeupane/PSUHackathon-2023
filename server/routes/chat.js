import express from "express";
import { chat } from "../controller/chat/chat.js";

const router = express.Router();

router.post("/", chat);

export default router;
