import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-gradient" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center bg-blue-500/10 rounded-full px-4 py-2 mb-6 border border-blue-400/20">
          <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
          <span className="text-blue-400 text-sm">AI Product Visionary • Innovation Consultant • Tech Leader</span>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 opacity-0"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Crafting Next-Gen
          </span>
          <br />
          <span className="text-white">
            AI-Powered Experiences
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300 mb-12 animate-fade-in-delayed">
          Associate Director of Product at HROne • GLG Consultant • Ex-Founder
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            View AI Portfolio
          </button>
          <button className="bg-white/10 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            Innovation Consulting
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-50" />
      </div>
    </div>
  );
};

export default Hero;