'use client';

import { useState, useEffect, useRef } from "react";
import Button from "../commons/Button";
import { ethers } from "ethers";

declare global {
    interface Window {
        //TODO: Add correct type
        ethereum?: any;
    }
}

export default function WalletConnect() {
    const [walletAddress, setWalletAddress] = useState<string>("");
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [showDisconnectModal, setShowDisconnectModal] = useState<boolean>(false);
    const disconnectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (showDisconnectModal && disconnectRef.current && !disconnectRef.current.contains(event.target as Node)) {
            setShowDisconnectModal(false);
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [showDisconnectModal]);

      async function connectWallet() {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            setWalletAddress(address);
            setSigner(signer);
        } catch (error) {
            console.error(error);
        }
    }

    function disconnectWallet() {
        setWalletAddress("");
        setShowDisconnectModal(false);
    }

    return (
        <div>
            <Button onClick={() => { walletAddress ? setShowDisconnectModal(true) : connectWallet() }} className="">
                {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                    : 'Connect Wallet'}
            </Button>
            {showDisconnectModal && (
                <div ref={disconnectRef} className="absolute shadow-md rounded-md py-4 px-6 z-10">
                    <Button onClick={disconnectWallet} className="bg-gray-500 text-white">Disconnect</Button>
                </div>
            )}
        </div>
    )
}