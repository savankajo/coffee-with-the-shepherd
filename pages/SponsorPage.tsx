
import React, { useState } from 'react';

const SponsorPage: React.FC = () => {
    const [formState, setFormState] = useState({
        fullName: '',
        phone: '',
        email: '',
        company: '',
        category: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Sponsorship Inquiry from ${formState.fullName}`);
        const body = encodeURIComponent(
            `Full Name: ${formState.fullName}\n` +
            `Phone Number: ${formState.phone}\n` +
            `Email Address: ${formState.email}\n` +
            `Company Name: ${formState.company || 'N/A'}\n` +
            `Category: ${formState.category || 'N/A'}`
        );
        window.location.href = `mailto:info@coffeewithshepherd.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-cws-bg min-h-screen">
            {/* Hero Section */}
            <div className="bg-cws-dark-olive text-white py-16 sm:py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                     <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
                        <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                     </svg>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-6xl font-bold font-raleway mb-6">Sponsorship Proposal</h1>
                    <p className="text-xl sm:text-2xl font-opensans font-light max-w-3xl mx-auto mb-8">
                        Partnering for Impact, Growth, and Visibility
                    </p>
                    <a 
                        href="https://drive.google.com/file/d/1EGrAcIMIA-v19xF_o-PpK5LSASsCLEcM/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-cws-dark-olive font-bold py-3 px-8 rounded-full shadow-lg hover:bg-cws-light-olive hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        View Official PDF
                    </a>
                </div>
            </div>

            {/* Introduction Text (Requested by User) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <div className="prose prose-lg text-gray-700 font-opensans leading-relaxed">
                        <p className="mb-6">
                            Our program focuses on deep biblical teaching, answering questions Christians have struggled with for years. 
                            We speak mainly to the Arabic Christian community, families, and anyone seeking a true understanding of God 
                            from the Bible — not tradition, not misconceptions.
                        </p>
                        <p className="mb-4 font-semibold text-cws-dark-olive">
                            We are currently opening the door for select sponsors who want to reach:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-cws-light-olive">
                            <li>Christian families across BC and Canada</li>
                            <li>Arabic-speaking households</li>
                            <li>A strong, growing online audience (5k–10k viewers per episode)</li>
                            <li>JoyTV and VisionTV national audiences</li>
                        </ul>
                        <p className="italic text-gray-500 border-l-4 border-cws-light-olive pl-4">
                            Please click the button above to view our official Sponsorship Media Kit for detailed packages and benefits.
                        </p>
                    </div>
                </div>
            </div>

            {/* Inquiry Form */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-3xl font-bold font-raleway text-center mb-6 text-cws-dark-olive">Get In Touch</h2>
                    <p className="text-center text-gray-600 mb-10">
                        Interested in one of our packages? Fill out the form below or contact us directly at <a href="mailto:info@fathersheartchurch.ca" className="text-cws-light-olive font-bold hover:underline">info@fathersheartchurch.ca</a>
                    </p>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                            <input type="text" name="fullName" id="fullName" required value={formState.fullName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition bg-gray-50" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                            <input type="tel" name="phone" id="phone" required value={formState.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition bg-gray-50" placeholder="(555) 123-4567" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                            <input type="email" name="email" id="email" required value={formState.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition bg-gray-50" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1">Company Name <span className="font-normal text-gray-500">(Optional)</span></label>
                            <input type="text" name="company" id="company" value={formState.company} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition bg-gray-50" placeholder="Your Business Ltd." />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-1">Sponsorship Level <span className="font-normal text-gray-500">(Optional)</span></label>
                             <div className="relative">
                                <select 
                                    name="category" 
                                    id="category" 
                                    value={formState.category} 
                                    onChange={handleInputChange} 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition bg-gray-50 appearance-none"
                                >
                                    <option value="">Select a Level...</option>
                                    <option value="Platinum">Platinum</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Other">Other / General Inquiry</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-4">
                            <button type="submit" className="w-full bg-cws-dark-olive text-white font-raleway font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-cws-light-olive transition-all duration-300 transform hover:scale-[1.01]">
                                Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SponsorPage;
