import React, { useState } from "react";
import { BrowserProvider } from "ethers";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate(); // Import useNavigate

  // Function to connect MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        setIsConnected(true);
        console.log("Connected:", userAddress);
        alert(`Connected: ${userAddress}`);
        
        // Navigate to the /idea route and pass the account
        navigate("/idea", { state: { account: userAddress } });
      } catch (error) {
        console.error("Connection error:", error);
        alert("Failed to connect. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  return (
    <div className="app-container">
      <button className="wallet-button" onClick={connectWallet}>
        {isConnected ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
}

export default App;