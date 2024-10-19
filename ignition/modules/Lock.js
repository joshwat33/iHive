// ideapat.js


const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("IHiveModule", (m) => {
  // Deploy the IHive contract without constructor parameters
  const iHive = m.contract("IHive");

  return { iHive };
});
