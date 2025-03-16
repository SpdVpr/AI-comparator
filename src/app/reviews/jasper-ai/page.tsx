// src/app/reviews/jasper-ai/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Jasper AI Review 2025: Is It Worth It for Content Creation?',
  description: 'Comprehensive Jasper AI review with real-world tests, pricing analysis, and comparison with competitors. Is Jasper still the best AI writing tool in 2025?',
  openGraph: {
    title: 'Jasper AI Review 2025: Is It Worth It for Content Creation?',
    description: 'Comprehensive Jasper AI review with real-world tests, pricing analysis, and comparison with competitors. Is Jasper still the best AI writing tool in 2025?',
    type: 'article',
    // Add OG image for better social sharing
  },
};

// Comparison to competitors
const competitors = [
  {
    name: 'Copy.ai',
    pros: ['Lower starting price', 'Good short-form content', 'Free plan available'],
    cons: ['Not as powerful for long-form content', 'Fewer advanced marketing features'],
    bestFor: 'Budget-conscious individuals and social media content'
  },
  {
    name: 'Writesonic',
    pros: ['More affordable pricing tiers', 'Good factual content with Chatsonic', 'Similar template variety'],
    cons: ['Content quality not quite as polished', 'Fewer enterprise features'],
    bestFor: 'Small businesses and startups on a budget'
  },
  {
    name: 'ChatGPT Plus',
    pros: ['Much cheaper at $20/month', 'More versatile for non-writing tasks', 'Latest GPT-4o model'],
    cons: ['No specialized marketing templates', 'No built-in SEO tools', 'Generic interface not built for content creators'],
    bestFor: 'General use AI with occasional content needs'
  }
];

