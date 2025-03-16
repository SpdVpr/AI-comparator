// src/app/reviews/chatgpt/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'ChatGPT Review 2025: Is ChatGPT Plus Still the Best AI Assistant?',
  description: 'Comprehensive review of ChatGPT and ChatGPT Plus. Compare features, pricing, and performance. Find out if ChatGPT Plus is worth paying for in 2025.',
  openGraph: {
    title: 'ChatGPT Review 2025: Is ChatGPT Plus Still the Best AI Assistant?',
    description: 'Comprehensive review of ChatGPT and ChatGPT Plus. Compare features, pricing, and performance. Find out if ChatGPT Plus is worth paying for in 2025.',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function ChatGPTReviewPage() {
  // Data for ChatGPT review
  const product = {
    name: 'ChatGPT',
    title: 'ChatGPT Review 2025: Is ChatGPT Plus Still the Best AI Assistant?',
    description: 'Comprehensive review of ChatGPT and ChatGPT Plus. Compare features, pricing, and performance. Find out if ChatGPT Plus is worth paying for in 2025.',
    logo: '/images/logos/chatgpt.png',
    rating: 4.7,
    pricingStart: '$20/month (ChatGPT Plus)',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://chat.openai.com',
    affiliateTrackingId: 'aicompare-chatgpt',
    pros: [
      'Best all-around conversational AI model',
      'Free version available',
      'Excellent content creation and coding capabilities',
      'Support for multiple languages',
      'Regular updates and model improvements',
      'ChatGPT Plus offers access to advanced features'
    ],
    cons: [
      'Occasional inaccurate information',
      'Knowledge cutoff in GPT-4 model',
      'Limited conversation length in free version',
      'Slower responses during peak times in free version',
      'Missing some advanced features of competitor models'
    ],
    bestFor: ['Content writing', 'Programming', 'Student assignments', 'Research', 'Personal assistant'],
    keyFeatures: [
      { name: 'AI Model', value: 'GPT-3.5 Turbo / GPT-4o (Plus)' },
      { name: 'Knowledge cutoff', value: 'January 2022 (GPT-3.5), April 2023 (GPT-4)' },
      { name: 'Context length', value: '8K tokens (Free), 128K tokens (Plus)' },
      { name: 'Supported languages', value: '95+ languages' },
      { name: 'Image understanding', value: 'Yes (GPT-4o)' },
      { name: 'Voice interaction', value: 'Yes (Plus)' },
      { name: 'Weekly message limits', value: 'Limited (Free), Higher limits (Plus)' }
    ]
  };
  
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient">
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    }
    
    return stars;
  };
  
  // Schema.org markup for better SEO
  const schemaOrgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: product.title,
    reviewBody: product.description,
    author: {
      '@type': 'Organization',
      name: 'AI Comparator'
    },
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: product.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web'
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.rating,
      bestRating: 5
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
      />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Review header */}
        <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Product logo */}
            <div className="w-24 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-2">
              {product.logo ? (
                <Image
                  src={product.logo}
                  alt={`${product.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full rounded-lg"></div>
              )}
            </div>
            
            {/* Product information */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {product.name} Review (2025)
              </h1>
              
              <div className="flex items-center justify-center md:justify-start space-x-1 mb-3">
                {renderStars(product.rating)}
                <span className="ml-2 text-gray-700 font-medium">{product.rating}/5</span>
              </div>
              
              <p className="text-gray-600 text-lg mb-4">
                ChatGPT is the most popular AI assistant developed by OpenAI. It offers a conversational AI model that can answer questions, write content, code, and help with many other tasks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try ChatGPT" 
                  url={product.affiliateUrl} 
                  color="success" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">ChatGPT Plus:</span>
                  <span className="ml-1.5">{product.pricingStart}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main review content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - review content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is ChatGPT?</h2>
            <p className="text-gray-700 mb-4">
              ChatGPT is an advanced conversational AI model developed by OpenAI that combines natural language understanding with contextual awareness of conversations. Since its launch in November 2022, it has become a pioneer in AI technology accessible to the general public.
            </p>
            <p className="text-gray-700 mb-6">
              In this review, we'll examine both the free version of ChatGPT (based on the GPT-3.5 model) and the paid ChatGPT Plus version (with access to the more advanced GPT-4o model). We'll determine if ChatGPT is still the best AI assistant in 2025 and whether it's worth paying $20 monthly for the Plus version.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of ChatGPT</h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.keyFeatures.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-700">{feature.name}</td>
                      <td className="px-4 py-3 text-gray-700">{feature.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pros and cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Pros */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Pros</h3>
                <ul className="space-y-2">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cons */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Cons</h3>
                <ul className="space-y-2">
                  {product.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Detailed review */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of ChatGPT</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>ChatGPT vs ChatGPT Plus: Key Differences</h3>
              <p>
                ChatGPT is available in two main versions – the free version and the paid ChatGPT Plus version for $20 per month. The main differences between them are:
              </p>
              
              <ul>
                <li><strong>AI Model:</strong> The free version uses GPT-3.5, while ChatGPT Plus offers access to the more advanced GPT-4o model</li>
                <li><strong>Context Length:</strong> 8K tokens in the free version vs. up to 128K tokens in the Plus version, allowing processing of much longer conversations and documents</li>
                <li><strong>Speed:</strong> ChatGPT Plus offers priority access during high demand and faster response generation</li>
                <li><strong>Advanced Features:</strong> Plus version has access to advanced features like image data analysis, better table handling, image creation and editing, and more</li>
                <li><strong>Web Browsing:</strong> Plus version allows internet browsing to search for current information</li>
              </ul>
              
              <h3>Response Quality and Accuracy</h3>
              <p>
                ChatGPT is known for its high-quality generated responses. The GPT-4o model available in the Plus version delivers noticeably better results than the basic GPT-3.5, particularly in these areas:
              </p>
              
              <ul>
                <li><strong>Complex Reasoning:</strong> GPT-4o handles more complex tasks requiring multiple steps and logical reasoning</li>
                <li><strong>Creative Writing:</strong> Better quality writing, improved structuring, and more creative approaches</li>
                <li><strong>Programming:</strong> Better code understanding, fewer errors, and more robust problem solutions</li>
                <li><strong>Visual Understanding:</strong> Ability to analyze and describe images and visual content</li>
              </ul>
              
              <p>
                Despite these advantages, ChatGPT still has certain limitations – it occasionally provides inaccurate information (so-called "hallucinations") and its knowledge is limited by a knowledge cutoff, after which it has no direct information about world events. ChatGPT Plus with web browsing partially solves this problem by accessing current information.
              </p>
              
              <h3>Practical Applications of ChatGPT</h3>
              
              <h4>1. Content Writing and Creative Work</h4>
              <p>
                ChatGPT excels at creating various types of content – from blog posts to marketing copy to creative writing. With the Plus version, you get higher quality outputs and the ability to generate longer texts in a single conversation. Thanks to GPT-4o, texts are more coherent, better structured, and more natural.
              </p>
              
              <h4>2. Programming and Software Development</h4>
              <p>
                For programmers, ChatGPT is an invaluable assistant. It can generate code, explain existing code, fix errors, and offer solutions to problems in many programming languages. GPT-4o significantly outperforms GPT-3.5 in complex programming tasks, especially when generating large code blocks or entire applications.
              </p>
              
              <h4>3. Education and Research</h4>
              <p>
                For students and researchers, ChatGPT offers explanation of complex concepts, help with assignments and research questions. ChatGPT Plus allows uploading PDF documents and other materials for analysis, which is useful when working with scientific articles, textbooks, or data.
              </p>
              
              <h4>4. Personal Assistant</h4>
              <p>
                ChatGPT can be used as a personal assistant for planning, organization, reminders, and general help in everyday life. The free version is usually sufficient for these purposes, but the Plus version offers better contextual understanding and longer-term "memory" of conversations.
              </p>
              
              <h3>ChatGPT Pricing and Value</h3>
              <p>
                ChatGPT offers two main pricing tiers:
              </p>
              
              <ul>
                <li><strong>ChatGPT (Free Version):</strong> Access to the GPT-3.5 model for free, with certain capacity and speed limitations</li>
                <li><strong>ChatGPT Plus:</strong> $20/month – access to the GPT-4o model, higher speed, advanced features, and priority access</li>
              </ul>
              
              <p>
                For casual users and simpler tasks, the free version may be sufficient. For professionals, developers, content creators, and anyone who needs advanced features and higher quality outputs, ChatGPT Plus represents a very good investment at $20 per month.
              </p>
              
              <h3>ChatGPT vs. Competitors in 2025</h3>
              <p>
                ChatGPT still holds its position among the top AI assistants in 2025, but faces strong competition. Main competitors include:
              </p>
              
              <ul>
                <li><strong>Claude AI:</strong> Excels in longer conversations, better factual accuracy, and ethical approach</li>
                <li><strong>Gemini (Google):</strong> Offers strong integration with Google ecosystem and better search capabilities</li>
                <li><strong>Perplexity:</strong> Specializes in research and source citations with direct internet access</li>
                <li><strong>Copilot (Microsoft):</strong> Leverages integration with Microsoft products and offers specialized features</li>
              </ul>
              
              <p>
                Compared to competitors, ChatGPT has these advantages:
              </p>
              
              <ul>
                <li>Most universal use across different tasks</li>
                <li>Available free version with robust features</li>
                <li>Large ecosystem of plugins and integrations to extend functionality</li>
                <li>Excellent knowledge of programming and code creation</li>
              </ul>
              
              <p>
                On the other hand, some specialized models may outperform ChatGPT in specific areas. For example, Claude Opus offers larger context (200K tokens vs. 128K in GPT-4) and better rational reasoning, while Perplexity provides better citations and current information.
              </p>
            </div>
            
            {/* Comparison table of versions */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">ChatGPT Free vs. ChatGPT Plus: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">ChatGPT (Free)</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">ChatGPT Plus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price</td>
                    <td className="px-4 py-3 text-center text-gray-700">Free</td>
                    <td className="px-4 py-3 text-center text-gray-700">$20/month</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">AI Model</td>
                    <td className="px-4 py-3 text-center text-gray-700">GPT-3.5</td>
                    <td className="px-4 py-3 text-center text-gray-700">GPT-4o</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Context Length</td>
                    <td className="px-4 py-3 text-center text-gray-700">8K tokens</td>
                    <td className="px-4 py-3 text-center text-gray-700">128K tokens</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Web Browsing</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Image Analysis</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">File Upload</td>
                    <td className="px-4 py-3 text-center text-gray-700">Limited</td>
                    <td className="px-4 py-3 text-center text-gray-700">Extended</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Voice Interaction</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Response Speed</td>
                    <td className="px-4 py-3 text-center text-gray-700">Standard</td>
                    <td className="px-4 py-3 text-center text-gray-700">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                ChatGPT remains one of the best AI assistants available in 2025. The free version offers a great entry point into the world of AI, while ChatGPT Plus provides significant added value for professionals, developers, and anyone who requires advanced features and higher quality outputs.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get ChatGPT Plus:</strong> Professional content creators, developers, students working on complex projects, researchers, and anyone who needs advanced features and more accurate responses.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who can stick with the free version:</strong> Casual users, students working on basic assignments, people who need help with simple text tasks, or those on a limited budget.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try ChatGPT Free" 
                  url={product.affiliateUrl} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get ChatGPT Plus" 
                  url={`${product.affiliateUrl}/plus`} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={false}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
              </div>
            </div>
            
            {/* Comments and questions */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions and Answers</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                Do you have a question about ChatGPT? Ask in the comments below and we'll answer.
              </p>
              {/* Comments/questions component would go here */}
            </div>
          </div>
          
          {/* Right column - sidebar */}
          <div className="md:col-span-1">
            {/* Product summary */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
              
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Rating:</span>
                  <div className="flex items-center space-x-1 mt-1">
                    {renderStars(product.rating)}
                    <span className="ml-1 text-gray-700 font-medium">{product.rating}/5</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">Best for:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.bestFor.map((item, index) => (
                      <span key={index} className="inline-block bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-sm text-gray-500">ChatGPT Plus Price:</span>
                  <div className="font-medium text-gray-800 mt-1">{product.pricingStart}</div>
                </div>
                
                {product.hasFreeVersion && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free version available</span>
                  </div>
                )}
              </div>
              
              <ButtonAffiliate 
                text="Try ChatGPT Free" 
                url={product.affiliateUrl} 
                color="success" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-2"
              />
              
              <ButtonAffiliate 
                text="Get ChatGPT Plus" 
                url={`${product.affiliateUrl}/plus`} 
                color="primary" 
                hasFreeTrial={false}
                hasFreeVersion={false}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-3"
              />
              
              <p className="text-xs text-gray-500 text-center">
                * Affiliate link. See our {' '}
                <a href="/privacy-policy" className="text-gray-500 underline hover:text-gray-700">privacy policy</a>.
              </p>
            </div>
            
            {/* Related products */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Assistants</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/claude" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Claude AI</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-1">4.9/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/gemini" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">G</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Gemini</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.6/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/perplexity" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-teal-600 font-medium">P</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Perplexity</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.7/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/ai-chatbots" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI chatbots
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            {/* FAQ section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is ChatGPT Plus better than the free version?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, ChatGPT Plus offers significant improvements over the free version - it uses the more advanced GPT-4o model, has a larger context window (128K tokens), supports file uploads, web browsing, and provides priority access. For professionals and power users, the difference is noticeable.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does ChatGPT compare to Claude AI?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    ChatGPT and Claude AI are top-tier AI assistants with different strengths. ChatGPT excels in a wider range of tasks and has better programming capabilities. Claude offers a larger context window (200K vs 128K tokens) and generally provides responses with higher factual accuracy. Claude is also known for its ethical approach and safety features.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is ChatGPT safe for business use?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    For business use, OpenAI offers a special ChatGPT Enterprise service that provides additional security features such as data protection, user management, knowledge base privacy, and enhanced analytics. The standard ChatGPT Plus may be suitable for smaller businesses, but for larger organizations and sensitive data work, the Enterprise version is more appropriate.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}