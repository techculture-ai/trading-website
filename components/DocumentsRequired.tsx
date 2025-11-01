'use client';

import React from 'react';
import { FaIdCard, FaHome, FaMoneyBillWave, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

interface Document {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  requirements: string[];
}

const documents: Document[] = [
  {
    id: 1,
    title: 'Identity Proof',
    description: 'Your PAN is required as identity proof and to fetch your ITR Name',
    icon: <FaIdCard className="w-10 h-10" />,
    iconBg: 'from-[#EF9309] to-[#D68108]',
    requirements: [
      'PAN Card (Mandatory)',
      'Aadhaar Card',
      'Valid Government ID',
    ],
  },
  {
    id: 2,
    title: 'Address Proof',
    description: 'Your Aadhaar required as address proof. Ensure it is linked to a mobile number',
    icon: <FaHome className="w-10 h-10" />,
    iconBg: 'from-[#00D09C] to-[#00C08A]',
    requirements: [
      'Aadhaar Card (Linked to mobile)',
      'Passport',
      'Utility Bill (Recent)',
    ],
  },
  {
    id: 3,
    title: 'Income Proof',
    description: 'Required only if you wish to activate F&O, Commodities segments',
    icon: <FaMoneyBillWave className="w-10 h-10" />,
    iconBg: 'from-[#0A2745] to-[#1A3A5C]',
    requirements: [
      'Bank Statement (Last 6 months)',
      'Salary Slip',
      'ITR Returns',
    ],
  },
];

const DocumentsRequired: React.FC = () => {
  return (
    <section className="py-20 bg-white imageBgRocket">
      <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#EF9309]/10 rounded-full px-4 py-2 mb-4">
              <FaCheckCircle className="w-4 h-4 text-[#EF9309]" />
              <span className="text-sm font-semibold text-[#EF9309]">Quick & Easy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Documents Required{' '}
              <span className="block mt-2">To Open A Demat Account</span>
            </h2>
            <p className="text-lg text-[#666] max-w-2xl">
              Simple documentation process. Have these documents ready for a seamless account opening experience.
            </p>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="/open-demat-account/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Investing for FREE
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#EF9309] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-lg group-hover:from-[#EF9309] group-hover:to-[#D68108] transition-all duration-300">
                <span className="text-2xl font-bold text-gray-dark group-hover:text-white transition-colors">
                  {doc.id}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${doc.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {doc.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-dark mb-3 group-hover:text-[#EF9309] transition-colors">
                {doc.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] leading-relaxed mb-6 text-sm">
                {doc.description}
              </p>

              {/* Requirements List */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#0A2745] uppercase tracking-wide mb-3">
                  Accepted Documents:
                </p>
                {doc.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-[#00D09C] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#666]">{req}</span>
                  </div>
                ))}
              </div>

              {/* Hover Border Effect */}
              {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#EF9309] to-[#00D09C] opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-300"></div> */}
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Quick Tips Card */}
          <div className="bg-gradient-to-br from-[#EF9309]/5 to-[#EF9309]/10 border border-[#EF9309]/20 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-dark mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#EF9309] rounded-lg flex items-center justify-center">
                <FaCheckCircle className="w-4 h-4 text-white" />
              </span>
              Quick Tips
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-[#EF9309] mt-1">•</span>
                <span>Keep all documents in digital format (PDF/JPG)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF9309] mt-1">•</span>
                <span>Ensure Aadhaar is linked to your mobile number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF9309] mt-1">•</span>
                <span>Have a cancelled cheque or bank statement ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF9309] mt-1">•</span>
                <span>Process takes only 5-10 minutes to complete</span>
              </li>
            </ul>
          </div>

          {/* Why EZWealth Card */}
          <div className="bg-gradient-to-br from-[#0A2745]/5 to-[#0A2745]/10 border border-[#0A2745]/20 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-dark mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-[#0A2745] to-[#1A3A5C] rounded-lg flex items-center justify-center">
                <FaCheckCircle className="w-4 h-4 text-white" />
              </span>
              Why Choose EZWealth?
            </h4>
            <ul className="space-y-2 text-sm text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-[#00D09C] mt-1">✓</span>
                <span><strong>100% Digital:</strong> No paperwork required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D09C] mt-1">✓</span>
                <span><strong>Zero AMC:</strong> Lifetime free demat account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D09C] mt-1">✓</span>
                <span><strong>Quick Approval:</strong> Account activated instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00D09C] mt-1">✓</span>
                <span><strong>Secure:</strong> Bank-grade encryption & security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden mt-12 text-center">
          <a
            href="/open-demat-account/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#EF9309] to-[#D68108] hover:from-[#D68108] hover:to-[#EF9309] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Investing for FREE
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#666]">
            💡 <strong>Note:</strong> Income proof is required only if you want to trade in F&O and Commodity segments.
            <br />
            For equity trading, only identity and address proof are sufficient.
          </p>
        </div>
      </div>

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
    </section>
  );
};

export default DocumentsRequired;