
import React from 'react';
import { Episode } from '../types';

interface EpisodeCardProps {
    episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative">
                <img src={episode.thumbnailUrl} alt={episode.title_en} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2 bg-cws-dark-olive/80 text-white text-xs font-bold px-2 py-1 rounded">
                    EPISODE {episode.id}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-raleway font-bold text-lg text-cws-dark-olive">{episode.title_en}</h3>
                <h4 className="font-opensans text-md text-cws-light-olive mt-1 mb-4" dir="rtl">{episode.title_ar}</h4>
                <div className="mt-auto">
                    <a
                        href={episode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center bg-cws-light-olive text-white font-raleway font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-cws-dark-olive transition-colors duration-300"
                    >
                        Watch on YouTube
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;
