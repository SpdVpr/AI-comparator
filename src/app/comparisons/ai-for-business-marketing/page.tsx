import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Best AI for Business & Marketing Tools 2025',
  description: 'Discover the top AI tools for business, marketing, sales, and customer service in 2025. Independent reviews, pricing, ROI comparisons, and exclusive trials.',
};

// Mock data for AI business and marketing tools
const aiBusinessTools = [
  {
    id: 'hubspot',
    name: 'HubSpot AI',
    description: 'All-in-one marketing, sales, and CRM platform with powerful AI capabilities',
    logoUrl: '/images/logos/hubspot.png',
    price: {
      startingAt: '$20/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Marketing Teams', 'Sales Teams', 'CRM Integration', 'Content Marketing'],
    rating: 4.8,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Excellent', info: 'Blogs, emails, social media posts' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Excellent', info: 'Comprehensive insights and predictions' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Advanced marketing and sales automation' },
      'CRM Integration': { name: 'CRM Integration', value: 'Native', info: 'Deeply integrated with HubSpot CRM' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'AI-powered email campaigns and optimization' },
      'Personalization': { name: 'Personalization', value: 'Advanced', info: 'Dynamic content across channels' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Comprehensive', info: 'Advanced reporting and visualization' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Detailed attribution reporting' },
    },
    affiliateUrl: 'https://www.hubspot.com',
    websiteUrl: 'https://www.hubspot.com',
  },
  {
    id: 'salesforce-einstein',
    name: 'Salesforce Einstein',
    description: 'Integrated AI for CRM that provides predictive analytics and recommendations',
    logoUrl: '/images/logos/salesforce.png',
    price: {
      startingAt: '$50/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Enterprise Businesses', 'Sales Teams', 'Customer Service', 'Lead Scoring'],
    rating: 4.7,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Good', info: 'Email templates and responses' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Excellent', info: 'Advanced predictive analytics' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Enterprise-grade automation' },
      'CRM Integration': { name: 'CRM Integration', value: 'Native', info: 'Built into Salesforce ecosystem' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'Integrated with Marketing Cloud' },
      'Personalization': { name: 'Personalization', value: 'Advanced', info: 'Cross-channel personalization' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Comprehensive', info: 'Customizable dashboards and reports' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Detailed attribution models' },
    },
    affiliateUrl: 'https://www.salesforce.com/products/einstein/overview/',
    websiteUrl: 'https://www.salesforce.com/products/einstein/overview/',
  },
  {
    id: 'marketo',
    name: 'Adobe Marketo Engage',
    description: 'AI-powered marketing automation platform for complex B2B marketing needs',
    logoUrl: '/images/logos/marketo.png',
    price: {
      startingAt: '$1,195/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['B2B Marketing', 'Enterprise Companies', 'Lead Management', 'ABM'],
    rating: 4.6,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Good', info: 'Content recommendations' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Very Good', info: 'Behavioral analytics' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Advanced marketing automation' },
      'CRM Integration': { name: 'CRM Integration', value: 'Excellent', info: 'Multiple CRM integrations' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'Advanced email marketing capabilities' },
      'Personalization': { name: 'Personalization', value: 'Advanced', info: 'Account-based personalization' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Comprehensive', info: 'Revenue attribution reporting' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Multi-touch attribution' },
    },
    affiliateUrl: 'https://business.adobe.com/products/marketo/adobe-marketo.html',
    websiteUrl: 'https://business.adobe.com/products/marketo/adobe-marketo.html',
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Email marketing platform with AI-powered content creation and optimization',
    logoUrl: '/images/logos/mailchimp.png',
    price: {
      startingAt: '$13/month',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Small Businesses', 'Email Marketing', 'Startups', 'Content Creators'],
    rating: 4.5,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Very Good', info: 'Email and campaign content' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Good', info: 'Basic audience insights' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Email automation and customer journeys' },
      'CRM Integration': { name: 'CRM Integration', value: 'Limited', info: 'Some integrations available' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'Core platform strength' },
      'Personalization': { name: 'Personalization', value: 'Good', info: 'Dynamic content blocks' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Basic', info: 'Email performance analytics' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Basic campaign tracking' },
    },
    affiliateUrl: 'https://mailchimp.com',
    websiteUrl: 'https://mailchimp.com',
  },
  {
    id: 'semrush',
    name: 'Semrush AI',
    description: 'SEO and content marketing platform with advanced AI analysis capabilities',
    logoUrl: '/images/logos/semrush.png',
    price: {
      startingAt: '$129.95/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['SEO Specialists', 'Content Marketers', 'Competitive Analysis', 'PPC'],
    rating: 4.7,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Very Good', info: 'SEO content creation' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Limited', info: 'Focused on search and traffic' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'SEO and content automation' },
      'CRM Integration': { name: 'CRM Integration', value: 'Limited', info: 'Some integrations available' },
      'Email Marketing': { name: 'Email Marketing', value: false, info: 'Not a core feature' },
      'Personalization': { name: 'Personalization', value: 'Limited', info: 'Not focused on personalization' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Comprehensive', info: 'Detailed SEO analytics' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'SEO and PPC ROI tracking' },
    },
    affiliateUrl: 'https://www.semrush.com',
    websiteUrl: 'https://www.semrush.com',
  },
  {
    id: 'chatspot',
    name: 'ChatSpot',
    description: 'AI chat interface for marketing and sales operations from HubSpot',
    logoUrl: '/images/logos/chatspot.png',
    price: {
      startingAt: 'Free (Beta)',
      hasFreeVersion: true,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Marketing Teams', 'Sales Teams', 'HubSpot Users', 'Customer Support'],
    rating: 4.4,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Very Good', info: 'Marketing and sales content' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Good', info: 'When connected to CRM' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Task automation via chat' },
      'CRM Integration': { name: 'CRM Integration', value: 'Excellent', info: 'Deep HubSpot integration' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'Email drafting and analysis' },
      'Personalization': { name: 'Personalization', value: 'Good', info: 'Content personalization' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Limited', info: 'Basic performance insights' },
      'ROI Tracking': { name: 'ROI Tracking', value: false, info: 'Limited ROI capabilities' },
    },
    affiliateUrl: 'https://chatspot.ai',
    websiteUrl: 'https://chatspot.ai',
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    description: 'Social media management platform with AI-powered content suggestions',
    logoUrl: '/images/logos/hootsuite.png',
    price: {
      startingAt: '$99/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Social Media Managers', 'Marketing Teams', 'Content Creation', 'Scheduling'],
    rating: 4.3,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Good', info: 'Social media content creation' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Good', info: 'Social media analytics' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Scheduling and publishing automation' },
      'CRM Integration': { name: 'CRM Integration', value: 'Limited', info: 'Some integrations available' },
      'Email Marketing': { name: 'Email Marketing', value: false, info: 'Not a core feature' },
      'Personalization': { name: 'Personalization', value: 'Limited', info: 'Basic content targeting' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Comprehensive', info: 'Social performance analytics' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Social ROI measurement' },
    },
    affiliateUrl: 'https://www.hootsuite.com',
    websiteUrl: 'https://www.hootsuite.com',
  },
  {
    id: 'zoho-marketingplus',
    name: 'Zoho MarketingPlus',
    description: 'Integrated marketing platform with AI-driven campaign optimization',
    logoUrl: '/images/logos/zoho.png',
    price: {
      startingAt: '$25/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Small-Medium Businesses', 'Marketing Automation', 'Email Campaigns', 'CRM Integration'],
    rating: 4.2,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Good', info: 'Basic content suggestions' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Good', info: 'Integrated analytics' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Marketing automation workflows' },
      'CRM Integration': { name: 'CRM Integration', value: 'Excellent', info: 'Native Zoho CRM integration' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'Complete email marketing solution' },
      'Personalization': { name: 'Personalization', value: 'Good', info: 'Dynamic content personalization' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Good', info: 'Comprehensive marketing analytics' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Campaign ROI analysis' },
    },
    affiliateUrl: 'https://www.zoho.com/marketingplus/',
    websiteUrl: 'https://www.zoho.com/marketingplus/',
  },
  {
    id: 'unbounce',
    name: 'Unbounce Smart Copy',
    description: 'AI-powered landing page platform with conversion optimization',
    logoUrl: '/images/logos/unbounce.png',
    price: {
      startingAt: '$90/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Landing Pages', 'A/B Testing', 'Conversion Optimization', 'PPC Campaigns'],
    rating: 4.5,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Very Good', info: 'Landing page and ad copy' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Good', info: 'Visitor and conversion analysis' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Smart Traffic optimization' },
      'CRM Integration': { name: 'CRM Integration', value: 'Good', info: 'Multiple CRM integrations' },
      'Email Marketing': { name: 'Email Marketing', value: false, info: 'Limited email capabilities' },
      'Personalization': { name: 'Personalization', value: 'Good', info: 'Dynamic text replacement' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Good', info: 'Conversion analytics' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Campaign tracking and reporting' },
    },
    affiliateUrl: 'https://unbounce.com',
    websiteUrl: 'https://unbounce.com',
  },
  {
    id: 'drift',
    name: 'Drift',
    description: 'Conversational marketing platform with AI chatbots for lead generation',
    logoUrl: '/images/logos/drift.png',
    price: {
      startingAt: '$2,500/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: false,
    },
    bestFor: ['Conversational Marketing', 'Lead Generation', 'Customer Engagement', 'ABM'],
    rating: 4.4,
    features: {
      'AI Content Generation': { name: 'AI Content Generation', value: 'Good', info: 'Chatbot conversations' },
      'Customer Analytics': { name: 'Customer Analytics', value: 'Very Good', info: 'Conversation analytics' },
      'Automation Tools': { name: 'Automation Tools', value: true, info: 'Conversational automation' },
      'CRM Integration': { name: 'CRM Integration', value: 'Excellent', info: 'Major CRM integrations' },
      'Email Marketing': { name: 'Email Marketing', value: true, info: 'Conversational email capabilities' },
      'Personalization': { name: 'Personalization', value: 'Very Good', info: 'Real-time personalization' },
      'Analytics Dashboard': { name: 'Analytics Dashboard', value: 'Comprehensive', info: 'Conversation intelligence' },
      'ROI Tracking': { name: 'ROI Tracking', value: true, info: 'Revenue attribution' },
    },
    affiliateUrl: 'https://www.drift.com',
    websiteUrl: 'https://www.drift.com',
  }
];