export default function JasperAIReviewPage() {
  // Data for Jasper AI review
  const product = {
    name: 'Jasper AI',
    title: 'Jasper AI Review 2025: Is It Worth It for Content Creation?',
    description: 'Comprehensive Jasper AI review with real-world tests, pricing analysis, and comparison with competitors. Is Jasper still the best AI writing tool in 2025?',
    logo: '/images/logos/jasper.png',
    rating: 4.8,
    pricingStart: '$49/month (Creator plan)',
    hasFreeVersion: false,
    hasFreeTrial: true,
    affiliateUrl: 'https://jasper.ai',
    affiliateTrackingId: 'aicompare-jasper',
    pros: [
      'Exceptional quality content output',
      'Purpose-built for marketing copy and long-form content',
      'Intuitive, user-friendly interface',
      'Advanced SEO features and Surfer SEO integration',
      'Extensive template library for various content types',
      'Excellent collaborative features for teams'
    ],
    cons: [
      'Higher price point than many competitors',
      'Learning curve to master all features',
      'Limited free trial (only 7 days)',
      'Some advanced features only available on higher plans',
      'Occasional factual inaccuracies (like all AI tools)'
    ],
    bestFor: ['Marketing Teams', 'Content Agencies', 'SEO Specialists', 'Bloggers', 'E-commerce Businesses'],
    keyFeatures: [
      { name: 'AI Model', value: 'Custom model based on GPT-4' },
      { name: 'Content Types', value: 'Blog posts, marketing copy, product descriptions, emails, and more' },
      { name: 'Templates', value: '50+ content templates' },
      { name: 'Languages', value: 'Supports 30+ languages' },
      { name: 'SEO Features', value: 'Advanced, with Surfer SEO integration (on Pro plans)' },
      { name: 'Tone Control', value: 'Advanced tone customization' },
      { name: 'Team Features', value: 'Collaborative editing, roles, permissions' },
      { name: 'Plagiarism Check', value: 'Included on higher plans' },
      { name: 'Browser Extension', value: 'Yes' }
    ]
  };
  
  // Pricing plans
  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49/month',
      wordLimit: '50,000 words/month',
      keyFeatures: [
        'Single Seat',
        '50+ Templates',
        'Basic SEO Features',
        'Chrome Extension',
        'Content Brief Builder',
        'Email Support'
      ],
      bestFor: 'Individual creators and small businesses'
    },
    {
      name: 'Teams',
      price: '$125/month',
      wordLimit: '100,000 words/month',
      keyFeatures: [
        '3 Seats included (additional seats $49/month each)',
        'Everything in Creator',
        'Surfer SEO Integration',
        'Grammarly Integration',
        'Advanced Analytics',
        'Team Workspaces',
        'Priority Support'
      ],
      bestFor: 'Small marketing teams and agencies'
    },
    {
      name: 'Business',
      price: 'Custom pricing',
      wordLimit: 'Custom word limits',
      keyFeatures: [
        'Everything in Teams',
        'Unlimited Seats',
        'API Access',
        'Custom AI Training',
        'Custom Templates',
        'Brand Voice Settings',
        'Dedicated Account Manager',
        '24/7 Priority Support'
      ],
      bestFor: 'Enterprise clients and large agencies'
    }
  ];
  
  // Example use cases
  const useCases = [
    {
      title: 'Blog Content Creation',
      description: 'Generate entire blog posts with optimized SEO structure, headings, and keywords',
      effectiveness: 'Excellent',
      example: 'Blog post outline → First draft → SEO optimization → Final polished article'
    },
    {
      title: 'Marketing Copy',
      description: 'Create ad copy, social media posts, email campaigns, and landing page content',
      effectiveness: 'Excellent',
      example: 'Facebook ads, product descriptions, sales emails, and website headlines'
    },
    {
      title: 'Product Descriptions',
      description: 'Generate compelling product descriptions optimized for conversions',
      effectiveness: 'Very Good',
      example: 'E-commerce product listings with benefit-focused, persuasive copy'
    },
    {
      title: 'Social Media Content',
      description: 'Create engaging posts, captions, and content calendars',
      effectiveness: 'Very Good',
      example: 'LinkedIn posts, Instagram captions, Twitter threads, and platform-specific content'
    }
  ];
  
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
        <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-8 shadow-sm mb-10">
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
                Jasper AI is a specialized AI writing assistant designed for marketing teams and content creators. With advanced content generation capabilities and SEO features, it's positioned as a premium tool for professional content creation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Jasper AI" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">Starting at:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Jasper AI?</h2>
            <p className="text-gray-700 mb-4">
              Jasper AI (formerly known as Jarvis) is an advanced AI content generation platform specifically designed for marketing teams, content creators, and businesses. It uses a sophisticated AI language model to generate various types of content—from long-form blog posts and articles to marketing copy, social media posts, and product descriptions.
            </p>
            <p className="text-gray-700 mb-6">
              Unlike general-purpose AI tools, Jasper specializes in marketing and business content, with features tailored to these specific use cases. It offers an extensive library of templates, tone adjustment capabilities, and SEO optimization tools that make it particularly valuable for professional content creation.
            </p>
            
            {/* Interface screenshot */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Jasper's User Interface</h2>
              <p className="text-gray-700 mb-4">
                One of Jasper's strengths is its intuitive interface designed specifically for content creation workflows:
              </p>
              
              <div className="relative aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/reviews/jasper-ai/interface-screenshot.jpg"
                  alt="Jasper AI user interface"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p className="text-gray-700 italic text-sm">
                Jasper's interface combines document editing capabilities with AI content generation tools in a clean, modern design.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Jasper AI</h2>
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
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Content Quality Assessment</h3>
              <p>
                The quality of AI-generated content is ultimately what matters most, and this is where Jasper truly excels. In our extensive testing across different content types, Jasper consistently produced higher quality outputs compared to general-purpose AI tools and even many specialized competitors.
              </p>
              
              <p>
                Key quality factors that stood out in our evaluation:
              </p>
              
              <ul>
                <li><strong>Marketing Expertise:</strong> Jasper seems to have been fine-tuned specifically for marketing copy, with a natural understanding of persuasive language, benefit-driven writing, and conversion principles.</li>
                <li><strong>Natural Tone:</strong> Unlike some AI tools that produce robotic-sounding content, Jasper's outputs read naturally and can adapt to various brand voices.</li>
                <li><strong>Structure and Flow:</strong> Long-form content maintains logical structure and smooth transitions between sections.</li>
                <li><strong>SEO Awareness:</strong> Generated content naturally incorporates SEO best practices, especially when using the integrated Surfer SEO features.</li>
              </ul>
              
              <p>
                While no AI tool is perfect, Jasper's output typically requires less editing than competitors, especially for marketing-focused content. That said, factual accuracy remains a challenge for all AI systems, and human review is still necessary, particularly for industry-specific or technical content.
              </p>
              
              <h3>User Experience and Workflow</h3>
              <p>
                Jasper's interface is purpose-built for content creation workflows, offering three main environments:
              </p>
              
              <ol>
                <li><strong>Documents:</strong> A clean, distraction-free word processor for creating long-form content with AI assistance.</li>
                <li><strong>Templates:</strong> Specialized interfaces for generating specific content types like product descriptions, headlines, or email campaigns.</li>
                <li><strong>Chat:</strong> A conversational interface similar to ChatGPT but trained to excel at marketing-specific requests.</li>
              </ol>
              
              <p>
                Each environment is intuitive and visually appealing, with thoughtful features that simplify the content creation process. The platform includes keyboard shortcuts, formatting controls, and AI commands that help maintain productivity. The learning curve is steeper than with basic AI tools, but the investment pays off quickly for regular content creators.
              </p>
              
              <h3>Specialized Templates and Features</h3>
              <p>
                One of Jasper's main advantages is its extensive template library designed for specific marketing and business use cases. Some of the most valuable templates include:
              </p>
              
              <ul>
                <li><strong>AIDA Framework:</strong> Creates content following the Attention, Interest, Desire, Action marketing formula</li>
                <li><strong>PAS Framework:</strong> Generates copy using the Problem, Agitation, Solution approach</li>
                <li><strong>Product Description:</strong> Creates compelling product descriptions optimized for conversions</li>
                <li><strong>Blog Post Builder:</strong> Helps structure complete blog posts with appropriate headings and SEO elements</li>
                <li><strong>Content Improver:</strong> Refines and enhances existing content</li>
                <li><strong>Facebook/Google Ads:</strong> Specialized templates for different ad platforms</li>
              </ul>
              
              <p>
                These templates go beyond simple prompting by incorporating marketing best practices and conversion principles. They're especially valuable for teams that need to produce content at scale while maintaining quality and brand consistency.
              </p>
              
              <h3>SEO Capabilities</h3>
              <p>
                Jasper offers increasingly sophisticated SEO features, particularly on higher-tier plans:
              </p>
              
              <ul>
                <li><strong>Surfer SEO Integration:</strong> On Teams and Business plans, Jasper integrates with Surfer SEO to provide real-time content optimization recommendations based on top-ranking pages.</li>
                <li><strong>Keyword Optimization:</strong> Built-in tools to help incorporate target keywords naturally throughout content.</li>
                <li><strong>SEO-friendly Structures:</strong> Templates and frameworks that follow SEO best practices for content structure.</li>
                <li><strong>Meta Description Generator:</strong> Tools to create optimized meta descriptions for better click-through rates.</li>
              </ul>
              
              <p>
                These features make Jasper particularly valuable for content teams focused on organic traffic, though the most powerful SEO capabilities are only available on the higher-priced plans.
              </p>
              
              <h3>Collaboration Features</h3>
              <p>
                For teams and agencies, Jasper's collaboration features are a significant advantage:
              </p>
              
              <ul>
                <li><strong>Team Workspaces:</strong> Organize content by campaigns, clients, or departments</li>
                <li><strong>Permission Controls:</strong> Manage access levels for team members</li>
                <li><strong>Commenting:</strong> Add notes and feedback directly within documents</li>
                <li><strong>Brand Voice Settings:</strong> Create and save brand voice profiles to maintain consistency</li>
                <li><strong>Shared Templates:</strong> Custom templates available to the entire team</li>
              </ul>
              
              <p>
                These collaboration tools make Jasper more suitable for professional teams than many AI alternatives, which often focus solely on individual users.
              </p>
            </div>
            
            {/* Pricing & Plans */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Jasper AI Pricing & Plans</h3>
              <p className="text-gray-700 mb-4">
                Jasper positions itself as a premium AI writing solution, with pricing that reflects its specialized features and focus on professional content teams:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-white border ${index === 1 ? 'border-indigo-200 ring-1 ring-indigo-500' : 'border-gray-200'} rounded-xl overflow-hidden shadow-sm`}>
                    <div className={`px-4 py-3 ${index === 1 ? 'bg-indigo-50' : 'bg-gray-50'}`}>
                      <h4 className={`font-bold ${index === 1 ? 'text-indigo-700' : 'text-gray-800'}`}>{plan.name}</h4>
                    </div>
                    <div className="p-4">
                      <div className="mb-3">
                        <span className="text-2xl font-bold text-gray-800">{plan.price}</span>
                        <span className="text-sm text-gray-500 ml-1">billed monthly</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{plan.wordLimit}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {plan.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="text-xs text-gray-500 mb-4">Best for: {plan.bestFor}</p>
                      
                      <ButtonAffiliate 
                        text={`Get ${plan.name}`} 
                        url={`${product.affiliateUrl}?plan=${plan.name.toLowerCase()}`} 
                        color={index === 1 ? "primary" : "secondary"} 
                        hasFreeTrial={product.hasFreeTrial}
                        hasFreeVersion={product.hasFreeVersion}
                        trackingId={`${product.affiliateTrackingId}-${plan.name.toLowerCase()}`}
                        className="w-full justify-center"
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-gray-600">
                * All plans include a 7-day free trial. Annual billing offers a significant discount on all plans.
              </p>
            </div>
            
            {/* Use cases */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Jasper AI Use Cases</h3>
              <p className="text-gray-700 mb-4">
                Jasper excels in specific content creation scenarios. Here's how effective it is for different use cases:
              </p>
              
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{useCase.title}</h4>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      useCase.effectiveness === 'Excellent' ? 'bg-green-100 text-green-800' :
                      useCase.effectiveness === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                      useCase.effectiveness === 'Good' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {useCase.effectiveness}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{useCase.description}</p>
                  <div className="text-xs text-gray-500">
                    <strong>Example:</strong> {useCase.example}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Strengths & Weaknesses Analysis */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">When Jasper Shines (And When It Doesn't)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-3">Jasper is excellent for:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Marketing teams creating high-volume content</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Agencies managing content for multiple clients</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">SEO-focused content production at scale</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Creating consistent, branded content</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Consider alternatives if you need:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Basic AI writing on a tight budget</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Highly technical or scientific content</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">A versatile AI for non-content tasks</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">Very occasional content creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Jasper AI stands out as a premium, specialized AI writing tool that justifies its higher price point for professional content creators and marketing teams. Its purpose-built features for marketing copy, excellent template library, and strong collaboration tools make it particularly valuable for businesses that produce content at scale.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Jasper:</strong> Marketing teams, content agencies, e-commerce businesses, and professional content creators who need high-quality, consistent output and can justify the investment based on the volume of content they produce.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should look elsewhere:</strong> Individual users on a tight budget, those with only occasional content needs, or users seeking a more versatile AI for non-content tasks would likely find better value in more affordable alternatives like Copy.ai or even ChatGPT Plus.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Jasper AI Free" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
              </div>
            </div>
            
            {/* Comments and questions */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions and Answers</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                Do you have a question about Jasper AI? Ask in the comments below and we'll answer.
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
                  <span className="text-sm text-gray-500">Price from:</span>
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
                
                {product.hasFreeTrial && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">7-day free trial</span>
                  </div>
                )}
              </div>
              
              <ButtonAffiliate 
                text="Try Jasper AI Free" 
                url={product.affiliateUrl} 
                color="primary" 
                hasFreeTrial={product.hasFreeTrial}
                hasFreeVersion={product.hasFreeVersion}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Writing Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/copy-ai" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-teal-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Copy.ai</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/writesonic" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">W</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Writesonic</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.4/5</span>
                      </div>
                    </div>
                  </a>
                </li>
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
              </ul>
              <a href="/comparisons/ai-writing-tools" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI writing tools
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
                    <span>Is Jasper AI worth the price?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Jasper AI is worth the price for professional content teams, marketing agencies, and businesses that regularly produce high volumes of marketing content. The specialized features, templates, and collaboration tools justify the higher cost for these users. However, individual users with limited content needs may find better value in more affordable alternatives.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Jasper compare to ChatGPT?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    While ChatGPT is a more versatile general-purpose AI, Jasper is specialized for content marketing. Jasper offers marketing-specific templates, SEO features, and collaboration tools that ChatGPT lacks. However, ChatGPT Plus is significantly cheaper ($20/month vs. $49/month) and more flexible for non-content tasks. Choose Jasper if you need specialized marketing content tools and templates; choose ChatGPT for more versatile, general-purpose AI at a lower price.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can I use Jasper AI for SEO content?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, Jasper AI is excellent for SEO content, especially on the Teams and Business plans which include Surfer SEO integration. This provides real-time content optimization suggestions based on top-ranking pages. Even without Surfer integration, Jasper's templates are designed with SEO best practices in mind, and its blog post framework helps create well-structured content that typically performs well in search engines.
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
            
            {/* Comparison to competitors */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How Jasper Compares to Alternatives</h3>
              
              {competitors.map((competitor, index) => (
                <div key={index} className="mb-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-800">Jasper AI vs. {competitor.name}</h4>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">{competitor.name} Advantages:</h5>
                        <ul className="space-y-1">
                          {competitor.pros.map((pro, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">{competitor.name} Disadvantages:</h5>
                        <ul className="space-y-1">
                          {competitor.cons.map((con, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-600">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <strong>Choose {competitor.name} over Jasper for:</strong> {competitor.bestFor}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>