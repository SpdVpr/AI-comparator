// src/app/reviews/replit/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Replit Review 2025: The Best Cloud IDE for Collaborative Coding?',
  description: 'Comprehensive review of Replit. Compare features, pricing, and performance. Find out if Replit is the right cloud development environment for you in 2025.',
  openGraph: {
    title: 'Replit Review 2025: The Best Cloud IDE for Collaborative Coding?',
    description: 'Comprehensive review of Replit. Compare features, pricing, and performance. Find out if Replit is the right cloud development environment for you in 2025.',
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function ReplitReviewPage() {
  // Data for Replit review
  const product = {
    name: 'Replit',
    title: 'Replit Review 2025: The Best Cloud IDE for Collaborative Coding?',
    description: 'Comprehensive review of Replit. Compare features, pricing, and performance. Find out if Replit is the right cloud development environment for you in 2025.',
    logo: '/images/logos/replit.png',
    rating: 4.6,
    pricingStart: '$7/month (Core)',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://replit.com',
    affiliateTrackingId: 'aicompare-replit',
    pros: [
      'Instantly accessible coding environment with zero setup',
      'Generous free tier for beginners and hobbyists',
      'Support for 50+ programming languages',
      'Real-time collaboration features',
      'Integrated hosting and deployment',
      'Active community and template sharing'
    ],
    cons: [
      'Limited computing resources on free tier',
      'Occasional performance issues with larger projects',
      'Not ideal for resource-intensive applications',
      'Some advanced IDE features missing compared to desktop options',
      'Dependency on internet connection'
    ],
    bestFor: ['Beginners', 'Students', 'Teachers', 'Collaborative teams', 'Hackathons', 'Quick prototyping'],
    keyFeatures: [
      { name: 'Languages supported', value: '50+ programming languages' },
      { name: 'Collaboration', value: 'Real-time multiplayer editing' },
      { name: 'Hosting', value: 'Built-in web hosting for projects' },
      { name: 'Compute', value: 'Cloud-based VM for each project' },
      { name: 'Storage', value: '500MB-100GB (depending on plan)' },
      { name: 'Databases', value: 'Built-in Replit DB + MongoDB/PostgreSQL (on paid plans)' },
      { name: 'Version Control', value: 'Git integration + Replit history' }
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
      applicationCategory: 'DeveloperApplication',
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
                Replit is a powerful cloud-based IDE that enables you to code, build, and deploy applications directly from your browser. No setup required, just start coding in seconds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Replit" 
                  url={product.affiliateUrl} 
                  color="primary" 
                  hasFreeTrial={product.hasFreeTrial}
                  hasFreeVersion={product.hasFreeVersion}
                  trackingId={product.affiliateTrackingId}
                  size="md"
                />
                
                <div className="text-sm inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                  <span className="font-medium">Starting from:</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Replit?</h2>
            <p className="text-gray-700 mb-4">
              Replit (formerly Repl.it) is a browser-based integrated development environment (IDE) that allows users to write, run, and deploy code in 50+ programming languages without any setup. Unlike traditional IDEs that require local installation and configuration, Replit works entirely in the cloud, making it accessible from any device with an internet connection.
            </p>
            <p className="text-gray-700 mb-6">
              Founded in 2016, Replit has evolved from a simple code playground to a comprehensive development platform with features like real-time collaboration, built-in hosting, and an active community. It's particularly popular in educational settings and for quick prototyping, but also serves professional developers looking for a streamlined workflow.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Replit</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Replit</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Replit Free vs. Paid Plans: Key Differences</h3>
              <p>
                Replit offers a range of plans to accommodate different user needs, from beginners to professional developers. The main differences between the free and paid plans are:
              </p>
              
              <ul>
                <li><strong>Computing Resources:</strong> The free plan provides basic computing power sufficient for learning and small projects, while paid plans offer increasingly powerful resources for more demanding applications</li>
                <li><strong>Storage:</strong> Free users get 500MB of storage, which increases to 10-100GB on paid plans</li>
                <li><strong>Always-on Repls:</strong> Free projects sleep after inactivity, while paid plans offer "always-on" capabilities to keep applications running continuously</li>
                <li><strong>Database Options:</strong> All users get access to the basic Replit Database, but paid plans include more robust options like MongoDB and PostgreSQL integration</li>
                <li><strong>Custom Domains:</strong> Paid plans allow for custom domain mapping, while free users must use Replit's subdomain format</li>
              </ul>
              
              <h3>User Experience and Interface</h3>
              <p>
                Replit offers an intuitive and clean interface that strikes a good balance between simplicity and functionality. The platform includes:
              </p>
              
              <ul>
                <li><strong>Multi-pane Layout:</strong> File explorer, code editor, terminal/console, and preview window all accessible in a single interface</li>
                <li><strong>Syntax Highlighting:</strong> Robust support for dozens of programming languages with appropriate highlighting</li>
                <li><strong>Autocompletion:</strong> AI-powered code completion with Ghostwriter (enhanced on paid plans)</li>
                <li><strong>Theme Customization:</strong> Light and dark modes with additional custom themes</li>
                <li><strong>Responsive Design:</strong> Works across devices, though the experience is optimized for larger screens</li>
              </ul>
              
              <p>
                While the interface is generally intuitive, new users might need some time to discover all available features. The learning curve is relatively gentle compared to professional desktop IDEs, making it particularly suitable for beginners.
              </p>
              
              <h3>Performance and Reliability</h3>
              
              <p>
                Replit's performance varies significantly based on the plan:
              </p>
              
              <ul>
                <li><strong>Free Plan:</strong> Offers limited computing resources that are adequate for learning and small projects, but can feel sluggish for larger applications. Projects will "sleep" after periods of inactivity and need time to "wake up" when accessed again.</li>
                <li><strong>Paid Plans:</strong> Provide more CPU, RAM, and storage, resulting in noticeably better performance for larger projects. The "always-on" feature ensures applications remain responsive without sleep periods.</li>
              </ul>
              
              <p>
                Overall reliability is good, though occasional service disruptions can occur. The platform has matured significantly in recent years, with fewer outages and improved stability compared to its early days.
              </p>
              
              <h3>Practical Applications of Replit</h3>
              
              <h4>1. Education and Learning</h4>
              <p>
                Replit shines as an educational platform. Its zero-setup environment makes it ideal for:
              </p>
              <ul>
                <li>Classroom instruction where teachers can create assignments and provide real-time feedback</li>
                <li>Self-paced learning across multiple programming languages</li>
                <li>Coding bootcamps and workshops where consistent environments are needed</li>
              </ul>
              <p>
                The Teams for Education plan offers specialized features for educational settings, including assignment creation, automatic grading, and student progress tracking.
              </p>
              
              <h4>2. Collaborative Development</h4>
              <p>
                Replit's real-time collaboration features make it an excellent choice for team projects:
              </p>
              <ul>
                <li>Multiple developers can work simultaneously on the same codebase with live updates</li>
                <li>Built-in multiplayer coding with cursor presence and chat functionality</li>
                <li>Collaboration without requiring users to set up development environments locally</li>
              </ul>
              <p>
                This makes Replit particularly valuable for remote teams, hackathons, and pair programming sessions.
              </p>
              
              <h4>3. Web Application Development and Hosting</h4>
              <p>
                Replit provides an end-to-end solution for web development:
              </p>
              <ul>
                <li>Built-in hosting for web applications with public URLs</li>
                <li>Support for various web frameworks and libraries</li>
                <li>Simple deployment process with minimal configuration</li>
                <li>Custom domain support on paid plans</li>
              </ul>
              <p>
                While not as robust as dedicated hosting platforms for production applications, Replit offers a convenient solution for prototypes, personal projects, and smaller web applications.
              </p>
              
              <h4>4. API Development and Testing</h4>
              <p>
                The platform works well for building and testing APIs:
              </p>
              <ul>
                <li>Support for server-side languages and frameworks</li>
                <li>Immediate deployment for testing endpoints</li>
                <li>Persistent URLs for sharing and integration testing</li>
              </ul>
              <p>
                The always-on feature of paid plans makes Replit suitable for developing APIs that require consistent availability.
              </p>
              
              <h3>Replit Pricing and Value</h3>
              <p>
                Replit offers several pricing tiers to accommodate different needs:
              </p>
              
              <ul>
                <li><strong>Free:</strong> $0/month - Basic resources, 500MB storage, community features</li>
                <li><strong>Core:</strong> $7/month - 4x resources, 10GB storage, always-on capability</li>
                <li><strong>Pro:</strong> $12/month - 8x resources, 25GB storage, private repls, additional developer features</li>
                <li><strong>Teams Pro:</strong> $20/user/month - 16x resources, 50GB storage, team collaboration features</li>
                <li><strong>Enterprise:</strong> Custom pricing - Maximum resources, dedicated support, advanced security</li>
              </ul>
              
              <p>
                In terms of value, the free tier is exceptionally generous for beginners and hobbyists. The Core plan at $7/month represents a good entry point for those who need slightly more resources and always-on functionality. The Pro plan at $12/month is well-suited for independent developers working on more substantial projects.
              </p>
              
              <p>
                When compared to the cost of setting up and maintaining development environments and hosting services separately, Replit's all-in-one approach offers considerable value, especially for individuals and small teams.
              </p>
              
              <h3>Replit vs. Competitors in 2025</h3>
              <p>
                Replit faces competition from several alternatives in the cloud IDE and development platform space:
              </p>
              
              <ul>
                <li><strong>GitHub Codespaces:</strong> Offers tighter integration with GitHub repositories but at a higher price point</li>
                <li><strong>GitPod:</strong> More focused on professional development workflows with stronger Git integration</li>
                <li><strong>CodeSandbox:</strong> Specializes in front-end web development with excellent framework support</li>
                <li><strong>Glitch:</strong> Similar easy-to-use approach but with more focus on web projects and a slightly different community</li>
                <li><strong>AWS Cloud9:</strong> More powerful but requires significantly more configuration and AWS knowledge</li>
              </ul>
              
              <p>
                Compared to these competitors, Replit offers these advantages:
              </p>
              
              <ul>
                <li>Broader language support than most alternatives</li>
                <li>Better balance of simplicity and capability</li>
                <li>More vibrant community and template sharing</li>
                <li>Superior educational features</li>
                <li>More affordable pricing structure for individuals</li>
              </ul>
              
              <p>
                However, for specific use cases, competitors may have advantages. GitHub Codespaces is better for large-scale professional development deeply integrated with GitHub. CodeSandbox offers a more specialized front-end development experience. AWS Cloud9 provides more raw computing power for resource-intensive tasks.
              </p>
            </div>
            
            {/* Comparison table of versions */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Replit Free vs. Paid Plans: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Free</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Core ($7/mo)</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Pro ($12/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Computing Power</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic (0.5 vCPU)</td>
                    <td className="px-4 py-3 text-center text-gray-700">4x (2 vCPU)</td>
                    <td className="px-4 py-3 text-center text-gray-700">8x (4 vCPU)</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Storage</td>
                    <td className="px-4 py-3 text-center text-gray-700">500MB</td>
                    <td className="px-4 py-3 text-center text-gray-700">10GB</td>
                    <td className="px-4 py-3 text-center text-gray-700">25GB</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Always On</td>
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
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Private Repls</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">5 repls</td>
                    <td className="px-4 py-3 text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Custom Domains</td>
                    <td className="px-4 py-3 text-center text-gray-700">
                      <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">1 domain</td>
                    <td className="px-4 py-3 text-center text-gray-700">5 domains</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Ghostwriter AI</td>
                    <td className="px-4 py-3 text-center text-gray-700">Basic</td>
                    <td className="px-4 py-3 text-center text-gray-700">Enhanced</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Database Options</td>
                    <td className="px-4 py-3 text-center text-gray-700">Replit DB</td>
                    <td className="px-4 py-3 text-center text-gray-700">+ MongoDB</td>
                    <td className="px-4 py-3 text-center text-gray-700">+ MongoDB, PostgreSQL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Replit has established itself as a standout solution in the cloud IDE market, offering an impressive balance of accessibility, power, and collaboration features. Its browser-based approach removes the traditional friction of setting up development environments, making coding more accessible to everyone from beginners to professionals.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Replit Free:</strong> Students, coding beginners, hobbyists, and anyone learning to code who doesn't need powerful compute resources or persistent applications.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should get Replit Core or Pro:</strong> Developers working on web applications that need to stay online, educators creating classroom environments, and teams collaborating on projects that require more resources and privacy.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Replit Free" 
                  url={product.affiliateUrl} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Get Replit Pro" 
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
                Do you have a question about Replit? Ask in the comments below and we'll answer.
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
                  <span className="text-sm text-gray-500">Starting Price:</span>
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
              </div>
              
              <ButtonAffiliate 
                text="Try Replit Free" 
                url={product.affiliateUrl} 
                color="success" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-2"
              />
              
              <ButtonAffiliate 
                text="Get Replit Pro" 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar Development Tools</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/github-codespaces" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">GH</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">GitHub Codespaces</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.5/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/codesandbox" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">CS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">CodeSandbox</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.4/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/gitpod" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-teal-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-teal-600 font-medium">GP</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Gitpod</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.3/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/cloud-ides" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all cloud IDEs
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
                    <span>Is Replit suitable for professional development?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, Replit can be used for professional development, especially with the Pro or Teams plans. It's ideal for certain use cases like rapid prototyping, educational projects, and lightweight web applications. However, for large-scale enterprise applications with specific requirements, traditional development environments might still offer more customization and control.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Replit compare to GitHub Codespaces?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Replit is more accessible and easier to get started with compared to GitHub Codespaces. It offers a more community-oriented approach with template sharing and discovery. GitHub Codespaces is more tightly integrated with Git workflows and provides more customization through devcontainers. Replit is generally more affordable for individual developers, while Codespaces targets professional teams already invested in the GitHub ecosystem.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Can I use Replit offline?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    No, Replit is a cloud-based development environment that requires an internet connection to function. All code execution happens on Replit's servers. If you need offline development capabilities, a traditional local IDE like VS Code, IntelliJ, or Sublime Text would be more appropriate.
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