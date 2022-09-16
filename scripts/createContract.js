const { default: axios } = require("axios")
const { THENTIC_API_KEY, chainId } = require("../helper")

const createContract = async () => {
    //create contract
    const res = await axios.post(
        "https://thentic.tech/api/nfts/contract",
        {
            key: THENTIC_API_KEY,
            name: "Boboye NFT Collection",
            short_name: "BOB",
            chain_id: chainId,
        },
        { headers: { "Content-Type": "application/json" } }
    )
    console.log(`Contract creation response: ${res.data}`)
    console.log("creating NFT contract...")
}

module.exports = { createContract }
