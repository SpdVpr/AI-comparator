// src/app/reviews/copy-ai/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Copy.ai Review 2025: Is This AI Copywriting Tool Worth It?',
  description: 'Comprehensive review of Copy.ai. Compare features, pricing, templates, and performance to other AI writing tools. See if it\'s the right AI copywriter for you in 2025.',
  openGraph: {
    title: 'Copy.ai Review 2025: Is This AI Copywriting Tool Worth It?',
    description: 'Comprehensive review of Copy.ai. Compare features, pricing, templates, and performance to other AI writing tools. See if it\'s the right AI copywriter for you in 2025.',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function CopyAIReviewPage() {
  // Data for Copy.ai review
  const product = {
    name: 'Copy.ai',
    title: 'Copy.ai Review 2025: Is This AI Copywriting Tool Worth It?',
    description: 'Comprehensive review of Copy.ai. Compare features, pricing, templates, and performance to other AI writing tools. See if it\'s the right AI copywriter for you in 2025.',
    logo: '/images/logos/copyai.png',
    rating: 4.5,
    pricingStart: '$36/month (Pro)',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://www.copy.ai',
    affiliateTrackingId: 'aicompare-copyai',
    pros: [
      'Excellent for short-form marketing copy',
      'User-friendly interface with minimal learning curve',
      'Great template variety (90+ templates)',
      'Powerful free plan available',
      'Team collaboration features',
      'Strong social media content generation'
    ],
    cons: [
      'Limited long-form content capabilities',
      'No SEO optimization features',
      'Less effective for technical or academic writing',
      'API access only available on higher plans',
      'No WordPress or browser extension'
    ],
    bestFor: ['Digital marketers', 'Social media managers', 'E-commerce businesses', 'Copywriters', 'Small businesses'],
    keyFeatures: [
      { name: 'AI Model', value: 'GPT-3.5' },
      { name: 'Templates', value: '90+ specialized marketing templates' },
      { name: 'Languages Supported', value: '29+ languages' },
      { name: 'Team Collaboration', value: 'Available with multi-seat options' },
      { name: 'Tone Customization', value: 'Multiple tone options available' },
      { name: 'Free Plan', value: 'Limited usage with core features' },
      { name: 'Content Types', value: 'Marketing, social media, emails, ads, product descriptions' }
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
                Copy.ai is an AI-powered copywriting tool designed to help marketers and businesses create compelling marketing content, social media posts, and advertising copy quickly and efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Copy.ai" 
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Copy.ai?</h2>
            <p className="text-gray-700 mb-4">
              Copy.ai is an AI copywriting tool that specializes in generating short-form marketing content. Launched in 2020, it has quickly become a popular choice for marketers, e-commerce businesses, and social media managers who need to create engaging copy quickly. The platform uses AI to generate various types of marketing content, from social media posts to product descriptions and email campaigns.
            </p>
            <p className="text-gray-700 mb-6">
              What sets Copy.ai apart from other AI writing tools is its focus on marketing-specific content and its extensive library of specialized templates. Rather than positioning itself as a general-purpose writing assistant, Copy.ai concentrates on doing one thing well: generating compelling, conversion-focused marketing copy. In this review, we'll examine its capabilities, limitations, and whether it's worth the investment in 2025.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Copy.ai</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Copy.ai</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Template Variety and Specialization</h3>
              <p>
                One of Copy.ai's standout features is its extensive library of over 90 specialized templates. These templates cover a wide range of marketing content types, including:
              </p>
              
              <ul>
                <li><strong>Social Media:</strong> Posts, captions, hashtags, and platform-specific content for Instagram, Facebook, Twitter, and LinkedIn</li>
                <li><strong>Advertising:</strong> Ad copy for various platforms, including Google Ads, Facebook Ads, and display advertisements</li>
                <li><strong>Email Marketing:</strong> Subject lines, body content, cold outreach emails, and newsletter copy</li>
                <li><strong>Website Copy:</strong> Headlines, taglines, meta descriptions, and product descriptions</li>
                <li><strong>Brand Voice:</strong> Brand mission statements, value propositions, and company bios</li>
                <li><strong>Sales Copy:</strong> AIDA frameworks, PAS frameworks, feature-to-benefit transformations</li>
              </ul>
              
              <p>
                These templates aren't just basic prompts – they're structured with specific fields and options to guide the AI toward producing relevant, targeted content. For instance, the product description template asks for key features, target audience, and tone preferences to generate appropriate copy.
              </p>
              
              <h3>Content Quality and Accuracy</h3>
              <p>
                Copy.ai's content quality is impressive for its specific use case: short-form marketing copy. The tool excels at generating:
              </p>
              
              <ul>
                <li><strong>Attention-grabbing headlines</strong> that follow proven copywriting formulas</li>
                <li><strong>Engaging social media content</strong> tailored to different platforms</li>
                <li><strong>Concise product descriptions</strong> that highlight benefits and features</li>
                <li><strong>Email subject lines</strong> with strong open rate potential</li>
              </ul>
              
              <p>
                The output tends to be punchy, conversion-focused, and stylistically varied. Copy.ai offers multiple tone options, allowing users to generate content that's professional, casual, friendly, luxury, or several other styles.
              </p>
              
              <p>
                Where Copy.ai shows limitations is in producing longer-form content or highly technical/specialized writing. While it can generate blog post outlines and short articles, the quality doesn't match specialized long-form content tools. This is by design – Copy.ai is primarily built for short, impactful marketing copy rather than comprehensive articles.
              </p>
              
              <h3>User Interface and Experience</h3>
              <p>
                Copy.ai offers one of the most user-friendly interfaces among AI writing tools. The dashboard is clean, intuitive, and requires minimal learning curve. Key aspects of the UI include:
              </p>
              
              <ul>
                <li><strong>Template-first approach:</strong> Templates are front and center, making it easy to find the right tool for specific content needs</li>
                <li><strong>Simple workflow:</strong> Clear input fields guide users through providing the necessary information</li>
                <li><strong>Multiple variations:</strong> The system generates several options for each request, allowing users to pick the best or combine elements</li>
                <li><strong>History and organization:</strong> Saved projects and history make it easy to return to previous work</li>
                <li><strong>Chat interface:</strong> A conversational option for less structured content needs</li>
              </ul>
              
              <p>
                The platform's focus on simplicity makes it accessible even to non-technical users, which is a significant advantage for marketing teams with varied technical skills.
              </p>
              
              <h3>Free Plan and Pricing Options</h3>
              <p>
                Copy.ai offers a relatively generous free plan compared to many competitors. The free plan includes:
              </p>
              
              <ul>
                <li>Access to most templates and core features</li>
                <li>Limited usage (typically 2,000 words per month)</li>
                <li>Basic chat functionality</li>
                <li>5 user seats (unusual for a free plan)</li>
              </ul>
              
              <p>
                For users who need more capacity or advanced features, Copy.ai offers paid plans:
              </p>
              
              <ul>
                <li><strong>Pro Plan:</strong> $36/month (or $29/month billed annually) – unlimited words, priority support, and access to all features</li>
                <li><strong>Enterprise Plan:</strong> Custom pricing – advanced team management, dedicated support, custom templates, and API access</li>
              </ul>
              
              <p>
                The pricing is positioned in the mid-range for AI copywriting tools. While not the cheapest option, it offers good value for marketing teams that need regular content generation.
              </p>
              
              <h3>Team Collaboration Features</h3>
              <p>
                Copy.ai has invested significantly in team collaboration features, making it suitable for marketing departments and agencies. Key collaboration capabilities include:
              </p>
              
              <ul>
                <li><strong>Multiple seats:</strong> Even the free plan allows for 5 team members</li>
                <li><strong>Shared projects:</strong> Team members can access and work on the same content projects</li>
                <li><strong>Commenting:</strong> Simple feedback mechanism on generated content</li>
                <li><strong>Brand voice profiles:</strong> Shared brand voice settings to ensure consistency</li>
                <li><strong>Team libraries:</strong> Collections of approved content and templates</li>
              </ul>
              
              <p>
                For marketing teams that need to produce consistent content across multiple channels, these collaboration features provide significant value.
              </p>
              
              <h3>Practical Applications of Copy.ai</h3>
              
              <h4>1. Social Media Content Creation</h4>
              <p>
                Copy.ai excels at generating diverse social media content. It can create platform-specific posts, develop content calendars, generate hashtag sets, and craft engaging captions for images. This makes it particularly valuable for social media managers who need to maintain a consistent posting schedule across multiple platforms.
              </p>
              
              <h4>2. E-commerce Product Descriptions</h4>
              <p>
                For online retailers, Copy.ai can dramatically speed up the process of creating product descriptions. It transforms basic product features into benefit-focused descriptions that highlight value to customers. This is especially useful for businesses with large product catalogs that need consistent, engaging descriptions.
              </p>
              
              <h4>3. Email Marketing Campaigns</h4>
              <p>
                Copy.ai can generate subject lines, body content, and calls-to-action for email marketing. Its templates for different email types (promotional, newsletter, cold outreach) help marketers maintain variety while still driving conversion goals.
              </p>
              
              <h4>4. Ad Copy Creation</h4>
              <p>
                For digital advertisers, Copy.ai offers specialized templates for various ad platforms. It can generate headline variations, body copy, and call-to-action text optimized for different advertising channels, helping marketers test multiple approaches quickly.
              </p>
              
              <h3>Copy.ai vs. Competitors in 2025</h3>
              <p>
                In the competitive landscape of AI writing tools, Copy.ai has established a distinct position focused on marketing-specific content. When compared to major competitors:
              </p>
              
              <ul>
                <li><strong>vs. Jasper:</strong> Jasper offers more comprehensive content creation capabilities, including long-form content and SEO features, but at a higher price point. Copy.ai provides better value for teams focused specifically on short-form marketing copy.</li>
                <li><strong>vs. Writesonic:</strong> Writesonic offers a broader range of features including blog writing and SEO capabilities at a lower price point, but Copy.ai typically produces higher quality marketing-specific copy with more specialized templates.</li>
                <li><strong>vs. ChatGPT/Claude:</strong> General AI assistants like ChatGPT and Claude offer more versatility for varied content types, but lack the marketing-specific templates and streamlined workflow of Copy.ai.</li>
              </ul>
              
              <p>
                Copy.ai's main advantages include:
              </p>
              
              <ul>
                <li>Superior marketing-specific templates</li>
                <li>More intuitive interface for marketing content</li>
                <li>Better team collaboration features in the basic plans</li>
                <li>Stronger performance for short-form, conversion-focused copy</li>
              </ul>
              
              <p>
                However, competitors have advantages in areas like long-form content creation, SEO optimization, and breadth of content types. Copy.ai remains focused on doing one thing exceptionally well rather than trying to be an all-purpose writing solution.
              </p>
            </div>
            
            {/* Comparison table of plans */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Copy.ai Plans Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Free Plan</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Pro Plan</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price</td>
                    <td className="px-4 py-3 text-center text-gray-700">$0</td>
                    <td className="px-4 py-3 text-center text-gray-700">$36/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Word Limit</td>
                    <td className="px-4 py-3 text-center text-gray-700">2,000/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">Unlimited</td>
                    <td className="px-4 py-3 text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Team Seats</td>
                    <td className="px-4 py-3 text-center text-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Templates</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic Templates</td>
                    <td className="px-4 py-3 text-center text-gray-700">All Templates</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom Templates</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Priority Support</td>
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
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">API Access</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
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
                    <td className="px-4 py-3 font-medium text-gray-700">Brand Voice Management</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced</td>
                    <td className="px-4 py-3 text-center text-gray-700">Enterprise-level</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-teal-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Copy.ai has carved out a clear niche in the AI writing tool market by focusing on what it does best: generating high-quality, short-form marketing copy. Its extensive template library, user-friendly interface, and team collaboration features make it particularly valuable for marketing teams and e-commerce businesses that need to produce consistent, engaging content across multiple channels.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Copy.ai Pro:</strong> Digital marketers, social media managers, e-commerce businesses, and marketing teams that need to regularly create short-form marketing content. It's also ideal for small businesses without dedicated copywriters who need to maintain a consistent marketing presence.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who can stick with the free plan or look elsewhere:</strong> The free plan is suitable for occasional users or those testing the waters. However, businesses focused on long-form content like blogs and articles, or those needing advanced SEO features may want to consider alternatives like Jasper or comprehensive solutions like specialized SEO content platforms.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Copy.ai Free" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Pro Plan" 
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
                Do you have a question about Copy.ai? Ask in the comments below and we'll answer.
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
                text="Try Copy.ai Free" 
                url={product.affiliateUrl} 
                color="primary" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-3"
              />
              
              <ButtonAffiliate 
                text="Get Pro Plan" 
                url={`${product.affiliateUrl}/pricing`} 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Writing Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/jasper-ai" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-medium">J</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Jasper AI</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-1">4.8/5</span>
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
                        <span className="text-xs text-gray-500 ml-1">4.6/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/frase" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">F</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Frase</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.4/5</span>
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
                    <span>How does Copy.ai compare to Jasper?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Copy.ai and Jasper serve different segments of the AI writing market. Copy.ai focuses primarily on short-form marketing copy with a strong template library for specific marketing content types. Jasper offers more comprehensive content creation features, including long-form content, SEO optimization, and broader content types, but at a higher price point (starting at $49/month vs. Copy.ai's $36/month). If your needs are primarily short marketing copy, social media content, and emails, Copy.ai offers better value, while Jasper is better for teams needing diverse content types including long-form articles.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is Copy.ai's free plan worth using?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Copy.ai's free plan is one of the more generous options in the AI writing space. It provides access to most basic templates, includes up to 2,000 words per month, and even allows for 5 user seats, which is unusual for free plans. This makes it particularly valuable for small businesses or freelancers who need occasional marketing copy help. The main limitation is the monthly word count, which can be restrictive for regular users. The free plan is excellent for testing the platform or for occasional use, but regular content creators will likely need to upgrade to the Pro plan.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can Copy.ai write long-form blog content?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    While Copy.ai does offer blog post outlines and can generate short article sections, long-form content is not its primary strength. Copy.ai is designed for shorter marketing content like social media posts, product descriptions, and email copy. For comprehensive blog articles, especially ones requiring specific SEO optimization or detailed industry knowledge, dedicated long-form content tools like Jasper or general AI assistants like ChatGPT with specific prompting might be more effective. If blogs are a central part of your content strategy, Copy.ai can help with ideation and outlines, but you may want a specialized tool for the full articles.
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