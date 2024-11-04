import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className="text-blue-600">My Portfolio</a>
        </div>
        <ul className="hidden md:flex space-x-8">
          {['hero', 'about', 'portfolio', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* Add mobile menu toggle button here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
