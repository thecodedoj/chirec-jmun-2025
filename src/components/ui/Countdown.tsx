"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, className = "" }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  // Use a deterministic initial state to avoid server/client hydration mismatches.
  // We'll compute the real value on the client inside useEffect.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Calculate immediately on mount so the UI updates right away in the browser.
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[90px]">
      <div className="bg-gradient-to-br from-sky-400/20 to-blue-500/10 backdrop-blur-sm border border-sky-400/30 rounded-xl md:rounded-2xl px-3 py-2 md:px-4 md:py-3 mb-2 shadow-lg shadow-sky-500/20">
        <span className="geist-font text-3xl md:text-5xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="inter-font text-xs md:text-sm text-sky-300 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`flex gap-3 md:gap-4 items-center justify-center ${className}`}>
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-sky-400 text-2xl md:text-4xl font-bold mb-6">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-sky-400 text-2xl md:text-4xl font-bold mb-6">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-sky-400 text-2xl md:text-4xl font-bold mb-6">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
