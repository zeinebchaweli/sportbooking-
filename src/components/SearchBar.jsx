import React, { useState } from 'react';

function SearchBar({ searchQuery, setSearchQuery, selectedSport, setSelectedSport, sports }) {
  const [query, setQuery] = useState(searchQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
      <input
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search by field name or location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex flex-wrap gap-3">
        {sports.map((sport) => (
          <button
            key={sport}
            type="button"
            onClick={() => setSelectedSport(sport)}
            className={
              sport === selectedSport
                ? 'px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold'
                : 'px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold'
            }
          >
            {sport === 'all' ? 'All Sports' : sport}
          </button>
        ))}
      </div>
    </form>
  );
}

export default SearchBar;

