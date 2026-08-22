import React from 'react';
import { PlusCircle } from 'lucide-react';

const CreateTrip = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Create a New Trip
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Set up your destination, travel dates, and companion preferences.
        </p>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <PlusCircle className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Trip Creation Wizard Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Form steps for destination selection, dates, travel style, and preferences will be rendered here.
        </p>
      </div>
    </div>
  );
};

export default CreateTrip;
