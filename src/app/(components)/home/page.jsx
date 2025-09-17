"use client";

import React, { useState } from 'react';
import { Search, Home, Bell, Mail, Bookmark, User, MoreHorizontal, Heart, MessageCircle, Repeat2, Share, Settings } from 'lucide-react';

const TwitterClone = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const [isComposerFocused, setIsComposerFocused] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 p-4 border-r border-gray-800 fixed h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Thrynk</h1>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center bg-gray-900 rounded-full px-4 py-2">
            <Search size={20} className="text-gray-500 mr-3" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>
        
        <nav className="space-y-2 mb-8">
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer">
            <Home size={24} />
            <span className="text-xl">Home</span>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer">
            <Bell size={24} />
            <span className="text-xl">Notifications</span>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer">
            <Mail size={24} />
            <span className="text-xl">Messages</span>
          </div>
          {/* <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer">
            
            <span className="text-xl">Thrynk's Pick</span>
          </div> */}
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer">
            <Bookmark size={24} />
            <span className="text-xl ">Bookmarks</span>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer">
            <User size={24} />
            <span className="text-xl">Profile</span>
          </div>
        </nav>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mb-8">
          + Create
        </button>
        
        <div className="mt-auto">
          <div className="text-xl mb-2 ml-12">More</div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="font-bold">M</span>
            </div>
            <div>
              <div className="font-bold">Manan</div>
              <div className="text-gray-500">@Manan</div>
            </div>
            <MoreHorizontal size={20} className="ml-auto" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="flex">
          {/* Feed */}
          <div className="flex-1 max-w-2xl border-r border-gray-800">
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800">
              <div className="flex">
                <button 
                  onClick={() => setActiveTab('For You')}
                  className={`flex-1 p-4 text-center hover:bg-gray-900 ${activeTab === 'For You' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                >
                  For You
                </button>
                <button 
                  onClick={() => setActiveTab('Following')}
                  className={`flex-1 p-4 text-center hover:bg-gray-900 ${activeTab === 'Following' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                >
                  Following
                </button>
                <button 
                  onClick={() => setActiveTab('Blogs')}
                  className={`flex-1 p-4 text-center hover:bg-gray-900 ${activeTab === 'Blogs' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                >
                  Blogs
                </button>
                <button 
                  onClick={() => setActiveTab('Pinned')}
                  className={`flex-1 p-4 text-center hover:bg-gray-900 ${activeTab === 'Pinned' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                >
                  📌 Pinned
                </button>
              </div>
            </div>

            {/* Tweet Composer */}
            <div className="border-b border-gray-800 p-4">
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">M</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <select className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      <option>🌍 Post to Public</option>
                    </select>
                  </div>
                  <textarea 
                    placeholder="What's on your mind ?" 
                    className="w-full bg-transparent text-xl placeholder-gray-500 resize-none outline-none mb-4"
                    rows="3"
                    onFocus={() => setIsComposerFocused(true)}
                    onBlur={(e) => {
                      // Only hide if clicking outside the composer area
                      if (!e.relatedTarget || !e.currentTarget.parentElement.contains(e.relatedTarget)) {
                        setIsComposerFocused(false);
                      }
                    }}
                  />
                  {isComposerFocused && (
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4 text-blue-400">
                        <button>😊</button>
                        <button>📷</button>
                        <button>🔗</button>
                        <button>💡</button>
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-bold">
                        Post
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sample Post */}
            <div className="border-b border-gray-800 p-4">
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="font-bold">S</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold">Suzuki</span>
                    <span className="text-blue-400">Follow</span>
                    <span className="text-gray-500">@suzuki39 · 39M</span>
                    <MoreHorizontal size={16} className="ml-auto text-gray-500" />
                  </div>
                  
                  {/* Post Content - Drawing */}
                  <div className="mb-3">
                    <div className="bg-gray-900 rounded-2xl p-6 mb-3">
                      <div className="flex items-center justify-center h-64">
                        {/* Simple drawing representation */}
                        <div className="text-center">
                          <div className="text-6xl mb-4">☀️</div>
                          <div className="text-4xl mb-4">⛰️🏠⛰️</div>
                          <div className="text-3xl mb-2">🌳 👤 🌳</div>
                          <div className="text-2xl">🌸🌸🌸</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-500 max-w-md">
                    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                      <MessageCircle size={18} />
                      <span>26</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
                      <Repeat2 size={18} />
                      <span>38</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-red-400 cursor-pointer">
                      <Heart size={18} />
                      <span>012</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                      <Share size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 p-4">
            {/* You May Know */}
            <div className="bg-gray-900 rounded-2xl p-4 mb-4">
              <h3 className="text-xl font-bold mb-3">You May Know</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-bold">User 1</div>
                      <div className="text-gray-500 text-sm">@user1</div>
                    </div>
                  </div>
                  <button className="bg-white text-black px-4 py-1 rounded-full font-bold hover:bg-gray-200">
                    Follow
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
                    <div>
                      <div className="font-bold">User 2</div>
                      <div className="text-gray-500 text-sm">@user2</div>
                    </div>
                  </div>
                  <button className="bg-white text-black px-4 py-1 rounded-full font-bold hover:bg-gray-200">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            {/* What's Trending */}
            <div className="bg-gray-900 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold">What's Trending</h3>
                <Settings size={18} className="text-gray-500" />
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-gray-500 text-sm"># Hashtag Trending</div>
                  <div className="font-bold"># Artificial Intelligence</div>
                  <div className="text-gray-500 text-sm">Trending Technology</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm"># Politics Trending</div>
                  <div className="font-bold"># Politics Election 2024</div>
                  <div className="text-gray-500 text-sm">Trending Bangladesh</div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-700">
                  <h4 className="font-bold mb-2">Today's News</h4>
                  <div className="space-y-2 text-sm">
                    <div>Trump is dead?</div>
                    <div>Salman Khan Jobs Marked?</div>
                    <div>India World #1 Kickstorm?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterClone;