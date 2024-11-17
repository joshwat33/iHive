import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { BrowserProvider } from "ethers";
import "./App.css";
import IdeaPage from "./IdeaPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { contractAddress } from "./deployed_addresses.json"; // Update with your contract address
import { abi } from "./IHive.json"; // ABI of your IHive contract

function App() {
  const [account, setAccount] = useState(null); // Define account state
  const [isConnected, setIsConnected] = useState(false);
  const provider = new BrowserProvider(window.ethereum);
  async function connectWallet() {
    const signer = await provider.getSigner();
    const userAddress = await signer.getAddress();
    setAccount(userAddress); // Set account state with the user's address
    alert(`Successfully Connected ${signer.address}`);
    setIsConnected(true);
  }
  //render IdeaPage if connected
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
