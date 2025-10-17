"use client";

import React, { useState } from "react";
import {
  Search, Home, Compass, Bell, MessageSquare, Bookmark, User, Plus, MoreHorizontal, Heart, MessageCircle, Repeat2, Share, TrendingUp, Image as ImageIcon, Smile, MapPin, Calendar, Menu, X, Users, Hash, UserPlus,
} from "lucide-react";
import RightSideBar from "./(components)/RightSideBar";
import LowerTab from "./(components)/LowerTab";
import LeftSideBar from "./(components)/LeftSideBar";



const ThrynkPlatform = () => {
  const [activeTab, setActiveTab] = useState("forYou");
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [postContent, setPostContent] = useState('');

  // --- DATA ---
  const sidebarItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Explore", icon: Compass, active: false },
    { name: "Notifications", icon: Bell },
    { name: "Messages", icon: MessageSquare },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Thrynk Pick", icon: ImageIcon },
    { name: "Profile", icon: User },
    { name: "More", icon: MoreHorizontal },
  ];

  const posts = [
    { id: 1, user: { name: "Nitya Shri", handle: "@nityeshri", avatar: "👩‍💻", verified: true, }, content: "Just baked a fresh batch chocolate chip cookies 🍪", image: "🍪", likes: 13, comments: 1816, time: "2h", },
    { id: 2, user: { name: "Alex Chen", handle: "@alextech", avatar: "👨‍💼", verified: true, }, content: "Working on an exciting new AI project! The future of technology is here and it's absolutely mind-blowing 🚀✨", likes: 247, comments: 892, time: "4h", },
    { id: 3, user: { name: "Sarah Wilson", handle: "@sarahcreates", avatar: "👩‍🎨", verified: false, }, content: "Just finished designing a new mobile app interface. Clean, minimal, and user-friendly! What do you think? 📱", image: "🎨", likes: 156, comments: 423, time: "6h", },
    { id: 4, user: { name: "David Kim", handle: "@daviddev", avatar: "👨‍💻", verified: true, }, content: "Breaking: New JavaScript framework released! This could change everything we know about web development 🔥", likes: 892, comments: 1234, time: "8h", },
    { id: 5, user: { name: "Emma Rodriguez", handle: "@emmacreates", avatar: "👩‍🎨", verified: false, }, content: "Just launched my new portfolio website! Took me 3 months to perfect every detail. Check it out! ✨", image: "💻", likes: 445, comments: 167, time: "12h", },
    { id: 6, user: { name: "Michael Johnson", handle: "@mikej", avatar: "👨‍🚀", verified: true, }, content: "Space exploration update: New Mars rover footage is absolutely stunning! The future is here 🚀🔴", likes: 1567, comments: 892, time: "1d", },
  ];
  // --- END DATA ---


  return (
    // OUTER CONTAINER: Centered and full-height/width
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex justify-center overflow-hidden">
      
      {/* MAIN CONTENT WRAPPER: Constrains the total width and centers the three columns */}
      <div className="flex w-full h-full max-w-[1300px]"> 
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Left Sidebar - Responsive (Props added for data) */}
        <LeftSideBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          sidebarItems={sidebarItems}
        />

        {/* Main Content Area - Scrollable */}
        {/* MIDDLE COLUMN: Fixed max width and border for Twitter/X look */}
        <div className="flex-1 flex overflow-hidden max-w-[700px] border-r border-l border-slate-200 lg:border-l-0">
          
          {/* Feed - Center Column */}
          {/* 1. ✅ Change: Apply custom styles to hide the scrollbar. */}
          <div 
            className="flex-1 overflow-y-scroll w-full"
            style={{ 
              msOverflowStyle: 'none', // IE and Edge
              scrollbarWidth: 'none', // Firefox
            }}
            // Note: For Chrome/Safari, you typically need a specific CSS selector,
            // which would be placed in your global CSS file. 
            // The class `[&::-webkit-scrollbar]:hidden` is often used if configured.
            // For max compatibility, add the class name you've configured for this.
            // Assuming you have 'scrollbar-hidden' defined, you would add:
            // className="flex-1 overflow-y-scroll w-full scrollbar-hidden"
          >
            
            {/* Header (Combined Search/Mobile Menu) */}
            <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-4 lg:p-6 sticky top-0 z-10">
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-full"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>

                {/* Search Bar (More prominent) */}
                <div className="relative flex-1">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search Thrynk, users, and topics..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm lg:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Post Input Section */}
            <div className="bg-white p-4 lg:p-6 shadow-sm border-b border-slate-100">
              <div className="flex gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
                  M
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="What&apos;s happening on Thrynk? 🤔"
                    rows={isPostInputFocused ? 3 : 1}
                    className="w-full text-base lg:text-lg border-none outline-none placeholder-slate-400 resize-none transition-all duration-300 overflow-hidden"
                    onFocus={() => setIsPostInputFocused(true)}
                    onBlur={() => setTimeout(() => setIsPostInputFocused(false), 100)} 
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />

                  {/* Post Actions */}
                  {isPostInputFocused && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 pt-4 border-t border-slate-100 gap-3">
                      <div className="flex flex-wrap gap-2 lg:gap-4">
                        <button className="flex items-center gap-1 text-blue-500 hover:bg-blue-50 px-2 py-1 rounded-full transition-colors" aria-label="Add photo"> <ImageIcon size={20} /> </button>
                        <button className="flex items-center gap-1 text-yellow-500 hover:bg-yellow-50 px-2 py-1 rounded-full transition-colors" aria-label="Add emoji"> <Smile size={20} /> </button>
                        <button className="flex items-center gap-1 text-red-500 hover:bg-red-50 px-2 py-1 rounded-full transition-colors" aria-label="Add location"> <MapPin size={20} /> </button>
                        <button className="flex items-center gap-1 text-purple-500 hover:bg-purple-50 px-2 py-1 rounded-full transition-colors" aria-label="Schedule post"> <Calendar size={20} /> </button>
                      </div>
                      <button 
                        className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all text-sm lg:text-base w-full sm:w-auto ${postContent.trim() ? '' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!postContent.trim()}
                      >
                        Post
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>


            {/* Posts */}
            <div className="p-3 lg:p-6 space-y-4 lg:space-y-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center text-xl lg:text-2xl flex-shrink-0">
                        {post.user.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-800 text-sm lg:text-base">
                            {post.user.name}
                          </h3>
                          {post.user.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-500 text-xs lg:text-sm">
                          {post.user.handle} • {post.time}
                        </p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 p-1" aria-label="More options">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <p className="text-slate-700 mb-4 text-sm lg:text-base leading-relaxed">
                    {post.content}
                  </p>

                  {post.image && (
                    <div className="mb-4 rounded-xl lg:rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 p-6 flex items-center justify-center">
                      <span className="text-4xl lg:text-6xl">{post.image}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button className="flex items-center gap-1 text-slate-500 hover:text-red-500 transition-colors group" aria-label="Like">
                      <div className="p-1 rounded-full group-hover:bg-red-50"> <Heart size={16} /> </div>
                      <span className="font-medium text-xs lg:text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-slate-500 hover:text-blue-500 transition-colors group" aria-label="Comment">
                      <div className="p-1 rounded-full group-hover:bg-blue-50"> <MessageCircle size={16} /> </div>
                      <span className="font-medium text-xs lg:text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-slate-500 hover:text-green-500 transition-colors group" aria-label="Repost">
                      <div className="p-1 rounded-full group-hover:bg-green-50"> <Repeat2 size={16} /> </div>
                    </button>
                    <button className="flex items-center gap-1 text-slate-500 hover:text-purple-500 transition-colors group" aria-label="Share">
                      <div className="p-1 rounded-full group-hover:bg-purple-50"> <Share size={16} /> </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs - Bottom Navigation */}
            <LowerTab activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
        
        {/* Right Sidebar - Hidden on mobile/tablet */}
        <RightSideBar />
      </div>
    </div>
  );
};

export default ThrynkPlatform;