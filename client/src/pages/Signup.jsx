import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg shadow-sky-600/30">
            <Globe className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
            Join GlobeTrotter
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Create an account to start planning your journeys
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm font-medium text-slate-600">Signup Form Placeholder</p>
            <p className="mt-1 text-xs text-slate-400">Registration form will be implemented here</p>
          </div>

          <Link
            to="/dashboard"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-3 text-sm font-semibold text-white shadow-md shadow-sky-600/20 hover:bg-sky-700 transition-all"
          >
            <span>Create Account & Go to Dashboard</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-sky-600 hover:text-sky-700">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
