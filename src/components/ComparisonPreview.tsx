// src/components/ComparisonPreview.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ComparisonPreview = () => {
  // Sample data for tools
  const tools = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      logo: '/images/logos/chatgpt.png',
      rating: 4.7,
      description: 'Versatile AI assistant for conversation, content creation, and programming',
      price: 'Free / $20 monthly',
      bestFeature: 'Versatility and ease of use'
    },
    {
      id: 'claude',
      name: 'Claude AI',
      logo: '/images/logos/claude.png',
      rating: 4.9,
      description: 'Highly intelligent AI assistant with focus on factual accuracy and ethics',
      price: 'Free / $20 monthly',
      bestFeature: 'Enhanced reasoning and 200K token context'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      logo: '/images/logos/gemini.png',
      rating: 4.6,
      description: 'Google AI with excellent integration into Google ecosystem',
      price: 'Free / $20 monthly',
      bestFeature: 'Integration with Google services'
    },
    {
      id: 'perplexity',
      name: 'Perplexity',
      logo: '/images/logos/perplexity.png',
      rating: 4.7,
      description: 'Research assistant with citations and web search capability',
      price: 'Free / $20 monthly',
      bestFeature: 'Real-time source citations'
    }
  ];

  // Function to render stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400' : 'text-gray-300'} ${i === fullStars && hasHalfStar ? 'text-yellow-400' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🔍 Compare the Best AI Tools in 2025</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find out which AI tool is best for your needs. Our independent comparison helps you choose the right tool for your requirements.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    AI Tool
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Best Feature
                  </th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tools.map((tool, index) => (
                  <tr 
                    key={tool.id} 
                    className={`${index === 0 ? 'bg-indigo-50' : 'hover:bg-gray-50'} transition-colors`}
                  >
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        {index === 0 && (
                          <span className="flex-shrink-0 mr-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                            #1
                          </span>
                        )}
                        <div className="flex-shrink-0 h-10 w-10 relative">
                          {tool.logo ? (
                            <Image
                              src={tool.logo}
                              alt={`${tool.name} logo`}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-600 font-medium">{tool.name.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                          <div className="text-sm text-gray-500">{tool.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      {renderStars(tool.rating)}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{tool.bestFeature}</span>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{tool.price}</span>
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/reviews/${tool.id}`}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Review
                      </Link>
                      <Link
                        href={`/comparisons/${tool.id}`}
                        className="bg-indigo-600 text-white py-1 px-3 rounded-full hover:bg-indigo-700 transition-colors"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/comparisons/ai-tools" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Complete AI Assistant Comparison →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonPreview;