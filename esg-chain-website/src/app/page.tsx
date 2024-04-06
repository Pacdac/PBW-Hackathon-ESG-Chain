import Image from "next/image";
import Card from "@/components/commons/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center mb-2">ESG Chain</h1>
        <p className="text-3xl text-center">Native onchain ESG ratings for your xxx crypto project</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <Card name="Bitcoin" symbol="BTC" description="The first project" image="/bitcoin.png" score={80} />
        <Card name="Ethereum" symbol="ETH" description="The second project" image="/ethereum.png" score={70} />
        <Card name="Cardano" symbol="ADA" description="The third project" image="/cardano.png" score={60} />
      </div>

      {/*Roadmap*/}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-4xl font-bold text-center mb-2">Roadmap</h2>
        <p className="text-2xl text-center">Our plan to make ESG Chain the best ESG rating platform</p>
        
      </div>
    </main>
  );
}
