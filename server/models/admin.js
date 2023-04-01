import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  numOfServerOwned: { type: Number, default: 0 },
});
export default mongoose.model("Admin", adminSchema);
