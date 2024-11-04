import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adding a smooth fade-in animation when the Hero component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <section className={`hero-section transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover my journey, experience, and insights in product management and tech.
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => window.location.href = '#portfolio'}
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
