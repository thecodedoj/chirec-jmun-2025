"use client";

import React from "react";

interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  type: "registration" | "opening" | "committee" | "break" | "closing";
}

const scheduleDay1: ScheduleItem[] = [
  {
    time: "08:30",
    title: "Registration Opens",
    description: "Delegate check-in and credential verification at the registration desk.",
    type: "registration",
  },
  {
    time: "09:00",
    title: "Opening Ceremony",
    description: "Welcome remarks, conference introduction, and keynote addresses by Co-Secretary Generals.",
    type: "opening",
  },
  {
    time: "10:00",
    title: "Committee Sessions Begin",
    description: "Delegates proceed to their respective committees for the first session.",
    type: "committee",
  },
  {
    time: "11:30",
    title: "Mid-Morning Break",
    description: "Coffee, tea, and refreshments.",
    type: "break",
  },
  {
    time: "12:00",
    title: "Committee Sessions Continue",
    description: "Continued debate, caucusing, and resolution drafting.",
    type: "committee",
  },
  {
    time: "13:30",
    title: "Lunch Break",
    description: "Lunch will be served in designated areas.",
    type: "break",
  },
  {
    time: "14:30",
    title: "Afternoon Committee Sessions",
    description: "Delegates continue working on resolutions and amendments.",
    type: "committee",
  },
  {
    time: "16:00",
    title: "Tea Break",
    description: "Afternoon tea and snacks.",
    type: "break",
  },
  {
    time: "16:30",
    title: "Final Session - Day 1",
    description: "Closing remarks for Day 1 and overview of Day 2 schedule.",
    type: "closing",
  },
];

const typeColors: Record<string, string> = {
  registration: "bg-blue-900/70 text-blue-200",
  opening: "bg-purple-900/70 text-purple-200",
  committee: "bg-sky-900/70 text-sky-200",
  break: "bg-yellow-700/70 text-yellow-100",
  closing: "bg-green-900/70 text-green-200",
};

import AnimatedSection from "./AnimatedSection";

const ScheduleSection: React.FC = () => {
  return (
    <AnimatedSection className="relative py-20 md:py-32 px-4 md:px-0 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/4 top-10 w-40 h-40 bg-sky-400/06 rounded-full" style={{ opacity: 0.6 }} />
        <div className="absolute right-10 top-1/3 w-24 h-24 bg-white/04 rounded-full" style={{ opacity: 0.5 }} />
        <div className="absolute left-8 bottom-10 w-28 h-28 bg-sky-300/06 rounded-full" style={{ opacity: 0.5 }} />
        <div className="absolute right-1/4 bottom-0 w-32 h-32 bg-sky-400/06 rounded-full" style={{ opacity: 0.5 }} />
      </div>

      <h2 className="geist-font text-[2.8rem] md:text-[5rem] font-extrabold mb-9 leading-none relative z-10 jmun-title-interactive text-center">
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            Conference Schedule
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
            <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
          </span>
        </span>
      </h2>
      <style jsx global>{`
        .jmun-title-interactive {
          filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.18));
          transition: filter 0.3s;
        }
        .jmun-title-interactive:hover {
          filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.22));
        }
        .animate-title-pulse {
          animation: titlePulseGlow 2.5s ease-in-out infinite alternate;
        }
        @keyframes titlePulseGlow {
          0% {
            opacity: 0.7;
            filter: blur(16px);
          }
          100% {
            opacity: 1;
            filter: blur(32px);
          }
        }
      `}</style>
      <div className="inter-font text-lg md:text-xl text-gray-300 text-center mb-4">
        1st - 2nd November, 2025 • CHIREC ISRP Campus
      </div>
      <div className="inter-font text-base text-sky-400 text-center mb-12">
        Day 1 Schedule (Day 2 schedule will be similar)
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-900/30 via-white/10 to-sky-900/30 -translate-x-1/2 z-0" />
        <div className="hidden md:grid md:grid-cols-3 md:gap-0">
          {scheduleDay1.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <React.Fragment key={item.time + item.title}>
                <div
                  className={`flex justify-end items-center min-h-[160px] ${
                    isLeft ? "" : "invisible"
                  }`}
                >
                  {isLeft && (
                    <div className="w-full max-w-md bg-[#151922] border border-white/5 rounded-2xl shadow-lg px-6 py-5 md:py-6 flex flex-col gap-2 transition-all duration-300 hover:scale-[1.025] group/card hover:border-sky-400/20">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inter-font text-lg md:text-xl font-bold text-sky-400 mr-2 min-w-[60px]">
                          {item.time}
                        </span>
                        <span
                          className={`geist-font text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                            typeColors[item.type] ||
                            "bg-gray-700/70 text-gray-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <div className="ibm-font text-lg md:text-2xl font-bold text-white leading-tight group-hover/card:text-sky-400 transition-colors duration-300">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="ibm-font text-sm text-gray-400 font-medium mb-1">
                          {item.subtitle}
                        </div>
                      )}
                      <div className="inter-font text-sm md:text-base text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center relative min-h-[160px]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-400 border-4 border-black z-20" />
                  {idx < scheduleDay1.length - 1 && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 top-1/2 w-1 h-[160px] bg-gradient-to-b from-sky-900/30 via-white/10 to-sky-900/30 z-0"
                      style={{ marginTop: "32px" }}
                    />
                  )}
                </div>
                <div
                  className={`flex justify-start items-center min-h-[160px] ${
                    !isLeft ? "" : "invisible"
                  }`}
                >
                  {!isLeft && (
                    <div className="w-full max-w-md bg-[#151922] border border-white/5 rounded-2xl shadow-lg px-6 py-5 md:py-6 flex flex-col gap-2 transition-all duration-300 hover:scale-[1.025] group/card hover:border-sky-400/20">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inter-font text-lg md:text-xl font-bold text-sky-400 mr-2 min-w-[60px]">
                          {item.time}
                        </span>
                        <span
                          className={`geist-font text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                            typeColors[item.type] ||
                            "bg-gray-700/70 text-gray-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <div className="ibm-font text-lg md:text-2xl font-bold text-white leading-tight group-hover/card:text-sky-400 transition-colors duration-300">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="ibm-font text-sm text-gray-400 font-medium mb-1">
                          {item.subtitle}
                        </div>
                      )}
                      <div className="inter-font text-sm md:text-base text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="md:hidden flex flex-col gap-12 relative">
          {scheduleDay1.map((item) => (
            <div key={item.time + item.title} className="flex items-center">
              <div className="w-full max-w-md mx-auto bg-[#151922] border border-white/5 rounded-2xl shadow-lg px-6 py-5 flex flex-col gap-2 transition-all duration-300 active:scale-[0.98] group/card">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold text-sky-400 mr-2 min-w-[60px]">
                    {item.time}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${
                      typeColors[item.type] || "bg-gray-700/70 text-gray-200"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <div className="text-lg font-bold text-white leading-tight group-hover/card:text-sky-400 transition-colors duration-300">
                  {item.title}
                </div>
                {item.subtitle && (
                  <div className="text-sm text-gray-400 font-medium mb-1">
                    {item.subtitle}
                  </div>
                )}
                <div className="text-sm text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ScheduleSection;
