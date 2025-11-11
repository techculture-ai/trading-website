"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaRupeeSign,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaFlag,
} from "react-icons/fa";
import Link from "next/link";

interface IPOData {
  id: string;
  company: string;
  logo: string;
  category: string;
  listDate: string;
  minInvestment: string;
  sharesPerLot: number;
  biddingDates: {
    start: string;
    end: string;
  };
  lotSize: number;
  priceRange: {
    min: number;
    max: number;
  };
  issueSize: string;
  subscriptionRate: {
    retailIndividual: string;
    nonInstitutional: string;
    qualifiedInstitutional: string;
    total: string;
  };
  timeline: {
    offerStarts: string;
    offerEnds: string;
    allotment: string;
    listing: string;
  };
  about: string;
  objectives: string[];
  financials: {
    revenue: string;
    profit: string;
    netWorth: string;
  };
}

// Mock data - Replace with actual API call
const ipoData: Record<string, IPOData> = {
  "1": {
    id: "midwest-ltd",
    company: "Midwest Ltd",
    logo: "/ipo-logos/midwest.png",
    category: "Miscellaneous",
    listDate: "24 Oct 25",
    minInvestment: "₹14,910",
    sharesPerLot: 14,
    biddingDates: {
      start: "15 Oct 25",
      end: "17 Oct 25",
    },
    lotSize: 14,
    priceRange: {
      min: 1014,
      max: 1065,
    },
    issueSize: "451 Cr",
    subscriptionRate: {
      retailIndividual: "24.26%",
      nonInstitutional: "168.07%",
      qualifiedInstitutional: "139.87%",
      total: "87.89%",
    },
    timeline: {
      offerStarts: "15 Oct 25",
      offerEnds: "17 Oct 25",
      allotment: "20 Oct 25",
      listing: "24 Oct 25",
    },
    about:
      "Midwest Ltd is a leading manufacturing company specializing in industrial solutions. The company has a strong presence in the domestic market and is expanding its operations globally.",
    objectives: [
      "Expansion of manufacturing facilities",
      "Research and development initiatives",
      "Working capital requirements",
      "Debt repayment",
    ],
    financials: {
      revenue: "₹850 Cr",
      profit: "₹125 Cr",
      netWorth: "₹450 Cr",
    },
  },
  // Add more IPO data here
};