// Define key features to highlight
const keyBusinessFeatures = [
  'AI Content Generation',
  'Customer Analytics', 
  'Automation Tools',
  'ROI Tracking'
];

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
  {
    id: 'hubspot',
    name: 'HubSpot AI',
    logo: '/images/logos/hubspot.png',
    rating: 4.8,
    category: 'AI for Business',
    excerpt: 'Is HubSpot AI the best all-in-one marketing and sales platform in 2025?',
    featuredImage: '/images/featured/hubspot-review.jpg',
    updatedAt: 'March 12, 2025',
    label: 'Best All-in-One',
    labelColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'salesforce-einstein',
    name: 'Salesforce Einstein',
    logo: '/images/logos/salesforce.png',
    rating: 4.7,
    category: 'AI for Business',
    excerpt: 'Salesforce Einstein review: The most powerful AI for enterprise sales and marketing?',
    featuredImage: '/images/featured/salesforce-review.jpg',
    updatedAt: 'March 8, 2025',
    label: 'Best for Enterprise',
    labelColor: 'bg-indigo-100 text-indigo-800',
  },
  {
    id: 'semrush',
    name: 'Semrush AI',
    logo: '/images/logos/semrush.png',
    rating: 4.7,
    category: 'AI for Business',
    excerpt: 'Semrush AI review: The ultimate platform for SEO and content marketing in 2025',
    featuredImage: '/images/featured/semrush-review.jpg',
    updatedAt: 'February 25, 2025',
    label: 'Best for SEO',
    labelColor: 'bg-green-100 text-green-800',
  },
];

