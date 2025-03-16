import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';
import { aiImageTools, keyImageFeatures } from '@/data/aiImageTools';

export const metadata: Metadata = {
  title: 'Best AI Image Generators & Art Creation Tools 2025',
  description: 'Discover the best AI image generators and art creation tools in 2025. Independent reviews, quality tests, style comparisons, and exclusive trials.',
};

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    logo: '/images/logos/midjourney.png',
    rating: 4.9,
    category: 'AI Image Generation',
    excerpt: 'Midjourney v6 review: Is it still the best AI image generator for artists and creators?',
    featuredImage: '/images/featured/midjourney-review.jpg',
    updatedAt: 'March 3, 2025',
    label: 'Best Overall',
    labelColor: 'bg-pink-100 text-pink-800',
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    logo: '/images/logos/dalle.png',
    rating: 4.7,
    category: 'AI Image Generation',
    excerpt: 'DALL-E 3 review: OpenAI\'s latest image generator put to the test.',
    featuredImage: '/images/featured/dalle-review.jpg',
    updatedAt: 'February 20, 2025',
    label: 'Best Prompt Accuracy',
    labelColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    logo: '/images/logos/leonardo.png',
    rating: 4.6,
    category: 'AI Image Generation',
    excerpt: 'Leonardo.ai review: The best AI image generator for game developers?',
    featuredImage: '/images/featured/leonardo-review.jpg',
    updatedAt: 'February 5, 2025',
    label: 'Best for Games',
    labelColor: 'bg-blue-100 text-blue-800',
  },
];

