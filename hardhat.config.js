require("@nomiclabs/hardhat-ethers");

const { mnemonic } = require('./secrets.json'); // Store sensitive info securely

module.exports = {
  solidity: "0.8.0",
  networks: {
    holesky: {
      url: "https://holesky-light.eth.linkpool.io/", // Replace with the actual Holesky RPC URL
      chainId: 17000, // Holesky's chain ID (verify the actual chain ID)
      accounts: { mnemonic: mnemonic },
    },
  },
};
