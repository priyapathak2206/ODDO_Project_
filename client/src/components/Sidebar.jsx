import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Plane,
  PlusCircle,
  MapPin,
  Compass,
  Wallet,
  Calendar,
  User,
  Route,
  X,
  Globe,
  Share2
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My Trips', path: '/my-trips', icon: Plane },
  { name: 'Create Trip', path: '/create-trip', icon: PlusCircle },
  { name: 'Itinerary', path: '/itinerary', icon: Route },
  { name: 'Itinerary Builder', path: '/itinerary-builder', icon: MapPin },
  { name: 'Cities', path: '/cities', icon: Globe },
  { name: 'Activities', path: '/activities', icon: Compass },
  { name: 'Budget', path: '/budget', icon: Wallet },
  { name: 'Calendar', path: '/calendar', icon: Calendar },
  { name: 'Shared Trip', path: '/shared/demo-trip-123', icon: Share2 },
  { name: 'Profile', path: '/profile', icon: User },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Header / Brand */}
        <div className="flex h-16 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white shadow-sm">
              <Globe className="h-4 w-4" />
            </div>
            <span className="font-bold text-slate-900 text-lg">
              Globe<span className="text-sky-600">Trotter</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Navigation
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    if (onClose) onClose();
                  }}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/25'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'
                        }`}
                      />
                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-100 p-4">
          <div className="rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 p-3.5 border border-sky-100">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-sky-600" />
              <span className="text-xs font-semibold text-sky-900">Next Adventure</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-600">
              Ready to plan your next destination?
            </p>
            <NavLink
              to="/create-trip"
              onClick={() => {
                if (onClose) onClose();
              }}
              className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700 transition-colors"
            >
              <PlusCircle className="h-3.5 w-3.5" />
              Plan a Trip
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
