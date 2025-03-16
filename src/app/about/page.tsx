import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Bot, Users, Award, TrendingUp, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Independent AI Tool Reviews & Comparisons',
  description: 'Learn about AI Comparator, our mission, values, and the expert team behind our independent AI tool reviews and comparisons.',
};

export default function AboutPage() {
  // Team member data
  const teamMembers = [
    {
      name: 'David Anderson',
      role: 'Founder & Lead AI Analyst',
      bio: 'Former AI product manager with expertise in LLMs and computer vision. David founded AI Comparator to help users navigate the complex landscape of AI tools.',
      image: '/images/team/david.jpg',
    },
    {
      name: 'Sarah Chen',
      role: 'AI Research Specialist',
      bio: 'AI researcher with a PhD in computer science. Sarah conducts in-depth testing of AI tools and ensures our reviews maintain technical accuracy.',
      image: '/images/team/sarah.jpg',
    },
    {
      name: 'Michael Novák',
      role: 'Technical Director',
      bio: 'Software developer with expertise in AI integration and implementation. Michael leads our technical testing team and evaluates AI APIs and developer tools.',
      image: '/images/team/michael.jpg',
    },
    {
      name: 'Emma Roberts',
      role: 'Content Director',
      bio: 'Content strategist with experience in technology journalism. Emma ensures our reviews are comprehensive, accessible, and useful for all skill levels.',
      image: '/images/team/emma.jpg',
    },
  ];

  // Company values
  const values = [
    {
      icon: Shield,
      title: 'Independence',
      description: 'We maintain strict editorial independence. Our reviews are never influenced by partnerships or financial incentives.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Our team includes AI specialists, developers, and industry experts who thoroughly test each tool we review.',
    },
    {
      icon: TrendingUp,
      title: 'Thoroughness',
      description: 'We conduct extensive testing across multiple use cases to provide comprehensive, data-backed evaluations.',
    },
    {
      icon: Zap,
      title: 'Practicality',
      description: 'Our focus is on the practical value and real-world applications of AI tools for different types of users.',
    },
  ];

  return (
    <main>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About AI Comparator</h1>
          <p className="text-xl max-w-3xl mb-6">
            Your trusted guide for independent AI tool reviews and comparisons. 
            We help you navigate the rapidly evolving AI landscape with expert insights and objective analysis.
          </p>
        </div>
      </section>

      {/* Our mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2023, AI Comparator was created to address a growing challenge: helping people find the right AI tools in an increasingly crowded and complex landscape.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to provide thorough, unbiased reviews and comparisons of AI tools across different categories. We aim to cut through marketing hype and technical jargon to offer practical insights that help our readers make informed decisions.
              </p>
              <p className="text-gray-700">
                Whether you're a developer, creative professional, business user, or just curious about AI, we're here to guide you toward the tools that best fit your specific needs and use cases.
              </p>
            </div>
            <div className="md:w-1/2 bg-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Bot className="text-indigo-600 mr-3" size={32} />
                <h3 className="text-2xl font-semibold text-gray-800">Why We Exist</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                  <span className="text-gray-700">To help you navigate the overwhelming number of AI tools available</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                  <span className="text-gray-700">To provide objective comparisons not influenced by vendor partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                  <span className="text-gray-700">To save you time and money by identifying the best tools for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                  <span className="text-gray-700">To share knowledge about effective AI tool implementation and best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How We Test AI Tools</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-indigo-600">1</span>
                  </div>
                  <span className="text-gray-800 font-medium text-center">Initial Research</span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700">
                    We start by gathering comprehensive information about the AI tool's features, capabilities, and limitations. This includes studying documentation, pricing structures, and user feedback from multiple sources.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-indigo-600">2</span>
                  </div>
                  <span className="text-gray-800 font-medium text-center">Hands-on Testing</span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700">
                    Our team conducts extensive hands-on testing, using the tool across various realistic scenarios and use cases. We evaluate performance, accuracy, ease of use, and how well the tool fulfills its promised capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-indigo-600">3</span>
                  </div>
                  <span className="text-gray-800 font-medium text-center">Comparative Analysis</span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700">
                    We compare each tool against similar alternatives, identifying strengths, weaknesses, and unique features. This provides context for our recommendations and helps readers understand each tool's place in the market.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-indigo-600">4</span>
                  </div>
                  <span className="text-gray-800 font-medium text-center">Expert Review</span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700">
                    Our domain experts analyze the test results and provide insights on the tool's practical applications, ideal use cases, and limitations. This includes evaluating value for money and identifying which types of users would benefit most.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-indigo-600">5</span>
                  </div>
                  <span className="text-gray-800 font-medium text-center">Final Rating</span>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700">
                    We compile all data points into a comprehensive review with a transparent rating that considers performance, usability, features, and value. Reviews are regularly updated as tools evolve and new features are released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Users className="text-indigo-600 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-56 bg-gray-200 relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-indigo-100">
                      <span className="text-5xl font-bold text-indigo-300">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Work With Us</h2>
          <p className="text-gray-700 mb-8">
            We're always looking for AI experts, tech enthusiasts, and content creators to join our team.
            If you're passionate about AI technology and helping others find the right tools, we'd love to hear from you.
          </p>
          <div className="space-y-6">
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Reviewers & Testers</h3>
              <p className="text-gray-700 mb-4">
                Help us evaluate and test the latest AI tools across various categories.
                Ideal for those with technical experience in AI applications.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
              >
                Apply now
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Writers</h3>
              <p className="text-gray-700 mb-4">
                Create insightful, clear, and helpful content about AI tools and technologies.
                Experience in technical writing and AI understanding required.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
              >
                Apply now
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach out to our team for questions, partnership inquiries, or feedback about our reviews.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}