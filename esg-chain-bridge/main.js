const Web3 = require('web3');
const xrpl = require('xrpl');

const ContractAddress = '0x1319E45F8D6ea3bbc1ddB295EBf264Bd66Ef2CC7';
const ContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "enterprise",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "esg_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "e1_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "e2_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "e3_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "s1_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "s2_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "s3_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "g1_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "g2_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "g1_score3_score",
				"type": "uint256"
			}
		],
		"name": "EnterpriseDataUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "enterprise",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "e1_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "e2_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "e3_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "s1_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "s2_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "s3_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "g1_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "g2_score",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "g3_score",
						"type": "uint256"
					}
				],
				"internalType": "struct ESGChain.EnterpriseInputData",
				"name": "inputData",
				"type": "tuple"
			}
		],
		"name": "addEnterpriseData",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "e1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g3",
				"type": "uint256"
			}
		],
		"name": "computeESGScore",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "e1_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "e2_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "e3_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "enterpriseData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "esg_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e3_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s3_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g1_score3_score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "enterpriseMetaData",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "g1_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "g2_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "g3_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "enterprise",
				"type": "address"
			}
		],
		"name": "isWhitelisted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "enterprises",
				"type": "address[]"
			},
			{
				"internalType": "bool[]",
				"name": "whitelisted",
				"type": "bool[]"
			}
		],
		"name": "manageEnterpriseWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s1_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s2_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s3_weight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "e1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "e3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "g3",
				"type": "uint256"
			}
		],
		"name": "setWeights",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "whitelistedEnterprises",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const web3 = new Web3('https://rpc-evm-sidechain.xrpl.org');
  
// Create an instance of the smart contract
const contract = new web3.eth.Contract(ContractABI, ContractAddress);

let latestBlockProcessed = null;

function getEventsFromLatestBlock() {
    // Get the latest block number
    web3.eth.getBlockNumber()
        .then((latestBlock) => {
            let fromBlock = latestBlockProcessed ? latestBlockProcessed + 1 : latestBlock;
            // Get the events from the latest block to the block where the contract was deployed
            contract.getPastEvents('allEvents', {
                fromBlock: fromBlock,
                toBlock: 'latest'
            })
            .then((events) => {
                console.log(events);

                // Mint
                const issuerAddress = 'rNbBusyjiJuYREyyMGqja2ekc7tugVmxLr';
                const issuerSecret = '518F735402AD83B9A458513DEEC17540E33A121DB044819019DF4FE03F8672B8';
                const metadata = {
                    name: 'ESG Score',
                    description: 'ESG Score of the Enterprise',
                    image: 'https://example.com/image.jpg'
                };
                mintNFT(issuerAddress, issuerSecret, metadata)

                latestBlockProcessed = latestBlock;
                getEventsFromLatestBlock(); // Call the function again to listen for new events
            })
            .catch((error) => {
                console.error(error);
                getEventsFromLatestBlock(); // Call the function again if there was an error
            });
        })
        .catch((error) => {
            console.error(error);
            getEventsFromLatestBlock(); // Call the function again if there was an error
        });
}

async function mintNFT(issuerAddress, issuerSecret, metadata) {
    const client = new xrpl.Client('wss://s.altnet.rippletest.net:51233');
  
    try {
      // Connect to the XRPL ledger
      await client.connect();
  
      // Construct the NFTokenMint transaction
      const transaction = {
        TransactionType: 'NFTokenMint',
        Account: issuerAddress,
        URI: 'data:application/json;base64,' + Buffer.from(JSON.stringify(metadata)).toString('base64'),
        Flags: 2147483648,
        NFTokenTaxon: 0
      };
  
      // Prepare and sign the transaction
      const preparedTransaction = await client.autofill(transaction);
      const signedTransaction = client.sign(preparedTransaction, issuerSecret);
  
      // Submit the transaction to the XRPL ledger
      const transactionResult = await client.submitAndWait(signedTransaction.tx_blob);
  
      console.log('Transaction result:', transactionResult);
  
      return transactionResult;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
      // Disconnect from the XRPL ledger
      client.disconnect();
    }
  }

getEventsFromLatestBlock(); // Start listening for events
