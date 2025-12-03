
import React from 'react';
import { Calendar, Clock} from 'lucide-react';
function BookingCard({ booking }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-indigo-200">
      <div className="md:flex">
        <div className="md:w-64 h-48 md:h-auto">
          <img
            src={booking.image}
            alt={booking.fieldName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-8 min-w-0">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                {booking.sport}
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                {booking.fieldName}
              </h2>
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                booking.status === 'confirmed'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {booking.status === 'confirmed' ? '✓ Confirmed' : '⏳ Pending'}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Date</div>
                <div className="font-bold text-gray-900">{booking.date}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Time</div>
                <div className="font-bold text-gray-900">{booking.time}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <span className="text-emerald-600 font-black text-lg">AED</span>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Total</div>
                <div className="font-bold text-gray-900">AED {booking.price}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              View Details
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
