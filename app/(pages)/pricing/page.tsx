'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaCheck, FaStar, FaRocket, FaUsers, FaBolt, FaCrown } from 'react-icons/fa';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  description: string;
  features: string[];
  recommended: boolean;
  icon: React.ReactNode;
  colorScheme: {
    gradient: string;
    bg: string;
    text: string;
    border: string;
  };
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'flat',
    name: 'EZ Flat',
    price: '₹11',
    period: '/order',
    tagline: 'Fixed price, regardless of size',
    description: 'Super Saver for frequent or high volume traders',
    features: [
      'Fixed ₹11 per order',
      'Exposure: As per VAR on NSE Website',
      'Hot Stocks – Daily',
      'No hidden charges',
      'Up to 4x equity cash intraday',
      'Up to 4x equity cash Delivery',
      'All segment margins as per exchange',
      'Additional margin against shares',
      'AMC: ₹300/year or ₹1000 lifetime',
    ],
    recommended: false,
    icon: <FaBolt className="w-8 h-8" />,
    colorScheme: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
    },
  },
  {
    id: 'monthly',
    name: 'EZ Monthly',
    price: '₹1,100',
    period: '/month',
    tagline: 'Unlimited trading at fixed cost',
    description: 'For investors, short term traders',
    features: [
      'Unlimited trades at ₹1,100/month',
      'Lowest brokerage for assisted trading',
      'Exposure: As per VAR on NSE Website',
      'NSE CASH and F&O, BSE',
      'Hot Stocks – Daily',
      'No hidden charges',
      'Exposure: As per VAR on NSE website',
      'Additional margin against shares',
      'AMC: ₹300/year or ₹1000 lifetime',
    ],
    recommended: true,
    icon: <FaStar className="w-8 h-8" />,
    colorScheme: {
      gradient: 'from-[#EF9309] to-[#D68108]',
      bg: 'bg-orange-50',
      text: 'text-[#EF9309]',
      border: 'border-[#EF9309]',
    },
  },
  {
    id: 'assist',
    name: 'EZ Assist',
    price: '0.01%',
    period: 'brokerage',
    tagline: 'Lowest brokerage for assisted trading',
    description: 'For investors, short term traders',
    features: [
      '0.01% brokerage on trades',
      'Lowest brokerage for assisted trading',
      'Exposure: As per VAR on NSE Website',
      'Hot Stocks – Daily',
      'No hidden charges',
      'Up to 4x equity cash intraday',
      'Up to 4x equity cash Delivery',
      'All segment margins as per exchange',
      'Additional margin against shares',
      'AMC: ₹300/year or ₹1000 lifetime',
    ],
    recommended: false,
    icon: <FaUsers className="w-8 h-8" />,
    colorScheme: {
      gradient: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
    },
  },
  {
    id: 'family',
    name: 'EZ Family',
    price: '₹7,999',
    period: '/year',
    tagline: 'For all segments, all exchanges',
    description: 'Mega Saver for pro traders',
    features: [
      'Unlimited trades at ₹7,999/year',
      'All segments, all exchanges',
      'Mega Saver for pro traders',
      'Exposure: As per VAR on NSE Website',
      'Hot Stocks – Daily',
      'No hidden charges',
      'Up to 4x equity cash intraday',
      'Up to 4x equity cash Delivery',
      'All segment margins as per exchange',
      'Additional margin against shares',
      'AMC: ₹300/year or ₹1000 lifetime',
    ],
    recommended: false,
    icon: <FaCrown className="w-8 h-8" />,
    colorScheme: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
    },
  },
];

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'equity' | 'currency' | 'commodity'>('equity');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-20">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EF9309]/10 backdrop-blur-sm border border-[#EF9309]/20 rounded-full px-4 py-2 mb-6">
              <FaRocket className="w-4 h-4 text-[#EF9309]" />
              <span className="text-sm font-semibold text-[#EF9309]">Transparent Pricing</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Pricing Plans
            </h1>
            <p className="text-lg lg:text-xl text-[#DADADA] leading-relaxed">
              Our plans are simple and tailored to scale for the needs of our customers to deliver exceptional value.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="max-w-8xl mx-auto py-32 px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative h-full ${
                  plan.recommended
                    ? 'lg:-mt-8 lg:mb-8 '
                    : ''
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#EF9309] to-[#D68108] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <FaStar className="w-4 h-4" />
                      RECOMMENDED
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl h-full flex flex-col ${
                    plan.recommended
                      ? 'border-[#EF9309] lg:scale-105 shadow-xl'
                      : `${plan.colorScheme.border} hover:border-[#EF9309]`
                  }`}
                >
                  {/* Card Header */}
                  <div className={`p-8 ${plan.recommended ? 'pt-12' : 'pt-8'}`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.colorScheme.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <div className="text-white">
                        {plan.icon}
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-gray-dark mb-2">
                      {plan.name}
                    </h3>

                    {/* Tagline */}
                    <p className={`text-sm font-semibold ${plan.colorScheme.text} mb-4`}>
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-gray-dark">
                          {plan.price}
                        </span>
                        <span className="text-xl text-[#666]">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#666] text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="px-8 pb-8 flex-1">
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.colorScheme.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <FaCheck className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-[#666] leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-8 pb-8">
                    <button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl ${
                        plan.recommended
                          ? 'bg-gradient-to-r from-[#EF9309] to-[#D68108] text-white hover:scale-105'
                          : `bg-gradient-to-r ${plan.colorScheme.gradient} text-white hover:scale-105`
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charges Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-dark mb-4">
              Detailed Charges Breakdown
            </h2>
            <p className="text-lg text-[#666]">
              Complete transparency on all charges and fees
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setActiveTab('equity')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'equity'
                    ? 'bg-[#EF9309] text-white shadow-lg'
                    : 'text-[#666] hover:text-gray-dark'
                }`}
              >
                Equity
              </button>
              <button
                onClick={() => setActiveTab('currency')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'currency'
                    ? 'bg-[#EF9309] text-white shadow-lg'
                    : 'text-[#666] hover:text-gray-dark'
                }`}
              >
                Currency
              </button>
              <button
                onClick={() => setActiveTab('commodity')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'commodity'
                    ? 'bg-[#EF9309] text-white shadow-lg'
                    : 'text-[#666] hover:text-gray-dark'
                }`}
              >
                Commodity
              </button>
            </div>
          </div>

          {/* Equity Table */}
          {activeTab === 'equity' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0A2745] to-[#1A3A5C] text-white">
                      <th className="text-left py-4 px-6 font-semibold">Wealth Discovery Charges</th>
                      <th className="text-left py-4 px-6 font-semibold">Equity Delivery</th>
                      <th className="text-left py-4 px-6 font-semibold">Equity Intraday</th>
                      <th className="text-left py-4 px-6 font-semibold">Equity Futures</th>
                      <th className="text-left py-4 px-6 font-semibold">Equity Options</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">STT/CTT</td>
                      <td className="py-4 px-6 text-[#666]">0.1% on both Buy and Sell</td>
                      <td className="py-4 px-6 text-[#666]">0.025% on the Sell Side</td>
                      <td className="py-4 px-6 text-[#666]">0.01% on the Sell Side</td>
                      <td className="py-4 px-6 text-[#666]">0.05% on the Sell Side (For Premium)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">Transaction/Turnover charges</td>
                      <td className="py-4 px-6 text-[#666]">NSE: 0.00325% | BSE: 0.00275%</td>
                      <td className="py-4 px-6 text-[#666]">NSE: 0.00325% | BSE: 0.00275%</td>
                      <td className="py-4 px-6 text-[#666]">NSE: 0.0019% | BSE: 0.0005%</td>
                      <td className="py-4 px-6 text-[#666]">NSE: 0.05% | BSE: 0.025%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">GST</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">SEBI Charges</td>
                      <td className="py-4 px-6 text-[#666]">₹10/Crore</td>
                      <td className="py-4 px-6 text-[#666]">₹10/Crore</td>
                      <td className="py-4 px-6 text-[#666]">₹10/Crore</td>
                      <td className="py-4 px-6 text-[#666]">₹10/Crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Currency Table */}
          {activeTab === 'currency' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0A2745] to-[#1A3A5C] text-white">
                      <th className="text-left py-4 px-6 font-semibold">Wealth Discovery Charges</th>
                      <th className="text-left py-4 px-6 font-semibold">Currency Futures</th>
                      <th className="text-left py-4 px-6 font-semibold">Currency Options</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">STT/CTT</td>
                      <td className="py-4 px-6 text-[#666]">No STT</td>
                      <td className="py-4 px-6 text-[#666]">No STT</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">Transaction/Turnover charges</td>
                      <td className="py-4 px-6 text-[#666]">NSE: 0.0011%</td>
                      <td className="py-4 px-6 text-[#666]">NSE: 0.0044%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">GST</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">SEBI Charges</td>
                      <td className="py-4 px-6 text-[#666]">₹15/Crore</td>
                      <td className="py-4 px-6 text-[#666]">₹15/Crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Commodity Table */}
          {activeTab === 'commodity' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0A2745] to-[#1A3A5C] text-white">
                      <th className="text-left py-4 px-6 font-semibold">Wealth Discovery Charges</th>
                      <th className="text-left py-4 px-6 font-semibold">Commodity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">STT/CTT</td>
                      <td className="py-4 px-6 text-[#666]">0.01% on Sell Side (Non-Agri)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">Transaction/Turnover charges</td>
                      <td className="py-4 px-6 text-[#666]">Non-Agri: 0.00260% | Agri: 0.00175%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">GST</td>
                      <td className="py-4 px-6 text-[#666]">18% on (Brokerage + Transaction Charge)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-dark">SEBI Charges</td>
                      <td className="py-4 px-6 text-[#666]">₹10/Crore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-dark mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-[#666]">
              Contact our support team or explore our FAQ section
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white border-2 border-[#EF9309] text-[#EF9309] font-semibold rounded-xl hover:bg-[#EF9309] hover:text-white transition-all">
              View FAQs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;