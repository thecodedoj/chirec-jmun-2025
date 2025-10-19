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
        background: "linear-gradient(135deg, #000000 0%, #0a1929 50%, #000000 100%)",
        overflow: "visible",
      }}
    >
      <div className="hidden md:block">
        <Image
          src="/hero/cliff.svg"
          alt="Cliff"
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
          draggable="false"
          priority
        />
      </div>
      
      <Image
        src="/hero/jump.svg"
        alt="Jumping silhouette hero"
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
          pointerEvents: "none",
          userSelect: "none",
          filter: "brightness(0) invert(0)",
        }}
        draggable="false"
        priority
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-10 md:pt-20 pb-8">
        <h1
          className="geist-font text-[2.2rem] md:text-[4.5rem] font-extrabold text-white mb-4 leading-none relative z-10 jmun-title text-center"
          style={{ letterSpacing: "-0.01em", position: "relative" }}
        >
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 bg-clip-text text-transparent">
              CHIREC JMUN
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h1>

        <h2 className="inter-font text-xl md:text-3xl font-light text-sky-200 mb-8 tracking-wide">
          <span className="italic">Represent. Reason. Resolve.</span>
        </h2>

        <style jsx global>{`
          .jmun-title {
            filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.5));
            transition: filter 0.3s;
          }
          .jmun-title:hover {
            filter: drop-shadow(0 0 32px rgba(56, 189, 248, 0.8)) brightness(1.2);
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
            box-shadow: 0 4px 32px 0 rgba(56, 189, 248, 0.4), 0 1.5px 8px 0 rgba(255, 255, 255, 0.1);
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .hero-glass-card:hover {
            box-shadow: 0 8px 48px 0 rgba(56, 189, 248, 0.6), 0 2px 12px 0 rgba(255, 255, 255, 0.2);
            transform: scale(1.03);
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
          <div className="hero-glass-card group relative rounded-2xl px-7 py-6 shadow-2xl flex flex-col items-center gap-3 border border-sky-400/30 backdrop-blur-xl bg-gradient-to-br from-sky-500/10 via-blue-900/10 to-black/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-sky-500/30 hover:border-sky-400/40">
            <div className="absolute -inset-1 rounded-2xl pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-sky-500/10 via-blue-400/5 to-black/10 blur-lg animate-card-glow"></div>
            </div>
            
            <div className="inter-font flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 z-10">
              <span className="text-white font-bold text-base md:text-lg group-hover:text-sky-300 transition-colors duration-300">
                1st - 2nd November, 2025
              </span>
              <span className="text-sky-300 text-xs md:text-base font-medium group-hover:text-white transition-colors duration-300">
                CHIREC International School, Serilingampally
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
