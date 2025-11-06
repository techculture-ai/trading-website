'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Stats from './stats';


const Hero = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [counter, setCounter] = useState(0);
  
  // Rotating words for the title animation
  const words = ['Stocks', 'Options', 'Futures', 'Commodity', 'ETFs', 'IPO', 'NFO', "Funds"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPhones, setShowPhones] = useState(false);

  useEffect(() => {
    // After 3 seconds, trigger the transition from girl to phones
    const timer = setInterval(() => {
      setShowPhones((prev) => !prev);
    }, 10000);

    // return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const targetNumber = 15;
    const duration = 2000;
    const steps = 50;
    const increment = targetNumber / steps; 
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounter(Math.floor(increment * currentStep));
      } else {
        setCounter(targetNumber);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const handleMobileSubmit = () => {
    if (mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    console.log('Mobile:', mobileNumber);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    if (error) setError('');
  };

  const popularStocks = [
    { name: 'Tata Motors', href: '/stocks/tata-motors-ltd-share-price/' },
    { name: 'SBI', href: '/stocks/state-bank-of-india-ltd-share-price/' },
    { name: 'HDFC Bank', href: '/stocks/hdfc-bank-ltd-share-price/' },
    { name: 'Infosys', href: '/stocks/infosys-ltd-share-price/' },
    { name: 'ITC', href: '/stocks/itc-ltd-share-price/' },
    { name: 'Adani Enterprise', href: '/stocks/adani-enterprises-ltd-share-price/' },
    { name: 'IRFC', href: '/stocks/indian-railway-finance-corp-ltd-share-price/' },
    { name: 'Jio', href: '/stocks/jio-financial-services-ltd-share-price/' },
  ];

  return (
    <>
      {/* Main Hero Section */}
      <section className="w-full overflow-hidden relative">
        {/* <div className="absolute inset-0 bg-black/80"></div> */}
        <div className="max-w-8xl mx-auto lg:px-24 md:px-10 px-5">
          <div className="flex flex-col lg:flex-row items-end justify-between lg:pt-32 pt-16">
            {/* Left Content */}
            <div className="w-full lg:w-2/3 lg:pb-0 pb-8 pr-36">
              <div>
                {/* Title with Lightning Icon - Desktop */}
                <div className="items-start hidden gap-3 lg:flex md:flex pt-4 lg:pb-8 md:pb-6">
                  <h1 className="lg:text-[60px] text-3xl text-[#0A2745] font-bold leading-tight">
                    Investing & Trading Platform for{" "}
                    <span
                      className={`inline-block transition-all duration-300 ${
                        isAnimating
                          ? "opacity-0 translate-y-2"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      <span className="text-[#00D09C]">
                        {words[currentWordIndex]}
                      </span>
                    </span>
                  </h1>
                </div>

                {/* Mobile Title */}
                <div className="items-start flex gap-2 lg:hidden md:hidden pt-4 pb-6">
                  <div
                    className="w-12 flex-shrink-0 mt-1"
                    title="Lightning strike"
                  >
                    <svg
                      viewBox="0 0 64 64"
                      className="w-full h-full"
                      fill="none"
                    >
                      <path
                        d="M35 2L15 34h14L24 62l30-34H40l11-26z"
                        fill="#FFB800"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                  <h1 className="text-3xl text-[#0A2745] font-bold leading-tight">
                    Investing & Trading
                    <br />
                    Platform for
                    <br />
                    <span
                      className={`inline-block transition-all duration-300 ${
                        isAnimating
                          ? "opacity-0 translate-y-2"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      <span className="text-[#00D09C]">
                        {words[currentWordIndex]}
                      </span>
                    </span>
                  </h1>
                </div>

                {/* Free Account Text - Desktop */}
                <p className="text-[#8E8E8E] text-sm font-medium hidden md:flex lg:pb-3 md:pb-2">
                  Open your{" "}
                  <span className="text-[#EF9309]">&nbsp;FREE&nbsp;</span> demat
                  account in minutes!
                </p>

                {/* Mobile Number Input - Desktop */}
                <div className="hidden md:block lg:pb-5 md:pb-4">
                  <div className="max-w-md">
                    <div className="flex border border-[#DBDBDB] rounded-lg items-center py-1.5 px-2">
                      <span className="text-[#9a9a9a] border-r-[0.4px] border-[#8e8e8e80] px-2 text-base font-normal">
                        +91&nbsp;
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        inputMode="numeric"
                        autoComplete="off"
                        className="text-base pl-3 text-white bg-transparent w-full outline-0 font-normal placeholder:text-[#8E8E8E]"
                        required
                        minLength={10}
                        maxLength={10}
                        value={mobileNumber}
                        onChange={handleInputChange}
                      />
                      <div className="flex justify-end">
                        <button
                          className="text-sm px-2.5 py-2.5 text-white font-medium rounded-lg bg-[#EF9309] hover:bg-[#D68108] transition-colors"
                          onClick={handleMobileSubmit}
                        >
                          <FaArrowRightLong className="text-[#082745] w-4 animate-arrow-pulse" />
                        </button>
                      </div>
                    </div>
                    <div
                      className={`font-normal pt-1 text-xs text-red-500 ${
                        error ? "visible" : "invisible"
                      }`}
                    >
                      {error || "error"}
                    </div>
                  </div>
                </div>

                {/* Start Now Button - Desktop */}
                <div className="hidden lg:flex lg:pb-6">
                  <button className="lg:px-10 px-7 lg:py-3 py-2 bg-[#EF9309] hover:bg-[#D68108] text-[#0A2745] flex lg:text-base text-sm rounded-md items-center gap-2 font-medium shadow-lg transition-all hover:scale-105">
                    Start Now
                    <FaArrowRightLong className="text-[#0A2745] relative left-[3px] w-4" />
                  </button>
                </div>

                {/* Stats - Desktop */}
                <div className="md:flex lg:gap-16 gap-10 hidden lg:pb-8 md:pb-6">
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="border-[0.4px] border-[#ffffff33] rounded-full p-2 flex-shrink-0">
                        <img
                          src="https://stock-logos.dhan.co/static-openweb/modal_active_user.svg"
                          className="lg:w-4 w-3"
                          alt="Active users"
                        />
                      </div>
                      <div className="lg:text-base text-sm text-gray-500 font-normal">
                        1 Mn+ Active Users
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="border-[0.4px] border-[#ffffff33] rounded-full p-2 flex-shrink-0">
                        <img
                          src="https://stock-logos.dhan.co/static-openweb/modal_active_user.svg"
                          className="lg:w-4 w-3"
                          alt="Active users"
                        />
                      </div>
                      <div className="lg:text-base text-sm text-gray-500 font-normal">
                        1 Mn+ Active Users
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="border-[0.4px] border-[#ffffff33] rounded-full justify-center flex p-2 flex-shrink-0">
                        <img
                          src="https://stock-logos.dhan.co/static-openweb/star.svg"
                          className="lg:w-4 w-3"
                          alt="Rating"
                        />
                      </div>
                      <div className="lg:text-base text-sm text-gray-500 font-normal">
                        4.5 Play Store Rating
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile View - Popular Stocks and CTA */}
                <div className="md:hidden pt-8">
                  {/* Popular Stocks */}
                  <div className="pb-3 flex gap-2 overflow-x-auto noscrollbar-x">
                    {popularStocks.map((stock, index) => (
                      <a key={index} href={stock.href}>
                        <button className="rounded-md border border-[#ffffff1a] whitespace-nowrap font-normal text-[#8e8e8e] hover:bg-[#ffffff1a] px-4 py-1 text-xs transition-colors">
                          {stock.name}
                        </button>
                      </a>
                    ))}
                  </div>

                  <p className="text-[#8E8E8E] text-sm font-medium pt-2 text-center">
                    <span className="text-[#EF9309]">1 Cr+ App Downloads</span>{" "}
                    on Play Store!
                  </p>

                  {/* Get Dhan Button - Mobile */}
                  <div className="pt-4 flex justify-center pb-8">
                    <a
                      href="https://dhan.go.link/gaXqf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-7 py-2 bg-[#EF9309] hover:bg-[#D68108] text-[#0A2745] flex text-sm rounded-md items-center gap-2 font-medium shadow-lg transition-colors">
                        Get Dhan
                        <FaArrowRightLong className="text-[#0A2745] relative left-[3px] w-4" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Desktop */}
            {/* <div className="hidden lg:flex w-1/3 justify-end items-end relative">
              <Image src="/dot-circle.svg" alt="Rotating Icon" fill className="absolute object-contain " style={{animation: "spin 0.5s linear infinite"}}/>
              <div className="relative w-full h-[550px]">
                <Image
                  src="/hero-bg.png"
                  alt="Trading Platform"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="45vw"
                />
                
                <div className="absolute bottom-20 -left-40 animate-slideInLeft">
                  <div className="bg-white rounded-full shadow-2xl p-3 min-w-[180px] flex gap-3 items-center">
                    
                    <div className="flex -space-x-2 ">
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user1.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user2.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user1.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user2.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-dark">{counter}</span>
                        <span className="text-2xl font-bold text-gray-dark">k+</span>
                      </div>
                      
                      
                      <p className="text-xs text-[#8E8E8E] font-medium">Active Users</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div> */}

            <div className="hidden lg:flex w-1/3 justify-end items-end relative">
              {/* Rotating Background Circle */}
              <Image
                src="/dot-circle.svg"
                alt="Rotating Icon"
                fill
                className="absolute object-contain"
                style={{ animation: "spin 20s linear infinite" }}
              />

              <div className="relative w-full h-[550px]">
                {/* Girl Image - Fades out and zooms out */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    showPhones
                      ? "opacity-0 scale-150 pointer-events-none"
                      : "opacity-100 scale-100"
                  }`}
                >
                  <Image
                    src="/hero-bg.png"
                    alt="Trading Platform"
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="45vw"
                  />
                </div>

                {/* Phone Images - Fade in with staggered animations */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    showPhones ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Left Phone - Indian Market (slides in from bottom-left) */}
                  <div
                    className={`absolute transition-all duration-1000 ${
                      showPhones
                        ? "translate-y-0 translate-x-0 opacity-100"
                        : "translate-y-32 -translate-x-16 opacity-0"
                    }`}
                    style={{
                      left: "5%",
                      bottom: "-10%",
                      transform: showPhones
                        ? "rotate(-8deg) translateY(0)"
                        : "rotate(-8deg) translateY(128px)",
                      transitionDelay: "800ms",
                      zIndex: 1,
                    }}
                  >
                    <div className="relative w-[180px] h-[360px]">
                      <Image
                        src="/phone1.webp"
                        alt="Indian Market"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Center Phone - Net Worth (appears first, scales up) */}
                  <div
                    className={`absolute transition-all duration-1000 ${
                      showPhones
                        ? "scale-100 opacity-100"
                        : "scale-50 opacity-0"
                    }`}
                    style={{
                      left: "50%",
                      bottom: "-5%",
                      transform: showPhones
                        ? "translateX(-50%) scale(1)"
                        : "translateX(-50%) scale(0.5)",
                      transitionDelay: "200ms",
                      zIndex: 3,
                    }}
                  >
                    <div className="relative w-[200px] h-[400px]">
                      <Image
                        src="/phone2.webp"
                        alt="Net Worth"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Right Phone - US Market (slides in from bottom-right) */}
                  <div
                    className={`absolute transition-all duration-1000 ${
                      showPhones
                        ? "translate-y-0 translate-x-0 opacity-100"
                        : "translate-y-32 translate-x-16 opacity-0"
                    }`}
                    style={{
                      right: "5%",
                      bottom: "-10%",
                      transform: showPhones
                        ? "rotate(8deg) translateY(0)"
                        : "rotate(8deg) translateY(128px)",
                      transitionDelay: "600ms",
                      zIndex: 2,
                    }}
                  >
                    <div className="relative w-[180px] h-[360px]">
                      <Image
                        src="/phone3.webp"
                        alt="US Market"
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Counter Box Overlay - Always visible */}
                <div className="absolute bottom-20 -left-40 animate-slideInLeft z-10">
                  <div className="bg-white rounded-full shadow-2xl p-3 min-w-[180px] flex gap-3 items-center">
                    {/* User Avatars */}
                    <div className="flex -space-x-2">
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user1.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user2.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user1.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                      <div className="w-11 h-11 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <Image
                          src="/user2.jpg"
                          alt="User"
                          width={44}
                          height={44}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Counter Number */}
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-dark">
                          {counter}
                        </span>
                        <span className="text-2xl font-bold text-gray-dark">
                          k+
                        </span>
                      </div>

                      {/* Counter Label */}
                      <p className="text-xs text-[#8E8E8E] font-medium">
                        Active Users
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="flex md:hidden justify-center w-full pb-8">
              <div className="relative w-3/5 aspect-square">
                <Image
                  draggable={false}
                  alt="Dhan Mobile App"
                  fill
                  src="/images/hero-mobile.png"
                  className="object-contain"
                  quality={80}
                  sizes="60vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Categories Section */}
      <section className="w-full bg-gray-100">
        <div className="max-w-8xl mx-auto lg:px-24 md:px-10 px-2 lg:py-5 py-2">
          {/* <div className="flex lg:gap-3 md:gap-3 gap-2 lg:p-1 p-2 overflow-x-auto justify-start lg:justify-center noscrollbar-x">
            <a href="/stocks/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/equi.svg"
                  alt="Stocks"
                />
                Stocks
              </button>
            </a>
            <a href="/options/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/cepe.svg"
                  alt="Options"
                />
                Options
              </button>
            </a>
            <a href="/futures/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/FUTURES.svg"
                  alt="Futures"
                />
                Futures
              </button>
            </a>
            <a href="/commodity/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/COMMODITIES.svg"
                  alt="Commodity"
                />
                Commodity
              </button>
            </a>
            <a href="/etf/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/ETF.svg"
                  alt="ETFs"
                />
                ETFs
              </button>
            </a>
            <a href="/mutual-funds/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm whitespace-nowrap transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/mf.svg"
                  alt="Mutual Funds"
                />
                Mutual Funds
              </button>
            </a>
            <a href="/ipo/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm whitespace-nowrap transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="https://stock-logos.dhan.co/static-openweb/iippoo.svg"
                  alt="IPO"
                />
                IPO
              </button>
            </a>
            <a href="/nfo/">
              <button className="text-white font-normal flex gap-2 lg:text-base justify-center items-center hover:bg-[#ffffff1a] rounded-lg lg:px-4 md:px-4 px-6 py-2 text-xs md:text-sm whitespace-nowrap transition-colors">
                <img
                  className="lg:w-6 md:w-5 w-5"
                  src="/_next/static/media/NFO.8d99a824.svg"
                  alt="NFO"
                />
                NFO
              </button>
            </a>
          </div> */}
          <Stats />
        </div>
      </section>
    </>
  );
};

export default Hero;