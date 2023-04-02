import express from "express";
import {
  chat,
  getChatHistory,
  getHistoryData,
} from "../controller/chat/chat.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, chat);

//[Get all chats]
router.get("/", authMiddleware, getChatHistory);

//[get all chat from a history]
router.post("/history", authMiddleware, getChatHistory);

router.get("/history", authMiddleware, getHistoryData);

export default router;
