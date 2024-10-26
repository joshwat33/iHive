// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IHive {
    struct Idea {
        address creator;
        string contentHash; // Use a hash to store/check unique ideas
        uint256 timestamp;
    }

    mapping(bytes32 => Idea) public ideas;

    event IdeaSubmitted(address indexed creator, string contentHash, uint256 timestamp);
    event IdeaExists(string contentHash);

    // Function to submit an idea
    function submitIdea(string memory contentHash) public payable {
        // Create a hash of the idea content
        bytes32 ideaHash = keccak256(abi.encodePacked(contentHash));
        
        // Check if the idea already exists
        require(ideas[ideaHash].creator == address(0), "Similar idea exists");

        // Add the new idea
        ideas[ideaHash] = Idea(msg.sender, contentHash, block.timestamp);

        // Emit event for submission
        emit IdeaSubmitted(msg.sender, contentHash, block.timestamp);
    }

    // Optional: Function to check if an idea exists
    function ideaExists(string memory contentHash) public view returns (bool) {
        bytes32 ideaHash = keccak256(abi.encodePacked(contentHash));
        return ideas[ideaHash].creator != address(0);
    }
}
