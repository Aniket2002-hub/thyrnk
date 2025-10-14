"use client";

import React, { useState } from "react";
import {
  Search,
  Home,
  Compass,
  Bell,
  MessageSquare,
  Bookmark,
  User,
  Plus,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  TrendingUp,
  Image as ImageIcon,
  Smile,
  MapPin,
  Calendar,
  Menu,
  X,
  Users,
  Hash,
  UserPlus,
} from "lucide-react";

const ThrynkPlatform = () => {
  const [activeTab, setActiveTab] = useState("forYou");
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const sidebarItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Explore", icon: Compass, active: false }, // Added Explore back for completeness
    { name: "Notification", icon: Bell },
    { name: "Messages", icon: MessageSquare },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Thrynk Pick", icon: ImageIcon }, // Based on image
    { name: "Profile", icon: User },
    { name: "More", icon: MoreHorizontal },
  ];

  const posts = [
    {
      id: 1,
      user: {
        name: "Nitya Shri",
        handle: "@nityeshri",
        avatar: "👩‍💻",
        verified: true,
      },
      content: "Just baked a fresh batch chocolate chip cookies 🍪",
      image: "🍪",
      likes: 13,
      comments: 1816,
      time: "2h",
    },
    {
      id: 2,
      user: {
        name: "Alex Chen",
        handle: "@alextech",
        avatar: "👨‍💼",
        verified: true,
      },
      content:
        "Working on an exciting new AI project! The future of technology is here and it's absolutely mind-blowing 🚀✨",
      likes: 247,
      comments: 892,
      time: "4h",
    },
    {
      id: 3,
      user: {
        name: "Sarah Wilson",
        handle: "@sarahcreates",
        avatar: "👩‍🎨",
        verified: false,
      },
      content:
        "Just finished designing a new mobile app interface. Clean, minimal, and user-friendly! What do you think? 📱",
      image: "🎨",
      likes: 156,
      comments: 423,
      time: "6h",
    },
    {
      id: 4,
      user: {
        name: "David Kim",
        handle: "@daviddev",
        avatar: "👨‍💻",
        verified: true,
      },
      content:
        "Breaking: New JavaScript framework released! This could change everything we know about web development 🔥",
      likes: 892,
      comments: 1234,
      time: "8h",
    },
    {
      id: 5,
      user: {
        name: "Emma Rodriguez",
        handle: "@emmacreates",
        avatar: "👩‍🎨",
        verified: false,
      },
      content:
        "Just launched my new portfolio website! Took me 3 months to perfect every detail. Check it out! ✨",
      image: "💻",
      likes: 445,
      comments: 167,
      time: "12h",
    },
    {
      id: 6,
      user: {
        name: "Michael Johnson",
        handle: "@mikej",
        avatar: "👨‍🚀",
        verified: true,
      },
      content:
        "Space exploration update: New Mars rover footage is absolutely stunning! The future is here 🚀🔴",
      likes: 1567,
      comments: 892,
      time: "1d",
    },
  ];

  const tabs = [
    { key: "forYou", label: "For You", link: "#", icon: TrendingUp },
    { key: "following", label: "Following", link: "#", icon: Heart },
    { key: "blogs", label: "Blogs", link: "/blogs", icon: MessageSquare },
    // { key: "news", label: "News", link: "#", icon: Hash },
  ];

  const trending = [
    { topic: "AI Revolution", posts: "45.2K posts" },
    { topic: "WebDev", posts: "32.8K posts" },
    { topic: "Design Thinking", posts: "28.5K posts" },
  ];

  const suggestions = [
    { name: "Tech Innovators", handle: "@techinnovate", avatar: "🚀" },
    { name: "Design Community", handle: "@designhub", avatar: "🎨" },
    { name: "Code Masters", handle: "@codemasters", avatar: "💻" },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex overflow-hidden">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Left Sidebar - Responsive */}
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

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 flex overflow-hidden">
        {/* Feed - Center Column */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-4 lg:p-6 sticky top-0 z-10">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>

              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search Thrynk..."
                  className="w-full pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-slate-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm lg:text-base"
                />
              </div>
            </div>

            {/* Post Input */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100">
              <div className="flex gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  M
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="What&apos;s on your Mind? 🤔"
                    className="w-full text-base lg:text-lg border-none outline-none placeholder-slate-400"
                    onFocus={() => setIsPostInputFocused(true)}
                    onBlur={() => setIsPostInputFocused(false)}
                  />

                  {/* Post Actions */}
                  {isPostInputFocused && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 pt-4 border-t border-slate-100 gap-3">
                      <div className="flex flex-wrap gap-2 lg:gap-4">
                        <button className="flex items-center gap-1 lg:gap-2 text-blue-500 hover:bg-blue-50 px-2 lg:px-3 py-2 rounded-lg transition-colors" aria-label="Add photo">
                          <ImageIcon size={18} />
                          <span className="text-xs lg:text-sm font-medium">Photo</span>
                        </button>
                        <button className="flex items-center gap-1 lg:gap-2 text-yellow-500 hover:bg-yellow-50 px-2 lg:px-3 py-2 rounded-lg transition-colors" aria-label="Add emoji">
                          <Smile size={18} />
                          <span className="text-xs lg:text-sm font-medium hidden sm:inline">Emoji</span>
                        </button>
                        <button className="flex items-center gap-1 lg:gap-2 text-red-500 hover:bg-red-50 px-2 lg:px-3 py-2 rounded-lg transition-colors" aria-label="Add location">
                          <MapPin size={18} />
                          <span className="text-xs lg:text-sm font-medium hidden md:inline">Location</span>
                        </button>
                        <button className="flex items-center gap-1 lg:gap-2 text-purple-500 hover:bg-purple-50 px-2 lg:px-3 py-2 rounded-lg transition-colors" aria-label="Schedule post">
                          <Calendar size={18} />
                          <span className="text-xs lg:text-sm font-medium hidden md:inline">Schedule</span>
                        </button>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all text-sm lg:text-base w-full sm:w-auto">
                        Post
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="p-3 lg:p-6 space-y-4 lg:space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4 lg:mb-6">
                  <div className="flex gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center text-xl lg:text-2xl flex-shrink-0">
                      {post.user.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-800 text-sm lg:text-lg">
                          {post.user.name}
                        </h3>
                        {post.user.verified && (
                          <div className="w-4 h-4 lg:w-5 lg:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-2 h-2 lg:w-3 lg:h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-slate-500 text-xs lg:text-base">
                        {post.user.handle} • {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 p-2" aria-label="More options">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <p className="text-slate-700 mb-4 lg:mb-6 text-sm lg:text-lg leading-relaxed">
                  {post.content}
                </p>

                {post.image && (
                  <div className="mb-4 lg:mb-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 p-6 lg:p-8 flex items-center justify-center">
                    <span className="text-4xl lg:text-6xl">{post.image}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-1 lg:gap-2 text-slate-500 hover:text-red-500 transition-colors group" aria-label="Like">
                    <div className="p-1 lg:p-2 rounded-full group-hover:bg-red-50">
                      <Heart size={16} className="lg:w-5 lg:h-5" />
                    </div>
                    <span className="font-medium text-xs lg:text-base">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 lg:gap-2 text-slate-500 hover:text-blue-500 transition-colors group" aria-label="Comment">
                    <div className="p-1 lg:p-2 rounded-full group-hover:bg-blue-50">
                      <MessageCircle size={16} className="lg:w-5 lg:h-5" />
                    </div>
                    <span className="font-medium text-xs lg:text-base">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 lg:gap-2 text-slate-500 hover:text-green-500 transition-colors group" aria-label="Repost">
                    <div className="p-1 lg:p-2 rounded-full group-hover:bg-green-50">
                      <Repeat2 size={16} className="lg:w-5 lg:h-5" />
                    </div>
                  </button>
                  <button className="flex items-center gap-1 lg:gap-2 text-slate-500 hover:text-purple-500 transition-colors group" aria-label="Share">
                    <div className="p-1 lg:p-2 rounded-full group-hover:bg-purple-50">
                      <Share size={16} className="lg:w-5 lg:h-5" />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs - Bottom Navigation */}
          <div className="bg-white/80 backdrop-blur-xl border-t border-slate-200/60 sticky bottom-0">
            <div className="flex">
              {tabs.map((tab) => (
                <a
                  key={tab.key}
                  href={tab.link}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 lg:py-4 border-t-2 transition-all duration-200 ${
                    activeTab === tab.key
                      ? "border-blue-500 text-blue-600 bg-blue-50/50"
                      : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <tab.icon size={18} className="lg:hidden" />
                  <span className="font-medium text-xs lg:text-base">{tab.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile/tablet */}
        <div className="hidden xl:block w-80 border-l border-slate-200 overflow-y-auto bg-white">
          <div className="p-6">
            {/* What's Rising Section */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-500" />
                What&apos;s Rising
              </h2>
              <div className="space-y-4">
                {trending.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Trending</p>
                        <h3 className="font-bold text-slate-800">#{item.topic}</h3>
                        <p className="text-sm text-slate-500 mt-1">{item.posts}</p>
                      </div>
                      <button aria-label="More options">
                        <MoreHorizontal size={16} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who to Follow */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Users size={20} className="text-purple-500" />
                Who to Follow
              </h2>
              <div className="space-y-4">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-xl">
                          {suggestion.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-sm">
                            {suggestion.name}
                          </h3>
                          <p className="text-xs text-slate-500">{suggestion.handle}</p>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all flex items-center gap-1">
                        <UserPlus size={14} />
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThrynkPlatform;