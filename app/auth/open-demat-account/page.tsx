"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaUser, FaCheckCircle } from "react-icons/fa";

type Step = "phone" | "otp" | "email" | "name" | "success";

const SignupPage: React.FC = () => {
  const [step, setStep] = useState<Step>("phone");
  const [formData, setFormData] = useState({
    phone: "",
    otp: ["", "", "", "", "", ""],
    email: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length === 10) {
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
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData((prev) => ({ ...prev, otp: newOtp }));
      if (value && index < 5) otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = formData.otp.join("");
    if (otpValue.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep("email");
      }, 1000);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("name");
    }, 800);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1000);
  };

  const getProgressPercentage = () => {
    const steps: Step[] = ["phone", "otp", "email", "name"];
    const currentIndex = steps.indexOf(step);
    return ((currentIndex + 1) / steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      <section className="">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
            {/* Left Side - Branding */}
            <div className="relative">
              <div className="mb-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-dark mb-6 leading-tight">
                  Open Your Account
                  <br />
                  <span className="text-[#0A2745]">in Minutes</span>
                </h1>
                <p className="text-xl text-[#666] mb-2">
                  Free Demat, No Platform Fees, and ₹0 AMC for lifetime.
                </p>
                <p className="text-xl text-[#666]">
                  Join 1Mn+ Super Traders & Investors of India!
                </p>
              </div>

              {/* Made for section */}
              <div className="flex items-center gap-3">
                <div className="text-4xl">⚡</div>
                <div>
                  <p className="text-sm text-[#666]">Made for</p>
                  <p className="text-xl font-bold text-gray-dark">
                    Trading & Investing in{" "}
                    <span className="text-[#EF9309]">Mutual Funds</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 max-w-md mx-auto">
                {/* Progress Bar */}
                {step !== "success" && (
                  <div className="mb-8">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#EF9309] transition-all duration-500"
                        style={{ width: `${getProgressPercentage()}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-dark mb-8">
                  {step === "phone" && "Create Your Account"}
                  {step === "otp" && "Verify Mobile"}
                  {step === "email" && "Enter Your Email"}
                  {step === "name" && `What's Your Name?`}
                  {step === "success" && "Welcome to EZWealth!"}
                </h2>

                {/* Phone Step */}
                {step === "phone" && (
                  <form onSubmit={handlePhoneSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-dark mb-3">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value.replace(/\D/g, ""),
                            }))
                          }
                          placeholder="Enter Your Mobile Number Here"
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EF9309] focus:outline-none focus:bg-white transition-all text-gray-dark placeholder-gray-400"
                        />
                        <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formData.phone.length !== 10 || isLoading}
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
                          +91 {formData.phone}
                        </span>
                      </p>
                      <div className="flex gap-3 justify-center mb-6">
                        {formData.otp.map((digit, index) => (
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
                      disabled={formData.otp.join("").length !== 6 || isLoading}
                      className="w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? "Verifying..." : "Verify & Continue"}
                    </button>
                  </form>
                )}

                {/* Email Step */}
                {step === "email" && (
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-dark mb-3">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="Enter Your Email Address"
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EF9309] focus:outline-none focus:bg-white transition-all text-gray-dark placeholder-gray-400"
                        />
                        <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.email || isLoading}
                      className="w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? "Processing..." : "Continue"}
                    </button>
                  </form>
                )}

                {/* Name Step */}
                {step === "name" && (
                  <form onSubmit={handleNameSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-dark mb-3">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Enter Your Full Name"
                          className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#EF9309] focus:outline-none focus:bg-white transition-all text-gray-dark placeholder-gray-400"
                        />
                        <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!formData.name || isLoading}
                      className="w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isLoading
                        ? "Creating Account..."
                        : "Complete Registration"}
                    </button>
                  </form>
                )}

                {/* Success Step */}
                {step === "success" && (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <FaCheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <p className="text-lg text-[#666]">
                      Your account has been created successfully!
                    </p>
                    <Link
                      href="/dashboard"
                      className="block w-full py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Go to Dashboard
                    </Link>
                  </div>
                )}

                {/* Footer */}
                {step !== "success" && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 bg-[#EF9309] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">EZ</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-dark">
                        EZWealth Web
                      </span>
                    </div>
                  </div>
                )}

                {/* Login/Signup Link */}
                {step === "phone" && (
                  <p className="text-center text-sm text-[#666] mt-6">
                    Already have an account?{" "}
                    <Link
                      href="/auth/login"
                      className="text-[#EF9309] font-bold hover:text-[#D68108]"
                    >
                      Login
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default SignupPage;
