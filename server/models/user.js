import mongoose from "mongoose";

//TODO: Make chnages to this schema
const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  userName: { type: String, require: true },
  email: { type: String, require: true },
  creationData: { type: String, require: true, default: Date.now },
  password: { type: String, require: true },
  servers: [{ name: { type: String }, id: { type: mongoose.Schema.ObjectId } }],
  directMessages: [
    { name: { type: String }, id: { type: mongoose.Schema.ObjectId } },
  ],
  admin: { type: mongoose.Schema.ObjectId, default: null },
});

export default mongoose.model("User", userSchema);
