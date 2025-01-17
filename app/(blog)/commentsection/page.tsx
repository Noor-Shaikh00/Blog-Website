"use client";

import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; comment: string; id: number }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to localStorage whenever the comments array changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (!name.trim() || !comment.trim()) return alert("Both fields are required!");

    const newComment = { name, comment, id: Date.now() };
    setComments([...comments, newComment]);

    // Clear input fields
    setName("");
    setComment("");
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter((c) => c.id !== id);
    setComments(updatedComments);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Comment Section</h2>
      {/* Input Fields */}
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your Comment"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <button
          onClick={handleAddComment}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-6 space-y-4">
        {comments.map(({ name, comment, id }) => (
          <div
            key={id}
            className="bg-white p-4 border rounded shadow flex justify-between items-start"
          >
            <div>
              <h3 className="font-bold">{name}</h3>
              <p>{comment}</p>
            </div>
            <button
              onClick={() => handleDeleteComment(id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