export default function AIImageGenerationPage() {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400' : 'text-gray-300'} ${i === fullStars && hasHalfStar ? 'text-yellow-400' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI Image Generators (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI art generators and image creation tools for digital art, 
            illustrations, concept designs, and visual content. Independent reviews and quality tests.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Image Generators
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI Is Revolutionizing Digital Art Creation</h2>
            <p className="text-gray-700 mb-4">
              AI image generators have transformed the digital art landscape, enabling creators to bring ideas to life 
              with unprecedented speed and flexibility. These tools use advanced machine learning models to generate 
              images from text descriptions, reference images, or a combination of inputs.
            </p>
            <p className="text-gray-700 mb-6">
              We've thoroughly tested the leading AI image generators to help you find the perfect tool for your creative 
              projects. Our comparison includes artistic quality, style versatility, resolution capabilities, ease of use, 
              and commercial licensing options.
            </p>

            <div className="bg-pink-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Image Generators</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Image Quality</strong> - Evaluating aesthetic appeal, detail, consistency, and technical quality</li>
                <li><strong>Prompt Accuracy</strong> - Testing how well the tool follows complex instructions</li>
                <li><strong>Style Versatility</strong> - Examining range of artistic styles and customization options</li>
                <li><strong>User Experience</strong> - Assessing interface design, learning curve, and workflow integration</li>
                <li><strong>Performance Speed</strong> - Measuring generation time and throughput capabilities</li>
                <li><strong>Price-to-Value</strong> - Analyzing pricing structures and output limitations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Image Generators Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, image quality, and pricing of the leading AI art and image generation tools available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiImageTools}
            compareFeatures={keyImageFeatures}
            categoryName="AI Image Generators"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Image Generators</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Best Overall */}
            <div className="bg-pink-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-pink-100 text-pink-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best Overall
              </div>
              <h3 className="text-xl font-bold mb-2">Midjourney</h3>
              <p className="text-gray-700 mb-4">
                Midjourney delivers the highest overall artistic quality with a unique aesthetic that blends 
                creativity with photorealism. It excels in creating stunning concept art and illustrations.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.9)}
                </div>
                <span className="text-sm text-gray-500">Starts at $10/month</span>
              </div>
              <Link href="/reviews/midjourney" className="text-pink-600 hover:text-pink-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Accuracy */}
            <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 text-green-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Accuracy
              </div>
              <h3 className="text-xl font-bold mb-2">DALL-E 3</h3>
              <p className="text-gray-700 mb-4">
                DALL-E 3 offers exceptional prompt following accuracy and detailed text understanding, making it 
                ideal for precise visual concepts and scenarios with multiple elements.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.8)}
                </div>
                <span className="text-sm text-gray-500">$20/month (ChatGPT+)</span>
              </div>
              <Link href="/reviews/dall-e-3" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Customization */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Customization
              </div>
              <h3 className="text-xl font-bold mb-2">Stable Diffusion</h3>
              <p className="text-gray-700 mb-4">
                Stable Diffusion offers unmatched flexibility and customization through open-source access, 
                custom model training, and extensive community models and extensions.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.6)}
                </div>
                <span className="text-sm text-gray-500">Free (self-hosted)</span>
              </div>
              <Link href="/reviews/stable-diffusion" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Image Generator Reviews</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedReviews.map((review) => (
              <Link 
                key={review.id}
                href={`/reviews/${review.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100"
              >
                {/* Featured image */}
                {review.featuredImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={review.featuredImage} 
                      alt={`${review.name} review thumbnail`}
                      fill
                      className="object-cover"
                    />
                    {review.label && (
                      <span className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${review.labelColor || 'bg-gray-100 text-gray-800'}`}>
                        {review.label}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      {review.logo && (
                        <Image 
                          src={review.logo} 
                          alt={`${review.name} logo`}
                          width={25}
                          height={25}
                          className="rounded-full"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <span className="text-xs text-gray-500">Updated: {review.updatedAt}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {review.excerpt}
                  </p>
                  
                  <div className="flex justify-end mt-auto">
                    <span className="inline-flex items-center text-pink-600 font-medium text-sm">
                      Read full review
                      <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/reviews" 
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition font-medium"
            >
              View All AI Image Generator Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Use Cases for AI Image Generators</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Concept Art & Illustration</h3>
              <p className="text-gray-700 mb-3">
                AI image generators excel at rapidly creating concept art for characters, environments, and scenes, 
                allowing artists and game developers to explore multiple visual directions in minutes instead of days.
              </p>
              <p className="text-gray-700">
                <strong>Best tools:</strong> Midjourney, Leonardo.ai, Stable Diffusion
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Marketing & Advertising</h3>
              <p className="text-gray-700 mb-3">
                Create custom visuals for social media, ads, and marketing campaigns without expensive photo shoots 
                or stock photos. AI generators can match your brand style and produce consistent visual assets.
              </p>
              <p className="text-gray-700">
                <strong>Best tools:</strong> DALL-E 3, Adobe Firefly, Canva AI
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Product Design & Prototyping</h3>
              <p className="text-gray-700 mb-3">
                Visualize product concepts and design iterations quickly, allowing designers to test multiple 
                ideas and get feedback before investing in detailed 3D modeling or physical prototypes.
              </p>
              <p className="text-gray-700">
                <strong>Best tools:</strong> DALL-E 3, Midjourney, Adobe Firefly
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Game Development</h3>
              <p className="text-gray-700 mb-3">
                Generate game assets, character designs, environment concepts, textures, and UI elements 
                with consistent styles that match your game's aesthetic requirements.
              </p>
              <p className="text-gray-700">
                <strong>Best tools:</strong> Leonardo.ai, Stable Diffusion, Midjourney
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can I use AI-generated images commercially?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Most AI image generators allow commercial use of generated images, but with varying 
                  terms and conditions. Tools like Midjourney, DALL-E, and Leonardo.ai offer commercial 
                  licensing for paid users. However, it's important to review each platform's specific 
                  terms, as some may have restrictions on certain industries or require attribution. 
                  Additionally, be cautious about generating images of recognizable people, brands, or 
                  copyrighted characters, as these may still create legal issues regardless of the tool's 
                  general licensing terms.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Which AI image generator creates the most realistic images?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  As of 2025, Midjourney v6 and DALL-E 3 generally produce the most photorealistic images. 
                  Midjourney excels at creating beautiful, artistic photorealism with impressive lighting 
                  and detail, while DALL-E 3 often produces more accurate representations of specific 
                  concepts or scenes described in prompts. For specialized photorealism, tools like 
                  Leonardo.ai with its Photoreal model or Stable Diffusion with the right custom models 
                  (like SDXL or Realistic Vision) can also achieve excellent results. The definition of 
                  "realistic" can vary depending on your specific needs—whether you prioritize physical 
                  accuracy, lighting quality, or compositional realism.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI image generators free to use?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Several AI image generators offer free tiers or options, but with limitations:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Stable Diffusion is free if you self-host it (requires technical knowledge and suitable hardware)</li>
                  <li>DALL-E 3 is available through the free tier of ChatGPT with limited daily generations</li>
                  <li>Leonardo.ai offers a free tier with 150 generations per month</li>
                  <li>Bing Image Creator (powered by DALL-E) is free with a Microsoft account</li>
                  <li>Many tools offer free trials with limited images or features</li>
                </ul>
                <p className="mt-2">
                  For professional or high-volume use, paid subscriptions typically range from $10-30 per month 
                  and provide higher quality outputs, more generations, faster processing, and commercial usage rights.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How do I write effective prompts for AI image generators?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Creating effective prompts is key to getting the best results from AI image generators:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Be specific and detailed</strong> about what you want to see, including subject, setting, lighting, style, and perspective</li>
                  <li><strong>Use artistic references</strong> such as "in the style of [artist]" or "like [art movement]"</li>
                  <li><strong>Include technical parameters</strong> like "high resolution," "detailed," "photorealistic," or "cinematic lighting"</li>
                  <li><strong>Specify what you don't want</strong> using negative prompts (especially important in Midjourney and Stable Diffusion)</li>
                  <li><strong>Experiment with prompt structure</strong> - different tools respond better to different prompt formats</li>
                </ul>
                <p className="mt-2">
                  Each platform has its own "prompt language" that works best. For example, Midjourney responds 
                  well to simple, descriptive phrases, while DALL-E 3 handles more natural language and complex 
                  instructions. Most tools offer prompt guides to help you learn their specific preferences.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What are custom models and LoRAs in AI image generation?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Custom models and LoRAs (Low-Rank Adaptations) are ways to fine-tune AI image generators 
                  for specific styles, subjects, or concepts:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Custom models</strong> are full fine-tuned versions of base models like Stable Diffusion that are trained on specific datasets to excel at particular styles or content types</li>
                  <li><strong>LoRAs</strong> are smaller, more efficient fine-tuning addons that can be applied to base models to teach them specific concepts, characters, or styles</li>
                </ul>
                <p className="mt-2">
                  Platforms like Leonardo.ai and Stable Diffusion allow users to create custom LoRAs by 
                  uploading 10-20 reference images of a specific subject or style. These tools are 
                  particularly valuable for ensuring consistency across multiple generations or for 
                  creating images in highly specific styles that the base models might not handle well.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Creative Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI image generators and find the perfect tool for your visual projects.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Image Generators
          </Link>
        </div>
      </section>
    </main>
  );
}