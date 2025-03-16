'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Define main navigation links
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'AI Categories', href: '/comparisons' },
    { name: 'AI Reviews', href: '/reviews' },
    { name: 'AI News', href: '/ai-news' },
  ];
  
  // Define dropdown categories
  const categories = [
    { name: 'AI Writing Tools', href: '/comparisons/ai-writing-tools' },
    { name: 'AI Coding Tools', href: '/comparisons/ai-for-coding' },
    { name: 'AI Image Generation', href: '/comparisons/ai-for-image-generation' },
    { name: 'AI Chatbots', href: '/comparisons/ai-chatbots-assistants' },
    { name: 'AI Video Creation', href: '/comparisons/ai-for-video-creation' },
    { name: 'View All Categories', href: '/comparisons', className: 'font-medium text-indigo-600' },
  ];
  
  // Function to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="text-indigo-600" size={30} strokeWidth={1.5} />
          <span className="font-bold text-xl text-gray-800">AI Comparator</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-1 items-center">
          {mainLinks.map(link => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md ${
                  isActive(link.href)
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                } transition`}
              >
                {link.name}
              </Link>
              
              {/* Dropdown for Categories link */}
              {link.name === 'AI Categories' && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50 transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top-left">
                  <div className="py-2">
                    {categories.map(category => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 ${category.className || ''}`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Button */}
          <Link
            href="/comparisons/ai-chatbots-assistants"
            className="ml-6 bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 transition"
          >
            Compare AI Tools
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {mainLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-4 ${
                  isActive(link.href)
                    ? 'text-indigo-600 font-medium bg-indigo-50 rounded-md'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md'
                } transition`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Categories in mobile menu */}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <p className="px-4 text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">
                Top Categories
              </p>
              {categories.slice(0, 5).map(category => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block py-2 px-4 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            
            {/* CTA Button in mobile menu */}
            <Link
              href="/comparisons/ai-chatbots-assistants"
              className="bg-indigo-500 text-white py-2 px-4 rounded-xl text-center hover:bg-indigo-600 transition mt-2"
              onClick={() => setIsOpen(false)}
            >
              Compare AI Tools
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}