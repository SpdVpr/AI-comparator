// src/app/reviews/cursor/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Cursor AI Review 2025: Is This AI Code Editor Worth Switching To?',
  description: 'Comprehensive review of Cursor AI code editor. Compare features, capabilities, pricing, and performance to other code editors. Is it worth switching to Cursor in 2025?',
  openGraph: {
    title: 'Cursor AI Review 2025: Is This AI Code Editor Worth Switching To?',
    description: 'Comprehensive review of Cursor AI code editor. Compare features, capabilities, pricing, and performance to other code editors. Is it worth switching to Cursor in 2025?',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function CursorReviewPage() {
  // Data for Cursor review
  const product = {
    name: 'Cursor',
    title: 'Cursor AI Review 2025: Is This AI Code Editor Worth Switching To?',
    description: 'Comprehensive review of Cursor AI code editor. Compare features, capabilities, pricing, and performance to other code editors. Is it worth switching to Cursor in 2025?',
    logo: '/images/logos/cursor.png',
    rating: 4.6,
    pricingStart: '$20/month (Pro)',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://cursor.sh',
    affiliateTrackingId: 'aicompare-cursor',
    pros: [
      'Powerful AI code completion with full repository understanding',
      'Excellent contextual chat interface for exploring and debugging code',
      'Built on VS Code, offering familiar experience and extension support',
      'Great at explaining code and generating documentation',
      'Semantic code search across projects',
      'Impressive refactoring capabilities',
      'Free tier is generous and functional'
    ],
    cons: [
      'Occasional lag when processing large files or repositories',
      'Requires active internet connection for AI features',
      'Some advanced features exclusive to paid plan',
      'Terminal integration could use improvement',
      'Not fully open-source',
      'Occasional inaccuracies in complex code generation'
    ],
    bestFor: ['Software developers', 'Full-stack engineers', 'AI enthusiasts', 'Students', 'Project teams'],
    keyFeatures: [
      { name: 'AI Model', value: 'GPT-4' },
      { name: 'Code Generation', value: 'Excellent' },
      { name: 'Repository Context', value: 'Full project understanding' },
      { name: 'Refactoring', value: 'Advanced AI-assisted' },
      { name: 'Documentation', value: 'Automated generation' },
      { name: 'Code Search', value: 'Semantic search capabilities' },
      { name: 'Chat Interface', value: 'Context-aware' }
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
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, Linux'
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
                Cursor is an AI-native code editor that integrates powerful AI capabilities directly into your development workflow, enhancing productivity with intelligent code generation, refactoring, and contextual assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Cursor" 
                  url={product.affiliateUrl} 
                  color="primary" 
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Cursor?</h2>
            <p className="text-gray-700 mb-4">
              Cursor is an AI-native code editor, built as a fork of VS Code, that deeply integrates advanced AI capabilities into the development workflow. Founded in 2022 by a team from previous startups and top tech companies, Cursor has evolved beyond being just "VS Code with AI" into a distinctive coding environment optimized for AI-assisted programming.
            </p>
            <p className="text-gray-700 mb-6">
              The editor maintains Visual Studio Code's familiar interface while adding powerful AI features through direct GPT-4 integration, enabling developers to generate, explain, refactor, and debug code with AI assistance. In this review, we'll examine how Cursor performs in 2025 and whether it's worth switching from your current development environment.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Cursor</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Cursor</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Code Generation and Completion</h3>
              <p>
                Cursor shines brightest with its code generation capabilities. Unlike traditional code completion tools that offer line-by-line suggestions based on patterns, Cursor can:
              </p>
              
              <ul>
                <li><strong>Generate entire functions or components</strong> based on natural language descriptions</li>
                <li><strong>Implement features</strong> described in plain English</li>
                <li><strong>Create unit tests</strong> for existing code</li>
                <li><strong>Convert between programming languages</strong> with impressive accuracy</li>
                <li><strong>Scaffold entire projects</strong> according to specifications</li>
              </ul>
              
              <p>
                The AI understands context beyond the current file, taking into account other project files, imports, dependencies, and coding patterns used throughout your repository. This results in generated code that's more consistent with your project's style and architecture.
              </p>
              
              <h3>Context-Aware Chat Interface</h3>
              <p>
                One of Cursor's standout features is its contextual chat interface. Unlike generic AI assistants, Cursor's chat system:
              </p>
              
              <ul>
                <li>Has complete awareness of your entire codebase</li>
                <li>Understands relationships between files and components</li>
                <li>Can answer questions about specific code sections</li>
                <li>Helps debug issues by analyzing relevant parts of your project</li>
                <li>Suggests improvements based on your existing code patterns</li>
              </ul>
              
              <p>
                This is particularly valuable for onboarding to new codebases, understanding legacy code, or exploring unfamiliar libraries and frameworks. The chat window feels like having an experienced pair programmer who knows your entire project.
              </p>
              
              <h3>Code Refactoring</h3>
              <p>
                Cursor excels at AI-assisted refactoring tasks that would be time-consuming to perform manually:
              </p>
              
              <ul>
                <li>Restructuring complex functions for better readability</li>
                <li>Optimizing inefficient code while maintaining functionality</li>
                <li>Converting between coding patterns (e.g., from callbacks to promises to async/await)</li>
                <li>Updating code to use newer language features or libraries</li>
                <li>Implementing design patterns appropriate to your codebase</li>
              </ul>
              
              <p>
                The refactoring capabilities go beyond simple transformations to understand the intent behind your code, allowing for more intelligent restructuring that maintains business logic while improving implementation.
              </p>
              
              <h3>Semantic Code Search</h3>
              <p>
                Cursor's semantic search capabilities dramatically improve navigation in large codebases:
              </p>
              
              <ul>
                <li>Search for code by describing its functionality in natural language</li>
                <li>Find related functions across different files</li>
                <li>Locate implementation details without knowing exact function names</li>
                <li>Discover usage patterns throughout your project</li>
              </ul>
              
              <p>
                This feature is particularly valuable when working with unfamiliar codebases or when trying to locate specific functionality in complex projects with many files and directories.
              </p>
              
              <h3>User Experience and Interface</h3>
              <p>
                Being built on VS Code, Cursor offers a familiar and polished interface for existing VS Code users. Key aspects include:
              </p>
              
              <ul>
                <li>Clean, customizable interface with various themes</li>
                <li>Support for most VS Code extensions</li>
                <li>Familiar keyboard shortcuts and commands</li>
                <li>Split editing, terminal integration, and other standard IDE features</li>
                <li>AI controls seamlessly integrated into the traditional coding experience</li>
              </ul>
              
              <p>
                The transition for VS Code users is nearly seamless, with the AI features feeling like natural extensions rather than bolted-on additions. Some features are hidden behind keyboard shortcuts, which can create a slight learning curve, but documentation and in-app tutorials help new users get oriented.
              </p>
              
              <h3>Performance and Reliability</h3>
              <p>
                Cursor generally offers good performance, though there are some considerations:
              </p>
              
              <ul>
                <li>Base editor performance is comparable to VS Code</li>
                <li>AI operations occasionally introduce latency, especially when processing large repositories</li>
                <li>Requires an active internet connection for AI features</li>
                <li>Occasional inaccuracies in complex AI-generated code require human verification</li>
                <li>Works well across Windows, macOS, and Linux platforms</li>
              </ul>
              
              <p>
                The editor maintains responsiveness for basic coding tasks even when AI features are processing, allowing you to continue work while waiting for AI-generated results.
              </p>
              
              <h3>Pricing and Value</h3>
              <p>
                Cursor offers two main pricing tiers:
              </p>
              
              <ul>
                <li><strong>Free Version:</strong> Includes basic AI features with reasonable usage limits</li>
                <li><strong>Pro Plan:</strong> $20/month with higher limits, priority processing, and exclusive features</li>
              </ul>
              
              <p>
                The free tier is surprisingly capable, offering genuine value for individual developers, students, and small projects. Professional developers and teams will likely benefit from the Pro plan's additional features and higher usage limits, especially when working on larger codebases.
              </p>
              
              <h3>Cursor vs. Traditional Code Editors in 2025</h3>
              <p>
                Compared to traditional coding environments, Cursor offers significant advantages:
              </p>
              
              <ul>
                <li><strong>Time Savings:</strong> Accelerates routine coding tasks through AI assistance</li>
                <li><strong>Reduced Context Switching:</strong> Integrates documentation, explanation, and code generation in one environment</li>
                <li><strong>Learning Tool:</strong> Helps understand new codebases and technologies faster</li>
                <li><strong>Error Reduction:</strong> AI suggestions can help catch potential bugs earlier</li>
              </ul>
              
              <p>
                For experienced developers, the greatest value comes from automating routine tasks and reducing the cognitive load of context switching between documentation, Stack Overflow, and code editors.
              </p>
              
              <h3>Cursor vs. Other AI Coding Tools</h3>
              <p>
                In the growing landscape of AI-enhanced development tools, Cursor distinguishes itself through:
              </p>
              
              <ul>
                <li><strong>Comprehensive Integration:</strong> Deep AI integration throughout the entire IDE</li>
                <li><strong>Whole Repository Context:</strong> Understanding of the entire codebase rather than just the current file</li>
                <li><strong>Chat Interface Quality:</strong> More conversational and context-aware than most competitors</li>
                <li><strong>VS Code Compatibility:</strong> Familiar interface and extension support</li>
              </ul>
              
              <p>
                While GitHub Copilot offers integration with multiple editors and Codeium provides a free alternative, Cursor's AI-native approach and deep contextual understanding set it apart as a comprehensive solution rather than just an add-on to existing tools.
              </p>
            </div>
            
            {/* Comparison table of competitors */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cursor vs. Competitors: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Cursor</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">GitHub Copilot</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Codeium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">AI Model</td>
                    <td className="px-4 py-3 text-center text-gray-700">GPT-4</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom GPT model</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Free Version</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes (generous)</td>
                    <td className="px-4 py-3 text-center text-gray-700">No (trial only)</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Multi-editor Support</td>
                    <td className="px-4 py-3 text-center text-gray-700">No (standalone)</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Repository Context</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Chat Interface</td>
                    <td className="px-4 py-3 text-center text-gray-700">Integrated</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes (Copilot Chat)</td>
                    <td className="px-4 py-3 text-center text-gray-700">Limited</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Semantic Search</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes</td>
                    <td className="px-4 py-3 text-center text-gray-700">No</td>
                    <td className="px-4 py-3 text-center text-gray-700">No</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Paid Plan Cost</td>
                    <td className="px-4 py-3 text-center text-gray-700">$20/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">$10/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">$12/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-teal-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Cursor represents a significant evolution in AI-enhanced development environments, offering a deeply integrated AI experience that goes beyond simple code completion. Its contextual understanding of entire codebases, powerful refactoring capabilities, and excellent chat interface make it a compelling option for many developers.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Cursor:</strong> Developers looking to improve productivity, teams working on complex codebases who need better navigation and understanding tools, developers who want an all-in-one solution rather than multiple extensions, and anyone intrigued by AI-assisted coding who wants a familiar VS Code-like experience.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who might prefer alternatives:</strong> Developers who need cross-editor support (GitHub Copilot), those who prefer completely free solutions with no usage limits (Codeium), or developers working in specialized environments not well supported by Cursor.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Cursor Free" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Cursor Pro" 
                  url={`${product.affiliateUrl}/pricing`} 
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
                Do you have a question about Cursor? Ask in the comments below and we'll answer.
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
                text="Try Cursor Free" 
                url={product.affiliateUrl} 
                color="primary" 
                hasFreeTrial={false}
                hasFreeVersion={true}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Coding Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/github-copilot" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">GC</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">GitHub Copilot</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.8/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/codeium" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Codeium</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/tabnine" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">TN</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Tabnine</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.4/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/ai-for-coding" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI coding tools
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
                    <span>Is Cursor better than GitHub Copilot?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Cursor and GitHub Copilot serve slightly different needs. Cursor is a full AI-native code editor with deep contextual understanding of your entire codebase and excellent chat interface. Copilot is a plugin that works across multiple editors and excels at in-line code completion. Cursor may be better for those who want an all-in-one solution with advanced AI features, while Copilot is better for those who want to enhance their existing editor of choice.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can I use my VS Code extensions with Cursor?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, most VS Code extensions work with Cursor since it's built on the VS Code platform. You can install extensions directly from the VS Code Marketplace within Cursor. However, some extensions might have compatibility issues, particularly those that deeply modify the editor's core functionality. The vast majority of language support, themes, and productivity extensions work perfectly fine.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is Cursor suitable for professional development work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, Cursor is suitable for professional development work. It includes all the core functionality developers need for serious projects, including debugging, Git integration, extensions, and terminal support. Its AI features can enhance productivity on commercial projects. However, some enterprise teams might have concerns about sending code to external AI services, so it's important to review your organization's security policies before using Cursor for sensitive proprietary code.
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