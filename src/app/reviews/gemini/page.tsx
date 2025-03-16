// src/app/reviews/gemini/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Gemini AI Review 2025: How Does Google\'s AI Compare to Rivals?',
  description: 'Comprehensive review of Google\'s Gemini AI. Compare features, capabilities, pricing, and integration with Google products. Is Gemini Advanced worth it in 2025?',
  openGraph: {
    title: 'Gemini AI Review 2025: How Does Google\'s AI Compare to Rivals?',
    description: 'Comprehensive review of Google\'s Gemini AI. Compare features, capabilities, pricing, and integration with Google products. Is Gemini Advanced worth it in 2025?',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function GeminiReviewPage() {
  // Data for Gemini review
  const product = {
    name: 'Gemini',
    title: 'Gemini AI Review 2025: How Does Google\'s AI Compare to Rivals?',
    description: 'Comprehensive review of Google\'s Gemini AI. Compare features, capabilities, pricing, and integration with Google products. Is Gemini Advanced worth it in 2025?',
    logo: '/images/logos/gemini.png',
    rating: 4.6,
    pricingStart: '$20/month (Google One AI Premium)',
    hasFreeVersion: true,
    hasFreeTrial: true,
    affiliateUrl: 'https://gemini.google.com',
    affiliateTrackingId: 'aicompare-gemini',
    pros: [
      'Seamless Google ecosystem integration',
      'Built-in web search capabilities',
      'Excellent multimodal capabilities',
      'Strong performance across varied tasks',
      'Google Workspace integration',
      'Free version available with good capabilities'
    ],
    cons: [
      'Limited context window compared to competitors',
      'Less advanced reasoning for complex tasks',
      'Fewer customization options',
      'Sometimes less nuanced in creative writing',
      'Regional availability limitations'
    ],
    bestFor: ['Google users', 'Productivity workers', 'Students', 'Casual AI users', 'Researchers'],
    keyFeatures: [
      { name: 'AI Model', value: 'Gemini 1.5 Pro/Flash' },
      { name: 'Knowledge cutoff', value: 'April 2023 (with web search capability)' },
      { name: 'Context window', value: '32K tokens (with extensions)' },
      { name: 'Supported languages', value: '40+ languages' },
      { name: 'Image understanding', value: 'Advanced multimodal capabilities' },
      { name: 'Google integration', value: 'Gmail, Docs, Drive, YouTube, Maps, etc.' },
      { name: 'Extensions', value: 'Search, Google apps, third-party services' }
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
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-sm mb-10">
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
                Gemini is Google's advanced AI assistant that integrates deeply with Google services and offers multimodal capabilities across search, conversation, and productivity tasks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Gemini" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">AI Premium:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Gemini?</h2>
            <p className="text-gray-700 mb-4">
              Gemini is Google's flagship AI assistant, representing the company's answer to competitors like ChatGPT and Claude. Previously known as Bard, Gemini was rebranded and significantly upgraded in early 2024 with the introduction of the Gemini family of models. It's designed to be a versatile AI system that spans conversational assistance, productivity, and creative tasks.
            </p>
            <p className="text-gray-700 mb-6">
              What sets Gemini apart is its deep integration with the Google ecosystem, including Search, Gmail, Docs, Drive, and other Google services. This integration creates a more cohesive experience for users already invested in Google's product universe. In this review, we'll examine Gemini's capabilities, how it stacks up against rivals, and whether the premium version is worth the subscription cost in 2025.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Gemini</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Gemini</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Gemini Models and Capabilities</h3>
              <p>
                Google offers Gemini in several model versions, each with different capabilities and performance characteristics:
              </p>
              
              <ul>
                <li><strong>Gemini 1.5 Pro:</strong> The most capable Gemini model currently available to consumers, offering advanced reasoning, multimodal capabilities, and a 32K token context window</li>
                <li><strong>Gemini 1.5 Flash:</strong> A faster and more efficient model designed for quick responses and lighter tasks</li>
                <li><strong>Gemini Nano:</strong> An on-device model for mobile applications, focusing on privacy and offline capabilities</li>
              </ul>
              
              <p>
                Gemini's core strengths include:
              </p>
              
              <ul>
                <li><strong>Google ecosystem integration:</strong> Deep connections with Google apps and services</li>
                <li><strong>Multimodal understanding:</strong> Processing text, images, and data together effectively</li>
                <li><strong>Search capabilities:</strong> Direct access to Google Search for up-to-date information</li>
                <li><strong>Extensions:</strong> Support for various extensions including Gmail, Google Drive, Google Maps, and third-party services</li>
              </ul>
              
              <h3>Google Ecosystem Integration</h3>
              <p>
                What truly distinguishes Gemini from competitors is its seamless integration with Google's suite of products. Gemini can:
              </p>
              
              <ul>
                <li>Search your Gmail for specific information or documents</li>
                <li>Create, edit, and analyze Google Docs, Sheets, and Slides</li>
                <li>Access and summarize information from your Google Drive</li>
                <li>Extract information from YouTube videos</li>
                <li>Work with Google Maps data for location-based queries</li>
                <li>Utilize real-time information from Google Search</li>
              </ul>
              
              <p>
                For users deeply embedded in the Google ecosystem, this integration provides significant productivity benefits. You can ask Gemini to "find my flight confirmation email from last week" or "summarize my meeting notes from yesterday's Google Doc," and it can execute these requests directly.
              </p>
              
              <h3>Web Search and Current Information</h3>
              <p>
                Gemini's built-in search capability stands out as one of its most valuable features. Unlike some competitors that rely solely on their training data (which has a cutoff date), Gemini can search the web in real-time to provide up-to-date information. This makes it particularly useful for:
              </p>
              
              <ul>
                <li>Current events and news</li>
                <li>Recent product releases or announcements</li>
                <li>Contemporary data and statistics</li>
                <li>Fact-checking or verification</li>
              </ul>
              
              <p>
                The search functionality is integrated directly into the conversation flow, making it feel natural rather than like a separate tool. Gemini clearly indicates when it's using search to supplement its knowledge, and typically provides sources for information retrieved this way.
              </p>
              
              <h3>Multimodal Capabilities</h3>
              <p>
                Gemini was designed from the ground up as a multimodal AI system, meaning it can understand and work with different types of content simultaneously:
              </p>
              
              <ul>
                <li><strong>Image understanding:</strong> Analyzing photos, screenshots, diagrams, and other visual content</li>
                <li><strong>Document processing:</strong> Extracting and understanding information from PDFs, presentations, and other documents</li>
                <li><strong>Mixed-media comprehension:</strong> Working with content that combines text, images, and data</li>
              </ul>
              
              <p>
                In testing, Gemini's visual understanding capabilities are impressive. It can analyze charts and graphs, interpret complex diagrams, identify objects in images, and even understand screenshots of software interfaces to provide guidance.
              </p>
              
              <h3>Practical Applications of Gemini</h3>
              
              <h4>1. Productivity and Personal Assistant</h4>
              <p>
                Gemini excels as a productivity assistant, especially for users of Google Workspace. It can draft emails in Gmail, create documents in Google Docs, analyze data in Sheets, and provide meeting summaries. The integration with Google Calendar, Tasks, and other productivity tools creates a unified assistant that can help manage your digital life.
              </p>
              
              <h4>2. Research and Information Gathering</h4>
              <p>
                With its search capabilities, Gemini serves as an effective research tool. It can gather information on any topic, providing current data and summarizing findings. This is particularly useful for students, researchers, and anyone needing to quickly gather information from diverse sources.
              </p>
              
              <h4>3. Content Creation</h4>
              <p>
                While not as nuanced in creative writing as some competitors, Gemini is competent at generating various types of content, including blog posts, social media content, marketing copy, and creative writing. It can adapt its tone and style based on instructions and can work with both text and visual content.
              </p>
              
              <h4>4. Learning and Education</h4>
              <p>
                Gemini's search capabilities make it a valuable learning tool. It can explain complex concepts, provide examples, and find educational resources. It's particularly strong in STEM subjects, where it can solve problems and provide step-by-step explanations.
              </p>
              
              <h3>Gemini Pricing and Value</h3>
              <p>
                Google offers Gemini in the following tiers:
              </p>
              
              <ul>
                <li><strong>Gemini (Free):</strong> Access to Gemini 1.5 Flash with basic features and standard usage limits</li>
                <li><strong>Google One AI Premium:</strong> $20/month – access to Gemini 1.5 Pro, priority access, higher usage limits, and advanced features</li>
                <li><strong>Gemini for Google Workspace:</strong> Additional pricing for business integration</li>
                <li><strong>Gemini API:</strong> Pay-per-use pricing for developers</li>
              </ul>
              
              <p>
                The Google One AI Premium plan also includes additional Google One benefits, such as 2TB of cloud storage, VPN access, and other premium features, making it potentially more valuable for existing Google users.
              </p>
              
              <h3>Gemini vs. Competitors in 2025</h3>
              <p>
                When comparing Gemini to other leading AI assistants:
              </p>
              
              <ul>
                <li><strong>vs. ChatGPT (GPT-4o):</strong> ChatGPT generally offers better reasoning capabilities, stronger coding support, and more creative writing abilities. Gemini counters with better Google ecosystem integration and native search capabilities.</li>
                <li><strong>vs. Claude:</strong> Claude excels in reasoning, document understanding, and handling complex instructions with its 200K token context window. Gemini offers better search and Google ecosystem integration but falls behind in deep reasoning and document processing.</li>
                <li><strong>vs. Perplexity:</strong> Both offer strong search capabilities, but Perplexity focuses more on research with better citation practices, while Gemini provides broader application integration and productivity features.</li>
              </ul>
              
              <p>
                Gemini's main advantages over competitors include:
              </p>
              
              <ul>
                <li>Unmatched Google ecosystem integration</li>
                <li>Seamless search capabilities within conversations</li>
                <li>Strong multimodal performance</li>
                <li>The value-add of Google One benefits with the subscription</li>
              </ul>
              
              <p>
                However, Gemini currently lags behind in context window size (32K tokens vs. competitors' 128K-200K), and sometimes in the depth and nuance of complex reasoning tasks.
              </p>
            </div>
            
            {/* Comparison table of versions */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Gemini Free vs. Google One AI Premium: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Gemini (Free)</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Google One AI Premium</th>
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
                    <td className="px-4 py-3 text-center text-gray-700">Gemini 1.5 Flash</td>
                    <td className="px-4 py-3 text-center text-gray-700">Gemini 1.5 Pro</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Context Window</td>
                    <td className="px-4 py-3 text-center text-gray-700">8K tokens</td>
                    <td className="px-4 py-3 text-center text-gray-700">32K tokens</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Google Workspace Integration</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Usage Limits</td>
                    <td className="px-4 py-3 text-center text-gray-700">Standard</td>
                    <td className="px-4 py-3 text-center text-gray-700">Higher limits</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Google One Storage</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">2TB</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Additional Google One Benefits</td>
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
                    <td className="px-4 py-3 font-medium text-gray-700">Priority Access</td>
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
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Gemini is a powerful AI assistant that offers particular value for users already invested in the Google ecosystem. Its integration with Google services, combined with strong search capabilities and multimodal functions, makes it a versatile tool for productivity, research, and everyday assistance.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Google One AI Premium:</strong> Google Workspace users, anyone who values Google ecosystem integration, researchers who regularly need up-to-date information, and users who would benefit from the additional Google One perks like 2TB storage and VPN.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who can stick with the free version:</strong> Casual users, those with simpler AI needs, and users who don't require the advanced features or Google One benefits. The free version provides good general capabilities for everyday use.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Gemini Free" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get AI Premium" 
                  url={`${product.affiliateUrl}/pricing`} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={true}
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
                Do you have a question about Gemini? Ask in the comments below and we'll answer.
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
                  <span className="text-sm text-gray-500">AI Premium Price:</span>
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
                text="Try Gemini Free" 
                url={product.affiliateUrl} 
                color="primary" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-3"
              />
              
              <ButtonAffiliate 
                text="Get AI Premium" 
                url={`${product.affiliateUrl}/pricing`} 
                color="success" 
                hasFreeTrial={true}
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
                  <a href="/reviews/claude" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Claude</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-1">4.9/5</span>
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
                    <span>What is Google One AI Premium?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Google One AI Premium is a subscription plan that provides access to Google's premium AI features, including Gemini Advanced (with Gemini 1.5 Pro). It costs $20/month and also includes 2TB of Google One cloud storage, VPN by Google One, priority customer support, and other Google One benefits. It's essentially a bundle of Google's premium AI capabilities with their premium cloud storage plan.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Gemini integrate with Google Workspace?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Gemini integrates with Google Workspace in multiple ways. It can search through Gmail for specific information, create and edit Google Docs, analyze data in Google Sheets, access files in Google Drive, and help with Google Slides presentations. For businesses, Gemini for Google Workspace offers additional features including AI-powered meeting summaries in Google Meet, help drafting emails, and document generation. These integrations allow Gemini to act as an assistant that understands your data across the Google ecosystem.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is Gemini available worldwide?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Gemini's availability varies by region. While it has expanded since its initial launch, it's not yet available in all countries. As of 2025, Gemini is available in most major markets including the United States, Canada, most European countries, Australia, Japan, and many others. However, availability can be limited in certain regions due to regulatory considerations, language support, or other factors. Google continues to expand Gemini's availability, so it's worth checking the official Gemini website for the most current information on supported countries and languages.
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