// src/app/reviews/claude/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Claude AI Review 2025: Is Claude the Best AI Assistant for Professionals?',
  description: 'Comprehensive review of Claude AI. Compare features, capabilities, pricing, and performance to other AI assistants. Is Claude 3 Opus worth it in 2025?',
  openGraph: {
    title: 'Claude AI Review 2025: Is Claude the Best AI Assistant for Professionals?',
    description: 'Comprehensive review of Claude AI. Compare features, capabilities, pricing, and performance to other AI assistants. Is Claude 3 Opus worth it in 2025?',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function ClaudeReviewPage() {
  // Data for Claude review
  const product = {
    name: 'Claude',
    title: 'Claude AI Review 2025: Is Claude the Best AI Assistant for Professionals?',
    description: 'Comprehensive review of Claude AI. Compare features, capabilities, pricing, and performance to other AI assistants. Is Claude 3 Opus worth it in 2025?',
    logo: '/images/logos/claude.png',
    rating: 4.9,
    pricingStart: '$20/month (Claude Pro)',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://claude.ai',
    affiliateTrackingId: 'aicompare-claude',
    pros: [
      'Superior reasoning and analytical abilities',
      'Exceptionally large context window (200K tokens)',
      'Excellent handling of nuanced questions',
      'Strong document analysis capabilities',
      'Factual and measured responses',
      'Clear, well-structured writing style'
    ],
    cons: [
      'No built-in web browsing capability',
      'Limited memory between conversations',
      'No voice interface option',
      'Fewer third-party integrations than competitors',
      'Sometimes slower than other AI assistants'
    ],
    bestFor: ['Knowledge workers', 'Researchers', 'Writers', 'Analysts', 'Business professionals'],
    keyFeatures: [
      { name: 'AI Model', value: 'Claude 3 Opus/Sonnet/Haiku' },
      { name: 'Knowledge cutoff', value: 'August 2023' },
      { name: 'Context window', value: '200K tokens (largest available)' },
      { name: 'Supported languages', value: '100+ languages' },
      { name: 'Image understanding', value: 'Excellent visual analysis' },
      { name: 'Document handling', value: 'Advanced document upload and analysis' },
      { name: 'API Access', value: 'Available with separate pricing' }
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
        <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 shadow-sm mb-10">
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
                Claude is an advanced AI assistant developed by Anthropic, designed with an emphasis on helpfulness, harmlessness, and honesty. It excels at complex reasoning, nuanced conversations, and professional tasks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Claude" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">Claude Pro:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Claude?</h2>
            <p className="text-gray-700 mb-4">
              Claude is an AI assistant created by Anthropic, a company founded by former OpenAI researchers. It has been designed with an emphasis on being helpful, harmless, and honest—a concept Anthropic calls "Constitutional AI." Claude is particularly known for its reasoning capabilities, nuanced responses, and ability to handle complex instructions with accuracy.
            </p>
            <p className="text-gray-700 mb-6">
              In this review, we'll examine Claude's capabilities across the Claude 3 model family (Opus, Sonnet, and Haiku), with a focus on the flagship Claude 3 Opus model. We'll assess its performance against competitors and determine whether Claude Pro is worth the subscription fee for different types of users in 2025.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Claude</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Claude</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Claude Model Capabilities</h3>
              <p>
                Claude has evolved significantly with the release of the Claude 3 family in 2024. The current lineup includes three models with differing capabilities:
              </p>
              
              <ul>
                <li><strong>Claude 3 Opus:</strong> The flagship model, offering the highest performance for complex reasoning, nuanced understanding, and creative tasks</li>
                <li><strong>Claude 3 Sonnet:</strong> A balanced model offering strong performance at a faster speed</li>
                <li><strong>Claude 3 Haiku:</strong> The fastest model, optimized for simpler tasks and quick responses</li>
              </ul>
              
              <p>
                What sets Claude apart from other AI assistants is its thoughtful, considered approach to responses. Claude excels at:
              </p>
              
              <ul>
                <li><strong>Deep reasoning:</strong> Breaking down complex problems step-by-step</li>
                <li><strong>Nuanced understanding:</strong> Grasping subtle distinctions and context</li>
                <li><strong>Document analysis:</strong> Working with lengthy documents and extracting key information</li>
                <li><strong>Clear, organized writing:</strong> Producing well-structured content with logical flow</li>
                <li><strong>Balanced perspectives:</strong> Presenting multiple viewpoints on complex topics</li>
              </ul>
              
              <p>
                Claude's performance on reasoning benchmarks consistently places it at or near the top of commercial AI assistants, particularly for tasks requiring careful analysis, working with constraints, and following complex instructions.
              </p>
              
              <h3>Context Window and Document Handling</h3>
              <p>
                One of Claude's most significant advantages is its 200,000 token context window (approximately 150,000 words), the largest among major AI assistants in 2025. This allows Claude to:
              </p>
              
              <ul>
                <li>Analyze entire research papers, legal documents, or books in a single prompt</li>
                <li>Maintain coherence across extremely long conversations</li>
                <li>Compare and contrast multiple documents simultaneously</li>
                <li>Process complex data sets and lengthy reports</li>
              </ul>
              
              <p>
                This extensive context window is particularly valuable for researchers, analysts, and knowledge workers who regularly work with substantial documents. Claude's document handling capabilities allow for uploading various file types, including PDFs, Word documents, presentations, and even images for analysis.
              </p>
              
              <h3>Visual Understanding</h3>
              <p>
                With the Claude 3 models, visual understanding has become one of Claude's strengths. The system can:
              </p>
              
              <ul>
                <li>Analyze charts, graphs, and data visualizations</li>
                <li>Extract and interpret text from images</li>
                <li>Describe complex diagrams and technical illustrations</li>
                <li>Understand the content and context of photographs</li>
                <li>Analyze screenshots and user interfaces</li>
              </ul>
              
              <p>
                Claude's visual capabilities are particularly useful for analyzing documents with mixed text and visuals, understanding diagrams in technical documentation, and extracting information from tables or charts.
              </p>
              
              <h3>Practical Applications of Claude</h3>
              
              <h4>1. Research and Analysis</h4>
              <p>
                Claude excels at research tasks, where its reasoning abilities and large context window allow it to analyze extensive documents, synthesize information from multiple sources, and draw thoughtful conclusions. It's particularly effective at literature reviews, data analysis, and trend identification.
              </p>
              
              <h4>2. Content Creation and Editing</h4>
              <p>
                For writers and content creators, Claude provides exceptional assistance with drafting, editing, and refining content. Its writing style is naturally clear, well-structured, and adaptable to different tones and formats. Claude is adept at generating creative content, technical documentation, marketing copy, and more.
              </p>
              
              <h4>3. Learning and Education</h4>
              <p>
                Claude serves as an effective tutor and learning tool, offering explanations that are thorough and tailored to different knowledge levels. It excels at breaking down complex concepts, providing analogies, and guiding learners through step-by-step reasoning processes.
              </p>
              
              <h4>4. Business Analysis and Strategy</h4>
              <p>
                For business professionals, Claude can analyze market reports, financial documents, and business plans, offering insights and identifying potential opportunities or challenges. It's particularly useful for strategic thinking exercises, scenario planning, and data-driven decision-making.
              </p>
              
              <h3>Claude Pricing and Value</h3>
              <p>
                Claude offers the following pricing tiers:
              </p>
              
              <ul>
                <li><strong>Claude (Free Version):</strong> Access to Claude 3 Sonnet with limitations on usage and features</li>
                <li><strong>Claude Pro:</strong> $20/month – priority access, higher usage limits, early access to new features</li>
                <li><strong>API Access:</strong> Pay-per-token pricing for developers and organizations</li>
                <li><strong>Claude Enterprise:</strong> Custom pricing for business and organizational needs</li>
              </ul>
              
              <p>
                For casual users with basic needs, the free version of Claude may be sufficient. For professionals, researchers, and power users who rely on AI assistance regularly, Claude Pro represents good value at $20 per month, particularly given the performance of Claude 3 Opus and the extensive context window.
              </p>
              
              <h3>Claude vs. Competitors in 2025</h3>
              <p>
                In the competitive landscape of AI assistants, Claude has established a distinct position. When compared to major competitors:
              </p>
              
              <ul>
                <li><strong>vs. ChatGPT (GPT-4o):</strong> Claude generally offers more thoughtful analysis and better document handling, while ChatGPT has advantages in coding, real-time information (with web browsing), and a more extensive plugin ecosystem</li>
                <li><strong>vs. Gemini:</strong> Claude excels in reasoning and document analysis, while Gemini offers stronger Google ecosystem integration and search capabilities</li>
                <li><strong>vs. Perplexity:</strong> Claude offers superior reasoning and a larger context window, while Perplexity provides real-time information and better citation of sources</li>
              </ul>
              
              <p>
                Claude's main advantages include:
              </p>
              
              <ul>
                <li>Industry-leading context window (200K tokens)</li>
                <li>Superior performance on complex reasoning tasks</li>
                <li>Exceptional document analysis capabilities</li>
                <li>Clear, structured, high-quality writing</li>
                <li>Ability to understand and follow nuanced instructions</li>
              </ul>
              
              <p>
                However, competitors may offer advantages in areas like real-time information access, ecosystem integration, and specialized capabilities like coding (ChatGPT) or search (Perplexity).
              </p>
            </div>
            
            {/* Comparison table of versions */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Claude Models Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Claude 3 Haiku</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Claude 3 Sonnet</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Claude 3 Opus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Performance Level</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Speed</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Fast</td>
                    <td className="px-4 py-3 text-center text-gray-700">Fast</td>
                    <td className="px-4 py-3 text-center text-gray-700">Standard</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Context Window</td>
                    <td className="px-4 py-3 text-center text-gray-700">200K tokens</td>
                    <td className="px-4 py-3 text-center text-gray-700">200K tokens</td>
                    <td className="px-4 py-3 text-center text-gray-700">200K tokens</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Reasoning Ability</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Strong</td>
                    <td className="px-4 py-3 text-center text-gray-700">Exceptional</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Visual Understanding</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Complexity Handling</td>
                    <td className="px-4 py-3 text-center text-gray-700">Simple Tasks</td>
                    <td className="px-4 py-3 text-center text-gray-700">Moderate Complexity</td>
                    <td className="px-4 py-3 text-center text-gray-700">High Complexity</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Free Access</td>
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
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Claude stands out as one of the most impressive AI assistants available in 2025, particularly for users who value thoughtful analysis, nuanced understanding, and reliable information. Its exceptional context window and document handling capabilities make it especially valuable for researchers, writers, analysts, and knowledge workers.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Claude Pro:</strong> Professionals who work with complex information and documents, researchers, analysts, writers, content creators, and anyone who needs a thoughtful AI assistant capable of deep reasoning and nuanced understanding.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who can stick with the free version:</strong> Casual users with basic needs, students (though the Pro version offers significant advantages for research), and those who primarily need an AI for simple conversations and queries.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Claude Free" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Claude Pro" 
                  url={`${product.affiliateUrl}/settings`} 
                  color="success" 
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
                Do you have a question about Claude? Ask in the comments below and we'll answer.
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
                  <span className="text-sm text-gray-500">Claude Pro Price:</span>
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
                text="Try Claude Free" 
                url={product.affiliateUrl} 
                color="primary" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-3"
              />
              
              <ButtonAffiliate 
                text="Get Claude Pro" 
                url={`${product.affiliateUrl}/settings`} 
                color="success" 
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
                  <a href="/reviews/chatgpt" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">ChatGPT</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.8/5</span>
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
                    <span>How does Claude compare to ChatGPT?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Claude tends to excel at nuanced reasoning, document analysis, and producing well-structured, thoughtful responses. It has a larger context window (200K vs 128K tokens) and often produces more balanced analysis. ChatGPT typically performs better at coding tasks, has web browsing capabilities, and offers a more extensive ecosystem of plugins and integrations. Both are top-tier AI assistants with different strengths.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is Claude Pro worth the monthly fee?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    For professionals who regularly work with complex documents, research, or need advanced analytical capabilities, Claude Pro at $20/month offers significant value. The Pro subscription provides access to Claude 3 Opus (the most capable model), higher usage limits, priority access during busy periods, and early access to new features. For casual users, the free tier with Claude 3 Sonnet may be sufficient.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can Claude browse the web?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    No, Claude does not currently have a built-in web browsing capability. Unlike some competitors like ChatGPT (with web browsing) or Perplexity (with real-time search), Claude does not have direct access to the internet to search for or verify information. This means Claude's knowledge is limited to its training cutoff date (August 2023). For current information, you'll need to provide it directly to Claude, such as by uploading documents or pasting relevant content.
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