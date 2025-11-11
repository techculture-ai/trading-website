import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2745] text-white">
      <div className="max-w-8xl mx-auto pt-10 pb-6 px-5 md:px-10 lg:px-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 border-b-[0.5px] border-b-[#dedede3a] pb-7">
          {/* Left Column - Logo and Social */}
          <div className="border-b border-b-[#dedede3a] lg:border-b-0 pb-10 lg:pb-0">
            {/* Logo */}
            <div className="flex lg:justify-start justify-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="ez wealth Logo"
                  width={128}
                  height={40}
                  className="w-32"
                />
              </Link>
            </div>

            {/* Community */}
            <div className="pt-10 flex items-center flex-col lg:items-start">
              <p className="text-sm font-normal text-[#DDD] mb-4">
                Join our Community
              </p>
              <a
                href="https://madefortrade.in/"
                target="_blank"
                rel="nofollow noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="https://stock-logos.dhan.co/static-openweb/madeForTrade.svg"
                  alt="MadeForTrade Community"
                  width={200}
                  height={50}
                  className="lg:w-full"
                />
              </a>
            </div>

            {/* Social Media */}
            <div className="pt-10 flex items-center flex-col lg:items-start">
              <p className="text-sm font-normal text-[#DDD] mb-4">
                Follow us on
              </p>
              <div className="flex gap-5 flex-wrap">
                <a
                  href="https://x.com/ezwealthonline"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <FaXTwitter width={20} height={20} className="w-5 h-5 " />
                </a>
                <a
                  href="https://t.me/JoinDhan"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Telegram"
                >
                  <FaTelegram width={20} height={20} className="w-5 h-5 " />
                </a>
                <a
                  href="https://in.linkedin.com/company/ezwealth"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin width={20} height={20} className="w-5 h-5 " />
                </a>
                <a
                  href="https://www.youtube.com/@EZWealth"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <FaYoutube width={20} height={20} className="w-5 h-5 " />
                </a>
                <a
                  href="https://www.instagram.com/ezwealth.in/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <FaInstagram width={20} height={20} className="w-5 h-5 " />
                </a>
                <a
                  href="https://www.facebook.com/ezwealth.in/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <FaFacebook width={20} height={20} className="w-5 h-5 " />
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 lg:gap-8 gap-6">
              {/* Customer Service */}
              <div className="lg:flex lg:items-center lg:flex-col">
                <div>
                  <p className="text-[#DADADA] text-base lg:text-lg font-semibold mb-5">
                    Customer Service
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      { label: "ez wealth Support", href: "/support/" },
                      { label: "Customer Service", href: "/customer-service/" },
                      {
                        label: "Safety and Security",
                        href: "/safety-security/",
                      },
                      { label: "Grievance Redressal", href: "/grievance/" },
                      { label: "Advisory for Investors", href: "/advisory/" },
                      { label: "RE Awareness", href: "/rights-entitlements/" },
                      { label: "SECC Regulations", href: "/secc-regulations/" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Our Products */}
              <div className="lg:flex lg:items-center lg:flex-col md:-order-none order-[3]">
                <div>
                  <p className="text-[#DADADA] text-base lg:text-lg font-semibold mb-5">
                    Our Products
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      { label: "ez wealth App", href: "/trading-app/" },
                      {
                        label: "ez wealth Web",
                        href: "/web-trading-platform/",
                      },
                      { label: "Options Trader App", href: "/options-trader/" },
                      {
                        label: "Options Trader Web",
                        href: "/options-trader-web/",
                      },
                      {
                        label: "Trading APIs",
                        href: "https://dhanhq.co/",
                        external: true,
                      },
                      {
                        label: "TradingView on ez wealth",
                        href: "/tradingview/",
                      },
                      {
                        label: "Connect to TradingView",
                        href: "/connect-to-tradingview/",
                      },
                      { label: "smallcases on ez wealth", href: "/smallcase/" },
                      {
                        label: "Margin Trading Facility",
                        href: "/margin-trading-facility/",
                      },
                      {
                        label: "Margin Pledge Benefit",
                        href: "/margin-pledge-benefit/",
                      },
                      {
                        label: "Stock Screener",
                        href: "/scanx-stock-screener/",
                      },
                      { label: "Ticker", href: "/ticker/" },
                    ].map((link) => (
                      <li key={link.href}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quick Links */}
              {/* <div className="lg:flex lg:items-center lg:flex-col md:-order-none order-[2]">
                <div>
                  <p className="text-[#DADADA] text-base lg:text-lg font-semibold mb-5">
                    Quick Links
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      {
                        label: "Open Demat Account",
                        href: "/auth/open-demat-account/",
                      },
                      { label: "Download Centre", href: "/download-centre/" },
                      { label: "Calculators", href: "/calculators/" },
                      { label: "Finance Glossary", href: "/finance-glossary/" },
                      {
                        label: "Stock Market Holidays",
                        href: "/market-holiday/",
                      },
                      {
                        label: "Investor Grievance Data",
                        href: "/static/downloads.aspx-invest.html",
                      },
                      {
                        label: "Investors Charter - Stock Broker",
                        href: "/investorcharter.pdf",
                      },
                      {
                        label: "Investors Charter - DP",
                        href: "/static/investor-charter-of-depository-participant.html",
                      },
                      {
                        label: "smartodr.in",
                        href: "https://smartodr.in",
                        external: true,
                      },
                      { label: "Client Care", href: "/clientcare.pdf" },
                      {
                        label: "Freeze/Unfreeze Guide",
                        href: "/freezeguide.pdf",
                      },
                      {
                        label: "Pay-out of Securities Info",
                        href: "/payoutofsecurity.pdf",
                      },
                      {
                        label: "Do's & Don'ts (Vernacular)",
                        href: "/vernacularlanguage.pdf",
                      },
                      {
                        label: "Investor Risk Reduction",
                        href: "/investorriskreductionaccess.pdf",
                      },
                      { label: "Sitemap", href: "/static/sitemap.html" },
                      { label: "Disclaimer", href: "/static/disclaimer.html" },
                      {
                        label: "Privacy Policy",
                        href: "/static/privacypolicy.html",
                      },
                      { label: "PMLA Policy", href: "/newpmla.pdf" },
                      {
                        label: "Other Policies",
                        href: "/static/downloads.aspx-policy.html",
                      },
                      {
                        label: "CDSL e-Voting",
                        href: "https://evoting.cdslindia.com/Evoting/EvotingLogin",
                        external: true,
                      },
                      {
                        label: "SEBI SCORES",
                        href: "https://scores.sebi.gov.in/",
                        external: true,
                      },
                      {
                        label: "Terms & Conditions",
                        href: "/static/termsandconditions.html",
                      },
                      {
                        label: "Broker Norms",
                        href: "/static/BrokerNorms.html",
                      },
                      {
                        label: "Investor Grievance Matrix",
                        href: "/investormatrix.pdf",
                      },
                      { label: "Monthly Settlement Update", href: "/sebi.pdf" },
                      {
                        label: "Regulatory Information",
                        href: "/regulatory-information/",
                      },
                    ].map((link) => (
                      <li key={link.href}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* Partner with us */}
              <div className="lg:flex lg:items-center lg:flex-col md:-order-none order-[4]">
                <div>
                  <p className="text-[#DADADA] text-base lg:text-lg font-semibold mb-5">
                    Partner with us
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      {
                        label: "Authorised Person",
                        href: "/authorised-partner/",
                      },
                      {
                        label: "Partner Dashboard",
                        href: "https://partner.dhan.co",
                        external: true,
                      },
                      {
                        label: "Code of Conduct",
                        href: "/code-of-conduct-for-authorised-partners/",
                      },
                    ].map((link) => (
                      <li key={link.href}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Company */}
              <div className="lg:flex lg:items-center lg:flex-col">
                <div>
                  <p className="text-[#DADADA] text-base lg:text-lg font-semibold mb-5">
                    Company
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      { label: "About Us", href: "/about/" },
                      { label: "Pricing", href: "/pricing/" },
                      { label: "Careers", href: "/career/" },
                      { label: "Contact Us", href: "/customer-service/" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <ul className="space-y-1.5 flex flex-wrap gap-x-6 gap-y-2">
              {[
                {
                  label: "Open Demat Account",
                  href: "/auth/open-demat-account/",
                },
                { label: "Download Centre", href: "/download-centre/" },
                { label: "Calculators", href: "/calculators/" },
                { label: "Finance Glossary", href: "/finance-glossary/" },
                {
                  label: "Stock Market Holidays",
                  href: "/market-holiday/",
                },
                {
                  label: "Investor Grievance Data",
                  href: "/static/downloads.aspx-invest.html",
                },
                {
                  label: "Investors Charter - Stock Broker",
                  href: "/investorcharter.pdf",
                },
                {
                  label: "Investors Charter - DP",
                  href: "/static/investor-charter-of-depository-participant.html",
                },
                {
                  label: "smartodr.in",
                  href: "https://smartodr.in",
                  external: true,
                },
                { label: "Client Care", href: "/clientcare.pdf" },
                {
                  label: "Freeze/Unfreeze Guide",
                  href: "/freezeguide.pdf",
                },
                {
                  label: "Pay-out of Securities Info",
                  href: "/payoutofsecurity.pdf",
                },
                {
                  label: "Do's & Don'ts (Vernacular)",
                  href: "/vernacularlanguage.pdf",
                },
                {
                  label: "Investor Risk Reduction",
                  href: "/investorriskreductionaccess.pdf",
                },
                { label: "Sitemap", href: "/static/sitemap.html" },
                { label: "Disclaimer", href: "/static/disclaimer.html" },
                {
                  label: "Privacy Policy",
                  href: "/static/privacypolicy.html",
                },
                { label: "PMLA Policy", href: "/newpmla.pdf" },
                {
                  label: "Other Policies",
                  href: "/static/downloads.aspx-policy.html",
                },
                {
                  label: "CDSL e-Voting",
                  href: "https://evoting.cdslindia.com/Evoting/EvotingLogin",
                  external: true,
                },
                {
                  label: "SEBI SCORES",
                  href: "https://scores.sebi.gov.in/",
                  external: true,
                },
                {
                  label: "Terms & Conditions",
                  href: "/static/termsandconditions.html",
                },
                {
                  label: "Broker Norms",
                  href: "/static/BrokerNorms.html",
                },
                {
                  label: "Investor Grievance Matrix",
                  href: "/investormatrix.pdf",
                },
                { label: "Monthly Settlement Update", href: "/sebi.pdf" },
                {
                  label: "Regulatory Information",
                  href: "/regulatory-information/",
                },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#8E8E8E] font-normal hover:text-[#dedede] transition-colors w-max block"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Built with Love */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                  className="w-full h-full"
                >
                  <path
                    fill="#ef4b53"
                    d="M50 30 C30 10, 10 20, 10 40 C10 60, 50 85, 50 85 C50 85, 90 60, 90 40 C90 20, 70 10, 50 30 Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-normal text-[#8E8E8E]">
                  built with love
                  <br />
                  <span className="text-[#DADADA]">
                    for Indians who love to invest & trade
                  </span>
                </p>
              </div>
            </div>

            {/* Raise Financial Services */}
            <div className="flex items-center lg:justify-center justify-center gap-3">
              <a
                href="https://raiseholding.co"
                target="_blank"
                rel="nofollow noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/_next/static/media/raise.8e420eb9.svg"
                  alt="Raise Financial Services"
                  width={100}
                  height={40}
                />
              </a>
              <div>
                <p className="text-sm font-normal text-[#8E8E8E]">
                  We are part of Raise Financial Services
                </p>
              </div>
            </div>

            {/* App Store Links */}
            <div className="flex justify-center lg:justify-end gap-3">
              <a
                href="https://apps.apple.com/in/app/dhan/id1575318726"
                target="_blank"
                rel="nofollow noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/_next/static/media/Appstore.41904f07.svg"
                  alt="Download on App Store"
                  width={141}
                  height={44}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dhan.live"
                target="_blank"
                rel="nofollow noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/_next/static/media/Playstore.c6791547.svg"
                  alt="Get it on Google Play"
                  width={141}
                  height={44}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-[#dedede3a]">
          <p className="text-xs text-[#8E8E8E] text-center">
            SEBI - NSE, BSE, MCX REGN NO. - INZ000199032, DP-IN-DP-CDSL-679-2013
          </p>
          <p className="text-xs text-[#8E8E8E]">
            © {new Date().getFullYear()} ez wealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
