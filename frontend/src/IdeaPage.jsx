import React, { useState } from "react";

function IdeaPage({ account }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleSubmitIdea = () => {
    alert("Navigate to Submit Idea Form (Functionality to be added).");
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
