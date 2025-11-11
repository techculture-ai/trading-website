"use client";

import React from "react";
import Image from "next/image";

type Feature = {
  icon: string;
  subtitle: string;
  title: string;
};

const superTraderFeatures: Feature[] = [
  {
    icon: "https://stock-logos.dhan.co/static-openweb/DhanWifi.svg",
    subtitle: "Connect Dhan Web & App via",
    title: "Dhan WiFi",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/IceBergIcon.svg",
    subtitle: "Slice Large Orders with",
    title: "Iceberg Plus",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/SuperOrderIcon.svg",
    subtitle: "Entry, Target & Stop Loss with",
    title: "Super Order",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/Web_Power_Trade.svg",
    subtitle: "Manage Positions Easily with",
    title: "Power Trade Mode",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/Flash_Trade_feature.svg",
    subtitle: "Buy Options in 1-Tap with",
    title: "Flash Trade",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/Scalper.svg",
    subtitle: "1-Tap Buying & Selling with",
    title: "Scalper on Charts",
  },
];

const investorFeatures: Feature[] = [
  {
    icon: "https://stock-logos.dhan.co/static-openweb/WatchlistGroupIcon.svg",
    subtitle: "Track 10,000+ Stocks with",
    title: "Watchlist Groups",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/DailySipIcon.svg",
    subtitle: "Daily & Weekly SIP in",
    title: "Stocks & Mutual Funds",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/DividendTrading.svg",
    subtitle: "Track Earnings Separately with",
    title: "Dividend Tracking",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/iippoo.svg",
    subtitle: "Bid Early for IPOs with",
    title: "Pre-Apply",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-7.svg",
    subtitle: "Easily Track",
    title: "Multi-Bagger Stocks",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/ft-6.svg",
    subtitle: "Keep Track of All",
    title: "Corporate Action",
  },
];

const userFirstFeatures: Feature[] = [
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-1.svg",
    subtitle: "",
    title: "No Calls",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-3.svg",
    subtitle: "",
    title: "No SMS",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-5.svg",
    subtitle: "",
    title: "No Spam",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-2.svg",
    subtitle: "",
    title: "No Trading & Investment Advice",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-4.svg",
    subtitle: "",
    title: "No Relationship Managers",
  },
  {
    icon: "https://stock-logos.dhan.co/static-openweb/homefold-6.svg",
    subtitle: "",
    title: "No Data Sharing",
  },
];

const FeatureItem = ({ f }: { f: Feature }) => (
  <div className="flex gap-3 items-start">
    <div className="flex-shrink-0">
      <Image
        src={f.icon}
        alt={f.title}
        width={36}
        height={36}
        className="w-9 h-9"
      />
    </div>
    <div>
      {f.subtitle && <div className="text-sm text-[#817E7E]">{f.subtitle}</div>}
      <div className="text-[#4F4F4F] font-medium lg:text-lg text-sm">
        {f.title}
      </div>
    </div>
  </div>
);

/**
 * TradingFeatures
 *
 * Responsive component that reproduces:
 * - Built for Super Traders
 * - Built for Long-Term Investors
 * - Always Keeping You First
 *
 * Place this component where the app-section finishes (below DhanAppSection).
 *
 * Note:
 * - Uses Tailwind classes (add Tailwind to project if not already configured)
 * - Images reference the original Dhan CDN. If you prefer local images, copy them
 *   to /public/images and update the src values.
 */
