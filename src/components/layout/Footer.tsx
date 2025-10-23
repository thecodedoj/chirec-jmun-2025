import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 pt-12 pb-6 bg-transparent text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute left-1/4 top-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute right-10 top-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute left-8 bottom-0 w-28 h-28 bg-sky-300/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-1/4 bottom-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20 text-center md:text-left">
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className="ibm-font text-2xl mb-2 font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            CHIREC JMUN
          </div>
          <div className="inter-font text-gray-300 text-sm leading-relaxed">
            Represent. Reason. Resolve.<br></br> © 2025 CHIREC JMUN
          </div>
        </div>
        
        <div className="flex-1 min-w-[160px] mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <div className="inter-font font-semibold mb-2">Quick Links</div>
          <ul className="inter-font space-y-1 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-sky-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-sky-300 transition"
              >
                About JMUN
              </Link>
            </li>
            <li>
              <Link
                href="/meet-the-team"
                className="hover:text-sky-300 transition"
              >
                Meet The Team
              </Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:text-sky-300 transition">
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/regulations" className="hover:text-sky-300 transition">
                Rules & Regulations
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-sky-300 transition">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="flex-1 min-w-[200px] flex flex-col items-center md:items-start">
          <div className="inter-font font-semibold mb-2">Details</div>
          <ul className="inter-font space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-sky-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="2.5" fill="currentColor" />
                </svg>
              </span>
              <a
                href="https://www.google.com/maps/dir//CHIREC+International+School+-+IBDP+%26+Cambridge+Campus+F8HM%2B4V5+Spring+Valley+Serilingampalle+(M),+Hyderabad,+Telangana+500133/@17.4777625,78.3347344,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bcb939445dac8ed:0x8cbe499e963067c5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition"
              >
                ISRP Campus, CHIREC
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sky-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 3v4M8 3v4M3 9h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              1st - 2nd November, 2025
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sky-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a
                href="mailto:jmun@chirec.ac.in"
                className="hover:text-sky-300 transition"
              >
                jmun@chirec.ac.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sky-400">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
              </span>
              <a
                href="https://instagram.com/chirec.jmun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition"
              >
                @chirec.jmun
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="geist-font mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
        <div className="mb-2">
          &copy; 2025 CHIREC JMUN. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-1 text-gray-400">
          <span>Made with</span>
          <span className="text-sky-400 animate-pulse">❤️</span>
          <span>by</span>
          <span className="text-white font-medium hover:text-sky-300 transition-colors cursor-default">
            JMUN Team, Sanjaay Rajkumar
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
