"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaSearch,
  FaChartLine,
  FaPercent,
  FaCalendarAlt,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaBolt,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

interface CalculatorInputs {
  stockName: string;
  marketPrice: number;
  quantity: number;
  expectedReturns: number;
  holdingPeriod: number;
  yourFund: number;
}

interface CalculatedValues {
  leverage: number;
  fundedByLemonn: number;
  buyValue: number;
  sellValue: number;
  grossProfit: number;
  transactionCharges: number;
  interestAmount: number;
  netProfit: number;
  returnsWithoutMTF: number;
  returnsWithMTF: number;
  returnsWithoutMTFPercent: number;
  returnsWithMTFPercent: number;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const benefits = [
  {
    id: 1,
    title: "4x Margin on Delivery Trades",
    description: "Buy 1400+ stocks with more power, less capital – via MTF.",
    gradient: "from-[#A8D063] to-[#96BC56]",
  },
  {
    id: 2,
    title: "Low Interest. Higher Returns.",
    description:
      "Just 10.95% annually (0.03% per day). Pay interest only for the days you hold.",
    gradient: "from-blue-400 to-blue-500",
  },
  {
    id: 3,
    title: "Same Order Flow",
    description:
      "Just switch to the MTF tab instead of Delivery. The required amount auto-adjusts based on the stock's margin.",
    gradient: "from-purple-400 to-purple-500",
  },
];

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is Margin Trading Facility (MTF)?",
    answer:
      "MTF (Margin Trading Facility) lets you buy more stocks than your available capital by borrowing funds from ez wealth. You can leverage up to 4x your capital to increase your buying power.",
  },
  {
    id: 2,
    question: "How does MTF work?",
    answer:
      "With MTF, you pay a portion of the stock value (margin), and ez wealth funds the remaining amount. For example, if you want to buy stocks worth ₹500 and the margin is 25%, you pay ₹125, and ez wealth funds ₹375.",
  },
  {
    id: 3,
    question: "What is the interest rate for MTF?",
    answer:
      "The interest rate is 10.95% annually (0.03% per day). You only pay interest for the actual number of days you hold the position.",
  },
  {
    id: 4,
    question: "Which stocks are eligible for MTF?",
    answer:
      "Over 1400+ stocks are available for MTF. You can check the complete list in the app or contact our support team for specific stock eligibility.",
  },
  {
    id: 5,
    question: "What are the risks involved in MTF?",
    answer:
      "MTF amplifies both gains and losses. If the stock price falls, you may face margin calls. It's important to monitor your positions regularly and maintain adequate margin in your account.",
  },
  {
    id: 6,
    question: "Can I square off my MTF position anytime?",
    answer:
      "Yes, you can exit your MTF position anytime during market hours. The interest will be calculated only for the days you held the position.",
  },
  {
    id: 7,
    question: "What happens if I don't maintain the required margin?",
    answer:
      "If your margin falls below the required level, you'll receive a margin call. You need to add funds or the position may be squared off automatically to prevent further losses.",
  },
  {
    id: 8,
    question: "Are there any additional charges for MTF?",
    answer:
      "Apart from the interest charges, standard brokerage and transaction charges apply. There are no hidden fees for using MTF.",
  },
];

const MTFPage: React.FC = () => {
  const [calculatorInputs, setCalculatorInputs] = useState<CalculatorInputs>({
    stockName: "",
    marketPrice: 0,
    quantity: 0,
    expectedReturns: 0,
    holdingPeriod: 0,
    yourFund: 0,
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const calculateMTF = (): CalculatedValues => {
    const { marketPrice, quantity, expectedReturns, holdingPeriod, yourFund } =
      calculatorInputs;

    const buyValue = marketPrice * quantity;
    const leverage = yourFund > 0 ? buyValue / yourFund : 0;
    const fundedByLemonn = buyValue - yourFund;
    const sellValue = buyValue + (buyValue * expectedReturns) / 100;
    const grossProfit = sellValue - buyValue;
    const transactionCharges = buyValue * 0.0005; // Example: 0.05%
    const interestAmount = (fundedByLemonn * 0.1095 * holdingPeriod) / 365;
    const netProfit = grossProfit - transactionCharges - interestAmount;
    const returnsWithoutMTF = yourFund * (expectedReturns / 100);
    const returnsWithMTF = netProfit;
    const returnsWithoutMTFPercent =
      yourFund > 0 ? (returnsWithoutMTF / yourFund) * 100 : 0;
    const returnsWithMTFPercent =
      yourFund > 0 ? (returnsWithMTF / yourFund) * 100 : 0;

    return {
      leverage,
      fundedByLemonn,
      buyValue,
      sellValue,
      grossProfit,
      transactionCharges,
      interestAmount,
      netProfit,
      returnsWithoutMTF,
      returnsWithMTF,
      returnsWithoutMTFPercent,
      returnsWithMTFPercent,
    };
  };

  const calculated = calculateMTF();

  const handleInputChange = (
    field: keyof CalculatorInputs,
    value: string | number
  ) => {
    setCalculatorInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
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
                  Margin Trading Facility
                </span>
              </div>

              <h1 className="text-3xl lg:text-[38px] font-bold text-[#0A2745] mb-6">
                Trade with <span className="text-[#fbc40c]">4x Leverage</span>
              </h1>
              <p className="text-base lg:text-lg text-[#8E8E8E] leading-relaxed mb-8">
                Multiply your buying power with MTF. Buy more stocks with less
                capital and maximize your returns.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#fbc40c]/10 to-[#D68108]/5 border-2 border-[#fbc40c]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#fbc40c] mb-2">4x</p>
                  <p className="text-sm text-[#8E8E8E]">Leverage Power</p>
                </div>
                <div className="bg-gradient-to-br from-[#00D09C]/10 to-[#00B09C]/5 border-2 border-[#00D09C]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#00D09C] mb-2">
                    10.95%
                  </p>
                  <p className="text-sm text-[#8E8E8E]">Annual Interest</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/auth/open-demat-account/"
                  className="px-8 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Trading with MTF
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-white border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Try Calculator
                </a>
              </div>
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-[650px] h-full flex items-center justify-center">
                <Image
                  src="/mtf.png"
                  alt="MTF Trading Screen"
                  width={250}
                  height={400}
                  className="object-contain drop-shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-0 w-64 h-64 bg-[#A8D063]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Benefits of using{" "}
              <span className="text-[#fbc40c]">
                Margin Trading Facility (MTF)
              </span>
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <FaChartLine className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-dark mb-3 group-hover:text-[#fbc40c] transition-colors">
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

      {/* MTF Calculator Section */}
      {/* MTF Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-3">
              MTF Calculator
            </h2>
            <div className="w-16 h-1 bg-[#fbc40c] mx-auto rounded-full mb-4"></div>
            <p className="text-base text-[#666] leading-relaxed">
              Check how MTF will work for your preferred stock
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left - Inputs */}
              <div>
                <h3 className="text-lg font-bold text-gray-dark mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#A8D063] rounded-lg flex items-center justify-center">
                    <FaSearch className="w-4 h-4 text-white" />
                  </div>
                  Input Details
                </h3>

                {/* Search Input */}
                <div className="mb-4">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search for Stocks"
                      value={calculatorInputs.stockName}
                      onChange={(e) =>
                        handleInputChange("stockName", e.target.value)
                      }
                      className="w-full pl-10 pr-3 py-2.5 text-sm bg-white rounded-lg border border-gray-200 focus:border-[#A8D063] focus:outline-none text-gray-dark placeholder-gray-400 transition-all"
                    />
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <label className="text-xs text-[#666] block mb-1">
                      Market Price
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.marketPrice || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "marketPrice",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      placeholder="₹0.00"
                      className="w-full text-base font-semibold text-gray-dark focus:outline-none"
                    />
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <label className="text-xs text-[#666] block mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.quantity || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "quantity",
                          parseInt(e.target.value) || 0
                        )
                      }
                      placeholder="0"
                      className="w-full text-base font-semibold text-gray-dark focus:outline-none"
                    />
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <label className="text-xs text-[#666] block mb-1">
                      Expected returns (%)
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.expectedReturns || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "expectedReturns",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      placeholder="0"
                      className="w-full text-base font-semibold text-gray-dark focus:outline-none"
                    />
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <label className="text-xs text-[#666] block mb-1">
                      Holding Period (days)
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.holdingPeriod || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "holdingPeriod",
                          parseInt(e.target.value) || 0
                        )
                      }
                      placeholder="0"
                      className="w-full text-base font-semibold text-gray-dark focus:outline-none"
                    />
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <label className="text-xs text-[#666] block mb-1">
                      Your Fund
                    </label>
                    <input
                      type="number"
                      value={calculatorInputs.yourFund || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "yourFund",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      placeholder="₹0.00"
                      className="w-full text-base font-semibold text-gray-dark focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Right - Outputs */}
              <div>
                <h3 className="text-lg font-bold text-gray-dark mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <FaChartLine className="w-4 h-4 text-white" />
                  </div>
                  Calculated Results
                </h3>

                {/* Results Grid */}
                <div className="space-y-3 mb-4">
                  {[
                    {
                      label: "Leverage",
                      value: `${calculated.leverage.toFixed(2)}X`,
                      color: "text-blue-600",
                    },
                    {
                      label: "Funded By ez wealth",
                      value: `₹${calculated.fundedByLemonn.toFixed(2)}`,
                      color: "text-gray-dark",
                    },
                    {
                      label: "Buy Value",
                      value: `₹${calculated.buyValue.toFixed(2)}`,
                      color: "text-gray-dark",
                    },
                    {
                      label: "Sell Value",
                      value: `₹${calculated.sellValue.toFixed(2)}`,
                      color: "text-gray-dark",
                    },
                    {
                      label: "Gross Profit",
                      value: `₹${calculated.grossProfit.toFixed(2)}`,
                      color: "text-green-600",
                    },
                    {
                      label: "Transaction Charges",
                      value: `₹${calculated.transactionCharges.toFixed(2)}`,
                      color: "text-gray-dark",
                    },
                    {
                      label: "Interest Amount",
                      value: `₹${calculated.interestAmount.toFixed(2)}`,
                      color: "text-gray-dark",
                    },
                    {
                      label: "Net Profit",
                      value: `₹${calculated.netProfit.toFixed(2)}`,
                      color: "text-[#A8D063]",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between"
                    >
                      <span className="text-xs text-[#666]">{item.label}</span>
                      <span className={`text-base font-bold ${item.color}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Returns Comparison */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t-2 border-gray-200">
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-xs text-[#666] mb-1">
                      Returns without MTF
                    </p>
                    <p className="text-lg font-bold text-gray-dark mb-1">
                      ₹{calculated.returnsWithoutMTF.toFixed(2)}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <HiTrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs font-semibold text-green-600">
                        {calculated.returnsWithoutMTFPercent.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div className="text-center p-3 bg-[#A8D063]/10 rounded-lg border-2 border-[#A8D063]">
                    <p className="text-xs text-[#666] mb-1">Returns with MTF</p>
                    <p className="text-lg font-bold text-[#A8D063] mb-1">
                      ₹{calculated.returnsWithMTF.toFixed(2)}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <HiTrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs font-semibold text-green-600">
                        {calculated.returnsWithMTFPercent.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-center text-[#999] mt-6">
              This calculator provides estimated values for illustration only.
              Actual results may vary.
            </p>
          </div>

          {/* Optional Image Below Calculator */}
          {/* <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative">
              <Image
                src="/mtf-illustration.png"
                alt="MTF Illustration"
                width={800}
                height={400}
                className="object-contain rounded-2xl mx-auto"
              />
            </div>
          </div> */}
        </div>
      </section>
      {/* What is MTF Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              What is MTF?
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mb-6"></div>

            <p className="text-lg text-[#666] max-w-4xl mx-auto mb-12">
              MTF (Margin Trading Facility) lets you buy more stocks than your
              available capital by borrowing funds from ez wealth.
            </p>
          </div>

          {/* Visual Explanation */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-100 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-sm text-[#666] mb-2">You Pay</p>
                <p className="text-4xl font-bold text-gray-dark mb-1">₹100</p>
              </div>

              <div className="text-4xl text-[#fbc40c]">+</div>

              <div className="text-center">
                <p className="text-sm text-[#666] mb-2">ez wealth Pays</p>
                <p className="text-4xl font-bold text-[#fbc40c] mb-1">₹400</p>
              </div>

              <div className="text-4xl text-gray-dark">=</div>

              <div className="text-center">
                <p className="text-sm text-[#666] mb-2">Stock worth</p>
                <p className="text-4xl font-bold text-blue-600 mb-1">₹500</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-[#666]">
                With unbeatable interest rate{" "}
                <span className="line-through">13.99%</span>{" "}
                <span className="text-lg font-bold text-blue-600">10.95%</span>
              </p>
            </div>
          </div>

          {/* Comparison Chart Image */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-dark mb-8">
              Comparison of returns on your investment
            </h3>
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="/chart.png"
                alt="MTF Returns Comparison"
                width={1000}
                height={600}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#fbc40c] transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-dark pr-4">
                    {faq.question}
                  </span>
                  {expandedFAQ === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-[#A8D063] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-[#666] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold  mb-6">
            Ready to Trade <span className="text-[#fbc40c]">with MTF?</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Open your free demat account and start trading with 4x leverage
            today.
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

export default MTFPage;
