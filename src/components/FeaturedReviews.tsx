// src/components/FeaturedReviews.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  logo: string;
  rating: number;
  category: string;
  excerpt: string;
  label?: string;
  labelColor?: string;
}

const FeaturedReviews: React.FC = () => {
  // Sample data for reviews
  const reviews: ReviewItem[] = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      logo: '/images/logos/chatgpt.png',
      rating: 4.7,
      category: 'AI Assistant',
      excerpt: 'Comprehensive review of ChatGPT and ChatGPT Plus. Is it still the best AI assistant in 2025?',
      label: 'Editor\'s Choice',
      labelColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      id: 'jasper-ai',
      name: 'Jasper AI',
      logo: '/images/logos/jasper.png',
      rating: 4.8,
      category: 'AI Writing',
      excerpt: 'Is Jasper AI the most powerful content creation tool for marketers and writers?',
      label: 'Best for Marketing',
      labelColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'midjourney',
      name: 'Midjourney',
      logo: '/images/logos/midjourney.png',
      rating: 4.9,
      category: 'AI Image Generation',
      excerpt: 'Our in-depth review of Midjourney v6, the leading AI image generator in 2025.',
      label: 'Best Images',
      labelColor: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      logo: '/images/logos/github-copilot.png',
      rating: 4.8,
      category: 'AI Coding',
      excerpt: 'Is GitHub Copilot worth it for developers? Our detailed review and performance tests.',
      label: 'Best for Coding',
      labelColor: 'bg-green-100 text-green-800',
    }
  ];

  // Function to render stars based on rating
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">📝 Latest AI Tool Reviews</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our detailed, independent reviews of the most popular AI tools in 2025. We test and analyze each tool so you don't have to.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Link 
              key={review.id}
              href={`/reviews/${review.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      {review.logo && (
                        <Image 
                          src={review.logo} 
                          alt={`${review.name} logo`}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <span className="text-sm text-gray-500">{review.category}</span>
                    </div>
                  </div>
                  
                  {review.label && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${review.labelColor}`}>
                      {review.label}
                    </span>
                  )}
                </div>
                
                <div className="mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {review.excerpt}
                </p>
                
                <div className="flex justify-end mt-auto">
                  <span className="inline-flex items-center text-indigo-600 font-medium text-sm">
                    Read full review
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/reviews" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;