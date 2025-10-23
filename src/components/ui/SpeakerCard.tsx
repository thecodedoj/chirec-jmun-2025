"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface SpeakerCardProps {
  height: number | string;
  width: number | string;
  image: string | StaticImageData;
  description: string;
  descriptionClassName?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  height,
  width,
  image,
  description,
  descriptionClassName,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleToggle = () => {
    // allow toggling on all devices via click
    setShowOverlay((v) => !v);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // allow Enter/Space to toggle, and Esc to close
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowOverlay((v) => !v);
    }
    if (e.key === "Escape") {
      setShowOverlay(false);
    }
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden group shadow-lg border border-sky-400 bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl hover:border-transparent focus-within:border-transparent hover:shadow-sky-400/50"
      style={{ height, width, aspectRatio: "4/5" }}
      onClick={handleToggle}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Image
        src={image}
        alt={description}
        fill
        className={
          `object-cover transition-transform duration-500 group-hover:scale-105 ` +
          // hide image whenever overlay is explicitly shown; otherwise preserve
          // existing hover/mobile behavior
          (showOverlay
            ? "opacity-0"
            : isMobile
            ? "opacity-100"
            : "opacity-100 group-hover:opacity-0")
        }
        style={{
          zIndex: 1,
          objectFit: "cover",
          objectPosition: "top center",
          aspectRatio: "4/5",
        }}
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl ${
          // make overlay interactive when visible so it can receive clicks/keyboard
          showOverlay
            ? "opacity-100 pointer-events-auto"
            : isMobile
            ? "opacity-0 pointer-events-none"
            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
        }`}
        style={{
          background: showOverlay
            ? "rgba(14,165,233,1)" // solid blue when explicitly shown
            : "linear-gradient(135deg, rgba(8, 76, 97, 1), rgba(14, 165, 233, 1))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`inter-font text-white text-center flex flex-col items-center justify-center font-normal break-words w-full h-full px-2 leading-tight min-h-[2.5em] ${
            descriptionClassName || ""
          }`}
          style={{ fontSize: "0.98rem" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
