import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, default: null },
    phone: { type: String, required: true, unique: true },
    email: { type: String, default: null },
    password: { type: String, default: null },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
