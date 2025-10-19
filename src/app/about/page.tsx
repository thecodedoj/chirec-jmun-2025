"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black pb-24 pt-32 md:pt-40 px-4 md:px-0 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="hidden md:block absolute left-0 top-10 w-24 h-24 bg-gradient-to-br from-sky-400/30 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div className="hidden md:block absolute left-0 top-1/3 w-16 h-16 bg-sky-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0.6s" }} />
        <div className="hidden md:block absolute left-0 top-2/3 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="hidden md:block absolute left-0 bottom-10 w-20 h-20 bg-sky-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1.8s" }} />
        
        <div className="hidden md:block absolute right-0 top-20 w-28 h-28 bg-gradient-to-tl from-sky-300/20 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div className="hidden md:block absolute right-0 top-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "0.9s", transform: "translateY(-50%)" }} />
        <div className="hidden md:block absolute right-0 top-3/4 w-24 h-24 bg-sky-200/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="hidden md:block absolute right-0 bottom-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2.1s" }} />
        
        <div className="hidden md:block absolute left-8 top-8 w-10 h-10 bg-sky-400/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: "1.3s" }} />
        <div className="hidden md:block absolute right-8 bottom-8 w-10 h-10 bg-sky-300/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: "1.7s" }} />
        
        <div className="md:hidden absolute left-2 top-1/5 w-12 h-12 bg-sky-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="md:hidden absolute left-2 bottom-1/5 w-10 h-10 bg-sky-400/10 rounded-full blur-md animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="md:hidden absolute right-2 top-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: "1.1s" }} />
        <div className="md:hidden absolute right-2 bottom-1/4 w-10 h-10 bg-sky-200/10 rounded-full blur-md animate-pulse" style={{ animationDelay: "1.8s" }} />
      </div>

      <AnimatedSection delay={0} className="w-full max-w-3xl mx-auto z-10">
        <h1 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold mb-10 leading-none relative z-10 jmun-title-interactive text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              About CHIREC JMUN
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h1>
        <div className="inter-font text-base md:text-xl text-gray-300 mb-10 leading-relaxed text-center">
          <span className="font-bold text-sky-400">CHIREC Junior Model United Nations</span> is an educational simulation where students take on the roles of delegates representing different countries in various United Nations committees. Through structured debate, negotiation, and diplomacy, participants work to address global challenges and draft resolutions.<br /><br />
          JMUN provides a unique platform for students to develop critical skills in public speaking, research, debate, and international relations. Delegates engage with complex global issues, learn about different cultures and perspectives, and build the confidence to express their ideas on a world stage.
        </div>
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold mb-6 leading-none relative z-10 jmun-title-interactive text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              What is MUN?
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h2>
        <div className="inter-font text-base md:text-xl text-gray-300 mb-10 leading-relaxed text-center">
          Model United Nations (MUN) is an educational simulation and academic activity in which students learn about diplomacy, international relations, and the United Nations. MUN involves and teaches participants research, speaking, debating, and writing skills, in addition to critical thinking, teamwork, and leadership abilities.<br /><br />
          During MUN conferences, students step into the shoes of ambassadors from UN member states to debate current issues on the organization's agenda. While playing their roles as ambassadors, student "delegates" deliver speeches, prepare draft resolutions, negotiate with allies and adversaries, resolve conflicts, and navigate the MUN conference rules of procedure – all in the interest of mobilizing international cooperation to resolve problems that affect countries worldwide.
        </div>
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold mb-6 leading-none relative z-10 jmun-title-interactive text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Why Participate?
            </span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-sky-400/20 via-blue-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h2>
        <div className="inter-font text-base md:text-xl text-gray-300 mb-10 leading-relaxed text-center">
          Participating in JMUN offers numerous benefits:<br /><br />
          • <span className="text-sky-300 font-semibold">Develop Public Speaking Skills:</span> Gain confidence in addressing large audiences and articulating your thoughts clearly.<br />
          • <span className="text-sky-300 font-semibold">Enhance Research Abilities:</span> Learn to analyze complex global issues and develop informed positions.<br />
          • <span className="text-sky-300 font-semibold">Build Negotiation Skills:</span> Practice the art of compromise and consensus-building.<br />
          • <span className="text-sky-300 font-semibold">Expand Global Awareness:</span> Understand diverse perspectives and international affairs.<br />
          • <span className="text-sky-300 font-semibold">Network and Collaborate:</span> Meet like-minded peers and build lasting connections.
        </div>
      </AnimatedSection>

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
    </div>
  );
}
