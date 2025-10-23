"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const stats = [
    {
      number: "1st",
      title: "CHIREC JMUN",
      icon: (
        <svg
          className="w-8 h-8 text-sky-300 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "300+",
      title: "Expected Delegates",
      icon: (
        <svg
          className="w-8 h-8 text-sky-300 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      number: "6+",
      title: "Diverse Committees",
      icon: (
        <svg
          className="w-8 h-8 text-sky-300 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 7H21M3 12H21M3 17H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Days of Debate",
      icon: (
        <svg
          className="w-7 h-7 text-sky-300 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "100%",
      title: "Engaging Experience",
      icon: (
        <svg
          className="w-8 h-8 text-sky-300 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <AnimatedSection
      className={`flex items-center justify-center px-4 md:px-12 relative ${className}`}
      style={{ minHeight: "60vh" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-4 md:left-10 top-1/4 w-20 md:w-32 h-20 md:h-32 bg-sky-400/06 rounded-full" style={{ opacity: 0.6 }} />
        <div className="absolute left-8 md:left-20 top-1/2 w-10 md:w-16 h-10 md:h-16 bg-white/03 rounded-lg" />
        <div className="absolute left-2 md:left-5 bottom-1/3 w-14 md:w-24 h-14 md:h-24 bg-sky-300/06 rounded-full" />

        <div className="absolute right-4 md:right-10 top-1/3 w-16 md:w-28 h-16 md:h-28 bg-sky-400/06 rounded-full" style={{ opacity: 0.5 }} />
        <div className="absolute right-8 md:right-16 bottom-1/4 w-12 md:w-20 h-12 md:h-20 bg-white/04 rounded-lg" />
        <div className="absolute right-2 md:right-8 top-2/3 w-8 md:w-12 h-8 md:h-12 bg-sky-200/05 rounded-full" />

        <div className="absolute top-4 md:top-10 left-1/3 w-4 md:w-6 h-4 md:h-6 bg-sky-400/06 rounded-full" />
        <div className="absolute top-8 md:top-16 right-1/3 w-3 md:w-4 h-3 md:h-4 bg-white/06 rounded-full" />

        <div className="absolute bottom-6 md:bottom-12 left-1/4 w-5 md:w-8 h-5 md:h-8 bg-sky-300/06 rounded-lg" />
        <div className="absolute bottom-10 md:bottom-20 right-1/4 w-6 md:w-10 h-6 md:h-10 bg-white/04 rounded-full" />
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 py-10 md:py-0 flex flex-col justify-center">
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold mb-6 md:mb-8 pt-8 md:pt-10 leading-none relative z-10 jmun-title-interactive text-center">
          <span className="heading-entity about-heading-responsive">
            <span className="geist-font heading-main bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">What is JMUN?</span>
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
            <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
          </span>
        </h2>
        <style jsx global>{`
          .jmun-title-interactive {
            filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.18));
            transition: filter 0.3s, color 0.3s;
          }
          .jmun-title-interactive:hover {
            filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.22));
          }
          .heading-entity {
            display: inline-flex;
            gap: 0.2em;
            align-items: center;
          }
          .about-heading-responsive {
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
            white-space: normal;
            word-break: break-word;
            max-width: 100vw;
          }
          @media (max-width: 600px) {
            .about-heading-responsive {
              display: flex !important;
              flex-direction: column;
              align-items: center;
              text-align: center;
              font-size: 1.7rem !important;
              line-height: 1.1;
              gap: 0.08em;
            }
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
        `}</style>

        <div className="inter-font text-base md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto text-center">
          CHIREC Junior Model United Nations (JMUN) is a platform where students step into the shoes of diplomats, debating and solving pressing global issues. Through collaborative dialogue and creative problem-solving, delegates develop critical thinking, public speaking, and negotiation skills while exploring diverse perspectives on international affairs.
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12 pb-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center group cursor-pointer select-none transition-all duration-300 rounded-xl flex flex-col items-center justify-between h-full min-h-[9.5rem] md:min-h-[12rem] py-2 hover:ring-2 hover:ring-sky-400 focus-within:ring-2 focus-within:ring-sky-400 hover:shadow-lg hover:-translate-y-2 focus-within:shadow-lg focus-within:-translate-y-2"
              tabIndex={0}
            >
              <div className="geist-font text-2xl md:text-4xl font-medium text-sky-400 mb-1 md:mb-2 transition-all duration-300 group-hover:font-bold group-focus-within:font-bold">
                {stat.number}
              </div>
              <div className="geist-font text-xs md:text-base font-medium text-white mb-2 md:mb-3 min-h-[2.8em] md:min-h-[3.2em] flex items-center justify-center transition-all duration-300 group-hover:text-gray-200 group-focus-within:text-gray-200 text-center w-full group-hover:font-bold group-focus-within:font-bold">
                {stat.title}
              </div>
              <div className="flex justify-center items-end h-8 md:h-8 w-8 md:w-8 opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 group-hover:scale-105 group-focus-within:scale-105">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
