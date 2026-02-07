
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Episodes', path: '/episodes' },
        { name: 'Contact', path: '/contact' },
        { name: 'Sponsor Us', path: '/sponsor' },
    ];

    const activeLinkClass = "font-bold text-cws-light-olive";
    const inactiveLinkClass = "hover:text-cws-light-olive transition-colors";

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
        isActive ? activeLinkClass : inactiveLinkClass;

    const NavLinksContent = () => (
        <>
            {navLinks.map((link) => (
                <li key={link.path}>
                    <NavLink to={link.path} className={getNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <header className="sticky top-0 bg-cws-bg/90 backdrop-blur-sm shadow-md z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                            <img className="h-16 w-16 rounded-full object-cover" src="https://res.cloudinary.com/dyjffxbef/image/upload/v1762368550/3dcaf923-da22-4be7-ab8d-65a2d3408b0a_kpvrsd.png" alt="Coffee with the Shepherd Logo" />
                            <span className="hidden sm:block text-xl font-raleway font-semibold text-cws-dark-olive">Coffee with the Shepherd</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="ml-10 flex items-baseline space-x-8 font-raleway font-medium">
                           <NavLinksContent />
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <Link to="/donate" className="bg-cws-light-olive text-white font-raleway font-bold py-2 px-5 rounded-full shadow-sm hover:bg-cws-dark-olive transition-colors duration-300 flex items-center gap-2">
                           ❤️ Donate
                        </Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-cws-dark-olive hover:text-cws-light-olive focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <HamburgerIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-cws-bg border-t border-gray-200">
                    <ul className="px-2 pt-2 pb-3 space-y-3 sm:px-3 text-center font-raleway font-medium text-lg">
                        <NavLinksContent />
                        <li>
                            <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="bg-cws-light-olive text-white block w-full max-w-xs mx-auto font-bold py-2 px-4 rounded-full shadow-sm hover:bg-cws-dark-olive transition-colors duration-300 my-2">
                                ❤️ Donate
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
