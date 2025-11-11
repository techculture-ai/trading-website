"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaRocket,
  FaHandshake,
  FaUserTie,
  FaChartLine,
  FaMoneyBillWave,
  FaClock,
  FaGraduationCap,
  FaHeadset,
  FaTrophy,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaLaptop,
  FaShieldAlt,
  FaGift,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

interface Reward {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface Benefit {
  id: number;
  title: string;
  description: string;
}

const rewards: Reward[] = [
  {
    id: 1,
    icon: <FaMoneyBillWave className="w-8 h-8" />,
    title: "High Revenue Sharing",
    description:
      "Earn competitive revenue share on every transaction. Get attractive commissions on brokerage generated.",
    gradient: "from-green-500 to-green-600",
  },
  {
    id: 2,
    icon: <FaGift className="w-8 h-8" />,
    title: "Performance Bonuses",
    description:
      "Additional incentives based on targets achieved. Get rewarded for exceptional performance.",
    gradient: "from-[#fbc40c] to-[#D68108]",
  },
  {
    id: 3,
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: "Free Training",
    description:
      "Comprehensive training programs on trading, markets, and business development.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 4,
    icon: <FaLaptop className="w-8 h-8" />,
    title: "Technology Support",
    description:
      "Access to advanced trading platforms, tools, and marketing materials at no cost.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    icon: <FaHeadset className="w-8 h-8" />,
    title: "Dedicated Support",
    description:
      "Personal relationship manager and 24/7 support for you and your clients.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    id: 6,
    icon: <FaTrophy className="w-8 h-8" />,
    title: "Recognition & Awards",
    description:
      "Regular recognition programs, awards, and exclusive partner events.",
    gradient: "from-yellow-500 to-yellow-600",
  },
];

const whoCanBecome = [
  {
    icon: <FaUserTie className="w-6 h-6" />,
    title: "Financial Professionals",
    description:
      "Financial advisors, wealth managers, and investment consultants",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Entrepreneurs",
    description: "Business owners looking to diversify into financial services",
  },
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: "Graduates",
    description: "Finance graduates with passion for capital markets",
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "Traders",
    description: "Experienced traders with good market knowledge",
  },
];

const eligibilityCriteria: Benefit[] = [
  { id: 1, title: "Age Requirement", description: "Must be 18 years or above" },
  {
    id: 2,
    title: "Educational Qualification",
    description: "Minimum 12th pass or equivalent",
  },
  {
    id: 3,
    title: "NISM Certification",
    description: "NISM Series VIII certification (we provide training)",
  },
  { id: 4, title: "PAN Card", description: "Valid PAN card is mandatory" },
  {
    id: 5,
    title: "Clean Track Record",
    description: "No criminal or financial irregularities",
  },
  {
    id: 6,
    title: "Business Setup",
    description: "Office space for client meetings (can be home-based)",
  },
];

const whyBecomePartner: Benefit[] = [
  {
    id: 1,
    title: "Zero Investment",
    description: "No initial deposit or setup fees required",
  },
  {
    id: 2,
    title: "Flexible Timings",
    description: "Work at your own pace and schedule",
  },
  {
    id: 3,
    title: "Recurring Income",
    description: "Build a sustainable income stream",
  },
  {
    id: 4,
    title: "Brand Support",
    description: "Leverage EZWealth brand and reputation",
  },
  {
    id: 5,
    title: "Marketing Assistance",
    description: "Complete marketing and promotional support",
  },
  {
    id: 6,
    title: "Growth Potential",
    description: "Unlimited earning potential with no caps",
  },
];

