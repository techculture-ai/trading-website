"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaHeadset,
  FaQuestionCircle,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-20 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        <div className="absolute top-20 right-10 w-96 h-96 bg-[#fbc40c]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#fbc40c]/10 backdrop-blur-sm border border-[#fbc40c]/20 rounded-full px-4 py-2 mb-6">
              <FaHeadset className="w-4 h-4 text-[#fbc40c]" />
              <span className="text-sm font-semibold text-[#fbc40c]">
                We're Here to Help
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className="text-[#fbc40c]">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#DADADA] leading-relaxed">
              Have questions? We're here to help. Reach out to us and we'll
              respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-10 mt-20 relative z-10">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaPhone className="w-6 h-6" />,
                title: "Call Us",
                info: "+123-7767-8989",
                subInfo: "Mon-Sat, 9AM to 6PM",
                gradient: "from-blue-500 to-blue-600",
                href: "tel:+1237767898989",
              },
              {
                icon: <FaEnvelope className="w-6 h-6" />,
                title: "Email Us",
                info: "support@ezwealth.com",
                subInfo: "We reply within 24 hours",
                gradient: "from-[#fbc40c] to-[#D68108]",
                href: "mailto:support@ezwealth.com",
              },
              {
                icon: <FaWhatsapp className="w-6 h-6" />,
                title: "WhatsApp",
                info: "+123-7767-8989",
                subInfo: "Quick support via chat",
                gradient: "from-green-500 to-green-600",
                href: "https://wa.me/1237767898989",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#fbc40c] flex flex-col items-center text-center"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-semibold text-[#fbc40c] mb-1">
                  {item.info}
                </p>
                <p className="text-sm text-[#666]">{item.subInfo}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-3">
                  Send us a Message
                </h2>
                <div className="w-16 h-1 bg-[#fbc40c] rounded-full mb-4"></div>
                <p className="text-base text-[#666]">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#fbc40c] focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="account">Account Opening</option>
                    <option value="support">Technical Support</option>
                    <option value="trading">Trading Query</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Write your message here..."
                    rows={6}
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div className="space-y-8">
              {/* Office Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-dark mb-6 flex items-center gap-2">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#fbc40c]" />
                  Our Office
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-[#666] mb-1">Head Office</p>
                    <p className="text-base font-semibold text-gray-dark">
                      Wealth Discovery Securities Pvt Ltd
                    </p>
                    <p className="text-sm text-[#666]">
                      123, Financial District, Connaught Place
                      <br />
                      New Delhi - 110001, India
                    </p>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaClock className="w-5 h-5 text-[#fbc40c] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-dark">
                        Business Hours
                      </p>
                      <p className="text-xs text-[#666]">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-xs text-[#666]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <p className="text-sm font-semibold text-gray-dark mb-3">
                    Connect with us
                  </p>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: <FaFacebook />,
                        href: "#",
                        color: "hover:bg-[#4267B2]",
                      },
                      {
                        icon: <FaXTwitter />,
                        href: "#",
                        color: "hover:bg-[#1DA1F2]",
                      },
                      {
                        icon: <FaLinkedin />,
                        href: "#",
                        color: "hover:bg-[#0077B5]",
                      },
                      {
                        icon: <FaInstagram />,
                        href: "#",
                        color: "hover:bg-[#E4405F]",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-100 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 group text-gray-600 hover:text-white`}
                      >
                        <div className="w-5 h-5">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl p-2 shadow-lg border-2 border-gray-100 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9746069862007!2d77.21787631508044!3d28.631511982422794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d9e0d7b%3A0x4713b67a3397ae41!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635234567890!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#666]">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I open a demat account?",
                answer:
                  'You can open a demat account online by clicking on "Open Account" and completing the KYC process.',
              },
              {
                question: "What are the charges?",
                answer:
                  "We offer zero account opening fees and competitive brokerage rates. Check our pricing page for details.",
              },
              {
                question: "Is my money safe?",
                answer:
                  "Yes, your funds are completely safe. We are registered with SEBI and follow all regulatory guidelines.",
              },
              {
                question: "How long does account opening take?",
                answer:
                  "With our digital process, you can open an account in less than 10 minutes.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 border-2 border-gray-100 hover:border-[#fbc40c]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <FaQuestionCircle className="w-5 h-5 text-[#fbc40c] flex-shrink-0 mt-1" />
                  <h4 className="font-bold text-gray-dark">{faq.question}</h4>
                </div>
                <p className="text-sm text-[#666] pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/support"
              className="inline-flex items-center gap-2 text-[#fbc40c] hover:text-[#D68108] font-semibold transition-colors"
            >
              View All FAQs
              <FaQuestionCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
            Ready to <span className="text-[#fbc40c]">Get Started?</span>
          </h2>
          <p className="text-lg text-[#666] mb-8">
            Open your free demat account today and start your investment journey
            with EZWealth.
          </p>
          <a
            href="/auth/open-demat-account/"
            className="px-10 py-4 bg-gradient-to-r from-[#fbc40c] to-[#D68108] hover:from-[#D68108] hover:to-[#fbc40c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Open Free Account
            <FaPaperPlane className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
