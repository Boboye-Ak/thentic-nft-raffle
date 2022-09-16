const { default: axios } = require("axios")
const { THENTIC_API_KEY, chainId } = require("../helper")

const showNFTData = async () => {
    const res = await axios.get(
        `https://thentic.tech/api/nfts?key=${THENTIC_API_KEY}&chain_id=${chainId}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    console.log(`nft data:`)
    console.log(res.data)
}

const main = async () => {
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

module.exports = { showNFTData }
