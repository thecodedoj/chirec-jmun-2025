import React from "react";
import SpeakerCard from "../ui/SpeakerCard";
import AnimatedSection from "../ui/AnimatedSection";
import img1 from "./1_1760862917103.png";
import img2 from "./2_1760862917104.png";

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

const coSecretaryGenerals = [
  {
    description:
       "Anusha Anchlia is a Grade 11 CBSE student at Chirec International School, Kondapur, studying Commerce with Math. She has participated in over 15 MUNs. She enjoys participating in a vast variety of committees and exploring new topics. Anusha also serves as Secretary of her school's Interact Club. In her free time, she loves to read books, listen to music, and binge-watch her favourite TV shows for the fifth time.\n\nHaving been part of Chirec MUN as a delegate, organising committee member, Executive Board member, and secretariat, she now steps into the role of Secretary General. As Secretary-General for this year's conference, she aims to work tirelessly to make this edition of CHIREC JMUN the best one yet. She looks forward to seeing you all there!",
    image: img1,
  },
  {
    description:
      "Arnav Reddy Jakka is an IBDP year 1 student currently studying Chemistry, Physics and Mathematics at a higher level. Judging by his academic selection you may think he's a serious person, but don't be mistaken.\n\nIf you're his friend be prepared to be sent the most random reels which only he finds funny. When he's not laughing at those, you'll probably see him laughing around you… or maybe at you. But all jokes aside if he's ever quiet, it's probably because his mouth's full - as an avid foodie, he's always eating something. Just like in cricket, Jakka's an all-rounder in everything he does, managing to pull off sports, studies, and MUN with the same energy and dedication he brings to every match. That's exactly what makes him the perfect Secretary General for this year's conference.",
    image: img2,
  },
];

const CoSecGensSection: React.FC = () => (
  <>
    <CoSecGensSectionGlobalStyles />
    <AnimatedSection className="relative z-10 pt-5 pb-6 px-6 md:px-12 bg-black/90">
      <div className="absolute left-0 top-0 w-40 h-40 bg-sky-400/10 rounded-full -z-10" />
      <div className="absolute right-0 top-1/2 w-32 h-32 bg-sky-300/06 rounded-full -z-10" />
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
              className="w-full max-w-[340px] aspect-[4/5] flex justify-center items-center"
            >
              <SpeakerCard
                width="100%"
                height="100%"
                image={secGen.image}
                description={secGen.description}
                descriptionClassName="text-[15px] font-normal leading-snug px-2"
              />
            </div>
          ))}
        </div>
      </div>
      
  <div className="absolute right-0 bottom-0 w-40 h-40 bg-sky-400/08 rounded-full -z-10" />
  <div className="absolute left-0 bottom-1/2 w-32 h-32 bg-sky-300/06 rounded-full -z-10" />
      
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