export default function AIBusinessMarketingPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI for Business & Marketing (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI tools for marketing automation, customer analytics, sales, and business operations. 
            Independent reviews and ROI comparisons to boost your business performance.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare Business AI Tools
          </Link>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI is Transforming Business and Marketing</h2>
            <p className="text-gray-700 mb-4">
              Artificial intelligence is revolutionizing how businesses operate, market products, and engage with customers. 
              From predictive analytics and personalized customer experiences to automated marketing campaigns and sales 
              forecasting, AI tools are delivering unprecedented efficiency and ROI.
            </p>
            <p className="text-gray-700 mb-6">
              We've evaluated the leading AI solutions for business and marketing to help you find the right tools 
              for your specific needs. Our comparison includes CRM systems, marketing automation platforms, SEO tools, 
              and specialized AI solutions for various business functions.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Evaluate Business AI Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>ROI and Business Impact</strong> - Measuring tangible business outcomes and return on investment</li>
                <li><strong>Integration Capabilities</strong> - Assessing how well tools integrate with existing business systems</li>
                <li><strong>Automation Efficiency</strong> - Evaluating workflow automation and time-saving capabilities</li>
                <li><strong>Analytics Depth</strong> - Testing the quality of insights and predictive capabilities</li>
                <li><strong>Scalability</strong> - Determining suitability for businesses of different sizes and growth stages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Business & Marketing Tools Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and ROI of the leading AI business and marketing tools available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiBusinessTools}
            compareFeatures={keyBusinessFeatures}
            categoryName="AI Business Tools"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Business Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Best All-in-One */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best All-in-One
              </div>
              <h3 className="text-xl font-bold mb-2">HubSpot AI</h3>
              <p className="text-gray-700 mb-4">
                HubSpot offers the most comprehensive suite of AI-powered tools for marketing, sales, and customer service 
                with exceptional integration and analytics.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.8)}
                </div>
                <span className="text-sm text-gray-500">Starts at $20/month</span>
              </div>
              <Link href="/reviews/hubspot" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Enterprise */}
            <div className="bg-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-indigo-100 text-indigo-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Enterprise
              </div>
              <h3 className="text-xl font-bold mb-2">Salesforce Einstein</h3>
              <p className="text-gray-700 mb-4">
                Salesforce Einstein delivers powerful AI capabilities for enterprise businesses with advanced predictive 
                analytics and deep CRM integration.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.7)}
                </div>
                <span className="text-sm text-gray-500">Starts at $50/month</span>
              </div>
              <Link href="/reviews/salesforce-einstein" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best Value */}
            <div className="bg-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-emerald-100 text-emerald-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for SEO
              </div>
              <h3 className="text-xl font-bold mb-2">Semrush AI</h3>
              <p className="text-gray-700 mb-4">
                Semrush offers the most comprehensive AI-powered SEO and content marketing suite with outstanding 
                competitive analysis and optimization tools.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.7)}
                </div>
                <span className="text-sm text-gray-500">Starts at $129.95/month</span>
              </div>
              <Link href="/reviews/semrush" className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Business Tool Reviews</h2>
          
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
                    <span className="inline-flex items-center text-indigo-600 font-medium text-sm">
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
    View All AI For Business Martketing
  </Link>
