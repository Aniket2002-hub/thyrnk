"use client";
import React from "react";

export default function RightSideBar() {
  const newsItems = [
    {
      title: "Breaking News",
      subtitle: "AI revolution continues",
      avatar: "📰",
    },
    { title: "Tech Updates", subtitle: "New framework released", avatar: "💻" },
    { title: "Market Watch", subtitle: "Crypto surge today", avatar: "📈" },
    { title: "Global Events", subtitle: "Climate summit begins", avatar: "🌍" },
    { title: "Sports", subtitle: "Championship finals", avatar: "⚽" },
    { title: "Entertainment", subtitle: "New movie premieres", avatar: "🎬" },
    { title: "Science", subtitle: "Mars mission update", avatar: "🚀" },
    { title: "Health", subtitle: "Wellness trends rising", avatar: "🏥" },
  ];
  return (
    <>
      <div className="w-80 p-6 space-y-6">
        {/* Thrynk's Pick */}
        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-6 border border-emerald-200">
          <h3 className="font-bold text-emerald-800 mb-2">Thrynks Pick</h3>
          <p className="text-emerald-700 font-medium">We have to Do it!</p>
        </div>

        {/* What's Rising */}
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-4">Whats Rising</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 bg-blue-200 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Today's News - More News Added */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-6">Todays News</h3>
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-lg">
                  {item.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{item.title}</p>
                  <p className="text-slate-500 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
