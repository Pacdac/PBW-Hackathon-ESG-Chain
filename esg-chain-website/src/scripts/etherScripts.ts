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

interface EnterpriseInfo extends EnterpriseMetaData, EventLogData { }

async function getEnterpriseMetaData(contract: ethers.Contract, enterpriseAddress: string): Promise<EnterpriseMetaData> {
    const enterpriseMetaData = await contract.enterpriseMetaData(enterpriseAddress);
    return { name: enterpriseMetaData.name, symbol: enterpriseMetaData.symbol };
}

async function processEventLog(log: ethers.EventLog, contract: ethers.Contract): Promise<EnterpriseInfo> {
    const enterpriseAddress = log.args.enterprise;

    const metaData = await getEnterpriseMetaData(contract, enterpriseAddress);
    const eventData: EventLogData = {
        enterprise: enterpriseAddress,
        esg_score: log.args.esg_score,
        e1_score: log.args.e1_score,
        e2_score: log.args.e2_score,
        e3_score: log.args.e3_score,
        s1_score: log.args.s1_score,
        s2_score: log.args.s2_score,
        s3_score: log.args.s3_score,
        g1_score: log.args.g1_score,
        g2_score: log.args.g2_score,
        g3_score: log.args.g3_score,
    };

    return { ...metaData, ...eventData };
}

async function fetchEventLogs(): Promise<EnterpriseInfo[]> {
    const provider = new ethers.JsonRpcProvider(rpcURL);
    const contract = new ethers.Contract(contractAddressEVM, abi, provider);
    const blockNumber = await provider.getBlockNumber();
    const events = await contract.queryFilter("EnterpriseDataUpdated", blockNumber - 9900, 'latest') as ethers.EventLog[];
    const enterpriseInfos = await Promise.all(events.map((event) => processEventLog(event, contract)));

    return enterpriseInfos;
}

export default fetchEventLogs;
