
import React, { useState } from 'react';

const DonationsPage: React.FC = () => {
    const [sponsorData, setSponsorData] = useState({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        category: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSponsorData({ ...sponsorData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you, ${sponsorData.name}! Your sponsorship inquiry has been sent to info@coffeewithshepherd.com.`);
        setSponsorData({ name: '', phone: '', email: '', companyName: '', category: '' });
    };

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
                        <span className="text-gold text-xs font-semibold tracking-widest uppercase">Partner With Us</span>
                        <div className="h-px w-12 bg-gold" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Support Our Ministry</h1>
                    <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
                        Every cup shared helps spread the message. Your generosity makes it possible.
                    </p>
                </div>
            </section>

            {/* ─── MAIN CONTENT ───────────────────────────────────────────────── */}
            <section className="py-20 sm:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                    {/* Give a Gift */}
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                        {/* Header strip */}
                        <div className="bg-navy px-8 py-5">
                            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-3">
                                <span className="text-gold">🎁</span>
                                Give a Gift
                            </h2>
                        </div>
                        <div className="p-8 md:p-10 text-center">
                            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                                Your generous support allows us to continue producing this podcast and sharing the gospel.
                                Please choose an option below — every contribution makes a difference.
                            </p>

                            {/* Impact stats */}
                            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg mx-auto mb-10">
                                {[
                                    { number: '26+', label: 'Episodes' },
                                    { number: '2', label: 'TV Networks' },
                                    { number: '∞', label: 'Impact' },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-heading font-bold text-navy">{stat.number}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="https://tithe.ly/give_new/www/#/tithely/give-one-time/7590166"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="donate-canada-btn"
                                    className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold py-3.5 px-8 rounded-sm hover:bg-gold hover:text-navy transition-all duration-200 tracking-wide uppercase text-sm shadow-lg hover:shadow-xl"
                                >
                                    <span>🇨🇦</span>
                                    Give Inside Canada
                                </a>
                                <a
                                    href="https://www.canadahelps.org/en/charities/fathers-heart-ministry/?fbclid=IwY2xjawG4f45leHRuA2FlbQIxMAABHe2srJ5VNPVAPPj-glPnNGZurDMa9PGvDt5PPRPddRxvQoM4K0_mfu0SJQ_aem_-XJ6oXUSvUS8vKYvRrlRhg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="donate-international-btn"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold py-3.5 px-8 rounded-sm hover:bg-navy hover:text-white transition-all duration-200 tracking-wide uppercase text-sm"
                                >
                                    <span>🌍</span>
                                    Give Outside Canada
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sponsor Form */}
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                        {/* Header strip */}
                        <div className="bg-navy px-8 py-5">
                            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-3">
                                <span className="text-gold">🤝</span>
                                Become a Sponsor
                            </h2>
                        </div>
                        <div className="p-8 md:p-10">
                            <p className="text-gray-600 leading-relaxed mb-8 text-center">
                                Partner with us to reach a wider audience. Fill out the form below to learn more about sponsorship opportunities.
                            </p>

                            <form onSubmit={handleSubmit} id="sponsor-form" className="space-y-4 max-w-lg mx-auto">
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your full name"
                                        value={sponsorData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none text-navy placeholder-gray-400 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-1.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your phone number"
                                        value={sponsorData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none text-navy placeholder-gray-400 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={sponsorData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none text-navy placeholder-gray-400 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-1.5">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Your company name"
                                        value={sponsorData.companyName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none text-navy placeholder-gray-400 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-navy mb-1.5">Company Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        placeholder="e.g. Retail, Healthcare, Technology"
                                        value={sponsorData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none text-navy placeholder-gray-400 text-sm"
                                    />
                                </div>
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        id="sponsor-submit-btn"
                                        className="w-full bg-navy text-white font-semibold py-3.5 px-8 rounded-sm hover:bg-gold hover:text-navy transition-all duration-200 tracking-wide uppercase text-sm shadow-md hover:shadow-lg"
                                    >
                                        Inquire About Sponsoring
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonationsPage;