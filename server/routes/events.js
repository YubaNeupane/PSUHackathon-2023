import express from "express";
import { chat } from "../controller/chat/chat.js";
import { authMiddleware } from "../middleware/auth";


router.get("/events", authMiddleware, getEvents);
router.get("/events/:eventId", authMiddleware, getEventId);

