import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComparisonTable from '@/components/ComparisonTable';
import { aiEducationTools, keyEducationFeatures } from '@/data/aiEducationTools';

export const metadata: Metadata = {
  title: 'Best AI for Education & Learning Tools 2025',
  description: 'Discover the best AI education tools and learning assistants in 2025. Independent reviews, pricing, effectiveness, personalization features, and exclusive trials.',
};

// Mock data for related reviews - in a real app, you would fetch this from a database or API
const relatedReviews = [
  {
    id: 'khan-academy-khanmigo',
    name: 'Khanmigo',
    logo: '/images/logos/khanmigo.png',
    rating: 4.8,
    category: 'AI Education',
    excerpt: 'Is Khan Academy\'s Khanmigo the best AI tutor for K-12 students?',
    featuredImage: '/images/featured/khanmigo-review.jpg',
    updatedAt: 'March 10, 2025',
    label: 'Best for K-12',
    labelColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'duolingo-max',
    name: 'Duolingo Max',
    logo: '/images/logos/duolingo.png',
    rating: 4.7,
    category: 'AI Education',
    excerpt: 'Duolingo Max review: Is AI-powered language learning worth the premium?',
    featuredImage: '/images/featured/duolingo-review.jpg',
    updatedAt: 'February 25, 2025',
    label: 'Best for Languages',
    labelColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'quizlet-ai',
    name: 'Quizlet AI',
    logo: '/images/logos/quizlet.png',
    rating: 4.5,
    category: 'AI Education',
    excerpt: 'Quizlet AI review: How effective is this AI-powered study assistant?',
    featuredImage: '/images/featured/quizlet-review.jpg',
    updatedAt: 'February 12, 2025',
  },
];

