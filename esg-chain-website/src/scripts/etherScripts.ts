import { rpcURL, contractAddressEVM } from "@/data/constants";
import { ethers } from "ethers";
import abi from "@/data/contractABI.json";

interface EnterpriseMetaData {
  name: string;
  symbol: string;
}

interface EventLogData {
  enterprise: string;
  esg_score: number;
  e1_score: number;
  e2_score: number;
  e3_score: number;
  s1_score: number;
  s2_score: number;
  s3_score: number;
  g1_score: number;
  g2_score: number;
  g3_score: number;
}

const enterpriseDataUpdatedEvent = new ethers.Interface([
  'event EnterpriseDataUpdated(address indexed enterprise, uint256 esg_score, uint256 e1_score, uint256 e2_score, uint256 e3_score, uint256 s1_score, uint256 s2_score, uint256 s3_score, uint256 g1_score, uint256 g2_score, uint256 g3_score)',
]).getEvent('EnterpriseDataUpdated');

async function getEnterpriseMetaData(provider: ethers.JsonRpcProvider, contract: ethers.Contract, enterpriseAddress: string): Promise<EnterpriseMetaData> {
  const enterpriseMetaData = await contract.enterpriseMetaData(enterpriseAddress);
  return { name: enterpriseMetaData.name, symbol: enterpriseMetaData.symbol };
}

function processEventLog(log: ethers.EventLog, contract: ethers.Contract): void {

  const enterpriseAddress = log.args.enterprise;
  const provider = new ethers.JsonRpcProvider(rpcURL);

  // Get the name and symbol from the contract enterpriseMetaData mapping using the enterprise address
  getEnterpriseMetaData(provider, contract, enterpriseAddress)
    .then((metaData) => {
      console.log(`Enterprise: ${metaData.name} (${metaData.symbol})`);
      console.log(`ESG Score: ${log.args.esg_score}`);
      // Add other scores here if needed
    })
    .catch((error) => console.error(error));

  // Build a curve of the esg_score over time, using the timestamp of each event
  // You can store the data in an object or array for further processing
}

async function fetchEventLogs(): Promise<void> {
  const provider = new ethers.JsonRpcProvider(rpcURL);
  const contract = new ethers.Contract(contractAddressEVM, abi, provider);

  const events = await contract.queryFilter("EnterpriseDataUpdated", 0, 'latest') as ethers.EventLog[];
  events.forEach((event) => processEventLog(event, contract));
}

export default fetchEventLogs;
