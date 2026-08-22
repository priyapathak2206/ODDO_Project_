import React from 'react';
import { Calendar, Share2 } from 'lucide-react';

const ItineraryView = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Itinerary View
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Comprehensive itinerary breakdown with maps, schedules, and reservations.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors"
        >
          <Share2 className="h-4 w-4 text-slate-500" />
          Share Itinerary
        </button>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <Calendar className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Itinerary Schedule View Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Day-wise schedule view, stops, interactive maps, and notes will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default ItineraryView;
