import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface HeaderProps {
  onOpenOrder: (dishName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-neutral-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 transition-transform active:scale-95"
          >
            {/* Chef Hat + Typography */}
            <div className="relative flex flex-col items-center">
              <svg
                className="w-8 h-8 text-[#D81B60] transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                <line x1="6" y1="17" x2="18" y2="17" />
              </svg>
              <div className="text-center leading-none mt-0.5">
                <span className="font-script text-2xl text-[#D81B60] font-bold tracking-tight block -mb-1">
                  A Curiosa
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-neutral-800">
                  na Cozinha
                </span>
              </div>
            </div>
          </a>

          {/* Direct CTA Button (No menu) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 bg-[#D81B60] hover:bg-[#C2185B] text-white text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 rounded-full shadow-md shadow-[#D81B60]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#D81B60]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span>Encomendar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
