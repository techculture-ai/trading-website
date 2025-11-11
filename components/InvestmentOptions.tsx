"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaBullhorn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
    title: "Stocks",
    description: "Invest effortlessly in 2200+ stocks.",
    href: "/invest/stocks/",
    iconBg: "bg-[#00D09C]/10",
    iconColor: "text-[#00D09C]",
  },
  {
    id: 2,
    icon: <FaChartBar className="w-7 h-7" />,
    title: "F&O",
    description: "Make the most of the market volatility.",
    href: "/invest/futures-and-options/",
    iconBg: "bg-[#fbc40c]/10",
    iconColor: "text-[#fbc40c]",
  },
  {
    id: 3,
    icon: <FaChartPie className="w-7 h-7" />,
    title: "Mutual Funds",
    description: "Choose professionally managed funds.",
    href: "/invest/mutual-funds/",
    iconBg: "bg-[#00D09C]/10",
    iconColor: "text-[#00D09C]",
  },
  {
    id: 4,
    icon: <FaBullhorn className="w-7 h-7" />,
    title: "IPOs",
    description: "Seize opportunities and invest in new ventures.",
    href: "/invest/ipos/",
    iconBg: "bg-[#fbc40c]/10",
    iconColor: "text-[#fbc40c]",
  },
];

const InvestmentOptions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScreenContent, setShowScreenContent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay for screen content animation
            setTimeout(() => {
              setShowScreenContent(true);
            }, 800);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 lg:py-24 imageBgWifi relative overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-gray-dark text-3xl lg:text-[38px] font-bold mb-3">
                Find Your Next Investment on{" "}
                <span className="text-[#fbc40c]">ez wealth</span>
              </h2>
              <div className="w-20 h-1 bg-[#fbc40c] rounded-full"></div>
            </div>

            {/* Investment Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {investmentOptions.map((option, index) => (
                <Link key={option.id} href={option.href}>
                  <div
                    className={`group bg-white border border-[#E2E8FE] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`${option.iconBg} ${option.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
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
                        className="w-6 h-6 text-[#fbc40c]"
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
            <div className="text-center lg:text-left">
              <p className="text-[#8E8E8E] text-base lg:text-lg mb-6">
                Start investing today with zero account opening fees
              </p>
              <Link href="/auth/open-demat-account/">
                <button className="px-10 py-3 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
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

          {/* Right Images - Phone with Screen Content */}
          <div className="order-1 lg:order-2 relative h-full flex items-center justify-center">
            {/* Phone Frame Image - Appears first */}
            <div
              className={`flex justify-center items-center w-full h-full transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <Image
                src="/usstock_widget_home.avif"
                alt="Phone Frame"
                width={400}
                height={800}
                className="object-contain drop-shadow-2xl mx-auto"
                priority
              />
            </div>

            {/* Screen Content Image - Appears with delay on top of phone */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                showScreenContent
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center justify-center w-[85%] h-[85%]">
                <Image
                  src="/vehicles_img.avif"
                  alt="Screen Content"
                  width={400}
                  height={800}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Floating Stats Card 1 - Top Left */}
            <div
              className={`hidden lg:block absolute top-8 -left-8 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 -translate-x-8 -translate-y-8"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 w-48 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaChartLine className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total Invested</p>
                    <p className="text-lg font-bold text-gray-dark">₹2.5L</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">+12.5%</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card 2 - Bottom Right */}
            <div
              className={`hidden lg:block absolute bottom-8 -right-8 transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0 translate-y-0"
                  : "opacity-0 translate-x-8 translate-y-8"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 w-48 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaChartBar className="w-5 h-5 text-[#fbc40c]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Today's Profit</p>
                    <p className="text-lg font-bold text-gray-dark">₹3,450</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-[#fbc40c]">
                    5 winning trades
                  </span>{" "}
                  today
                </div>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-1/4 right-4 w-32 h-32 bg-[#fbc40c]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 left-4 w-32 h-32 bg-[#00D09C]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
