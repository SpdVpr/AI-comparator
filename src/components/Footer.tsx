'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Bot className="text-indigo-400" size={30} strokeWidth={1.5} />
              <span className="font-bold text-xl text-white">AI Comparator</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Independent AI tool reviews and comparisons to help you make informed decisions about the best AI solutions for your needs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} className="text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/comparisons" className="text-gray-400 hover:text-white transition-colors">
                  AI Categories
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  AI Tool Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tool Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">AI Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/comparisons/ai-writing-tools" className="text-gray-400 hover:text-white transition-colors">
                  AI Writing Tools
                </Link>
              </li>
              <li>
                <Link href="/comparisons/ai-for-image-generation" className="text-gray-400 hover:text-white transition-colors">
                  AI Image Generation
                </Link>
              </li>
              <li>
                <Link href="/comparisons/ai-chatbots-assistants" className="text-gray-400 hover:text-white transition-colors">
                  AI Chatbots & Assistants
                </Link>
              </li>
              <li>
                <Link href="/comparisons/ai-for-coding" className="text-gray-400 hover:text-white transition-colors">
                  AI Coding Tools
                </Link>
              </li>
              <li>
                <Link href="/comparisons/ai-for-video-creation" className="text-gray-400 hover:text-white transition-colors">
                  AI Video Creation
                </Link>
              </li>
              <li>
                <Link href="/comparisons/ai-for-business-marketing" className="text-gray-400 hover:text-white transition-colors">
                  AI for Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest AI tool reviews, comparisons, and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white border-gray-700"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <Mail size={18} />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} AI Comparator. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-500 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-600 text-xs">
            <p>AI Comparator is not affiliated with any of the AI tools reviewed on this website.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}