</div>
</div>
</section>
              {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How can AI improve my marketing ROI?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI can significantly improve marketing ROI through multiple mechanisms: by optimizing ad spend with predictive 
                  analytics that identify the most promising channels and audiences; by personalizing customer experiences at scale 
                  to increase conversion rates; by automating routine tasks to reduce labor costs; and by providing deeper insights 
                  into customer behavior that inform more effective campaigns. Most businesses implementing AI marketing tools report 
                  ROI improvements between 20-40% within the first year.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Which AI business tools are best for small businesses?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  For small businesses, the best AI tools typically offer an accessible learning curve, reasonable pricing, and deliver 
                  quick time-to-value. Tools like Mailchimp (for email marketing), Zoho MarketingPlus (for integrated marketing), and 
                  ChatSpot (for conversational marketing) provide strong AI capabilities without enterprise-level complexity or pricing. 
                  Many small businesses also benefit from HubSpot's free CRM with basic AI features as an entry point before upgrading 
                  to paid plans as they grow.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How do AI marketing tools integrate with existing systems?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Modern AI marketing platforms offer multiple integration methods: native integrations with popular CRMs and business 
                  tools, extensive API access for custom connections, webhook support for event-based workflows, and integration platforms 
                  like Zapier or Make. Enterprise solutions like Salesforce Einstein and HubSpot offer the most comprehensive integration 
                  ecosystems, while specialized tools might have more limited but deeper integrations in their specific domains. When 
                  evaluating tools, prioritize those that integrate seamlessly with your existing tech stack to avoid creating new data silos.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Can AI tools replace my marketing team?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI tools complement rather than replace marketing teams. They excel at data analysis, automation of repetitive tasks, 
                  content generation assistance, and providing insights at scale. However, they still require human oversight for strategy, 
                  creative direction, emotional intelligence, brand voice consistency, and ethical considerations. The most successful 
                  implementations use AI to handle routine operations while freeing marketers to focus on higher-level strategy, creative 
                  work, and relationship building. This approach typically leads to more efficient teams rather than smaller ones.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How accurate are AI-generated business insights?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  The accuracy of AI-generated business insights depends significantly on data quality, model selection, and implementation. 
                  Enterprise tools like Salesforce Einstein and HubSpot AI typically achieve 80-90% accuracy in predictive analytics when 
                  properly configured and fed with sufficient quality data. Accuracy improves over time as the systems learn from more data 
                  and outcomes. For critical business decisions, it's best practice to use AI insights as decision support rather than automation, 
                  with human experts validating recommendations, especially in the early stages of implementation.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI business tools and find the perfect solution for your organization's needs.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare Business AI Tools
          </Link>
        </div>
      </section>     
      </main>

  );
}
