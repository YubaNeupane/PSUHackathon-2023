import mongoose, { Mongoose } from "mongoose";

//TODO: Make chnages to this schema

const chatHistory = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User", require: true },
  title: { type: String, default: "Untitled" },
  chats: [
    {
      id: { type: mongoose.Schema.ObjectId, ref: "ChatGPT" },
    },
  ],
  createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("ChatHistory", chatHistory);
