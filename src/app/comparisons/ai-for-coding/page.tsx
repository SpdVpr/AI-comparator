import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';
import { aiCodingTools, keyCodingFeatures } from '@/data/aiCodingTools';

export const metadata: Metadata = {
  title: 'Best AI Coding Tools & Programming Assistants 2025',
  description: 'Discover the best AI coding tools and programming assistants in 2025. Independent reviews, pricing, features, performance tests, and exclusive trials.',
};

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
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
    id: 'cursor',
    name: 'Cursor',
    logo: '/images/logos/cursor.png',
    rating: 4.6,
    category: 'AI Coding',
    excerpt: 'Cursor: The AI-native code editor that could revolutionize your development workflow.',
    featuredImage: '/images/featured/cursor-review.jpg',
    updatedAt: 'March 12, 2025',
  },
];

export default function AICodingToolsPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI Coding Tools (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI programming assistants for code completion, debugging, refactoring, 
            and more. Independent reviews and performance benchmarks for developers.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-green-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Coding Tools
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI Is Revolutionizing Software Development</h2>
            <p className="text-gray-700 mb-4">
              AI coding tools harness the power of advanced language models to accelerate development workflows, 
              reduce boilerplate code, and help developers focus on solving complex problems rather than routine tasks. 
              From intelligent code completion to automated debugging, these tools are transforming how software is built.
            </p>
            <p className="text-gray-700 mb-6">
              We've thoroughly tested the leading AI programming assistants to help you find the perfect coding companion 
              for your specific needs. Our comparison includes both standalone tools and IDE integrations that support 
              various programming languages and development environments.
            </p>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Coding Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Code Quality</strong> - Evaluating accuracy, readability, and adherence to best practices</li>
                <li><strong>Completeness</strong> - Testing how well the tool understands complex development tasks</li>
                <li><strong>IDE Integration</strong> - Assessing compatibility with popular development environments</li>
                <li><strong>Language Support</strong> - Testing performance across multiple programming languages</li>
                <li><strong>Performance Impact</strong> - Measuring any latency or resource usage during coding</li>
                <li><strong>Real-World Tests</strong> - Having professional developers use each tool on actual projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Coding Tools Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and performance of the leading AI programming assistants available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiCodingTools}
            compareFeatures={keyCodingFeatures}
            categoryName="AI Coding Tools"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Coding Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Editor's Choice */}
            <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 text-green-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Editor's Choice
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub Copilot</h3>
              <p className="text-gray-700 mb-4">
                GitHub Copilot offers exceptional code completion with superior understanding of context 
                and intent, making it the gold standard for AI programming assistants.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.8)}
                </div>
                <span className="text-sm text-gray-500">$10/month</span>
              </div>
              <Link href="/reviews/github-copilot" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best Free Option */}
            <div className="bg-teal-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 text-teal-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best Free Option
              </div>
              <h3 className="text-xl font-bold mb-2">Codeium</h3>
              <p className="text-gray-700 mb-4">
                Codeium delivers impressive code completion capabilities completely free, making it
                an excellent option for individual developers and students.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.5)}
                </div>
                <span className="text-sm text-gray-500">Free</span>
              </div>
              <Link href="/reviews/codeium" className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Most Innovative */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Most Innovative
              </div>
              <h3 className="text-xl font-bold mb-2">Cursor</h3>
              <p className="text-gray-700 mb-4">
                Cursor reimagines the code editor with native AI integration, offering powerful features 
                like whole-repository understanding and advanced code search.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.6)}
                </div>
                <span className="text-sm text-gray-500">$20/month (Free tier available)</span>
              </div>
              <Link href="/reviews/cursor" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Coding Tool Reviews</h2>
          
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
                    <span className="inline-flex items-center text-green-600 font-medium text-sm">
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
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition font-medium"
            >
              View All AI Coding Reviews
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
                What are AI coding tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI coding tools are software applications that use artificial intelligence to assist 
                  developers with programming tasks. They can suggest code completions, generate entire functions
                  based on comments, help with debugging, refactor existing code, explain code functionality,
                  and even translate between programming languages. Most modern AI coding assistants are powered
                  by large language models (LLMs) that have been trained on extensive code repositories.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI coding assistants worth the subscription fee?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  For many professional developers, AI coding tools provide significant return on investment by
                  boosting productivity, reducing time spent on routine coding tasks, and helping solve complex
                  problems more efficiently. Studies show that developers using tools like GitHub Copilot can
                  complete tasks up to 55% faster than those coding without AI assistance. However, the value
                  depends on your specific needs, the programming languages you work with, and how effectively
                  you integrate the tool into your development workflow. Many tools also offer free tiers with
                  substantial functionality.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI-generated code suggestions reliable and secure?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI coding tools can generate high-quality code, but their suggestions should always be 
                  reviewed by developers before implementation. While these tools are trained on vast code
                  repositories, they can occasionally suggest code with bugs, security vulnerabilities, or
                  inefficient implementations. The best practice is to use AI coding assistants as collaborative
                  tools that augment your expertise rather than replace critical thinking. For security-sensitive
                  applications, it's particularly important to carefully review all AI-generated code and run
                  appropriate security checks.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Which programming languages are best supported by AI coding tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Most AI coding assistants provide strong support for popular programming languages like Python,
                  JavaScript, TypeScript, Java, C#, and C++. However, the quality of suggestions can vary by language
                  based on the training data available. Newer languages or niche frameworks might have less robust
                  support. In our testing, Python and JavaScript typically receive the best-quality suggestions across
                  all tools, while language-specific tools like Amazon's CodeWhisperer excel at languages commonly used
                  in their ecosystems (like Java for AWS services).
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can AI coding tools help beginners learn to program?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI coding tools can be valuable learning aids for beginners, offering suggestions that demonstrate
                  proper syntax, code patterns, and programming approaches. Tools that provide explanations for 
                  suggested code (like Cursor or GitHub Copilot with explanation features) can be particularly
                  helpful for learning. However, beginners should be cautious not to become overly reliant on AI
                  suggestions, as understanding fundamental programming concepts is still essential. The best approach
                  for learners is to use AI tools as supplementary resources alongside structured learning materials
                  and to practice writing code independently.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Development Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI coding tools and find the perfect assistant for your programming needs.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Coding Tools
          </Link>
        </div>
      </section>
    </main>
  );
}