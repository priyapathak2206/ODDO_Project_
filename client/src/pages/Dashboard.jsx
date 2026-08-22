import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane,
  MapPin,
  Sparkles,
  TrendingUp,
  Calendar,
  Clock,
  ArrowRight,
  Wallet,
  Compass,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Plus,
  Luggage,
  Award,
  Globe,
  Tag
} from 'lucide-react';

// Mock Data Constants
const STATS = [
  {
    id: 1,
    title: 'Total Trips',
    value: '4',
    subtitle: '+2 this year',
    icon: Luggage,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    borderColor: 'border-sky-100',
  },
  {
    id: 2,
    title: 'Cities Explored',
    value: '12',
    subtitle: 'Across 6 countries',
    icon: MapPin,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
  {
    id: 3,
    title: 'Upcoming Adventures',
    value: '2',
    subtitle: 'Next in 18 days',
    icon: Sparkles,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
  },
  {
    id: 4,
    title: 'Travel Score',
    value: '880',
    subtitle: 'Top 5% Explorer',
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    borderColor: 'border-amber-100',
  },
];

const UPCOMING_TRIPS = [
  {
    id: 'trip-1',
    destination: 'Tokyo & Kyoto, Japan',
    dates: 'Oct 12 – Oct 22, 2026',
    duration: '10 Days',
    status: 'Confirmed',
    statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    gradient: 'from-sky-500 via-indigo-600 to-purple-600',
    highlights: ['Cherry Blossom Temples', 'Shinkansen Bullet Train', 'Akihabara Tech Tour'],
    budgetSpent: '$2,100',
    budgetTotal: '$3,200',
  },
  {
    id: 'trip-2',
    destination: 'Amalfi Coast & Rome, Italy',
    dates: 'Nov 04 – Nov 16, 2026',
    duration: '12 Days',
    status: 'Planning',
    statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    gradient: 'from-amber-500 via-rose-500 to-pink-600',
    highlights: ['Positano Cliff Walk', 'Colosseum VIP Tour', 'Capri Boat Excursion'],
    budgetSpent: '$1,400',
    budgetTotal: '$2,800',
  },
];

const RECENT_TRIPS = [
  {
    id: 'recent-1',
    destination: 'Paris & Swiss Alps',
    country: 'France & Switzerland',
    date: 'May 10 – May 20, 2026',
    duration: '10 Days',
    summary: 'Explored the Louvre, hiked through Grindelwald peaks, and rode the iconic Glacier Express.',
    tag: 'Adventure & Culture',
    rating: 4.9,
    accent: 'border-l-sky-500',
  },
  {
    id: 'recent-2',
    destination: 'Bali & Nusa Penida',
    country: 'Indonesia',
    date: 'Feb 14 – Feb 24, 2026',
    duration: '10 Days',
    summary: 'Visited ancient cliffside temples, scuba dived with manta rays, and relaxed in lush Ubud.',
    tag: 'Tropical Escape',
    rating: 5.0,
    accent: 'border-l-emerald-500',
  },
  {
    id: 'recent-3',
    destination: 'Barcelona & Madrid',
    country: 'Spain',
    date: 'Dec 18 – Dec 28, 2025',
    duration: '10 Days',
    summary: 'Discovered Gaudi’s architecture, indulged in Gothic Quarter tapas, and toured the Prado Museum.',
    tag: 'City Explorer',
    rating: 4.8,
    accent: 'border-l-indigo-500',
  },
];

const BUDGET_OVERVIEW = {
  totalBudget: 4500,
  spent: 2850,
  currency: 'USD',
  categories: [
    { name: 'Flights & Transit', spent: 1200, total: 1600, color: 'bg-sky-500' },
    { name: 'Stays & Hotels', spent: 950, total: 1500, color: 'bg-indigo-500' },
    { name: 'Activities & Tours', spent: 450, total: 800, color: 'bg-emerald-500' },
    { name: 'Dining & Food', spent: 250, total: 600, color: 'bg-amber-500' },
  ],
};

const RECOMMENDED_DESTINATIONS = [
  {
    id: 'dest-1',
    name: 'Santorini',
    country: 'Greece',
    badge: 'Trending',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
    description: 'Stunning white-washed cliffside villages, azure Aegean waters, and world-famous caldera sunsets.',
    bestSeason: 'May – Oct',
  },
  {
    id: 'dest-2',
    name: 'Reykjavik',
    country: 'Iceland',
    badge: 'Popular',
    gradient: 'from-teal-600 via-emerald-500 to-cyan-600',
    description: 'Chase the ethereal Northern Lights, bathe in geothermal hot springs, and witness dramatic waterfalls.',
    bestSeason: 'Sep – Apr',
  },
  {
    id: 'dest-3',
    name: 'Kyoto',
    country: 'Japan',
    badge: 'Cultural Pick',
    gradient: 'from-rose-600 via-purple-600 to-indigo-600',
    description: 'Walk through serene bamboo groves, historic golden pavilions, and experience traditional tea ceremonies.',
    bestSeason: 'Mar – May',
  },
];

const Dashboard = () => {
  const [userName] = useState(() => {
    try {
      const stored = localStorage.getItem('user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.name) return parsed.name;
      }
    } catch {
      // fallback
    }
    return 'Alex';
  });

  const remainingBudget = BUDGET_OVERVIEW.totalBudget - BUDGET_OVERVIEW.spent;
  const spentPercent = Math.round((BUDGET_OVERVIEW.spent / BUDGET_OVERVIEW.totalBudget) * 100);

  return (
    <div className="space-y-8 pb-12">
      {/* 1. Welcome Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-6 sm:p-8 text-white shadow-xl">
        {/* Decorative backdrop elements */}
        <div className="absolute right-0 top-0 -mt-10 -mr-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md border border-white/15 text-sky-200">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>GlobeTrotter Travel HQ</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Welcome back, {userName}! 🌍
            </h1>
            <p className="text-sm text-slate-300 sm:text-base leading-relaxed">
              Manage your journeys, itineraries, and travel budgets in one place. Discover new destinations and embark on unforgettable memories.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/create-trip"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:from-sky-400 hover:to-indigo-500 transition-all hover:scale-[1.02]"
            >
              <Plane className="h-4 w-4" />
              <span>Plan New Trip</span>
            </Link>
            <Link
              to="/my-trips"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>View All Trips</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Statistics Cards */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-sky-600" />
            Travel Statistics
          </h2>
          <span className="text-xs text-slate-400 font-medium">All-time stats</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`relative overflow-hidden rounded-2xl border ${stat.borderColor} bg-white p-5 shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                      {stat.title}
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">{stat.subtitle}</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-xs`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Upcoming Trips & 5. Travel Budget Overview Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left 2 Cols: Upcoming Trips */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Plane className="h-5 w-5 text-sky-600" />
                Upcoming Trips
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Your next scheduled adventures</p>
            </div>
            <Link
              to="/my-trips"
              className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
            >
              See all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {UPCOMING_TRIPS.map((trip) => (
              <div
                key={trip.id}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs transition-all hover:shadow-md"
              >
                {/* Trip Banner Header */}
                <div className={`bg-gradient-to-r ${trip.gradient} p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3`}>
                  <div>
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-white/80">
                      Destination
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold">{trip.destination}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold border ${trip.statusColor}`}>
                      {trip.status}
                    </span>
                  </div>
                </div>

                {/* Trip Card Body */}
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span>{trip.dates}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Wallet className="h-4 w-4 text-slate-400" />
                      <span>Budget: {trip.budgetSpent} / {trip.budgetTotal}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                    {trip.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <Link
                      to="/itinerary"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-sky-700 transition-colors"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <Link
                        to="/itinerary-builder"
                        className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        Edit Plan
                      </Link>
                      <Link
                        to="/budget"
                        className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        Budget
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: 5. Travel Budget Overview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Wallet className="h-5 w-5 text-sky-600" />
                Budget Overview
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Active trip finances</p>
            </div>
            <Link
              to="/budget"
              className="text-xs font-semibold text-sky-600 hover:text-sky-700"
            >
              Details
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs space-y-5">
            {/* Total summary */}
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-medium text-slate-500">Total Allocated</span>
                <span className="text-xs font-semibold text-sky-600">{spentPercent}% Spent</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-black text-slate-900">
                  ${BUDGET_OVERVIEW.spent.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  of ${BUDGET_OVERVIEW.totalBudget.toLocaleString()}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${spentPercent}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>Spent: ${BUDGET_OVERVIEW.spent.toLocaleString()}</span>
                <span className="font-semibold text-emerald-600">
                  Remaining: ${remainingBudget.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Category breakdown */}
            <div className="border-t border-slate-100 pt-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Category Spending
              </h4>
              {BUDGET_OVERVIEW.categories.map((cat, idx) => {
                const catPercent = Math.round((cat.spent / cat.total) * 100);
                return (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between font-medium text-slate-700">
                      <span>{cat.name}</span>
                      <span className="text-slate-500">
                        ${cat.spent} / ${cat.total} ({catPercent}%)
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${cat.color}`}
                        style={{ width: `${catPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View Full Budget link button */}
            <Link
              to="/budget"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-sky-200 bg-sky-50 py-2.5 text-xs font-semibold text-sky-700 hover:bg-sky-100 transition-colors"
            >
              <span>Manage Full Budget</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Recent Trips Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Compass className="h-5 w-5 text-sky-600" />
              Recent Completed Trips
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Memories from your past travels</p>
          </div>
          <Link
            to="/my-trips"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
          >
            All Trips
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {RECENT_TRIPS.map((trip) => (
            <div
              key={trip.id}
              className={`flex flex-col justify-between rounded-2xl border border-slate-100 border-l-4 ${trip.accent} bg-white p-5 shadow-xs transition-all hover:shadow-md`}
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{trip.destination}</h3>
                    <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3 text-slate-400" />
                      {trip.country}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-700">
                    ★ {trip.rating}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    {trip.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    {trip.duration}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {trip.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
                  <Tag className="h-3 w-3 text-slate-400" />
                  {trip.tag}
                </span>

                <Link
                  to="/itinerary"
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-0.5"
                >
                  Details
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Recommended Destinations Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Globe className="h-5 w-5 text-sky-600" />
              Recommended Destinations
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Inspiration for your next adventure</p>
          </div>
          <Link
            to="/cities"
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
          >
            Explore Cities
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {RECOMMENDED_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xs transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Visual Gradient Card Header */}
              <div className={`relative bg-gradient-to-br ${dest.gradient} p-6 text-white overflow-hidden`}>
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-20">
                  <Globe className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-xs text-white">
                    {dest.badge}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{dest.name}</h3>
                  <p className="text-xs text-white/80 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" />
                    {dest.country}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {dest.description}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Best Season: <strong className="text-slate-800 font-semibold">{dest.bestSeason}</strong>
                  </span>
                  <Link
                    to="/create-trip"
                    className="inline-flex items-center gap-1 font-semibold text-sky-600 group-hover:text-sky-700 transition-colors"
                  >
                    <span>Plan Trip</span>
                    <Plus className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
