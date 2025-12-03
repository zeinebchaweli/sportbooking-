import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import BookingPage from './components/BookingPage.jsx';
import { sportsFields, myBookingsData } from './data/fields.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredFields = useMemo(() => {
    return sportsFields.filter((field) => {
      const matchesSearch =
        field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        field.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSport =
        selectedSport === 'all' || field.sport === selectedSport;
      return matchesSearch && matchesSport;
    });
  }, [searchQuery, selectedSport]);

  const sports = ['all', 'Football', 'Basketball', 'Tennis', 'Padel'];

  return (
  <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
    <Navbar
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
    />

    {currentPage === 'home' ? (
      <HomePage
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
        sports={sports}
        filteredFields={filteredFields}
      />
    ) : (
      <BookingPage bookings={myBookingsData} />
    )}
  </div>
);

  
}

export default App;
