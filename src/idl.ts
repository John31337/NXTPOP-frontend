export const EscrowIdl = {
    "version": "0.0.0",
    "name": "escrow",
    "instructions": [
      {
        "name": "list",
        "accounts": [
          {
            "name": "initializer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "initializerTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "mintKey",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "escrowAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "initializerAmount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "cancel",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "pdaTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "pdaAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "escrowAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "buy",
        "accounts": [
          {
            "name": "buyer",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "pdaDepositTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "initializerMainAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "escrowAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "pdaAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "EscrowAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "name": "tokenAccountPubkey",
              "type": "publicKey"
            },
            {
              "name": "mintKey",
              "type": "publicKey"
            },
            {
              "name": "seller",
              "type": "publicKey"
            },
            {
              "name": "amount",
              "type": "u64"
            }
          ]
        }
      }
    ],
    "metadata": {
      "address": "Ei6ZoGTRyYMcm4aWLfvdFCUUw76qtPLgJ9QkSpP9hHAe"
    }
  }