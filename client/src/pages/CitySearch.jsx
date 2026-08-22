import React from 'react';
import { Globe, Search } from 'lucide-react';

const CitySearch = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Explore Cities
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Discover top travel destinations, attractions, and cultural hubs around the globe.
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search cities, countries, or regions..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-xs"
          readOnly
        />
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <Globe className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">City Catalog Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          City cards with photos, best travel seasons, weather indicators, and popular highlights will be listed here.
        </p>
      </div>
    </div>
  );
};

export default CitySearch;
