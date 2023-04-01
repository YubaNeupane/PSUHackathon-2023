import mongoose, { Mongoose } from "mongoose";

//TODO: Make chnages to this schema
const apiChat = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  role: { type: String, require: true },
  content: { type: String, require: true },
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("ChatGPT", apiChat);
