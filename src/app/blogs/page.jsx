"use client";
import React from "react";
import Link from "next/link";
import {
  Calendar,
  Eye,
  MessageCircle,
  Heart,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import LeftSideBar from "../(components)/LeftSideBar";

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
  title: "You Can&apos;t Fire Me, I AM Fire",
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
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Left Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full">
        <LeftSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-80 lg:mr-80 py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer mt-4">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Blog Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2space-y-3  mb-3 text-sm text-gray-600 ">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        {post.platform
                          ? post.platform.charAt(0)
                          : post.author.charAt(0)}
                      </div>
                      <span>
                        {post.platform && `in ${post.platform} `}by{" "}
                        <span className="font-medium">{post.author}</span>
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>

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

                  {/* Image */}
                  <div className="w-full sm:w-40 h-28 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Link>
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
