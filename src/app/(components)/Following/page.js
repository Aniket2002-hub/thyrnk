import React from "react";
import { Search } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-6 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search Thrynk..."
              className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
      </div>
    </>
  );
}
