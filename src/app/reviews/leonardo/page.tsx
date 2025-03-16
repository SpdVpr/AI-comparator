// src/app/reviews/perplexity/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Perplexity AI Review 2025: Is Pro Worth It For Research & Search?',
  description: 'Comprehensive review of Perplexity AI. Compare features, pricing, and performance of free vs Pro plans. Is Perplexity the best AI research assistant in 2025?',
  openGraph: {
    title: 'Perplexity AI Review 2025: Is Pro Worth It For Research & Search?',
    description: 'Comprehensive review of Perplexity AI. Compare features, pricing, and performance of free vs Pro plans. Is Perplexity the best AI research assistant in 2025?',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function PerplexityReviewPage() {
  // Data for Perplexity review
  const product = {
    name: 'Perplexity AI',
    title: 'Perplexity AI Review 2025: Is Pro Worth It For Research & Search?',
    description: 'Comprehensive review of Perplexity AI. Compare features, pricing, and performance of free vs Pro plans. Is Perplexity the best AI research assistant in 2025?',
    logo: '/images/logos/perplexity.png',
    rating: 4.7,
    pricingStart: '$20/month (Pro)',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://perplexity.ai',
    affiliateTrackingId: 'aicompare-perplexity',
    pros: [
      'Real-time internet search with AI summaries',
      'Excellent citation of sources',
      'High factual accuracy compared to other AI tools',
      'Clean and intuitive interface',
      'Multimodal capabilities (text, images, PDFs)',
      'Comprehensive free tier available'
    ],
    cons: [
      'Search results sometimes miss important sources',
      'Limited customization options',
      'Less creative capabilities than general-purpose AI',
      'Mobile apps could use improvement',
      'Pro plan relatively expensive for casual users'
    ],
    bestFor: ['Researchers', 'Students', 'Journalists', 'Fact checkers', 'Knowledge workers', 'Academic writing'],
    keyFeatures: [
      { name: 'Knowledge cutoff', value: 'Real-time (internet search)' },
      { name: 'Search capabilities', value: 'Web search with AI synthesis' },
      { name: 'Available models', value: 'Claude Opus, GPT-4, Mixtral (Pro plan)' },
      { name: 'Citation support', value: 'Automatic with clickable links' },
      { name: 'File uploads', value: 'PDF, images (Pro plan)' },
      { name: 'Collections', value: 'Saved searches and responses' },
      { name: 'API Access', value: 'Available (Pro plan)' }
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
      applicationCategory: 'ResearchApplication',
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
        <div className="bg-gradient-to-r from-teal-50 to-white rounded-xl p-8 shadow-sm mb-10">
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
                Perplexity AI is a powerful AI search and research assistant that combines web search with AI synthesis to provide accurate, cited answers to complex questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Perplexity" 
                  url={product.affiliateUrl} 
                  color="success" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">Pro Plan:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Perplexity AI?</h2>
            <p className="text-gray-700 mb-4">
              Perplexity AI is an AI-powered search engine and research assistant that provides in-depth, cited answers to complex questions by scanning the internet in real-time. Unlike traditional AI chatbots that rely on pre-trained knowledge with a cutoff date, Perplexity accesses current information from the web and synthesizes it into comprehensive, sourced responses.
            </p>
            <p className="text-gray-700 mb-6">
              Founded in 2022, Perplexity has quickly gained popularity as a new approach to AI assistants focused on information retrieval and factual accuracy. It sits at the intersection of search engines and AI, offering a new way to find and synthesize information that bridges the gap between traditional search engines like Google and AI chatbots like ChatGPT.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Perplexity AI</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Perplexity AI</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Perplexity Free vs. Pro: Key Differences</h3>
              <p>
                Perplexity AI offers two main tiers – a comprehensive free version and the Pro subscription at $20 per month. Here are the key differences between them:
              </p>
              
              <ul>
                <li><strong>AI Models:</strong> The free version uses unspecified base models, while Pro provides access to more advanced models like Claude Opus, GPT-4, and Mixtral</li>
                <li><strong>Search Depth:</strong> Pro offers more in-depth search capabilities with improved information synthesis and broader source coverage</li>
                <li><strong>File Uploads:</strong> Pro allows uploading PDFs and images for analysis, which is not available in the free tier</li>
                <li><strong>Usage Limits:</strong> Pro users enjoy higher usage limits before throttling occurs</li>
                <li><strong>API Access:</strong> Only Pro users get access to the Perplexity API</li>
                <li><strong>Copilot Feature:</strong> Pro includes an AI writing assistant feature called Copilot</li>
              </ul>
              
              <h3>Search Quality and Factual Accuracy</h3>
              <p>
                Perplexity's core strength lies in its ability to retrieve factual information with citations, and it excels in several areas:
              </p>
              
              <ul>
                <li><strong>Citation Quality:</strong> Responses include numbered citations with links to sources, making fact-checking straightforward</li>
                <li><strong>Recency of Information:</strong> The real-time web search allows Perplexity to provide up-to-date information beyond traditional AI cutoff dates</li>
                <li><strong>Synthesis Capabilities:</strong> The AI effectively summarizes multiple sources to provide comprehensive answers</li>
                <li><strong>Reduced Hallucinations:</strong> By grounding responses in web sources, Perplexity significantly reduces the AI hallucination problem compared to standard LLMs</li>
              </ul>
              
              <p>
                Despite these strengths, Perplexity is not perfect. The search algorithm sometimes misses important sources that would be found through manual Google searches. Additionally, the AI synthesis occasionally misinterprets or oversimplifies complex information from the sources it cites.
              </p>
              
              <h3>User Experience and Interface</h3>
              
              <p>
                Perplexity offers a clean, intuitive interface that strikes a good balance between simplicity and functionality:
              </p>
              
              <ul>
                <li><strong>Search-Centric Design:</strong> The interface revolves around a prominent search bar, making the primary function immediately clear</li>
                <li><strong>Conversation Threading:</strong> Follow-up questions maintain context within the same conversation thread</li>
                <li><strong>Source Integration:</strong> Citations are cleanly formatted with numbered references and clickable links</li>
                <li><strong>Collections Feature:</strong> Users can save and organize searches and responses into collections for future reference</li>
                <li><strong>Focus Mode:</strong> A distraction-free reading experience for lengthy responses</li>
              </ul>
              
              <p>
                The web experience is more refined than the mobile apps, which could use additional polish. However, across all platforms, Perplexity maintains a more focused, less cluttered interface compared to many other AI tools.
              </p>
              
              <h3>Practical Applications of Perplexity AI</h3>
              
              <h4>1. Academic Research and Writing</h4>
              <p>
                Perplexity shines as a research assistant for academic work:
              </p>
              <ul>
                <li>Quick literature reviews with automatic citation of sources</li>
                <li>Summarizing complex research papers uploaded as PDFs (Pro feature)</li>
                <li>Finding recent studies and publications on specific topics</li>
                <li>Fact-checking and verifying information from other sources</li>
              </ul>
              <p>
                While it shouldn't replace thorough academic research, it serves as an excellent starting point and supplementary tool for identifying relevant sources quickly.
              </p>
              
              <h4>2. Journalism and Fact-Checking</h4>
              <p>
                For journalists and content creators, Perplexity offers valuable capabilities:
              </p>
              <ul>
                <li>Rapid fact-checking of claims and statements</li>
                <li>Gathering background information on breaking news stories</li>
                <li>Identifying multiple perspectives on controversial topics</li>
                <li>Finding specific statistics and data points with citations</li>
              </ul>
              <p>
                The tool's ability to quickly synthesize information from multiple sources makes preliminary research much more efficient.
              </p>
              
              <h4>3. Market and Competitive Research</h4>
              <p>
                Business professionals can leverage Perplexity for:
              </p>
              <ul>
                <li>Market analysis with current data and trends</li>
                <li>Competitive intelligence gathering</li>
                <li>Industry news monitoring</li>
                <li>Finding relevant statistics and forecasts for business planning</li>
              </ul>
              <p>
                The Pro plan's more powerful models and deeper search capabilities make it particularly valuable for business research purposes.
              </p>
              
              <h4>4. Learning and Education</h4>
              <p>
                Students and lifelong learners benefit from:
              </p>
              <ul>
                <li>Explanations of complex concepts with cited sources</li>
                <li>Study guide creation with comprehensive topic coverage</li>
                <li>Finding learning resources on specific subjects</li>
                <li>Getting multiple perspectives on historical or controversial topics</li>
              </ul>
              <p>
                The free version is quite sufficient for most student needs, making it an accessible educational tool.
              </p>
              
              <h3>Perplexity Pricing and Value</h3>
              <p>
                Perplexity offers a straightforward pricing structure:
              </p>
              
              <ul>
                <li><strong>Perplexity (Free):</strong> Includes basic search capabilities, standard AI models, and unlimited searches (with potential throttling during high usage)</li>
                <li><strong>Perplexity Pro:</strong> $20/month - Access to premium AI models (Claude Opus, GPT-4, Mixtral), file uploads, Copilot feature, API access, and higher usage limits</li>
              </ul>
              
              <p>
                In terms of value, the free tier is surprisingly generous and fully functional for casual research needs. For most users, this may be sufficient, especially if they're only occasionally conducting research or fact-checking.
              </p>
              
              <p>
                The Pro plan at $20/month represents good value for knowledge workers, researchers, journalists, and students who rely heavily on information gathering. The addition of file uploads and premium AI models justifies the cost for professional use cases. However, casual users might find the price point a bit high compared to other AI subscriptions.
              </p>
              
              <h3>Perplexity vs. Competitors in 2025</h3>
              <p>
                Perplexity occupies a unique position at the intersection of search engines and AI assistants. Its main competitors include:
              </p>
              
              <ul>
                <li><strong>Traditional Search Engines (Google, Bing):</strong> Perplexity offers more synthesis and contextual understanding but sometimes lacks the breadth of search results</li>
                <li><strong>AI Chatbots with Search (ChatGPT with browsing, Claude with web search):</strong> Perplexity's specialized focus on search and citations gives it an edge for research, though general-purpose AIs offer more versatility</li>
                <li><strong>Other AI Search Tools (You.com, Bing AI):</strong> Perplexity typically offers better citation practices and synthesis capabilities</li>
                <li><strong>Research Tools (Elicit, Consensus):</strong> These specialized academic research tools offer deeper scholarly search but less general-purpose utility</li>
              </ul>
              
              <p>
                Compared to competitors, Perplexity has these advantages:
              </p>
              
              <ul>
                <li>Better integration of search and AI synthesis than most alternatives</li>
                <li>Superior citation practices with clear attribution</li>
                <li>Clean, focused interface designed specifically for research</li>
                <li>Generous free tier that doesn't require login for basic use</li>
              </ul>
              
              <p>
                However, Perplexity falls short in some areas. General-purpose AI assistants like ChatGPT and Claude offer more creative capabilities and better handling of complex reasoning tasks. Traditional search engines still provide more comprehensive search results with greater user control over filtering and sorting.
              </p>
            </div>
            
            {/* Comparison table of versions */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Perplexity Free vs. Pro: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Perplexity Free</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Perplexity Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price</td>
                    <td className="px-4 py-3 text-center text-gray-700">Free</td>
                    <td className="px-4 py-3 text-center text-gray-700">$20/month</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">AI Models</td>
                    <td className="px-4 py-3 text-center text-gray-700">Base models</td>
                    <td className="px-4 py-3 text-center text-gray-700">Claude Opus, GPT-4, Mixtral</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">File Upload</td>
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
                    <td className="px-4 py-3 font-medium text-gray-700">Usage Limits</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic (throttling)</td>
                    <td className="px-4 py-3 text-center text-gray-700">Higher limits</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Search Quality</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Enhanced</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">API Access</td>
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
                    <td className="px-4 py-3 font-medium text-gray-700">Copilot (AI Writing)</td>
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
                    <td className="px-4 py-3 font-medium text-gray-700">Collections (Saved Searches)</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-teal-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Perplexity AI offers a genuinely useful alternative to both traditional search engines and general-purpose AI assistants. Its emphasis on sourced information and real-time search makes it stand out in a crowded AI landscape. The quality of citations and breadth of knowledge make it an excellent choice for researchers, students, and anyone who values factual accuracy.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Perplexity Free:</strong> Casual researchers, students, fact-checkers, and anyone who needs occasional help with information gathering but doesn't require advanced features like file uploads.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Perplexity Pro:</strong> Professional researchers, journalists, knowledge workers, academic writers, and anyone who heavily relies on information gathering with cited sources. The premium AI models, file upload capabilities, and higher usage limits justify the cost for these users.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Perplexity Free" 
                  url={product.affiliateUrl} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Perplexity Pro" 
                  url={`${product.affiliateUrl}/pro`} 
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
                Do you have a question about Perplexity AI? Ask in the comments below and we'll answer.
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
                  <span className="text-sm text-gray-500">Pro Plan Price:</span>
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
                text="Try Perplexity Free" 
                url={product.affiliateUrl} 
                color="success" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-2"
              />
              
              <ButtonAffiliate 
                text="Get Perplexity Pro" 
                url={`${product.affiliateUrl}/pro`} 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Research Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/chatgpt" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">ChatGPT</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.7/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/elicit" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">E</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Elicit</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/you-ai" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">Y</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">You.com AI</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.3/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/ai-research-assistants" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI research tools
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
                    <span>Is Perplexity Pro worth it?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Perplexity Pro is worth it for researchers, journalists, academics, and anyone who regularly needs to gather and synthesize information with citations. The premium AI models, file upload capabilities, and higher usage limits provide significant value for these users. However, casual users who only occasionally need research assistance may find the free tier sufficient for their needs.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How accurate is Perplexity compared to Google?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Perplexity is generally accurate for factual information, though it approaches search differently than Google. Where Google provides links for you to evaluate sources yourself, Perplexity synthesizes information and provides direct answers with citations. Perplexity typically has fewer but more focused results than Google, which can be an advantage for straightforward queries but a disadvantage for complex or niche topics where Google's broader search might find more obscure sources.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Does Perplexity use GPT-4?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, Perplexity Pro subscribers have access to GPT-4 as one of the available AI models. Pro users can choose between several models including Claude Opus, GPT-4, and Mixtral for different types of queries. The free version uses unspecified base models that are likely smaller, more efficient versions optimized for Perplexity's use case.
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