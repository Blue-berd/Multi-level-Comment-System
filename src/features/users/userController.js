import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt.js";
import { sendError, sendResponse } from "../../utils/response.js";
import User from "./userModel.js";

export const register = async function (req, res) {
  try {
    const { username, email, password, fullName } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      fullName,
    });
    return await sendResponse(res, "User registered", 201, null, null);
  } catch (error) {
    return await sendError(res, "Internal server error!", 500);
  }
};

export const login = async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return sendError(res, "User not found", 400);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendError(res, "Invalid password", 400);
    }
    const token = generateToken(user._id);
    return await sendResponse(res, "Succesfull login", 200, null, token);
  } catch (error) {
    return await sendError(res, "Internal server error!", 500);
  }
};
