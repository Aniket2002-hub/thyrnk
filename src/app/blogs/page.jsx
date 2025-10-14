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
  Calendar,
  Eye,
  Menu,
  X,
  Image,
  TrendingUp,
  Users,
  UserPlus,
  Smile,
  MapPin,
} from "lucide-react";

const BlogPage = () => {
  // Set the initial active tab to 'blogs' to match the user's intent to view the 'Blogs' page
  // The original image shows 'For You' as active, but the user is asking about the 'Blogs' view.
  // I will assume 'blogs' should be the active one in this component, but you can change it back to 'forYou'.
  const [activeTab, setActiveTab] = useState("blogs");
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);

  const sidebarItems = [
    { name: "Home", icon: Home, active: false, link: "/" },
    { name: "Explore", icon: Compass, active: false },
    { name: "Notification", icon: Bell },
    { name: "Messages", icon: MessageSquare },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Thrynk Pick", icon: Image },
    { name: "Profile", icon: User },
    { name: "More", icon: MoreHorizontal },
  ];

  const tabs = [
    { key: "forYou", label: "For You", link: "/" },
    { key: "following", label: "Following", link: "#" },
    { key: "blogs", label: "Blogs", link: "/blogs" },
    // { key: "news", label: "News", link: "#" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "When RAM Runs Out: Exploring Virtual Memory with Python",
      description:
        "A hands-on guide to paging, partitioning, and coding a memory usage monitor with psutil",
      author: "Mark Andrews",
      platform: "Python in Plain English",
      timeAgo: "2d ago",
      reads: 101,
      image: "💻",
      category: "Programming",
    },
    {
      id: 2,
      title: "You Can't Fire Me, I AM Fire",
      description: "Before phones, we stared at the flames in our hands",
      author: "Daniel Williams",
      platform: "Zenite",
      timeAgo: "1d ago",
      reads: 668,
      responses: 15,
      image: "🔥",
      category: "Life",
    },
    {
      id: 3,
      title: "Wherever I Go ChatGPT Follows Me",
      description: "The internet is not dead, we're just lynching it",
      author: "Alberto Romero",
      platform: "AI Insights",
      timeAgo: "3h ago",
      reads: 432,
      image: "🤖",
      category: "AI",
    },
    {
      id: 4,
      title: "The Future of Web Development in 2025",
      description: "Exploring emerging trends and technologies that will shape the next generation of web applications",
      author: "Sarah Chen",
      platform: "Tech Forward",
      timeAgo: "5h ago",
      reads: 892,
      responses: 23,
      image: "🌐",
      category: "Web Dev",
    },
    {
      id: 5,
      title: "Building Scalable Microservices with Node.js",
      description: "Best practices and architectural patterns for creating robust distributed systems",
      author: "Michael Rodriguez",
      platform: "Backend Mastery",
      timeAgo: "1d ago",
      reads: 567,
      responses: 12,
      image: "⚙️",
      category: "Backend",
    },
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
          onClick={() => setIsMobileMenuMenuOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`fixed lg:relative w-64 h-full bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 lg:transform-none ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
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
              onClick={() => setIsMobileMenuMenuOpen(false)}
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
                onClick={() => item.link && (window.location.href = item.link)}
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

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Blog Feed - Center Column */}
        <div className="flex-1 overflow-y-auto">
          {/* Header (Search and Post Input) - Sticky */}
          <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-4 lg:p-6 sticky top-0 z-10">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
              <button
                onClick={() => setIsMobileMenuMenuOpen(true)}
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

            {/* What's on your Mind Section */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100">
              <div className="flex gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">M</div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="What's on your Mind? 🤔"
                    className="w-full text-base lg:text-lg border-none outline-none placeholder-slate-400"
                    onFocus={() => setIsPostInputFocused(true)}
                    onBlur={() => setIsPostInputFocused(false)}
                  />

                  {isPostInputFocused && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 pt-4 border-t border-slate-100 gap-3">
                      <div className="flex flex-wrap gap-2 lg:gap-4">
                        <button className="flex items-center gap-1 lg:gap-2 text-blue-500 hover:bg-blue-50 px-2 lg:px-3 py-2 rounded-lg transition-colors" aria-label="Add photo">
                          <Image size={18} />
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
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all text-sm lg:text-base w-full sm:w-auto">Post</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Feed Area */}
          <div className="pb-20">
            {/* IN-LINE Tabs (For You, Following, Blogs) - MOVED HERE */}
            <div className="flex border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-[182px] lg:top-[194px] z-10">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center py-4 transition-all duration-200 text-sm lg:text-base font-medium ${
                    activeTab === tab.key
                      ? "border-b-4 border-blue-500 text-blue-600"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="p-3 lg:p-6 space-y-4 lg:space-y-6">
              {/* Conditional Title based on activeTab (optional) */}
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 capitalize">
                {activeTab === 'blogs' ? 'Blog Articles' : activeTab === 'forYou' ? 'Posts For You' : 'Following Feed'}
              </h1>
              
              {/* Only show blog posts if 'blogs' tab is active for this demo */}
              {activeTab === 'blogs' ? (
                blogPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => window.location.href = `/blog/${post.id}`}
                    className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                      {/* Blog Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3 text-sm text-slate-600">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                            {post.platform ? post.platform.charAt(0) : post.author.charAt(0)}
                          </div>
                          <span className="text-xs lg:text-sm">
                            in <span className="font-medium">{post.platform}</span> by{" "}
                            <span className="font-medium">{post.author}</span>
                          </span>
                        </div>

                        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-slate-600 mb-4 text-sm lg:text-base line-clamp-2">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {post.timeAgo}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye size={14} />
                              {post.reads}
                            </span>
                            {post.responses && (
                              <span className="flex items-center gap-1">
                                <MessageSquare size={14} />
                                {post.responses}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="Like" onClick={(e) => e.stopPropagation()}>
                              <Heart size={16} className="text-slate-400 hover:text-red-500" />
                            </button>
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="Bookmark" onClick={(e) => e.stopPropagation()}>
                              <Bookmark size={16} className="text-slate-400 hover:text-blue-500" />
                            </button>
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="More options" onClick={(e) => e.stopPropagation()}>
                              <MoreHorizontal size={16} className="text-slate-400" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="w-full sm:w-32 lg:w-40 h-24 lg:h-28 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl lg:text-4xl">{post.image}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-500">
                  Content for the **{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}** tab would go here.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block w-80 border-l border-slate-200 overflow-y-auto bg-white">
          <div className="p-6">
            {/* What's Rising Section */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-500" />
                What's Rising
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

      {/* REMOVED: Tabs - Bottom Navigation (Fixed) - as requested by the user */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/60 z-30 lg:left-64">
        ... Tabs logic was here ...
      </div> 
      */}
    </div>
  );
};

export default BlogPage;