const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Thank you for your interest! Our team will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        {/* Removed decorative blobs or keep them subtle */}

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 border border-[#fbc40c]/30 rounded-full px-4 py-2 mb-6">
                <FaHandshake className="w-4 h-4 text-[#fbc40c]" />
                <span className="text-sm font-semibold text-[#fbc40c]">
                  Partnership Program
                </span>
              </div>

              <h1 className="text-3xl lg:text-[38px] font-bold text-[#0A2745] mb-6">
                Become a <span className="text-[#fbc40c]">Partner</span>
              </h1>
              <p className="text-base lg:text-lg text-[#8E8E8E] leading-relaxed mb-8">
                Join India's fastest-growing broking platform. Build your own
                financial services business with zero investment and unlimited
                earning potential.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#fbc40c]/10 to-[#D68108]/5 border-2 border-[#fbc40c]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#fbc40c] mb-2">
                    5000+
                  </p>
                  <p className="text-sm text-[#8E8E8E]">Active Partners</p>
                </div>
                <div className="bg-gradient-to-br from-[#00D09C]/10 to-[#00B09C]/5 border-2 border-[#00D09C]/20 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-[#00D09C] mb-2">
                    ₹10L+
                  </p>
                  <p className="text-sm text-[#8E8E8E]">Avg. Annual Earning</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="px-8 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Apply Now
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#benefits"
                  className="px-8 py-4 bg-white border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-[650px] h-full flex items-center justify-center">
                <Image
                  src="/partner5.avif"
                  alt="Partner Program"
                  width={600}
                  height={500}
                  className="object-contain drop-shadow-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Rewards of Becoming an{" "}
              <span className="text-[#fbc40c]">Authorised Partner</span>
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              Experience unparalleled benefits and rewards as you grow your
              business with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#fbc40c]"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${reward.gradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{reward.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-dark mb-3 group-hover:text-[#fbc40c] transition-colors">
                  {reward.title}
                </h3>

                <p className="text-sm text-[#666] leading-relaxed">
                  {reward.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Become Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Who Can Become an{" "}
              <span className="text-[#fbc40c]">Authorised Person</span>
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              Our partnership program is designed for diverse professionals and
              entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoCanBecome.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#fbc40c] text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
                Eligibility Criteria
              </h2>
              <div className="w-16 h-1 bg-[#fbc40c] rounded-full mb-6"></div>
              <p className="text-lg text-[#666] mb-8">
                Simple and straightforward requirements to get started as our
                partner
              </p>

              <div className="space-y-4">
                {eligibilityCriteria.map((criteria) => (
                  <div
                    key={criteria.id}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#fbc40c]/5 hover:border-[#fbc40c] border-2 border-transparent transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-dark mb-1">
                        {criteria.title}
                      </h4>
                      <p className="text-sm text-[#666]">
                        {criteria.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#fbc40c]/10 to-blue-100/50 rounded-2xl p-8 border-2 border-[#fbc40c]/20">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-[#666]">Quick Process</p>
                      <p className="text-xl font-bold text-gray-dark">
                        Get Started in 7 Days
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#666]">
                    Complete the entire onboarding process and start earning
                    within a week
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-dark mb-4">
                    What You Get
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "NISM Certification Support",
                      "Complete Documentation Help",
                      "Free Training & Onboarding",
                      "Dedicated Partner Manager",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <FaStar className="w-4 h-4 text-[#fbc40c] flex-shrink-0" />
                        <span className="text-sm text-[#666]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Why Become a <span className="text-[#fbc40c]">Partner</span>
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              Join the most rewarding partnership program in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBecomePartner.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-[#fbc40c]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#fbc40c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#fbc40c] font-bold">
                      {benefit.id}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-dark mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-[#666]">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-[#fbc40c] mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Fill the partner application form",
                icon: <FaUserTie />,
              },
              {
                step: "2",
                title: "Get Verified",
                description: "Complete KYC and documentation",
                icon: <FaShieldAlt />,
              },
              {
                step: "3",
                title: "Get Trained",
                description: "Attend training and get certified",
                icon: <FaGraduationCap />,
              },
              {
                step: "4",
                title: "Start Earning",
                description: "Begin your partnership journey",
                icon: <FaRocket />,
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div
                  className="absolute top-10 left-1/2 w-full h-0.5 bg-[#fbc40c]/20 hidden md:block"
                  style={{ display: index === 3 ? "none" : "block" }}
                ></div>
                <h3 className="text-lg font-bold text-gray-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        id="apply"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
                Apply for Partnership
              </h2>
              <p className="text-base text-[#666]">
                Fill out the form below and our team will get back to you within
                24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 1234567890"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Your city"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-dark mb-2">
                  Experience in Financial Services
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="no-experience">No Experience</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="2-5">2-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-dark mb-2">
                  Additional Information
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us more about yourself..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <FaArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-dark mb-6">
            Have <span className="text-[#fbc40c]">Questions?</span>
          </h3>
          <p className="text-lg text-[#666] mb-8">
            Our partnership team is here to help you get started
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1237767898989"
              className="px-10 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <FaPhone className="w-4 h-4" />
              Call Us: +123-7767-8989
            </a>
            <a
              href="mailto:partner@ezwealth.com"
              className="px-10 py-4 bg-white border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope className="w-4 h-4" />
              partner@ezwealth.com
            </a>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default PartnerPage;
