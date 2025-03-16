// src/app/reviews/midjourney/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Midjourney v6 Review 2025: Is It Still the Best AI Image Generator?',
  description: 'Comprehensive review of Midjourney v6. Compare features, quality, and pricing to DALL-E and Stable Diffusion. See quality tests and real-world examples.',
  openGraph: {
    title: 'Midjourney v6 Review 2025: Is It Still the Best AI Image Generator?',
    description: 'Comprehensive review of Midjourney v6. Compare features, quality, and pricing to DALL-E and Stable Diffusion. See quality tests and real-world examples.',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function MidjourneyReviewPage() {
  // Data for Midjourney review
  const product = {
    name: 'Midjourney',
    title: 'Midjourney v6 Review 2025: Is It Still the Best AI Image Generator?',
    description: 'Comprehensive review of Midjourney v6. Compare features, quality, and pricing to DALL-E and Stable Diffusion. See quality tests and real-world examples.',
    logo: '/images/logos/midjourney.png',
    rating: 4.9,
    pricingStart: '$10/month (Basic)',
    hasFreeVersion: false,
    hasFreeTrial: false,
    affiliateUrl: 'https://www.midjourney.com',
    affiliateTrackingId: 'aicompare-midjourney',
    pros: [
      'Exceptional image quality and aesthetics',
      'Unmatched artistic detail and style versatility',
      'Intuitive and powerful prompt system',
      'Constant improvements with regular updates',
      'Strong community and inspiration gallery',
      'Now supports better text rendering in v6'
    ],
    cons: [
      'Discord-only interface can be limiting',
      'No free tier (unlike some competitors)',
      'Queue system means waiting during peak times',
      'Limited editing capabilities compared to specialized tools',
      'Requires internet connection (no offline option)'
    ],
    bestFor: ['Artists', 'Designers', 'Content Creators', 'Marketers', 'Game Developers'],
    keyFeatures: [
      { name: 'Image Quality', value: 'Excellent' },
      { name: 'Maximum Resolution', value: 'Up to 1792×1024 (Basic), 4K+ (Pro)' },
      { name: 'Price', value: '$10-$60/month depending on plan' },
      { name: 'Photorealism', value: 'Very High' },
      { name: 'Style Variation', value: 'Excellent' },
      { name: 'Speed', value: '15-60 seconds per image (varies with plan)' },
      { name: 'Text Rendering', value: 'Greatly improved in v6' },
      { name: 'Image Variations', value: 'Yes' },
      { name: 'Commercial License', value: 'Yes (included with paid plans)' }
    ]
  };
  
  // Example images (these would be proper paths in a real implementation)
  const exampleImages = [
    {
      prompt: 'A futuristic cityscape at sunset with flying cars and neon lights, hyper-detailed, cinematic lighting',
      image: '/images/reviews/midjourney/example1.jpg',
      version: 'v6'
    },
    {
      prompt: 'A photorealistic portrait of a young woman with freckles, natural lighting, 85mm lens',
      image: '/images/reviews/midjourney/example2.jpg',
      version: 'v6'
    },
    {
      prompt: 'A magical forest with glowing mushrooms and fairy lights, fantasy art style',
      image: '/images/reviews/midjourney/example3.jpg',
      version: 'v6'
    },
    {
      prompt: 'A cyberpunk street market at night with rain, neon shop signs with readable text',
      image: '/images/reviews/midjourney/example4.jpg',
      version: 'v6'
    }
  ];
  
  // Comparison to competitors
  const competitors = [
    {
      name: 'DALL-E 3',
      pros: ['Excellent text rendering', 'Strong prompt following', 'Free tier available'],
      cons: ['Less artistic versatility', 'Smaller maximum resolution'],
      bestFor: 'Precise prompt following and text generation'
    },
    {
      name: 'Stable Diffusion XL',
      pros: ['Open-source and customizable', 'Can run locally', 'Completely free option'],
      cons: ['More technical to use', 'Requires more prompt engineering'],
      bestFor: 'Technical users who want full control and customization'
    },
    {
      name: 'Leonardo.ai',
      pros: ['Good for game assets', 'Training custom models', 'Generous free tier'],
      cons: ['Not as high quality for photorealism', 'Less consistent results'],
      bestFor: 'Game developers and asset creation'
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
      applicationCategory: 'MultimediaApplication',
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
                Midjourney is a premium AI image generation tool known for its exceptional artistic quality and photorealistic capabilities. In this comprehensive review, we'll examine Midjourney v6, its features, pricing, and how it compares to competitors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Midjourney" 
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Midjourney?</h2>
            <p className="text-gray-700 mb-4">
              Midjourney is an AI image generation tool that has become the go-to platform for artists, designers, and creators looking to transform text prompts into stunning visual imagery. Unlike some competitors, Midjourney operates primarily through Discord, though they recently launched a limited alpha version of their web interface.
            </p>
            <p className="text-gray-700 mb-6">
              Now in its 6th version, Midjourney has continually improved both its image quality and its ability to follow complex prompts. With its latest version, it has significantly enhanced text rendering, multi-subject composition, and photorealism, addressing some of the limitations in previous versions.
            </p>
            
            {/* Visual showcase */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Midjourney v6 Image Examples</h2>
              <p className="text-gray-700 mb-4">
                The best way to appreciate Midjourney's capabilities is to see its output. Below are examples generated using Midjourney v6, showing the tool's versatility across different styles and subjects:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {exampleImages.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-3 text-sm text-gray-700 border-b border-gray-200">
                      <strong>Prompt:</strong> {example.prompt}
                    </div>
                    <div className="relative aspect-[4/3] bg-gray-200">
                      <Image
                        src={example.image}
                        alt={`Midjourney example: ${example.prompt}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-gray-50 p-2 text-xs text-gray-500 text-right">
                      Generated with Midjourney {example.version}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 italic text-center text-sm">
                Note: These images are examples of what Midjourney v6 can generate. Results will vary based on your specific prompts and settings.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Midjourney</h2>
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
              <h3>Midjourney v6: What's New and Improved</h3>
              <p>
                The latest version of Midjourney (v6) represents a significant leap forward in AI image generation. Here are the most notable improvements:
              </p>
              
              <ul>
                <li><strong>Enhanced Prompt Following:</strong> V6 is much better at following complex prompts precisely, including multi-subject compositions</li>
                <li><strong>Improved Text Rendering:</strong> One of the biggest improvements is the ability to generate readable and accurate text within images</li>
                <li><strong>Photorealism:</strong> V6 creates even more convincing photorealistic images with better lighting, textures, and details</li>
                <li><strong>Coherent Style:</strong> The AI maintains style consistency across an image even with complex prompts</li>
                <li><strong>Detail Control:</strong> Better control over image details with prompt engineering techniques</li>
              </ul>
              
              <h3>User Experience and Interface</h3>
              <p>
                Midjourney primarily operates through Discord, which is both a strength and a limitation. On one hand, this creates a vibrant community where users can see others' creations and get inspired. On the other hand, it means you're limited to Discord's interface and functionality.
              </p>
              
              <p>
                To generate images with Midjourney, you'll need to:
              </p>
              
              <ol>
                <li>Join the Midjourney Discord server (or create your own with the Midjourney bot)</li>
                <li>Go to one of the "newbies" channels or create a thread</li>
                <li>Type <code>/imagine</code> followed by your prompt</li>
                <li>Use additional commands to upscale, vary, or modify your results</li>
              </ol>
              
              <p>
                The Discord interface is fairly straightforward once you're familiar with it, but can be intimidating for new users. Midjourney is developing a web interface that's currently in alpha testing, which should make the service more accessible.
              </p>
              
              <h3>Prompt Engineering and Control</h3>
              <p>
                Midjourney excels in transforming prompts into beautiful images, but getting exactly what you want requires skill with prompt engineering. The system supports various parameters and modifiers to control the output:
              </p>
              
              <ul>
                <li><strong>Style Parameters:</strong> --stylize value controls how artistic vs. literal the interpretation is</li>
                <li><strong>Aspect Ratios:</strong> --ar width:height lets you choose different aspect ratios</li>
                <li><strong>Version Selection:</strong> You can specify which model version to use (e.g., --v 6)</li>
                <li><strong>Seed Values:</strong> For reproducible results (--seed value)</li>
                <li><strong>Negative Prompts:</strong> Specify what elements to avoid with --no parameter</li>
              </ul>
              
              <p>
                With v6, prompt following has improved significantly, allowing for more predictable and controllable outcomes. However, there's still a learning curve to mastering Midjourney prompts to get exactly what you want.
              </p>
              
              <h3>Pricing and Plans</h3>
              <p>
                Midjourney operates on a subscription model with several tiers:
              </p>
              
              <ul>
                <li><strong>Basic Plan ($10/month):</strong> Around 200 generations/month, standard speeds, and shared GPU time</li>
                <li><strong>Standard Plan ($30/month):</strong> About 900 generations/month with faster speeds and better access</li>
                <li><strong>Pro Plan ($60/month):</strong> Approximately 2,200 generations/month, fastest speeds, and priority access</li>
                <li><strong>Mega Plan ($120/month):</strong> For power users, with about 4,500 generations/month</li>
              </ul>
              
              <p>
                All plans include commercial usage rights for images you generate (with some reasonable limitations). Midjourney does not offer a free tier, unlike some competitors like DALL-E or Leonardo.ai, which can be a barrier to entry for casual users or those who want to test before committing.
              </p>
              
              <h3>Midjourney vs. Competitors (2025 Comparison)</h3>
              <p>
                The AI image generation landscape is highly competitive in 2025. Here's how Midjourney v6 compares to its main rivals:
              </p>
            </div>
            
            {/* Comparison to competitors */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Midjourney vs. Competitors</h3>
              
              {competitors.map((competitor, index) => (
                <div key={index} className="mb-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h4 className="font-semibold text-gray-800">Midjourney vs. {competitor.name}</h4>
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
                        <strong>Best Choice:</strong> Choose {competitor.name} over Midjourney for {competitor.bestFor}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Use cases section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Best Use Cases for Midjourney</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Concept Art & Ideation</h4>
                  <p className="text-gray-700 text-sm">
                    Perfect for creative professionals who need to quickly visualize concepts. Midjourney excels at creating inspirational concept art that can kickstart creative projects.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Marketing & Social Media</h4>
                  <p className="text-gray-700 text-sm">
                    Generate eye-catching social media graphics, blog headers, and marketing visuals with consistent style and high quality.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Game Development</h4>
                  <p className="text-gray-700 text-sm">
                    Create characters, environments, items, and other gaming assets to use as references or starting points for further refinement.
                  </p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Product Visualization</h4>
                  <p className="text-gray-700 text-sm">
                    With its improved photorealism, Midjourney v6 is excellent for product mockups and visualizing concepts before production.
                  </p>
                </div>
              </div>
            </div>
            
            {/* How-to section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Get the Most Out of Midjourney</h3>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 font-semibold">1</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Be Specific and Detailed</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        The more specific your prompts, the better your results. Include details about style, lighting, composition, and camera settings.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 font-semibold">2</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Use Reference Artists and Styles</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Including art styles or artist references can dramatically influence the output. For example, "in the style of Monet" or "cyberpunk aesthetic."
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 font-semibold">3</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Leverage Parameters</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Learn the available parameters like --stylize, --ar (aspect ratio), and --quality to fine-tune your results.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 font-semibold">4</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Iterate and Refine</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Use the variation and upscale features to refine your initial results. Sometimes small tweaks to the original prompt can yield significantly better outcomes.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="flex-shrink-0 bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 font-semibold">5</span>
                    <div>
                      <h4 className="font-medium text-gray-800">Join the Community</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        The Midjourney community is an excellent resource for learning. Browse other users' creations and study the prompts they used.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Midjourney v6 stands out as the premier AI image generator for artistic quality and visual appeal. Its exceptional image quality, improved prompt following, and enhanced features like better text rendering make it the top choice for creative professionals, despite the higher cost compared to some competitors.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Midjourney:</strong> Artists, designers, marketers, content creators, and anyone who values image quality and aesthetic appeal over cost savings. If your work or projects depend on high-quality visuals, Midjourney is worth the investment.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should look elsewhere:</strong> Casual users on a tight budget, those who prefer a more traditional UI outside of Discord, or developers needing extensive API access for integration into their own products.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Midjourney" 
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
                Do you have a question about Midjourney? Ask in the comments below and we'll answer.
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
                text="Try Midjourney" 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Image Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/dalle-3" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-orange-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium">D</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">DALL-E 3</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.7/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/stable-diffusion" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">SD</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Stable Diffusion</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.6/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/leonardo-ai" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">L</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Leonardo.ai</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.6/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/ai-image-generators" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI image generators
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
                    <span>Is Midjourney worth the subscription cost?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, if image quality is your priority. Midjourney consistently produces the most aesthetically pleasing results among AI image generators. For professional use cases where visual quality matters, the subscription is worthwhile. However, casual users might find the free tiers of DALL-E or Stable Diffusion sufficient for their needs.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Midjourney v6 compare to v5?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Midjourney v6 offers several significant improvements over v5, including much better text rendering (previously a major weakness), improved multi-subject handling, more precise prompt following, and enhanced photorealism. The v6 model is also better at understanding complex prompts and maintaining coherent styles across the entire image.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can I use Midjourney images commercially?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, all paid Midjourney plans include commercial usage rights for the images you generate. This means you can use these images for business purposes, including marketing materials, product designs, and commercial creative projects. The membership agreement grants you an end-user license to use, reproduce, and display the images you create. There are some reasonable limitations, such as not using the output for illegal purposes or to create competing AI services.
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