
import React, { useState } from 'react';

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const NotificationBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-cws-dark-olive text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <p className="text-center flex-grow font-opensans text-sm sm:text-base">
                        Join us every Saturday at 12:30 PM on Joy TV and at 7:30 PM on Vision TV.
                    </p>
                    <button onClick={() => setIsVisible(false)} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                        <CloseIcon className="h-5 w-5" />
                        <span className="sr-only">Close notification</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationBanner;
