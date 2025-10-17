"use client"; // Add this line if LowerTab is not already wrapped by a Client Component
import React, { useState } from 'react';
import Link from 'next/link'; 
import {
  TrendingUp,
  Heart,
  MessageSquare,
  // Hash,
} from 'lucide-react'; 

const LowerTab = () => {
  const [activeTab, setActiveTab] = useState("forYou"); 

  const tabs = [
    // Changed href for '#' links to maintain state without navigation.
    { key: "forYou", label: "For You", href: "/home", icon: TrendingUp }, 
    { key: "following", label: "Following", href: "/following", icon: Heart },
    { key: "blogs", label: "Blogs", href: "/blogs", icon: MessageSquare },
  ];

  const handleTabClick = (e, key) => {
    // If the link is not a real navigation (e.g., href="#"), prevent default.
    // Otherwise, let Link component handle navigation.
    if (e.currentTarget.getAttribute('href') === '#') {
      e.preventDefault();
    }
    setActiveTab(key);
  };

  return (
    <>
      {/* Tabs - Bottom Navigation */}
      <div className="bg-white/80 backdrop-blur-xl border-t border-slate-200/60 sticky bottom-0">
        <div className="flex">
          {tabs.map((tab) => (
            // ✅ Modern Link Usage: The Link component itself carries the styles and interactivity.
            <Link
              key={tab.key}
              href={tab.href}
              onClick={(e) => handleTabClick(e, tab.key)} // Handle click for state update and navigation block if needed
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 lg:py-4 transition-all duration-200 
                ${activeTab === tab.key
                  ? "border-t-2 border-blue-500 text-blue-600 bg-blue-50/50"
                  : "border-t-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
            >
              <tab.icon size={18} className="lg:hidden" />
              <span className="font-medium text-xs lg:text-base">{tab.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LowerTab;