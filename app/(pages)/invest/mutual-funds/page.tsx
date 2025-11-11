"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaChartLine,
  FaStar,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaWallet,
  FaUsers,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

interface FundManager {
  id: number;
  name: string;
  image: string;
  experience: string;
  fundsManaged: number;
  totalAUM: string;
}

interface PopularFund {
  id: number;
  name: string;
  category: string;
  returns: string;
  rating: number;
  logo: string;
}

const fundManagers: FundManager[] = [
  {
    id: 1,
    name: "Harsha Upadhyaya",
    image: "/managers/harsha.jpg",
    experience: "27 yrs of experience",
    fundsManaged: 5,
    totalAUM: "₹65,573 Cr",
  },
  {
    id: 2,
    name: "Sankaran Naren",
    image: "/managers/sankaran.jpg",
    experience: "26 yrs of experience",
    fundsManaged: 15,
    totalAUM: "₹1,80,866 Cr",
  },
  {
    id: 3,
    name: "Chirag Setalvad",
    image: "/managers/chirag.jpg",
    experience: "25 yrs of experience",
    fundsManaged: 3,
    totalAUM: "₹94,886 Cr",
  },
];

const popularFunds: PopularFund[] = [
  {
    id: 1,
    name: "Motilal Oswal ELSS Tax Saver Fund Direct Growth",
    category: "Equity Tax-Saving",
    returns: "26.14%",
    rating: 5,
    logo: "/funds/motilal.png",
  },
  {
    id: 2,
    name: "SBI ELSS Tax Saver Fund Direct Growth",
    category: "Equity Tax-Saving",
    returns: "24.29%",
    rating: 5,
    logo: "/funds/sbi.png",
  },
  {
    id: 3,
    name: "ITI ELSS Tax Saver Fund Direct Growth",
    category: "Equity Tax-Saving",
    returns: "22.9%",
    rating: 4,
    logo: "/funds/iti.png",
  },
];

