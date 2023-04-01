import mongoose from "mongoose";

const passwordResetTokenSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  token: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});
export default mongoose.model("PasswordResetToken", passwordResetTokenSchema);
