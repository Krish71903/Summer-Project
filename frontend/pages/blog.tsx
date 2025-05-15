import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

// Mock data for blog posts (replace with actual data from your backend)
const blogPosts = [
  {
    id: 1,
    title: "How to Write a Resume That Stands Out in 2024",
    excerpt: "Learn the latest resume writing techniques and best practices to make your application stand out in today's competitive job market.",
    category: "Resume Tips",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/blog/resume-tips.jpg"
  },
  {
    id: 2,
    title: "AI in Job Search: What You Need to Know",
    excerpt: "Discover how artificial intelligence is transforming the job search process and how you can leverage it to your advantage.",
    category: "Career Insights",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "/blog/ai-job-search.jpg"
  },
  {
    id: 3,
    title: "Top Skills Employers Are Looking For in 2024",
    excerpt: "Stay ahead of the curve by learning about the most in-demand skills that employers are seeking this year.",
    category: "Career Development",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/blog/skills-2024.jpg"
  }
];

const categories = [
  "All Posts",
  "Resume Tips",
  "Career Insights",
  "Interview Preparation",
  "Career Development",
  "Industry Trends"
];

const Blog: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ResuMatch Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you advance your career
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  className="h-full w-full object-cover"
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {blogPosts[0].category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  className="w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest career tips and insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 