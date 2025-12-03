import React from 'react';
function StatsSection({ filteredFields }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-12">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="text-4xl font-black mb-2">{filteredFields.length}+</div>
        <div className="text-indigo-100 font-medium">Available Fields</div>
      </div>
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="text-4xl font-black mb-2">4.7★</div>
        <div className="text-emerald-100 font-medium">Average Rating</div>
      </div>
      <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="text-4xl font-black mb-2">24/7</div>
        <div className="text-orange-100 font-medium">Support</div>
      </div>
    </div>
  );
}
export default StatsSection;

