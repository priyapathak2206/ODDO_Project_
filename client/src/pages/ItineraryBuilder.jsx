import React from 'react';
import { Route } from 'lucide-react';

const ItineraryBuilder = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Itinerary Builder
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Build and customize day-by-day travel plans, add activities, and arrange timeline schedules.
        </p>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <Route className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Itinerary Builder Workspace Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Drag-and-drop daily timeline editor, activity slots, and route optimizers will be rendered here.
        </p>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
