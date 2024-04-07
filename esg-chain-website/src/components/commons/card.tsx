import React from 'react';

interface CardProps {
  name: string;
  symbol: string;
  score: number;
}

export default function Card({ name, symbol, score }: CardProps) {

    return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-800">{name || "Test"}</h3>
      <p className="text-xl text-center text-gray-600">{symbol || "Test"}</p>
      <div className="flex items-center justify-center mt-4">
        <p className="text-2xl text-center text-gray-800 mr-2">ESG Score:</p>
        <p className="text-2xl text-center text-green-500 font-bold">{Math.floor(Number(score) * 10/3)}%</p> {/* Change color based on score */}
      </div>
    </div>
  );
}
