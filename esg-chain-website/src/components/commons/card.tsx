
export default function Card({ name, symbol, description, image, score }: { name: string, symbol: string, description: string, image: string, score: number }) {
    return (
        <div className="grid grid-cols-2 items-center justify-center bg-white rounded-lg shadow-lg p-8">
            <img src={image} alt={name} className=" w-32 h-32 rounded-full" />
            <h2 className="text-2xl font-bold mt-4">{name}</h2>
            <h4 className="text-lg font-bold mt-2">{symbol}</h4>
            <p className="text-lg text-center mt-2">{description}</p>
            <div className=" col-span-2 flex items-center justify-center mt-4">
                <p className="text-lg font-bold mr-2">{score}</p>
                <p className="text-lg">/ 100</p>
            </div>
        </div>
    );
}