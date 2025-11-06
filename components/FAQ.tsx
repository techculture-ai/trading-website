"use client";

import React, { useState, JSX } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string | JSX.Element;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Is Dhan safe & trusted broking platform?",
    answer:
      "Dhan is a SEBI-regulated trading platform and a Depository Participant (DP) compliant with all rules and regulations. You can rely on Dhan to invest in share market as thousands of others do as well. Furthermore, we take transparency and security very seriously. Our goal is to always ensure that you have visibility into pricing and other details. We also ensure that your data is safe at all times.",
  },
  {
    id: 2,
    question: "How much time does it take to Open ez wealth Account?",
    answer: (
      <>
        You can{" "}
        <a
          href="/open-demat-acoount/"
          className="text-[#EF9309] hover:underline"
        >
          open demat account
        </a>{" "}
        on Dhan in less than 10 minutes! After that, the exchanges begin their
        verification and approval process, shortly after which your account will
        be ready for trading and investing.
      </>
    ),
  },
  {
    id: 3,
    question: "What documents are required to open a corporate demat account?",
    answer: (
      <>
        The following documents are all you need to open a demat account on
        Dhan:
        <ul className="list-decimal ml-8 my-2">
          <li>
            Address Proof (Aadhar, Passport, Voter ID, or Driving License).
          </li>
          <li>Bank Proof (Account Statements, Cancelled Cheque, Passbook).</li>
          <li>Identity Proof (PAN).</li>
          <li>Income Proof (Bank Account Statements, Salary Slips, ITR).</li>
          <li>Signature.</li>
          <li>Photograph.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    question: "What are the brokerage charges on Dhan?",
    answer: (
      <>
        You can open a Dhan demat account for free. Once you start investing or
        trading, these are the charges:
        <ul className="list-decimal ml-8 my-2">
          <li>₹0 for Equity Delivery, ETFs, & IPOs.</li>
          <li>₹20 for Equity Intraday & Futures in all Segments.</li>
          <li>₹20 for Options in all Segments.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    question: "How to transfer shares from your current broker to Dhan?",
    answer: (
      <>
        You can transfer shares to Dhan by following these steps:
        <br />
        <br />
        1. Register & Login on CDSL Easiest.
        <br />
        2. Click on "Transaction" and choose "Setup".
        <br />
        3. Select "Bulk Setup" and then "Transaction".
        <br />
        4. Enter "Execution date" "Beneficiary owner ID (BOID)".
        <br />
        5. Tap on "Account ISINs", choose the stock(s), & hit "Submit".
        <br />
        6. Verify the request and select "Commit".
        <br />
        7. Enter your CDSL Easiest PIN.
      </>
    ),
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lg:pt-10 pt-5 lg:pb-0 pb-5 bg-white">
      <div className="max-w-8xl mx-auto lg:pb-10 lg:pt-10 pb-5 pt-5 lg:px-52 md:px-10 px-5">
        {/* Header */}
        <h2 className="text-gray-dark text-center font-semibold text-2xl lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-[#817E7E] pt-3 text-center font-normal text-sm lg:text-base">
          Questions on your mind? Don&apos;t worry we have the answers!
        </p>

        {/* FAQ Accordion */}
        <div className="pt-6 lg:pt-8">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="border-[0.5px] border-b-[#dadada] border-x-transparent border-t-transparent"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                aria-controls={`panel-${faq.id}`}
                aria-expanded={openIndex === index}
                className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="grid grid-cols-12 w-full gap-4">
                  <div className="col-span-11 flex items-center">
                    <p className="font-normal lg:text-base text-sm text-left text-gray-dark">
                      {faq.question}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <svg
                      className={`w-4 h-4 text-gray-dark transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Panel */}
              <div
                id={`panel-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <div className="text-[#817E7E] text-xs lg:text-sm font-normal leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
