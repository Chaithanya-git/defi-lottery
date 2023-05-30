require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

Goerli_RPC_URL = process.env.ALCHEMY_GOERLI_TESTNET_URL
Goerli_key = process.env.GOERLI_METAMSK_ACC1_PVTKEY
Sepolia_RPC_URL = process.env.ALCHEMY_SEPOLIA_TESTNET_URL
Sepolia_key = process.env.SEPOLIA_METAMSK_ACC1_PVTKEY
ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.18",
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
        player: {
            default: 1,
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: Goerli_RPC_URL,
            accounts: [Goerli_key],
            chainId: 5,
            blockConfirmations: 1,
        },
        sepolia: {
            url: Sepolia_RPC_URL,
            accounts: [Sepolia_key],
            chainId: 11155111,
            blockConfirmations: 1,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}
