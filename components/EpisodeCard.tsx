import React from 'react';
import { Episode } from '../types';
import { EPISODE_THUMBNAIL_URL } from '../constants';

interface EpisodeCardProps {
  episode: Episode;
}

const numberToWord = (num: number): string => {
  const words = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
    'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine', 'Thirty'
  ];
  return words[num] || String(num);
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const episodeLabel = `Ep. ${episode.id}`;
  const fullTitle = `${episode.title}`;

  return (
    <a
      href={episode.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold/40 hover:-translate-y-1"
      aria-label={`Watch Episode ${numberToWord(episode.id)}: ${episode.title} on YouTube`}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={EPISODE_THUMBNAIL_URL}
          alt={`Thumbnail for ${episode.title}`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Episode badge */}
        <div className="absolute top-3 left-3 bg-navy text-gold text-xs font-semibold px-3 py-1 rounded-sm tracking-wider uppercase">
          {episodeLabel}
        </div>
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gold rounded-full p-3 shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="font-heading text-base font-semibold text-navy leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-200">
            {fullTitle}
          </h3>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2 font-body" dir="rtl">
            {episode.subtitle}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
          Watch on YouTube
        </div>
      </div>
    </a>
  );
};

export default EpisodeCard;