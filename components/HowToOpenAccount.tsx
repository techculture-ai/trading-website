"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaMobileAlt,
  FaKey,
  FaUserCheck,
  FaFileSignature,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowRight,
  FaQrcode,
} from "react-icons/fa";

interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  image?: string;
}

const steps: Step[] = [
  {
    id: 1,
    number: "01",
    title: "Download the App",
    description: "Download the ez wealth app or visit our website",
    icon: <FaMobileAlt className="w-8 h-8" />,
    details: [
      "Available on iOS and Android",
      "Quick 2-minute download",
      "User-friendly interface",
    ],
    image: "/steps/download-app.svg",
  },
  {
    id: 2,
    number: "02",
    title: "Enter Mobile & OTP",
    description: "Enter your mobile number and verify with OTP",
    icon: <FaKey className="w-8 h-8" />,
    details: [
      "Instant OTP verification",
      "Secure authentication",
      "No password hassle",
    ],
    image: "/steps/otp-verify.svg",
  },
  {
    id: 3,
    number: "03",
    title: "Verify KYC & Bank",
    description: "Verify your KYC and bank account details",
    icon: <FaUserCheck className="w-8 h-8" />,
    details: [
      "DigiLocker integration",
      "Instant Aadhaar verification",
      "Link bank account securely",
    ],
    image: "/steps/kyc-verify.svg",
  },
  {
    id: 4,
    number: "04",
    title: "eSign & Start Trading",
    description: "eSign your documents and start trading",
    icon: <FaFileSignature className="w-8 h-8" />,
    details: [
      "Paperless process",
      "Digital signature",
      "Instant account activation",
    ],
    image: "/steps/esign.svg",
  },
];

const HowToOpenAccount: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#fbc40c]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D09C]/10 rounded-full blur-3xl"></div>

      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 backdrop-blur-sm border border-[#fbc40c]/20 rounded-full px-4 py-2 mb-6">
            <FaCheckCircle className="w-4 h-4 text-[#fbc40c]" />
            <span className="text-sm font-semibold text-[#fbc40c]">
              Simple & Fast
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How to Open a <span className="text-[#fbc40c]">Demat Account?</span>
          </h2>
          <p className="text-lg text-[#DADADA] max-w-3xl mx-auto">
            Start your investment journey in just 4 simple steps. Open your free
            demat account in less than 5 minutes!
          </p>
        </div>

        {/* Desktop View - Timeline */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Progress Line */}
            {/* <div className="absolute top-24 left-0 right-0 h-1 bg-white/10">
              <div 
                className="h-full bg-gradient-to-r from-[#fbc40c] to-[#00D09C] transition-all duration-500"
                style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>
            </div> */}

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(0)}
                >
                  {/* Step Card */}
                  <div
                    className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      activeStep === step.id
                        ? "border-[#fbc40c] shadow-xl shadow-[#fbc40c]/20 -translate-y-2"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    {/* Icon Circle */}
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                        activeStep === step.id
                          ? "bg-gradient-to-br from-[#fbc40c] to-[#D68108] scale-110"
                          : "bg-white/10"
                      }`}
                    >
                      <div className="text-white">{step.icon}</div>
                    </div>

                    {/* Step Number */}
                    <div className="text-center mb-3">
                      <span
                        className={`text-sm font-bold ${
                          activeStep === step.id
                            ? "text-[#fbc40c]"
                            : "text-[#8E8E8E]"
                        }`}
                      >
                        STEP {step.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg font-bold text-center mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#DADADA] text-sm text-center mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    {/* {activeStep === step.id && (
                      <div className="mt-4 space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#DADADA]">
                            <FaCheckCircle className="w-3 h-3 text-[#00D09C] mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )} */}

                    {/* Arrow Indicator */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-7 top-1/2 -translate-y-1/2 z-20">
                        <FaArrowRight className="w-6 h-6 text-[#fbc40c]" />
                      </div>
                    )}
                  </div>

                  {/* Connection Line Dot */}
                  <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                      activeStep >= step.id
                        ? "bg-[#fbc40c] border-[#0A2745]"
                        : "bg-white/20 border-[#0A2745]"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Accordion */}
        <div className="lg:hidden space-y-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                activeStep === step.id
                  ? "border-[#fbc40c] shadow-xl"
                  : "border-white/10"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activeStep === step.id
                      ? "bg-gradient-to-br from-[#fbc40c] to-[#D68108]"
                      : "bg-white/10"
                  }`}
                >
                  <div className="text-white text-sm">{step.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-[#fbc40c] text-xs font-bold mb-1">
                    STEP {step.id}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#DADADA] text-sm">{step.description}</p>

                  {/* Details - Expanded */}
                  {activeStep === step.id && (
                    <div className="mt-4 space-y-2">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[#DADADA]"
                        >
                          <FaCheckCircle className="w-4 h-4 text-[#00D09C] mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        {/* <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-[#DADADA] mb-6 text-lg">
                Download our app or visit our website to open your free demat account today!
              </p>

              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on App Store"
                    width={135}
                    height={40}
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                  />
                </a>
              </div>
            </div>

            
            <div className="flex-shrink-0">
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <FaQrcode className="w-24 h-24 text-gray-400" />
                </div>
                <p className="text-center text-xs text-gray-600 mt-2">Scan to Download</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Security Notice */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[#DADADA]">
          <FaShieldAlt className="w-5 h-5 text-[#00D09C]" />
          <p className="text-sm">
            All data is stored safely with encryption as per regulatory
            guidelines
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOpenAccount;
