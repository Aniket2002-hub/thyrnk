'use client';
import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  Bell, 
  MessageSquare, 
  Bookmark, 
  User, 
  Heart,
  MessageCircle,
  Share,
  MoreHorizontal,
  ChevronLeft,
  Calendar,
  Eye
} from 'lucide-react';

// Mock data for blogs
const blogPosts = [
  {
    id: 1,
    title: "When RAM Runs Out: Exploring Virtual Memory with Python",
    description: "A hands-on guide to paging, partitioning, and coding a memory usage monitor with psutil",
    author: "Mark Andrews",
    platform: "Python in Plain English",
    timeAgo: "2d ago",
    reads: 101,
    image: "/api/placeholder/200/120",
    category: "Programming"
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
    image: "/api/placeholder/200/120",
    category: "Life"
  },
  {
    id: 3,
    title: "Wherever I Go ChatGPT Follows Me",
    description: "The internet is not dead, we're just lynching it",
    author: "Alberto Romero",
    platform: "",
    timeAgo: "3h ago",
    reads: 432,
    image: "/api/placeholder/200/120",
    category: "AI"
  },
  {
    id: 4,
    title: "Building Scalable React Applications",
    description: "Learn the best practices for creating maintainable and performant React apps",
    author: "Sarah Chen",
    platform: "React Weekly",
    timeAgo: "5h ago",
    reads: 289,
    image: "/api/placeholder/200/120",
    category: "React"
  },
  {
    id: 5,
    title: "The Future of Web Development",
    description: "Exploring emerging technologies and trends shaping the web",
    author: "Alex Thompson",
    platform: "Tech Insights",
    timeAgo: "1d ago",
    reads: 156,
    responses: 8,
    image: "/api/placeholder/200/120",
    category: "Web Dev"
  }
];

const sampleBlogContent = {
  1: {
    content: `
# When RAM Runs Out: Exploring Virtual Memory with Python

Virtual memory is one of the most fascinating concepts in computer science, yet it often remains abstract for many developers. Today, we'll dive deep into how operating systems manage memory when physical RAM becomes scarce, and we'll build a practical memory monitor using Python.

## Understanding Virtual Memory

When your computer runs out of physical RAM, the operating system doesn't just crash. Instead, it employs a clever technique called virtual memory, which uses your hard drive as an extension of RAM.

### How It Works

1. **Paging**: The OS divides memory into fixed-size blocks called pages
2. **Swapping**: Less frequently used pages are moved to disk
3. **Translation**: Virtual addresses are mapped to physical addresses

Let's explore this with some Python code:

\`\`\`python
import psutil
import time

def monitor_memory():
    memory = psutil.virtual_memory()
    swap = psutil.swap_memory()
    
    print(f"Total RAM: {memory.total / (1024**3):.2f} GB")
    print(f"Available RAM: {memory.available / (1024**3):.2f} GB")
    print(f"Memory Usage: {memory.percent}%")
    print(f"Swap Usage: {swap.percent}%")

# Monitor memory every 5 seconds
while True:
    monitor_memory()
    time.sleep(5)
\`\`\`

This simple script gives you real-time insights into your system's memory usage, helping you understand when virtual memory kicks in.
    `,
    publishDate: "September 21, 2025",
    readTime: "8 min read"
  }
};

