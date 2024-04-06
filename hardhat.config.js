require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    xrpEVM: {
      url: "https://rpc-evm-sidechain.xrpl.org/",
      chainId: 1440002,
      accounts: [process.env.EVM_PRIVATE_KEY]
    }
  }
};
