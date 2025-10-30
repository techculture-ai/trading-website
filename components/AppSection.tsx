'use client';

import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';

const DhanAppSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'Dhan App',
      logo: '/_next/static/media/Dhanlogo.8a85768d.svg',
      label: 'App',
      type: 'light',
      title: 'Dhan App',
      description:
        'Carefully built to give you an incredible mobile trading experience with margin, charts, option chain, reliable order execution & much more! Millions of users rely on Dhan App for their daily trading and investing needs. Best part? The App is constantly evolving!',
      link: '/trading-app/',
      buttonText: 'Explore Dhan App',
      image: 'https://stock-logos.dhan.co/static-new-images/dhanwebtrial.png',
    },
    {
      id: 1,
      name: 'Dhan Web',
      logo: '/_next/static/media/Dhanlogo.8a85768d.svg',
      label: 'Web',
      type: 'light',
      title: 'Dhan Web',
      description:
        'Experience powerful web trading with advanced charting, real-time data, and seamless execution. Trade from any browser with our feature-rich web platform designed for serious traders.',
      link: '/web-trading-platform/',
      buttonText: 'Explore Dhan Web',
      image: 'https://stock-logos.dhan.co/static-new-images/dhanweb.png',
    },
    {
      id: 2,
      name: 'Options Trader App',
      logo: 'https://stock-logos.dhan.co/static-openweb/dhanoptrader.svg',
      label: 'App',
      type: 'blue',
      title: 'Options Trader App',
      description:
        'Advanced options trading app built specifically for F&O traders. Strategy builder, flash trade, Greeks analysis, and comprehensive margin calculator all in one powerful mobile app.',
      link: '/options-trader/',
      buttonText: 'Explore Options Trader',
      image: 'https://stock-logos.dhan.co/static-new-images/optionstrader.png',
    },
    {
      id: 3,
      name: 'Options Trader Web',
      logo: 'https://stock-logos.dhan.co/static-openweb/dhanoptrader.svg',
      label: 'Web',
      type: 'blue',
      title: 'Options Trader Web',
      description:
        'Professional-grade options trading platform for the web. Build, analyze, and execute complex option strategies with advanced tools and real-time Greeks.',
      link: '/options-trader-web/',
      buttonText: 'Explore Options Web',
      image: 'https://stock-logos.dhan.co/static-new-images/optionsweb.png',
    },
    {
      id: 4,
      name: 'TV + Dhan',
      logo: 'https://stock-logos.dhan.co/static-openweb/dhanplustv.svg',
      label: '',
      type: 'lightblue',
      title: 'Trade from tv.dhan.co',
      description:
        'Experience TradingView charting power integrated with Dhan trading. Access advanced charts, technical indicators, and place orders directly from TradingView interface.',
      link: '/tradingview/',
      buttonText: 'Explore TV + Dhan',
      image: 'https://stock-logos.dhan.co/static-new-images/tvdhan.png',
    },
    {
      id: 5,
      name: 'TradingView',
      logo: 'https://stock-logos.dhan.co/static-openweb/tv.svg',
      label: '',
      type: 'lightblue',
      title: 'Connect to TradingView',
      description:
        'Connect your Ezwealth account to TradingView and trade directly from tradingview.com. Use premium TradingView features with seamless Ezwealth order execution.',
      link: '/connect-to-tradingview/',
      buttonText: 'Connect Now',
      image: 'https://stock-logos.dhan.co/static-new-images/tradingview.png',
    },
    {
      id: 6,
      name: 'DhanHQ',
      logo: 'https://stock-logos.dhan.co/static-openweb/dhanhq.svg',
      label: '',
      type: 'skyblue',
      title: 'DhanHQ Trading APIs',
      description:
        'Build your own trading applications with DhanHQ APIs. Connect apps, run algorithms, and automate your trading strategies with our comprehensive API suite - absolutely FREE!',
      link: 'https://dhanhq.co/',
      buttonText: 'Explore DhanHQ',
      image: 'https://stock-logos.dhan.co/static-new-images/dhanhq.png',
    },
    {
      id: 7,
      name: 'ScanX',
      logo: '/_next/static/media/Scanx.f9b57e16.svg',
      label: 'ScanX',
      type: 'skyblue',
      title: 'ScanX Stock Screener',
      description:
        '50+ Readymade Screeners, Live Market Insights & Instant Trade Execution. Discover trading opportunities with powerful stock screening and analysis tools.',
      link: '/scanx-stock-screener/',
      buttonText: 'Explore ScanX',
      image: 'https://stock-logos.dhan.co/static-new-images/scanx.png',
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <div className="dhanappweb relative">
      <div className="spiral_bg bg-gradient-to-br from-[#2D1B69] via-[#1e3a8a] to-[#1e40af] relative">
        <div className="mx-auto max-w-8xl">
          <div className="lg:h-[720px] md:h-[500px] h-[720px] relative">
            {/* Header */}
            <div className="flex items-center pb-5 pt-10 justify-center px-4">
              <img
                src="https://stock-logos.dhan.co/static-openweb/light2.png"
                alt="lightning"
                className="w-8 lg:w-10 md:w-6"
              />
              <p className="text-white font-medium text-xl lg:text-3xl ml-2">
                Building Awesome
                <span className="text-[#EF9309] text-xl lg:text-3xl md:inline block ml-1">
                  Investing & Trading Platforms
                </span>
              </p>
            </div>

            {/* Content */}
            <div className="lg:pt-24 md:pt-10 px-5 md:px-10 lg:px-24">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-36 md:pt-1">
                {/* Left Side - Text Content */}
                <div className="flex flex-col">
                  <p className="text-white md:text-left text-center font-medium lg:text-5xl text-xl">
                    {currentTab.title}
                  </p>
                  <p className="text-[#8E8E8E] md:text-left text-center font-normal lg:text-lg text-sm lg:pt-10 pt-2 lg:leading-6">
                    {currentTab.description}
                  </p>
                  <div className="lg:pt-16 pt-5 flex md:justify-start justify-center">
                    <a href={currentTab.link} className="w-max">
                      <button className="lg:px-10 px-7 lg:py-3 py-2 md:py-2 bg-[#EF9309] hover:bg-[#D68108] text-[#0A2745] rounded-lg md:text-base text-sm flex items-center gap-2 font-bold shadow-lg transition-all hover:scale-105">
                        {currentTab.buttonText}
                        <FaArrowRightLong className="text-[#0A2745] relative left-[3px] w-5" />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center relative">
                  <Image
                    draggable={false}
                    alt={currentTab.title}
                    width={500}
                    height={500}
                    src={currentTab.image}
                    className="absolute lg:w-[28%] md:bottom-[13%] w-[66%] bottom-[8%] md:w-[33%] transition-all duration-500"
                    quality={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <ul
          className="md:backtabs blurbg backdrop-blur-md bg-[#0A2745]/30 z-50 lg:py-6 py-3.5 md:px-10 px-5 absolute bottom-0 overflow-x-auto noscrollbar-x lg:justify-center justify-start flex w-full border-t border-white/10"
          role="tablist"
        >
          <div className="m-auto max-w-8xl flex gap-3">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`
                  ${tab.id <= 1 ? 'md:w-36 w-28' : tab.id <= 3 ? 'md:w-44 w-40' : 'md:w-36 w-28'}
                  h-8 lg:h-12 md:h-10 rounded-[10px] border-[0.5px] flex items-center justify-center gap-1 
                  border-[#dadada33] p-2 cursor-pointer transition-all duration-300
                  ${
                    activeTab === index
                      ? 'opacity-100 bg-white/10 border-[#EF9309] scale-105'
                      : 'lg:opacity-50 opacity-70 hover:opacity-100 hover:bg-white/5'
                  }
                `}
                role="tab"
                aria-selected={activeTab === index}
              >
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={tab.logo}
                    alt={tab.name}
                    className={`
                      ${tab.id <= 1 || tab.id === 7 ? 'md:w-6/12 w-14' : tab.id <= 3 ? 'md:w-[120px] w-28' : tab.id === 6 ? 'md:w-24 w-20' : 'md:w-28 w-24'}
                    `}
                  />
                  {tab.label && (
                    <span className="text-white text-sm font-normal mb-0.5">
                      {tab.label}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DhanAppSection;