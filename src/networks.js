// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  },
  bitcoinPrivate: {
    messagePrefix: '\x19BitcoinPrivate Signed Message:\n',
    bech32: 'p',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1325,
    scriptHash: 0x13af,
    wif: 0x80,
    z: {
      addrBytes: 0x16a8,
      skBytes: 0xab36
    }
  },
  bitcoinPrivateTestnet: {
    messagePrefix: '\x19BitcoinPrivate Signed Message:\n',
    bech32: 't',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x1957,
    scriptHash: 0x19e0,
    wif: 0xef,
    z: {
      addrBytes: 0x16c0,
      skBytes: 0xac08
    }
  }
}
