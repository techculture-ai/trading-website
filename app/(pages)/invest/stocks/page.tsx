"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaChartLine,
  FaBuilding,
  FaIndustry,
  FaTruck,
  FaFlask,
  FaMicrochip,
  FaShoppingCart,
  FaHospital,
  FaCar,
  FaTractor,
  FaHardHat,
  FaBox,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

interface StockCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  stockCount: number;
  gradient: string;
}

const stockCategories: StockCategory[] = [
  {
    id: "1",
    title: "Banking & Finance",
    description:
      "Commercial banks, investment banks, insurance companies, and asset management firms.",
    icon: <FaBuilding className="w-6 h-6" />,
    slug: "banking-finance",
    stockCount: 45,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "2",
    title: "Realty",
    description:
      "Real estate development, property management, and construction companies.",
    icon: <FaBuilding className="w-6 h-6" />,
    slug: "realty",
    stockCount: 32,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "3",
    title: "Chemical",
    description:
      "Production and distribution of chemicals for various industries.",
    icon: <FaFlask className="w-6 h-6" />,
    slug: "chemical",
    stockCount: 58,
    gradient: "from-green-500 to-green-600",
  },
  {
    id: "4",
    title: "Transportation",
    description:
      "Movement of goods and people through air, rail, road, and sea.",
    icon: <FaTruck className="w-6 h-6" />,
    slug: "transportation",
    stockCount: 28,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: "5",
    title: "FMCG",
    description: "Fast-moving consumer goods and everyday products.",
    icon: <FaShoppingCart className="w-6 h-6" />,
    slug: "fmcg",
    stockCount: 42,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    id: "6",
    title: "Metal",
    description:
      "Extraction, production, and distribution of metals like steel and aluminum.",
    icon: <FaIndustry className="w-6 h-6" />,
    slug: "metal",
    stockCount: 36,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    id: "7",
    title: "Logistics",
    description: "Planning and control of movement and storage of goods.",
    icon: <FaBox className="w-6 h-6" />,
    slug: "logistics",
    stockCount: 24,
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    id: "8",
    title: "Consumer Discretionary",
    description:
      "Non-essential but highly desired consumer goods and services.",
    icon: <FaShoppingCart className="w-6 h-6" />,
    slug: "consumer-discretionary",
    stockCount: 38,
    gradient: "from-red-500 to-red-600",
  },
  {
    id: "9",
    title: "IT & Technology",
    description: "Software, hardware, and technology services companies.",
    icon: <FaMicrochip className="w-6 h-6" />,
    slug: "it",
    stockCount: 52,
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    id: "10",
    title: "Engineering",
    description:
      "Civil, mechanical, electrical, and chemical engineering firms.",
    icon: <FaHardHat className="w-6 h-6" />,
    slug: "engineering",
    stockCount: 46,
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    id: "11",
    title: "Building Materials",
    description: "Production and sale of construction materials.",
    icon: <FaHardHat className="w-6 h-6" />,
    slug: "building-material",
    stockCount: 30,
    gradient: "from-amber-500 to-amber-600",
  },
  {
    id: "12",
    title: "Infrastructure",
    description:
      "Development of roads, bridges, airports, and public projects.",
    icon: <FaHardHat className="w-6 h-6" />,
    slug: "infra",
    stockCount: 34,
    gradient: "from-teal-500 to-teal-600",
  },
  {
    id: "13",
    title: "Automobile",
    description: "Manufacturing and sale of motor vehicles and components.",
    icon: <FaCar className="w-6 h-6" />,
    slug: "auto",
    stockCount: 40,
    gradient: "from-red-500 to-red-600",
  },
  {
    id: "14",
    title: "Pharmaceuticals",
    description: "Research, development, and manufacturing of medicines.",
    icon: <FaHospital className="w-6 h-6" />,
    slug: "pharma",
    stockCount: 48,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "15",
    title: "Agriculture",
    description: "Farming, crop production, machinery, and fertilizers.",
    icon: <FaTractor className="w-6 h-6" />,
    slug: "agriculture",
    stockCount: 26,
    gradient: "from-lime-500 to-lime-600",
  },
];

const features = [
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "Real-time Data",
    description: "Live stock prices and market updates",
  },
  {
    icon: <HiTrendingUp className="w-6 h-6" />,
    title: "Advanced Analytics",
    description: "Detailed charts and technical indicators",
  },
  {
    icon: <FaCheckCircle className="w-6 h-6" />,
    title: "Expert Picks",
    description: "Curated stock recommendations",
  },
];

export default function StocksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        <div className="absolute top-20 right-10 w-96 h-96 bg-[#EF9309]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EF9309]/10 backdrop-blur-sm border border-[#EF9309]/20 rounded-full px-4 py-2 mb-6">
                <FaChartLine className="w-4 h-4 text-[#EF9309]" />
                <span className="text-sm font-semibold text-[#EF9309]">
                  Stock Investment
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Explore{" "}
                <span className="bg-gradient-to-r from-[#EF9309] to-[#D68108] bg-clip-text text-transparent">
                  Stock Categories
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-[#DADADA] leading-relaxed mb-8">
                Discover stocks across different sectors and industries. Find
                the perfect investment opportunity that aligns with your
                portfolio strategy.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#EF9309] mb-2">
                    2000+
                  </p>
                  <p className="text-sm text-[#DADADA]">Listed Stocks</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#EF9309] mb-2">15</p>
                  <p className="text-sm text-[#DADADA]">Sectors</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/open-demat-account/"
                  className="px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Investing
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#categories"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 inline-flex items-center justify-center gap-2"
                >
                  Browse Categories
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/mtf.png"
                alt="Stock Trading"
                width={300}
                height={500}
                className="object-contain drop-shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#EF9309]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#EF9309] to-[#D68108] rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Browse by Sector
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              Select a sector to discover top-performing stocks and investment
              opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stockCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/invest/stocks/${category.slug}`}
                className="group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#EF9309] h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{category.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-dark mb-2 group-hover:text-[#EF9309] transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666] leading-relaxed mb-4 flex-1">
                    {category.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-[#666]">
                      {category.stockCount} Stocks
                    </span>
                    <FaArrowRight className="w-4 h-4 text-[#EF9309] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-6">
                Why Invest in Stocks?
              </h2>
              <div className="space-y-4">
                {[
                  "Build long-term wealth through capital appreciation",
                  "Earn regular income through dividends",
                  "Beat inflation and preserve purchasing power",
                  "Diversify your investment portfolio",
                  "Take advantage of market opportunities",
                  "Enjoy tax benefits on long-term investments",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[#EF9309] flex-shrink-0 mt-0.5" />
                    <span className="text-[#666]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-dark mb-6">
                Start Your Investment Journey
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#EF9309] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <p className="text-[#666]">Open a free demat account</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#EF9309] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <p className="text-[#666]">Complete your KYC verification</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#EF9309] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <p className="text-[#666]">Add funds and start investing</p>
                </div>
              </div>
              <a
                href="/open-demat-account/"
                className="block w-full py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Open Free Account
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-[#EF9309]">Start Investing?</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Open your free demat account and start trading in stocks today with
            zero account opening fees!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/open-demat-account/"
              className="px-10 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Open Free Account
              <FaRocket className="w-4 h-4" />
            </a>
            <a
              href="/pricing/"
              className="px-10 py-4 bg-white border-2 border-[#EF9309] hover:bg-[#EF9309] text-[#EF9309] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
