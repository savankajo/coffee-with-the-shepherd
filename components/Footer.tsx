
import React from 'react';
import { NavLink } from 'react-router-dom';
import { YoutubeIcon, InstagramIcon, MailIcon } from './icons';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/episodes', text: 'Episodes' },
    { to: '/contact', text: 'Contact' },
    { to: '/donations', text: 'Donate' },
  ];

  return (
    <footer className="bg-navy-dark text-gray-300">
      {/* Gold top border */}
      <div className="h-1 w-full bg-gradient-to-r from-gold via-yellow-300 to-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <NavLink to="/" className="mb-4">
              <img src={LOGO_URL} alt="Coffee with the Shepherd" className="h-16 w-auto" />
            </NavLink>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A quiet moment of reflection over coffee and Scripture. Sharing the gospel through every episode.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.youtube.com/@CoffeewiththeShepherd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy rounded-full text-gray-400 hover:text-gold hover:bg-navy-light transition-all duration-200"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/fathersheart.church?igsh=MTdycnZxd2o5MXM1ZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy rounded-full text-gray-400 hover:text-gold hover:bg-navy-light transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@coffeewithshepherd.com"
                className="p-2 bg-navy rounded-full text-gray-400 hover:text-gold hover:bg-navy-light transition-all duration-200"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-heading font-semibold text-lg mb-6 pb-2 border-b border-gold/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200" />
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Watch Info */}
          <div>
            <h3 className="text-gold font-heading font-semibold text-lg mb-6 pb-2 border-b border-gold/30">
              Watch Us Live
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📺</span>
                <span>Every Saturday at <strong className="text-white">12:30 PM</strong> on Joy TV</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📺</span>
                <span>Every Saturday at <strong className="text-white">7:30 PM</strong> on Vision TV</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">✉️</span>
                <a href="mailto:info@coffeewithshepherd.com" className="hover:text-gold transition-colors">
                  info@coffeewithshepherd.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">📍</span>
                <span>Broadcasting from St. Luke Lutheran Church</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Coffee with the Shepherd. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Father's Heart Ministry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;