"use client";

import React, { useState } from "react";
import AnimatedSection from "../../components/ui/AnimatedSection";

const faqs = [
  {
    q: "How should I prepare for the conference?",
    a: "Begin by thoroughly researching your country's stance on the agenda and understanding the broader global issue. Read articles, UN reports, and past resolutions to learn what actions have already been taken. Prepare clear arguments, examples, and solutions that align with your country's interests. It also helps to anticipate counterpoints from other nations and think of diplomatic ways to respond.",
  },
  {
    q: "What should I bring to the conference?",
    a: "Bring your research notes, pens, and any printed documents or data you may want to refer to. Having all your materials ready helps you stay organized and confident during committee sessions. Placards, ID cards, and notebooks will be provided at the venue.",
  },
  {
    q: "Where and when is the event taking place?",
    a: "The event will be held at CHIREC International School, Kondapur, on the 1st and 2nd of November.",
  },
  {
    q: "Is transport provided?",
    a: "Transport will be provided free of cost on Day 1. Please note that no transport will be available on Day 2.",
  },
  {
    q: "Are there on-spot registrations?",
    a: "No, there will be no on-spot registrations. All participants must register beforehand.",
  },
  {
    q: "What is the dress code for the conference?",
    a: "Day 1: Business Formals\n\nDay 2: Traditional Attire",
  },
  {
    q: "Will there be socials?",
    a: "Yes, there will be socials on Day 1 from 4:30 p.m. to 6:00 p.m.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black pb-24 pt-32 md:pt-40 px-4 md:px-0 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hidden md:block absolute left-0 top-10 w-24 h-24 bg-gradient-to-br from-sky-400/30 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div
          className="hidden md:block absolute left-0 top-1/3 w-16 h-16 bg-sky-300/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="hidden md:block absolute left-0 top-2/3 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="hidden md:block absolute left-0 bottom-10 w-20 h-20 bg-sky-400/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1.8s" }}
        />
        
        <div className="hidden md:block absolute right-0 top-20 w-28 h-28 bg-gradient-to-tl from-sky-300/20 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div
          className="hidden md:block absolute right-0 top-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "0.9s", transform: "translateY(-50%)" }}
        />
        <div
          className="hidden md:block absolute right-0 top-3/4 w-24 h-24 bg-sky-200/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="hidden md:block absolute right-0 bottom-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2.1s" }}
        />
        
        <div
          className="hidden md:block absolute left-8 top-8 w-10 h-10 bg-sky-400/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1.3s" }}
        />
        <div
          className="hidden md:block absolute right-8 bottom-8 w-10 h-10 bg-sky-300/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1.7s" }}
        />
        
        <div
          className="md:hidden absolute left-2 top-1/5 w-12 h-12 bg-sky-300/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="md:hidden absolute left-2 bottom-1/5 w-10 h-10 bg-sky-400/10 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="md:hidden absolute right-2 top-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "1.1s" }}
        />
        <div
          className="md:hidden absolute right-2 bottom-1/4 w-10 h-10 bg-sky-200/10 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
      </div>

      <AnimatedSection delay={0}>
        <h1 className="geist-font text-[2.8rem] md:text-[5rem] font-extrabold mb-18 leading-none relative z-10 jmun-title-interactive">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h1>
      </AnimatedSection>

      <div className="w-full max-w-3xl mx-auto z-10 grid gap-6">
        {faqs.map((faq, idx) => (
          <AnimatedSection
            key={idx}
            delay={0.08 * idx + 0.1}
            className="w-full"
          >
            <div
              className={`group mb-0 rounded-2xl bg-gradient-to-br from-white/10 to-blue-900/10 border border-white/20 shadow-xl overflow-hidden transition-all duration-300
                ${
                  open === idx
                    ? "scale-[1.025] shadow-2xl border-sky-400/40"
                    : "hover:scale-[1.01] hover:shadow-lg"
                }
              `}
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("card-hovered");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove("card-hovered");
              }}
            >
              <button
                className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-200
                  ${open === idx ? "bg-sky-400/10" : ""}
                `}
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg md:text-xl font-semibold text-white ibm-font transition-colors duration-200 group-hover:text-sky-400 card-hovered:text-sky-400">
                  {faq.q}
                </span>
                <svg
                  className={`w-6 h-6 text-sky-400 transform transition-transform duration-300 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 text-base md:text-lg text-gray-200 transition-all duration-500 ${
                  open === idx
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 card-hovered:bg-white/5"
                } overflow-hidden `}
                style={{
                  transitionProperty: "max-height, opacity, padding-bottom",
                  paddingBottom: open === idx ? "1.25rem" : "0rem",
                }}
              >
                <div
                  className={`text-[0.94rem] inter-font font-regular pt-5 ${
                    open === idx ? "animate-fade-in" : ""
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <style jsx global>{`
        .jmun-title-interactive {
          filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.6));
          transition: filter 0.3s;
        }
        .jmun-title-interactive:hover {
          filter: drop-shadow(0 0 24px rgba(56, 189, 248, 0.8)) brightness(1.2);
        }
        .animate-title-pulse {
          animation: titlePulse 2.5s ease-in-out infinite alternate;
        }
        @keyframes titlePulse {
          0% {
            opacity: 0.7;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
        .card-hovered,
        .card-hovered .card-hovered:bg-white\/5 {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        .card-hovered .card-hovered:text-sky-400 {
          color: #38bdf8 !important;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
