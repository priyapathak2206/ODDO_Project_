import React from 'react';
import { Wallet, Plus, PieChart } from 'lucide-react';

const Budget = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Trip Budget & Expenses
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track spending across flights, lodging, activities, dining, and transit.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Expense
        </button>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs">
        <Wallet className="mx-auto h-12 w-12 text-sky-500/70" />
        <h3 className="mt-4 text-base font-semibold text-slate-800">Budget & Analytics Placeholder</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-md mx-auto">
          Expense charts using Recharts, category breakdown, currency converter, and receipt logs will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default Budget;
