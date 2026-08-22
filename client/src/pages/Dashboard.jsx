import React from 'react';
import { LayoutDashboard, Plane, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome back, Alex! 🌍
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track your journeys, itineraries, and travel budgets in one place.
          </p>
        </div>
        <Link
          to="/create-trip"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
        >
          <Plane className="h-4 w-4" />
          Plan New Trip
        </Link>
      </div>

      {/* Quick Summary Cards Placeholder */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Trips', value: '4', icon: Plane, color: 'text-sky-600 bg-sky-50' },
          { title: 'Cities Explored', value: '12', icon: MapPin, color: 'text-emerald-600 bg-emerald-50' },
          { title: 'Upcoming Adventures', value: '2', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50' },
          { title: 'Travel Score', value: '880', icon: TrendingUp, color: 'text-amber-600 bg-amber-50' },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">{stat.title}</p>
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Placeholder Area */}
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-xs">
        <LayoutDashboard className="mx-auto h-10 w-10 text-slate-300" />
        <h3 className="mt-3 text-base font-semibold text-slate-800">Dashboard Overview Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500">
          Trip widgets, active countdowns, interactive map, and recent activities will be loaded here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
