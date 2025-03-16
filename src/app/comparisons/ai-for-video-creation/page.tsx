import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Best AI Video Creation Tools & Generators 2025',
  description: 'Discover the best AI video creation tools and generators in 2025. Independent reviews, pricing, feature comparisons, and exclusive trials.',
};

// Mock data for AI video tools - in a real app, you would import this from a data file
const aiVideoTools = [
  {
    id: 'runway',
    name: 'Runway Gen-2',
    description: 'Advanced AI video generation with powerful editing capabilities and text-to-video features',
    logoUrl: '/images/logos/runway.png',
    price: {
      startingAt: '$15/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Filmmakers', 'Video Editors', 'Content Creators', 'Digital Artists'],
    rating: 4.8,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Excellent' },
      'Generation Speed': { name: 'Generation Speed', value: 'Medium', info: '30-120 seconds for short clips' },
      'Text-to-Video': { name: 'Text-to-Video', value: true },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Very High' },
      'Editing Features': { name: 'Editing Features', value: 'Advanced', info: 'Comprehensive video editing suite' },
      'Commercial Use': { name: 'Commercial Use', value: true, info: 'With appropriate plan' },
    },
    affiliateUrl: 'https://runwayml.com',
    websiteUrl: 'https://runwayml.com',
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'AI-powered video editor with text-based editing, transcription, and voice cloning capabilities',
    logoUrl: '/images/logos/descript.png',
    price: {
      startingAt: '$12/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: true,
    },
    bestFor: ['YouTubers', 'Podcasters', 'Content Marketers', 'Educators'],
    rating: 4.7,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Very Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast', info: 'Real-time editing' },
      'Text-to-Video': { name: 'Text-to-Video', value: false },
      'Image-to-Video': { name: 'Image-to-Video', value: false },
      'Audio Integration': { name: 'Audio Integration', value: true, info: 'Advanced audio processing' },
      'Max Resolution': { name: 'Max Resolution', value: '4K' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Excellent', info: 'Text-based video editing' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://www.descript.com',
    websiteUrl: 'https://www.descript.com',
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform specializing in realistic AI avatars and presentations',
    logoUrl: '/images/logos/synthesia.png',
    price: {
      startingAt: '$30/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Business Presentations', 'Training Videos', 'Marketers', 'Educators'],
    rating: 4.6,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast', info: '10-30 minutes depending on length' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'With AI avatars' },
      'Image-to-Video': { name: 'Image-to-Video', value: false },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Basic' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://www.synthesia.io',
    websiteUrl: 'https://www.synthesia.io',
  },
  {
    id: 'invideo',
    name: 'InVideo',
    description: 'AI-powered video maker with templates and AI-assisted video creation',
    logoUrl: '/images/logos/invideo.png',
    price: {
      startingAt: '$15/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Social Media Content', 'Marketers', 'Small Businesses', 'Beginners'],
    rating: 4.5,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'Via templates' },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Good', info: 'Template-based' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://invideo.io',
    websiteUrl: 'https://invideo.io',
  },
  {
    id: 'elai',
    name: 'Elai.io',
    description: 'AI platform for creating videos with digital humans and presentations',
    logoUrl: '/images/logos/elai.png',
    price: {
      startingAt: '$29/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Business Videos', 'Educational Content', 'Digital Presenters'],
    rating: 4.3,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Medium' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'With AI presenters' },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Basic' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://elai.io',
    websiteUrl: 'https://elai.io',
  },
  {
    id: 'lumen5',
    name: 'Lumen5',
    description: 'AI video creator that transforms text content into engaging videos',
    logoUrl: '/images/logos/lumen5.png',
    price: {
      startingAt: '$15/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Content Repurposing', 'Social Media Videos', 'Marketers', 'Beginners'],
    rating: 4.4,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'From blogs and articles' },
      'Image-to-Video': { name: 'Image-to-Video', value: false },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p (paid plans)' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Good', info: 'Template-based' },
      'Commercial Use': { name: 'Commercial Use', value: true, info: 'On paid plans' },
    },
    affiliateUrl: 'https://lumen5.com',
    websiteUrl: 'https://lumen5.com',
  },
  {
    id: 'steve-ai',
    name: 'STEVE.AI',
    description: 'AI-powered video maker with drag-and-drop interface and animation capabilities',
    logoUrl: '/images/logos/steveai.png',
    price: {
      startingAt: '$19.99/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Marketers', 'Social Media Content', 'Explainer Videos'],
    rating: 4.2,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'Via templates' },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Good' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://www.steve.ai',
    websiteUrl: 'https://www.steve.ai',
  },
  {
    id: 'sora',
    name: 'OpenAI Sora',
    description: 'Advanced text-to-video AI model generating high-quality, realistic video from text prompts',
    logoUrl: '/images/logos/openai.png',
    price: {
      startingAt: 'API access only',
      hasFreeVersion: false,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Filmmakers', 'Professional Video Production', 'Creative Studios'],
    rating: 4.9,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Excellent' },
      'Generation Speed': { name: 'Generation Speed', value: 'Slow', info: 'Complex processing' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'Industry-leading quality' },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Very High' },
      'Editing Features': { name: 'Editing Features', value: 'API Only' },
      'Commercial Use': { name: 'Commercial Use', value: true, info: 'With appropriate licensing' },
    },
    affiliateUrl: 'https://openai.com/sora',
    websiteUrl: 'https://openai.com/sora',
  },
  {
    id: 'kapwing',
    name: 'Kapwing',
    description: 'Online video editor with AI-powered tools for subtitles, transcription and more',
    logoUrl: '/images/logos/kapwing.png',
    price: {
      startingAt: '$16/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Content Creators', 'Social Media Managers', 'Students'],
    rating: 4.3,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast' },
      'Text-to-Video': { name: 'Text-to-Video', value: false },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'High' },
      'Editing Features': { name: 'Editing Features', value: 'Excellent', info: 'Full-featured online editor' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://www.kapwing.com',
    websiteUrl: 'https://www.kapwing.com',
  },
  {
    id: 'pictory',
    name: 'Pictory',
    description: 'AI video generator that turns text content into videos with automated editing',
    logoUrl: '/images/logos/pictory.png',
    price: {
      startingAt: '$19/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Content Repurposing', 'Marketers', 'Bloggers'],
    rating: 4.4,
    features: {
      'Video Quality': { name: 'Video Quality', value: 'Good' },
      'Generation Speed': { name: 'Generation Speed', value: 'Fast' },
      'Text-to-Video': { name: 'Text-to-Video', value: true, info: 'From blogs and articles' },
      'Image-to-Video': { name: 'Image-to-Video', value: true },
      'Audio Integration': { name: 'Audio Integration', value: true },
      'Max Resolution': { name: 'Max Resolution', value: '1080p' },
      'Style Control': { name: 'Style Control', value: 'Medium' },
      'Editing Features': { name: 'Editing Features', value: 'Good' },
      'Commercial Use': { name: 'Commercial Use', value: true },
    },
    affiliateUrl: 'https://pictory.ai',
    websiteUrl: 'https://pictory.ai',
  }
];

