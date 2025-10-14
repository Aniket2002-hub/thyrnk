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
  ArrowLeft,
  Image,
  Smile,
  MapPin,
  TrendingUp,
  Users,
  UserPlus,
  Share,
} from "lucide-react";

const BlogDetailsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);

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

  const post = {
    id: 1,
    title: "When RAM Runs Out: Exploring Virtual Memory with Python",
    description:
      "A hands-on guide to paging, partitioning, and coding a memory usage monitor with psutil",
    author: "Mark Andrews",
    platform: "Python in Plain English",
    timeAgo: "2d ago",
    reads: 101,
    responses: 15,
    image: "💻",
    category: "Programming",
    content: `When your computer's RAM is full, your operating system doesn't just give up. Instead, it uses a clever technique called virtual memory to keep everything running smoothly. In this comprehensive guide, we'll explore how virtual memory works and build our own memory usage monitor using Python.

Understanding Virtual Memory

Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources that are available on a given machine. It creates an illusion for users of a very large memory by treating a portion of secondary storage (like a hard disk) as though it were main memory.

The operating system divides memory into pages (typically 4KB each) and swaps these pages between RAM and disk as needed. This process is called paging, and it allows your system to run programs that require more memory than physically available.

Building a Memory Monitor with Python

Let's build a simple memory monitor using Python's psutil library. This tool will help us understand how our system manages memory in real-time.

First, install psutil and then create a script that tracks your system's memory usage. The script continuously monitors RAM and swap usage, displaying key metrics every 5 seconds.

Key Concepts to Remember

1. Page Faults: When a program tries to access a page that's not in RAM, the OS must fetch it from disk
2. Thrashing: When your system spends more time swapping pages than executing programs
3. Working Set: The set of pages a program actively uses

Understanding these concepts will help you write more efficient code and better diagnose performance issues in your applications.`,
  };

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

  const relatedPosts = [
    {
      id: 2,
      title: "Understanding Python Memory Management",
      author: "Sarah Chen",
      reads: 234,
    },
    {
      id: 3,
      title: "Optimizing Performance in Python Applications",
      author: "Michael Rodriguez",
      reads: 456,
    },
  ];

  // const BlogDetailsPage = () => {
  const params = useParams();
  // const { id } = params;
  // const post = blogPosts.find((b) => b.id === Number(id));

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex overflow-hidden">
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed lg:relative w-64 h-full bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 lg:transform-none ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
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

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-4 lg:p-6 sticky top-0 z-10">
            <div className="flex items-center gap-4 mb-4 lg:mb-6">
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

            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100">
              <div className="flex gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  M
                </div>
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
                        <button
                          className="flex items-center gap-1 lg:gap-2 text-blue-500 hover:bg-blue-50 px-2 lg:px-3 py-2 rounded-lg transition-colors"
                          aria-label="Add photo"
                        >
                          <Image size={18} />
                          <span className="text-xs lg:text-sm font-medium">
                            Photo
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-1 lg:gap-2 text-yellow-500 hover:bg-yellow-50 px-2 lg:px-3 py-2 rounded-lg transition-colors"
                          aria-label="Add emoji"
                        >
                          <Smile size={18} />
                          <span className="text-xs lg:text-sm font-medium hidden sm:inline">
                            Emoji
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-1 lg:gap-2 text-red-500 hover:bg-red-50 px-2 lg:px-3 py-2 rounded-lg transition-colors"
                          aria-label="Add location"
                        >
                          <MapPin size={18} />
                          <span className="text-xs lg:text-sm font-medium hidden md:inline">
                            Location
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-1 lg:gap-2 text-purple-500 hover:bg-purple-50 px-2 lg:px-3 py-2 rounded-lg transition-colors"
                          aria-label="Schedule post"
                        >
                          <Calendar size={18} />
                          <span className="text-xs lg:text-sm font-medium hidden md:inline">
                            Schedule
                          </span>
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

          <div className="p-3 lg:p-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blogs
            </button>

            <article className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-800 text-base lg:text-lg">
                      {post.author}
                    </h3>
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
                  </div>
                  <p className="text-slate-500 text-sm">
                    {post.platform} • {post.timeAgo}
                  </p>
                </div>
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 lg:mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.timeAgo}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {post.reads} reads
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare size={16} />
                  {post.responses} responses
                </span>
              </div>

              <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-12 flex items-center justify-center">
                <span className="text-6xl lg:text-8xl">{post.image}</span>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="text-slate-700 text-base lg:text-lg leading-relaxed space-y-4 whitespace-pre-line">
                  {post.content}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-500 rounded-full transition-colors font-medium">
                  <Heart size={18} />
                  <span>{post.reads}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-500 rounded-full transition-colors font-medium">
                  <MessageSquare size={18} />
                  <span>{post.responses}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-purple-50 text-slate-600 hover:text-purple-500 rounded-full transition-colors font-medium">
                  <Share size={18} />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-500 rounded-full transition-colors font-medium ml-auto">
                  <Bookmark size={18} />
                </button>
              </div>
            </article>

            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Related Articles
              </h2>
              <div className="space-y-3">
                {relatedPosts.map((related) => (
                  <div
                    key={related.id}
                    className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors"
                  >
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      by {related.author} • {related.reads} reads
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block w-80 border-l border-slate-200 overflow-y-auto bg-white">
          <div className="p-6">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-500" />
                What's Rising
              </h2>
              <div className="space-y-4">
                {trending.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Trending</p>
                        <h3 className="font-bold text-slate-800">
                          #{item.topic}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                          {item.posts}
                        </p>
                      </div>
                      <button aria-label="More options">
                        <MoreHorizontal size={16} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Users size={20} className="text-purple-500" />
                Who to Follow
              </h2>
              <div className="space-y-4">
                {suggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
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
                          <p className="text-xs text-slate-500">
                            {suggestion.handle}
                          </p>
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

export default BlogDetailsPage;
