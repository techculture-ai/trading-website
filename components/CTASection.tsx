"use client";

import React from "react";
import Image from "next/image";

const CTASection: React.FC = () => {
  return (
    <section className="bg-no-repeat bg-bottom bg-cover w-full md:bg-[url('https://stock-logos.dhan.co/static-openweb/Footer_Dhan_BG.svg')] bg-[url('https://stock-logos.dhan.co/static-openweb/last-banners.png')] mt-0 md:mt-20 lg:mt-32">
      <div className="max-w-8xl mx-auto md:px-10 lg:px-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Content */}
          <div className="md:col-span-2 py-10 md:py-7 lg:py-20 flex md:block flex-col justify-center items-center">
            <div>
              <h3 className="text-white lg:text-4xl text-2xl lg:leading-[52px] leading-[32px] font-semibold lg:text-left md:text-left text-center mb-6">
                Invest &amp; Trade with a Trading
                <br />
                Platform That&apos;s{" "}
                <i className="text-[#fbc40c] not-italic">#MadeForTrade</i>
              </h3>
              <div className="text-[#aaa] text-sm md:text-base font-normal mb-8 lg:mb-8 md:text-left text-center">
                Open your{" "}
                <span className="text-[#fbc40c]">ez wealth Account</span> in
                minutes!
              </div>
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <button className="group max-w-fit lg:px-10 px-7 lg:py-3 py-2 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white rounded-lg flex gap-1 items-center lg:text-base text-sm font-normal shadow-lg hover:shadow-xl transition-all duration-300">
                Start Now
                <svg
                  className="w-4 h-4 text-white relative left-[3px] transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </button>
            </div>

            {/* Mobile Link */}
            <div className="lg:hidden">
              <a
                href="https://dhan.go.link/gaXqf"
                className="max-w-fit lg:px-10 px-7 lg:py-3 py-2 bg-[#fbc40c] hover:bg-[#D68108] text-primary rounded-lg flex gap-1 items-center lg:text-base text-sm font-normal shadow-lg transition-all duration-300"
              >
                Start Now
                <svg
                  className="w-4 h-4 text-primary relative left-[3px]"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative lg:w-96 md:w-60 w-72 md:absolute md:bottom-0">
              <Image
                src="https://stock-logos.dhan.co/static-openweb/common-banner.png"
                alt="Dhan Mobile App"
                width={384}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
