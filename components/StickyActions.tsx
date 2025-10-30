'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCalculator, FaPhoneAlt } from 'react-icons/fa';

const StickyActions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-1000 hidden lg:block ">
      <div className="flex flex-col gap-3">
        {/* Calculator Button */}
        <Link href="/calculators/">
          <div
            className="group relative"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <div className="flex items-center">
              {/* Icon Button */}
              <div className="bg-[#0A2745] hover:bg-[#1A3A5C] transition-all duration-300 rounded-r-2xl p-4 shadow-lg cursor-pointer">
                <FaCalculator className="w-6 h-6 text-white" />
              </div>
              
              {/* Expandable Text (hidden by default) */}
              <div
                className={`bg-[#0A2745] transition-all duration-300 overflow-hidden whitespace-nowrap rounded-r-2xl shadow-lg ${
                  isExpanded ? 'max-w-[200px] opacity-100 pl-3 pr-6' : 'max-w-0 opacity-0'
                }`}
              >
                <span className="text-white font-medium text-sm">Calculator</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Callback Request Button */}
        <Link href="/contact/">
          <div className="group relative">
            <div className="flex items-center">
              {/* Vertical Text Panel */}
              <div className="bg-[#EF9309] hover:bg-[#D68108] transition-all duration-300 rounded-r-2xl py-8 px-3 shadow-lg cursor-pointer flex items-center justify-center">
                <div className="flex flex-col items-center">
                  {/* Phone Icon */}
                  <div className="mb-3 animate-bounce">
                    <FaPhoneAlt className="w-5 h-5 text-white transform rotate-12" />
                  </div>
                  
                  {/* Vertical Text */}
                  <div className="writing-mode-vertical text-white font-semibold text-base tracking-wider">
                    <span className="inline-block transform rotate-180">
                      Callback Request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StickyActions;