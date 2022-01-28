require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift response ridge exchange hover entire army gauge'; 
let testAccounts = [
"0x71c4208730ec9a1e2e4990b294d9e9f9f4fd5bfbb7a68547cbee1fb29ba6bf27",
"0x081f0b83585af800e507d84eafbe8abb77d3d345afbd0a9d5dcaff443b9d2b8a",
"0xc4be31dd6c92612a5ce22fbc2fa6146b376880d74d9ecf1a47a911378f5e2f72",
"0xb8fbaf84e25022146027cb35dffda66d8f92d200e6dbdd7429f90c12ac9b7207",
"0xdb1b272878165d123b844a269d1f536c540826925198aefd92448885e78d9080",
"0xefda6178575fcf0713b8ab3da54eef199d4280a15687c293654a97e2d5e05e9e",
"0x7f30a53bb358f9926375831df73e0f8e6b3b7236cbcd4ee960c49c835498f91c",
"0x895752b0cd6e697b579ed5f5859fe6600c6541b57276175b046568a6bba209c9",
"0x1f11a59dc21460231ea976966e71a695efb223e9cbd7d482c408a8e1b5bfec83",
"0xca6d1c119ea48a1673be5c6a1a5f096cc738b5959f33117de1400e61667eeafa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

