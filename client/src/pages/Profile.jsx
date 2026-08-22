import React from 'react';
import { User, Mail, MapPin, Shield, Sparkles } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          User Profile
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your traveler profile, preferences, and account settings.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-2xl font-bold text-white shadow-md">
            AM
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">Alex Morgan</h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                <Sparkles className="h-3 w-3 text-sky-600" />
                Explorer
              </span>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <Mail className="h-3.5 w-3.5 text-slate-400" />
              alex@example.com
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              San Francisco, CA
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <User className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Profile Settings Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          User details, travel preferences, notification settings, and security controls will be managed here.
        </p>
      </div>
    </div>
  );
};

export default Profile;
