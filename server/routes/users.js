import express from "express";
import {
  signin,
  signup,
  getSignedInUser,
  getUser,
  passwordResetLinkSender,
  passwordResetter,
} from "../controller/user/user.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

const router = express.Router();

//POST [SIGN and SIGN UP]
router.post("/signin", signin);
router.post("/signup", signup);

//POST [REST PASSWORD]
router.post("/password-reset", passwordResetLinkSender);
router.post("/password-reset/:userId/:token", passwordResetter);

//Get [Chat Threads]
router.get("/:id/thread/:threadId", authMiddleware, getUser);

//GET [CURRENT LOGIN USER and OTHER OTHERS]
router.get("/", authMiddleware, getSignedInUser);
router.get("/:id", authMiddleware, getUser);

export default router;
