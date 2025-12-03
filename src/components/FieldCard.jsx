import React from 'react';
import { MapPin, Star, ChevronRight } from 'lucide-react';

function FieldCard({ field }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
      <div className="relative overflow-hidden h-56">
        <img
          src={field.image}
          alt={field.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-bold text-sm">{field.rating}</span>
          <span className="text-xs text-gray-500">({field.reviews})</span>
        </div>
        <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          {field.sport}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-black text-gray-900 mb-2 break-words">
          {field.name}
        </h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{field.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {field.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-xs font-semibold">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AED {field.price}
            </div>
            <div className="text-xs text-gray-500 font-medium">per hour</div>
          </div>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2">
            <span>Book Now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default FieldCard;