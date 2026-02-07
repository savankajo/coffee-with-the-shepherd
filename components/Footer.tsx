
import React from 'react';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l231 134-231 134z"></path></svg>
);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM512 597.3c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zM838 186H186c-45.2 0-82 36.8-82 82v652c0 45.2 36.8 82 82 82h652c45.2 0 82-36.8 82-82V268c0-45.2-36.8-82-82-82zm-44 696H230V310h564v572zM754.7 334.7c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"></path></svg>
);
const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
);

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: 'https://www.youtube.com/@CoffeewiththeShepherd', icon: <YouTubeIcon className="w-7 h-7" />, label: 'YouTube' },
        { href: 'https://www.instagram.com/fathersheart.church?igsh=MTdycnZxd2o5MXM1ZQ==', icon: <InstagramIcon className="w-7 h-7" />, label: 'Instagram' },
        { href: 'mailto:info@coffeewithshepherd.com', icon: <EmailIcon className="w-7 h-7" />, label: 'Email' }
    ];

    return (
        <footer className="bg-cws-light-olive text-white font-raleway">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Coffee with the Shepherd</h2>
                    <p className="text-lg mt-1 italic opacity-90">"A quiet moment of reflection."</p>
                    <div className="flex justify-center space-x-6 mt-6">
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-white hover:text-cws-bg transition-colors">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-cws-dark-olive py-4">
                <p className="text-center text-sm text-gray-300 font-opensans">
                    &copy; {currentYear} Coffee with the Shepherd. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
