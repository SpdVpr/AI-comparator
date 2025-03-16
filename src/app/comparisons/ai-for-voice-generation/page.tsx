import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';
import { aiVoiceGenerationTools, keyVoiceFeatures } from '@/data/aiVoiceGenerationTools';

export const metadata: Metadata = {
  title: 'Best AI Voice Generation & Text-to-Speech Tools 2025',
  description: 'Compare the top AI voice generation tools and text-to-speech software in 2025. Independent reviews, voice quality tests, pricing, and real-world applications.',
};

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    logo: '/images/logos/elevenlabs.png',
    rating: 4.9,
    category: 'AI Voice Generation',
    excerpt: 'Is ElevenLabs the most realistic AI voice generator for professional content creators?',
    featuredImage: '/images/featured/elevenlabs-review.jpg',
    updatedAt: 'March 10, 2025',
    label: 'Editor\'s Choice',
    labelColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'play-ht',
    name: 'Play.ht',
    logo: '/images/logos/playht.png',
    rating: 4.7,
    category: 'AI Voice Generation',
    excerpt: 'Play.ht review: Professional voice cloning and text-to-speech at an affordable price.',
    featuredImage: '/images/featured/playht-review.jpg',
    updatedAt: 'February 28, 2025',
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    logo: '/images/logos/murf.png',
    rating: 4.6,
    category: 'AI Voice Generation',
    excerpt: 'Murf AI review: The best AI voice generator for business presentations and explainer videos?',
    featuredImage: '/images/featured/murf-review.jpg',
    updatedAt: 'February 15, 2025',
  },
];

export default function AIVoiceGenerationToolsPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI Voice Generation Tools (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI text-to-speech and voice synthesis tools for creating realistic voiceovers, 
            narration, and audio content. Independent reviews and audio quality tests.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Voice Tools
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Transform Text into Natural-Sounding Speech</h2>
            <p className="text-gray-700 mb-4">
              AI voice generation tools have revolutionized how we create audio content. Using advanced deep learning 
              and neural networks, these tools can convert text into incredibly realistic speech that's nearly 
              indistinguishable from human voices.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you're creating content for podcasts, videos, e-learning, or accessibility, the right 
              AI voice generator can save time, reduce costs, and deliver professional-quality results without 
              the need for voice talent or recording studios.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Voice Generation Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Voice Quality</strong> - Assessing naturalness, emotion, and human-likeness</li>
                <li><strong>Pronunciation</strong> - Testing accuracy with challenging words and phrases</li>
                <li><strong>Voice Customization</strong> - Evaluating voice cloning and style controls</li>
                <li><strong>Language Support</strong> - Checking multilingual capabilities and accents</li>
                <li><strong>User Experience</strong> - Rating ease of use, editing capabilities, and workflow integration</li>
                <li><strong>Price-to-Performance</strong> - Analyzing cost relative to quality and features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Voice Generation Tools Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and performance of the leading text-to-speech and voice synthesis tools available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiVoiceGenerationTools}
            compareFeatures={keyVoiceFeatures}
            categoryName="AI Voice Generation Tools"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Voice Generation Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Editor's Choice */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Editor's Choice
              </div>
              <h3 className="text-xl font-bold mb-2">ElevenLabs</h3>
              <p className="text-gray-700 mb-4">
                ElevenLabs offers the most natural-sounding voices with exceptional emotion and nuance, 
                making it ideal for professional content creators and media production.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.9)}
                </div>
                <span className="text-sm text-gray-500">Starts at $5/month</span>
              </div>
              <Link href="/reviews/elevenlabs" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best Value */}
            <div className="bg-cyan-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-cyan-100 text-cyan-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best Value
              </div>
              <h3 className="text-xl font-bold mb-2">Play.ht</h3>
              <p className="text-gray-700 mb-4">
                Play.ht delivers an excellent balance of voice quality and affordability with powerful 
                voice cloning technology and a comprehensive library of preset voices.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.7)}
                </div>
                <span className="text-sm text-gray-500">Starts at $19/month</span>
              </div>
              <Link href="/reviews/play-ht" className="text-cyan-600 hover:text-cyan-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Business */}
            <div className="bg-teal-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-teal-100 text-teal-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Business
              </div>
              <h3 className="text-xl font-bold mb-2">Murf AI</h3>
              <p className="text-gray-700 mb-4">
                Murf AI stands out with its business-focused features, including excellent presentation tools, 
                collaborative workspaces, and professional-sounding voices for corporate use.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.6)}
                </div>
                <span className="text-sm text-gray-500">Starts at $29/month</span>
              </div>
              <Link href="/reviews/murf-ai" className="text-teal-600 hover:text-teal-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Popular Applications for AI Voice Technology</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Video Content</h3>
              <p className="text-gray-700">
                Create professional voiceovers for explainer videos, product demos, YouTube content, and 
                advertisements without hiring voice talent or setting up recording equipment.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Podcasting</h3>
              <p className="text-gray-700">
                Generate narration for podcasts, audio articles, and radio content. Some creators use 
                AI voices for secondary characters or to maintain consistent audio quality across episodes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">E-Learning</h3>
              <p className="text-gray-700">
                Create narration for online courses, educational materials, and training modules. AI voices enable 
                quick updates to course content without re-recording sessions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Accessibility</h3>
              <p className="text-gray-700">
                Convert written content into audio formats for visually impaired users or those who prefer 
                audio consumption. Create audio versions of articles, books, and other text materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Voice Tool Reviews</h2>
          
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
                    <span className="inline-flex items-center text-blue-600 font-medium text-sm">
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
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium"
            >
              View All AI Voice Reviews
            </Link>
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
                How realistic are AI-generated voices?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Modern AI voice technology has become remarkably realistic. Premium services like ElevenLabs and 
                  Play.ht generate voices that are often indistinguishable from human speech in casual listening. 
                  These tools can incorporate natural intonation, emotion, and appropriate pauses that mimic human 
                  speech patterns. However, quality varies between providers, with some budget options still 
                  exhibiting a slight robotic quality or unusual pronunciations with certain words.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What is voice cloning and is it ethical?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Voice cloning is the process of creating a digital replica of someone's voice using AI. Most 
                  ethical voice cloning services require explicit consent from the voice owner and have safeguards 
                  against misuse. Many services allow you to clone your own voice with just a few minutes of recording, 
                  while some offer licensed celebrity or professional voice actor clones. When using voice cloning, 
                  always ensure you have proper permission and consider the potential for misuse in an era of deepfakes.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can AI voices express emotions?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Yes, advanced AI voice generators can express a range of emotions. Top-tier services like 
                  ElevenLabs, Play.ht, and Resemble.ai allow you to adjust parameters like excitement, sadness, 
                  anger, or emphasis in the generated speech. Some platforms even provide SSML (Speech Synthesis 
                  Markup Language) tags that let you specify exactly where to apply emotional inflections in your 
                  text. The quality of emotional expression varies between providers, with premium services 
                  offering much more natural and nuanced emotional range.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How much do AI voice generation tools cost?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Pricing for AI voice generators varies widely based on quality and features:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li><strong>Free tier:</strong> Most services offer limited free plans with restricted features, lower quality voices, and watermarks</li>
                  <li><strong>Budget options:</strong> $5-15/month for basic voice generation with decent quality</li>
                  <li><strong>Mid-range:</strong> $20-50/month for better voice quality, more voices, and additional features</li>
                  <li><strong>Premium:</strong> $50-100+/month for professional-grade voices, advanced customization, and commercial rights</li>
                </ul>
                <p className="mt-2">
                  Many services use a character-based or minute-based pricing model, so costs can scale with usage.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What languages do AI voice generators support?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Language support varies significantly between platforms. Industry leaders like ElevenLabs, 
                  Microsoft Azure TTS, and Google Cloud TTS support 50+ languages. Most tools offer excellent 
                  support for major languages like English, Spanish, French, German, and Chinese, while support 
                  for less common languages varies. It's worth noting that voice quality and naturalism often 
                  differ across languages, with English typically having the most advanced and natural-sounding 
                  voices. Always check the specific language capabilities if you need multilingual support.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect AI Voice Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top text-to-speech tools and discover which one best fits your content creation needs.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Voice Tools
          </Link>
        </div>
      </section>
    </main>
  );
}