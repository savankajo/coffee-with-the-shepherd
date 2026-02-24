
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-cream font-body">

      {/* ─── PAGE HERO ──────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dyjffxbef/image/upload/v1762398547/fb09e9f55ad04be9ea3b76e91845d78a_pxtn4r.jpg')" }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Our Story</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">About Us</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Sharing the gospel with the world, one episode at a time.
          </p>
        </div>
      </section>

      {/* ─── MISSION & VISION ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">Mission & Vision</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="h-px w-12 bg-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                <svg className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className="text-xl font-heading font-bold text-navy mb-1">Our Mission</h2>
              <div className="h-0.5 w-12 bg-gold mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm">
                Our mission is to bring the timeless wisdom of the Scriptures to a modern audience,
                creating a space for quiet reflection, spiritual growth, and a deeper connection with God.
                We aim to be a source of comfort and guidance, like a shepherd tending to their flock.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                <svg className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-heading font-bold text-navy mb-1">Our Vision</h2>
              <div className="h-0.5 w-12 bg-gold mb-4" />
              <p className="text-gray-600 leading-relaxed text-sm">
                We envision a community of listeners who find peace, wisdom, and encouragement through our weekly episodes.
                Each podcast is a cup of coffee shared with the Good Shepherd, offering a moment to pause, listen,
                and be renewed in faith and spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES STRIP ───────────────────────────────────────────────── */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { icon: '📖', title: 'Scripture', desc: 'Every episode is rooted in the Word of God' },
              { icon: '☕', title: 'Reflection', desc: 'A moment of peace to pause and listen' },
              { icon: '🕊️', title: 'Community', desc: 'Growing in faith together as a family' },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-gold font-heading font-semibold text-xl mb-2">{item.title}</h3>
                <div className="h-px w-10 bg-gold/40 mx-auto mb-3" />
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET OUR TEAM ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">The People Behind It</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">Meet Our Team</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gold" />
              <div className="w-2 h-2 bg-gold rounded-full" />
              <div className="h-px w-12 bg-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
