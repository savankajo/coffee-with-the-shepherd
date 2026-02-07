
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { episodeService } from '../services/episodeService';
import EpisodeCard from '../components/EpisodeCard';

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
);

const HeroSection: React.FC = () => (
    <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')" }}
    >
        <div className="absolute inset-0 bg-cws-light-olive/70"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-raleway drop-shadow-lg">Coffee with the Shepherd</h1>
            <p className="text-xl md:text-2xl mt-4 font-opensans drop-shadow-md">"A quiet moment of reflection over coffee and Scripture."</p>
            <Link to="/episodes" className="mt-8 inline-block bg-cws-dark-olive text-white font-raleway font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-cws-dark-olive transition-all duration-300 transform hover:scale-105">
                Listen to Latest Episode
            </Link>
        </div>
    </div>
);

const FeaturedEpisodes: React.FC = () => {
    const featuredEpisodes = useMemo(() => episodeService.getEpisodes().slice(0, 3), []);

    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold font-raleway text-center mb-12">Featured Episodes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredEpisodes.map(episode => (
                        <EpisodeCard key={episode.id} episode={episode} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const NewsletterSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const valid = validateEmail(email);
        setIsValid(valid);
        if (valid) {
            alert('Thank you for subscribing!');
            setEmail('');
        }
    };

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                <EmailIcon className="w-16 h-16 text-cws-light-olive mx-auto mb-4" />
                <h2 className="text-4xl font-bold font-raleway mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Get updates on new episodes and special announcements directly in your inbox.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex-grow">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (!isValid) setIsValid(true);
                            }}
                            placeholder="Enter your email address"
                            className={`w-full px-4 py-3 rounded-md border ${!isValid ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition`}
                            aria-label="Email address for newsletter"
                        />
                        {!isValid && <p className="text-red-500 text-sm mt-2 text-left">Please enter a valid email address.</p>}
                    </div>
                    <button type="submit" className="bg-cws-dark-olive text-white font-raleway font-bold py-3 px-8 rounded-md shadow-sm hover:bg-cws-light-olive transition-colors duration-300">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedEpisodes />
            <NewsletterSection />
        </div>
    );
};

export default HomePage;