// Key features to display in the comparison table
const keyVideoFeatures = [
  'Video Quality',
  'Generation Speed',
  'Text-to-Video',
  'Editing Features',
  'Commercial Use'
];

// Mock data for related reviews
const relatedReviews = [
  {
    id: 'runway',
    name: 'Runway Gen-2',
    logo: '/images/logos/runway.png',
    rating: 4.8,
    category: 'AI Video Creation',
    excerpt: 'Is Runway Gen-2 the most advanced AI video generator for professional creators in 2025?',
    featuredImage: '/images/featured/runway-review.jpg',
    updatedAt: 'March 10, 2025',
    label: 'Editor\'s Choice',
    labelColor: 'bg-red-100 text-red-800',
  },
  {
    id: 'descript',
    name: 'Descript',
    logo: '/images/logos/descript.png',
    rating: 4.7,
    category: 'AI Video Editing',
    excerpt: 'Descript review: How text-based video editing is revolutionizing content creation.',
    featuredImage: '/images/featured/descript-review.jpg',
    updatedAt: 'February 28, 2025',
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    logo: '/images/logos/synthesia.png',
    rating: 4.6,
    category: 'AI Video Creation',
    excerpt: 'Synthesia review: Creating professional videos with AI avatars and presenters.',
    featuredImage: '/images/featured/synthesia-review.jpg',
    updatedAt: 'February 15, 2025',
    label: 'Best for Business',
    labelColor: 'bg-blue-100 text-blue-800',
  },
];

