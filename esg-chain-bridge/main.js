const Web3 = require('web3');

const ContractAddress = '0x49D61ac3d67E73e02F5a1C6220986F4CdcBEaC32';
const ContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "enterprise",
				"type": "address"
			}
		],
		"name": "addWhitelistedEnterprise",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"name": "E1_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "E2_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "E3_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "S1_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "S2_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "S3_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "G1_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "G2_score",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "G3_score",
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
			}
		],
		"name": "removeWhitelistedEnterprise",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "E1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "E2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "E3_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S3_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G3_score",
				"type": "uint256"
			}
		],
		"name": "setEnterpriseData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "E1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "E2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "E3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G3",
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
				"name": "enterprise",
				"type": "address"
			}
		],
		"name": "calculateESGScore",
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
		"name": "E1_weight",
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
		"name": "E2_weight",
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
		"name": "E3_weight",
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
			}
		],
		"name": "enterpriseData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "E1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "E2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "E3_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "S3_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G1_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G2_score",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "G3_score",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "G1_weight",
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
		"name": "G2_weight",
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
		"name": "G3_weight",
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
		"name": "S1_weight",
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
		"name": "S2_weight",
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
		"name": "S3_weight",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "whitelistedEnterprises",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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

getEventsFromLatestBlock(); // Start listening for events