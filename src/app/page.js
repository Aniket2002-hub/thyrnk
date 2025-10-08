"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Home,
  Compass,
  Bell,
  MessageSquare,
  Bookmark,
  Camera,
  User,
  Plus,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  TrendingUp,
  Image,
  Smile,
  MapPin,
  Calendar,
} from "lucide-react";
import LeftSideBar from "./(components)/LeftSideBar";
import RightSideBar from "./(components)/RightSideBar";
import Explore from "./(components)/explore/page";


const ThrynkPlatform = () => {
  const [activeTab, setActiveTab] = useState("forYou");
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);

  const sidebarItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Explore", icon: Compass, link: "/explore" , active: false },
    { name: "Notification", icon: Bell },
    { name: "Messages", icon: MessageSquare },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Thrynk's Pick", icon: Camera },
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
    { key: "forYou", label: "For You", icon: TrendingUp, link: "/" },
    { key: "following", label: "Following", icon: Heart, link: "/following" },
    { key: "blogs", label: "Blogs", icon: MessageSquare, link: "/blogs" },
    { key: "news", label: "News", link: "/news" },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex overflow-hidden">
      {/* Left Sidebar - Fixed */}
      <LeftSideBar />

      {/* Right Side Content - Scrollable (Middle + Right Sidebar) */}
      <div className="flex-1 flex overflow-y-auto">
        {/* Feed */}
        <div className="flex-1 max-w-2xl">
          {/* Header */}
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

            {/* Post Input */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="What's on your Mind? 🤔"
                    className="w-full text-lg border-none outline-none placeholder-slate-400"
                    onFocus={() => setIsPostInputFocused(true)}
                    onBlur={() => setIsPostInputFocused(false)}
                  />

                  {/* Post Actions - Show when focused */}
                  {isPostInputFocused && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors">
                          <Image size={20} />
                          <span className="text-sm font-medium">Photo</span>
                        </button>
                        <button className="flex items-center gap-2 text-yellow-500 hover:bg-yellow-50 px-3 py-2 rounded-lg transition-colors">
                          <Smile size={20} />
                          <span className="text-sm font-medium">Emoji</span>
                        </button>
                        <button className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors">
                          <MapPin size={20} />
                          <span className="text-sm font-medium">Location</span>
                        </button>
                        <button className="flex items-center gap-2 text-purple-500 hover:bg-purple-50 px-3 py-2 rounded-lg transition-colors">
                          <Calendar size={20} />
                          <span className="text-sm font-medium">Schedule</span>
                        </button>
                      </div>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
                        Post
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="p-6 space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center text-2xl">
                      {post.user.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-800 text-lg">
                          {post.user.name}
                        </h3>
                        {post.user.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
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
                      <p className="text-slate-500">
                        {post.user.handle} • {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 p-2">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  {post.content}
                </p>

                {post.image && (
                  <div className="mb-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 p-8 flex items-center justify-center">
                    <span className="text-6xl">{post.image}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-red-50">
                      <Heart size={18} />
                    </div>
                    <span className="font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-blue-50">
                      <MessageCircle size={18} />
                    </div>
                    <span className="font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-green-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-green-50">
                      <Repeat2 size={18} />
                    </div>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-purple-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-purple-50">
                      <Share size={18} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs - At bottom of middle section */}
          <div className="bg-white/80 backdrop-blur-xl border-t border-slate-200/60 px-6 sticky bottom-0">
            <div className="flex">
              {tabs.map((tab) => (
                <Link
                  key={tab.key}
                  href={tab.link}
                  onClick={() =>
                    setActiveTab(tab.key === "forYou" ? "forYou" : tab.key)
                  }
                  className={`flex-1 flex items-center justify-center gap-2 py-4 border-t-2 transition-all duration-200 ${
                    activeTab === tab.key
                      ? "border-blue-500 text-blue-600 bg-blue-50/50"
                      : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-medium">{tab.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 p-6 space-y-6">
          {/* Thrynk's Pick */}
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-6 border border-emerald-200">
            <h3 className="font-bold text-emerald-800 mb-2">Thrynkefs Pick</h3>
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
        <RightSideBar />
      </div>
    </div>
  );
};

export default ThrynkPlatform;
