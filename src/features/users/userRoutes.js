import { Router } from "express";
import { login, register } from "./userController.js";

const authRoutes = Router();
authRoutes.post("/login", login);
authRoutes.post("/register", register);

export default authRoutes;
