// src/app/reviews/github-copilot/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'GitHub Copilot Review 2025: Is It Worth the Subscription?',
  description: 'Comprehensive review of GitHub Copilot. Explore features, pricing, coding capabilities, and see if this AI pair programmer is worth it for developers in 2025.',
  openGraph: {
    title: 'GitHub Copilot Review 2025: Is It Worth the Subscription?',
    description: 'Comprehensive review of GitHub Copilot. Explore features, pricing, coding capabilities, and see if this AI pair programmer is worth it for developers in 2025.',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function GitHubCopilotReviewPage() {
  // Data for GitHub Copilot review
  const product = {
    name: 'GitHub Copilot',
    title: 'GitHub Copilot Review 2025: Is It Worth the Subscription?',
    description: 'Comprehensive review of GitHub Copilot. Explore features, pricing, coding capabilities, and see if this AI pair programmer is worth it for developers in 2025.',
    logo: '/images/logos/github-copilot.png',
    rating: 4.8,
    pricingStart: '$10/month (Individual)',
    hasFreeVersion: false,
    hasFreeTrial: true,
    affiliateUrl: 'https://github.com/features/copilot',
    affiliateTrackingId: 'aicompare-github-copilot',
    pros: [
      'Outstanding code completion accuracy',
      'Supports all major programming languages',
      'Excellent IDE integration',
      'Understands project context',
      'Generates tests and documentation',
      'Copilot Chat for code explanations and problem-solving'
    ],
    cons: [
      'Subscription cost may be high for hobbyists',
      'Occasionally suggests deprecated code',
      'May generate code with security vulnerabilities',
      'Limited offline functionality',
      'Knowledge cutoff means no awareness of newest frameworks/libraries'
    ],
    bestFor: ['Software developers', 'Web developers', 'Data scientists', 'DevOps engineers', 'Students'],
    keyFeatures: [
      { name: 'AI Model', value: 'Custom GPT model' },
      { name: 'IDE Integration', value: 'VS Code, Visual Studio, JetBrains IDEs, Neovim' },
      { name: 'Languages Supported', value: '20+ programming languages' },
      { name: 'Context Understanding', value: 'Understands repository context and code patterns' },
      { name: 'Copilot Chat', value: 'Available for code explanation and guidance' },
      { name: 'Test Generation', value: 'Can generate unit tests' },
      { name: 'Business Plans', value: 'Available with GitHub Enterprise' }
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
                GitHub Copilot is an AI pair programmer that helps developers write better code faster by offering intelligent code suggestions in real-time directly in their editor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try GitHub Copilot" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">Price:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is GitHub Copilot?</h2>
            <p className="text-gray-700 mb-4">
              GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It functions as a virtual pair programmer, suggesting whole lines or blocks of code as you type. Unlike traditional code completion tools that work based on simple patterns, Copilot uses a sophisticated AI model trained on billions of lines of public code.
            </p>
            <p className="text-gray-700 mb-6">
              Released in 2021 and moving out of technical preview in 2022, GitHub Copilot has revolutionized the development workflow for many programmers. In this review, we'll examine its capabilities, limitations, pricing structure, and determine whether it's worth the subscription cost for different types of developers in 2025.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of GitHub Copilot</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of GitHub Copilot</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>How GitHub Copilot Works</h3>
              <p>
                GitHub Copilot uses a modified version of GPT (Generative Pre-trained Transformer) that's been specifically fine-tuned for code generation. Unlike ChatGPT or other general-purpose language models, Copilot is optimized for understanding and generating code across multiple programming languages.
              </p>
              
              <p>
                The tool works by analyzing:
              </p>
              
              <ul>
                <li>The code you're currently writing</li>
                <li>Comments and docstrings that describe what you want to achieve</li>
                <li>Function and variable names</li>
                <li>The surrounding code in your file</li>
                <li>Other files in your project for context</li>
              </ul>
              
              <p>
                Based on this analysis, Copilot suggests the most likely code to follow. What makes Copilot particularly impressive is its ability to understand the intent behind your code and generate appropriate solutions, not just autocomplete simple patterns.
              </p>
              
              <h3>Code Completion Capabilities</h3>
              <p>
                The core functionality of GitHub Copilot is its inline code suggestions. These range from:
              </p>
              
              <ul>
                <li><strong>Simple line completions:</strong> Finishing the current line you're typing</li>
                <li><strong>Multi-line suggestions:</strong> Proposing entire function bodies or algorithms</li>
                <li><strong>Whole function implementations:</strong> Based on descriptive comments or function signatures</li>
                <li><strong>Complex code structures:</strong> Generating entire classes or data structures</li>
              </ul>
              
              <p>
                The quality of Copilot's suggestions is generally excellent, particularly for common programming patterns and standard libraries. For mainstream languages like JavaScript, Python, TypeScript, Java, and C#, the accuracy is remarkably high. Even for less common languages, the suggestions are useful more often than not.
              </p>
              
              <h3>GitHub Copilot Chat</h3>
              <p>
                One of the most significant additions to GitHub Copilot has been Copilot Chat. Similar to having a senior developer on standby, this feature allows you to:
              </p>
              
              <ul>
                <li>Ask questions about your code</li>
                <li>Get explanations of complex functions</li>
                <li>Request help with debugging</li>
                <li>Receive guidance on best practices</li>
                <li>Generate code based on natural language descriptions</li>
              </ul>
              
              <p>
                Copilot Chat is integrated directly into the IDE, making it seamless to use without context switching. This feature dramatically enhances Copilot's value proposition, transforming it from a code suggestion tool to a comprehensive AI coding assistant.
              </p>
              
              <h3>IDE Integration</h3>
              <p>
                GitHub Copilot integrates with all major development environments, including:
              </p>
              
              <ul>
                <li>Visual Studio Code</li>
                <li>Visual Studio</li>
                <li>JetBrains IDEs (IntelliJ, PyCharm, WebStorm, etc.)</li>
                <li>Neovim</li>
                <li>Web environments like GitHub.com's code editor</li>
              </ul>
              
              <p>
                The integration is smooth and non-intrusive. Suggestions appear as ghost text that can be accepted with a tab key or ignored by continuing to type. The experience feels natural and doesn't disrupt the coding flow, which is crucial for a tool that aims to speed up development.
              </p>
              
              <h3>Additional Capabilities</h3>
              <p>
                Beyond basic code completion, GitHub Copilot offers:
              </p>
              
              <ul>
                <li><strong>Test generation:</strong> Can suggest unit tests based on your implementation code</li>
                <li><strong>Documentation writing:</strong> Generates comments and documentation for existing code</li>
                <li><strong>Code refactoring suggestions:</strong> Helps improve code quality through Copilot Chat</li>
                <li><strong>Debugging assistance:</strong> Can identify potential issues in your code</li>
                <li><strong>Converting code between languages:</strong> Helps port code from one language to another</li>
              </ul>
              
              <h3>Limitations and Concerns</h3>
              <p>
                While GitHub Copilot is powerful, it does have several limitations to consider:
              </p>
              
              <ul>
                <li>
                  <strong>Security concerns:</strong> Copilot may occasionally suggest code with security vulnerabilities, as it's trained on public repositories that may contain insecure patterns.
                </li>
                <li>
                  <strong>Outdated patterns:</strong> Since Copilot has a knowledge cutoff date, it may not be aware of the newest frameworks, libraries, or best practices.
                </li>
                <li>
                  <strong>Licensing questions:</strong> There have been concerns about the training data used and potential copyright implications, though GitHub has taken steps to address these.
                </li>
                <li>
                  <strong>Overreliance risk:</strong> Some developers worry about becoming too dependent on AI suggestions, potentially limiting their learning and growth.
                </li>
              </ul>
              
              <h3>GitHub Copilot Pricing</h3>
              <p>
                GitHub Copilot offers several pricing tiers:
              </p>
              
              <ul>
                <li><strong>GitHub Copilot Individual:</strong> $10/month or $100/year</li>
                <li><strong>GitHub Copilot Business:</strong> $19/month per user (includes additional security features)</li>
                <li><strong>GitHub Copilot Enterprise:</strong> $39/month per user (with enhanced security and admin controls)</li>
                <li><strong>Free for students:</strong> Available at no cost for verified students through the GitHub Student Developer Pack</li>
                <li><strong>Free for certain open source maintainers:</strong> GitHub offers free access to verified maintainers of popular open source projects</li>
              </ul>
              
              <h3>GitHub Copilot vs. Competitors</h3>
              <p>
                The AI coding assistant space has grown significantly since Copilot's release. Key competitors include:
              </p>
              
              <ul>
                <li><strong>Amazon CodeWhisperer:</strong> Free for individual use with a strong focus on AWS integration and security scanning</li>
                <li><strong>Tabnine:</strong> Offers a free tier with more privacy-focused features and on-device options</li>
                <li><strong>Codeium:</strong> Positions itself as a free alternative with comparable features</li>
                <li><strong>Cursor:</strong> An AI-first code editor with integrated coding assistance</li>
                <li><strong>JetBrains AI Assistant:</strong> Built directly into JetBrains IDEs with strong refactoring abilities</li>
              </ul>
              
              <p>
                Compared to these competitors, GitHub Copilot generally offers:
              </p>
              
              <ul>
                <li>Higher quality suggestions for most mainstream programming tasks</li>
                <li>Better contextual understanding of complex codebases</li>
                <li>Superior IDE integration across multiple platforms</li>
                <li>The addition of Copilot Chat for more interactive assistance</li>
              </ul>
              
              <p>
                However, some alternatives offer free tiers (like Codeium) or better specialized features for certain domains (like CodeWhisperer for AWS development).
              </p>
            </div>
            
            {/* Comparison table of versions */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">GitHub Copilot Plans Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Individual</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Business</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price</td>
                    <td className="px-4 py-3 text-center text-gray-700">$10/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">$19/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">$39/month</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Code Completion</td>
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
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Copilot Chat</td>
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
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">IP Indemnity</td>
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
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Admin Controls</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Security Features</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Enhanced</td>
                    <td className="px-4 py-3 text-center text-gray-700">Enterprise-grade</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Organization Policy Controls</td>
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
                GitHub Copilot is without question one of the most impressive and useful developer tools to emerge in recent years. Its ability to understand code context and suggest meaningful completions is remarkable, and the addition of Copilot Chat has transformed it into a comprehensive coding assistant.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get GitHub Copilot:</strong> Professional developers who write code daily, teams looking to improve productivity, developers working on large or complex projects, and anyone who values their time and wants to reduce repetitive coding tasks.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who might want to look at alternatives:</strong> Hobbyist programmers on a tight budget, students (unless they qualify for the free student access), developers working in highly specialized domains not well-represented in public repositories, and those with serious concerns about code security or IP issues.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try GitHub Copilot" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={true}
                  hasFreeVersion={false}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Business Plan" 
                  url={`${product.affiliateUrl}/business`} 
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
                Do you have a question about GitHub Copilot? Ask in the comments below and we'll answer.
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
                  <span className="text-sm text-gray-500">Price:</span>
                  <div className="font-medium text-gray-800 mt-1">{product.pricingStart}</div>
                </div>
                
                {product.hasFreeTrial && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free trial available</span>
                  </div>
                )}
              </div>
              
              <ButtonAffiliate 
                text="Try GitHub Copilot" 
                url={product.affiliateUrl} 
                color="primary" 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Coding Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/codeium" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">C</span>
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
                      <span className="text-purple-600 font-medium">T</span>
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
                <li>
                  <a href="/reviews/amazon-codewhisperer" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-yellow-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-yellow-600 font-medium">A</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">CodeWhisperer</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.3/5</span>
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
                    <span>Is GitHub Copilot worth the monthly fee?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    For professional developers, the $10/month subscription is generally well worth the investment. Studies suggest that Copilot can help developers code up to 55% faster, which translates to significant time savings for anyone who codes regularly. For occasional programmers or hobbyists, the value proposition may be less obvious, but a free trial is available to evaluate the benefits.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How accurate is GitHub Copilot's code?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    GitHub Copilot is impressively accurate for standard coding patterns and commonly used libraries. For mainstream languages like JavaScript, Python, and TypeScript, accuracy rates can exceed 80%. However, all suggestions should still be reviewed, as Copilot can occasionally suggest deprecated methods, include subtle bugs, or introduce security vulnerabilities. It works best as an assistant rather than a replacement for developer judgment.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can GitHub Copilot write entire applications?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    While GitHub Copilot can generate substantial chunks of code and even entire functions or classes, it's not designed to write complete applications from scratch. It works best when guided by developers who provide clear context, structure, and direction. Copilot is most effective for automating routine coding tasks, implementing well-defined algorithms, or generating boilerplate code, rather than architecting entire systems.
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