"use client";

import React from "react";
import {
  FaUsers,
  FaMobileAlt,
  FaExchangeAlt,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaBolt,
  FaAward,
} from "react-icons/fa";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  stats?: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Loved & Trusted by 1M+ Users",
    description:
      "Join over 1 million active traders and investors who trust ez wealth for their financial journey. Rated 4.5+ on app stores.",
    icon: <FaUsers className="w-8 h-8" />,
    iconBg: "from-[#EF9309] to-[#D68108]",
    stats: "1M+ Users",
  },
  {
    id: 2,
    title: "Easy Accessibility",
    description:
      "Trade anywhere, anytime with our powerful mobile app and web platform. Seamless experience across all devices.",
    icon: <FaMobileAlt className="w-8 h-8" />,
    iconBg: "from-[#00D09C] to-[#00C08A]",
    stats: "24/7 Access",
  },
  {
    id: 3,
    title: "Switch Between 2 Modes",
    description:
      "Effortlessly switch between Trading and Investment modes. Optimize your strategy with dedicated interfaces for each.",
    icon: <FaExchangeAlt className="w-8 h-8" />,
    iconBg: "from-[#0A2745] to-[#1A3A5C]",
    stats: "Dual Mode",
  },
  {
    id: 4,
    title: "Best-in-Class Trading Tools",
    description:
      "Advanced charts, real-time data, options strategy builder, and TradingView integration. Everything you need to succeed.",
    icon: <FaChartLine className="w-8 h-8" />,
    iconBg: "from-[#EF9309] to-[#D68108]",
    stats: "Pro Tools",
  },
];

const additionalBenefits = [
  {
    id: 1,
    icon: <FaShieldAlt className="w-5 h-5" />,
    title: "Bank-Grade Security",
    description: "Your data is protected with industry-leading encryption",
  },
  {
    id: 2,
    icon: <FaRocket className="w-5 h-5" />,
    title: "Lightning Fast",
    description:
      "Execute trades in milliseconds with our robust infrastructure",
  },
  {
    id: 3,
    icon: <FaBolt className="w-5 h-5" />,
    title: "Zero Brokerage",
    description: "Trade equity delivery at absolutely zero cost",
  },
  {
    id: 4,
    icon: <FaAward className="w-5 h-5" />,
    title: "Award Winning",
    description: "Recognized for innovation and customer satisfaction",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden imageBgSaving">
      {/* Background Decoration */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF9309]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D09C]/5 rounded-full blur-3xl"></div> */}

      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#EF9309]/10 rounded-full px-4 py-2 mb-4">
              <FaAward className="w-4 h-4 text-[#EF9309]" />
              <span className="text-sm font-semibold text-[#EF9309]">
                Why ez wealth
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Why Open Demat Account{" "}
              <span className="block mt-2 text-[#EF9309]">with ez wealth?</span>
            </h2>
            <p className="text-lg text-[#666] max-w-2xl">
              You can Invest, Trade, Learn & Track Your Wealth all from one
              account.
            </p>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="/open-demat-account/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Investing for FREE
              <FaRocket className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#EF9309]"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                {/* Stats Badge */}
                {feature.stats && (
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-[#EF9309] rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-bold text-[#EF9309]">
                      {feature.stats}
                    </span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-dark mb-3 group-hover:text-[#EF9309] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Gradient Border */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#EF9309] to-[#00D09C] opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-300"></div> */}
            </div>
          ))}
        </div>

        {/* Additional Benefits - Compact Grid */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-dark mb-6 text-center">
            More Reasons to Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#EF9309]/10 to-[#EF9309]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-[#EF9309]">{benefit.icon}</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-dark text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-[#666]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-12 text-center">
          <a
            href="/open-demat-account/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Investing for FREE
            <FaRocket className="w-4 h-4" />
          </a>
        </div>
      </div>

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
    </section>
  );
};

export default WhyChooseUs;
