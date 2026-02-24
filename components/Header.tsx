
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/episodes', text: 'Episodes' },
    { to: '/contact', text: 'Contact' },
    { to: '/donations', text: 'Donate' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-2xl' : 'bg-navy'
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-gold via-yellow-300 to-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3">
              <img
                className="h-14 w-auto"
                src={LOGO_URL}
                alt="Coffee with the Shepherd logo"
              />
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0, -1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'text-gold border-gold'
                      : 'text-gray-300 border-transparent hover:text-gold hover:border-gold'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <NavLink
              to="/donations"
              className="ml-4 px-6 py-2 text-sm font-semibold tracking-wider uppercase bg-gold text-navy-dark rounded-sm hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Donate
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-gold p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-t border-gray-700">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium uppercase tracking-wide border-l-4 transition-all duration-200 ${
                    isActive
                      ? 'text-gold border-gold bg-navy/50'
                      : 'text-gray-300 border-transparent hover:text-gold hover:border-gold hover:bg-navy/30'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
