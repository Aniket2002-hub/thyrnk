"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  Calendar,
  Eye,
  MessageCircle,
  Heart,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";
import LeftSideBar from "../../(components)/LeftSideBar";

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
    content:
      "When your RAM is full, your OS uses a part of your disk as 'virtual memory'... (long blog content here)",
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
    content:
      "Once upon a time, people sat by real fires instead of scrolling through glowing screens...",
  },
];

const BlogDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const post = blogPosts.find((b) => b.id === Number(id));

  if (!post) {
    return (
      <div className="text-center mt-20 text-gray-600">
        <p>Blog not found</p>
        <Link href="/blogs" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <div className="hidden lg:block fixed left-0 top-0 h-full">
        <LeftSideBar />
      </div>

      <div className="flex-1 lg:ml-80 lg:mr-80 py-10 px-6">
        <Link href="/blogs" className="text-blue-500 underline mb-6 inline-block">
          ← Back to blogs
        </Link>

        <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="text-gray-700 font-medium">{post.author}</span>
            <span className="text-gray-500 text-sm">• {post.timeAgo}</span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-60 object-cover rounded-lg mb-6"
          />

          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

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

export default BlogDetailsPage;
