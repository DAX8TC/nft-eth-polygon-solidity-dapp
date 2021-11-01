require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

const infuraProjectId = "2905ec92fefe4d968a08e115d3dd7159"
const metaMaskPrivateKey = fs.readFileSync(".secret").toString()
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      url: "https://polygon-mumbai.infura.io/v3/${infuraProjectId}",
      //url: "https://rpc-mumbai.matic.today",
      accounts: [metaMaskPrivateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/${infuraProjectId}",
      accounts: [metaMaskPrivateKey]
    }
    
    /*,
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    */
  },
  solidity: "0.8.4",
};




