
import React, { useState } from 'react';
import { YoutubeIcon, InstagramIcon, MailIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent to info@coffeewithshepherd.com.`);
    setFormData({ name: '', email: '', message: '' });
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
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Reach Out</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Get In Touch</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            We'd love to hear from you. Send us a message or connect with us online.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-navy mb-1">Send a Message</h2>
              <div className="h-0.5 w-12 bg-gold mb-6" />
              <form onSubmit={handleSubmit} id="contact-form" className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white text-navy placeholder-gray-400 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white text-navy placeholder-gray-400 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white text-navy placeholder-gray-400 text-sm resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-navy text-white font-semibold py-3.5 px-8 rounded-sm hover:bg-gold hover:text-navy transition-all duration-200 tracking-wide uppercase text-sm shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              {/* Photo */}
              <div className="rounded-lg overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://res.cloudinary.com/dyjffxbef/image/upload/v1762398908/IMG_3574_m32q4m.jpg"
                  alt="Pastor Liliane El Maasrany"
                  className="w-full h-64 object-cover object-top"
                />
              </div>

              {/* Connect */}
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <h2 className="text-xl font-heading font-bold text-navy mb-1">Connect With Us</h2>
                <div className="h-0.5 w-12 bg-gold mb-5" />
                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/@CoffeewiththeShepherd"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-youtube-link"
                    className="flex items-center gap-4 p-3 rounded-sm border border-gray-100 hover:border-gold/40 hover:bg-cream transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <YoutubeIcon className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">YouTube</p>
                      <p className="text-xs text-gray-500">@CoffeewiththeShepherd</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/fathersheart.church?igsh=MTdycnZxd2o5MXM1ZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-instagram-link"
                    className="flex items-center gap-4 p-3 rounded-sm border border-gray-100 hover:border-gold/40 hover:bg-cream transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                      <InstagramIcon className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Instagram</p>
                      <p className="text-xs text-gray-500">@fathersheart.church</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@coffeewithshepherd.com"
                    id="contact-email-link"
                    className="flex items-center gap-4 p-3 rounded-sm border border-gray-100 hover:border-gold/40 hover:bg-cream transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <MailIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Email</p>
                      <p className="text-xs text-gray-500">info@coffeewithshepherd.com</p>
                    </div>
                  </a>
                </div>
                <p className="mt-5 text-sm text-gray-500 flex items-start gap-2">
                  <span className="text-gold">📍</span>
                  Broadcasting from St. Luke Lutheran Church
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;