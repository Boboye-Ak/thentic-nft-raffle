//A raffle that creates an NFT contract, mints an NFT and gives it to a random address among an array of contestants

const axios = require("axios")
const { createContract } = require("./createContract")
const { delay, THENTIC_API_KEY, chainId } = require("../helper")
const { mintNFT, getContractAddress } = require("./mintNFT")
const { showNFTData } = require("./showNFTdata")

const main = async () => {
    //Create contract 
    //await createContract() (Commented out because contract is  created earlier)
    const address = await getContractAddress()
    console.log(`contract address is ${address}`)
    const winner = await mintNFT()
    await delay(300 * 1000)
    await showNFTData()
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
