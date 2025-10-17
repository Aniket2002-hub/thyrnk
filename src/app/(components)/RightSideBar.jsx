import React from 'react'
// ✅ Fix: Import all required icons from your library
import {
  TrendingUp,
  MoreHorizontal,
  Users,
  UserPlus
} from 'lucide-react'; // Replace 'lucide-react' with your actual icon library

const RightSideBar = () => {

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
    <>
      {/* 1. ✅ CHANGE: Removed 'overflow-y-auto' from the outer div. 
         2. ✅ CHANGE: Added 'overflow-y-scroll' to enable scrolling. 
         3. ✅ CHANGE: Added inline styles for cross-browser scrollbar hiding.
      */}
      <div 
        className="hidden xl:block w-80 border-l border-slate-200 bg-white"
        style={{ 
          overflowY: 'scroll', // Re-enables scrolling explicitly
          msOverflowStyle: 'none', // Hides scrollbar in IE/Edge
          scrollbarWidth: 'none', // Hides scrollbar in Firefox
        }}
      >
        {/* Note: For Chrome/Safari, you must add a dedicated class to your global CSS 
            (e.g., `.hide-scrollbar::-webkit-scrollbar { display: none; }`) 
            and apply it here. For now, the inline styles handle other major browsers.
        */}
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
    </>
  )
}

export default RightSideBar