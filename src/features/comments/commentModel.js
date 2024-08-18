import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
    parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    text: { type: String, required: true },
    liked: { type: Number, default: 0 },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);


export default Comment;
