import express from "express";
import { createPost, getAllPosts, getPostById } from "./postsController.js";

const postRouter = express.Router();

postRouter.post("/", createPost);
postRouter.get("/", getPostById);
postRouter.get("/:postId", getAllPosts);

export default postRouter;
