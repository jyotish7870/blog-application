import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch comments for the current blog post
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/${postId}/comments`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:3000/api/v1/blog/${postId}/comments`,
        { content: newComment }
      );
      // Refresh comments after submitting
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>: {comment.content}
          </li>
        ))}
      </ul>
      <form onSubmit={submitComment}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
