"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  FaPhone,
  FaChartLine,
  FaCalculator,
  FaMobileAlt,
  FaHandshake,
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaGraduationCap,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaQuoteLeft,
} from "react-icons/fa";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface WhyUsReason {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <FaPhone className="w-8 h-8" />,
    title: "Call N Trade",
    description:
      "Trade over phone at no extra cost. Expert assistance available when you need it.",
    gradient: "from-[#fbc40c] to-[#D68108]",
  },
  {
    id: 2,
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Investment Advisory",
    description:
      "Professional investment advice on call. Make informed decisions with expert guidance.",
    gradient: "from-[#00D09C] to-[#00C08A]",
  },
  {
    id: 3,
    icon: <FaCalculator className="w-8 h-8" />,
    title: "Income Tax Advisory",
    description:
      "Free tax planning and advisory services to optimize your investments.",
    gradient: "from-[#0A2745] to-[#1A3A5C]",
  },
  {
    id: 4,
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: "Free Research Picks",
    description:
      "Technical and fundamental picks delivered on mobile and desktop app.",
    gradient: "from-[#fbc40c] to-[#D68108]",
  },
  {
    id: 5,
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Wealth Pledge",
    description:
      "More leverage through our Wealth Pledge facility for enhanced trading.",
    gradient: "from-[#00D09C] to-[#00C08A]",
  },
  {
    id: 6,
    icon: <FaAward className="w-8 h-8" />,
    title: "All Exchanges",
    description: "Trade at BSE, NSE, MCX, and NCDEX in all segments.",
    gradient: "from-[#0A2745] to-[#1A3A5C]",
  },
];

const whyUsReasons: WhyUsReason[] = [
  {
    id: 1,
    title: "Range of Plans",
    description: "EZ Assist for RM assisted investment advice and trade.",
  },
  {
    id: 2,
    title: "EZ Flat Plan",
    description:
      "For less frequent traders regardless of the size of the order.",
  },
  {
    id: 3,
    title: "EZ Family Plan",
    description: "For high volume active unlimited traders.",
  },
  {
    id: 4,
    title: "Lowest Brokerage",
    description: "Flat ₹11/executed order across all segments.",
  },
  {
    id: 5,
    title: "Unlimited Trading",
    description: "Yearly unlimited at ₹4999/Segment or ₹7999 all segments.",
  },
  {
    id: 6,
    title: "Same Price",
    description:
      "Same price for Equity, F&O and Currency across all exchanges.",
  },
  {
    id: 7,
    title: "Advanced Software",
    description:
      "Back office software for online trading to secure opportunity.",
  },
  {
    id: 8,
    title: "Multi-Platform",
    description: "Desktop, Mobile and Online - connect from anywhere.",
  },
  {
    id: 9,
    title: "Free Charts",
    description: "Free technical charts and live streaming quotes.",
  },
  {
    id: 10,
    title: "100% Online",
    description: "Account opening through Aadhar based platform.",
  },
  {
    id: 11,
    title: "Hand Holding",
    description: "Support for first-time investors and homemakers.",
  },
  {
    id: 12,
    title: "Educational Blogs",
    description: "Informative blogs explaining market aspects.",
  },
  {
    id: 13,
    title: "Paperless",
    description: "No printing, signing or courier required.",
  },
  {
    id: 14,
    title: "Fund Transfer",
    description: "Online fund transfer through multiple banks.",
  },
  {
    id: 15,
    title: "Customer Support",
    description: "Dedicated interactive online support.",
  },
  {
    id: 16,
    title: "Simple Pricing",
    description: "No hidden charges or complex fee structures.",
  },
  {
    id: 17,
    title: "More for Less",
    description: "Maximum services at minimum cost.",
  },
  {
    id: 18,
    title: "Low Transaction Costs",
    description: "Among lowest exchange transaction costs.",
  },
  {
    id: 19,
    title: "Referral Program",
    description: "Earn money by referring friends.",
  },
  {
    id: 20,
    title: "Business Associate",
    description: "Start your business with lowest investment.",
  },
  {
    id: 21,
    title: "Experienced Promoters",
    description: "Vibrant and extensive industry experience.",
  },
  {
    id: 22,
    title: "Free Research",
    description: "Intraday and positional calls across segments.",
  },
  {
    id: 23,
    title: "Fundamental Reports",
    description: "Bi-monthly research reports to clients.",
  },
  {
    id: 24,
    title: "Financial Advice",
    description: "Flexibility to call and seek free advice.",
  },
  { id: 25, title: "And More", description: "Lot more benefits and features." },
];

