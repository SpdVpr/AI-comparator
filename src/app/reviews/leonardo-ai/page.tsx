// src/app/reviews/leonardo-ai/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Leonardo AI Review 2025: The Best AI Generator for Game Assets?',
  description: "Comprehensive review of Leonardo AI. Compare features, pricing, image quality, and performance. Discover if it's the right AI image generator for your game development & creative projects.",
  openGraph: {
    title: 'Leonardo AI Review 2025: The Best AI Generator for Game Assets?',
    description: "Comprehensive review of Leonardo AI. Compare features, pricing, image quality, and performance. Discover if it's the right AI image generator for your game development & creative projects.",
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function LeonardoAIReviewPage() {
  // Data for Leonardo AI review
  const product = {
    name: 'Leonardo AI',
    title: 'Leonardo AI Review 2025: The Best AI Generator for Game Assets?',
    description: 'Comprehensive review of Leonardo AI. Compare features, pricing, image quality, and performance. Discover if its the right AI image generator for your game development & creative projects.',
    logo: '/images/logos/leonardo.png',
    rating: 4.5,
    pricingStart: '$10/month',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://leonardo.ai',
    affiliateTrackingId: 'aicompare-leonardo',
    pros: [
      'Excellent for generating game assets and concept art',
      'High-resolution outputs (up to 8K on paid plans)',
      'User-friendly interface with intuitive controls',
      'Powerful creative community features',
      'Good model customization capabilities',
      'Multiple specialized AI models for different styles'
    ],
    cons: [
      'Free tier has significant limitations',
      'Some inconsistency in output quality',
      'Processing times can be slow during peak periods',
      'Limited advanced features compared to specialized competitors',
      'Mobile app experience needs improvement'
    ],
    bestFor: ['Game developers', 'Concept artists', 'Digital creators', '3D modelers', 'Animation studios'],
    keyFeatures: [
      { name: 'Image quality', value: 'Very Good' },
      { name: 'Resolution', value: 'Up to 8K (paid plans)' },
      { name: 'Style variety', value: 'Excellent' },
      { name: 'User interface', value: 'Intuitive and user-friendly' },
      { name: 'Custom training', value: 'Available (LoRAs and fine-tuning)' },
      { name: 'Generation speed', value: '15-45 seconds per image' },
      { name: 'Licensing', value: 'Commercial use allowed' }
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
                Leonardo AI is a powerful AI image generator specialized in creating high-quality game assets, concept art, and creative visuals with advanced customization features.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Leonardo AI" 
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Leonardo AI?</h2>
            <p className="text-gray-700 mb-4">
              Leonardo AI is an AI-powered image generation platform that has rapidly gained popularity, especially among game developers, concept artists, and digital creators. Launched in 2022, it has evolved to specialize in creating high-quality visual assets for gaming, concept art, and creative projects.
            </p>
            <p className="text-gray-700 mb-6">
              In this review, we'll examine Leonardo AI's capabilities, image quality, ease of use, and its unique features for game asset creation. We'll also evaluate how it compares to other leading AI image generators in 2025, and whether its pricing tiers provide good value for different types of users.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Leonardo AI</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Leonardo AI</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Image Quality and Style Variety</h3>
              <p>
                Leonardo AI produces high-quality images with a particular strength in creating assets with a gaming aesthetic. The output quality is very good across a range of styles, from photorealistic to stylized game art, fantasy illustrations, and concept designs.
              </p>
              
              <p>
                What sets Leonardo AI apart is its specialized focus on game-related visual assets. The platform offers multiple AI models trained specifically for creating game characters, environments, items, and concept art. These specialized models help achieve consistent results in gaming-related styles that other generic platforms might struggle with.
              </p>
              
              <p>
                The platform excels in style variety, offering numerous pre-trained models for different aesthetics, from anime and pixel art to fantasy illustrations and photorealistic renders. This makes it particularly valuable for game developers and digital artists who need to work in various styles.
              </p>
              
              <h3>User Experience and Interface</h3>
              <p>
                Leonardo AI offers one of the most user-friendly interfaces among AI image generators. The web platform is intuitive, with a straightforward design that makes it accessible even for beginners. The main workspace is organized logically with generation settings clearly presented.
              </p>
              
              <p>
                The platform includes a gallery view for organizing your creations, a community section for exploring other users' work, and a workspace for creating new images. Navigation between these sections is seamless, and the process of generating images is straightforward with well-explained parameters.
              </p>
              
              <p>
                The prompt interface is particularly well-designed, with options for negative prompts, style adjustments, and model selection clearly presented. For users new to AI image generation, Leonardo AI offers a smoother learning curve than many competitors.
              </p>
              
              <h3>Customization and Advanced Features</h3>
              <p>
                Leonardo AI offers several advanced features that appeal to professional creators:
              </p>
              
              <ul>
                <li><strong>Model Training (LoRA):</strong> Users can create custom fine-tuned models based on their own reference images, allowing for consistent generation of specific characters, styles, or objects</li>
                <li><strong>3D Asset Generation:</strong> Leonardo offers specialized tools for creating textures and assets for 3D modeling</li>
                <li><strong>Animation Capabilities:</strong> Basic animation features allow for creating simple animated assets</li>
                <li><strong>Batch Processing:</strong> Efficient generation of multiple variations simultaneously</li>
                <li><strong>Community Resources:</strong> Shared prompts, models, and resources from other creators</li>
              </ul>
              
              <p>
                The platform's customization capabilities are particularly valuable for game developers and studios who need to maintain visual consistency across multiple assets. The ability to train custom models (LoRAs) on specific styles or characters helps achieve this consistency.
              </p>
              
              <h3>Pricing and Value</h3>
              <p>
                Leonardo AI offers several pricing tiers:
              </p>
              
              <ul>
                <li><strong>Free Tier:</strong> Limited to 150 generations per month, standard resolution, and basic features</li>
                <li><strong>Starter ($10/month):</strong> 2,500 tokens monthly, higher resolution outputs, priority generation</li>
                <li><strong>Pro ($24/month):</strong> 8,000 tokens monthly, ultra-high resolution (8K), advanced features, API access</li>
                <li><strong>Enterprise:</strong> Custom pricing for teams with extended features</li>
              </ul>
              
              <p>
                The token system can be somewhat confusing for new users, but essentially, different types of generations cost different amounts of tokens, with more complex or higher-resolution images costing more.
              </p>
              
              <p>
                Compared to competitors, Leonardo AI's pricing is competitive, especially considering its specialized focus on game assets and concept art. For game developers, the value proposition is strong given the tailored features for their workflow.
              </p>
              
              <h3>Practical Applications of Leonardo AI</h3>
              
              <h4>1. Game Development</h4>
              <p>
                The platform particularly shines in game development workflows. It can generate character concepts, environment art, props, textures, and UI elements that fit gaming aesthetics. The ability to maintain stylistic consistency through custom trained models is especially valuable for game projects.
              </p>
              
              <h4>2. Concept Art and Visualization</h4>
              <p>
                For concept artists, Leonardo AI serves as a powerful ideation tool. It can rapidly generate multiple visual concepts based on descriptions, helping artists and designers explore different directions quickly before committing to detailed production.
              </p>
              
              <h4>3. Digital Art and Illustration</h4>
              <p>
                Digital artists use Leonardo AI to create illustrations, character designs, and fantasy scenes. The platform's strength in stylized art makes it particularly useful for illustrators working in fantasy, sci-fi, and anime genres.
              </p>
              
              <h4>4. 3D Modeling Support</h4>
              <p>
                3D artists can benefit from Leonardo AI's texture generation capabilities and its ability to create reference images for modeling. Some users incorporate it into their 3D workflows to generate texture maps and visual references.
              </p>
              
              <h3>Leonardo AI vs. Competitors in 2025</h3>
              <p>
                In the AI image generation landscape of 2025, Leonardo AI occupies a specialized niche with its focus on game development and digital art. Its main competitors include:
              </p>
              
              <ul>
                <li><strong>Midjourney:</strong> Offers superior overall aesthetic quality but less specialized for game assets</li>
                <li><strong>DALL-E 3:</strong> Provides better prompt accuracy but fewer customization options</li>
                <li><strong>Stable Diffusion:</strong> Offers more technical flexibility but a steeper learning curve</li>
                <li><strong>Firefly:</strong> Better integrated with professional creative workflows via Adobe</li>
              </ul>
              
              <p>
                Compared to these competitors, Leonardo AI stands out in:
              </p>
              
              <ul>
                <li>Specialization in game asset creation</li>
                <li>Balance of user-friendliness and advanced features</li>
                <li>Community features and resource sharing</li>
                <li>Custom model training that's more accessible than some alternatives</li>
              </ul>
              
              <p>
                However, it falls behind in some areas: Midjourney generally produces more artistic images; DALL-E 3 has better text understanding and rendering; Stable Diffusion offers more technical control for power users; and Firefly integrates better with professional creative software.
              </p>
            </div>
            
            {/* Comparison table of competitors */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Leonardo AI vs. Competitors: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Leonardo AI</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Midjourney</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">DALL-E 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price (monthly)</td>
                    <td className="px-4 py-3 text-center text-gray-700">$10-24</td>
                    <td className="px-4 py-3 text-center text-gray-700">$10-30</td>
                    <td className="px-4 py-3 text-center text-gray-700">$20 (ChatGPT Plus)</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Max Resolution</td>
                    <td className="px-4 py-3 text-center text-gray-700">8K (paid plans)</td>
                    <td className="px-4 py-3 text-center text-gray-700">1792×1024px</td>
                    <td className="px-4 py-3 text-center text-gray-700">1024×1024px</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Game Asset Focus</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Fair</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Aesthetic Quality</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Custom Training</td>
                    <td className="px-4 py-3 text-center text-gray-700">Yes (LoRA)</td>
                    <td className="px-4 py-3 text-center text-gray-700">No</td>
                    <td className="px-4 py-3 text-center text-gray-700">No</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Style Variety</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Prompt Accuracy</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">UI Ease of Use</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Medium</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Leonardo AI is an excellent AI image generator for specific use cases, particularly excelling in game asset creation, concept art, and digital illustration. Its specialized models, high-resolution outputs, and custom training features make it a valuable tool for game developers and digital creators.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Leonardo AI:</strong> Game developers, concept artists, digital illustrators, 3D modelers, and creative teams who need consistent asset generation. It's particularly valuable if you need to create multiple assets in a consistent style or want to create custom models for specific projects.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who might prefer alternatives:</strong> General photographers or graphic designers might be better served by Midjourney for artistic quality or DALL-E 3 for prompt accuracy. Adobe users might prefer the integration capabilities of Firefly, while technical users who want maximum control might gravitate toward Stable Diffusion.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Leonardo AI Free" 
                  url={product.affiliateUrl} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Leonardo AI Pro" 
                  url={`${product.affiliateUrl}/pricing`} 
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
                Do you have a question about Leonardo AI? Ask in the comments below and we'll answer.
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
                  <div className="font-medium text-gray-800 mt-1">Starts at {product.pricingStart}</div>
                </div>
                
                {product.hasFreeVersion && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free tier available</span>
                  </div>
                )}
              </div>
              
              <ButtonAffiliate 
                text="Try Leonardo AI Free" 
                url={product.affiliateUrl} 
                color="success" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-2"
              />
              
              <ButtonAffiliate 
                text="Get Leonardo AI Pro" 
                url={`${product.affiliateUrl}/pricing`} 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Image Generators</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/midjourney" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-medium">M</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Midjourney</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-1">4.9/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/dall-e-3" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">D3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">DALL-E 3</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-1">4.8/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/adobe-firefly" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-red-600 font-medium">AF</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Adobe Firefly</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.7/5</span>
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
                    <span>How does Leonardo AI's token system work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Leonardo AI uses a token-based credit system where different generation types cost varying amounts of tokens. Higher resolution images, more detailed generations, and advanced features consume more tokens. Each subscription tier provides a monthly token allocation. Free users get 150 tokens per month, while paid tiers receive significantly more. Unused tokens expire at the end of each month. You can also purchase additional token packs if you need more generations.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What are LoRAs in Leonardo AI?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    LoRAs (Low-Rank Adaptations) are custom-trained AI models in Leonardo AI that allow you to create consistent styles, characters, or objects. You can train a LoRA by uploading 10-20 reference images of a specific subject or style. Once trained, you can generate new images featuring that subject or in that style with high consistency. This feature is particularly valuable for game developers and artists who need consistent character designs or stylistic elements across multiple assets.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can I use Leonardo AI images commercially?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, Leonardo AI grants commercial usage rights for images generated on its platform. This means you can use these images in games, applications, marketing materials, and other commercial projects. However, as with all AI-generated content, you should be cautious about generating images that might infringe on existing copyrights, trademarks, or include recognizable people. Always review Leonardo AI's current terms of service for the most up-to-date information on licensing and usage rights.
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