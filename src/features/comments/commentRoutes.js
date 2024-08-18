import express from "express";
import authMiddleware from "../../middlewares/authMiddleware.js";
import {
  createComment,
  expandParentComment,
  getCommentsForPost,
  replyToComment,
} from "./commentController.js";

const commentsRouter = express.Router();

commentsRouter.post("/posts/:postId/comments", authMiddleware, createComment);

// Get comments for a post
commentsRouter.get("/posts/:postId/comments", getCommentsForPost);

// Reply to a comment
commentsRouter.post(
  "/posts/:postId/comments/:commentId/reply",
  authMiddleware,
  replyToComment
);

// Expand comments (with pagination)
commentsRouter.get(
  "/posts/:postId/comments/:commentId/expand",
  expandParentComment
);

export default commentsRouter;
