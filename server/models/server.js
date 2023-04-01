import mongoose from "mongoose";

const serverSchema = mongoose.Schema({
  name: { type: String, require: true },
  icon: { type: String, require: true },
  members: [
    {
      name: { type: String },
      id: { type: mongoose.Schema.ObjectId, ref: "User" },
    },
  ],
  admin: [
    {
      name: { type: String },
      id: { type: mongoose.Schema.ObjectId, ref: "Admin" },
    },
  ],
  channels: [
    {
      name: { type: String },
      id: { type: mongoose.Schema.ObjectId, ref: "channels" },
    },
  ],
});
export default mongoose.model("Server", serverSchema);
