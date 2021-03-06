require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        path: "m/44'/52752'/0'/0"
      },
    }
  },
  solidity: "0.8.6",
};

//  module.exports = {
//   solidity: {
//     "version": "0.8.6",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }  
//     }  
//   }, 
//   networks: {
//     Alfajores_TestNet: {
//       url: "https://alfajores-forno.celo-testnet.org",
//       chainId: 44787,
//       accounts: process.env.PRIVATE_KEY // viene de la configuración de la billetera
//      }
//   }  
// };

 /*
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};
*/

