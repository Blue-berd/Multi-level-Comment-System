import { sendError, sendResponse } from "../../utils/response.js";
import Comment from "./commentModel.js";

export const createComment = async (req, res) => {
  try {
    const newComment = new Comment({ ...req.body });
    let { error } = newComment.validateSync();
    if (error) {
      return await sendError(res, error.error);
    }
    const savedComment = await newComment.save();

    return sendResponse(res, "Comment created successfully", 201, savedComment);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return sendError(res, "Internal server error!", 500);
  }
};

// Reply to an Existing Comment
export const replyToComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const parentComment = await Comment.findById(commentId);

    if (!parentComment) {
      return sendError(res, "Comment not found", 404);
    }

    const newReply = new Comment({ ...req.body, parentId: commentId });
    const savedReply = await newReply.save();

    parentComment.replies.push(savedReply._id);
    await parentComment.save(); // Update the parent comment with the reply

    return sendResponse(res, "Reply created successfully", 201, savedReply);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return sendError(res, "Internal server error!", 500);
  }
};

// Get Comments for a Post (assuming pagination is handled elsewhere)
export const getCommentsForPost = async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await Comment.find({ postId });

    return sendResponse(res, "Comments retrieved successfully", 200, comments);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return sendError(res, "Internal server error!", 500);
  }
};

// Expand Parent Comment (assuming nested comment retrieval is required)
export const expandParentComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findById(commentId).populate("replies");

    if (!comment) {
      return sendError(res, "Comment not found", 404);
    }

    return sendResponse(res, "Comment retrieved successfully", 200, comment);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return sendError(res, "Internal server error!", 500);
  }
};
