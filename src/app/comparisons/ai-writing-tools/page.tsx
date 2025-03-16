import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';
import { aiWritingTools, keyWritingFeatures } from '@/data/aiWritingTools';

export const metadata: Metadata = {
  title: 'Best AI Writing Tools & Copywriting Assistants 2025',
  description: 'Discover the best AI writing tools and copywriting assistants in 2025. Independent reviews, pricing, speed, accuracy tests, and exclusive trials.',
};

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
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
    id: 'writesonic',
    name: 'Writesonic',
    logo: '/images/logos/writesonic.png',
    rating: 4.4,
    category: 'AI Writing',
    excerpt: 'Writesonic review: How does it stack up against other AI writing tools?',
    featuredImage: '/images/featured/writesonic-review.jpg',
    updatedAt: 'January 30, 2025',
  },
];

export default function AIWritingToolsPage() {
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI Writing Tools (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI writing assistants and copywriting tools for creating content, blogs, 
            marketing copy, and more. Independent reviews and performance tests.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Writing Tools
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI Can Transform Your Writing Process</h2>
            <p className="text-gray-700 mb-4">
              AI writing tools leverage advanced language models to help you create content faster and more efficiently. 
              Whether you're a marketer, blogger, copywriter, or student, the right AI assistant can dramatically improve 
              your productivity and content quality.
            </p>
            <p className="text-gray-700 mb-6">
              We've tested the leading AI writing tools to help you find the perfect solution for your specific needs. 
              Our comparison includes both general-purpose AI assistants and specialized copywriting tools that excel 
              in different areas.
            </p>

            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Writing Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Content Quality</strong> - Evaluating grammar, coherence, creativity, and factual accuracy</li>
                <li><strong>User Experience</strong> - Testing interface design, ease of use, and learning curve</li>
                <li><strong>Versatility</strong> - Examining supported content types and templates</li>
                <li><strong>Price-to-Value</strong> - Analyzing pricing structures relative to features offered</li>
                <li><strong>Real-World Tests</strong> - Having professional writers use each tool for actual projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Writing Tools Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and performance of the leading AI writing assistants available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiWritingTools}
            compareFeatures={keyWritingFeatures}
            categoryName="AI Writing Tools"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Writing Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Editor's Choice */}
            <div className="bg-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 text-indigo-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Editor's Choice
              </div>
              <h3 className="text-xl font-bold mb-2">Jasper AI</h3>
              <p className="text-gray-700 mb-4">
                Jasper AI offers the most comprehensive content creation solution with superior quality outputs and 
                excellent team collaboration features.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.8)}
                </div>
                <span className="text-sm text-gray-500">Starts at $49/month</span>
              </div>
              <Link href="/reviews/jasper-ai" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best Value */}
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 text-purple-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best Value
              </div>
              <h3 className="text-xl font-bold mb-2">Writesonic</h3>
              <p className="text-gray-700 mb-4">
                Writesonic delivers an excellent balance of features and affordability, making it 
                ideal for small businesses and content creators on a budget.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.6)}
                </div>
                <span className="text-sm text-gray-500">Starts at $19/month</span>
              </div>
              <Link href="/reviews/writesonic" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best Free Option */}
            <div className="bg-teal-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 text-teal-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best Free Option
              </div>
              <h3 className="text-xl font-bold mb-2">ChatGPT</h3>
              <p className="text-gray-700 mb-4">
                ChatGPT offers powerful content generation capabilities for free, making it an 
                excellent starting point for those new to AI writing tools.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.3)}
                </div>
                <span className="text-sm text-gray-500">Free / $20/month</span>
              </div>
              <Link href="/reviews/chatgpt" className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Writing Tool Reviews</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedReviews.map((review) => (
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
          
          <div className="text-center mt-8">
            <Link 
              href="/reviews" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition font-medium"
            >
              View All AI Writing Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What are AI writing tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI writing tools are software applications that use artificial intelligence and natural language
                  processing to generate, improve, or edit written content. They can help with creating blog posts,
                  marketing copy, emails, social media posts, and more. Most modern AI writing tools are powered by
                  large language models (LLMs) like GPT-4, Claude, or custom proprietary models.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI writing tools worth the money?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  For many professionals, AI writing tools provide excellent return on investment by saving time,
                  improving productivity, and helping overcome writer's block. Content marketers, copywriters, 
                  bloggers, and business owners often find that these tools can dramatically speed up their 
                  content creation process. However, the value depends on your specific needs, content volume,
                  and how effectively you integrate the tool into your workflow.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Which AI writing tool is best for SEO content?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  For SEO-focused content, tools like Surfer SEO and Frase offer specialized features that analyze
                  search results and make recommendations for optimizing your content. Jasper AI with its Surfer 
                  integration also provides excellent SEO capabilities. The best tool depends on your specific 
                  workflow and whether you need integrated SEO analysis or prefer to use a separate SEO tool
                  alongside your AI writing assistant.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can AI writing tools replace human writers?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Current AI writing tools work best as assistants rather than replacements for human writers. 
                  While they can generate drafts, suggestions, and help overcome writer's block, they still lack
                  deep subject matter expertise, true creativity, and the ability to infuse content with authentic
                  human experience. The most effective approach is to use AI tools to handle routine writing tasks
                  and first drafts, allowing human writers to focus on refinement, fact-checking, adding unique
                  insights, and maintaining brand voice.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How accurate is the content created by AI writing tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Factual accuracy varies significantly among AI writing tools. General-purpose tools like ChatGPT
                  and Claude can sometimes generate plausible-sounding but incorrect information (hallucinations).
                  Specialized tools that incorporate research capabilities, like Perplexity AI, tend to be more
                  accurate as they can retrieve and cite information. For any important content, especially in
                  fields like medicine, law, or finance, human fact-checking remains essential regardless of which
                  AI tool you use.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Writing Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI writing tools and find the perfect assistant for your needs.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Writing Tools
          </Link>
        </div>
      </section>
    </main>
  );
}