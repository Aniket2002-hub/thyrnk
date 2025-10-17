"use client"; // <--- ADDED THIS LINE

import React from 'react'
// ✅ Correct: All imports must be at the top of the file.
import {
  Home,
  Compass,
  Bell,
  MessageSquare,
  Bookmark,
  ImageIcon,
  User,
  MoreHorizontal,
  X, // Used for the close button
  Plus // Used for the Post button
} from 'lucide-react'; // Replace 'lucide-react' with your actual icon library

const LeftSideBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // ⚠️ Note: I've added isMobileMenuOpen and setIsMobileMenuOpen to props, 
  // as your component uses them but doesn't define them.

  const sidebarItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Explore", icon: Compass, active: false },
    { name: "Notification", icon: Bell },
    { name: "Messages", icon: MessageSquare },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Thrynk Pick", icon: ImageIcon },
    { name: "Profile", icon: User },
    { name: "More", icon: MoreHorizontal },
  ];

  return (
    <>
      <div
        className={`fixed lg:relative w-64 h-full bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 lg:transform-none ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between mb-8 lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              {/* Note: In a Next.js app, replace <a> with <Link> from 'next/link' */}
              <a href="/" >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Thrynk
                </h1>
              </a>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2 cursor-pointer">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center gap-4 px-4 py-3 cursor-pointer rounded-xl transition-all ${
                  item.active
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <item.icon size={22} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
            <Plus size={20} />
            Post
          </button>
        </div>
      </div>
    </>
  )
}

export default LeftSideBar