"use client";
import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation"; // ✅ IMPORT useParams from next/navigation
import Link from 'next/link'; // Import Link for navigation
import {
  Search, Home, Compass, Bell, MessageSquare, Bookmark, User, Plus, MoreHorizontal, Heart, Calendar, Eye, Menu, X, ArrowLeft, Image, Smile, MapPin, TrendingUp, Users, UserPlus, Share,
} from "lucide-react";

// NOTE: In a real Next.js app, LeftSideBar, RightSideBar, etc., should be imported
// and the entire layout should ideally be defined in a Layout component.
// For this monolithic file, we are defining the layout logic directly.

const BlogDetailsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPostInputFocused, setIsPostInputFocused] = useState(false);
  
  // 1. ✅ GET ID FROM URL PARAMS
  const params = useParams();
  const postId = Number(params.id); 

  // --- DATA DEFINITION (Combined into the component) ---
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

  // NOTE: This array would ideally be fetched from an API in a production app.
  const allBlogPosts = [
    { id: 1, title: "When RAM Runs Out: Exploring Virtual Memory with Python", description: "A hands-on guide to paging, partitioning, and coding a memory usage monitor with psutil", author: "Mark Andrews", platform: "Python in Plain English", timeAgo: "2d ago", reads: 101, responses: 15, image: "💻", category: "Programming", content: `When your computer's RAM is full, your operating system doesn't just give up...`, },
    { id: 2, title: "You Can't Fire Me, I AM Fire", description: "Before phones, we stared at the flames in our hands", author: "Daniel Williams", platform: "Zenite", timeAgo: "1d ago", reads: 668, responses: 15, image: "🔥", category: "Life", content: `This is the content for blog post 2...`, },
    { id: 3, title: "Wherever I Go ChatGPT Follows Me", description: "The internet is not dead, we're just lynching it", author: "Alberto Romero", platform: "AI Insights", timeAgo: "3h ago", reads: 432, responses: 10, image: "🤖", category: "AI", content: `This is the content for blog post 3...`, },
  ];
  
  // 2. ✅ FIND THE CORRECT POST
  const post = useMemo(() => {
    return allBlogPosts.find(b => b.id === postId);
  }, [postId]);


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
    { id: 2, title: "Understanding Python Memory Management", author: "Sarah Chen", reads: 234, },
    { id: 3, title: "Optimizing Performance in Python Applications", author: "Michael Rodriguez", reads: 456, },
  ];
  // --- END DATA/LOGIC ---

  // Handle case where post is not found (e.g., ID is invalid)
  if (!post) {
    return (
        <div className="h-screen flex items-center justify-center text-xl text-slate-700 bg-slate-50">
            Post not found. Invalid ID: {postId}
        </div>
    );
  }

  // Use the detailed content provided in your original 'post' object for display
  const displayContent = post.content || `Content for post ID ${postId}`;


  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex justify-center overflow-hidden">
        {/* Outer wrapper for centering */}
        <div className="flex w-full h-full max-w-[1300px]">
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Left Sidebar (Monolithic integration) */}
            <div
                className={`fixed lg:relative w-64 h-full bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 lg:transform-none ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="p-6">
                    {/* ... Sidebar header and navigation mapping remains the same ... */}
                    <div className="flex items-center justify-between mb-8 lg:block">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><span className="text-white font-bold text-xl">T</span></div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Thrynk</h1>
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg" aria-label="Close menu"><X size={24} /></button>
                    </div>

                    <nav className="space-y-2 cursor-pointer">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => item.link && (window.location.href = item.link)}
                                className={`w-full flex items-center gap-4 px-4 py-3 cursor-pointer rounded-xl transition-all ${item.active ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" : "text-slate-600 hover:bg-slate-100"}`}
                            >
                                <item.icon size={22} />
                                <span className="font-medium">{item.name}</span>
                            </button>
                        ))}
                    </nav>

                    <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <Plus size={20} /> Post
                    </button>
                </div>
            </div>

            {/* Center Content Column (Blog Detail) */}
            <div className="flex-1 flex overflow-hidden max-w-[700px] border-r border-l border-slate-200">
                <div className="flex-1 overflow-y-auto" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    {/* Sticky Header with Search (Optional for detail page, kept for consistency) */}
                    <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 p-4 lg:p-6 sticky top-0 z-10">
                        <div className="flex items-center gap-4">
                            <Link href="/blogs" legacyBehavior>
                                <a className="p-2 hover:bg-slate-100 rounded-full text-slate-700 transition-colors" aria-label="Back to blogs">
                                    <ArrowLeft size={24} />
                                </a>
                            </Link>
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                <input type="text" placeholder="Search Thrynk..." className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full border-none" />
                            </div>
                        </div>
                    </div>

                    <div className="p-3 lg:p-6">
                        <article className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-md border border-slate-100">
                            {/* Author/Meta Info */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">{post.author.charAt(0)}</div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-base lg:text-lg">{post.author}</h3>
                                    <p className="text-slate-500 text-sm">
                                        {post.platform} • {post.timeAgo}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Title and Metadata */}
                            <h1 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-4 lg:mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-100">
                                <span className="flex items-center gap-1"><Calendar size={16} /> {post.timeAgo}</span>
                                <span className="flex items-center gap-1"><Eye size={16} /> {post.reads} reads</span>
                                <span className="flex items-center gap-1"><MessageSquare size={16} /> {post.responses} responses</span>
                            </div>

                            {/* Main Image/Emoji */}
                            <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-12 flex items-center justify-center">
                                <span className="text-6xl lg:text-8xl">{post.image}</span>
                            </div>

                            {/* Blog Content */}
                            <div className="prose prose-slate max-w-none">
                                {/* Using dangerouslySetInnerHTML if content contains Markdown/HTML, or simply using text content */}
                                <div className="text-slate-700 text-base lg:text-lg leading-relaxed space-y-4 whitespace-pre-line">
                                    {displayContent}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-500 rounded-full transition-colors font-medium">
                                    <Heart size={18} /><span>{post.reads}</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-500 rounded-full transition-colors font-medium">
                                    <MessageSquare size={18} /><span>{post.responses}</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-purple-50 text-slate-600 hover:text-purple-500 rounded-full transition-colors font-medium">
                                    <Share size={18} /> Share
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-500 rounded-full transition-colors font-medium ml-auto">
                                    <Bookmark size={18} />
                                </button>
                            </div>
                        </article>

                        {/* Related Articles */}
                        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Related Articles</h2>
                            <div className="space-y-3">
                                {relatedPosts.map((related) => (
                                    <Link key={related.id} href={`/blog/${related.id}`} legacyBehavior>
                                        <a
                                            className="block p-4 bg-slate-50 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors"
                                        >
                                            <h3 className="font-semibold text-slate-800 mb-1">{related.title}</h3>
                                            <p className="text-sm text-slate-500">
                                                by {related.author} • {related.reads} reads
                                            </p>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar (Monolithic integration) */}
            <div className="hidden xl:block w-80 border-l border-slate-200 overflow-y-auto bg-white">
                <div className="p-6">
                    {/* What's Rising Section */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6">
                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <TrendingUp size={20} className="text-blue-500" /> What's Rising
                        </h2>
                        <div className="space-y-4">
                            {trending.map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl hover:shadow-md transition-all cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">Trending</p>
                                            <h3 className="font-bold text-slate-800">#{item.topic}</h3>
                                            <p className="text-sm text-slate-500 mt-1">{item.posts}</p>
                                        </div>
                                        <button aria-label="More options"><MoreHorizontal size={16} className="text-slate-400" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who to Follow */}
                    <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Users size={20} className="text-purple-500" /> Who to Follow
                        </h2>
                        <div className="space-y-4">
                            {suggestions.map((suggestion, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl hover:shadow-md transition-all">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-xl">{suggestion.avatar}</div>
                                            <div>
                                                <h3 className="font-bold text-slate-800 text-sm">{suggestion.name}</h3>
                                                <p className="text-xs text-slate-500">{suggestion.handle}</p>
                                            </div>
                                        </div>
                                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all flex items-center gap-1">
                                            <UserPlus size={14} /> Follow
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