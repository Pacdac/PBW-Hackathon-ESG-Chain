// Card componnents, should include a name, symbol, small logo and a score.

import Image from "next/image";

interface CardProps {
    name: string;
    symbol: string;
    score: number;
}

export default function Card({ name, symbol, score }: CardProps) {
    return (
        <div className="flex flex-col p-4 bg-tertiary-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-left mt-4">{name ? name : "Test"}</h3>
            <p className="text-xl text-center">{symbol ? symbol : "Test"}</p>
            <p className="text-2xl text-center mt-4">ESG Score: {score}</p>
        </div>
    );
}