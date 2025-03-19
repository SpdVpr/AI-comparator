// src/app/reviews/khanmigo/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Khanmigo Review 2025: Is Khan Academys AI Tutor Worth It?',
  description: 'Comprehensive review of Khanmigo by Khan Academy. Explore features, pricing, educational approaches, and find out if this AI tutor is worth it for students and teachers in 2025.',
  openGraph: {
    title: 'Khanmigo Review 2025: Is Khan Academys AI Tutor Worth It?',
    description: 'Comprehensive review of Khanmigo by Khan Academy. Explore features, pricing, educational approaches, and find out if this AI tutor is worth it for students and teachers in 2025.',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function KhanmigoReviewPage() {
  // Data for Khanmigo review
  const product = {
    name: 'Khanmigo',
    title: 'Khanmigo Review 2025: Is Khan Academys AI Tutor Worth It?',
    description: 'Comprehensive review of Khanmigo by Khan Academy. Explore features, pricing, educational approaches, and find out if this AI tutor is worth it for students and teachers in 2025.',
    logo: '/images/logos/khanmigo.png',
    rating: 4.7,
    pricingStart: '$9/month for students, $25/month for educators',
    hasFreeVersion: false,
    hasFreeTrial: true,
    affiliateUrl: 'https://www.khanacademy.org/khanmigo',
    affiliateTrackingId: 'aicompare-khanmigo',
    pros: [
      'Exceptional educational approach with Socratic teaching methods',
      'Specialized for K-12 curriculum with strong math and science focus',
      'Safe and ethical AI design for educational contexts',
      'Integrated with Khan Academys trusted learning platform',
      'Excellent teacher tools for classroom support',
      'Reduces student anxiety with personalized guidance'
    ],
    cons: [
      'Limited subject coverage compared to general AI assistants',
      'Requires Khan Academy account for integration',
      'Not designed for general-purpose AI tasks',
      'No mobile app yet for Khanmigo specifically',
      'Occasionally simplifies complex topics too much'
    ],
    bestFor: ['K-12 students', 'Math learning', 'Science education', 'Teachers', 'Homeschooling families'],
    keyFeatures: [
      { name: 'AI Model', value: 'Custom-trained education-specific model' },
      { name: 'Subject focus', value: 'Math, Science, History, Economics, Computing' },
      { name: 'Teaching approach', value: 'Socratic method with guided discovery' },
      { name: 'Student features', value: 'Step-by-step guidance, concept explanations, homework help' },
      { name: 'Teacher features', value: 'Lesson planning, differentiated instruction, content creation' },
      { name: 'Safety design', value: 'Education-specific guardrails and monitoring' },
      { name: 'Platform integration', value: 'Fully integrated with Khan Academy curriculum' }
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
      applicationCategory: 'EducationalApplication',
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
        <Breadcrumbs 
          containerClasses="flex py-2 text-sm text-gray-500 mb-6"
          listItemClasses="hover:text-indigo-600 flex items-center"
          activeItemClasses="text-indigo-600 font-medium"
        />
        {/* Review header */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 shadow-sm mb-10">
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
                Khanmigo is an AI-powered tutor from Khan Academy that provides personalized educational support using Socratic teaching methods, specialized for K-12 students and teachers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Khanmigo" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">Price:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Khanmigo?</h2>
            <p className="text-gray-700 mb-4">
              Khanmigo is an AI-powered tutoring system developed by Khan Academy, the renowned non-profit educational organization. Launched in 2023, it represents Khan Academy's vision for how AI can enhance education by providing personalized, interactive learning experiences for students and powerful teaching assistance for educators.
            </p>
            <p className="text-gray-700 mb-6">
              Unlike general-purpose AI chatbots, Khanmigo is specifically designed for educational contexts, with specialized training on K-12 curriculum content and pedagogical approaches. It employs the Socratic method, guiding students through problems rather than simply providing answers, and offers teachers tools for lesson planning, differentiated instruction, and classroom management.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Khanmigo</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Khanmigo</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Khanmigo for Students vs. Khanmigo for Teachers</h3>
              <p>
                Khanmigo offers two specialized versions – one for students and one for teachers. Each is designed with distinct capabilities:
              </p>
              
              <ul>
                <li><strong>Khanmigo for Students ($9/month):</strong> Focuses on providing personalized tutoring, step-by-step guidance on problems, concept explanations, and homework help</li>
                <li><strong>Khanmigo for Teachers ($25/month):</strong> Provides tools for lesson planning, creating assessments, generating differentiated learning materials, and classroom activity ideas</li>
              </ul>
              
              <p>
                Both versions seamlessly integrate with Khan Academy's existing platform, enhancing the learning experience rather than replacing it.
              </p>
              
              <h3>Educational Approach and Quality</h3>
              <p>
                What truly sets Khanmigo apart from general-purpose AI assistants is its specialized educational approach:
              </p>
              
              <ul>
                <li><strong>Socratic Method:</strong> Rather than simply providing answers, Khanmigo guides students through problems with thoughtful questions, helping them discover solutions themselves</li>
                <li><strong>Educational Scaffolding:</strong> Provides appropriate levels of support based on a student's needs, gradually removing assistance as understanding improves</li>
                <li><strong>Misconception Identification:</strong> Recognizes common misunderstandings and addresses them with targeted explanations</li>
                <li><strong>Curriculum Alignment:</strong> Content is aligned with standard K-12 curriculum, ensuring relevance to classroom learning</li>
              </ul>
              
              <p>
                The educational quality is outstanding, with expert educators involved in the development and training of the AI. This results in explanations that aren't just factually accurate but pedagogically sound – a crucial difference from general AI tools.
              </p>
              
              <h3>Subject Coverage and Content Depth</h3>
              <p>
                Khanmigo's subject coverage reflects Khan Academy's strengths but also has some limitations:
              </p>
              
              <h4>Strongest Subjects</h4>
              <ul>
                <li><strong>Mathematics:</strong> Exceptional coverage from basic arithmetic through calculus with step-by-step problem solving</li>
                <li><strong>Science:</strong> Strong in physics, chemistry, biology, and earth science with conceptual explanations and problem guidance</li>
                <li><strong>Economics:</strong> Well-developed content for micro and macroeconomics</li>
              </ul>
              
              <h4>Developing Areas</h4>
              <ul>
                <li><strong>Computer Science:</strong> Good programming guidance, particularly in Python and JavaScript</li>
                <li><strong>History:</strong> Covers major historical topics with contextual explanations</li>
                <li><strong>English/Language Arts:</strong> More limited but improving, with reading comprehension and writing support</li>
              </ul>
              
              <p>
                The depth of content varies by subject, with mathematics and science offering the most comprehensive coverage. This reflects Khan Academy's traditional strengths and suggests where students will find the most value.
              </p>
              
              <h3>Teacher Tools and Classroom Applications</h3>
              <p>
                For educators, Khanmigo offers powerful tools that significantly reduce preparation time and enhance teaching effectiveness:
              </p>
              
              <ul>
                <li><strong>Lesson Planning:</strong> Generates customizable lesson plans, complete with objectives, activities, and assessments</li>
                <li><strong>Differentiated Instruction:</strong> Creates alternative explanations and problems at varying difficulty levels for diverse learners</li>
                <li><strong>Assessment Generation:</strong> Develops quizzes, tests, and practice problems with answer keys</li>
                <li><strong>Classroom Activities:</strong> Suggests engaging, curriculum-aligned activities that encourage active learning</li>
                <li><strong>Student Support:</strong> Helps identify common misconceptions and provides strategies to address them</li>
              </ul>
              
              <p>
                Teachers report significant time savings, particularly in creating differentiated materials and assessments, allowing them to focus more on direct student interaction and teaching.
              </p>
              
              <h3>Safety, Ethics, and Educational Design</h3>
              <p>
                Khan Academy has prioritized creating a safe, ethical AI tutor that aligns with educational best practices:
              </p>
              
              <ul>
                <li><strong>Educational Guardrails:</strong> Prevents inappropriate content and ensures age-appropriate responses</li>
                <li><strong>Anti-Cheating Measures:</strong> Designed to guide learning rather than complete assignments; recognizes potential plagiarism scenarios</li>
                <li><strong>Privacy Protection:</strong> Strong student data protection with parental controls for younger users</li>
                <li><strong>Educational Research Foundation:</strong> Built on evidence-based teaching practices with ongoing educational research informing development</li>
              </ul>
              
              <p>
                These safety measures make Khanmigo particularly suitable for K-12 education, where protection of student data and ethical considerations are paramount. The design prioritizes long-term learning over short-term answers, aligning with Khan Academy's educational mission.
              </p>
              
              <h3>Pricing and Value</h3>
              <p>
                Khanmigo offers two main pricing tiers:
              </p>
              
              <ul>
                <li><strong>Khanmigo for Students:</strong> $9/month or $75/year (about 30% savings with annual plan)</li>
                <li><strong>Khanmigo for Teachers:</strong> $25/month or $200/year (about 33% savings with annual plan)</li>
                <li><strong>School and District Licenses:</strong> Custom pricing for institutional adoption</li>
                <li><strong>Scholarships:</strong> Available for students with financial need through application</li>
              </ul>
              
              <p>
                Compared to private tutoring (typically $40-100/hour) or educational software ($10-30/month), Khanmigo offers exceptional value, particularly for students who regularly need homework help or concept explanations. For teachers, the time saved in lesson planning and materials creation easily justifies the cost for many educators.
              </p>
              
              <h3>Khanmigo vs. Other AI Educational Tools</h3>
              <p>
                When compared to other AI tools in the educational space, Khanmigo stands out in several ways:
              </p>
              
              <ul>
                <li><strong>Vs. General AI Assistants (ChatGPT, Claude):</strong> Much more focused on educational pedagogy and K-12 curriculum; safer for student use; won't simply provide answers</li>
                <li><strong>Vs. Duolingo Max:</strong> Different focus (general education vs. language learning); similar educational methodology but applied to broader subject matter</li>
                <li><strong>Vs. Quizlet AI Tutor:</strong> Deeper educational approach with stronger explanation capabilities; better integration with comprehensive curriculum</li>
                <li><strong>Vs. Coursera AI Companion:</strong> Targeted at K-12 education rather than higher education; stronger focus on guided discovery</li>
              </ul>
              
              <p>
                Khanmigo's key advantage is its integration with Khan Academy's trusted educational platform and its specific design for K-12 learning contexts. While general AI tools may have broader capabilities, they lack the specialized educational design and curriculum integration that makes Khanmigo particularly effective for students.
              </p>
            </div>
            
            {/* Comparison table */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Khanmigo for Students vs. Teachers: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Khanmigo for Students</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Khanmigo for Teachers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Price</td>
                    <td className="px-4 py-3 text-center text-gray-700">$9/month or $75/year</td>
                    <td className="px-4 py-3 text-center text-gray-700">$25/month or $200/year</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Primary Focus</td>
                    <td className="px-4 py-3 text-center text-gray-700">Learning support and tutoring</td>
                    <td className="px-4 py-3 text-center text-gray-700">Teaching assistance and content creation</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Problem Guidance</td>
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
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Lesson Planning</td>
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
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Content Creation</td>
                    <td className="px-4 py-3 text-center text-gray-700">Limited</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Assessment Tools</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Comprehensive</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Curriculum Integration</td>
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
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Available Subjects</td>
                    <td className="px-4 py-3 text-center text-gray-700">All Khan Academy subjects</td>
                    <td className="px-4 py-3 text-center text-gray-700">All Khan Academy subjects</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Khanmigo represents one of the most promising applications of AI in education today. By focusing specifically on educational contexts and integrating with Khan Academy's established platform, it offers a unique value proposition that general AI tools can't match. Its emphasis on guided discovery rather than providing answers demonstrates a commitment to real learning outcomes.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Khanmigo for Students:</strong> K-12 students who need regular homework help, struggle with specific subjects (especially math and science), prefer interactive learning, or want a safe AI tutor designed specifically for education.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Khanmigo for Teachers:</strong> Educators looking to save time on lesson planning and materials creation, those working with diverse classrooms requiring differentiated instruction, and teachers seeking to integrate AI into their educational approach responsibly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Khanmigo for Students" 
                  url={`${product.affiliateUrl}/students`} 
                  color="primary" 
                  size="lg"
                  hasFreeTrial={true}
                  hasFreeVersion={false}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Try Khanmigo for Teachers" 
                  url={`${product.affiliateUrl}/teachers`} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={true}
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
                Do you have a question about Khanmigo? Ask in the comments below and we'll answer.
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
                text="Try Khanmigo for Students" 
                url={`${product.affiliateUrl}/students`} 
                color="primary" 
                hasFreeTrial={true}
                hasFreeVersion={false}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-2"
              />
              
              <ButtonAffiliate 
                text="Try Khanmigo for Teachers" 
                url={`${product.affiliateUrl}/teachers`} 
                color="success" 
                hasFreeTrial={true}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Education Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/duolingo-max" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">D</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Duolingo Max</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.7/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/quizlet-ai" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">Q</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Quizlet AI Tutor</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/coursera-ai-companion" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">C</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Coursera AI Companion</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.4/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/ai-for-education" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI education tools
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
                    <span>How is Khanmigo different from ChatGPT?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Unlike general-purpose AI like ChatGPT, Khanmigo is specifically designed for education with specialized training on K-12 curriculum. It uses Socratic teaching methods to guide students through problem-solving rather than just providing answers. Khanmigo also integrates directly with Khan Academy's educational platform and includes safety features designed specifically for educational contexts.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Is Khanmigo worth it for students?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    At $9/month, Khanmigo offers excellent value for students who regularly need help with homework or understanding concepts, especially in math and science. Compared to private tutoring ($40-100/hour), it's significantly more affordable while still providing personalized, high-quality educational support. The guided approach helps develop critical thinking skills rather than dependency, making it a worthwhile investment for long-term learning outcomes.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What subjects does Khanmigo cover best?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Khanmigo excels in mathematics (from elementary to advanced) and science subjects (physics, chemistry, biology). It also provides strong support for economics and computer science. While it covers history and is developing content for language arts, these areas aren't currently as comprehensive as its STEM offerings. This reflects Khan Academy's historical strengths and curriculum development priorities.
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