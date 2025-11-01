'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ipsita Sahoo',
    username: '@ipsiworld',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img1.jpg',
    content: 'I am loving Dhan app so far. @DhanHQ @DhanCares Thanks for providing an amazing platform specially for traders. #OptionsTrading #TRADINGTIPS',
  },
  {
    id: 2,
    name: 'chirag_p',
    username: '@chirag_721p',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img2.jpg',
    content: '@dhanhq good broker and good tech support with best chart experience. #madefortrade with tradingview chart with no glitch in price movement',
  },
  {
    id: 3,
    name: 'SSUMIT',
    username: '@saxenassumit',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img3.jpg',
    content: '@DhanHQ is the best ❤️',
  },
  {
    id: 4,
    name: 'Shashank Singh',
    username: '@knahsahs_hgnis',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img4.jpg',
    content: 'No matter what, but i will be the strongest cheerleader for @DhanHQ, hope to see you guys as the industry leader in coming 5 years, All the best, @BeingPractical u have literally inspired me a lot, cheers.',
  },
  {
    id: 5,
    name: 'Novice Trader',
    username: '@NoviceT7',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img5.jpg',
    content: 'I started using Dhan trading platform and I would say this is one of the best platform for the trader providing seamless UI @DhanHQ',
  },
  {
    id: 6,
    name: 'Trading eye',
    username: '@Priyabrata099',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img6.jpg',
    content: "Dhan's platform is best in India.",
  },
  {
    id: 7,
    name: 'TUKKEBAAZ TRADER',
    username: '@tukkebaaztrader',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img7.jpg',
    content: 'Really best broker. I tried and traded in many brokers. But your platform is too good for trading',
  },
  {
    id: 8,
    name: 'Gaurav (blue tick here)',
    username: '@simplyGAURAV007',
    avatar: 'https://stock-logos.dhan.co/static-openweb/img8.jpg',
    content: 'I got access to options app of @DhanHQ. Blown away by the ease of placing trade and brokerage calculation. For someone who ends up placing more than 20 intraday orders on an avg this thing is insanely powerful and cost effective. Wow! In love with the product. @BeingPractical 🔥🔥',
  },
  {
    id: 9,
    name: 'Vivek Joshi',
    username: '@mejoshivivek',
    avatar: 'https://stock-logos.dhan.co/static-new-images/vivek-twit.jpeg',
    content: 'You guys are dropping bombs on other discount brokers!🔥 Truly out of the box features!',
  },
  {
    id: 10,
    name: 'Kshitiz Anand',
    username: '@nuisancejunkie',
    avatar: 'https://stock-logos.dhan.co/static-new-images/kshitiz-twit.jpeg',
    content: 'Awesome job guys! @DhanHQ @DhanLive @DhanCares you listened! And did a wonderful job! Too good. Made my (and all the user\'s) day!',
  },
  {
    id: 11,
    name: 'Chirag',
    username: '@tweetsbychirag',
    avatar: 'https://stock-logos.dhan.co/static-new-images/chirag-twit.jpeg',
    content: 'Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best.',
  },
  {
    id: 12,
    name: 'Suneel.A',
    username: '@a_suneel',
    avatar: 'https://stock-logos.dhan.co/static-new-images/Suneel.jpg',
    content: '@DhanHQ Undoubtedly the best trading platform I have used ! Love the UI and the ease of use.',
  },
  {
    id: 13,
    name: 'Annamayya ks',
    username: '@ksannamayya',
    avatar: 'https://stock-logos.dhan.co/static-new-images/anna-twit.jpeg',
    content: '@DhanHQ - excellent interphase and features for traders, just go through their features. U will not need any other broker. Amazon level customer service.',
  },
  {
    id: 14,
    name: 'Raj Kundalia',
    username: '@raj_kundalia',
    avatar: 'https://stock-logos.dhan.co/static-new-images/raj-twit.jpeg',
    content: 'Super fast support from @DhanHQ',
  },
  {
    id: 15,
    name: 'Aakash Kamdi',
    username: '@johndoedeigner',
    avatar: 'https://stock-logos.dhan.co/static-new-images/akashkambadi.png',
    content: 'There is a new player in the financial market - @RaiseTheBarHQ entering with its own ecosystem with scratch. The very first product is @DhanHQ awaiting early access & also can\'t wait to see other Products.',
  },
  {
    id: 16,
    name: 'Ronak Bhagdev',
    username: '@RonakBhagdev',
    avatar: 'https://stock-logos.dhan.co/static-new-images/ronakbhag.png',
    content: '@DhanHQ experience is super fast so far. Onboarding and applying for IPO were never that much easier. I am sure they must have some surprises coming in for long term investors like me.',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create infinite loop by duplicating testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality with infinite loop
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Reset position when reaching the end of duplicated array
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
      }, 500);
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
      }, 500);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(testimonials.length + index);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="bg-gradient-to-br from-[#0A1929] via-[#0F2744] to-[#0A1929] py-12 lg:py-20">
      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        {/* Header */}
        <div className="flex justify-center items-center gap-2 mb-8 lg:mb-12">
          <div className="hidden lg:flex md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="28"
              height="28"
              className="text-red-500"
            >
              <path
                fill="#ef4b53"
                d="M109.5,3021.625 C109.5,3021.625 85.75,3012.75 74.75,3033.625 C66.625,3047.5 76.625,3062.5 76.625,3062.5 C76.625,3062.5 114.375,3099.75 118.25,3104.125 C120.25,3107.875 122.875,3103.75 122.875,3103.75 C122.875,3103.75 160.875,3065.75 166,3059.25 C168.625,3054.125 176,3032 154.375,3022.5 C132.75,3013 120.625,3030 120.625,3030 C120.625,3030 109.5,3021.625 109.5,3021.625"
                transform="scale(0.42) translate(-70, -3012)"
              />
            </svg>
          </div>
          <h2 className="text-white text-2xl lg:text-3xl font-semibold text-center">
            Love from India&apos;s{' '}
            <span className="text-[#EF9309]">Traders & Investors</span>
          </h2>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(24 * (visibleCards - 1)) / visibleCards}px)` }}
                >
                  <div className="bg-gradient-to-br from-[#1A2B42]/80 to-[#0F1F35]/80 rounded-[20px] p-5 h-[270px] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <Image
                          src="https://stock-logos.dhan.co/static-openweb/twitter1.png"
                          alt="Twitter"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                    <p className="text-[#DADADA] font-medium text-lg mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[#8E8E8E] text-sm mb-3">
                      {testimonial.username}
                    </p>
                    <p className="text-[#8E8E8E] text-sm leading-[18px] line-clamp-4">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % testimonials.length) === index
                    ? 'bg-[#EF9309] w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative px-4">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div key={`mobile-${testimonial.id}-${index}`} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gradient-to-br from-[#1A2B42]/80 to-[#0F1F35]/80 rounded-[20px] p-4 min-h-[250px] backdrop-blur-sm border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <Image
                          src="https://stock-logos.dhan.co/static-openweb/twitter1.png"
                          alt="Twitter"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                    <p className="text-[#DADADA] font-medium text-base mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-[#8E8E8E] text-sm mb-3">
                      {testimonial.username}
                    </p>
                    <p className="text-[#8E8E8E] text-xs leading-[18px]">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % testimonials.length) === index
                    ? 'bg-[#EF9309] w-8'
                    : 'bg-white/30 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;