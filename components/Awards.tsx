"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Award {
  id: number;
  image: string;
  title: string;
  year: string;
  alt: string;
}

const awards: Award[] = [
  {
    id: 1,
    image: "https://stock-logos.dhan.co/static-openweb/TradingView.svg",
    title: "Best by Asset Classes - Options",
    year: "2024",
    alt: "TradingView Award",
  },
  {
    id: 2,
    image: "https://stock-logos.dhan.co/static-new-images/Deloitte_Award.svg",
    title: "Deloitte Fast 50 Award",
    year: "in Fintech Category 2024",
    alt: "Deloitte Award",
  },
  {
    id: 3,
    image: "https://stock-logos.dhan.co/static-openweb/mcxaward.svg",
    title: "Leading Member Traded",
    year: "Clients 2024",
    alt: "MCX Award",
  },
  {
    id: 4,
    image: "https://stock-logos.dhan.co/static-openweb/TradingView.svg",
    title: "Best Broker in APAC",
    year: "2023",
    alt: "TradingView Award",
  },
  {
    id: 5,
    image:
      "https://stock-logos.dhan.co/static-openweb/India Devops Show 2023.svg",
    title: "Best Adoption of",
    year: "Multi-Cloud",
    alt: "India DevOps Show 2023",
  },
  {
    id: 6,
    image: "https://stock-logos.dhan.co/static-openweb/TradingView.svg",
    title: "Most Reliable Tech",
    year: "2022",
    alt: "TradingView Award",
  },
  {
    id: 7,
    image:
      "https://stock-logos.dhan.co/static-openweb/India Devops Show 2022.svg",
    title: "Best use of",
    year: "Devops Technology",
    alt: "India DevOps Show 2022",
  },
  {
    id: 8,
    image: "https://stock-logos.dhan.co/static-openweb/last-trop.svg",
    title: "Fintech Rising",
    year: "Star",
    alt: "Fintech Rising Star",
  },
  {
    id: 9,
    image: "https://stock-logos.dhan.co/static-openweb/Global Fintech Fest.svg",
    title: "Best in Class",
    year: "Stock Trading Solution",
    alt: "Global Fintech Fest",
  },
];

const Awards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(2); // Mobile: 2 cards (1 slide shows 2 awards)
      } else if (window.innerWidth < 1024) {
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
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(awards.length / visibleCards) - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [visibleCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(awards.length / visibleCards) - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [visibleCards]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // For mobile view - group awards in pairs
  const mobileSlides = [];
  for (let i = 0; i < awards.length; i += 2) {
    mobileSlides.push(awards.slice(i, i + 2));
  }

  return (
    <section className="relative bg-no-repeat bg-right bg-cover w-full md:bg-[url('https://stock-logos.dhan.co/static-openweb/BG-Awards.svg')] bg-[url('https://stock-logos.dhan.co/static-new-images/awardssmbg.png')]">
      <div className="max-w-8xl mx-auto md:pb-8 pb-0 pt-8 lg:px-24 px-5 md:px-10">
        {/* Desktop View */}
        <div className="hidden lg:block relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-center pb-10">
            <div className="lg:w-14 w-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
                className="w-full h-full"
              >
                <path
                  fill="#f59e03"
                  d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z"
                />
                <path
                  fill="#fbce4f"
                  d="M50 15 L58 38 L82 38 L62 52 L70 75 L50 61 L30 75 L38 52 L18 38 L42 38 Z"
                />
              </svg>
            </div>
            <p className="text-gray-dark lg:text-3xl text-xl font-semibold pl-2">
              We are Winning!
            </p>
          </div>

          {/* Desktop Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-2.5"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleCards)
                  }%)`,
                }}
              >
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / visibleCards}% - ${
                        (10 * (visibleCards - 1)) / visibleCards
                      }px)`,
                    }}
                  >
                    <div className="flex justify-center gap-3 flex-col items-center py-4">
                      <div className="relative w-full h-24 flex items-center justify-center">
                        <Image
                          src={award.image}
                          alt={award.alt}
                          width={200}
                          height={96}
                          className="object-contain max-h-24"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-gray-dark text-sm font-normal">
                          {award.title}
                          <br />
                          <span className="text-gray-dark text-sm font-semibold">
                            {award.year}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous awards"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
              aria-label="Next awards"
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

        {/* Mobile View */}
        <div className="lg:hidden block">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
                className="w-full h-full"
              >
                <path
                  fill="#f59e03"
                  d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z"
                />
                <path
                  fill="#fbce4f"
                  d="M50 15 L58 38 L82 38 L62 52 L70 75 L50 61 L30 75 L38 52 L18 38 L42 38 Z"
                />
              </svg>
            </div>
            <p className="text-gray-dark text-2xl font-semibold pl-2">
              We are Winning!
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {mobileSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4">
                      {slide.map((award) => (
                        <div
                          key={award.id}
                          className="flex justify-center gap-4 flex-col items-center"
                        >
                          <div className="relative w-full h-12 md:h-20 flex items-center justify-center">
                            <Image
                              src={award.image}
                              alt={award.alt}
                              width={150}
                              height={80}
                              className="object-contain max-h-12 md:max-h-20"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-gray-dark text-xs font-normal">
                              {award.title}
                              <br />
                              <span className="text-gray-dark text-xs font-semibold">
                                {award.year}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {mobileSlides.map((_, index) => (
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
    </section>
  );
};

export default Awards;
