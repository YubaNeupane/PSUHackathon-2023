import express from "express";
import { 
    getEvents,
    addEvent,
    getEventId
  } from "../controller/event/event.js";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

//GET [Events]
router.get("/", authMiddleware, getEvents);
router.get("/:eventId", authMiddleware, getEventId);

//POST [Events]
router.post("/", authMiddleware, addEvent);

export default router;