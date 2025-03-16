import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';
import { aiChatbotTools, keyChatbotFeatures } from '@/data/aiChatbotTools';

export const metadata: Metadata = {
  title: 'Best AI Chatbots & Virtual Assistants 2025',
  description: 'Discover the best AI chatbots and virtual assistants in 2025. Independent reviews, performance tests, features comparison, and exclusive trials.',
};

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
  {
    id: 'claude-ai',
    name: 'Claude AI',
    logo: '/images/logos/claude.png',
    rating: 4.9,
    category: 'AI Chatbot',
    excerpt: 'Is Claude AI the most nuanced and thoughtful AI assistant available today?',
    featuredImage: '/images/featured/claude-review.jpg',
    updatedAt: 'March 10, 2025',
    label: 'Best for Knowledge Work',
    labelColor: 'bg-purple-100 text-purple-800',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: '/images/logos/chatgpt.png',
    rating: 4.7,
    category: 'AI Chatbot',
    excerpt: 'ChatGPT review: How does OpenAIs flagship assistant perform for everyday tasks?',
    featuredImage: '/images/featured/chatgpt-review.jpg',
    updatedAt: 'February 28, 2025',
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    logo: '/images/logos/perplexity.png',
    rating: 4.5,
    category: 'AI Chatbot',
    excerpt: 'Perplexity AI review: Is this research-focused AI the best choice for factual answers?',
    featuredImage: '/images/featured/perplexity-review.jpg',
    updatedAt: 'February 12, 2025',
  },
];

