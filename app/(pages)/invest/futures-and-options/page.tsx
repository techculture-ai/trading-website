"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaExclamationTriangle,
  FaPuzzlePiece,
  FaPhoneVolume,
  FaChartLine,
  FaBolt,
  FaEye,
  FaRocket,
  FaShieldAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaArrowRight,
  FaSearchDollar,
} from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

interface Risk {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const risks: Risk[] = [
  {
    id: 1,
    icon: <FaExclamationTriangle className="w-8 h-8 " />,
    title: "Unlimited Loss Potential",
    description:
      "Some F&O strategies can leave a sour taste since they carry the potential for unlimited losses. Be careful and DYOR.",
    gradient: "from-red-500 to-red-600",
  },
  {
    id: 2,
    icon: <FaPuzzlePiece className="w-8 h-8 " />,
    title: "Complexity",
    description:
      "F&O trading can be a bit tricky because it involves using advanced strategies and understanding how markets work.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: 3,
    icon: <FaPhoneVolume className="w-8 h-8" />,
    title: "Margin Calls",
    description:
      "You need to keep enough funds in your account. If your balance drops, you may face margin calls, leading to forced position liquidation and potential losses.",
    gradient: "from-yellow-500 to-yellow-600",
  },
];

const whyFeatures: Feature[] = [
  {
    id: 1,
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Order Slicing",
    description:
      "Big orders? ez wealth auto-splits them for smoother execution and lower slippage.",
    gradient: "from-[#fbc40c] to-[#D68108]",
  },
  {
    id: 2,
    icon: <FaBolt className="w-8 h-8" />,
    title: "Exit Now / Exit All",
    description: "Close one or all positions instantly – fast and simple.",
    gradient: "from-[#00D09C] to-[#00C08A]",
  },
  {
    id: 3,
    icon: <FaEye className="w-8 h-8" />,
    title: "Speed",
    description: "Optimised for quick, reliable execution in volatile markets.",
    gradient: "from-[#0A2745] to-[#1A3A5C]",
  },
];

const benefits = [
  {
    id: 1,
    title: "Leverage Power",
    description: "Control larger positions with smaller capital",
    icon: <FaRocket className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Hedging",
    description: "Protect your portfolio from market volatility",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Flexibility",
    description: "Profit in both rising and falling markets",
    icon: <FaLayerGroup className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Advanced Strategies",
    description: "Deploy complex multi-leg option strategies",
    icon: <FaSearchDollar className="w-6 h-6" />,
  },
];

const FuturesOptionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"stock" | "index">("stock");

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-[80vh] ">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        {/* Decorative Blobs */}
        {/* <div className="absolute top-20 right-10 w-96 h-96 bg-[#fbc40c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00D09C]/10 rounded-full blur-3xl"></div> */}

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            {/* Left Content */}
            <div className="">
              <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 border border-[#fbc40c]/30 rounded-full px-4 py-2 mb-6">
                <HiTrendingUp className="w-4 h-4 text-[#fbc40c]" />
                <span className="text-sm font-semibold text-[#fbc40c]">
                  Futures & Options
                </span>
              </div>

              <h1 className="text-3xl lg:text-[38px] font-bold text-[#0A2745] mb-6">
                Unlock your{" "}
                <span className="text-[#fbc40c]">Full Potential</span>
              </h1>
              <p className="text-base lg:text-lg text-[#8E8E8E] leading-relaxed mb-8">
                Futures & Options let you control more with less money and
                profit on price swings in both directions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#fbc40c]/10 to-[#D68108]/5 border-2 border-[#fbc40c]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#fbc40c] mb-2">50+</p>
                  <p className="text-sm text-[#8E8E8E]">Option Strategies</p>
                </div>
                <div className="bg-gradient-to-br from-[#00D09C]/10 to-[#00B09C]/5 border-2 border-[#00D09C]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#00D09C] mb-2">₹11</p>
                  <p className="text-sm text-[#8E8E8E]">Flat Brokerage</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/auth/open-demat-account/"
                  className="px-8 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Trading F&O
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white  border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300  inline-flex items-center justify-center gap-2"
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-[650px] h-full flex items-center justify-center">
                <Image
                  src="/discover_analyst_trade_3mobile.webp"
                  alt="F&O Trading Screen"
                  width={550}
                  height={400}
                  className="object-contain drop-shadow-2xl max-h-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know The Risks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 rounded-full px-4 py-2 mb-4">
              <FaExclamationTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">
                Important Notice
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Know The <span className="text-[#fbc40c]">Risks</span>
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              F&O trading comes with significant risks. Understanding them is
              crucial for successful trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {risks.map((risk, index) => (
              <div
                key={risk.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${risk.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{risk.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-dark mb-3">
                  {risk.title}
                </h3>

                <p className="text-[#666] leading-relaxed">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaExclamationTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-dark mb-2">
                  Trade Responsibly
                </h4>
                <p className="text-[#666] leading-relaxed">
                  Always do your own research (DYOR), understand the risks, and
                  never invest more than you can afford to lose. F&O trading
                  requires knowledge, experience, and risk management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Complete Option Trading Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              The Complete Option{" "}
              <span className="text-[#fbc40c]">Trading Experience</span>
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto mb-8">
              Discover, Analyse, Trade. Analyze trends, identify trading
              opportunities and execute trades.
            </p>

            {/* Tabs */}
            <div className="inline-flex bg-gray-100 rounded-xl p-1 mb-12">
              <button
                onClick={() => setActiveTab("stock")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "stock"
                    ? "bg-[#fbc40c] text-white shadow-lg"
                    : "text-[#666] hover:text-gray-dark"
                }`}
              >
                Stock Options
              </button>
              <button
                onClick={() => setActiveTab("index")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "index"
                    ? "bg-[#fbc40c] text-white shadow-lg"
                    : "text-[#666] hover:text-gray-dark"
                }`}
              >
                Index Options
              </button>
            </div>
          </div>

          {/* Stock Options Cards */}
          {activeTab === "stock" && (
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    name: "HDFC Bank",
                    logo: "/logos/hdfc.png",
                    price: "₹993.55",
                    change: "+0.63%",
                    positive: true,
                  },
                  {
                    name: "Reliance Industries",
                    logo: "/logos/reliance.png",
                    price: "₹1493.80",
                    change: "+0.50%",
                    positive: true,
                  },
                  {
                    name: "Tata Consultancy Services (TCS)",
                    logo: "/logos/tcs.png",
                    price: "₹3025.10",
                    change: "-1.08%",
                    positive: false,
                  },
                  {
                    name: "Bharti Airtel",
                    logo: "/logos/airtel.png",
                    price: "₹2052.90",
                    change: "-0.08%",
                    positive: false,
                  },
                  {
                    name: "ICICI Bank",
                    logo: "/logos/icici.png",
                    price: "₹1345.90",
                    change: "+0.04%",
                    positive: true,
                  },
                  {
                    name: "State Bank of India (SBI)",
                    logo: "/logos/sbi.png",
                    price: "₹945.95",
                    change: "+0.96%",
                    positive: true,
                  },
                  {
                    name: "Infosys",
                    logo: "/logos/infosys.png",
                    price: "₹1481.30",
                    change: "-0.07%",
                    positive: false,
                  },
                  {
                    name: "Hindustan Unilever (HUL)",
                    logo: "/logos/hul.png",
                    price: "₹2446.70",
                    change: "-0.76%",
                    positive: false,
                  },
                  {
                    name: "Bajaj Finance",
                    logo: "/logos/bajaj.png",
                    price: "₹1043.50",
                    change: "+0.07%",
                    positive: true,
                  },
                  {
                    name: "ITC",
                    logo: "/logos/itc.png",
                    price: "₹414.70",
                    change: "-1.34%",
                    positive: false,
                  },
                ].map((stock, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90E2] cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-dark">
                          {stock.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-dark text-sm group-hover:text-[#4A90E2] transition-colors">
                        {stock.name}
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-gray-dark mb-2">
                      {stock.price}
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        stock.positive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stock.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="px-8 py-3 bg-linear-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  View All
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Index Options Cards */}
          {activeTab === "index" && (
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    name: "Nifty 50",
                    logo: "/logos/nifty.png",
                    price: "₹25732.35",
                    change: "+0.04%",
                    positive: true,
                  },
                  {
                    name: "Bank Nifty",
                    logo: "/logos/banknifty.png",
                    price: "₹58041.65",
                    change: "+0.46%",
                    positive: true,
                  },
                  {
                    name: "Fin Nifty (Nifty Financial Services)",
                    logo: "/logos/finnifty.png",
                    price: "₹27275.90",
                    change: "+0.50%",
                    positive: true,
                  },
                  {
                    name: "Bankex",
                    logo: "/logos/bankex.png",
                    price: "₹65211.28",
                    change: "+0.42%",
                    positive: true,
                  },
                  {
                    name: "Sensex",
                    logo: "/logos/sensex.png",
                    price: "₹83938.76",
                    change: "+0.00%",
                    positive: true,
                  },
                ].map((index, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4A90E2] cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {index.name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-dark text-sm group-hover:text-[#4A90E2] transition-colors">
                        {index.name}
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-gray-dark mb-2">
                      {index.price}
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        index.positive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {index.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content based on active tab */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/unlock_future_potential_img_mob.png"
                  alt="Options Trading Interface"
                  width={400}
                  height={300}
                  className="object-contain drop-shadow-2xl mx-auto"
                />
              </div>
            </div>

            {/* Features */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-dark mb-6">
                Discover Top-Performing Options
              </h3>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Discover top-performing index and stock options based on trading
                volume to make informed investment decisions.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <FaSearchDollar className="w-6 h-6" />,
                    title: "Advanced Filters",
                    description:
                      "Filter options by volume, OI, price, and more",
                  },
                  {
                    icon: <FaChartLine className="w-6 h-6" />,
                    title: "Real-time Data",
                    description: "Live streaming quotes and option chains",
                  },
                  {
                    icon: <FaLayerGroup className="w-6 h-6" />,
                    title: "Option Chains",
                    description:
                      "Comprehensive option chain data for informed decisions",
                  },
                  {
                    icon: <FaBolt className="w-6 h-6" />,
                    title: "Quick Execution",
                    description: "Lightning-fast order placement and execution",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-dark mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[#666]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why F&O on ez wealth */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Why F&O on <span className="text-[#fbc40c]">ez wealth?</span>
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#fbc40c]"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-dark mb-3 group-hover:text-[#fbc40c] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-[#666] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00D09C] to-[#00C08A] rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-gray-dark mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-[#666]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futures Trading Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
                Trade Futures{" "}
                <span className="text-[#fbc40c]">with Confidence</span>
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Access comprehensive futures trading tools with real-time market
                data, advanced charting, and instant execution.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Real-time futures prices and market depth",
                  "Low margin requirements",
                  "Advanced charting and technical indicators",
                  "Multiple order types and strategies",
                  "Instant position tracking and P&L",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[#00D09C] flex-shrink-0" />
                    <span className="text-[#666]">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="/auth/open-demat-account/"
                className="px-8 py-4 bg-gradient-to-r from-[#0A2745] to-[#1A3A5C] hover:from-[#1A3A5C] hover:to-[#0A2745] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Start Trading Futures
                <FaArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/unlock_future_potential_img_mob.png"
                alt="Futures Trading"
                width={400}
                height={700}
                className="object-contain drop-shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold  mb-6">
            Ready to <span className="text-[#fbc40c]">Trade F&O?</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Open your free demat account and start trading futures and options
            today with ez wealth.
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

export default FuturesOptionsPage;
