import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Trip Calendar
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            View your upcoming travel timeline and day-by-day scheduled events.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <CalendarIcon className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Monthly/Weekly Calendar View Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Full travel calendar with synced events, flight schedules, hotel check-ins, and activity reminders will be rendered here.
        </p>
      </div>
    </div>
  );
};

export default Calendar;
