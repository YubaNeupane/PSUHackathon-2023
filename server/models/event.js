import { time } from "console";
import mongoose from "mongoose";

//TODO: Make chnages to this schema
const eventSchema = mongoose.Schema({
  name: { type: String, require: true },
  creatorId: { type: String, require: true },
  creationData: { type: String, require: true, default: Date.now },
  time: { type: Date, require: true },
  location: { type: String },
  description: { type: String, required: true },
  poster: { type: String },
  category: { type: [String] },
  type: { type: [String] },
});

export default mongoose.model("Event", eventSchema);
