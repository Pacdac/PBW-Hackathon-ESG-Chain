import Link from "next/link";
import WalletConnect from "./walletConnect";


export default function Header() {

    return (
        <header className="">
            <div className="container py-6 flex justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-800">ESGChain</Link>
                <div className="flex flex-row gap-12 items-center" >
                <Link href="/apply" className="text-xl font-medium text-gray-800">Send Data</Link>
             <WalletConnect />
                </div>
            </div>
        </header>
    );
}