export default function TradingFeatures() {
  return (
    // <div className="bg-white">
    //   <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
    //     {/* --- Built For Super Traders --- */}
    //     <section className="py-14 lg:pt-20 ">
    //       <div className="grid md:grid-cols-2 items-center gap-8">
    //         {/* left: visual (image + decorative) */}
    //         <div className="order-2 md:order-1 flex justify-center">
    //           <div className="relative w-full max-w-[560px]">
    //             <Image
    //               src="https://stock-logos.dhan.co/static-openweb/lott5.png"
    //               alt="Super Traders visual"
    //               width={560}
    //               height={560}
    //               quality={75}
    //               className="w-full lg:w-7/12"
    //             />
    //             {/* decorative small badges */}
    //             <div className="absolute right-6 bottom-8">
    //               <div className="bg-white rounded-md shadow-md px-4 py-2 text-sm text-[#222]">
    //                 <div className="font-medium">Margin Funding</div>
    //                 <div className="text-xs text-[#6b6b6b]">LTP 575.15 • With MTF 143.79 • Leverage 4.00X</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* right: text + features */}
    //         <div className="order-1 md:order-2">
    //           <h2 className="text-[#4F4F4F] font-medium text-2xl lg:text-3xl">Built For Super Traders</h2>
    //           <p className="text-[#817E7E] pt-2.5 text-sm lg:text-base leading-6">
    //             We're on a mission to elevate your online trading experience by building features that are most useful to you!
    //           </p>

    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    //             {superTraderFeatures.map((f, i) => (
    //               <FeatureItem key={i} f={f} />
    //             ))}
    //           </div>

    //           <div className="mt-8">
    //             <a href="/trading-features/">
    //               <button className="bg-[#fbc40c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#D68108] transition">
    //                 Explore All &nbsp;➜
    //               </button>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <div className="w-full">
    //       <img src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png" alt="divider" className="w-full" />
    //     </div>

    //     {/* --- Built For Long-Term Investors --- */}
    //     <section className="py-14 lg:pt-32 ">
    //       <div className="grid md:grid-cols-2 items-center gap-8">
    //         {/* left: image */}
    //         <div className="flex justify-center">
    //           <div className="relative w-full max-w-[560px]">
    //             <Image
    //               src="https://stock-logos.dhan.co/static-openweb/lott2.png"
    //               alt="Investors visual"
    //               width={560}
    //               height={560}
    //               quality={75}
    //               className="w-full lg:w-7/12"
    //             />
    //             <div className="absolute left-6 bottom-8">
    //               <div className="bg-white rounded-md shadow-md px-4 py-2 text-sm text-[#222]">
    //                 <div className="font-medium">Overall Profits</div>
    //                 <div className="text-xs text-[#16a34a]">₹ 9,02,614.00 (4166%)</div>
    //                 <div className="flex justify-between text-xs text-[#6b6b6b] pt-2">
    //                   <span>Investment ₹ 21,66,546.74</span>
    //                   <span>Current ₹ 30,69,160.81</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* right: text + features */}
    //         <div>
    //           <h2 className="text-[#4F4F4F] font-medium text-2xl lg:text-3xl">Built For Long-Term Investors</h2>
    //           <p className="text-[#817E7E] pt-2.5 text-sm lg:text-base leading-6">
    //             We're bringing you the best online investing experience, one feature at a time! Access everything you need to invest in Stocks, ETFs, Mutual Funds & Bonds from our platform!
    //           </p>

    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    //             {investorFeatures.map((f, i) => (
    //               <FeatureItem key={i} f={f} />
    //             ))}
    //           </div>

    //           <div className="mt-8">
    //             <a href="/investing-features/">
    //               <button className="bg-[#fbc40c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#D68108] transition">
    //                 Explore All &nbsp;➜
    //               </button>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <div className="w-full">
    //       <img src="https://stock-logos.dhan.co/static-openweb/dhanBorderL.png" alt="divider" className="w-full" />
    //     </div>

    //     {/* --- Always Keeping You First --- */}
    //     <section className="py-14 lg:pt-20 ">
    //       <div className="grid md:grid-cols-2 items-center gap-8">
    //         {/* left: text + features */}
    //         <div>
    //           <h2 className="text-[#4F4F4F] font-medium text-2xl lg:text-3xl">Always Keeping You First</h2>
    //           <p className="text-[#817E7E] pt-2.5 text-sm lg:text-base leading-6">
    //             Our users - traders & investors - will always be our priority, even when we're building new features or delivering customer support everyday.
    //           </p>

    //           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
    //             {userFirstFeatures.map((f, i) => (
    //               <div key={i} className="flex gap-3 items-center">
    //                 <Image src={f.icon} alt={f.title} width={36} height={36} />
    //                 <div className="text-[#4F4F4F] font-medium text-sm">{f.title}</div>
    //               </div>
    //             ))}
    //           </div>

    //           <div className="mt-8">
    //             <a href="/user-first-policy/">
    //               <button className="bg-[#fbc40c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#D68108] transition">
    //                 Read Our User-First Policy &nbsp;➜
    //               </button>
    //             </a>
    //           </div>
    //         </div>

    //         {/* right: image */}
    //         <div className="flex justify-center">
    //           <div className="relative w-full max-w-[420px]">
    //             <Image
    //               src="https://stock-logos.dhan.co/static-openweb/maskgroup-1.png"
    //               alt="User first visual"
    //               width={420}
    //               height={560}
    //               quality={75}
    //               className="w-full lg:w-[80%] rounded-2xl"
    //             />
    //             <div className="absolute right-6 top-6">
    //               <div className="bg-white rounded-md shadow-md p-3">
    //                 <Image src="https://stock-logos.dhan.co/static-openweb/homefold-1.svg" alt="icon" width={28} height={28} />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>

    <div className="bg-white">
      {/* <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24"> */}
      {/* --- Built For Super Traders --- */}
      <section className="py-14 lg:pt-20 max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* left: visual (image + decorative) */}
          <div className="order-2 md:order-1 flex justify-start">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="https://stock-logos.dhan.co/static-openweb/lott5.png"
                alt="Super Traders visual"
                width={560}
                height={560}
                quality={75}
                className="w-full lg:w-7/12"
              />
              {/* decorative small badges */}
              <div className="absolute right-6 bottom-8">
                <div className="bg-white rounded-md shadow-md px-4 py-2 text-sm text-[#222]">
                  <div className="font-medium">Margin Funding</div>
                  <div className="text-xs text-[#6b6b6b]">
                    LTP 575.15 • With MTF 143.79 • Leverage 4.00X
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right: text + features */}
          <div className="order-1 md:order-2">
            <h2 className="text-[#4F4F4F] font-medium text-2xl lg:text-3xl">
              Built For Super Traders
            </h2>
            <p className="text-[#817E7E] pt-2.5 text-sm lg:text-base leading-6">
              We're on a mission to elevate your online trading experience by
              building features that are most useful to you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {superTraderFeatures.map((f, i) => (
                <FeatureItem key={i} f={f} />
              ))}
            </div>

            <div className="mt-8">
              <a href="/trading-features/">
                <button className="bg-[#fbc40c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#D68108] transition">
                  Explore All &nbsp;➜
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <img
          src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png"
          alt="divider"
          className="w-full"
        />
      </div>

      {/* --- Built For Long-Term Investors --- */}
      <section className="py-14 lg:pt-32 max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* left: image */}
          <div className="flex justify-start">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="https://stock-logos.dhan.co/static-openweb/lott2.png"
                alt="Investors visual"
                width={560}
                height={560}
                quality={75}
                className="w-full lg:w-7/12"
              />
              <div className="absolute left-6 bottom-8">
                <div className="bg-white rounded-md shadow-md px-4 py-2 text-sm text-[#222]">
                  <div className="font-medium">Overall Profits</div>
                  <div className="text-xs text-[#16a34a]">
                    ₹ 9,02,614.00 (4166%)
                  </div>
                  <div className="flex justify-between text-xs text-[#6b6b6b] pt-2">
                    <span>Investment ₹ 21,66,546.74</span>
                    <span>Current ₹ 30,69,160.81</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right: text + features */}
          <div>
            <h2 className="text-[#4F4F4F] font-medium text-2xl lg:text-3xl">
              Built For Long-Term Investors
            </h2>
            <p className="text-[#817E7E] pt-2.5 text-sm lg:text-base leading-6">
              We're bringing you the best online investing experience, one
              feature at a time! Access everything you need to invest in Stocks,
              ETFs, Mutual Funds & Bonds from our platform!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {investorFeatures.map((f, i) => (
                <FeatureItem key={i} f={f} />
              ))}
            </div>

            <div className="mt-8">
              <a href="/investing-features/">
                <button className="bg-[#fbc40c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#D68108] transition">
                  Explore All &nbsp;➜
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <img
          src="https://stock-logos.dhan.co/static-openweb/dhanBorderL.png"
          alt="divider"
          className="w-full"
        />
      </div>

      {/* --- Always Keeping You First --- */}
      <section className="py-14 lg:pt-20 max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* left: text + features */}
          <div>
            <h2 className="text-[#4F4F4F] font-medium text-2xl lg:text-3xl">
              Always Keeping You First
            </h2>
            <p className="text-[#817E7E] pt-2.5 text-sm lg:text-base leading-6">
              Our users - traders & investors - will always be our priority,
              even when we're building new features or delivering customer
              support everyday.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {userFirstFeatures.map((f, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <Image src={f.icon} alt={f.title} width={36} height={36} />
                  <div className="text-[#4F4F4F] font-medium text-sm">
                    {f.title}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="/user-first-policy/">
                <button className="bg-[#fbc40c] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#D68108] transition">
                  Read Our User-First Policy &nbsp;➜
                </button>
              </a>
            </div>
          </div>

          {/* right: image */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-[420px]">
              <Image
                src="https://stock-logos.dhan.co/static-openweb/maskgroup-1.png"
                alt="User first visual"
                width={420}
                height={560}
                quality={75}
                className="w-full lg:w-[80%] rounded-2xl"
              />
              <div className="absolute right-6 top-6">
                <div className="bg-white rounded-md shadow-md p-3">
                  <Image
                    src="https://stock-logos.dhan.co/static-openweb/homefold-1.svg"
                    alt="icon"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </div>
  );
}
