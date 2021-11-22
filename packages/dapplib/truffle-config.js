require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet recipe situate common include argue swift gaze'; 
let testAccounts = [
"0x1423191fcd2925655c524a612e9a049a936f2d59f37ded330322c2bd38d0b507",
"0xc6a2a4741d74c75ac168ab471d8525fe591bd0a2687374b3fb02e1ca10779f82",
"0xa148a68f02514596b7ff643bddaa423155fae00d87f986c4ed5a90240fd56d04",
"0x7a8fb9cdfc75eff02780c93a857eadcad1a83526f54bea7c5356bffa0db88162",
"0x30ebbf92c90c8f5e65ee303cd8ad73a5811e115558c4bfc3435868300552ecf3",
"0x1431afd87aef69313a8b9e076a03355a9591305517a9973b89b4e81fce1cdd0c",
"0x29c1f3e0ee4beda5ff5564419feb754e7a611072ac30e0b13f9266b838e90171",
"0x37ce013a6d790b7ee0ee839224840704b1bb2cc9cce838e9520befefedae7ec8",
"0x5f88f76fbb4aec46a63f216444a814aff9d7f4198c7247c3ada1b3ad15f62734",
"0xf4846069fe24a6718a69c8e8fda1a517003d09a9868e4d606c0fd5e1c568d363"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

