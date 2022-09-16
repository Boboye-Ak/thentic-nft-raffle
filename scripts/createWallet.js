const { default: axios } = require("axios")
const { THENTIC_API_KEY } = require("../helper")

const main = async () => {
    const res = await axios.post(
        "https://thentic.tech/api/wallets/new",
        { key: THENTIC_API_KEY },
        { headers: { "content-type": "application/json" } }
    )
    console.log(res.data)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
