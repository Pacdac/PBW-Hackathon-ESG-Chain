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
            <div className="flex min-h-screen flex-col items-center justify-between py-24 bg-gray-100">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Send Data</h1>
                <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
                        <label className="flex flex-col">
                            <span className="mb-2 text-gray-700">Enterprise Name:</span>
                            <input
                                type="text"
                                value={enterpriseName}
                                onChange={(e) => setEnterpriseName(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2 text-gray-700">Ticker:</span>
                            <input
                                type="text"
                                value={symbol}
                                onChange={(e) => setSymbol(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="mb-2 text-gray-700">Crypto Address:</span>
                            <input
                                type="text"
                                value={cryptoAddress}
                                onChange={(e) => setCryptoAddress(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            />
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Employee Turnover score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={socialField1}
                                onChange={(e) => setSocialField1(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{socialField1}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Employee Safety score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={socialField2}
                                onChange={(e) => setSocialField2(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{socialField2}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Community Engagement score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={socialField3}
                                onChange={(e) => setSocialField3(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{socialField3}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Carbon Emissions score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={environmentalField1}
                                onChange={(e) => setEnvironmentalField1(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{environmentalField1}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Energy Efficiency score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={environmentalField2}
                                onChange={(e) => setEnvironmentalField2(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{environmentalField2}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Waste Management score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={environmentalField3}
                                onChange={(e) => setEnvironmentalField3(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{environmentalField3}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Board Diversity score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={governanceField1}
                                onChange={(e) => setGovernanceField1(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{governanceField1}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Executive Compensation score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={governanceField2}
                                onChange={(e) => setGovernanceField2(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{governanceField2}</span>
                        </label>
                        <label className="flex flex-col items-start">
                            <span className="mb-2 text-gray-700">Transparency score:</span>
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={governanceField3}
                                onChange={(e) => setGovernanceField3(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                            <span className="ml-2 text-gray-700">{governanceField3}</span>
                        </label>
                        <button type="submit" className="bg-tertiary-100 hover:bg-tertiary-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Page;