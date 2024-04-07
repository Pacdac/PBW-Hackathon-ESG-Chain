'use client';

import StaticCards from "@/components/commons/staticCards";
import Header from "@/components/header/header";
import { MdOutlineElectricalServices } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import SeparatingLine from "@/components/commons/separatingLine";
import { BiNetworkChart } from "react-icons/bi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { GiDiscussion } from "react-icons/gi";
import Card from "@/components/commons/card";
import {fetchEventLogs} from "@/scripts/etherScripts";
import { EnterpriseInfo } from "@/scripts/etherScripts";
import { useState } from "react";

export default function Home() {
  const [enterpriseInfos, setEnterpriseInfos] = useState<EnterpriseInfo[]>([]);
  const fetchData = async () => {
    const infos = await fetchEventLogs();
    setEnterpriseInfos(infos);
  };

  const fakeTempEnterpriseInfos: EnterpriseInfo[] = [
    {
      name: "Test",
      symbol: "TST",
      enterprise: "0x",
      esg_score: 100,
      e1_score: 100,
      e2_score: 100,
      e3_score: 100,
      s1_score: 100,
      s2_score: 100,
      s3_score: 100,
      g1_score: 100,
      g2_score: 100,
      g3_score: 100,
    },
    {
      name: "IARD Solutions",
      symbol: "IARDS",
      enterprise: "0x",
      esg_score: 100,
      e1_score: 100,
      e2_score: 100,
      e3_score: 100,
      s1_score: 100,
      s2_score: 100,
      s3_score: 100,
      g1_score: 100,
      g2_score: 100,
      g3_score: 100,
    },
    {
      name: "Tesla",
      symbol: "TST",
      enterprise: "0x",
      esg_score: 100,
      e1_score: 100,
      e2_score: 100,
      e3_score: 100,
      s1_score: 100,
      s2_score: 100,
      s3_score: 100,
      g1_score: 100,
      g2_score: 100,
      g3_score: 100,
    },
    {
      name: "Amazon",
      symbol: "TST",
      enterprise: "0x",
      esg_score: 100,
      e1_score: 100,
      e2_score: 100,
      e3_score: 100,
      s1_score: 100,
      s2_score: 100,
      s3_score: 100,
      g1_score: 100,
      g2_score: 100,
      g3_score: 100,
    },
  ];

  fetchData();
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between py-24">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-start items-start px-20">
            <p className="text-5xl text-left">Native onchain ESG ratings for your xxx crypto project</p>
            <button className="flex items-center bg-tertiary-100 hover:bg-tertiary-200 text-black font-bold py-2 px-4 rounded mt-4">
              Get started
              <svg className="ml-3" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5971 1C14.5971 0.585787 14.2613 0.25 13.8471 0.25L7.09706 0.25C6.68285 0.25 6.34706 0.585786 6.34706 1C6.34706 1.41421 6.68285 1.75 7.09706 1.75L13.0971 1.75L13.0971 7.75C13.0971 8.16421 13.4328 8.5 13.8471 8.5C14.2613 8.5 14.5971 8.16421 14.5971 7.75L14.5971 1ZM1.53033 14.3774L14.3774 1.53033L13.3167 0.46967L0.46967 13.3167L1.53033 14.3774Z" fill="black" />
              </svg>
            </button>
            <p className="text-xl text-right mt-4 pl-60">Our rating is calculated with community driven criterias.</p>
          </div>
          <div className="flex justify-center items-center">
            <StaticCards />
          </div>
        </div>

        <div className="grid grid-flow-row gap-8 items-center justify-center mt-20 py-10 rounded-2xl bg-secondary w-5/6">
          <div className="text-left">
            <h2 className="text-4xl text-left font-bold">Criteria transparency</h2>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl text-left font-medium">Environmental</p>
            <div className="flex flex-row items-center">
              <FaRecycle className="text-5xl" />
              <MdOutlineElectricalServices className="text-5xl" />
            </div>
          </div>
          <SeparatingLine />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <BiNetworkChart className="text-5xl" />
              <FaBalanceScaleLeft className="text-5xl" />
            </div>
            <p className="text-3xl text-right font-medium">Social</p>
          </div>
          <SeparatingLine />
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl text-left font-medium">Governance</p>
            <div className="flex flex-row items-center">
              <TbReportAnalytics className="text-5xl" />
              <GiDiscussion className="text-5xl" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-20">
          <div className="flex flex-row items-center justify-between w-full">
            <h2 className="text-4xl font-bold text-center">Our Ratings</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-16">
          {fakeTempEnterpriseInfos.map((info, index) => (
            <Card key={index} name={info.name} symbol={info.symbol} score={info.esg_score} />
          ))}
        </div>

      </main>
    </>

  );
}
