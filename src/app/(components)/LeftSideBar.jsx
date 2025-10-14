"use client";
import React, { useState } from "react";
import {
    Home,
    Compass,
    Bell,
    MessageSquare,
    Bookmark,
    Camera, // Use Camera for 'Thrynk Pick' since ImageIcon wasn't imported
    User,
    MoreHorizontal,
    Plus,
    X, // 👈 Imported X for close button
    // The following are not imported from 'lucide-react' but are commonly used:
    // ImageIcon, // ❌ Not imported. Using Camera as a substitute.
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define a substitute for ImageIcon (since it's not imported)
// For simplicity, we use Camera which IS imported and visually similar to "Pic/Image".
const ImageIcon = Camera; 

// The component now accepts the necessary props to control the mobile state
const LeftSideBar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => { 
    const pathname = usePathname();

    const sidebarItems = [
        { name: "Home", icon: Home, link: "/" }, // Added link for routing logic
        { name: "Explore", icon: Compass, link: "/explore" }, 
        { name: "Notification", icon: Bell, link: "/notifications" },
        { name: "Messages", icon: MessageSquare, link: "/messages" },
        { name: "Bookmarks", icon: Bookmark, link: "/bookmarks" },
        { name: "Thrynk Pick", icon: ImageIcon, link: "/thrynk-pick" }, // Now uses the defined ImageIcon/Camera
        { name: "Profile", icon: User, link: "/profile" },
        { name: "More", icon: MoreHorizontal, link: "/more" },
    ];

    return (
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
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Thrynk
                        </h1>
                    </div>
                    {/* The onClick now uses the prop setIsMobileMenuOpen */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                        aria-label="Close menu"
                    >
                        <X size={24} /> {/* X is now imported */}
                    </button>
                </div>

                <nav className="space-y-2 cursor-pointer">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.link; // Check for active route based on `usePathname`

                        return (
                            // Use Link component for proper Next.js navigation
                            <Link 
                                key={item.name}
                                href={item.link}
                                className={`w-full flex items-center gap-4 px-4 py-3 cursor-pointer rounded-xl transition-all ${
                                    isActive
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                        : "text-slate-600 hover:bg-slate-100"
                                }`}
                            >
                                <item.icon size={22} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <Plus size={20} />
                    Post
                </button>
                
                {/* User Profile Footer (Added for completeness based on original image) */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between hover:bg-slate-100 p-2 rounded-xl transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-sm">
                                <span className="text-slate-700">AK</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 text-sm">Anilet Kumar</h3>
                                <p className="text-xs text-slate-500">@anilet2000</p>
                            </div>
                        </div>
                        <MoreHorizontal size={20} className="text-slate-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;