const { Wallet } = require('ethers')
const { Address } = require('ethereumjs-util')
const { bech32 } = require("bech32");

function toInjectiveAddress(privateKey) {
    const wallet = new Wallet(privateKey)
    const ethereumAddress = wallet.address
    const addressBuffer = Address.fromString(ethereumAddress.toString()).toBuffer()
    return bech32.encode('inj', bech32.toWords(addressBuffer))
}

module.exports = {
    toInjectiveAddress
}
