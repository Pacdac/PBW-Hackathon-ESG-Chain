'use client';

import React, { useState } from 'react';
import { addESGScore, EnterpriseInputData } from '@/scripts/etherScripts';
import Header from '@/components/header/header';

const Page = () => {
    const [enterpriseName, setEnterpriseName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [cryptoAddress, setCryptoAddress] = useState('');
    const [socialField1, setSocialField1] = useState('');
    const [socialField2, setSocialField2] = useState('');
    const [socialField3, setSocialField3] = useState('');
    const [environmentalField1, setEnvironmentalField1] = useState('');
    const [environmentalField2, setEnvironmentalField2] = useState('');
    const [environmentalField3, setEnvironmentalField3] = useState('');
    const [governanceField1, setGovernanceField1] = useState('');
    const [governanceField2, setGovernanceField2] = useState('');
    const [governanceField3, setGovernanceField3] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission here
        const data: EnterpriseInputData = {
            address: cryptoAddress,
            name: enterpriseName,
            symbol,
            rawData: {
                e1_score: +environmentalField1,
                e2_score: +environmentalField2,
                e3_score: +environmentalField3,
                s1_score: +socialField1,
                s2_score: +socialField2,
                s3_score: +socialField3,
                g1_score: +governanceField1,
                g2_score: +governanceField2,
                g3_score: +governanceField3,
            },
        };

        addESGScore(data);
    };

    return (
        <>
            <Header />
            <div className="flex min-h-screen flex-col items-center justify-between py-24">
                <h1 className="text-4xl font-bold">Get your ESG score today</h1>
                <div className="bg-color-secondary p-4">
                    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
                        <label className="flex flex-col">
                            <span className="mb-2">Enterprise Name:</span>
                            <input
                                type="text"
                                value={enterpriseName}
                                onChange={(e) => setEnterpriseName(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Symbol:</span>
                            <input
                                type="number"
                                value={symbol}
                                onChange={(e) => setSymbol(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Crypto Address:</span>
                            <input
                                type="text"
                                value={cryptoAddress}
                                onChange={(e) => setCryptoAddress(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Social Field 1:</span>
                            <input
                                type="number"
                                value={socialField1}
                                onChange={(e) => setSocialField1(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Social Field 2:</span>
                            <input
                                type="text"
                                value={socialField2}
                                onChange={(e) => setSocialField2(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Social Field 3:</span>
                            <input
                                type="text"
                                value={socialField3}
                                onChange={(e) => setSocialField3(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Environmental Field 1:</span>
                            <input
                                type="text"
                                value={environmentalField1}
                                onChange={(e) => setEnvironmentalField1(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Environmental Field 2:</span>
                            <input
                                type="text"
                                value={environmentalField2}
                                onChange={(e) => setEnvironmentalField2(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Environmental Field 3:</span>
                            <input
                                type="text"
                                value={environmentalField3}
                                onChange={(e) => setEnvironmentalField3(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Governance Field 1:</span>
                            <input
                                type="text"
                                value={governanceField1}
                                onChange={(e) => setGovernanceField1(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Governance Field 2:</span>
                            <input
                                type="text"
                                value={governanceField2}
                                onChange={(e) => setGovernanceField2(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2">Governance Field 3:</span>
                            <input
                                type="text"
                                value={governanceField3}
                                onChange={(e) => setGovernanceField3(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Page;