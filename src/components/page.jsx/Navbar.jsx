import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import car2 from '../../assets/images/car2.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Animated car that follows cursor */}
      <div 
        className="fixed z-50 w-12 h-12 pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          left: `${mousePosition.x + 50}%`,
          top: `${mousePosition.y + 50}%`
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-orange-600">
          <path 
            fill="currentColor" 
            d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z" 
          />
        </svg>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <p className="p-3 text-4xl font-semibold">
                <span className="text-orange-600">Rev</span>
                <span className="text-black">amp</span>
              </p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Collections', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-orange-600 px-3 py-2 rounded-md text-sm uppercase font-medium tracking-wider transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-800 hover:text-orange-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md">
            {['Home', 'collections', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="w-full h-screen">
        <img
          src={car2}
          alt="Hero car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4">
              Welcome to <span className="text-orange-600">Revamp</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;