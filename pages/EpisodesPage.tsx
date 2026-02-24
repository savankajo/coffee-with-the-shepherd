
import React, { useState, useMemo } from 'react';
import { EPISODES } from '../constants';
import EpisodeCard from '../components/EpisodeCard';

const EPISODES_PER_PAGE = 9;

const EpisodesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEpisodes = useMemo(() => {
    return EPISODES.filter(episode => {
      const term = searchTerm.toLowerCase();
      return (
        episode.title.toLowerCase().includes(term) ||
        episode.subtitle.toLowerCase().includes(term) ||
        `episode ${episode.id}`.includes(term) ||
        String(episode.id).includes(term)
      );
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredEpisodes.length / EPISODES_PER_PAGE);
  const paginatedEpisodes = filteredEpisodes.slice(
    (currentPage - 1) * EPISODES_PER_PAGE,
    currentPage * EPISODES_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Pagination = () => {
    if (totalPages <= 1) return null;
    const pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className="mt-12 flex justify-center" aria-label="Pagination">
        <ul className="flex items-center gap-1">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy border border-navy/30 rounded-sm hover:bg-navy hover:text-gold hover:border-navy disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              ← Prev
            </button>
          </li>
          {pageNumbers.map(number => (
            <li key={number}>
              <button
                onClick={() => handlePageChange(number)}
                className={`flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-sm transition-all duration-200 ${currentPage === number
                    ? 'bg-navy text-gold border border-navy'
                    : 'border border-navy/30 text-navy hover:bg-navy hover:text-gold'
                  }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy border border-navy/30 rounded-sm hover:bg-navy hover:text-gold hover:border-navy disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              Next →
            </button>
          </li>
        </ul>
      </nav>
    );
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
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Our Library</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">All Episodes</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Browse our library of episodes for reflection and encouragement.
          </p>
        </div>
      </section>

      {/* ─── EPISODES GRID ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-14">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                id="episodes-search"
                placeholder="Search episodes by title, number, or topic..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white text-navy placeholder-gray-400 text-sm shadow-sm"
              />
            </div>
          </div>

          {/* Results count */}
          {searchTerm && (
            <p className="text-center text-gray-500 text-sm mb-8">
              Found <strong className="text-navy">{filteredEpisodes.length}</strong> episode{filteredEpisodes.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          )}

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedEpisodes.length > 0 ? (
              paginatedEpisodes.map(episode => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <span className="text-5xl block mb-4">🔍</span>
                <p className="text-gray-500 text-lg">No episodes found. Try a different search term.</p>
              </div>
            )}
          </div>

          <Pagination />
        </div>
      </section>
    </div>
  );
};

export default EpisodesPage;
