"use client";

import React from "react";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CoSecGensSection from "@/components/speakers/SpeakersSection";

export default function HomePage() {
  const handleBookNowClick = () => {
    window.open("https://forms.office.com/e/Nvkd0kNPA7", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Hero Section with its own background and animation */}
      <AnimatedSection className="relative h-screen">

        {/* Hero Section */}
        <HeroSection
          onCtaClick={handleBookNowClick}
        />
      </AnimatedSection>

      {/* About Section */}
      <AboutSection />

      {/* Co-Secretary Generals Section */}
      <CoSecGensSection />
    </>
  );
}
