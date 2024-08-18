import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const rateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10),
  max: parseInt(process.env.RATE_LIMIT_MAX, 10),
  message: "Too many requests, please try again later.",
});

export default rateLimiter;
