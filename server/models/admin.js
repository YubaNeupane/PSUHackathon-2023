import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  user: { user: { type: mongoose.Schema.ObjectId, ref: "User" } },
  numOfServerOwned: { type: Number, default: 0 },
});
export default mongoose.model("Admin", adminSchema);
