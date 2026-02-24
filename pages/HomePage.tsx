import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { EPISODES } from '../constants';
import EpisodeCard from '../components/EpisodeCard';

const HomePage: React.FC = () => {
  const latestEpisodes = EPISODES.slice(0, 3);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="bg-cream font-body">

      {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dyjffxbef/image/upload/v1762398547/fb09e9f55ad04be9ea3b76e91845d78a_pxtn4r.jpg')" }}
        />
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/90" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-20 animate-fadeIn">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Watch · Reflect · Grow</span>
            <div className="h-px w-16 bg-gold" />
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            Coffee with the<br />
            <span className="text-gold italic">Shepherd</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            A quiet moment of reflection over coffee and Scripture.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink
              to="/episodes"
              id="hero-episodes-btn"
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold py-3.5 px-8 rounded-sm hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-xl tracking-wide uppercase text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Episodes
            </NavLink>
            <NavLink
              to="/about"
              id="hero-about-btn"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white py-3.5 px-8 rounded-sm hover:border-gold hover:text-gold transition-all duration-200 font-medium tracking-wide uppercase text-sm"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#FFF8E9" />
          </svg>
        </div>
      </section>

      {/* ─── TV SCHEDULE BANNER ───────────────────────────────────────── */}
      <section className="bg-navy py-5">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-white text-sm">
              <span className="text-gold font-semibold">Joy TV</span> — Every Saturday at <strong>12:30 PM</strong>
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-white text-sm">
              <span className="text-gold font-semibold">Vision TV</span> — Every Saturday at <strong>7:30 PM</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ─── LATEST EPISODES SECTION ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Fresh Content</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">Latest Episodes</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="h-px w-12 bg-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestEpisodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/episodes"
              id="home-view-all-btn"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold py-3 px-8 rounded-sm hover:bg-navy hover:text-gold transition-all duration-200 tracking-wide uppercase text-sm"
            >
              View All Episodes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NavLink>
          </div>
        </div>
      </section>

      {/* ─── ABOUT BANNER ─────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dyjffxbef/image/upload/v1762398547/fb09e9f55ad04be9ea3b76e91845d78a_pxtn4r.jpg')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Our Purpose</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
            Sharing Scripture,<br />One Cup at a Time
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Our mission is to bring the timeless wisdom of the Scriptures to a modern audience,
            creating a space for quiet reflection, spiritual growth, and a deeper connection with God.
          </p>
          <NavLink
            to="/about"
            id="home-about-btn"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-navy font-semibold py-3 px-8 rounded-sm hover:bg-gold-light transition-all duration-200 tracking-wide uppercase text-sm shadow-lg"
          >
            About Our Ministry
          </NavLink>
        </div>
      </section>

      {/* ─── NEWSLETTER SECTION ────────────────────────────────────────── */}
      <section className="bg-cream-dark py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          {/* Coffee cup icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 mb-6">
            <span className="text-3xl">☕</span>
          </div>
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-2">Stay in the Loop</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">Stay Connected</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Subscribe to our newsletter for updates, new episodes, and devotional thoughts.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-5 py-3.5 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white text-navy placeholder-gray-400 text-sm"
              required
            />
            <button
              type="submit"
              id="newsletter-submit-btn"
              className="bg-navy text-white font-semibold py-3.5 px-8 rounded-sm hover:bg-gold hover:text-navy transition-all duration-200 tracking-wide uppercase text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;