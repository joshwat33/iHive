import React, { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import IdeaPage from "./IdeaPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  


  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Function to connect MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setIsConnected(true);
        alert(`Connected: ${userAddress}`);
      } catch (error) {
        console.error("Connection error:", error);
        alert("Failed to connect. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  // Render IdeaPage if connected
  return (

    <div className="app-container">
      {isConnected ? (
        <IdeaPage account={account} />
      ) : (
        <button className="wallet-button" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;
