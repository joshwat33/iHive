import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Contract,  BrowserProvider } from "ethers";
import { contractAddress } from "./deployed_addresses.json";
import { abi } from "./IHive.json";

function IdeaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Get location object to access state
  const account = location.state?.account; // Retrieve the account from state
  console.log("Account:", account);

  const handleSearch = async(e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    if (account) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const instance = new Contract(contractAddress, abi, signer);
    };

  };

  const handleSubmitIdea = () => {
    // Navigate to the submit page, passing the account along
    navigate("/submit", { state: { account } });
  };

  return (
    <div className="idea-page">
      {/* NavBar */}
      <nav className="navbar">
        <h1>Welcome {account ? `, ${account}` : ""}</h1>
      </nav>

      {/* Main Content */}
      <div className="main-actions">
        {/* Submit Idea Button */}
        <button onClick={handleSubmitIdea} className="submit-button">
          Submit Idea
        </button>

        {/* Fixed Search Bar with Search Button */}
        <div className="search-bar-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ideas..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default IdeaPage;
