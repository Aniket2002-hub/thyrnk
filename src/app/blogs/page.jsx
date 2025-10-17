"use client";
import React, { useState } from "react";
import Link from "next/link"; // KEEP: Next.js Link for routing
import {
  Search, Home, Compass, Bell, MessageSquare, Bookmark, User, Plus, MoreHorizontal, Heart, Calendar, Eye, Menu, X, Image as ImageIcon, TrendingUp, Users, UserPlus, Smile, MapPin,
} from "lucide-react";
import LeftSideBar from "../(components)/LeftSideBar";
import LowerTab from "../(components)/LowerTab";
import RightSideBar from "../(components)/RightSideBar";

// Assuming these components are in a sibling directory named (components)
const BlogPlatform = () => {
    // --- STATE ---
    const [activeTab, setActiveTab] = useState("blogs");
    const [isPostInputFocused, setIsPostInputFocused] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [postContent, setPostContent] = useState("");

    // --- DATA ---
    const sidebarItems = [
        { name: "Home", icon: Home, active: false, },
        { name: "Explore", icon: Compass, active: false },
        { name: "Notification", icon: Bell },
        { name: "Messages", icon: MessageSquare },
        { name: "Bookmarks", icon: Bookmark },
        { name: "Thrynk Pick", icon: ImageIcon },
        { name: "Profile", icon: User },
        { name: "More", icon: MoreHorizontal },
    ];
    
    // Define tabs locally since they are used in this component's logic

    const blogPosts = [
        // ... your blog post data
        { id: 1, title: "When RAM Runs Out: Exploring Virtual Memory with Python", description: "A hands-on guide to paging, partitioning, and coding a memory usage monitor with psutil", author: "Mark Andrews", platform: "Python in Plain English", timeAgo: "2d ago", reads: 101, image: "💻", category: "Programming", },
        { id: 2, title: "You Can't Fire Me, I AM Fire", description: "Before phones, we stared at the flames in our hands", author: "Daniel Williams", platform: "Zenite", timeAgo: "1d ago", reads: 668, responses: 15, image: "🔥", category: "Life", },
        { id: 3, title: "Wherever I Go ChatGPT Follows Me", description: "The internet is not dead, we're just lynching it", author: "Alberto Romero", platform: "AI Insights", timeAgo: "3h ago", reads: 432, image: "🤖", category: "AI", },
        { id: 4, title: "The Future of Web Development in 2025", description: "Exploring emerging trends and technologies that will shape the next generation of web applications", author: "Sarah Chen", platform: "Tech Forward", timeAgo: "5h ago", reads: 892, responses: 23, image: "🌐", category: "Web Dev", },
        { id: 5, title: "Building Scalable Microservices with Node.js", description: "Best practices and architectural patterns for creating robust distributed systems", author: "Michael Rodriguez", platform: "Backend Mastery", timeAgo: "1d ago", reads: 567, responses: 12, image: "⚙️", category: "Backend", },
    ];

    // --- RENDERING ---
    return (
        <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex justify-center overflow-hidden">
            <div className="flex w-full h-full max-w-[1300px]">
                
                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
                )}

                {/* LEFT SIDEBAR COMPONENT */}
                <LeftSideBar
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    sidebarItems={sidebarItems}
                />

                {/* MAIN CENTER COLUMN (Blog Feed) */}
                <div className="flex-1 flex overflow-hidden max-w-[700px] border-r border-l border-slate-200 lg:border-l-0">
                    <div className="flex-1 overflow-y-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                        
                        {/* Header (Search and Post Input) - Sticky top section */}
                        <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-4 lg:p-6 sticky top-0 z-20">
                            {/* Search Bar */}
                            <div className="flex items-center gap-4">
                                <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 hover:bg-slate-100 rounded-full" aria-label="Open menu">
                                    <Menu size={24} />
                                </button>
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input type="text" placeholder="Search blogs, authors, and topics..." className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm lg:text-base" />
                                </div>
                            </div>

                            {/* Post Input Section */}
                            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 mt-4">
                                <div className="flex gap-3 lg:gap-4">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">M</div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Quick thought or blog summary? 🤔"
                                            className="w-full text-base lg:text-lg border-none outline-none placeholder-slate-400"
                                            onFocus={() => setIsPostInputFocused(true)}
                                            onBlur={() => setTimeout(() => setIsPostInputFocused(false), 100)}
                                            value={postContent}
                                            onChange={(e) => setPostContent(e.target.value)}
                                        />
                                        {isPostInputFocused && (
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 pt-4 border-t border-slate-100 gap-3">
                                                <div className="flex flex-wrap gap-2 lg:gap-4">
                                                    <button className="flex items-center gap-1 text-blue-500 hover:bg-blue-50 px-2 py-1 rounded-full transition-colors" aria-label="Add photo"> <ImageIcon size={20} /> </button>
                                                    <button className="flex items-center gap-1 text-yellow-500 hover:bg-yellow-50 px-2 py-1 rounded-full transition-colors" aria-label="Add emoji"> <Smile size={20} /> </button>
                                                </div>
                                                <button className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-sm lg:text-base w-full sm:w-auto ${postContent.trim() ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={!postContent.trim()}>Post</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       

                        {/* Blog Posts */}
                        <div className="p-3 lg:p-6 space-y-4 lg:space-y-6">
                            {activeTab === 'blogs' && (
                                <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 capitalize">Trending Articles</h1>
                            )}

                            {activeTab === 'blogs' ? (
                                blogPosts.map((post) => (
                                    // ✅ KEY CHANGE: Wrap the entire post structure in <Link>
                                    <Link key={post.id} href={`/blogs/${post.id}`} legacyBehavior>
                                        <a
                                            // Ensure the anchor tag covers the entire card
                                            className="block bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                            // The onClick handler is removed from here as <Link> handles navigation
                                        >
                                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                                                {/* Blog Info */}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                                                        <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                                                            {post.platform ? post.platform.charAt(0) : post.author.charAt(0)}
                                                        </div>
                                                        <span className="text-xs lg:text-sm">
                                                            in <span className="font-semibold text-blue-700">{post.platform}</span> by{" "}
                                                            <span className="font-semibold">{post.author}</span>
                                                        </span>
                                                    </div>

                                                    <h2 className="text-xl lg:text-2xl font-extrabold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                                                        {post.title}
                                                    </h2>
                                                    <p className="text-slate-600 mb-4 text-sm lg:text-base line-clamp-2">
                                                        {post.description}
                                                    </p>

                                                    <div className="flex items-center justify-between flex-wrap gap-3">
                                                        <div className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm text-slate-500">
                                                            <span className="bg-slate-100 text-slate-700 font-medium px-2 py-1 rounded-full">{post.category}</span>
                                                            <span className="flex items-center gap-1">
                                                                <Calendar size={14} /> {post.timeAgo}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Eye size={14} /> {post.reads}
                                                            </span>
                                                            {post.responses && (
                                                                <span className="flex items-center gap-1">
                                                                    <MessageSquare size={14} /> {post.responses}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            {/* Ensure click handlers on interactive elements use e.stopPropagation() */}
                                                            <button className="p-2 hover:bg-red-50 rounded-full transition-colors" aria-label="Like" onClick={(e) => e.stopPropagation()}>
                                                                <Heart size={18} className="text-slate-400 hover:text-red-500" />
                                                            </button>
                                                            <button className="p-2 hover:bg-blue-50 rounded-full transition-colors" aria-label="Bookmark" onClick={(e) => e.stopPropagation()}>
                                                                <Bookmark size={18} className="text-slate-400 hover:text-blue-500" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Image */}
                                                <div className="w-full sm:w-32 lg:w-40 h-24 lg:h-28 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                                    <span className="text-3xl lg:text-4xl">{post.image}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-10 text-slate-500 text-lg font-medium">
                                    Content for the **{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}** tab would go here.
                                </div>
                            )}
                        </div>

                        {/* 6. LOWER TAB COMPONENT (Mobile Navigation) */}
                        <LowerTab activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </div>

                {/* 5. RIGHT SIDEBAR COMPONENT */}
                <RightSideBar />
            </div>
        </div>
    );
};

export default BlogPlatform;