export default function AIEducationToolsPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">Best AI for Education (2025)</h1>
          <p className="text-xl max-w-3xl mb-6">
            Compare the top AI education tools and learning assistants for students, teachers, and lifelong learners. 
            Independent reviews and effectiveness tests.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Education Tools
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How AI Is Revolutionizing Education</h2>
            <p className="text-gray-700 mb-4">
              AI education tools are transforming how we learn by providing personalized instruction, 
              immediate feedback, and adaptive content. These tools can help students master difficult concepts, 
              assist teachers with administrative tasks, and make quality education more accessible to everyone.
            </p>
            <p className="text-gray-700 mb-6">
              We've tested the leading AI education platforms to help you find the perfect solution for your 
              learning goals or teaching needs. Our comparison includes specialized tutoring systems, language 
              learning tools, study assistants, and classroom management platforms.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3">How We Test AI Education Tools</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Learning Effectiveness</strong> - Measuring knowledge retention and skill development</li>
                <li><strong>Personalization</strong> - Evaluating how well the AI adapts to individual learning styles and paces</li>
                <li><strong>User Experience</strong> - Testing interface design, engagement features, and ease of use</li>
                <li><strong>Subject Coverage</strong> - Examining breadth and depth of educational content</li>
                <li><strong>Educator Features</strong> - Assessing tools for teachers, including grading and progress tracking</li>
                <li><strong>Real-World Tests</strong> - Having students and educators use each tool in actual learning environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">AI Education Tools Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare features, pricing, and effectiveness of the leading AI education platforms available in 2025.
            </p>
          </div>
          
          <ComparisonTable
            tools={aiEducationTools}
            compareFeatures={keyEducationFeatures}
            categoryName="AI Education Tools"
          />
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Top AI Education Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Best Overall */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 text-blue-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best Overall
              </div>
              <h3 className="text-xl font-bold mb-2">Khanmigo</h3>
              <p className="text-gray-700 mb-4">
                Khan Academy's Khanmigo offers exceptional AI tutoring across K-12 subjects with personalized 
                guidance, step-by-step explanations, and strong educational foundations.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.8)}
                </div>
                <span className="text-sm text-gray-500">$9/month for students</span>
              </div>
              <Link href="/reviews/khan-academy-khanmigo" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Languages */}
            <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 text-green-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Languages
              </div>
              <h3 className="text-xl font-bold mb-2">Duolingo Max</h3>
              <p className="text-gray-700 mb-4">
                Duolingo Max transforms language learning with AI-powered conversations, personalized explanations, 
                and advanced grammar feedback in an engaging, gamified format.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.7)}
                </div>
                <span className="text-sm text-gray-500">$12.99/month</span>
              </div>
              <Link href="/reviews/duolingo-max" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Best for Higher Ed */}
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="bg-purple-100 text-purple-700 text-sm font-medium inline-block px-3 py-1 rounded-full mb-4">
                Best for Higher Ed
              </div>
              <h3 className="text-xl font-bold mb-2">Coursera AI Companion</h3>
              <p className="text-gray-700 mb-4">
                Coursera's AI Companion enhances higher education with specialized support for complex subjects, 
                career guidance, and deep integration with university-level courses.
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex">
                  {renderStars(4.6)}
                </div>
                <span className="text-sm text-gray-500">Included with Coursera Plus</span>
              </div>
              <Link href="/reviews/coursera-ai-companion" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                Read Full Review <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">AI Education Tool Reviews</h2>
          
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
              View All AI Education Reviews
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
                What are AI education tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI education tools are software applications that use artificial intelligence to enhance teaching 
                  and learning. They can provide personalized tutoring, adapt content to individual learning styles, 
                  automate administrative tasks for teachers, and create interactive learning experiences. These tools
                  range from specialized AI tutors for specific subjects to comprehensive platforms for classroom 
                  management and educational content creation.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How effective are AI tutors compared to human tutors?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI tutors have shown promising results in many studies, particularly for subjects with clear right 
                  and wrong answers like mathematics and science. They excel at providing immediate feedback, unlimited 
                  patience, and 24/7 availability. However, human tutors still have advantages in understanding nuanced 
                  emotional cues, providing motivation, and adapting teaching strategies based on subtle learning barriers. 
                  The most effective approach is often a combination of AI and human instruction, where AI handles routine 
                  practice and explanation while human teachers provide guidance, motivation, and help with complex 
                  conceptual understanding.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                Are AI education tools suitable for all age groups?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  AI education tools are available for all age groups, from preschool to adult learners, but their 
                  effectiveness and appropriateness vary. For younger children, tools with strong parental controls, 
                  age-appropriate content, and engaging interfaces work best. For K-12 students, platforms that align 
                  with curriculum standards and provide comprehensive progress tracking are important. For higher 
                  education and adult learners, AI tools that offer deep subject expertise and flexibility for 
                  self-directed learning tend to be most valuable. When choosing an AI education tool, consider not 
                  just the age group but also learning objectives, digital literacy levels, and subject areas.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                How can teachers incorporate AI education tools in the classroom?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Teachers can integrate AI education tools in several effective ways:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Use AI tutors for personalized practice while working directly with students who need extra help</li>
                  <li>Implement AI grading assistants to provide faster feedback and reduce administrative workload</li>
                  <li>Use AI content generation to create customized learning materials and assessments</li>
                  <li>Employ AI analytics to identify learning gaps and track student progress</li>
                  <li>Create a station rotation model where some students work with AI tutors while others engage in collaborative or teacher-led activities</li>
                </ul>
                <p className="mt-2">
                  The most successful implementations use AI tools to complement rather than replace teacher expertise,
                  focusing on areas where AI excels while preserving the human connection essential to education.
                </p>
              </div>
            </details>
            
            <details className="bg-gray-50 rounded-xl p-6 open:shadow-sm transition-all duration-300">
              <summary className="font-bold text-xl cursor-pointer">
                What about privacy and data security with AI education tools?
              </summary>
              <div className="mt-4 text-gray-700">
                <p>
                  Privacy and data security are critical concerns with AI education tools, especially those used by 
                  children and in schools. When evaluating these tools, look for:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Compliance with educational privacy laws like FERPA (US), GDPR (EU), or regional equivalents</li>
                  <li>Clear, transparent privacy policies that specify what data is collected and how it's used</li>
                  <li>Strong data encryption and security measures</li>
                  <li>Options for parental consent and oversight</li>
                  <li>Minimal data collection practices, especially for younger users</li>
                  <li>Institutional controls for schools to manage student data access</li>
                </ul>
                <p className="mt-2">
                  Many reputable AI education platforms now offer specific educational versions with enhanced privacy 
                  protections compared to their consumer counterparts. Always review privacy policies before implementing 
                  any AI tool in educational settings.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare the top AI education tools and find the perfect solution for your learning journey.
          </p>
          <Link 
            href="#comparison-table" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Compare AI Education Tools
          </Link>
        </div>
      </section>
    </main>
  );
}