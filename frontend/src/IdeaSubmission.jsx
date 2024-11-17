import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function IdeaSubmission() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Idea Submitted:", { title, description });
    
    // Reset the fields after submission
    setTitle("");
    setDescription("");
    
    // Navigate to the success page
    navigate("/success");
  };

  return (
    <div className="idea-submission-container">
      <h1>Submit Your Idea</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="ideaTitle">Idea Title</label>
          <input
            type="text"
            id="ideaTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="ideaDescription">Idea Description</label>
          <textarea
            id="ideaDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Idea</button>
      </form>
    </div>
  );
}

export default IdeaSubmission;