const BlogInterface = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'blogs', 'post'
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTab, setActiveTab] = useState('For You');

  const sidebarItems = [
    { icon: Home, label: 'Home', key: 'home' },
    { icon: Search, label: 'Explore', key: 'explore' },
    { icon: Bell, label: 'Notification', key: 'notification' },
    { icon: MessageSquare, label: 'Messages', key: 'messages' },
    { icon: Bookmark, label: 'Bookmarks', key: 'bookmarks' },
    { icon: User, label: "Thrynk's Pick", key: 'pick' },
    { icon: User, label: 'Profile', key: 'profile' }
  ];

  const handleBlogClick = (post) => {
    setSelectedPost(post);
    setCurrentView('post');
  };

  const handleBackToBlogs = () => {
    setCurrentView('blogs');
    setSelectedPost(null);
  };

  const renderSidebar = () => (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Thrynk</h1>
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <button
            key={item.key}
            onClick={() => item.key === 'home' ? setCurrentView('home') : null}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
              currentView === item.key 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  const renderHomeView = () => (
    <div className="flex-1 ml-64">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">M</span>
            </div>
            <input
              type="text"
              placeholder="What's on your Mind? 🤔"
              className="bg-gray-50 rounded-full px-4 py-2 w-96 text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex space-x-8">
          {/* Main Feed */}
          <div className="flex-1">
            {/* Navigation Tabs */}
            <div className="flex space-x-8 border-b border-gray-200 mb-6">
              {['For You', 'Following', 'Blogs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab === 'Blogs') setCurrentView('blogs');
                  }}
                  className={`pb-3 px-1 relative ${
                    activeTab === tab 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sample Post */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">N</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-800">Nitya Shri</span>
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-500">@nityeshri • 2h</span>
                  </div>
                  <p className="text-gray-800 mt-2">Just baked a fresh batch chocolate chip cookies 🍪</p>
                  
                  {/* Cookie Image */}
                  <div className="mt-4 bg-yellow-50 rounded-lg p-8 flex justify-center">
                    <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center text-2xl">
                      🍪
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-6">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Thrynk's Pick</h3>
              <p className="text-gray-600">We have to Do it!</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-4">What's Rising</h3>
              <div className="space-y-3">
                <div className="h-2 bg-blue-200 rounded"></div>
                <div className="h-2 bg-blue-300 rounded w-3/4"></div>
                <div className="h-2 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Today's News</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📰</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Breaking News</p>
                    <p className="text-sm text-gray-500">AI revolution continues</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">💻</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Tech Updates</p>
                    <p className="text-sm text-gray-500">New framework released</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlogsView = () => (
    <div className="flex-1 ml-64 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Blogs</h1>
          <p className="text-gray-600">Discover stories, thinking, and expertise from writers on any topic.</p>
        </div>

        <div className="flex space-x-8">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleBlogClick(post)}
              >
                <div className="flex space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {post.platform ? post.platform.charAt(0) : post.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {post.platform && `in ${post.platform} `}
                        by <span className="font-medium">{post.author}</span>
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{post.timeAgo}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{post.reads}</span>
                        </span>
                        {post.responses && (
                          <span className="flex items-center space-x-1">
                            <MessageCircle size={14} />
                            <span>{post.responses}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Heart size={16} className="text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Bookmark size={16} className="text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <MoreHorizontal size={16} className="text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-32 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"><span class="text-white text-xs">📝</span></div>';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Recommended Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Programming', 'React', 'AI', 'Web Dev', 'Python', 'JavaScript', 'Design'].map((topic) => (
                  <span 
                    key={topic}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Featured Authors</h3>
              <div className="space-y-3">
                {['Mark Andrews', 'Daniel Williams', 'Alberto Romero'].map((author) => (
                  <div key={author} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{author.charAt(0)}</span>
                    </div>
                    <span className="text-gray-700">{author}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPostView = () => {
    if (!selectedPost || !sampleBlogContent[selectedPost.id]) return null;
    
    const content = sampleBlogContent[selectedPost.id];
    
    return (
      <div className="flex-1 ml-64 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <button 
              onClick={handleBackToBlogs}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4"
            >
              <ChevronLeft size={20} />
              <span>Back to Blogs</span>
            </button>
          </div>

          {/* Article Content */}
          <article className="p-6">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{selectedPost.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{selectedPost.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{selectedPost.author}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{content.publishDate}</span>
                    <span>•</span>
                    <span>{content.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100">
                  <Heart size={16} />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100">
                  <MessageCircle size={16} />
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100">
                  <Share size={16} />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full hover:bg-yellow-100">
                  <Bookmark size={16} />
                  <span>Save</span>
                </button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: content.content.replace(/\n/g, '<br>').replace(/```python(.*?)```/gs, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code class="text-sm">$1</code></pre>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>').replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>').replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>').replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mt-4 mb-2">$1</h3>')
              }} />
            </div>

            {/* Related Posts */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">More from {selectedPost.author}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.filter(post => post.id !== selectedPost.id).slice(0, 2).map((post) => (
                  <div 
                    key={post.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleBlogClick(post)}
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">{post.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.timeAgo}</span>
                      <span>{post.reads} reads</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {renderSidebar()}
      
      {currentView === 'home' && renderHomeView()}
      {currentView === 'blogs' && renderBlogsView()}
      {currentView === 'post' && renderPostView()}
    </div>
  );
};

export default BlogInterface;