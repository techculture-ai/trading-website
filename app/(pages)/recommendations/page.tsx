'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  FaChartLine,
  FaStar,
  FaFilter,
  FaRocket,
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaChevronDown,
  FaBolt
} from 'react-icons/fa';
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

interface Stock {
  id: number;
  company: string;
  symbol: string;
  potentialUpside: number;
  currentPrice: number;
  targetPrice: number;
  dayChange: number;
  weekChange: number;
  horizon: string;
  accuracy: number;
  recommendation: 'BUY' | 'SELL' | 'HOLD';
  sector: string;
  risk: 'Low' | 'Medium' | 'High';
}

const stocks: Stock[] = [
  {
    id: 1,
    company: 'Updater Services Limited',
    symbol: 'UPDATER',
    potentialUpside: 99.93,
    currentPrice: 231.08,
    targetPrice: 462.00,
    dayChange: -1.10,
    weekChange: -1.27,
    horizon: '3 months',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Technology',
    risk: 'Medium',
  },
  {
    id: 2,
    company: 'H.G.Infra Engineering Ltd',
    symbol: 'HGINFRA',
    potentialUpside: 98.65,
    currentPrice: 906.10,
    targetPrice: 1800.00,
    dayChange: -0.39,
    weekChange: -0.67,
    horizon: '6 months',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Infrastructure',
    risk: 'Low',
  },
  {
    id: 3,
    company: 'D. P. Abhushan Limited',
    symbol: 'DPABHUSHAN',
    potentialUpside: 20.04,
    currentPrice: 1516.10,
    targetPrice: 1820.00,
    dayChange: 2.81,
    weekChange: 10.13,
    horizon: '1 month',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Retail',
    risk: 'High',
  },
  {
    id: 4,
    company: 'Aditya Vision Limited',
    symbol: 'ADITYAVISION',
    potentialUpside: 8.35,
    currentPrice: 574.05,
    targetPrice: 622.00,
    dayChange: -3.63,
    weekChange: 0.61,
    horizon: '2 months',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Retail',
    risk: 'Medium',
  },
  {
    id: 5,
    company: 'Goodluck India Limited',
    symbol: 'GOODLUCK',
    potentialUpside: -3.00,
    currentPrice: 412.50,
    targetPrice: 400.00,
    dayChange: -2.97,
    weekChange: -5.05,
    horizon: '1 month',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Manufacturing',
    risk: 'High',
  },
  {
    id: 6,
    company: 'Justdial Ltd.',
    symbol: 'JUSTDIAL',
    potentialUpside: 47.19,
    currentPrice: 825.30,
    targetPrice: 1215.00,
    dayChange: -0.83,
    weekChange: -4.39,
    horizon: '6 months',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Technology',
    risk: 'Low',
  },
  {
    id: 7,
    company: 'Aditya Birla Real Est Ltd',
    symbol: 'ADITYA',
    potentialUpside: 46.89,
    currentPrice: 1125.00,
    targetPrice: 1652.50,
    dayChange: -0.90,
    weekChange: -8.60,
    horizon: '4 months',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'Real Estate',
    risk: 'Medium',
  },
  {
    id: 8,
    company: 'Balrampur Chini Mills Ltd',
    symbol: 'BALRAMCHIN',
    potentialUpside: 46.29,
    currentPrice: 425.80,
    targetPrice: 623.00,
    dayChange: -2.57,
    weekChange: -4.30,
    horizon: '5 months',
    accuracy: 63.0,
    recommendation: 'BUY',
    sector: 'FMCG',
    risk: 'Low',
  },
];

const RecommendationsPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<'upside' | 'price' | 'change'>('upside');
  const [filterSector, setFilterSector] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const sectors = ['all', ...Array.from(new Set(stocks.map(s => s.sector)))];

  const filteredStocks = stocks
    .filter(stock => filterSector === 'all' || stock.sector === filterSector)
    .sort((a, b) => {
      if (sortBy === 'upside') return b.potentialUpside - a.potentialUpside;
      if (sortBy === 'price') return b.currentPrice - a.currentPrice;
      return b.weekChange - a.weekChange;
    });

  const getRiskColor = (risk: string) => {
    if (risk === 'Low') return 'bg-green-100 text-green-700';
    if (risk === 'Medium') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  const getUpsideColor = (upside: number) => {
    if (upside >= 50) return 'text-green-600';
    if (upside >= 20) return 'text-blue-600';
    if (upside >= 0) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-20 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        <div className="absolute top-20 right-10 w-96 h-96 bg-[#EF9309]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EF9309]/10 backdrop-blur-sm border border-[#EF9309]/20 rounded-full px-4 py-2 mb-6">
              <FaStar className="w-4 h-4 text-[#EF9309]" />
              <span className="text-sm font-semibold text-[#EF9309]">
                Expert Recommendations
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Stock{" "}
              <span className="bg-gradient-to-r from-[#EF9309] to-[#D68108] bg-clip-text text-transparent">
                Recommendations
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-[#DADADA] leading-relaxed">
              Expert-curated stock picks with detailed analysis and price
              targets. Make informed investment decisions backed by research.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sort Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <FaFilter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-dark">
                  Filters
                </span>
                <FaChevronDown
                  className={`w-3 h-3 text-gray-600 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showFilters && (
                <div className="flex items-center gap-2">
                  <select
                    value={filterSector}
                    onChange={(e) => setFilterSector(e.target.value)}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#EF9309] focus:outline-none text-sm"
                  >
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector === "all" ? "All Sectors" : sector}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[#666]">Sort by:</span>
              {[
                { value: "upside", label: "Upside %" },
                { value: "price", label: "Price" },
                { value: "change", label: "7D Change" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    sortBy === option.value
                      ? "bg-[#EF9309] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stock Cards Grid */}
      <section className="py-12">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStocks.map((stock, index) => (
              <div
                key={stock.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#EF9309] overflow-hidden"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`text-3xl font-bold ${getUpsideColor(
                        stock.potentialUpside
                      )}`}
                    >
                      {stock.potentialUpside > 0 ? "+" : ""}
                      {stock.potentialUpside.toFixed(2)}%
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${getRiskColor(
                        stock.risk
                      )}`}
                    >
                      {stock.risk} Risk
                    </div>
                  </div>
                  <p className="text-xs text-[#666] font-semibold">
                    Potential Upside
                  </p>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Company Name */}
                  <h3 className="text-base font-bold text-gray-dark mb-1 group-hover:text-[#EF9309] transition-colors line-clamp-2">
                    {stock.company}
                  </h3>
                  <p className="text-xs text-[#666] mb-4">{stock.symbol}</p>

                  {/* Price Info */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-xs text-[#666] mb-1">Current</p>
                      <p className="text-lg font-bold text-gray-dark">
                        ₹{stock.currentPrice.toFixed(2)}
                      </p>
                    </div>
                    <FaArrowRight className="w-4 h-4 text-[#EF9309]" />
                    <div className="text-right">
                      <p className="text-xs text-[#666] mb-1">Target</p>
                      <p className="text-lg font-bold text-green-600">
                        ₹{stock.targetPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Change Indicators */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      {stock.dayChange >= 0 ? (
                        <HiTrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <HiTrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <div>
                        <p className="text-xs text-[#666]">1D</p>
                        <p
                          className={`text-sm font-bold ${
                            stock.dayChange >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stock.dayChange > 0 ? "+" : ""}
                          {stock.dayChange}%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {stock.weekChange >= 0 ? (
                        <HiTrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <HiTrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <div>
                        <p className="text-xs text-[#666]">7D</p>
                        <p
                          className={`text-sm font-bold ${
                            stock.weekChange >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stock.weekChange > 0 ? "+" : ""}
                          {stock.weekChange}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Horizon & Sector */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full">
                      <FaClock className="w-3 h-3 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600">
                        {stock.horizon}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-purple-50 rounded-full">
                      <span className="text-xs font-semibold text-purple-600">
                        {stock.sector}
                      </span>
                    </div>
                  </div>

                  {/* Recommendation Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md">
                      <FaBolt className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">
                        {stock.recommendation}
                      </span>
                    </div>
                  </div>

                  {/* Accuracy */}
                  <div className="flex items-center justify-between p-3 bg-[#EF9309]/5 rounded-lg border border-[#EF9309]/20 mb-4">
                    <span className="text-xs text-[#666]">Past accuracy</span>
                    <span className="text-sm font-bold text-[#EF9309]">
                      {stock.accuracy}%
                    </span>
                  </div>

                  {/* Explore Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-105">
                    Explore
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-yellow-200">
            <FaCheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <h4 className="text-lg font-bold text-gray-dark mb-2">
                Important Disclaimer
              </h4>
              <p className="text-sm text-[#666] leading-relaxed">
                These stock recommendations are based on research and analysis.
                Past performance is not indicative of future results. Please do
                your own research and consult with a financial advisor before
                making investment decisions. Investments in securities are
                subject to market risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929]">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-lg text-[#DADADA] mb-8">
            Open your free demat account and access exclusive stock
            recommendations.
          </p>
          <a
            href="/open-demat-account/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Open Free Account
            <FaRocket className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RecommendationsPage;