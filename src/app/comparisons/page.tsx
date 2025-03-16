import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Pencil, Code, ImageIcon, Video, 
  Mic, Bot, BookOpen, Briefcase, 
  Brain, BarChart, School, Gamepad 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tool Categories - Best AI Solutions by Use Case (2025)',
  description: 'Explore the best AI tools by category. Compare AI for writing, coding, image generation, video creation, business, and more with honest reviews and comparisons.',
};

// Define a comprehensive list of categories with their details
const categories = [
  {
    id: 'ai-writing-tools',
    title: 'AI Writing Tools',
    description: 'AI tools for content creation, copywriting, blogs, and marketing materials',
    icon: Pencil,
    color: 'from-indigo-500 to-blue-500',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    count: 15,
  },
  {
    id: 'ai-for-coding',
    title: 'AI Coding Tools',
    description: 'AI-powered coding assistants, code completion, and development tools',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    count: 12,
  },
  {
    id: 'ai-for-image-generation',
    title: 'AI Image Generation',
    description: 'Create stunning images, art, and graphics with AI generators',
    icon: ImageIcon,
    color: 'from-pink-500 to-purple-500',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    count: 10,
  },
  {
    id: 'ai-for-video-creation',
    title: 'AI Video Creation',
    description: 'Generate, edit and enhance videos with artificial intelligence',
    icon: Video,
    color: 'from-red-500 to-orange-500',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    count: 8,
  },
  {
    id: 'ai-for-voice-generation',
    title: 'AI Voice Generation',
    description: 'Text-to-speech and voice synthesis tools powered by AI',
    icon: Mic,
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    count: 7,
  },
  {
    id: 'ai-chatbots-assistants',
    title: 'AI Chatbots & Assistants',
    description: 'Conversational AI, chatbots, and general-purpose AI assistants',
    icon: Bot,
    color: 'from-violet-500 to-purple-500',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    count: 9,
  },
  {
    id: 'ai-for-education',
    title: 'AI for Education',
    description: 'Learning tools, tutoring assistants, and educational resources',
    icon: BookOpen,
    color: 'from-yellow-500 to-amber-500',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    count: 6,
  },
  {
    id: 'ai-for-business-marketing',
    title: 'AI for Business & Marketing',
    description: 'Tools for marketing, analytics, customer service, and business operations',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    count: 14,
  },
  {
    id: 'ai-for-productivity',
    title: 'AI for Productivity',
    description: 'Tools to automate tasks, enhance workflows, and boost productivity',
    icon: BarChart,
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    count: 11,
  },
  {
    id: 'ai-for-research',
    title: 'AI Research Tools',
    description: 'Tools for academic research, data analysis, and information synthesis',
    icon: Brain,
    color: 'from-teal-500 to-cyan-500',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    count: 5,
  },
  {
    id: 'ai-for-learning',
    title: 'AI Learning Platforms',
    description: 'Platforms to learn about AI, machine learning, and data science',
    icon: School,
    color: 'from-orange-500 to-amber-500',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    count: 4,
  },
  {
    id: 'ai-for-gaming',
    title: 'AI for Gaming',
    description: 'AI tools for game development, procedural generation, and gaming enhancements',
    icon: Gamepad,
    color: 'from-purple-500 to-fuchsia-500',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    count: 3,
  },
];

export default function CategoriesPage() {
  return (
    <main>
      {/* Header section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">AI Tool Categories</h1>
          <p className="text-xl max-w-3xl mb-6">
            Explore the best AI tools organized by category and use case. Find the perfect AI solution
            for your specific needs with our comprehensive reviews and comparisons.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/comparisons/${category.id}`}
                className={`bg-white rounded-xl border ${category.borderColor} p-6 shadow-sm hover:shadow-md transition flex flex-col h-full`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mr-4`}>
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold ${category.textColor}`}>{category.title}</h2>
                    <span className="text-xs text-gray-500">{category.count} tools compared</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {category.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Updated March 2025</span>
                  <span className={`inline-flex items-center ${category.textColor} font-medium text-sm`}>
                    Explore Category
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured comparison section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Comparisons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Assistants Comparison */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">ChatGPT vs Claude vs Gemini</h3>
              <p className="text-gray-700 mb-4">
                Compare the top AI assistants head-to-head. See which one has the best performance for your specific needs.
              </p>
              <Link 
                href="/comparisons/chatgpt-vs-claude-vs-gemini" 
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                View Comparison
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* AI Image Generators */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Midjourney vs DALL-E vs Stable Diffusion</h3>
              <p className="text-gray-700 mb-4">
                Which AI image generator creates the best images? See our detailed comparison with examples.
              </p>
              <Link 
                href="/comparisons/midjourney-vs-dalle-vs-stable-diffusion" 
                className="text-pink-600 hover:text-pink-800 font-medium flex items-center"
              >
                View Comparison
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* AI Writing Tools */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Jasper vs Copy.ai vs Writesonic</h3>
              <p className="text-gray-700 mb-4">
                Find the best AI writing tool for your content needs with our in-depth comparison.
              </p>
              <Link 
                href="/comparisons/jasper-vs-copyai-vs-writesonic" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View Comparison
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on AI Tools</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Subscribe to our newsletter for the latest AI tool reviews, comparisons, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="border p-3 rounded-l-xl outline-none w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-indigo-500 text-white p-3 rounded-r-xl hover:bg-indigo-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}