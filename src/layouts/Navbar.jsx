import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Programs', to: '/programs' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Contact', to: '/contact' },
    
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Left */}
          <Link
            to="/" 
            className="text-gray-900 transition-all duration-300 hover:scale-105"
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 600,
              fontSize: '24px',
              letterSpacing: '-0.5px'
            }}
          >
            Kerich.
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 text-[15px] font-medium relative group"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Far Right */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gray-900 text-white font-medium py-2.5 px-6 rounded-3xl transition-all duration-300 transform"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14px'
              }}
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 p-2 hover:text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 py-2 text-base font-medium border-b border-gray-100"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gray-900 text-white font-medium py-3 px-6 rounded-3xl transition-all duration-300 text-center mt-2 "
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;