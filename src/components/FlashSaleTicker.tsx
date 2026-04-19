import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function FlashSaleTicker() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap relative">
      <div className="flex items-center space-x-8 animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Zap size={14} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Flash Sale Ending In: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">
              Up to 70% Off Imported Premium
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
