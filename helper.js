require("dotenv").config()
const delay = (ms) => new Promise((res) => setTimeout(res, ms))
const THENTIC_API_KEY = process.env.THENTIC_API_KEY

const chainId = 97
module.exports = { delay, THENTIC_API_KEY, chainId }
