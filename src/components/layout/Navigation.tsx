"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../ui/464453423_1097790878570733_5449522318736902072_n_1760863098929.jpg";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Meet The Team", href: "/meet-the-team" },
    { label: "Committees", href: "/committees" },
    { label: "Schedule", href: "/schedule" },
    { label: "Guidelines", href: "/regulations" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl shadow-lg py-2 border-b border-white/10 glass-navbar"
          : "bg-black/30 backdrop-blur-lg py-6 glass-navbar"
      } ${className}`}
      style={{
        WebkitBackdropFilter: "blur(18px)",
        backdropFilter: "blur(18px)",
        background: isScrolled ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0.3)",
        borderBottom: isScrolled
          ? "1px solid rgba(56,189,248,0.20)"
          : "1px solid transparent",
        boxShadow: isScrolled ? undefined : "none",
        transition: "background 0.3s, border-bottom 0.3s, padding 0.3s",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={typeof logo === "string" ? logo : logo.src}
              alt="CHIREC JMUN Logo"
              width={isScrolled ? 40 : 50}
              height={isScrolled ? 40 : 50}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src =
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
              }}
              className="rounded-lg transition-all duration-300 group-hover:scale-105"
            />
            <span
              className={`ibm-font font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? "text-2xl md:text-3xl" : "text-2xl md:text-3xl"
              }`}
            >
              CHIREC JMUN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 inter-font font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 nav-hover flex flex-col items-center justify-center text-center ${
                  isScrolled ? "text-lg md:text-xl" : "text-base md:text-base"
                } ${
                  pathname === item.href
                    ? "text-sky-400 bg-sky-400/10 shadow shadow-sky-400/10 hover:bg-sky-400/20 hover:shadow-sky-400/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="w-full break-words leading-tight text-center">
                  {item.label}
                </span>
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-sky-400 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Register + Mandatory Forms buttons */}
<div className="hidden md:flex items-center gap-4">
  <Link
    href="/register"
    className="inter-font font-medium border-2 border-sky-400 text-white hover:bg-sky-400 hover:text-black px-6 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 shadow-md hover:shadow-sky-400/50"
  >
    Register Now
  </Link>

  <a
    href="https://drive.google.com/drive/folders/1kuFN_OY_GOPSiFg1ehn0mWvlsGhTp-22?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inter-font font-medium border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-6 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 shadow-md hover:shadow-sky-400/50"
  >
    Mandatory Forms
  </a>
</div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-300"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? "text-sky-400 bg-sky-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Register + Mandatory Forms */}
<div className="flex flex-col gap-4 mt-4">
  <Link
    href="/register"
    onClick={() => setIsMobileMenuOpen(false)}
    className="w-full bg-sky-400 hover:bg-sky-500 text-black py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold"
  >
    Register Now
  </Link>

  <a
    href="https://drive.google.com/drive/folders/1kuFN_OY_GOPSiFg1ehn0mWvlsGhTp-22?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-transparent border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold"
  >
    Mandatory Forms
  </a>
</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
