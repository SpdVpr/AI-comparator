// src/app/reviews/[slug]/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

// Types for dynamic meta tags
interface ProductReviewPageProps {
  params: {
    slug: string;
  };
}

// Dummy data for example - in a real implementation, you would load this from a database or CMS
const productData = {
  'jasper-ai': {
    name: 'Jasper AI',
    title: 'Jasper AI Review (2025): Is It the Best AI Writing Tool?',
    description: 'Comprehensive review of Jasper AI. Discover why Jasper is one of the best AI tools for marketing copy and content creation. Pricing, features, and practical examples.',
    logo: '/images/logos/jasper.png',
    rating: 4.8,
    pricingStart: '$49/month',
    hasFreeVersion: false,
    hasFreeTrial: true,
    affiliateUrl: 'https://jasper.ai',
    affiliateTrackingId: 'aicompare123',
    pros: [
      'High-quality outputs for marketing copy',
      'Advanced long-form content features',
      'Excellent user experience',
      'Integrations with many tools'
    ],
    cons: [
      'Higher price point',
      'Limited features in basic plan',
      'May require additional editing'
    ],
    bestFor: ['Marketers', 'Copywriters', 'Content agencies', 'Bloggers'],
    keyFeatures: [
      { name: 'AI Model', value: 'GPT-4 and proprietary models' },
      { name: 'Long-form Content', value: 'Yes, up to 100,000 words' },
      { name: 'SEO Optimization', value: 'Yes, integrated' },
      { name: 'Supported Languages', value: '30+' },
      { name: 'Team Collaboration', value: 'Yes' },
      { name: 'Templates', value: '50+' }
    ]
  },
  // Other products would be structured similarly
};

// Generate dynamic meta tags based on the product
export async function generateMetadata({ params }: ProductReviewPageProps): Promise<Metadata> {
  const product = productData[params.slug];
  
  if (!product) {
    return {
      title: 'Product Review Not Found',
      description: 'The requested AI tool review was not found.'
    };
  }
  
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      type: 'article',
      // You can add OG image here
    },
  };
}

// Main review page component
export default function ProductReviewPage({ params }: ProductReviewPageProps) {
  const slug = params.slug;
  const product = productData[slug];
  
  // If product doesn't exist, show error message
  if (!product) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Review Not Found</h1>
        <p>The requested product review was not found.</p>
      </main>
    );
  }
  
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
                {product.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try It Now" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">From:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is {product.name}?</h2>
            <p className="text-gray-700 mb-6">
              {/* Introductory text about the product would go here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec ipsum vulputate scelerisque. Fusce vel semper nulla. Duis aliquam enim in ultricies porttitor. Nam sit amet enim nec neque congue tincidunt.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of {product.name}</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of {product.name}</h2>
            {/* Detailed review content would go here */}
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec ipsum vulputate scelerisque. Fusce vel semper nulla. Duis aliquam enim in ultricies porttitor. Nam sit amet enim nec neque congue tincidunt.
              </p>
              
              <h3>Output Quality</h3>
              <p>
                Nullam eget felis nec ipsum vulputate scelerisque. Fusce vel semper nulla. Duis aliquam enim in ultricies porttitor. Nam sit amet enim nec neque congue tincidunt.
              </p>
              
              <h3>User Interface</h3>
              <p>
                Nullam eget felis nec ipsum vulputate scelerisque. Fusce vel semper nulla. Duis aliquam enim in ultricies porttitor. Nam sit amet enim nec neque congue tincidunt.
              </p>
              
              <h3>Pricing and Value</h3>
              <p>
                Nullam eget felis nec ipsum vulputate scelerisque. Fusce vel semper nulla. Duis aliquam enim in ultricies porttitor. Nam sit amet enim nec neque congue tincidunt.
              </p>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                {product.name} is an excellent choice for {product.bestFor.join(', ')}. It offers great value for money and excellent features for professional use.
              </p>
              <ButtonAffiliate 
                text={`Try ${product.name}`} 
                url={product.affiliateUrl} 
                color="primary" 
                size="lg"
                hasFreeTrial={product.hasFreeTrial}
                hasFreeVersion={product.hasFreeVersion}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center"
              />
            </div>
            
            {/* Comments and questions */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions and Answers</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700">
                Do you have a question about {product.name}? Ask in the comments below and we'll answer.
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
                    <span className="text-gray-700">Free trial available</span>
                  </div>
                )}
              </div>
              
              <ButtonAffiliate 
                text={`Try ${product.name}`} 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar Products</h3>
              <ul className="space-y-4">
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
                        <span className="text-xs text-gray-500 ml-1">4.3/5</span>
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
                        <span className="text-xs text-gray-500 ml-1">4.2/5</span>
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
                        <span className="text-xs text-gray-500 ml-1">4.5/5</span>
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
            
            {/* FAQ sekce */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is {product.name}  suitable for beginners?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  Yes, all paid plans of {product.name} allow commercial use. For larger scale usage, we recommend considering one of the higher-tier plans.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can I use {product.name} for commercial purposes?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  Yes, {product.name} offers an intuitive user interface and a range of templates that are suitable for beginners. It also provides extensive documentation and tutorials.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How much content can I create?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  The amount of content you can create depends on your chosen plan. The basic plan allows you to create up to 20,000 words per month, while higher-tier plans offer unlimited content generation.
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