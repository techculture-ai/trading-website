"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaRocket,
  FaBell,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaChartLine,
  FaShieldAlt,
  FaLayerGroup,
  FaFileAlt,
  FaUserCheck,
  FaBolt,
} from "react-icons/fa";
import Link from "next/link";

interface IPO {
  id: number;
  company: string;
  logo: string;
  sector: string;
  category: string;
  closingDate?: string;
  subscriptionRate?: string;
  priceRange: string;
  lotSize: number;
  status: "open" | "upcoming" | "closed";
  gain?: string;
  listedDate?: string;
}

const currentIPOs: IPO[] = [
  {
    id: 1,
    company: "Billionbrains Garage Ventures Ltd",
    logo: "/ipo-logos/billionbrains.png",
    sector: "IT - Software",
    category: "Mainboard",
    closingDate: "7 Nov 25",
    subscriptionRate: "2.5x",
    priceRange: "₹120 - ₹130",
    lotSize: 100,
    status: "open",
  },
  {
    id: 2,
    company: "Lenskart Solutions Ltd",
    logo: "/ipo-logos/lenskart.png",
    sector: "FMCG",
    category: "Mainboard",
    closingDate: "4 Nov 25",
    subscriptionRate: "1.8x",
    priceRange: "₹450 - ₹475",
    lotSize: 30,
    status: "open",
  },
  {
    id: 3,
    company: "Studds Accessories Ltd",
    logo: "/ipo-logos/studds.png",
    sector: "Plastic products",
    category: "SME",
    closingDate: "3 Nov 25",
    subscriptionRate: "3.2x",
    priceRange: "₹85 - ₹95",
    lotSize: 150,
    status: "open",
  },
];

const upcomingIPOs = [
  {
    id: 1,
    company: "Snapdeal Ltd",
    logo: "/ipo-logos/snapdeal.png",
    status: "To be announced",
  },
  {
    id: 2,
    company: "Aakash Educational Services Ltd",
    logo: "/ipo-logos/aakash.png",
    status: "To be announced",
  },
  {
    id: 3,
    company: "National Stock Exchange Of India",
    logo: "/ipo-logos/nse.png",
    status: "To be announced",
  },
];

const previousIPOs: IPO[] = [
  {
    id: 1,
    company: "Midwest Ltd",
    logo: "/ipo-logos/midwest.png",
    sector: "Manufacturing",
    category: "Mainboard",
    listedDate: "24 Oct 25",
    gain: "+9.39%",
    priceRange: "₹280 - ₹295",
    lotSize: 50,
    closingDate: "4 Nov 25",
    status: "closed",
  },
  {
    id: 2,
    company: "Canara HSBC Life Insurance Company Ltd",
    logo: "/ipo-logos/canara-hsbc.png",
    sector: "Insurance",
    category: "Mainboard",
    listedDate: "17 Oct 25",
    gain: "0%",
    priceRange: "₹650 - ₹680",
    lotSize: 20,
    closingDate: "4 Nov 25",
    status: "closed",
  },
  {
    id: 3,
    company: "Rubicon Research Ltd",
    logo: "/ipo-logos/rubicon.png",
    sector: "Pharmaceuticals",
    category: "SME",
    listedDate: "16 Oct 25",
    gain: "+27.84%",
    priceRange: "₹150 - ₹160",
    closingDate: "4 Nov 25",
    lotSize: 80,
    status: "closed",
  },
];

const benefits = [
  {
    id: 1,
    icon: <FaBolt className="w-8 h-8" />,
    title: "Instant Application",
    description:
      "Apply for IPOs instantly using UPI. Quick and paperless process.",
    gradient: "from-[#EF9309] to-[#D68108]",
  },
  {
    id: 2,
    icon: <FaBell className="w-8 h-8" />,
    title: "Real-time Notifications",
    description:
      "Get instant updates on IPO applications, allotments, and listings.",
    gradient: "from-[#00D09C] to-[#00C08A]",
  },
  {
    id: 3,
    icon: <FaFileAlt className="w-8 h-8" />,
    title: "Detailed Information",
    description:
      "Access comprehensive IPO details, financials, and DRHP documents.",
    gradient: "from-[#0A2745] to-[#1A3A5C]",
  },
  {
    id: 4,
    icon: <FaUserCheck className="w-8 h-8" />,
    title: "Easy Tracking",
    description:
      "Track your IPO applications and allotment status in real-time.",
    gradient: "from-[#EF9309] to-[#D68108]",
  },
];

const IPOPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "current" | "upcoming" | "previous"
  >("current");

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-20 overflow-hidden h-[75vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#A8D063]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00D09C]/10 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#A8D063]/10 backdrop-blur-sm border border-[#A8D063]/20 rounded-full px-4 py-2 mb-6">
                <FaRocket className="w-4 h-4 text-[#EF9309]" />
                <span className="text-sm font-semibold text-[#EF9309]">
                  IPO Investments
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Invest in <span className="text-[#EF9309]">Upcoming IPOs</span>
              </h1>
              <p className="text-lg lg:text-xl text-[#DADADA] leading-relaxed mb-8">
                Apply for the latest IPOs using UPI in seconds. Get early access
                to promising companies before they hit the market.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#EF9309] mb-2">50+</p>
                  <p className="text-sm text-[#DADADA]">IPOs Listed</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#00D09C] mb-2">₹0</p>
                  <p className="text-sm text-[#DADADA]">Application Fee</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/open-demat-account/"
                  className="px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Investing in IPOs
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#current-ipos"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 inline-flex items-center justify-center gap-2"
                >
                  View Open IPOs
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/discover_analyst_trade_3mobile.webp"
                  alt="IPO Application Screen"
                  width={600}
                  height={800}
                  className="object-contain drop-shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current IPOs Section */}
      <section
        id="current-ipos"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <FaCalendarAlt className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  Open for Application
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
                Current <span className="text-[#EF9309]">IPOs</span>
              </h2>
              <div className="w-20 h-1 bg-[#A8D063] rounded-full mb-6"></div>

              <p className="text-lg text-[#666] leading-relaxed mb-8">
                Discover all open IPOs and tap into new opportunities before
                they hit the market.
              </p>

              {/* IPO Cards - Mobile View */}
              <div className="lg:hidden space-y-4">
                {currentIPOs.map((ipo) => (
                  <div
                    key={ipo.id}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-gray-dark">
                            {ipo.company.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-dark">
                            {ipo.company}
                          </h3>
                          <p className="text-xs text-[#666]">{ipo.sector}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-[#666] mb-1">Closes on</p>
                        <p className="text-sm font-bold text-red-600">
                          {ipo.closingDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#666] mb-1">
                          Subscribed By
                        </p>
                        <p className="text-sm font-bold text-gray-dark">
                          {ipo.subscriptionRate}
                        </p>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
                      {ipo.id === 1 ? "Pre-Apply" : "Apply"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - IPO Cards Desktop */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Background Card */}
                <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"></div>

                {/* Main Container */}
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-dark">
                      Open IPOs
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {currentIPOs.map((ipo, index) => (
                      <Link href={`/invest/ipos/${ipo.id}`} key={ipo.id}>
                        <div
                          className="bg-white rounded-xl mb-3 p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 cursor-pointer"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animation: "fadeInUp 0.6s ease-out forwards",
                            opacity: 0,
                          }}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2 flex-1">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-base font-bold text-gray-dark">
                                  {ipo.company.charAt(0)}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-dark text-sm truncate">
                                  {ipo.company}
                                </h4>
                                <p className="text-xs text-[#666]">
                                  {ipo.sector}
                                </p>
                              </div>
                            </div>
                            <FaArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0 mt-1" />
                          </div>

                          <div className="flex items-center justify-between text-xs text-[#666] mb-3">
                            <span>
                              Subscribed By:{" "}
                              <span className="font-semibold text-gray-dark">
                                {ipo.subscriptionRate}
                              </span>
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs text-[#666]">Closes on</p>
                              <p className="text-sm font-bold text-red-600">
                                {ipo.closingDate}
                              </p>
                            </div>
                            <button
                              className={`px-5 py-2 ${
                                index === 0 ? "bg-blue-500" : "bg-blue-500"
                              } hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-all`}
                            >
                              {index === 0 ? "Pre-Apply" : "Apply"}
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* To Be Announced Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
              <FaClock className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-600">
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              To Be <span className="text-[#EF9309]">Announced</span>
            </h2>
            <div className="w-20 h-1 bg-[#EF9309] rounded-full mb-6 mx-auto"></div>

            <p className="text-lg text-[#666] leading-relaxed max-w-3xl text-center mx-auto">
              Unlock potential before it's public. Get notified about upcoming
              IPOs and pre-apply for your top picks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingIPOs.map((ipo, index) => (
              <div
                key={ipo.id}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#EF9309] relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#EF9309]/10 rounded-bl-full"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {ipo.company.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-dark mb-3 group-hover:text-[#EF9309] transition-colors">
                    {ipo.company}
                  </h3>

                  <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-6">
                    <FaClock className="w-3 h-3 text-orange-600" />
                    <span className="text-xs font-semibold text-orange-600">
                      {ipo.status}
                    </span>
                  </div>

                  {/* <button className="w-full py-3 bg-gradient-to-r from-[#A8D063] to-[#96BC56] hover:from-[#96BC56] hover:to-[#A8D063] text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <FaBell className="w-4 h-4" />
                    Get Notified
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous IPOs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Previous <span className="text-[#EF9309]">IPOs</span>
            </h2>
            <div className="w-20 h-1 bg-[#A8D063] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#666]">
              Track the performance of recently listed IPOs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousIPOs.map((ipo) => (
              <Link
                key={ipo.id}
                href={`/invest/ipos/${ipo.id}`}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-dark">
                      {ipo.company.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-dark text-sm flex-1">
                    {ipo.company}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-[#666] mb-1">Listed on</p>
                  <p className="text-sm font-semibold text-gray-dark">
                    {ipo.listedDate}
                  </p>
                </div>

                <div
                  className={`text-2xl font-bold ${
                    ipo.gain?.startsWith("+")
                      ? "text-green-600"
                      : ipo.gain === "0%"
                      ? "text-gray-600"
                      : "text-red-600"
                  }`}
                >
                  {ipo.gain}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Why Invest in IPOs with{" "}
              <span className="text-[#EF9309]">ez wealth?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#A8D063]"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{benefit.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-dark mb-3 group-hover:text-[#A8D063] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-[#666] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold  mb-6">
            Ready to Invest <span className="text-[#EF9309]">in IPOs?</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Open your free demat account and start applying for IPOs today with
            ez wealth.
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

export default IPOPage;
