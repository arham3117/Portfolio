'use client';

import { Component } from "@/components/ui/etheral-shadow";

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ethereal Shadow Background */}
      <DemoOne />
      
      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
        <div className="text-center">
          {/* Urdu Name with enhanced styling */}
          <h1 className="urdu-text text-6xl md:text-8xl lg:text-9xl font-bold mb-16 text-black drop-shadow-2xl animate-pulse">
            محمد ارحم
          </h1>
          
          {/* English name */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-black mb-6 tracking-widest font-light" style={{fontFamily: 'Playfair Display, serif'}}>
            MUHAMMAD ARHAM
          </p>
          
          {/* Title with decorative lines */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-black"></div>
            <div className="w-2 h-2 bg-black rotate-45"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-black font-bold italic mx-4" style={{fontFamily: 'Dancing Script, cursive'}}>
              Cloud Engineer
            </p>
            <div className="w-2 h-2 bg-black rotate-45"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-black"></div>
          </div>
          
          {/* Animated line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-pulse"></div>
          
          {/* Go to Portfolio Button */}
          <div className="mt-12">
            <a 
              href="/portfolio" 
              className="inline-block px-6 py-3 bg-transparent border border-gray-400/40 text-gray-700 font-light text-lg hover:bg-black hover:text-white hover:border-black transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm rounded-full"
              style={{cursor: 'none'}}
            >
              Go to Portfolio
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
