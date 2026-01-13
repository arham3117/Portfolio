'use client';

import { Component } from "@/components/ui/etheral-shadow";
import { useEffect, useState } from 'react';

const DemoOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={isMobile ? { scale: 30, speed: 60 } : { scale: 100, speed: 90 }}
        noise={{ opacity: isMobile ? 0.5 : 1, scale: isMobile ? 1 : 1.2 }}
        sizing="fill"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="mobile-vh-fix relative overflow-hidden">
      {/* Ethereal Shadow Background */}
      <DemoOne />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6 md:px-8 safe-area-inset-top safe-area-inset-bottom">
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* Urdu Name with enhanced styling - responsive clamp */}
          <h1 className="urdu-text font-bold mb-8 sm:mb-12 md:mb-16 text-black drop-shadow-2xl animate-pulse"
              style={{fontSize: 'clamp(2.5rem, 8vw, 8rem)', lineHeight: '1.2'}}>
            محمد ارحم
          </h1>

          {/* English name - responsive clamp */}
          <p className="text-black mb-4 sm:mb-6 tracking-widest font-light"
             style={{fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.25rem, 3vw, 2.5rem)'}}>
            MUHAMMAD ARHAM
          </p>

          {/* Title with decorative lines */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 flex-wrap">
            <div className="hidden sm:block w-8 md:w-16 h-0.5 bg-gradient-to-r from-transparent to-black"></div>
            <div className="w-2 h-2 bg-black rotate-45"></div>
            <p className="text-black font-bold italic mx-2 sm:mx-4 whitespace-nowrap"
               style={{fontFamily: 'Dancing Script, cursive', fontSize: 'clamp(1.125rem, 2.5vw, 2rem)'}}>
              Cloud Engineer
            </p>
            <div className="w-2 h-2 bg-black rotate-45"></div>
            <div className="hidden sm:block w-8 md:w-16 h-0.5 bg-gradient-to-l from-transparent to-black"></div>
          </div>
          
          {/* Animated line */}
          <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse"></div>

          {/* Go to Portfolio Button */}
          <div className="mt-8 sm:mt-12">
            <a
              href="/portfolio"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-gray-400/40 text-gray-700 font-light hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm rounded-full"
              style={{fontSize: 'clamp(0.875rem, 2vw, 1.125rem)'}}
            >
              Go to Portfolio
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
