import React from 'react';
import { Menu, X, Trophy } from 'lucide-react';

function Navbar({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl shadow-lg">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                PlayBook
              </h1>
              <p className="text-xs text-gray-500 font-medium">Sports Fields</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                currentPage === 'home'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('bookings')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                currentPage === 'bookings'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              My Bookings
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
              Login
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-2">
          <button
            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
            className={`w-full px-4 py-3 rounded-xl font-semibold transition-all text-left ${
              currentPage === 'home'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => { setCurrentPage('bookings'); setMobileMenuOpen(false); }}
            className={`w-full px-4 py-3 rounded-xl font-semibold transition-all text-left ${
              currentPage === 'bookings'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            My Bookings
          </button>
          <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
export default Navbar;