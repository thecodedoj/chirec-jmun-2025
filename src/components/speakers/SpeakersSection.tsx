"use client";

import React from "react";
import SpeakerCard from "../ui/SpeakerCard";
import AnimatedSection from "../ui/AnimatedSection";
import img1 from "./1_1760862917103.png";
import img2 from "./2_1760862917104.png";

// Global styles for title animation
function CoSecGensSectionGlobalStyles() {
  return (
    <style jsx global>{`
      .jmun-title-interactive {
        filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.18));
        transition: filter 0.3s;
      }
      .jmun-title-interactive:hover {
        filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.22));
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
  );
}

// Co-Secretary Generals data (compact, no extra empty lines)
const coSecretaryGenerals = [
  {
    description: `Dear Delegates,
It is with great pride and excitement that I welcome you to the 5th Edition of CHIREC Junior Model United Nations.
Over the years, CHIREC JMUN has become more than just a conference. It has grown into a space where young minds come together to learn, question, and lead. This year, we aim to continue the legacy by creating an environment that encourages curiosity, confidence, and collaboration.
For many delegates, JMUN marks the beginning of their MUN journey; a first step into the world of diplomacy, debate, and global affairs. It's where ideas take shape, voices grow stronger, and future leaders begin to discover their potential. Our goal this year is to make CHIREC JMUN 2025 not only educational, but also truly inspiring and memorable.
Each committee has been carefully designed to challenge delegates to think critically, research deeply, and engage meaningfully with global issues. Whether you are a first-time participant or a returning delegate, we hope this conference allows you to express yourself, learn from others, and most importantly, enjoy the process of discovery.
On behalf of the entire Secretariat, I thank you for being a part of this journey. We cannot wait to witness the thoughtful discussions, creative solutions, and diplomatic spirit that make CHIREC JMUN so special.
We are looking forward to see you all this November at CHIREC International School for an unforgettable experience!
Regards,
Anusha Anchlia
Co-Secretary General
CHIREC JMUN 2025`,
    image: img1,
  },
  {
    description: `Dear Delegates,
It is an absolute honour to welcome you to the 5th Edition of CHIREC Junior Model United Nations.
When I attended my first MUN, I remember feeling both excited and nervous. I didn't know what to expect, but by the end, I walked away with memories and confidence that stayed with me long after the conference ended. Everyone has to start somewhere, and CHIREC JMUN has always been that place where so many begin their journey.
Over the years, this conference has grown into a space where young voices come together to question, learn, and inspire one another. It is not just about winning awards or giving the best speeches, but about understanding the world a little better and realising the power of your own voice.
Each committee this year has been built to help you think critically and express your ideas freely. Whether you are a first time delegate or someone returning with experience, I hope you make the most of every moment and enjoy the conference that we've put our hearts into.
On behalf of the entire Secretariat, I want to thank you for being a part of CHIREC JMUN 2025. Your presence is what makes this conference meaningful, and we cannot wait to see you this November at CHIREC International School for an unforgettable experience.
Warm regards,
Arnav Reddy Jakka
Co-Secretary General
CHIREC JMUN 2025`,
    image: img2,
  },
];

// Main component
const CoSecGensSection: React.FC = () => (
  <>
    <CoSecGensSectionGlobalStyles />
    <AnimatedSection className="relative z-10 pt-5 pb-6 px-6 md:px-12 bg-black/90">
      {/* Decorative background circles */}
      <div className="absolute left-0 top-0 w-40 h-40 bg-sky-400/10 rounded-full -z-10" />
      <div className="absolute right-0 top-1/2 w-32 h-32 bg-sky-300/06 rounded-full -z-10" />

      {/* Section content */}
      <div className="w-full flex flex-col items-center pb-8 md:pb-12">
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold mb-8 md:mb-12 leading-none relative z-10 jmun-title-interactive text-center">
          <span className="relative inline-block">
            <span className="text-sky-300">Addresses by Co-Secretary Generals</span>
          </span>
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-12 px-2 md:px-8">
          {coSecretaryGenerals.map((secGen, idx) => (
            <div
              key={idx}
              className="w-full max-w-[500px] min-h-[700px] flex justify-center items-center"
            >
              <SpeakerCard
                width="100%"
                height="100%"
                image={secGen.image}
                description={secGen.description}
                descriptionClassName="text-[10px] font-normal leading-relaxed px-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* More decorative circles */}
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-sky-400/08 rounded-full -z-10" />
      <div className="absolute left-0 bottom-1/2 w-32 h-32 bg-sky-300/06 rounded-full -z-10" />

      {/* Mobile adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          section,
          .animated-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .flex-wrap {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
          .max-w-5xl {
            max-width: 100%;
          }
        }
      `}</style>
    </AnimatedSection>
  </>
);

export default CoSecGensSection;
