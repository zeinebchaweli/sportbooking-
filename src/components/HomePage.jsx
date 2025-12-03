import React from 'react';
import { Zap } from 'lucide-react';
import SearchBar from './SearchBar';  // No extension needed usually
import StatsSection from './StatsSection';
import FieldCard from './FieldCard';

function HomePage({ searchQuery, setSearchQuery, selectedSport, setSelectedSport, sports, filteredFields }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <Zap className="w-4 h-4" />
          <span>Book in seconds</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Find Your Perfect
          <br />Sports Field
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover and book premium sports facilities across Sousse. Play your game, your way.
        </p>
      </div>

      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
        sports={sports}
      />

      <StatsSection filteredFields={filteredFields} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFields.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>

      {filteredFields.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-500 font-semibold">No fields found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
} export default HomePage;