const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    department: "Technology",
    image: "/team/priya.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Amit Kumar",
    role: "Head of Operations",
    department: "Operations",
    image: "/team/amit.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Sneha Patel",
    role: "Chief Marketing Officer",
    department: "Marketing",
    image: "/team/sneha.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Head of Customer Success",
    department: "Customer Relations",
    image: "/team/vikram.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Anita Desai",
    role: "Head of Compliance",
    department: "Legal & Compliance",
    image: "/team/anita.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "Rajesh Verma",
    role: "Head of Research",
    department: "Research & Analysis",
    image: "/team/rajesh.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>
        {/* <div className="absolute top-20 right-10 w-96 h-96 bg-[#fbc40c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div> */}

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 border border-[#fbc40c]/30 rounded-full px-4 py-2 mb-6">
              <FaRocket className="w-4 h-4 text-[#fbc40c]" />
              <span className="text-sm font-semibold text-[#fbc40c]">
                About ez wealth
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#0A2745] mb-6">
              A Different <span className="text-[#fbc40c]">Broking House</span>
            </h1>
            <p className="text-base lg:text-lg text-[#8E8E8E] leading-relaxed">
              Online brand of Wealth Discovery Securities Pvt Limited, a full
              service leading Stock Broking firm headquartered in New Delhi. We
              offer More for Less.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-20 -mt-20 relative z-10">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 py-20 imageBgWifi">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#fbc40c] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-dark mb-3 group-hover:text-[#fbc40c] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-[#666] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Dedicated to Rahul */}
      <section className="py-20  bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 rounded-full px-4 py-2 mb-4">
              <FaAward className="w-4 h-4 text-[#fbc40c]" />
              <span className="text-sm font-semibold text-[#fbc40c]">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Meet Our <span className="text-[#fbc40c]">Founder</span>
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              The visionary leader steering ez wealth towards innovation and
              excellence
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-96 lg:h-auto bg-gradient-to-br from-[#0A2745] to-[#1A3A5C]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                      <FaUsers className="w-24 h-24 text-white/50" />
                    </div> */}
                    <Image
                      src="/Rahul-Agarwal.jpg"
                      alt="Rahul Agarwal"
                      width={500}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Quote Badge */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-[#fbc40c] rounded-2xl flex items-center justify-center shadow-xl">
                    <FaQuoteLeft className="w-8 h-8 text-white" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-2">
                      Rahul Agarwal
                    </h3>
                    <p className="text-xl text-[#fbc40c] font-semibold mb-1">
                      Founder & CEO
                    </p>
                    <div className="w-20 h-1 bg-[#fbc40c] rounded-full"></div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-[#666] leading-relaxed">
                      Rahul looks after{" "}
                      <strong>
                        sales initiatives, marketing strategy and new product
                        design and implementation
                      </strong>
                      . Responsible for steering the company into new product
                      domains.
                    </p>
                    <p className="text-[#666] leading-relaxed">
                      Rahul brings over{" "}
                      <strong className="text-[#fbc40c]">
                        12 years of International Experience
                      </strong>{" "}
                      into Wealth Discovery. He is a Technocrat with Post
                      Graduate degrees in <strong>Civil Engineering</strong> and
                      an <strong>MBA in Finance</strong> from the{" "}
                      <strong>University of Pittsburgh</strong>.
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-[#fbc40c]/5 to-[#fbc40c]/10 rounded-xl p-4 border border-[#fbc40c]/20">
                      <p className="text-2xl font-bold text-[#fbc40c] mb-1">
                        12+
                      </p>
                      <p className="text-xs text-[#666] font-medium">
                        Years Experience
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#00D09C]/5 to-[#00D09C]/10 rounded-xl p-4 border border-[#00D09C]/20">
                      <p className="text-2xl font-bold text-[#00D09C] mb-1">
                        1M+
                      </p>
                      <p className="text-xs text-[#666] font-medium">
                        Users Served
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="text-sm text-[#666] font-semibold mb-3">
                      Follow Rahul:
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.linkedin.com/in/rahulagarwalwd/"
                        className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#0077B5] hover:to-[#0077B5] rounded-xl flex items-center justify-center transition-all duration-300 group shadow-md hover:shadow-xl"
                      >
                        <FaLinkedin className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                      </a>
                      <a
                        href="https://x.com/rahul_pittsburg"
                        className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#1DA1F2] hover:to-[#1DA1F2] rounded-xl flex items-center justify-center transition-all duration-300 group shadow-md hover:shadow-xl"
                      >
                        <FaTwitter className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                      </a>
                      <a
                        href="https://www.facebook.com/rahulagarwalwd/"
                        className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-[#4267B2] hover:to-[#4267B2] rounded-xl flex items-center justify-center transition-all duration-300 group shadow-md hover:shadow-xl"
                      >
                        <FaFacebook className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade with Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Trade with us at your{" "}
              <span className="text-[#fbc40c]">favourite exchange</span>
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              At BSE, NSE, MCX and NCDEX, and in all segments including Equity
              Cash, Derivatives, Currency and Commodities. We are also
              Depository Participants with CDSL.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["BSE", "NSE", "MCX", "NCDEX"].map((exchange, index) => (
              <div
                key={exchange}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border-2 border-gray-100 hover:border-[#fbc40c]"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A2745] to-[#1A3A5C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {exchange}
                  </span>
                </div>
                <p className="text-sm text-[#666] font-medium">
                  Trade on {exchange}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#fbc40c]/5 to-[#00D09C]/5 rounded-2xl p-8 border border-[#fbc40c]/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-2xl flex items-center justify-center flex-shrink-0">
                <FaHandshake className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-dark mb-2">
                  Best of Both Worlds!
                </h3>
                <p className="text-[#666] leading-relaxed">
                  <strong>Conventional brokerage + Discount brokerage.</strong>{" "}
                  We fill the void between the full-service brokers and a truly
                  stripped down discount brokerage which reflects in our product
                  offerings, covering the entire gamut of investing and trading
                  class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00D09C]/10 rounded-full px-4 py-2 mb-4">
              <FaUsers className="w-4 h-4 text-[#00D09C]" />
              <span className="text-sm font-semibold text-[#00D09C]">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              The People Behind{" "}
              <span className="text-[#fbc40c]">Our Success</span>
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Meet the talented professionals driving innovation and delivering
              exceptional service every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#00D09C]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#00D09C] to-[#00C08A] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                      <FaUsers className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Department Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/30">
                      <p className="text-xs text-white font-semibold">
                        {member.department}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-dark mb-1 group-hover:text-[#00D09C] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#666] font-semibold mb-4 text-sm">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <a
                      href={member.social.linkedin}
                      className="flex-1 py-2 bg-gray-100 hover:bg-[#0077B5] rounded-lg flex items-center justify-center transition-all duration-300 group/social"
                    >
                      <FaLinkedin className="w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="flex-1 py-2 bg-gray-100 hover:bg-[#1DA1F2] rounded-lg flex items-center justify-center transition-all duration-300 group/social"
                    >
                      <FaTwitter className="w-4 h-4 text-gray-600 group-hover/social:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929]">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-[#fbc40c]">Us?</span>
            </h2>
            <p className="text-lg text-[#DADADA] max-w-3xl mx-auto">
              We firmly believe that we need to provide more for less. Here are
              25 reasons to join us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whyUsReasons.map((reason, index) => (
              <div
                key={reason.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#fbc40c] to-[#D68108] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {reason.id}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm leading-tight group-hover:text-[#fbc40c] transition-colors">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-xs text-[#DADADA] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-dark mb-6">
            Ready to Start <span className="text-[#fbc40c]">Your Journey?</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Join thousands of traders who trust ez wealth for their investment
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/open-demat-account/"
              className="px-10 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Open Free Account
              <FaRocket className="w-4 h-4" />
            </a>
            <a
              href="/contact/"
              className="px-10 py-4 bg-white border-2 border-[#fbc40c] hover:bg-[#fbc40c] text-[#fbc40c] hover:text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
