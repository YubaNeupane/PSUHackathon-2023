import { time } from "console";
import mongoose from "mongoose";

//TODO: Make chnages to this schema
const eventSchema = mongoose.Schema({
  name: { type: String, require: true },
  creatorName: { type: String, require: true },
  creationData: { type: String, require: true, default: Date.now },
  date: { type: Date, require: true },
  time: {type: time, require: true},
  //location: {type: Location, require: true},
  description: {type: String, required: true},
  servers: [{ name: { type: String }, id: { type: mongoose.Schema.ObjectId } }],
  directMessages: [
    { name: { type: String }, id: { type: mongoose.Schema.ObjectId } },
  ],
  admin: { type: mongoose.Schema.ObjectId, default: null },
});

export default mongoose.model("Event", userSchema);