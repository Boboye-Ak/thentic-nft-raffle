const { default: axios } = require("axios")
const { THENTIC_API_KEY, chainId } = require("../helper")
const { CONTESTANTS } = require("../constants/contestants")
const fs = require("fs")
const LATESTTOKENIDFILE = "./constants/latestTokenId.json"

const getContractAddress = async () => {
    let res = await axios.get(
        `https://thentic.tech/api/contracts?key=${THENTIC_API_KEY}&chain_id=${chainId}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    const contracts = res.data.contracts
    return contracts[0].contract
}

const mintNFT = async () => {
    //Get Contract Address
    const contractAddress = await getContractAddress()
    //Pick Random winner among the contestants
    const winner = CONTESTANTS[Math.floor(Math.random() * (CONTESTANTS.length - 0) + 0)]
    let latestTokenId = JSON.parse(fs.readFileSync(LATESTTOKENIDFILE, "utf-8"))
    //set next token ID
    const newTokenId = parseInt(latestTokenId.latest) + 1
    console.log(`winner is ${winner}`)
    const res = await axios.post(
        "https://thentic.tech/api/nfts/mint",
        {
            key: THENTIC_API_KEY,
            chain_id: chainId,
            contract: contractAddress,
            nft_id: newTokenId,
            nft_data:
                '{"name": "A cute NFT","description": "An Incredibly cute NFT","image": "https://ipfs.io/ipfs/bafybeifbjdfxajuxrqkvmzp3urjgjiwxfecpgmjs5c4efrk2vtgkc4eq7a/blob", }',
            to: winner,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    if (res.status == 200) {
        console.log(
            `Minting NFT to winner wallet ${winner}...It will appear in their wallets in a few hours.`
        )
        latestTokenId = { latest: newTokenId }
        fs.writeFileSync(LATESTTOKENIDFILE, JSON.stringify(latestTokenId))

        return winner
    }
}

module.exports = { mintNFT, getContractAddress }
