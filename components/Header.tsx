"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaSearch,
  FaPhone,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleDropdownEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  // Color schemes based on page
  const textColor = isHomePage ? "text-[#0A2745]" : "text-white";
  const hoverColor = "hover:text-[#EF9309]";
  const phoneTextColor = isHomePage ? "text-[#0A2745]" : "text-white";
  const phoneIconBg = isHomePage ? "text-[#0A2745]" : "text-white";
  const buttonTextColor = isHomePage ? "text-[#0A2745]" : "text-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full ${
        isHomePage ? "bg-white/20" : "bg-[#0A2745]/50"
      } backdrop-blur-md transition-all duration-500 shadow-lg`}
    >
      <div className="max-w-8xl mx-auto px-4 lg:px-24">
        <div className="flex justify-between gap-4 items-center">
          {/* Logo */}
          <Link href="/" className="py-4">
            <Image
              src="/logo.png"
              alt="ez wealth Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Who We Are */}
            <Link
              href="/who-we-are"
              className={`text-[15px] ${textColor} ${hoverColor} font-semibold transition-colors duration-200 py-6`}
            >
              Who We Are
            </Link>

            {/* Recommendations */}
            <Link
              href="/recommendations"
              className={`text-[15px] ${textColor} ${hoverColor} font-semibold transition-colors duration-200 py-6`}
            >
              Recommendations
            </Link>
            {/* Our Services Dropdown */}
            {/* <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`text-[15px] ${textColor} ${hoverColor} flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6`}
              >
                Our Services
                <FaChevronDown
                  className={`w-2.5 transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 min-w-[200px]">
                    <SimpleDropdownItem title="Stocks" href="/stocks/" />
                    <SimpleDropdownItem title="Commodity" href="/commodity/" />
                    <SimpleDropdownItem title="Options" href="/options/" />
                    <SimpleDropdownItem title="Futures" href="/futures/" />
                    <SimpleDropdownItem title="ETFs" href="/etf/" />
                    <SimpleDropdownItem
                      title="Mutual Funds"
                      href="/mutual-funds/"
                    />
                    <SimpleDropdownItem title="IPO" href="/ipo/" />
                    <SimpleDropdownItem title="NFO" href="/nfo/" />
                  </div>
                </div>
              )}
            </div> */}
            {/* E-IPO Dropdown */}
            {/* <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("eipo")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`text-[15px] ${textColor} ${hoverColor} flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6`}
              >
                E-IPO
                <FaChevronDown
                  className={`w-2.5 transition-transform duration-200 ${
                    openDropdown === "eipo" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "eipo" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 min-w-[200px]">
                    <SimpleDropdownItem title="Pricing" href="/pricing/" />
                    <SimpleDropdownItem title="Support" href="/support/" />
                    <SimpleDropdownItem title="Blog" href="/blog/" />
                  </div>
                </div>
              )}
            </div> */}
            {/* Invest & Trade Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleDropdownEnter("invest")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`text-[15px] ${textColor} ${hoverColor} flex items-center gap-1.5 font-semibold transition-colors duration-200 py-6`}
              >
                Invest & Trade
                <FaChevronDown
                  className={`w-2.5 transition-transform duration-200 ${
                    openDropdown === "invest" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "invest" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 min-w-[200px]">
                    <SimpleDropdownItem title="Stocks" href="/invest/stocks/" />
                    <SimpleDropdownItem
                      title="F&O"
                      href="/invest/futures-and-options/"
                    />
                    <SimpleDropdownItem title="IPO" href="/invest/ipos/" />
                    <SimpleDropdownItem title="MTF" href="/invest/mtf/" />
                    <SimpleDropdownItem
                      title="Mutual Funds"
                      href="/invest/mutual-funds/"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Pricing */}
            <Link
              href="/pricing"
              className={`text-[15px] ${textColor} ${hoverColor} font-semibold transition-colors duration-200 py-6`}
            >
              Pricing
            </Link>

            {/* Become a Partner */}
            <Link
              href="/become-a-partner"
              className={`text-[15px] ${textColor} ${hoverColor} font-semibold transition-colors duration-200 py-6`}
            >
              Become a Partner
            </Link>

            {/* Customer services */}
            <Link
              href="/customer-service"
              className={`text-[15px] ${textColor} ${hoverColor} font-semibold transition-colors duration-200 py-6`}
            >
              Customer services
            </Link>
          </nav>

          <div className="flex justify-end items-center gap-8 w-[40%] h-full">
            {/* Search Bar - Desktop with Icon Toggle */}
            <div className="hidden lg:flex items-center flex-1 max-w-md justify-end">
              <div className="relative w-full">
                <div
                  className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isSearchOpen ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Search Stocks, Mutual Funds, ETFs..."
                    className={`w-full bg-white/10 border border-[#666] rounded-lg py-2 pl-10 pr-4 ${isHomePage ? "text-[#0A2745]" : "text-white"} placeholder-[#8E8E8E] focus:outline-none focus:border-[#EF9309] transition-colors`}
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>

                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isSearchOpen ? "left-3 right-auto" : ""
                  }`}
                >
                  <FaSearch className="text-[#EF9309] w-5 h-5 hover:text-[#D68108] transition-colors cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Phone Number - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-2 bg-[#EF9309] rounded-full p-2">
                <FaPhone className={`${phoneIconBg} w-3.5 h-3.5`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] ${phoneTextColor} leading-none`}>
                  Hotline
                </span>
                <a
                  href="tel:+1234567890"
                  className={`text-sm ${phoneTextColor} font-medium hover:text-[#EF9309] transition-colors whitespace-nowrap`}
                >
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
                className={`${buttonTextColor} hover:bg-[#EF9309] hover:text-white py-2 px-4 border border-[#666] hover:border-[#EF9309] rounded-lg text-sm xl:text-[15px] font-semibold transition-all duration-200`}
              >
                Login
              </a>
              <a
                href="/open-demat-account/"
                className={`${
                  isHomePage ? "text-[#0A2745]" : "text-[#0A2745]"
                } bg-[#EF9309] hover:bg-[#D68108] py-2 px-4 rounded-lg text-sm xl:text-[15px] font-semibold transition-all duration-200 whitespace-nowrap`}
              >
                Open Account
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${
              isHomePage ? "text-[#0A2745]" : "text-white"
            } text-2xl`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4 border-t border-[#ffffff33] pt-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EF9309] w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className={`w-full bg-white/10 border border-[#ffffff33] rounded-lg py-2 pl-10 pr-4 ${
                  isHomePage ? "text-[#0A2745]" : "text-white"
                } placeholder-[#8E8E8E] focus:outline-none focus:border-[#EF9309]`}
              />
            </div>

            <div className="flex items-center gap-3 px-2">
              <div className="flex items-center gap-2 bg-[#EF9309] rounded-full p-2">
                <FaPhone className="text-white w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-[10px] ${
                    isHomePage ? "text-[#0A2745]" : "text-[#8E8E8E]"
                  } leading-none`}
                >
                  Hotline
                </span>
                <a
                  href="tel:+1234567890"
                  className={`text-sm ${
                    isHomePage ? "text-[#0A2745]" : "text-white"
                  } font-medium`}
                >
                  +123-7767-8989
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href="/who-we-are"
                className={`block ${
                  isHomePage ? "text-[#0A2745]" : "text-[#8E8E8E]"
                } hover:text-[#EF9309] transition`}
              >
                Who We Are
              </Link>
              <Link
                href="/pricing"
                className={`block ${
                  isHomePage ? "text-[#0A2745]" : "text-[#8E8E8E]"
                } hover:text-[#EF9309] transition`}
              >
                Pricing
              </Link>
              <Link
                href="/mutual-funds"
                className={`block ${
                  isHomePage ? "text-[#0A2745]" : "text-[#8E8E8E]"
                } hover:text-[#EF9309] transition`}
              >
                Mutual Funds
              </Link>
              <Link
                href="/ipo"
                className={`block ${
                  isHomePage ? "text-[#0A2745]" : "text-[#8E8E8E]"
                } hover:text-[#EF9309] transition`}
              >
                IPO
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://login.dhan.co"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center ${
                  isHomePage ? "text-[#0A2745]" : "text-white"
                } border border-[#ffffff66] py-2 px-4 rounded-lg`}
              >
                Login
              </a>
              <a
                href="/open-demat-account/"
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

// Simple Dropdown Item Component
const SimpleDropdownItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#EF9309] hover:text-white transition-all duration-200 border-b border-gray-100 last:border-b-0"
    >
      {title}
    </Link>
  );
};

export default Header;
