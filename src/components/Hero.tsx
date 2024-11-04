import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adding a smooth fade-in animation when the Hero component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 text-white">
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          Discover my journey, experience, and insights in product management and tech.
        </p>
        <motion.button
          className="bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#portfolio'}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
