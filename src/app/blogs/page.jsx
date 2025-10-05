
"use client";
import React from "react";
import {
  Calendar,
  Eye,
  MessageCircle,
  Heart,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import LeftSideBar from "../(components)/LeftSideBar";

// Mock blog data
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
    image: "/api/placeholder/200/120",
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
    image: "/api/placeholder/200/120",
    category: "Life",
  },
  {
    id: 3,
    title: "Wherever I Go ChatGPT Follows Me",
    description: "The internet is not dead, we're just lynching it",
    author: "Alberto Romero",
    timeAgo: "3h ago",
    reads: 432,
    image: "/api/placeholder/200/120",
    category: "AI",
  },
  {
    id: 4,
    title: "Building Scalable React Applications",
    description:
      "Learn the best practices for creating maintainable and performant React apps",
    author: "Sarah Chen",
    platform: "React Weekly",
    timeAgo: "5h ago",
    reads: 289,
    image: "/api/placeholder/200/120",
    category: "React",
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
    category: "Web Dev",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Left Sidebar (fixed) */}
      <div className="hidden lg:block fixed left-0 top-0 h-full">
        <LeftSideBar />
      </div>

      {/* Middle Content */}
      <div className="flex-1 lg:ml-80 lg:mr-80 py-10 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Discover Blogs
          </h1>
          <p className="text-gray-600">
            Stories, insights, and expertise from writers on any topic.
          </p>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Blog Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3 text-sm text-gray-600">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                      {post.platform
                        ? post.platform.charAt(0)
                        : post.author.charAt(0)}
                    </div>
                    <span>
                      {post.platform && `in ${post.platform} `}
                      by <span className="font-medium">{post.author}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                          <MessageCircle size={14} />
                          {post.responses}
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

                {/* Blog Thumbnail */}
                <div className="w-full sm:w-40 h-28 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs">📝</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar (fixed) */}
      <aside className="hidden lg:block fixed right-0 top-0 h-full w-80 overflow-y-auto border-l border-gray-200 bg-white">
        <div className="p-6 space-y-6">
          {/* Recommended Topics */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">
              Recommended Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Programming",
                "React",
                "AI",
                "Web Dev",
                "Python",
                "JavaScript",
                "Design",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Authors */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">
              Featured Authors
            </h3>
            <div className="space-y-3">
              {["Mark Andrews", "Daniel Williams", "Alberto Romero"].map(
                (author) => (
                  <div
                    key={author}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {author.charAt(0)}
                    </div>
                    <span>{author}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;

