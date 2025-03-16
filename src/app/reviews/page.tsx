// src/app/reviews/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tool Reviews - Detailed & Independent Analysis (2025)',
  description: 'Explore our comprehensive AI tool reviews. Honest, in-depth analysis of features, pricing, and performance of the most popular AI tools in 2025.',
};

// Types for review data
interface ReviewItem {
  id: string;
  name: string;
  logo: string;
  rating: number;
  category: string;
  excerpt: string;
  featuredImage?: string;
  updatedAt: string;
  label?: string;
  labelColor?: string;
}

export default function ReviewsPage() {
  // This would ideally come from a database or CMS
  const reviews: ReviewItem[] = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      logo: '/images/logos/chatgpt.png',
      rating: 4.7,
      category: 'AI Assistant',
      excerpt: 'Comprehensive review of ChatGPT and ChatGPT Plus. Is it still the best AI assistant in 2025?',
      featuredImage: '/images/featured/chatgpt-review.jpg',
      updatedAt: 'March 10, 2025',
      label: 'Editor\'s Choice',
      labelColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      id: 'claude',
      name: 'Claude AI',
      logo: '/images/logos/claude.png',
      rating: 4.9,
      category: 'AI Assistant',
      excerpt: 'Claude AI review: Is Anthropic\'s Claude the most accurate AI assistant in 2025?',
      featuredImage: '/images/featured/claude-review.jpg',
      updatedAt: 'March 8, 2025',
      label: 'Most Accurate',
      labelColor: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'jasper-ai',
      name: 'Jasper AI',
      logo: '/images/logos/jasper.png',
      rating: 4.8,
      category: 'AI Writing',
      excerpt: 'Is Jasper AI the most powerful content creation tool for marketers and writers?',
      featuredImage: '/images/featured/jasper-review.jpg',
      updatedAt: 'March 5, 2025',
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
      featuredImage: '/images/featured/midjourney-review.jpg',
      updatedAt: 'March 3, 2025',
      label: 'Best Images',
      labelColor: 'bg-pink-100 text-pink-800',
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      logo: '/images/logos/github-copilot.png',
      rating: 4.8,
      category: 'AI Coding',
      excerpt: 'Is GitHub Copilot worth it for developers? Our detailed review and performance tests.',
      featuredImage: '/images/featured/github-copilot-review.jpg',
      updatedAt: 'February 28, 2025',
      label: 'Best for Coding',
      labelColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'gemini',
      name: 'Gemini AI',
      logo: '/images/logos/gemini.png',
      rating: 4.6,
      category: 'AI Assistant',
      excerpt: 'Google\'s Gemini AI reviewed: How does it compare to ChatGPT and Claude?',
      featuredImage: '/images/featured/gemini-review.jpg',
      updatedAt: 'February 25, 2025',
    },
    {
      id: 'dalle-3',
      name: 'DALL-E 3',
      logo: '/images/logos/dalle.png',
      rating: 4.7,
      category: 'AI Image Generation',
      excerpt: 'DALL-E 3 review: OpenAI\'s latest image generator put to the test.',
      featuredImage: '/images/featured/dalle-review.jpg',
      updatedAt: 'February 20, 2025',
    },
    {
      id: 'copy-ai',
      name: 'Copy.ai',
      logo: '/images/logos/copyai.png',
      rating: 4.5,
      category: 'AI Writing',
      excerpt: 'Copy.ai review: Is it the best budget-friendly AI writing assistant?',
      featuredImage: '/images/featured/copyai-review.jpg',
      updatedAt: 'February 15, 2025',
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      logo: '/images/logos/perplexity.png',
      rating: 4.7,
      category: 'AI Research Assistant',
      excerpt: 'Perplexity AI Pro review: Is it worth paying for this AI research assistant?',
      featuredImage: '/images/featured/perplexity-review.jpg',
      updatedAt: 'February 10, 2025',
      label: 'Best Research Tool',
      labelColor: 'bg-teal-100 text-teal-800',
    },
    {
      id: 'leonardo-ai',
      name: 'Leonardo.ai',
      logo: '/images/logos/leonardo.png',
      rating: 4.6,
      category: 'AI Image Generation',
      excerpt: 'Leonardo.ai review: The best AI image generator for game developers?',
      featuredImage: '/images/featured/leonardo-review.jpg',
      updatedAt: 'February 5, 2025',
    },
    {
      id: 'writesonic',
      name: 'Writesonic',
      logo: '/images/logos/writesonic.png',
      rating: 4.4,
      category: 'AI Writing',
      excerpt: 'Writesonic review: How does it stack up against other AI writing tools?',
      featuredImage: '/images/featured/writesonic-review.jpg',
      updatedAt: 'January 30, 2025',
    },
    {
      id: 'codeium',
      name: 'Codeium',
      logo: '/images/logos/codeium.png',
      rating: 4.5,
      category: 'AI Coding',
      excerpt: 'Codeium review: The free alternative to GitHub Copilot worth considering?',
      featuredImage: '/images/featured/codeium-review.jpg',
      updatedAt: 'January 25, 2025',
    },
    {
      id: 'replit',
      name: 'Replit',
      logo: '/images/logos/replit.png',  // Ujistěte se, že máte tento obrázek
      rating: 4.6,
      category: 'AI Coding',  // Důležité: musí odpovídat existující kategorii
      excerpt: 'Replit review: Is it the best cloud IDE for collaborative coding and learning?',
      featuredImage: '/images/featured/replit-review.jpg',  // Budete potřebovat i tento obrázek
      updatedAt: 'March 15, 2025',
    },

  ];

  // Group reviews by category
  const categories = reviews.reduce((acc, review) => {
    if (!acc[review.category]) {
      acc[review.category] = [];
    }
    acc[review.category].push(review);
    return acc;
  }, {} as Record<string, ReviewItem[]>);

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
    <main>
      {/* Header section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">AI Tool Reviews</h1>
          <p className="text-xl max-w-3xl mb-6">
            Comprehensive, independent reviews of the best AI tools in 2025. 
            We thoroughly test each tool so you can make informed decisions.
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(categories).map((category) => (
              <a 
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews by category */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured reviews section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Reviews</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.filter(r => r.label).slice(0, 2).map((review) => (
                <Link 
                  key={review.id}
                  href={`/reviews/${review.id}`}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow h-72"
                >
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  {review.featuredImage && (
                    <Image 
                      src={review.featuredImage} 
                      alt={`${review.name} review`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  
                  {/* Content */}
                  <div className="relative z-20 h-full p-6 flex flex-col justify-between text-white">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                            {review.logo && (
                              <Image 
                                src={review.logo} 
                                alt={`${review.name} logo`}
                                width={30}
                                height={30}
                                className="rounded-full"
                              />
                            )}
                          </div>
                          <span className="font-bold">{review.name}</span>
                        </div>
                        
                        {review.label && (
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                            {review.label}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{review.name} Review</h3>
                      <p className="text-white/80 mb-4">{review.excerpt}</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-1 text-sm">{review.rating}</span>
                        </div>
                      </div>
                      
                      <span className="text-sm flex items-center">
                        Updated: {review.updatedAt}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Reviews by category */}
          {Object.entries(categories).map(([category, categoryReviews]) => (
            <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-20">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{category} Reviews</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryReviews.map((review) => (
                  <Link 
                    key={review.id}
                    href={`/reviews/${review.id}`}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100"
                  >
                    {/* Featured image */}
                    {review.featuredImage && (
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={review.featuredImage} 
                          alt={`${review.name} review thumbnail`}
                          fill
                          className="object-cover"
                        />
                        {review.label && (
                          <span className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${review.labelColor || 'bg-gray-100 text-gray-800'}`}>
                            {review.label}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                          {review.logo && (
                            <Image 
                              src={review.logo} 
                              alt={`${review.name} logo`}
                              width={25}
                              height={25}
                              className="rounded-full"
                            />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{review.name}</h3>
                          <span className="text-xs text-gray-500">Updated: {review.updatedAt}</span>
                        </div>
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
            </section>
          ))}
          
          {/* Coming soon section */}
          <section className="mt-16">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">More Reviews Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                We're constantly testing and reviewing new AI tools. Subscribe to our newsletter to get notified when we publish new reviews.
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
        </div>
      </div>
    </main>
  );
}