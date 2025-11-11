"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaPhone, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

type Category = "online-trading" | "ekyc" | "rekyc" | "closure";
type Step = "category" | "phone" | "otp";

const LoginPage: React.FC = () => {
  const [step, setStep] = useState<Step>("phone");
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("online-trading");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [percentage, setPercentage] = useState(3.0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    { value: "online-trading", label: "Online Trading" },
    { value: "ekyc", label: "Start eKYC" },
    { value: "rekyc", label: "Start Re-KYC" },
    { value: "closure", label: "Start Closure" },
  ];

  // Animated percentage counter
useEffect(() => {
  let interval: NodeJS.Timeout;
  const isResettingRef = { current: false };

  const startCountdown = () => {
    interval = setInterval(() => {
      setPercentage((prev) => {
        const newValue = prev - 0.01;

        if (newValue <= 0 && !isResettingRef.current) {
          isResettingRef.current = true;
          clearInterval(interval);

          setTimeout(() => {
            setPercentage(3.0);
            isResettingRef.current = false;
            startCountdown();
          }, 5000);

          return 0;
        }

        return newValue > 0 ? newValue : 0;
      });
    }, 10);
  };

  startCountdown();
  return () => clearInterval(interval);
}, []);


  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("phone");
    }, 500);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
        setTimer(30);
      }, 1000);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        if (selectedCategory === "online-trading") {
          window.location.href = "/dashboard";
        } else if (selectedCategory === "ekyc") {
          window.location.href = "/ekyc";
        } else if (selectedCategory === "rekyc") {
          window.location.href = "/rekyc";
        } else if (selectedCategory === "closure") {
          window.location.href = "/account-closure";
        }
      }, 1000);
    }
  };

  const getCategoryLabel = () => {
    return (
      categories.find((cat) => cat.value === selectedCategory)?.label || ""
    );
  };

  return (
    <div className="min-h-screen bg-white bglogin overflow-hidden">
      {/* <Header /> */}

      <section className="min-h-screen ">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen ">
            {/* Left Side - Animated Features */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
              {/* Background gradient circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#EF9309]/10 to-[#D68108]/5 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Rotating circles */}
              <div className=" w-full h-full flex items-center justify-center">
                {/* Outer rotating circle */}
                <div className="absolute w-[600px] h-[600px] border-2 border-dashed border-[#EF9309]/20 rounded-full animate-spin-slow"></div>

                {/* Middle rotating circle */}
                <div className="absolute w-[450px] h-[450px] border-2 border-dashed border-blue-500/20 rounded-full animate-spin-reverse"></div>

                {/* Inner rotating circle */}
                <div className="absolute w-[300px] h-[300px] border-2 border-dashed border-purple-500/20 rounded-full animate-spin-slow"></div>

                {/* Feature badges - positioned around circles */}
                <div
                  className="absolute top-10 left-1/2 -translate-x-1/2 animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Advanced Charts
                  </div>
                </div>

                <div
                  className="absolute -left-10 top-1/2 -translate-y-1/2 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-[#EF9309] to-[#D68108] text-white rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Portfolio Analytics
                  </div>
                </div>

                <div
                  className="absolute -right-10 top-1/2 -translate-y-1/2 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Real-time Data
                  </div>
                </div>

                <div
                  className="absolute bottom-16 left-16 animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Smart Screeners
                  </div>
                </div>

                <div
                  className="absolute bottom-16 right-16 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Expert Picks
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-20 right-20 w-3 h-3 bg-[#EF9309] rounded-full animate-ping"></div>
                <div
                  className="absolute bottom-32 left-24 w-2 h-2 bg-blue-500 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-32 left-32 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                  style={{ animationDelay: "2s" }}
                ></div>

                {/* Center content with animated counter */}
                <div className="relative z-10 text-center rounded-4xl ">
                  <div className="w-16 h-16 rounded-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                    {/* <span className="text-white text-xs font-bold">EZ</span> */}
                    <Image
                      src="/ez1.webp"
                      alt="EZWealth"
                      width={80}
                      height={80}
                      className="w-16 h-16"
                    />
                  </div>
                  {/* Animated Percentage Counter */}
                  <div className="mb-6">
                    <div className="relative">
                      {/* Glowing background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#EF9309] to-[#D68108] rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>

                      {/* Counter display */}
                      <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border-4 border-[#EF9309]/20">
                        <p className="text-sm font-semibold text-[#666] mb-2">
                          Brokerage Drop
                        </p>
                        <div className="text-7xl font-bold text-[#0A2745]">
                          {percentage.toFixed(2)}%
                        </div>
                        <p className="text-xs text-[#666] mt-2">
                          Ultra-Low Trading Fees
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <h2 className="text-4xl font-bold text-gray-dark mb-4">
                    EZWealth
                  </h2>
                  <p className="text-xl text-[#666] mb-8">
                    Trade Smarter, Grow Faster
                  </p> */}

                  {/* Bottom message */}
                  {/* <div className="mt-8 p-6 bg-gradient-to-r from-[#EF9309]/10 to-[#D68108]/10 rounded-2xl border-2 border-[#EF9309]/20">
                    <p className="text-lg font-semibold text-gray-dark">
                      & a whole host of
                      <br />
                      <span className="text-[#EF9309]">
                        handy trade enablers
                      </span>
                    </p>
                    <div className="flex justify-end mt-2">
                      <div className="text-4xl text-[#EF9309]">✨</div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 max-w-md mx-auto">
                {step !== "phone" && ( // Changed from step !== "category"
                  <button
                    onClick={() => {
                      if (step === "otp") {
                        setStep("phone");
                      }
                      // Removed: else if (step === "phone") { setStep("category"); }
                    }}
                    className="mb-6 flex items-center gap-2 text-[#666] hover:text-gray-dark transition-colors"
                  >
                    <FaArrowRight className="w-4 h-4 rotate-180" />
                    <span className="text-sm font-semibold">Back</span>
                  </button>
                )}

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-dark mb-8">
                  {/* {step === "category" && "Login to EZWealth"} */}
                  {step === "phone" && "Enter Mobile Number"}
                  {step === "otp" && "Verify OTP"}
                </h2>

                {/* Category Selection Step */}
                {/* {step === "category" && (
                  <form onSubmit={handleCategorySubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-dark mb-3">
                        Login to:
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EF9309] focus:outline-none focus:bg-white transition-all text-gray-dark font-semibold text-left flex items-center justify-between"
                        >
                          <span>{getCategoryLabel()}</span>
                          <FaChevronDown
                            className={`w-4 h-4 text-gray-400 transition-transform ${
                              showDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {showDropdown && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                            {categories.map((cat) => (
                              <button
                                key={cat.value}
                                type="button"
                                onClick={() => {
                                  setSelectedCategory(cat.value as Category);
                                  setShowDropdown(false);
                                }}
                                className={`w-full px-4 py-3 text-left transition-all ${
                                  selectedCategory === cat.value
                                    ? "bg-[#EF9309] text-white font-bold"
                                    : "bg-white text-gray-dark hover:bg-gray-50"
                                }`}
                              >
                                {cat.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? "Processing..." : "Continue"}
                    </button>
                  </form>
                )} */}

                {/* Phone Number Step */}
                {step === "phone" && (
                  <form onSubmit={handlePhoneSubmit} className="space-y-6">
                    {/* <div className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <p className="text-xs text-[#666] mb-1">
                        Selected Service
                      </p>
                      <p className="text-sm font-bold text-gray-dark">
                        {getCategoryLabel()}
                      </p>
                    </div> */}

                    <div>
                      <label className="block text-sm font-semibold text-gray-dark mb-3">
                        Trading Code
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phoneNumber}
                          onChange={(e) =>
                            setPhoneNumber(e.target.value.replace(/\D/g, ""))
                          }
                          placeholder="Enter Your Trading Code Here"
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EF9309] focus:outline-none focus:bg-white transition-all text-gray-dark placeholder-gray-400"
                        />
                        {/* <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" /> */}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={phoneNumber.length !== 10 || isLoading}
                      className="w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? "Processing..." : "Proceed"}
                    </button>
                  </form>
                )}

                {/* OTP Step */}
                {step === "otp" && (
                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div>
                      <p className="text-sm text-[#666] mb-6 text-center">
                        Enter the 6-digit OTP sent to
                        <br />
                        <span className="font-semibold text-gray-dark">
                          +91 {phoneNumber}
                        </span>
                      </p>
                      <div className="flex gap-3 justify-center mb-6">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            ref={(el) => {
                              otpRefs.current[index] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) =>
                              handleOtpChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                            className="w-12 h-14 text-center text-xl font-bold bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EF9309] focus:outline-none focus:bg-white transition-all"
                          />
                        ))}
                      </div>

                      <div className="text-center">
                        {timer > 0 ? (
                          <p className="text-sm text-[#666]">
                            Resend OTP in{" "}
                            <span className="font-bold text-[#EF9309]">
                              {timer}s
                            </span>
                          </p>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setTimer(30)}
                            className="text-sm text-[#EF9309] font-bold hover:text-[#D68108]"
                          >
                            Resend OTP
                          </button>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={otp.join("").length !== 6 || isLoading}
                      className="w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? "Verifying..." : "Verify & Login"}
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep("phone")}
                      className="w-full text-sm text-[#666] hover:text-gray-dark font-semibold"
                    >
                      Change Number
                    </button>
                  </form>
                )}

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      {/* <span className="text-white text-xs font-bold">EZ</span> */}
                      <Image
                        src="/ez1.webp"
                        alt="EZWealth"
                        width={16}
                        height={16}
                        className="w-8 h-8"
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-dark">
                      ezwealth
                    </span>
                  </div>
                </div>
              </div>

              {/* Sign up link */}
              {step === "phone" && (
                <p className="text-center text-sm text-[#666] mt-6">
                  Don't have an account?{" "}
                  <Link
                    href="/auth/open-demat-account"
                    className="text-[#EF9309] font-bold hover:text-[#D68108]"
                  >
                    Create Account
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
