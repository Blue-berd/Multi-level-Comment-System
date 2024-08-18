import { sendError, sendResponse } from "../../utils/response.js";
import Post from "./postsModel.js";

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return await sendResponse(res, "Post created", 201, null, null);
  } catch (error) {
    return await sendError(res, "Internal server error!", 500);
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return await sendError(res, 404, "Post not found");
    }
    return await sendResponse(res, "A post", 200, post, null);
  } catch (error) {
    return await sendError(res, "Internal server error!", 500);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    if (!post) {
      return await sendError(res, 404, "Post not found");
    }
    return await sendResponse(res, "A post", 200, post, null);
  } catch (error) {
    return await sendError(res, "Internal server error!", 500);
  }
};
