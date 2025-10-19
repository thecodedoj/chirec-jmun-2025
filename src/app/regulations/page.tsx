"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function RegulationsPage() {
  return (
    <AnimatedSection className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute left-1/2 top-8 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.3s", transform: "translateX(-50%)" }}
        />
        <div
          className="absolute left-1/2 bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.1s", transform: "translateX(-50%)" }}
        />
        
        <div
          className="hidden md:block absolute left-1/4 top-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="hidden md:block absolute right-10 top-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="hidden md:block absolute left-8 bottom-0 w-28 h-28 bg-sky-300/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="hidden md:block absolute right-1/4 bottom-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>
      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        <h1 className="geist-font text-[2.8rem] md:text-[5rem] font-extrabold mb-18 leading-none relative z-10 jmun-title-interactive text-center mb-8">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Delegate Rules and Regulations
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h1>
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
        `}</style>
        <div className="bg-[#18181c]/80 rounded-2xl shadow-2xl border border-sky-400/20 p-6 md:p-10 text-left text-gray-200 backdrop-blur-md">
          <h2 className="ibm-font text-xl md:text-2xl font-bold text-sky-300 mb-4">
            Registration & Attendance
          </h2>
          <ul className="inter-font list-disc list-inside space-y-3 mb-8">
            <li>
              All registered delegates must attend both days of the conference (November 1-2, 2025).
            </li>
            <li>
              By registering, you agree that all details provided are accurate and complete.
            </li>
            <li>
              All registrations are subject to verification. Any discrepancy may result in cancellation.
            </li>
            <li>
              Check-in will begin at 8:30 AM on Day 1. Please arrive by 9:00 AM.
            </li>
            <li>
              Delegates arriving late will not be permitted entry during active committee sessions.
            </li>
          </ul>
          
          <h2 className="ibm-font text-xl md:text-2xl font-bold text-sky-300 mb-4">
            Dress Code
          </h2>
          <ul className="inter-font list-disc list-inside space-y-3 mb-8">
            <li>
              Formal business attire is mandatory for all delegates throughout the conference.
            </li>
            <li>
              Acceptable attire includes: Business suits, dress shirts/blouses, formal trousers/skirts, dress shoes.
            </li>
            <li>
              Unacceptable attire includes: Jeans, t-shirts, sneakers, casual wear, or school uniforms.
            </li>
            <li>
              Delegates not adhering to the dress code may be asked to leave the committee room.
            </li>
          </ul>
          
          <h2 className="ibm-font text-xl md:text-2xl font-bold text-sky-300 mb-4">
            Conference Conduct
          </h2>
          <ul className="inter-font list-disc list-inside space-y-3 mb-8">
            <li>
              Mobile phones must be on silent mode during all committee sessions.
            </li>
            <li>
              Electronic devices may only be used for note-taking and research during sessions.
            </li>
            <li>
              Photography and video recording are permitted only during designated times.
            </li>
            <li>
              Delegates must remain in their committee rooms during sessions unless granted permission to leave.
            </li>
            <li>
              Return promptly after breaks. Doors will close when sessions resume.
            </li>
            <li>
              Meals and refreshments will be provided in designated areas outside committee rooms.
            </li>
          </ul>
          
          <h2 className="ibm-font text-xl md:text-2xl font-bold text-sky-300 mb-4">
            Diplomatic Standards
          </h2>
          <ul className="inter-font list-disc list-inside space-y-3 mb-8">
            <li>
              Maintain diplomatic decorum and respect for all delegates and staff at all times.
            </li>
            <li>
              Engage in constructive debate and avoid personal attacks or offensive language.
            </li>
            <li>
              Follow your committee's Rules of Procedure and directions from the Executive Board.
            </li>
            <li>
              Plagiarism in position papers or resolutions will result in immediate disqualification.
            </li>
            <li>
              Any form of misconduct may result in removal from the conference without refund.
            </li>
          </ul>
          
          <h2 className="ibm-font text-xl md:text-2xl font-bold text-sky-300 mb-4">
            Logistics
          </h2>
          <ul className="inter-font list-disc list-inside space-y-3 mb-8">
            <li>
              Delegates must arrange their own transportation to and from the venue.
            </li>
            <li>
              Keep the venue clean and dispose of waste in designated bins.
            </li>
            <li>
              CHIREC JMUN is not responsible for personal belongings. Keep valuables secure.
            </li>
            <li>
              Emergency contact information will be provided during registration.
            </li>
          </ul>
          
          <p className="inter-font mt-6 text-base md:text-lg text-gray-400">
            As representatives of nations in a formal diplomatic setting, all delegates are expected to maintain professionalism and adhere to these guidelines. Failure to comply may result in disciplinary action or removal from the conference.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
