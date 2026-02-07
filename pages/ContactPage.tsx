
import React, { useState } from 'react';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l231 134-231 134z"></path></svg>
);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM512 597.3c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zM838 186H186c-45.2 0-82 36.8-82 82v652c0 45.2 36.8 82 82 82h652c45.2 0 82-36.8 82-82V268c0-45.2-36.8-82-82-82zm-44 696H230V310h564v572zM754.7 334.7c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"></path></svg>
);

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact Form Inquiry from ${formState.name}`);
        const body = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        );
        window.location.href = `mailto:info@coffeewithshepherd.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold font-raleway">Get In Touch</h1>
                <p className="text-lg text-gray-600 mt-2">We'd love to hear from you. Send us a message!</p>
            </header>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold font-raleway mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" required value={formState.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cws-light-olive focus:border-cws-light-olive" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" required value={formState.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cws-light-olive focus:border-cws-light-olive" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows={4} required value={formState.message} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cws-light-olive focus:border-cws-light-olive"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-cws-dark-olive text-white font-raleway font-bold py-3 px-4 rounded-md shadow-sm hover:bg-cws-light-olive transition-colors duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="p-8 bg-cws-bg/50">
                        <h2 className="text-2xl font-bold font-raleway mb-6">Contact Info</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-lg font-raleway">Connect With Us</h3>
                                <div className="flex space-x-4 mt-2">
                                    <a href="https://www.youtube.com/@CoffeewiththeShepherd" target="_blank" rel="noopener noreferrer" className="text-cws-dark-olive hover:text-cws-light-olive transition-colors"><YouTubeIcon className="w-10 h-10" /></a>
                                    <a href="https://www.instagram.com/fathersheart.church?igsh=MTdycnZxd2o5MXM1ZQ==" target="_blank" rel="noopener noreferrer" className="text-cws-dark-olive hover:text-cws-light-olive transition-colors"><InstagramIcon className="w-10 h-10" /></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg font-raleway">Email Us</h3>
                                <a href="mailto:info@coffeewithshepherd.com" className="text-cws-light-olive hover:underline">info@coffeewithshepherd.com</a>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg font-raleway">Location</h3>
                                <p>Broadcasting from Father's Heart Church</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