const benefits = [
  {
    id: 1,
    icon: <FaLayerGroup className="w-6 h-6" />,
    title: "Diversification",
    description: "Diversify your investments and reduce risk.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 2,
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: "Regulated",
    description: "Invest in reliable, credible and transparent funds.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    icon: <FaWallet className="w-6 h-6" />,
    title: "Affordable",
    description: "Start small and invest more over time.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    icon: <HiTrendingUp className="w-6 h-6" />,
    title: "Highly Liquid",
    description: "Get instant liquidity for buying and selling.",
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 5,
    icon: <FaUsers className="w-6 h-6" />,
    title: "Expert Management",
    description: "Experts can help you grow your wealth.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

const categories = ["Tax Savings", "Large Cap", "Mid Cap", "Small Cap", "Debt"];

const MutualFundsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Tax Savings");
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [period, setPeriod] = useState("1Y");

  const calculateReturns = () => {
    const rate = 0.1311; // 13.11%
    const years = period === "1Y" ? 1 : period === "3Y" ? 3 : 5;
    const months = years * 12;
    const futureValue =
      investmentAmount *
      ((Math.pow(1 + rate / 12, months) - 1) / (rate / 12)) *
      (1 + rate / 12);
    return futureValue.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 border border-[#fbc40c]/30 rounded-full px-4 py-2 mb-6">
                <FaRocket className="w-4 h-4 text-[#fbc40c]" />
                <span className="text-sm font-semibold text-[#fbc40c]">
                  Mutual Funds
                </span>
              </div>

              <h1 className="text-3xl lg:text-[38px] font-bold text-[#0A2745] mb-6">
                Invest in <span className="text-[#fbc40c]">Mutual Funds</span>
              </h1>
              <p className="text-base lg:text-lg text-[#8E8E8E] leading-relaxed mb-8">
                Build wealth systematically with professionally managed mutual
                funds. Start your SIP journey today.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#fbc40c]/10 to-[#D68108]/5 border-2 border-[#fbc40c]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#fbc40c] mb-2">
                    2000+
                  </p>
                  <p className="text-sm text-[#8E8E8E]">Mutual Funds</p>
                </div>
                <div className="bg-gradient-to-br from-[#00D09C]/10 to-[#00B09C]/5 border-2 border-[#00D09C]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#00D09C] mb-2">₹100</p>
                  <p className="text-sm text-[#8E8E8E]">Minimum SIP</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/auth/open-demat-account/"
                  className="px-8 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Investing
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-white border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Calculate Returns
                </a>
              </div>
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-[650px] h-full flex items-center justify-center">
                <Image
                  src="/home-fno-mobile.png"
                  alt="Mutual Funds"
                  width={250}
                  height={400}
                  className="object-contain drop-shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invest with Experts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-3">
              Invest with Experts
            </h2>
            <div className="w-16 h-1 bg-[#fbc40c] rounded-full mb-4"></div>
            <p className="text-base text-[#666] max-w-3xl">
              Explore investing with expert fund managers who strategically grow
              your wealth. They analyze markets and handpick top investments to
              maximize your returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundManagers.map((manager) => (
              <div
                key={manager.id}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#fbc40c] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUsers className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-dark text-lg mb-1">
                      {manager.name}
                    </h3>
                    <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      {manager.experience}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#666] mb-1">Funds Managed</p>
                    <p className="text-2xl font-bold text-gray-dark">
                      {manager.fundsManaged}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666] mb-1">Total AUM</p>
                    <p className="text-base font-bold text-gray-dark">
                      {manager.totalAUM}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Funds Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-dark mb-3">
                  Popular Funds
                </h2>
                <p className="text-sm text-[#666] mb-6">
                  Find the most popular funds based on 3 year returns
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        activeCategory === cat
                          ? "bg-blue-500 text-white shadow-md"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Funds List */}
                <div className="space-y-3">
                  {popularFunds.map((fund) => (
                    <div
                      key={fund.id}
                      className="bg-white rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaChartLine className="w-6 h-6 text-[#fbc40c]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-dark text-sm mb-1 truncate group-hover:text-[#fbc40c] transition-colors">
                            {fund.name}
                          </h4>
                          <p className="text-xs text-[#666] mb-2">
                            {fund.category}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <span className="text-green-600 font-bold text-sm">
                                ↑ {fund.returns}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm font-bold text-gray-dark">
                                {fund.rating}
                              </span>
                              <FaStar className="w-4 h-4 text-yellow-500" />
                            </div>
                          </div>
                        </div>
                        <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#fbc40c] transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-dark mb-3">
                Categories
              </h2>
              <div className="w-16 h-1 bg-[#fbc40c] rounded-full mb-4"></div>
              <p className="text-base text-[#666] mb-8">
                We've got you covered for all your investment goals, whether
                it's saving on taxes, aiming for high returns or seeking lower
                risk options.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Equity",
                  "Debt",
                  "Hybrid",
                  "Tax Saving",
                  "Index Funds",
                  "ELSS",
                ].map((category, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-100 rounded-xl p-4 hover:border-[#fbc40c] hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-[#fbc40c]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#fbc40c] transition-colors">
                      <FaChartLine className="w-5 h-5 text-[#fbc40c] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-gray-dark group-hover:text-[#fbc40c] transition-colors">
                      {category}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-3">
              Benefits of Mutual Funds
            </h2>
            <div className="w-16 h-1 bg-[#fbc40c] rounded-full mb-4"></div>
            <p className="text-base text-[#666] max-w-3xl">
              From diversification to expert management to accessibility, mutual
              funds are the ultimate choice for investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#fbc40c] hover:shadow-lg transition-all duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <div className={benefit.iconColor}>{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#666]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Returns Calculator Section */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-dark mb-6">
                Returns Calculator
              </h3>

              {/* SIP/One Time Toggle */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold">
                  SIP
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  One Time
                </button>
              </div>

              {/* Fund Selection */}
              <div className="mb-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border-2 border-[#fbc40c]">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaChartLine className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-dark">
                    HDFC Mid Cap Opportunities Fund
                  </span>
                </div>
              </div>

              {/* Investment Amount */}
              <div className="mb-6">
                <p className="text-sm text-[#666] mb-3">
                  If you had invested{" "}
                  <span className="text-blue-600 font-bold text-xl">
                    ₹{investmentAmount.toLocaleString()}
                  </span>{" "}
                  every month
                </p>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={investmentAmount}
                  onChange={(e) =>
                    setInvestmentAmount(parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-[#fbc40c] rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #fbc40c 0%, #fbc40c ${
                      ((investmentAmount - 1000) / 99000) * 100
                    }%, #e5e7eb ${
                      ((investmentAmount - 1000) / 99000) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-[#666] mt-2">
                  <span>1K</span>
                  <span>1L</span>
                </div>
              </div>

              {/* Period Selection */}
              <div className="mb-6">
                <p className="text-sm text-[#666] mb-3">over a period of</p>
                <div className="flex gap-3">
                  {["1Y", "3Y", "5Y"].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                        period === p
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                <p className="text-sm text-[#666] mb-2">
                  You would have earned
                </p>
                <p className="text-3xl font-bold text-gray-dark mb-1">
                  ₹{calculateReturns()}
                </p>
                <p className="text-green-600 font-semibold">(13.11%)</p>
              </div>

              <p className="text-xs text-[#999] mt-4 text-center">
                * Calculations are based on historical performance of the Mutual
                Fund. The securities are quoted as an example and not as a
                recommendation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
                See how much you could've earned!
              </h2>
              <div className="w-16 h-1 bg-[#fbc40c] rounded-full mb-6"></div>
              <p className="text-lg text-[#666] mb-8">
                Discover Your Earning Potential. Estimate your potential mutual
                fund earnings with our returns calculator.
              </p>

              <div className="space-y-4">
                {[
                  "Calculate SIP returns with ease",
                  "Compare different investment periods",
                  "See real historical performance",
                  "Plan your financial goals better",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[#fbc40c] flex-shrink-0" />
                    <span className="text-[#666]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Start Your SIP <span className="text-[#fbc40c]">Journey Today</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Build wealth systematically with mutual funds. Start with as low as
            ₹100 per month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/open-demat-account/"
              className="px-10 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Open Free Account
              <FaRocket className="w-4 h-4" />
            </a>
            <a
              href="/pricing/"
              className="px-10 py-4 bg-white border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default MutualFundsPage;
