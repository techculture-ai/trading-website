'use client';

import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';

interface InvestmentOption {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  iconBg: string;
  iconColor: string;
}

const investmentOptions: InvestmentOption[] = [
  {
    id: 1,
    icon: <FaChartLine className="w-7 h-7" />,
    title: 'Stocks',
    description: 'Invest effortlessly in 2200+ stocks.',
    href: '/stocks/',
    iconBg: 'bg-[#00D09C]/10',
    iconColor: 'text-[#00D09C]',
  },
  {
    id: 2,
    icon: <FaChartBar className="w-7 h-7" />,
    title: 'F&O',
    description: 'Make the most of the market volatility.',
    href: '/options/',
    iconBg: 'bg-[#EF9309]/10',
    iconColor: 'text-[#EF9309]',
  },
  {
    id: 3,
    icon: <FaChartPie className="w-7 h-7" />,
    title: 'Mutual Funds',
    description: 'Choose professionally managed funds.',
    href: '/mutual-funds/',
    iconBg: 'bg-[#00D09C]/10',
    iconColor: 'text-[#00D09C]',
  },
  {
    id: 4,
    icon: <FaBullhorn className="w-7 h-7" />,
    title: 'IPOs',
    description: 'Seize opportunities and invest in new ventures.',
    href: '/ipo/',
    iconBg: 'bg-[#EF9309]/10',
    iconColor: 'text-[#EF9309]',
  },
];

const InvestmentOptions: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24 imageBgWifi">
      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-gray-dark text-3xl lg:text-4xl font-bold mb-3">
            Find Your Next Investment on{' '}
            <span className="text-[#EF9309]">EzWealth</span>
          </h2>
          <div className="w-20 h-1 bg-[#EF9309] mx-auto rounded-full"></div>
        </div>

        {/* Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investmentOptions.map((option) => (
            <Link key={option.id} href={option.href}>
              <div className="group bg-white border border-[#E2E8FE] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                {/* Icon */}
                <div className={`${option.iconBg} ${option.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>

                {/* Title */}
                <h3 className="text-gray-dark text-xl lg:text-2xl font-bold mb-3">
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-[#8E8E8E] text-sm lg:text-base leading-relaxed">
                  {option.description}
                </p>

                {/* Arrow Icon on Hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-6 h-6 text-[#EF9309]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-[#8E8E8E] text-base lg:text-lg mb-6">
            Start investing today with zero account opening fees
          </p>
          <Link href="/open-demat-account/">
            <button className="px-10 py-3 bg-[#EF9309] hover:bg-[#D68108] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto">
              Open Free Account
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;