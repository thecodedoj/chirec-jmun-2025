"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Countdown from "./Countdown";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  ctaText = "Register Now",
  className = "",
}) => {
  const handleCtaClick = () => {
    window.open("https://forms.office.com/e/Nvkd0kNPA7", "_blank", "noopener,noreferrer");
  };

  const NAVBAR_HEIGHT = 80;
  const JUMPER_MIN_HEIGHT = 120;
  const JUMPER_MAX_HEIGHT = 1000;
  const JUMPER_PADDING_DESKTOP = 40;
  const JUMPER_PADDING_MOBILE = 16;

  const [jumperHeight, setJumperHeight] = useState(320);
  const [jumperBottom, setJumperBottom] = useState("28vh");
  
  useEffect(() => {
    function updateJumperSize() {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const estimatedCliffHeight = windowHeight * 0.28;
      const isMobile = windowWidth < 768;
      const padding = isMobile ? JUMPER_PADDING_MOBILE : JUMPER_PADDING_DESKTOP;
      const available = windowHeight - NAVBAR_HEIGHT - estimatedCliffHeight;
      const desired = Math.max(
        JUMPER_MIN_HEIGHT,
        Math.min(available, JUMPER_MAX_HEIGHT)
      );
      setJumperHeight(desired);
      const bottom = isMobile
        ? `${estimatedCliffHeight * 0.7 + padding}px`
        : `${estimatedCliffHeight - padding}px`;
      setJumperBottom(bottom);
    }
    updateJumperSize();
    window.addEventListener("resize", updateJumperSize);
    return () => window.removeEventListener("resize", updateJumperSize);
  }, []);

  const eventDate = new Date("2025-11-01T09:00:00");

  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-center h-full min-h-[480px] md:min-h-[600px] px-0 text-center ${className}`}
      style={{
        background: "#000814",
        overflow: "visible",
        transform: "scale(1.2)",
        transformOrigin: "top center",
      }}
    >
      <div className="hidden md:block">
        <img
          src="/hero/cliff.svg"
          alt=""
          className="absolute left-0 bottom-0"
          width={1920}
          height={400}
          style={{
            width: "100vw",
            height: "auto",
            minHeight: 0,
            maxHeight: "none",
            objectFit: "contain",
            objectPosition: "bottom",
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
            filter: "brightness(0) invert(0)",
          }}
          draggable={false}
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            // replace with a 1x1 transparent gif to remove broken icon
            t.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
          }}
          role="presentation"
          aria-hidden="true"
        />
      </div>
      
      <img
        src="/hero/jump.svg"
        alt=""
        className="absolute left-1/2"
        width={600}
        height={800}
        style={{
          width: "auto",
          height:
            typeof window !== "undefined" && window.innerWidth < 768
              ? jumperHeight * 1.35
              : jumperHeight,
          maxHeight: JUMPER_MAX_HEIGHT,
          minHeight: JUMPER_MIN_HEIGHT,
          transform: "translateX(-50%)",
          bottom: jumperBottom,
          zIndex: 2,
          transition: "height 0.2s, bottom 0.2s",
          transformOrigin: "bottom center",
          pointerEvents: "none",
          userSelect: "none",
          filter: "brightness(0) invert(0)",
        }}
        draggable={false}
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement;
          t.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        }}
        role="presentation"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-10 md:pt-20 pb-8">
        <h1
          className="geist-font text-[2.2rem] md:text-[4.5rem] font-extrabold text-white mb-4 leading-none relative z-10 jmun-title text-center"
          style={{ letterSpacing: "-0.01em", position: "relative" }}
        >
          <span className="relative inline-block">
            <span className="text-sky-400">CHIREC JMUN</span>
          </span>
        </h1>

        <h2 className="inter-font text-xl md:text-3xl font-light text-sky-200 mb-8 tracking-wide">
          <span className="italic">Represent. Reason. Resolve.</span>
        </h2>

        <style jsx global>{`
          .jmun-title {
            filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.14));
            transition: filter 0.3s;
          }
          .jmun-title:hover {
            filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.18));
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
          .hero-glass-card {
            box-shadow: 0 2px 12px 0 rgba(0,0,0,0.4);
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .hero-glass-card:hover {
            box-shadow: 0 4px 18px 0 rgba(0,0,0,0.45);
            transform: scale(1.02);
          }
          .hero-glass-card * {
            transition: color 0.3s, background 0.3s;
          }
          .animate-card-glow {
            animation: cardGlow 2.5s ease-in-out infinite alternate;
          }
          @keyframes cardGlow {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}</style>

        <div className="mt-6 mb-10 w-full max-w-xl">
          <div className="hero-glass-card group relative rounded-2xl px-7 py-6 shadow-md flex flex-col items-center gap-3 border border-sky-400/10 bg-[#061226] transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 opacity-40 transition-opacity duration-300">
              <div className="w-full h-full rounded-2xl bg-[#071226] opacity-60"></div>
            </div>
            
            <div className="inter-font flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 z-10">
              <span className="text-white font-bold text-base md:text-lg group-hover:text-sky-300 transition-colors duration-300">
                1st - 2nd November, 2025
              </span>
              <span className="text-sky-300 text-xs md:text-base font-medium group-hover:text-white transition-colors duration-300">
                CHIREC International School, Kondapur
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Countdown targetDate={eventDate} />
        </div>

        <button
          onClick={handleCtaClick}
          className="inter-font font-medium border-2 border-sky-400 text-white hover:bg-sky-400 hover:text-black px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 shadow-md hover:shadow-sky-400/50"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
