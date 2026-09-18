
import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly is a Distributor Management System (DMS)?",
      answer:
        "A DMS is a comprehensive digital ecosystem that streamlines the entire supply chain. It synchronizes warehouse inventory, automates order processing, and provides real-time visibility into secondary sales, ensuring that manufacturers and distributors are always in sync.",
    },
    {
      question: "How does the system improve supply chain visibility?",
      answer:
        "By utilizing real-time data syncing, our DMS tracks every product movement from the central hub to the retail shelf. This eliminates blind spots in your distribution network and helps prevent stock-outs or overstocking.",
    },
    {
      question: "Can Heera DMS integrate with our existing ERP?",
      answer:
        "Absolutely. Our system is built with a robust API-first architecture, allowing seamless bi-directional integration with popular ERPs like SAP, Oracle, and Microsoft Dynamics, as well as custom accounting software.",
    },
    {
      question: "What kind of analytics does the system provide?",
      answer:
        "The DMS offers a suite of analytics tools that provide insights into sales trends, distributor performance, and inventory turnover. You can generate custom reports to make data-driven decisions that optimize your supply chain.",
    },
    {
      question: "Is the system scalable for large enterprises?",
      answer:
        "Yes, our DMS is designed to handle high transaction volumes and can easily scale to accommodate multiple distributors, warehouses, and retail outlets, making it suitable for both SMEs and large enterprises.",
    },
    {
      question: "What kind of support and training is provided?",
      answer:
        "We offer comprehensive onboarding, including training sessions for your team. Our dedicated support team is available 24/7 to assist with any technical issues or questions you may have.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-(--secondary--bg) py-5 sm:py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-3">
            Got Question?
          </h2>

          <h1 className="text-white font-extrabold text-3xl sm:text-4xl mb-4 sm:mb-6">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-white max-w-2xl mx-auto">
            Everything you need to know about optimizing your distribution
            network with Heera DMS.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group rounded-xl sm:rounded-2xl transition-all duration-300 bg-white border ${
                  isOpen
                    ? "border-[#44a5db] shadow-lg"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
              
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left p-3 sm:p-6 flex items-center justify-between gap-3 focus:outline-none  rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0">

                
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-blue-50 text-[#44a5db]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <span className="text-sm sm:text-base font-bold leading-tight text-slate-800">
                      {faq.question}
                    </span>
                  </div>

               
                  <svg
                    className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#44a5db]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

               
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-0 sm:ml-12">
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}