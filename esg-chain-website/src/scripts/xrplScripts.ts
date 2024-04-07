import { nftAddressXRPL } from '@/data/constants';
const xrpl = require("xrpl")
const WS_URL_lockingchain = 'wss://s.devnet.rippletest.net:51233/' // Locking chain

export async function fetchNFTs() {
    const xrplClient = new xrpl.Client(WS_URL_lockingchain);
    await xrplClient.connect();

    const nfts = await xrplClient.request({
        "command": "account_nfts",
        "account": nftAddressXRPL,
        "ledger_index": "validated"
      })
    await xrplClient.disconnect();
}