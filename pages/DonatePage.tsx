
import React from 'react';

const DonatePage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold font-raleway">Support Our Mission</h1>
                <p className="text-lg text-gray-600 mt-2">Your generous contributions help us continue our work.</p>
            </header>

            <div className="max-w-4xl mx-auto space-y-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold font-raleway text-center mb-6">Make a Donation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a href="https://tithe.ly/give_new/www/#/tithely/give-one-time/7590166" target="_blank" rel="noopener noreferrer" className="block text-center bg-cws-light-olive text-white font-raleway font-bold py-4 px-6 rounded-lg shadow-md hover:bg-cws-dark-olive transition-all duration-300 transform hover:scale-105">
                            Donate (Inside Canada)
                        </a>
                        <a href="https://www.canadahelps.org/en/charities/fathers-heart-ministry/?fbclid=IwY2xjawG4f45leHRuA2FlbQIxMAABHe2srJ5VNPVAPPj-glPnNGZurDMa9PGvDt5PPRPddRxvQoM4K0_mfu0SJQ_aem_-XJ6oXUSvUS8vKYvRrlRhg" target="_blank" rel="noopener noreferrer" className="block text-center bg-cws-dark-olive text-white font-raleway font-bold py-4 px-6 rounded-lg shadow-md hover:bg-cws-light-olive transition-all duration-300 transform hover:scale-105">
                            Donate (Outside Canada)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
