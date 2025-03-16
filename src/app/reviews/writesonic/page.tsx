// src/app/reviews/writesonic/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Writesonic Review 2025: Best Value AI Writing Assistant?',
  description: 'Comprehensive review of Writesonic. Compare features, pricing, and performance to other AI writing tools. Is this affordable AI writer worth it in 2025?',
  openGraph: {
    title: 'Writesonic Review 2025: Best Value AI Writing Assistant?',
    description: 'Comprehensive review of Writesonic. Compare features, pricing, and performance to other AI writing tools. Is this affordable AI writer worth it in 2025?',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function WritesonicReviewPage() {
  // Data for Writesonic review
  const product = {
    name: 'Writesonic',
    title: 'Writesonic Review 2025: Best Value AI Writing Assistant?',
    description: 'Comprehensive review of Writesonic. Compare features, pricing, and performance to other AI writing tools. Is this affordable AI writer worth it in 2025?',
    logo: '/images/logos/writesonic.png',
    rating: 4.6,
    pricingStart: '$19/month (Pro)',
    hasFreeVersion: false,
    hasFreeTrial: true,
    affiliateUrl: 'https://writesonic.com',
    affiliateTrackingId: 'aicompare-writesonic',
    pros: [
      'Affordable pricing compared to competitors',
      'Wide variety of content templates (70+)',
      'Good balance of short and long-form content',
      'Strong multilingual support (25+ languages)',
      'User-friendly interface',
      'Photosonic AI image generator included'
    ],
    cons: [
      'Occasional repetition in outputs',
      'Less advanced than premium tools for complex content',
      'Limited API access on lower plans',
      'Content quality varies by language',
      'Free trial requires credit card'
    ],
    bestFor: ['Small businesses', 'Startups', 'Content marketers', 'Freelancers', 'Multilingual content creators'],
    keyFeatures: [
      { name: 'AI Model', value: 'GPT-3.5/GPT-4 (higher plans)' },
      { name: 'Templates', value: '70+ content templates' },
      { name: 'Languages Supported', value: '25+ languages' },
      { name: 'Long-form Content', value: 'Chatsonic Article Writer & Sonic Editor' },
      { name: 'Paraphrasing Tool', value: 'Included with multiple tones' },
      { name: 'SEO Optimization', value: 'Basic SEO features included' },
      { name: 'Image Generation', value: 'Photosonic AI image creator included' }
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
                Writesonic is an affordable AI writing tool offering numerous templates for content creation, blog writing, and marketing copy with strong multilingual capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Writesonic" 
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Writesonic?</h2>
            <p className="text-gray-700 mb-4">
              Writesonic is an AI-powered writing platform that helps users create various types of content with minimal effort. Founded in 2020, it has established itself as a cost-effective solution for content marketers, bloggers, and small businesses looking to streamline their content creation process. The platform uses advanced AI models to generate articles, blog posts, landing pages, ads, product descriptions, and more.
            </p>
            <p className="text-gray-700 mb-6">
              What distinguishes Writesonic in the crowded AI writing tool market is its balance of affordability and comprehensive features. While not as high-end as premium options like Jasper, it offers a wide range of capabilities at a lower price point, making it particularly attractive for budget-conscious users who still need quality content. In this review, we'll examine how Writesonic performs across various content types, evaluate its value proposition, and help you determine if it's the right AI writing tool for your needs in 2025.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Writesonic</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Writesonic</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Content Templates and Versatility</h3>
              <p>
                Writesonic offers over 70 content templates covering a wide range of use cases. These templates are organized into categories to help users quickly find what they need:
              </p>
              
              <ul>
                <li><strong>Articles & Blogs:</strong> Long-form content generation with the Sonic Editor and Article Writer 4.0</li>
                <li><strong>Ads & Marketing:</strong> Ad copy for Google, Facebook, and other platforms</li>
                <li><strong>Website Copy:</strong> Landing pages, product descriptions, and feature sections</li>
                <li><strong>Social Media:</strong> Posts, captions, and content for various social platforms</li>
                <li><strong>Emails:</strong> Templates for cold outreach, newsletters, and promotional campaigns</li>
                <li><strong>Rewrites & Summaries:</strong> Paraphrasing, summarization, and content expansion tools</li>
                <li><strong>eCommerce:</strong> Specialized templates for online retail content</li>
              </ul>
              
              <p>
                This extensive template library makes Writesonic versatile enough to handle most content needs for digital marketers and small businesses. The templates aren't just text prompts – they include structured input fields to guide users toward generating relevant, focused content for their specific needs.
              </p>
              
              <h3>Content Quality and AI Models</h3>
              <p>
                Writesonic offers tiered access to different AI models depending on your plan:
              </p>
              
              <ul>
                <li><strong>Standard plan:</strong> Uses GPT-3.5 for content generation</li>
                <li><strong>Premium plans:</strong> Option to use GPT-4 for higher quality outputs</li>
              </ul>
              
              <p>
                In testing, the content quality is generally good for marketing copy, social media posts, and simple articles. The GPT-3.5 model handles straightforward content well, though it can sometimes produce repetitive phrasing or somewhat generic text without sufficient guidance. The GPT-4 option on premium plans shows noticeable improvement for complex topics and longer content.
              </p>
              
              <p>
                Writesonic's strength lies in producing solid, usable content across a variety of formats rather than exceptional, standout copy in any single category. For most small business and marketing needs, the quality is more than sufficient, especially considering the price point.
              </p>
              
              <h3>Long-Form Content Creation</h3>
              <p>
                Writesonic offers two primary tools for long-form content:
              </p>
              
              <ul>
                <li><strong>Article Writer 4.0:</strong> A guided process that helps create blog posts and articles up to 1,500 words</li>
                <li><strong>Sonic Editor:</strong> A document editor with AI assistance for writing, expanding, and refining longer content</li>
              </ul>
              
              <p>
                The Article Writer works by guiding you through a step-by-step process – you provide a topic, keywords, and other parameters, and it generates an outline followed by the full article. The quality is reasonable for general topics, though it requires human editing for more specialized or technical subjects.
              </p>
              
              <p>
                The Sonic Editor is more flexible, allowing for a collaborative writing experience where you can write some content manually and use AI commands to generate, expand, or improve specific sections. This hybrid approach often produces better results than fully automated generation.
              </p>
              
              <h3>Multilingual Capabilities</h3>
              <p>
                One of Writesonic's standout features is its support for over 25 languages. This makes it particularly valuable for businesses operating in multiple markets or content creators working across language barriers. The supported languages include:
              </p>
              
              <ul>
                <li>Major European languages (English, French, German, Spanish, Italian, etc.)</li>
                <li>Asian languages (Chinese, Japanese, Korean)</li>
                <li>Arabic, Hebrew, and other non-Latin script languages</li>
                <li>Portuguese, Dutch, Swedish, and more</li>
              </ul>
              
              <p>
                While the quality is highest in English, most templates work reasonably well in other major languages. This multilingual support gives Writesonic an edge for global businesses compared to some competitors that focus primarily on English content.
              </p>
              
              <h3>User Interface and Experience</h3>
              <p>
                Writesonic features a clean, intuitive interface that's easy to navigate even for first-time users. The dashboard is organized into logical sections:
              </p>
              
              <ul>
                <li><strong>Template marketplace:</strong> Where you can browse and access all content templates</li>
                <li><strong>Chatsonic:</strong> A ChatGPT-like interface for conversational content generation</li>
                <li><strong>Projects:</strong> Where your saved work is organized</li>
                <li><strong>Photosonic:</strong> The integrated AI image generation tool</li>
              </ul>
              
              <p>
                The workflow is straightforward – select a template, fill in the required information, and generate content. For most templates, Writesonic produces multiple variations, allowing you to choose the one that best fits your needs or combine elements from different versions.
              </p>
              
              <p>
                One minor drawback is that the interface can occasionally feel sluggish when generating longer content, especially during peak usage times. However, this is a relatively minor issue compared to the overall user-friendly design.
              </p>
              
              <h3>Photosonic: AI Image Generation</h3>
              <p>
                A noteworthy addition to Writesonic's toolkit is Photosonic, its integrated AI image generator. This feature allows users to create custom images based on text prompts directly within the same platform they use for writing. The image quality is comparable to mid-tier image generation tools, making it suitable for:
              </p>
              
              <ul>
                <li>Blog post featured images</li>
                <li>Social media graphics</li>
                <li>Simple marketing visuals</li>
                <li>Concept illustrations</li>
              </ul>
              
              <p>
                While not as powerful as dedicated image generation tools like Midjourney or DALL-E, having this capability integrated into the writing platform adds significant value, especially for users who need both text and visual content for their projects.
              </p>
              
              <h3>Pricing and Value</h3>
              <p>
                Writesonic offers several pricing tiers in 2025:
              </p>
              
              <ul>
                <li><strong>Free Trial:</strong> Limited access with credit card required</li>
                <li><strong>Pro Plan:</strong> $19/month – Basic features with moderate usage limits</li>
                <li><strong>Business Plan:</strong> $49/month – Higher limits, GPT-4 access, and additional features</li>
                <li><strong>Enterprise Plan:</strong> Custom pricing – Full features, dedicated support, and team management</li>
              </ul>
              
              <p>
                The Pro plan represents particularly good value for small businesses and individual content creators, offering a good balance of features and affordability. The pricing model is generally based on a combination of features and word credits, with higher tiers offering more of both.
              </p>
              
              <p>
                Compared to competitors like Jasper (starting at $49/month) and Copy.ai ($36/month), Writesonic's $19/month entry point for the Pro plan makes it one of the more affordable options for small businesses and startups.
              </p>
              
              <h3>Practical Applications of Writesonic</h3>
              
              <h4>1. Small Business Marketing</h4>
              <p>
                Writesonic is particularly well-suited for small businesses that need to maintain an active content marketing presence across multiple channels without a dedicated copywriting team. It can efficiently produce website copy, blog posts, social media content, and email newsletters at a price point that makes sense for businesses with limited marketing budgets.
              </p>
              
              <h4>2. Multilingual Content Creation</h4>
              <p>
                For businesses operating in multiple linguistic markets, Writesonic's strong multilingual capabilities provide a cost-effective way to create content in various languages. While professional translation is still recommended for critical materials, Writesonic can handle routine content across language barriers.
              </p>
              
              <h4>3. Digital Marketing Agencies</h4>
              <p>
                Agencies managing multiple clients can leverage Writesonic to streamline their content production workflow. The diverse template library and content variation features help generate client-specific materials more efficiently, improving the agency's productivity and output capacity.
              </p>
              
              <h4>4. Content Creators and Bloggers</h4>
              <p>
                Individual content creators can use Writesonic to overcome writer's block, generate article outlines, and expand on their ideas. The Article Writer and Sonic Editor are particularly valuable for bloggers looking to maintain a consistent publishing schedule without sacrificing quality.
              </p>
              
              <h3>Writesonic vs. Competitors in 2025</h3>
              <p>
                In the AI writing tool landscape, Writesonic has positioned itself as a value-oriented option with broad capabilities. Here's how it compares to major competitors:
              </p>
              
              <ul>
                <li><strong>vs. Jasper:</strong> Jasper offers higher-quality output and more advanced features, particularly for long-form content and team collaboration, but at more than double the starting price. Writesonic provides better value for budget-conscious users who don't need the highest-end capabilities.</li>
                <li><strong>vs. Copy.ai:</strong> Both are positioned in the mid-range, with Copy.ai excelling at short-form marketing copy and Writesonic offering better long-form content tools and multilingual support. Writesonic is less expensive at $19/month vs. Copy.ai's $36/month.</li>
                <li><strong>vs. ChatGPT/Claude:</strong> General AI assistants offer more versatility but lack the specialized templates, structured workflow, and integrated tools (like image generation) that Writesonic provides for content marketing purposes.</li>
              </ul>
              
              <p>
                Writesonic's main advantages include:
              </p>
              
              <ul>
                <li>Better pricing-to-feature ratio than premium competitors</li>
                <li>Strong multilingual capabilities</li>
                <li>Integrated image generation with Photosonic</li>
                <li>Good balance of short and long-form content tools</li>
              </ul>
              
              <p>
                Where competitors may have an edge is in content quality for highly specialized or technical topics, enterprise-grade team features, and advanced integrations with other marketing tools.
              </p>
            </div>
            
            {/* Comparison table of plans */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Writesonic Plans Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Pro Plan</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Business Plan</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price</td>
                    <td className="px-4 py-3 text-center text-gray-700">$19/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">$49/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Words per month</td>
                    <td className="px-4 py-3 text-center text-gray-700">100,000</td>
                    <td className="px-4 py-3 text-center text-gray-700">300,000</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">AI Model</td>
                    <td className="px-4 py-3 text-center text-gray-700">GPT-3.5</td>
                    <td className="px-4 py-3 text-center text-gray-700">GPT-3.5/GPT-4</td>
                    <td className="px-4 py-3 text-center text-gray-700">GPT-3.5/GPT-4</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">User Seats</td>
                    <td className="px-4 py-3 text-center text-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Photosonic Images</td>
                    <td className="px-4 py-3 text-center text-gray-700">120/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">350/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
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
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Plagiarism Checks</td>
                    <td className="px-4 py-3 text-center text-gray-700">10/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">30/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Writesonic stands out in the competitive AI writing landscape as a value-oriented solution that balances affordability with comprehensive features. Its greatest strengths are its wide range of content templates, strong multilingual support, and the added bonus of integrated image generation through Photosonic – all at a price point that's accessible to small businesses and individual content creators.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Writesonic:</strong> Small businesses, startups, and freelance content creators who need a versatile, cost-effective writing tool that can handle a variety of content types. It's particularly valuable for those operating in multiple languages or needing both text and image generation in one platform.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who might want to look elsewhere:</strong> Enterprise content teams with advanced needs might find Jasper more suitable despite the higher cost. Those focused exclusively on short-form marketing copy might prefer Copy.ai, and users who need the highest quality outputs for specialized or technical content might be better served by using ChatGPT with GPT-4 or Claude for specific content generation tasks.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Writesonic" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={true}
                  hasFreeVersion={false}
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
                Do you have a question about Writesonic? Ask in the comments below and we'll answer.
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
                text="Try Writesonic" 
                url={product.affiliateUrl} 
                color="primary" 
                hasFreeTrial={true}
                hasFreeVersion={false}
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
                    <span>Is Writesonic better than ChatGPT?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Writesonic and ChatGPT serve different purposes. Writesonic is a specialized content creation platform with templates for marketing, blogs, and other specific content types, plus integrated tools like image generation. ChatGPT is a more versatile conversational AI that can help with a broader range of tasks but lacks the structured workflow and specialized templates. For content marketing teams, Writesonic's purpose-built features may be more efficient, while for general writing assistance and versatility, ChatGPT may be preferable. Writesonic's strength is in providing a structured content creation process rather than raw AI capability.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is Photosonic in Writesonic?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Photosonic is Writesonic's integrated AI image generator that allows users to create custom images from text prompts. It's included with all Writesonic subscriptions, with the number of images per month depending on your plan (120 images/month with Pro, 350 with Business). Photosonic can generate various image styles from realistic to artistic and is useful for creating blog featured images, social media visuals, and marketing graphics without needing a separate image generation tool. While not as advanced as specialized tools like Midjourney or DALL-E, it provides good quality images for routine content marketing needs directly within your writing platform.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Writesonic compare to Jasper AI?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Writesonic and Jasper AI are both AI writing platforms, but they differ in pricing, capabilities, and target markets. Jasper starts at $49/month and focuses on premium features, advanced team collaboration, and higher quality outputs, particularly for long-form content. Writesonic starts at $19/month and offers good value with a balance of features including multilingual support and integrated image generation. Jasper typically produces higher quality content, especially for complex or specialized topics, and offers more advanced features for teams and agencies. Writesonic provides better value for small businesses and startups with more basic content needs and tighter budgets. Think of Jasper as the premium option and Writesonic as the value-focused alternative.
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