const IPODetailPage: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const ipo = ipoData[slug];

  if (!ipo) {
    return (
      <div className="min-h-screen bg-white">
        {/* <Header /> */}
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h1 className="text-3xl font-bold text-gray-dark mb-4">
              IPO Not Found
            </h1>
            <Link
              href="/invest/ipos"
              className="text-[#fbc40c] hover:underline"
            >
              Back to IPO List
            </Link>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <Link
            href="/invest/ipos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to IPO List
          </Link>

          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Logo */}
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-gray-dark">
                  {ipo.company.charAt(0)}
                </span>
              </div>

              {/* Company Info */}
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-3">
                  {ipo.company}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full font-medium">
                    {ipo.category}
                  </span>
                  <span className="text-sm text-[#666]">
                    List Date:{" "}
                    <span className="font-semibold text-gray-dark">
                      {ipo.listDate}
                    </span>
                  </span>
                </div>
              </div>

              {/* Investment Info */}
              <div className="bg-gradient-to-br from-[#fbc40c]/10 to-[#fbc40c]/5 rounded-xl p-6 border-2 border-[#fbc40c]/20">
                <p className="text-sm text-[#666] mb-1">Minimum Investment</p>
                <p className="text-3xl font-bold text-[#fbc40c] mb-1">
                  {ipo.minInvestment}
                </p>
                <p className="text-sm text-[#666]">{ipo.sharesPerLot} shares</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* IPO Details */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-dark mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#fbc40c] rounded"></div>
                  IPO Details
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="space-y-1">
                    <p className="text-xs text-[#666] font-medium">
                      Bidding Dates
                    </p>
                    <p className="text-sm font-bold text-gray-dark">
                      {ipo.biddingDates.start} - {ipo.biddingDates.end}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-[#666] font-medium">
                      Min. Investment
                    </p>
                    <p className="text-sm font-bold text-gray-dark">
                      {ipo.minInvestment}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-[#666] font-medium">Lot Size</p>
                    <p className="text-sm font-bold text-gray-dark">
                      {ipo.lotSize}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-[#666] font-medium">
                      Price Range
                    </p>
                    <p className="text-sm font-bold text-gray-dark">
                      ₹{ipo.priceRange.min} - ₹{ipo.priceRange.max}
                    </p>
                  </div>

                  <div className="space-y-1 col-span-2">
                    <p className="text-xs text-[#666] font-medium">
                      Issue Size
                    </p>
                    <p className="text-sm font-bold text-gray-dark">
                      {ipo.issueSize}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subscription Rate */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-dark flex items-center gap-2">
                    <div className="w-1 h-6 bg-[#fbc40c] rounded"></div>
                    Subscription Rate
                  </h2>
                  <span className="text-sm text-[#666]">
                    As of {ipo.timeline.offerEnds}
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Retail Individual Investor",
                      value: ipo.subscriptionRate.retailIndividual,
                    },
                    {
                      label: "Non-Institutional Investor",
                      value: ipo.subscriptionRate.nonInstitutional,
                    },
                    {
                      label: "Qualified Institutional Buyers",
                      value: ipo.subscriptionRate.qualifiedInstitutional,
                    },
                    {
                      label: "Total",
                      value: ipo.subscriptionRate.total,
                      isTotal: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl ${
                        item.isTotal
                          ? "bg-[#fbc40c]/10 border-2 border-[#fbc40c]"
                          : "bg-gray-50"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          item.isTotal
                            ? "font-bold text-gray-dark"
                            : "text-[#666]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`text-lg font-bold ${
                          item.isTotal ? "text-[#fbc40c]" : "text-gray-dark"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Company */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-dark mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#fbc40c] rounded"></div>
                  About {ipo.company}
                </h2>
                <p className="text-[#666] leading-relaxed">{ipo.about}</p>
              </div>

              {/* Issue Objectives */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-dark mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#fbc40c] rounded"></div>
                  Issue Objectives
                </h2>
                <ul className="space-y-3">
                  {ipo.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-[#fbc40c] flex-shrink-0 mt-0.5" />
                      <span className="text-[#666]">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Timeline & Actions */}
            <div className="space-y-8">
              {/* Important Dates Timeline */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200  top-24">
                <h3 className="text-xl font-bold text-gray-dark mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#fbc40c] rounded"></div>
                  Important Dates
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: <FaCalendarAlt className="w-5 h-5" />,
                      label: "Offer Starts",
                      date: ipo.timeline.offerStarts,
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      icon: <FaClock className="w-5 h-5" />,
                      label: "Offer Ends",
                      date: ipo.timeline.offerEnds,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      icon: <FaUsers className="w-5 h-5" />,
                      label: "Allotment",
                      date: ipo.timeline.allotment,
                      color: "bg-purple-100 text-purple-600",
                    },
                    {
                      icon: <FaFlag className="w-5 h-5" />,
                      label: "Listing",
                      date: ipo.timeline.listing,
                      color: "bg-[#fbc40c]/10 text-[#fbc40c]",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[#666] mb-1">
                            {item.label}
                          </p>
                          <p className="text-base font-bold text-gray-dark">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="absolute left-6 top-12 w-0.5 h-6 bg-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Apply Button */}
                <button className="w-full mt-6 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Apply Now
                </button>

                <p className="text-xs text-center text-[#999] mt-4">
                  Complete KYC to apply for this IPO
                </p>
              </div>

              {/* Financials */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-dark mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#fbc40c] rounded"></div>
                  Key Financials
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-[#666]">Revenue</span>
                    <span className="text-base font-bold text-gray-dark">
                      {ipo.financials.revenue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-[#666]">Profit</span>
                    <span className="text-base font-bold text-green-600">
                      {ipo.financials.profit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-[#666]">Net Worth</span>
                    <span className="text-base font-bold text-gray-dark">
                      {ipo.financials.netWorth}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default IPODetailPage;
