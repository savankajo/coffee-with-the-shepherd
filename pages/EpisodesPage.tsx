
import React, { useState, useMemo } from 'react';
import { episodeService } from '../services/episodeService';
import EpisodeCard from '../components/EpisodeCard';
import { Episode } from '../types';

const EPISODES_PER_PAGE = 9;

const EpisodesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const allEpisodes = useMemo(() => episodeService.getEpisodes(), []);

    const filteredEpisodes = useMemo(() => {
        return allEpisodes.filter(episode =>
            episode.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.title_ar.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.id.toString().includes(searchTerm)
        );
    }, [allEpisodes, searchTerm]);

    const totalPages = Math.ceil(filteredEpisodes.length / EPISODES_PER_PAGE);

    const paginatedEpisodes = useMemo(() => {
        const start = (currentPage - 1) * EPISODES_PER_PAGE;
        const end = start + EPISODES_PER_PAGE;
        return filteredEpisodes.slice(start, end);
    }, [filteredEpisodes, currentPage]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const goToNextPage = () => {
        setCurrentPage((page) => Math.min(page + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => Math.max(page - 1, 1));
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold font-raleway">Episodes</h1>
                <p className="text-lg text-gray-600 mt-2">Browse our collection of episodes.</p>
            </header>

            <div className="mb-8 max-w-lg mx-auto">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by title or episode number..."
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cws-light-olive transition shadow-sm"
                />
            </div>

            {filteredEpisodes.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedEpisodes.map(episode => (
                            <EpisodeCard key={episode.id} episode={episode} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-12 space-x-4">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                className="bg-cws-light-olive text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-cws-dark-olive transition-colors"
                            >
                                Previous
                            </button>
                            <span className="font-semibold">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className="bg-cws-light-olive text-white font-bold py-2 px-4 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-cws-dark-olive transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-16">
                    <p className="text-2xl font-raleway text-gray-500">No episodes found.</p>
                </div>
            )}
        </div>
    );
};

export default EpisodesPage;
