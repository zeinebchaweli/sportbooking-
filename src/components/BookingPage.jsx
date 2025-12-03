import React from 'react';
import { Calendar, Clock, Trophy } from 'lucide-react';
import BookingCard from './BookingCard.jsx';

function BookingPage({ bookings }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Bookings
        </h1>
        <p className="text-xl text-gray-600">Manage your upcoming sports sessions</p>
      </div>

      {/* Stats cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-black text-indigo-600">
              {bookings.length}
            </span>
          </div>
          <h3 className="text-gray-600 font-semibold">Total Bookings</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-black text-emerald-600">5h</span>
          </div>
          <h3 className="text-gray-600 font-semibold">Hours Booked</h3>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-3 rounded-xl">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-black text-orange-600">3</span>
          </div>
          <h3 className="text-gray-600 font-semibold">Sports Played</h3>
        </div>
      </div>

      {/* List of bookings */}
      <div className="space-y-6">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>

      {/* Empty state */}
      {bookings.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No Bookings Yet</h3>
          <p className="text-gray-500 mb-6">Start booking your favorite sports fields!</p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
            Browse Fields
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
