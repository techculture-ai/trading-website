'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaSearch, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleDropdownEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0A2745] transition-all duration-500 ">
      <div className="max-w-8xl mx-auto px-4 lg:px-24">
        <div className="flex justify-between gap-4 items-center ">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Dhan Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Who We Are Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-[15px] text-white hover:text-white flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6">
                Who We Are
                <FaChevronDown className={`w-2.5 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2">
                  <div className="w-[650px] bg-white border border-[#E2E8FE] rounded-[14px] shadow-xl p-3 grid grid-cols-2 gap-2">
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/drop-1.svg"
                      title="Dhan App"
                      description="Stock Market App built for Super Traders & Long Term Investors."
                      href="/trading-app/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/drop-5.svg"
                      title="Dhan Web"
                      description="Web Trading Platform for those who love to trade from the big screen."
                      href="/web-trading-platform/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/drop-3.svg"
                      title="Options Trader App"
                      description="Option Trading App built especially for India's F&O Traders."
                      href="/options-trader/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/headerdrop.svg"
                      title="Options Trader Web"
                      description="Option Trading Platform to build, analyze, & execute F&O trades."
                      href="/options-trader-web/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/tv_dhan_header.svg"
                      title="Trade from tv.dhan.co"
                      description="Trade with TradingView Chart features for FREE on tv.dhan.co."
                      href="/tradingview/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/trading-view-new.svg"
                      title="Connect to TradingView"
                      description="Connect Dhan to TradingView - Place orders from tradingview.com"
                      href="/connect-to-tradingview/"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Our Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('investments')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-[15px] text-white hover:text-white flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6">
                Our Services
                <FaChevronDown className={`w-2.5 transition-transform duration-200 ${openDropdown === 'investments' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'investments' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2">
                  <div className="w-[650px] bg-white border border-[#E2E8FE] rounded-[14px] shadow-xl p-3 grid grid-cols-2 gap-2">
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/equi.svg"
                      title="Stocks"
                      description="MTF, Instant Pledge, & more for online stock trading."
                      href="/stocks/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/COMMODITIES.svg"
                      title="Commodity"
                      description="Dashboard, Pledge Margin, & Charts for commodity trading."
                      href="/commodity/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/cepe.svg"
                      title="Options"
                      description="Strategy Builder, Flash Trade, & Margin for options trading."
                      href="/options/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/FUTURES.svg"
                      title="Futures"
                      description="Charts, Futures Chain, & Margin for futures trading."
                      href="/futures/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/ETF.svg"
                      title="ETFs"
                      description="SIP, Forever Order, & Draft Order for investing in ETFs."
                      href="/etf/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/mf.svg"
                      title="Mutual Funds"
                      description="Invest in top rated direct mutual funds at 0% commission."
                      href="/mutual-funds/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/iippoo.svg"
                      title="IPO"
                      description="Apply for Upcoming IPO, Open IPO and SME IPO using mobile UPI in seconds!"
                      href="/ipo/"
                    />
                    <DropdownItem
                      icon="https://stock-logos.dhan.co/static-openweb/NFO.svg"
                      title="NFO"
                      description="Apply for NFOs directly at no extra cost."
                      href="/nfo/"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('markets')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-[15px] text-white hover:text-white flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6">
                Pricing
                <FaChevronDown className={`w-2.5 transition-transform duration-200 ${openDropdown === 'markets' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'markets' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2">
                  <div className="w-[800px] bg-white border border-[#E2E8FE] rounded-[14px] shadow-xl p-4">
                    <div className="flex gap-6">
                      <div className="w-1/3 border-r border-[#DADADA] pr-4">
                        <h3 className="text-sm font-semibold text-[#363636] mb-3">Major Indices</h3>
                        <div className="space-y-2">
                          <a href="/indices/nifty-50" className="block text-sm text-[#363636] hover:text-[#EF9309]">Nifty 50</a>
                          <a href="/indices/sensex" className="block text-sm text-[#363636] hover:text-[#EF9309]">Sensex</a>
                          <a href="/indices/nifty-bank" className="block text-sm text-[#363636] hover:text-[#EF9309]">Nifty Bank</a>
                          <a href="/indices/nifty-financial" className="block text-sm text-[#363636] hover:text-[#EF9309]">Finnifty</a>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-[#363636] mb-3">Top Stocks</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <a href="#" className="text-sm text-[#363636] hover:text-[#EF9309]">Reliance</a>
                          <a href="#" className="text-sm text-[#363636] hover:text-[#EF9309]">TCS</a>
                          <a href="#" className="text-sm text-[#363636] hover:text-[#EF9309]">HDFC Bank</a>
                          <a href="#" className="text-sm text-[#363636] hover:text-[#EF9309]">Infosys</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* E-IPO Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('more')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-[15px] text-white hover:text-white flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6">
                E-IPO
                <FaChevronDown className={`w-2.5 transition-transform duration-200 ${openDropdown === 'more' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'more' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2">
                  <div className="w-[650px] bg-white border border-[#E2E8FE] rounded-[14px] shadow-xl p-3 grid grid-cols-2 gap-2">
                    <DropdownItem
                      icon="/_next/static/media/DhanPricingLogo.svg"
                      title="Pricing"
                      description="Open Free Demat with ₹0 AMC for Life-time! Get detailed pricing here."
                      href="/pricing/"
                    />
                    <DropdownItem
                      icon="/_next/static/media/DhanSupportLogo.svg"
                      title="Dhan Support"
                      description="Browse through most commonly asked questions and get answer instantly."
                      href="/support/"
                    />
                    <DropdownItem
                      icon="/_next/static/media/Dhan_Blog_img.svg"
                      title="Dhan Blog"
                      description="Read about markets, trading strategies, investing & more."
                      href="/blog/"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Invest & Trade Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDropdownEnter('invest')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="text-[15px] text-white hover:text-white flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6">
                Invest & Trade
                <FaChevronDown className={`w-2.5 transition-transform duration-200 ${openDropdown === 'invest' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'invest' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2">
                  <div className="w-[650px] bg-white border border-[#E2E8FE] rounded-[14px] shadow-xl p-3 grid grid-cols-2 gap-2">
                    <DropdownItem
                      icon="/_next/static/media/DhanPricingLogo.svg"
                      title="Stocks"
                      description="Categories, Screeners, & Analysis for investing in stocks."
                      href="/invest/stocks/"
                    />
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className='flex justify-end items-center gap-8 w-[40%] h-full'>
            {/* Search Bar - Desktop with Icon Toggle */}
            <div className="hidden lg:flex items-center flex-1 max-w-md justify-end">
              <div className="relative w-full">
                {/* Search Input - Always takes space but visibility controlled */}
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}>
                  <input
                    type="text"
                    placeholder="Search Stocks, Mutual Funds, ETFs..."
                    className="w-full bg-white/10 border border-[#ffffff33] rounded-lg py-2 pl-10 pr-4 text-white placeholder-[#8E8E8E] focus:outline-none focus:border-[#EF9309] transition-colors"
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
                
                {/* Search Icon */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isSearchOpen ? 'left-3 right-auto' : ''
                  }`}
                >
                  <FaSearch className="text-[#EF9309] w-5 h-5 hover:text-[#D68108] transition-colors cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Phone Number - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-2 bg-[#EF9309] rounded-full p-2">
                <FaPhone className="text-white w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#bbbbbb] leading-none">Hotline</span>
                <a href="tel:+1234567890" className="text-sm text-white font-medium hover:text-[#00D09C] transition-colors whitespace-nowrap">
                  +123-7767-8989
                </a>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://login.dhan.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-[#EF9309] hover:text-[#0A2745] py-2 px-4 border border-[#ffffff66] hover:border-[#EF9309] rounded-lg text-sm xl:text-[15px] font-semibold transition-all duration-200"
              >
                Login
              </a>
              <a
                href="https://login.dhan.co/?location=DH_WEB&refer=DHAN_WEBSITE"
                className="text-[#0A2745] bg-[#EF9309] hover:bg-[#D68108] py-2 px-4 rounded-lg text-sm xl:text-[15px] font-semibold transition-all duration-200 whitespace-nowrap"
              >
                Open Account
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4 border-t border-[#ffffff33] pt-4">
            {/* Search Bar - Mobile */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00D09C] w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/10 border border-[#ffffff33] rounded-lg py-2 pl-10 pr-4 text-white placeholder-[#8E8E8E] focus:outline-none focus:border-[#EF9309]"
              />
            </div>

            {/* Phone Number - Mobile */}
            <div className="flex items-center gap-3 px-2">
              <div className="flex items-center gap-2 bg-[#00D09C] rounded-full p-2">
                <FaPhone className="text-white w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#8E8E8E] leading-none">Hotline</span>
                <a href="tel:+1234567890" className="text-sm text-white font-medium">
                  +123-7767-8989
                </a>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-3">
              <a href="#" className="block text-[#8E8E8E] hover:text-white transition">Products</a>
              <a href="#" className="block text-[#8E8E8E] hover:text-white transition">Investments</a>
              <a href="#" className="block text-[#8E8E8E] hover:text-white transition">Markets</a>
              <a href="#" className="block text-[#8E8E8E] hover:text-white transition">More</a>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://login.dhan.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white border border-[#ffffff66] py-2 px-4 rounded-lg"
              >
                Login
              </a>
              <a
                href="https://login.dhan.co/?location=DH_WEB&refer=DHAN_WEBSITE"
                className="text-center text-[#0A2745] bg-[#EF9309] py-2 px-4 rounded-lg"
              >
                Open Account
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Dropdown Item Component
const DropdownItem = ({ icon, title, description, href }: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="hover:bg-[#F6F6F6] rounded-lg p-3 flex gap-3 transition-colors duration-200"
    >
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-10 h-10 aspect-square" />
      </div>
      <div>
        <p className="text-base font-semibold text-[#363636] mb-1">{title}</p>
        <p className="text-xs text-[#8E8E8E] leading-relaxed">{description}</p>
      </div>
    </a>
  );
};

export default Header;