export default function AIVideoToolsPage() {
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
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI Video Creation Tools (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI video generators and editors for creating professional videos, animations, 
            presentations, and social media content. Independent reviews and performance tests.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Video Tools
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI Is Transforming Video Creation</h2>
            <p className="text-gray-700 mb-4">
              AI video creation tools are revolutionizing how videos are produced, making professional-quality
              content accessible to creators of all skill levels. From generating entire videos from text
              prompts to streamlining editing workflows, these tools are dramatically reducing the time,
              cost, and technical expertise required for video production.
            </p>
            <p className="text-gray-700 mb-6">
              We've tested the leading AI video creation tools to help you find the perfect solution for your
              specific needs. Our comparison includes both text-to-video generators and AI-powered video editors
              that excel in different use cases.
            </p>

            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Video Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Output Quality</strong> - Evaluating video resolution, visual coherence, and overall production value</li>
                <li><strong>Ease of Use</strong> - Testing interface design, learning curve, and workflow efficiency</li>
                <li><strong>Generation Capabilities</strong> - Examining text-to-video, image-to-video, and editing features</li>
                <li><strong>Speed & Performance</strong> - Measuring generation and processing times</li>
                <li><strong>Commercial Viability</strong> - Assessing licensing terms and suitability for professional use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Video Creation Tools Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and performance of the leading AI video generators and editors available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiVideoTools}
            compareFeatures={keyVideoFeatures}
            categoryName="AI Video Creation Tools"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Video Creation Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Editor's Choice */}
            <div className="bg-red-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-red-100 text-red-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Editor's Choice
              </div>
              <h3 className="text-xl font-bold mb-2">Runway Gen-2</h3>
              <p className="text-gray-700 mb-4">
                Runway offers the most advanced text-to-video capabilities with exceptional quality and creative control
                for professional video creators.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.8)}
                </div>
                <span className="text-sm text-gray-500">Starts at $15/month</span>
              </div>
              <Link href="/reviews/runway" className="text-red-600 hover:text-red-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Professionals */}
            <div className="bg-orange-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-orange-100 text-orange-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Editing
              </div>
              <h3 className="text-xl font-bold mb-2">Descript</h3>
              <p className="text-gray-700 mb-4">
                Descript revolutionizes video editing with its text-based approach, making professional editing
                accessible to creators of all skill levels.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.7)}
                </div>
                <span className="text-sm text-gray-500">Starts at $12/month</span>
              </div>
              <Link href="/reviews/descript" className="text-orange-600 hover:text-orange-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Business */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Business
              </div>
              <h3 className="text-xl font-bold mb-2">Synthesia</h3>
              <p className="text-gray-700 mb-4">
                Synthesia excels at creating professional business videos with AI avatars and presenters,
                perfect for training and marketing content.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.6)}
                </div>
                <span className="text-sm text-gray-500">Starts at $30/month</span>
              </div>
              <Link href="/reviews/synthesia" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Video Creation Tool Reviews</h2>
          
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
                    <span className="inline-flex items-center text-red-600 font-medium text-sm">
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
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium"
            >
              View All AI Video Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Types of AI Video Tools Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Types of AI Video Creation Tools</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Text-to-Video Generators</h3>
              <p className="text-gray-700 mb-4">
                These tools use AI to create videos directly from text descriptions. You provide a prompt describing what you want, and the AI generates a video from scratch. They're revolutionizing content creation by making video production possible without any footage or complex editing skills.
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-600">Popular tools in this category:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded">Runway Gen-2</span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded">OpenAI Sora</span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded">Synthesia</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">AI Video Editors</h3>
              <p className="text-gray-700 mb-4">
                AI video editors enhance traditional video editing with intelligent features like automatic transcription, text-based editing, voice cloning, and smart trimming. They streamline the post-production workflow for existing footage.
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-600">Popular tools in this category:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded">Descript</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded">Kapwing</span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded">InVideo</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Content Repurposing Tools</h3>
              <p className="text-gray-700 mb-4">
                These specialized AI tools convert existing content (like blogs, articles, or podcasts) into video format. They're ideal for content marketers looking to repurpose content across different platforms.
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-600">Popular tools in this category:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Lumen5</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">Pictory</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">VEED.io</span>
                </div>
              </div>
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
                What are AI video creation tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI video creation tools are software applications that use artificial intelligence to generate, 
                  edit, or enhance videos. They range from text-to-video generators that create videos from scratch 
                  based on text descriptions, to intelligent video editors that streamline traditional editing workflows. 
                  These tools typically use deep learning models to understand and process visual information, 
                  making professional video production more accessible.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI-generated videos good enough for professional use?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  The quality of AI-generated videos has improved dramatically in recent years. While early tools 
                  produced obviously artificial content, today's advanced platforms like Runway Gen-2 and OpenAI Sora 
                  can create surprisingly realistic footage. For business presentations, social media content, 
                  educational materials, and many marketing applications, AI video tools now produce professional-quality 
                  results. However, for high-end productions that require precise control and perfect visual fidelity, 
                  traditional filming and editing may still be preferred, though the gap is narrowing rapidly.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can I use AI-generated videos commercially?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Most AI video creation tools offer commercial usage rights for content created on their platforms, 
                  particularly on paid plans. However, licensing terms vary significantly between providers. Some tools 
                  offer full commercial rights with no restrictions, while others may have limitations on usage in certain 
                  industries or require attribution. Always review the specific terms of service and licensing agreements 
                  for your chosen tool before using AI-generated videos commercially. Additionally, be cautious about 
                  generating content that could infringe on existing copyrights or trademarks.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What are the limitations of AI video creation tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Despite rapid advancements, AI video tools still have several limitations. These include:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Limited control over specific details compared to traditional video production</li>
                  <li>Challenges with generating consistent characters across multiple scenes</li>
                  <li>Difficulties with complex narratives or precise timing</li>
                  <li>Variations in quality depending on the complexity of the request</li>
                  <li>Potential for visual artifacts or unnatural movements in some scenarios</li>
                  <li>Time constraints on video length (typically limited to short clips)</li>
                </ul>
                <p className="mt-2">
                  These limitations are continuously being addressed as the technology evolves, with each new model 
                  generation showing significant improvements.
                </p>
              </div>
            </details>
            
            <details className="bg-white rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How are businesses using AI video creation tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Businesses are leveraging AI video tools in numerous ways:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Creating personalized product demonstrations at scale</li>
                  <li>Developing multilingual training materials with AI avatars</li>
                  <li>Rapidly producing social media content for multiple platforms</li>
                  <li>Generating explainer videos and presentations</li>
                  <li>Creating template-based video content that can be easily customized</li>
                  <li>Repurposing blog content and articles into video format</li>
                  <li>Producing preliminary concept videos for marketing campaigns</li>
                </ul>
                <p className="mt-2">
                  These applications allow businesses to produce more video content faster and at lower cost than 
                  traditional video production methods.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Popular Use Cases for AI Video Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Marketing Videos</h3>
              <p className="text-gray-700">
                Create engaging promotional videos, product demos, and social media content without expensive production resources.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Educational Content</h3>
              <p className="text-gray-700">
                Develop instructional videos, tutorials, and training materials that explain complex concepts visually.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Presentations</h3>
              <p className="text-gray-700">
                Transform static slides into dynamic video presentations with AI avatars and visual elements.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Content Repurposing</h3>
              <p className="text-gray-700">
                Convert blogs, articles, and podcasts into engaging video content for social media and other platforms.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Conceptual Visualization</h3>
              <p className="text-gray-700">
                Quickly visualize creative concepts and ideas before committing to expensive production processes.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media Content</h3>
              <p className="text-gray-700">
                Generate short-form videos optimized for different social platforms to boost engagement and reach.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Video Production?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI video creation tools and find the perfect solution for your creative needs.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-red-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Video Tools
          </Link>
        </div>
      </section>
    </main>
  );
}