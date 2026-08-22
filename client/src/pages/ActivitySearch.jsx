import React from 'react';
import { Compass, Search } from 'lucide-react';

const ActivitySearch = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Discover Activities
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Find curated tours, culinary adventures, outdoor hikes, and museum bookings.
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search activities, excursions, workshops..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-xs"
          readOnly
        />
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <Compass className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Activity Catalog Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Activity cards with ratings, pricing, duration, and instant add-to-itinerary buttons will be rendered here.
        </p>
      </div>
    </div>
  );
};

export default ActivitySearch;
