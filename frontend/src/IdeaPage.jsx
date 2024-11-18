import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function IdeaPage({ account }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Import useNavigate

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleSubmitIdea = () => {
    // Navigate to the /submit route
    navigate("/submit");
  };

  return (
    <div className="idea-page">
      {/* NavBar */}
      <nav className="navbar">
        <h1>Welcome, {account}</h1>
      </nav>

      {/* Main Content */}
      <div className="main-actions">
        {/* Submit Idea Button */}
        <button onClick={handleSubmitIdea} className="submit-button">
          Submit Idea
        </button>

        {/* Stylish Search Bar */}
        <div
          className="search-bar-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {isHovered && (
            <button onClick={handleSearch}>
              Search
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default IdeaPage;