export default function AIChatbotsPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI Chatbots & Assistants (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI chatbots and virtual assistants for research, productivity, 
            customer service, and more. Independent reviews and performance testing.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Chatbots
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI Chatbots Can Transform Your Workflow</h2>
            <p className="text-gray-700 mb-4">
              AI chatbots and virtual assistants have evolved from simple rule-based systems to sophisticated 
              conversational AI powered by large language models. These tools can answer questions, perform research, 
              assist with brainstorming, automate tasks, and even engage in nuanced discussions on complex topics.
            </p>
            <p className="text-gray-700 mb-6">
              We've tested the leading AI chatbots to help you find the perfect assistant for your specific needs. 
              Our comparison includes general-purpose assistants, research-focused AI, specialized customer service chatbots, 
              and productivity tools.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Chatbots</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Response Quality</strong> - Evaluating coherence, accuracy, and helpfulness</li>
                <li><strong>User Experience</strong> - Testing interface design, conversation flow, and multimodal capabilities</li>
                <li><strong>Versatility</strong> - Examining how well they handle diverse queries and tasks</li>
                <li><strong>Knowledge</strong> - Testing factual accuracy and depth of understanding</li>
                <li><strong>Reasoning</strong> - Assessing logical reasoning and problem-solving capabilities</li>
                <li><strong>Practical Use Cases</strong> - Testing performance in real-world scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Chatbots Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and performance of the leading AI chatbots and virtual assistants available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiChatbotTools}
            compareFeatures={keyChatbotFeatures}
            categoryName="AI Chatbots"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Chatbots</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Editor's Choice */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Editor's Choice
              </div>
              <h3 className="text-xl font-bold mb-2">Claude AI</h3>
              <p className="text-gray-700 mb-4">
                Claude AI offers exceptional reasoning, nuanced responses, and sophisticated understanding of complex topics, 
                making it ideal for knowledge workers and creatives.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.9)}
                </div>
                <span className="text-sm text-gray-500">Free / $20/month</span>
              </div>
              <Link href="/reviews/claude-ai" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Most Versatile */}
            <div className="bg-cyan-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-cyan-100 text-cyan-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Most Versatile
              </div>
              <h3 className="text-xl font-bold mb-2">ChatGPT</h3>
              <p className="text-gray-700 mb-4">
                ChatGPT offers an excellent balance of versatility, features, and accessibility with powerful voice mode 
                and third-party plugin capabilities.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.7)}
                </div>
                <span className="text-sm text-gray-500">Free / $20/month</span>
              </div>
              <Link href="/reviews/chatgpt" className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Research */}
            <div className="bg-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-emerald-100 text-emerald-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Research
              </div>
              <h3 className="text-xl font-bold mb-2">Perplexity AI</h3>
              <p className="text-gray-700 mb-4">
                Perplexity AI excels at research-based tasks with real-time information retrieval, source citations, 
                and excellent knowledge graph integration.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.5)}
                </div>
                <span className="text-sm text-gray-500">Free / $20/month</span>
              </div>
              <Link href="/reviews/perplexity" className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Chatbot Reviews</h2>
          
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
                    <span className="inline-flex items-center text-blue-600 font-medium text-sm">
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
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium"
            >
              View All AI Chatbot Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">AI Chatbot Use Cases</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Research & Learning */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Research & Learning</h3>
              <p className="text-gray-600">
                AI chatbots excel at research assistance, information retrieval, and explaining complex topics in 
                digestible ways for students and professionals.
              </p>
            </div>
            
            {/* Content Creation */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Content Creation</h3>
              <p className="text-gray-600">
                From drafting emails to creating blog posts, AI assistants can help generate, edit, and refine content 
                across various formats and purposes.
              </p>
            </div>
            
            {/* Customer Support */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Specialized customer service chatbots can handle inquiries, troubleshoot problems, and escalate 
                complex issues to human agents when necessary.
              </p>
            </div>
            
            {/* Productivity */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-sm transition">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Productivity</h3>
              <p className="text-gray-600">
                AI assistants can help with scheduling, task management, summarizing meetings, and automating 
                repetitive tasks to boost workplace efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What's the difference between AI chatbots and virtual assistants?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  While the terms are often used interchangeably, AI chatbots typically focus on conversation and 
                  answering questions through a chat interface. Virtual assistants often offer more comprehensive 
                  functionality, including the ability to perform tasks across various applications and services. 
                  Modern AI assistants like Claude, ChatGPT, and Perplexity combine elements of both, offering 
                  conversational interfaces with increasingly robust capabilities.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI chatbots secure for sensitive information?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Security varies significantly between AI chatbot platforms. Enterprise-grade solutions often offer 
                  robust security features, data encryption, and compliance certifications. Consumer-focused chatbots may 
                  have different data retention and privacy policies. Before sharing sensitive information, it's important 
                  to review the specific security features and privacy policy of your chosen AI assistant. Many platforms 
                  now offer options to disable training on your conversations and provide business-specific versions with 
                  enhanced security features.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How accurate are AI chatbots with factual information?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Accuracy varies between AI chatbots and depends on their design and capabilities. Traditional LLM-based 
                  chatbots like earlier versions of ChatGPT and Claude can sometimes generate "hallucinations" or plausible-sounding 
                  but incorrect information. Modern AI assistants are improving by incorporating retrieval-augmented generation (RAG) 
                  that allows them to search for and cite information. Research-focused tools like Perplexity AI and newer versions 
                  of ChatGPT and Claude with web search capabilities tend to be more accurate for factual queries, though human 
                  verification remains important for critical information.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can AI chatbots replace human customer service agents?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  While AI chatbots can handle many routine customer inquiries and provide 24/7 support, they work best 
                  as part of a hybrid approach rather than as complete replacements for human agents. AI chatbots excel at 
                  answering frequently asked questions, collecting information, and resolving simple issues. However, complex 
                  problems, emotionally charged situations, and unique cases often still require human intervention. The most 
                  effective customer service strategies use AI to handle routine matters while allowing human agents to focus 
                  on complex issues that require empathy, creativity, or specialized expertise.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What are the key differences between free and paid AI chatbots?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Paid AI chatbot services typically offer advantages over free versions including access to more powerful 
                  AI models, faster response times, higher usage limits, priority during peak times, advanced features 
                  (like file uploads, code execution, or plugins), and better data privacy options. Free versions often 
                  provide access to older models, have usage restrictions, may display ads, and sometimes use conversations 
                  for training. Whether a paid subscription is worth it depends on your specific needs, usage volume, and 
                  whether you require the advanced capabilities available in premium tiers.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect AI Assistant</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI chatbots and discover which virtual assistant best fits your needs.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Chatbots
          </Link>
        </div>
      </section>
    </main>
  );
}