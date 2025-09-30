
"use client";
import React, { useState } from "react";
import {
  Home,
  Compass,
  Bell,
  MessageSquare,
  Bookmark,
  Camera,
  User,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const LeftSideBar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const sidebarItems = [
    { name: "Home", icon: Home },
    { name: "Explore", icon: Compass },
    { name: "Notification", icon: Bell },
    { name: "Messages", icon: MessageSquare },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Thrynk's Pick", icon: Camera },
    { name: "Profile", icon: User },
    { name: "More", icon: MoreHorizontal },
  ];

  return (
    <div className="w-80 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 shadow-xl flex-shrink-0">
      <div className="p-8 h-full flex flex-col">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Thrynk</h1>

        {/* Sidebar Menu */}
        <nav className="space-y-3 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 ${
                activeSection === item.name
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-[1.02]"
                  : "hover:bg-slate-100 text-slate-600 hover:text-slate-800"
              }`}
            >
              <item.icon size={22} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Create Button */}
        <button className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-200">
          <Plus size={20} />
          Create
        </button>

        {/* User Profile */}
        <div className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <div>
            <p className="font-semibold text-slate-800">Aniket Kumar</p>
            <p className="text-slate-500 text-sm">@aniket2000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
