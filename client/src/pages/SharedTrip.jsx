import React from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Users, MapPin } from 'lucide-react';

const SharedTrip = () => {
  const { tripId } = useParams();

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          <Users className="h-3.5 w-3.5" />
          <span>Collaborative View</span>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Shared Trip Itinerary
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Viewing shared trip link: <span className="font-mono font-medium text-sky-600">#{tripId || 'demo-trip-123'}</span>
        </p>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <Share2 className="mx-auto h-12 w-12 text-indigo-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Shared Trip View Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Public or member-shared travel plan with collaboration comments, member list, and itinerary export options.
        </p>
      </div>
    </div>
  );
};

export default SharedTrip;
