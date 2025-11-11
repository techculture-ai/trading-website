"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface NewsItem {
  id: number;
  logo: string;
  logoWidth: string;
  title: string;
  url: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    logo: "https://stock-logos.dhan.co/static-openweb/moneycontrol.svg",
    logoWidth: "lg:w-5/12 w-4/12",
    title:
      "Dhan turns profitable with Rs 177 crore in FY24 as revenue surges by 689%",
    url: "https://www.moneycontrol.com/technology/dhan-turns-profitable-with-rs-177-crore-in-fy24-as-revenue-surges-by-689-article-12834258.html",
    alt: "MoneyControl",
  },
  {
    id: 2,
    logo: "https://stock-logos.dhan.co/static-openweb/moneycontrol.svg",
    logoWidth: "lg:w-5/12 w-4/12",
    title:
      "Dhan and TradingView partner to allow Indian investors to trade directly on TradingView",
    url: "https://www.moneycontrol.com/news/business/announcements/dhan-and-tradingview-partner-to-allow-indian-investors-to-trade-directly-on-tradingview-9491101.html",
    alt: "MoneyControl",
  },
  {
    id: 3,
    logo: "https://stock-logos.dhan.co/static-openweb/moneycontrol.svg",
    logoWidth: "lg:w-5/12 w-4/12",
    title: "Dhan takes on Zerodha, Groww; eyes 1 million users in 18 months",
    url: "https://www.moneycontrol.com/news/business/startup/dhan-takes-on-zerodha-groww-eyes-1-million-users-in-18-months-7490491.html",
    alt: "MoneyControl",
  },
  {
    id: 4,
    logo: "https://stock-logos.dhan.co/static-openweb/EconomicTimes.png",
    logoWidth: "lg:w-11/12 w-8/12",
    title: "Dhan launches 'Trading via Charts' in partnership with TradingView",
    url: "https://economictimes.indiatimes.com/tech/startups/dhan-launches-trading-via-charts-in-partnership-with-tradingview/articleshow/88135462.cms",
    alt: "Economic Times",
  },
  {
    id: 5,
    logo: "https://stock-logos.dhan.co/static-openweb/LiveMint.svg",
    logoWidth: "lg:w-5/12 w-4/12",
    title: "Raise Financial raises $22mn Funding in Series A",
    url: "https://www.livemint.com/companies/start-ups/pravin-jadhav-s-raise-financial-raises-22mn-in-series-a-11643037842347.html",
    alt: "Live Mint",
  },
  {
    id: 6,
    logo: "https://stock-logos.dhan.co/static-openweb/logo_yourstory.svg",
    logoWidth: "lg:w-5/12 w-4/12",
    title:
      "Raise Financial raises $22M in Series A round from BEENEXT, Mirae Asset Ventures, others.",
    url: "https://yourstory.com/2022/01/funding-alert-raise-financial-raises-22million-seriesa/amp",
    alt: "YourStory",
  },
];

const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    const maxIndex = newsItems.length - visibleCards;
    setCurrentIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  }, [visibleCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const maxIndex = newsItems.length - visibleCards;
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCards]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < newsItems.length - visibleCards;

  return (
    <>
      <section className="bg-white">
        <div className="max-w-8xl mx-auto md:pb-14 pb-0 md:pt-16 pt-0 lg:px-24 md:px-10 px-5">
          {/* Desktop View */}
          <div className="hidden md:block relative overflow-hidden">
            <p className="pt-4 text-gray-dark font-semibold text-left lg:text-3xl text-2xl">
              We are in the News
            </p>

            <div className="pt-4">
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out gap-6"
                    style={{
                      transform: `translateX(-${
                        currentIndex * (100 / visibleCards)
                      }%)`,
                    }}
                  >
                    {newsItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex-shrink-0 pt-3"
                        style={{
                          width: `calc(${100 / visibleCards}% - ${
                            (24 * (visibleCards - 1)) / visibleCards
                          }px)`,
                        }}
                      >
                        <a
                          href={item.url}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className="block h-full hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="bg-[#F9FCFF] h-36 rounded-2xl border-[0.5px] border-[#BBDDFF] p-3 hover:border-[#99CCFF] transition-colors duration-300">
                            <div
                              className={`h-10 pt-3 ${item.logoWidth} relative`}
                            >
                              <Image
                                src={item.logo}
                                alt={item.alt}
                                fill
                                className="object-contain object-left"
                              />
                            </div>
                            <p className="text-gray-dark text-sm pt-3 font-semibold text-left line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  disabled={!canGoPrev}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
                    canGoPrev
                      ? "hover:bg-gray-50 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  aria-label="Previous news"
                >
                  <svg
                    className="w-5 h-5 text-gray-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={!canGoNext}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
                    canGoNext
                      ? "hover:bg-gray-50 cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  aria-label="Next news"
                >
                  <svg
                    className="w-5 h-5 text-gray-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden lg:pt-10 lg:pb-10">
            <div className="pb-16 pt-10">
              <p className="text-gray-dark font-semibold text-center lg:text-3xl text-2xl mb-6">
                We are in the News
              </p>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {newsItems.map((item) => (
                      <div key={item.id} className="w-full flex-shrink-0 px-2">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className="block"
                        >
                          <div className="bg-[#F9FCFF] h-32 rounded-2xl border-[0.5px] border-[#BBDDFF] p-3">
                            <div
                              className={`h-10 pt-3 ${item.logoWidth} relative`}
                            >
                              <Image
                                src={item.logo}
                                alt={item.alt}
                                fill
                                className="object-contain object-left"
                              />
                            </div>
                            <p className="text-xs text-gray-dark text-left pt-3 font-semibold line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-[#fbc40c] w-8"
                          : "bg-gray-300 w-2"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Border Image */}
      <div className="w-full">
        <Image
          src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png"
          alt="Border"
          width={1920}
          height={100}
          className="w-full h-auto"
          priority={false}
        />
      </div>
    </>
  );
};

export default News;
