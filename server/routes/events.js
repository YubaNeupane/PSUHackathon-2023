import express from "express";

import { getEvents, addEvent, getEventId } from "../controller/event/event.js";

import authMiddleware from "../middleware/AuthMiddleware.js";

const router = express.Router();

//GET [Events]
router.get("/", authMiddleware, getEvents);
router.get("/:eventId", authMiddleware, getEventId);

//POST [Events]
router.post("/addEvent", authMiddleware, addEvent);

export default router;
