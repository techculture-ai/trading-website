"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowUp, FaArrowDown, FaChevronRight } from "react-icons/fa";

interface Stock {
  id: number;
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  logo?: string;
}

const topGainers: Stock[] = [
  {
    id: 1,
    symbol: "CARTRADE",
    name: "CARTRADE TECH LTD",
    price: "₹3,085.10",
    change: "+485.20",
    changePercent: "+15.74",
    logo: "/logos/cartrade.png",
  },
  {
    id: 2,
    symbol: "TTKPRESTIG",
    name: "TTK PRESTIGE LTD",
    price: "₹739.00",
    change: "+105.50",
    changePercent: "+14.22",
    logo: "/logos/ttk.png",
  },
  {
    id: 3,
    symbol: "PRECWIRE",
    name: "PRECISION WIRES",
    price: "₹234.94",
    change: "+27.15",
    changePercent: "+11.49",
    logo: "/logos/precwire.png",
  },
  {
    id: 4,
    symbol: "RELIANCE",
    name: "RELIANCE INDUSTRIES",
    price: "₹2,456.80",
    change: "+245.30",
    changePercent: "+10.98",
    logo: "/logos/reliance.png",
  },
  {
    id: 5,
    symbol: "INFY",
    name: "INFOSYS LIMITED",
    price: "₹1,589.25",
    change: "+155.40",
    changePercent: "+9.78",
    logo: "/logos/infy.png",
  },
];

const topLosers: Stock[] = [
  {
    id: 1,
    symbol: "ADANIENT",
    name: "ADANI ENTERPRISES",
    price: "₹2,145.60",
    change: "-325.80",
    changePercent: "-13.18",
    logo: "/logos/adani.png",
  },
  {
    id: 2,
    symbol: "TATAMOTORS",
    name: "TATA MOTORS LTD",
    price: "₹685.45",
    change: "-89.25",
    changePercent: "-11.52",
    logo: "/logos/tata.png",
  },
  {
    id: 3,
    symbol: "VEDL",
    name: "VEDANTA LIMITED",
    price: "₹234.70",
    change: "-28.90",
    changePercent: "-10.96",
    logo: "/logos/vedl.png",
  },
  {
    id: 4,
    symbol: "COALINDIA",
    name: "COAL INDIA LTD",
    price: "₹389.50",
    change: "-45.30",
    changePercent: "-10.42",
    logo: "/logos/coal.png",
  },
  {
    id: 5,
    symbol: "SBIN",
    name: "STATE BANK OF INDIA",
    price: "₹578.90",
    change: "-62.15",
    changePercent: "-9.70",
    logo: "/logos/sbi.png",
  },
];

const TrendingStocks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gainers" | "losers">("gainers");

  const displayStocks = activeTab === "gainers" ? topGainers : topLosers;

  return (
    <section className="bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] py-16 lg:py-24">
      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
            What&apos;s Trending <span className="text-[#fbc40c]">Today</span>
          </h2>
          <p className="text-[#8E8E8E] text-base lg:text-lg">
            Track the market&apos;s biggest movers in real-time
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="inline-flex bg-[#ffffff0d] backdrop-blur-sm rounded-xl p-1 border border-[#ffffff1a]">
            <button
              onClick={() => setActiveTab("gainers")}
              className={`px-6 lg:px-10 py-3 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 ${
                activeTab === "gainers"
                  ? "bg-[#00D09C] text-white shadow-lg"
                  : "text-[#8E8E8E] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaArrowUp className="w-4 h-4" />
                Top Gainers
              </span>
            </button>
            <button
              onClick={() => setActiveTab("losers")}
              className={`px-6 lg:px-10 py-3 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 ${
                activeTab === "losers"
                  ? "bg-[#EF4B53] text-white shadow-lg"
                  : "text-[#8E8E8E] hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaArrowDown className="w-4 h-4" />
                Top Losers
              </span>
            </button>
          </div>
        </div>

        {/* Stock Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {displayStocks.map((stock, index) => (
            <div
              key={stock.id}
              className="group bg-gradient-to-br from-[#1A2B42]/80 to-[#0F1F35]/80 backdrop-blur-sm border border-[#ffffff1a] rounded-2xl p-5 hover:border-[#ffffff3a] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Rank Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeTab === "gainers"
                      ? "bg-[#00D09C]/20 text-[#00D09C]"
                      : "bg-[#EF4B53]/20 text-[#EF4B53]"
                  }`}
                >
                  #{index + 1}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaChevronRight className="w-4 h-4 text-[#fbc40c]" />
                </div>
              </div>

              {/* Stock Symbol */}
              <h3 className="text-white text-lg font-bold mb-1">
                {stock.symbol}
              </h3>

              {/* Company Name */}
              <p className="text-[#8E8E8E] text-xs mb-4 line-clamp-1">
                {stock.name}
              </p>

              {/* Price */}
              <div className="mb-3">
                <p className="text-white text-2xl font-bold">{stock.price}</p>
              </div>

              {/* Change Info */}
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center gap-1 text-sm font-semibold ${
                    activeTab === "gainers"
                      ? "text-[#00D09C]"
                      : "text-[#EF4B53]"
                  }`}
                >
                  {activeTab === "gainers" ? (
                    <FaArrowUp className="w-3 h-3" />
                  ) : (
                    <FaArrowDown className="w-3 h-3" />
                  )}
                  <span>{stock.changePercent}%</span>
                </div>
                <div
                  className={`text-xs font-medium ${
                    activeTab === "gainers"
                      ? "text-[#00D09C]"
                      : "text-[#EF4B53]"
                  }`}
                >
                  {stock.change}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-[#ffffff1a] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    activeTab === "gainers"
                      ? "bg-gradient-to-r from-[#00D09C] to-[#00E0AC]"
                      : "bg-gradient-to-r from-[#EF4B53] to-[#FF6B73]"
                  }`}
                  style={{
                    width: `${Math.min(
                      Math.abs(parseFloat(stock.changePercent)) * 6,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-[#ffffff33] hover:border-[#fbc40c] text-white hover:bg-[#fbc40c] rounded-lg font-medium transition-all duration-300 hover:scale-105">
            View All Market Movers
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrendingStocks;
