import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, LogOut, Menu, Bell, Sparkles } from 'lucide-react';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-md transition-all sm:px-6">
      {/* Left side: Mobile Toggle & Brand */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/dashboard" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow-sm shadow-sky-500/20">
            <Globe className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Globe<span className="text-sky-600">Trotter</span>
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:block">
              Travel Planner
            </span>
          </div>
        </Link>
      </div>

      {/* Right side: Quick stats/badge, notifications, User profile & Logout */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 md:flex">
          <Sparkles className="h-3.5 w-3.5 text-sky-600" />
          <span>Explorer Plan</span>
        </div>

        <button
          type="button"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-sky-500 ring-2 ring-white"></span>
        </button>

        {/* User Profile Area */}
        <Link
          to="/profile"
          className="flex items-center gap-2.5 rounded-lg p-1.5 hover:bg-slate-100 transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 font-semibold text-white text-xs shadow-inner">
            AM
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-slate-800 leading-tight">Alex Morgan</p>
            <p className="text-[11px] text-slate-500">alex@example.com</p>
          </div>
        </Link>

        {/* Logout placeholder */}
        <Link
          to="/login"
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-all"
          title="Log out"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
