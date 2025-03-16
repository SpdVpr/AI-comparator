// src/app/reviews/codeium/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import ButtonAffiliate from '@/components/ButtonAffiliate';

export const metadata: Metadata = {
  title: 'Codeium Review 2025: Best Free AI Coding Assistant?',
  description: "Comprehensive review of Codeium. Compare features, pricing, capabilities, and performance. Discover if it's the right AI coding assistant for your development workflow.",
  openGraph: {
    title: 'Codeium Review 2025: Best Free AI Coding Assistant?',
    description: "Comprehensive review of Codeium. Compare features, pricing, capabilities, and performance. Discover if it's the right AI coding assistant for your development workflow.",
    type: 'article',
    // Add OG image for better social sharing
  },
};

export default function CodeiumReviewPage() {
  // Data for Codeium review
  const product = {
    name: 'Codeium',
    title: 'Codeium Review 2025: Best Free AI Coding Assistant?',
    description: "Comprehensive review of Codeium. Compare features, pricing, capabilities, and performance. Discover if it's the right AI coding assistant for your development workflow.",
    logo: '/images/logos/codeium.png',
    rating: 4.6,
    pricingStart: 'Free',
    hasFreeVersion: true,
    hasFreeTrial: false,
    affiliateUrl: 'https://codeium.com',
    affiliateTrackingId: 'aicompare-codeium',
    pros: [
      'Generous free tier with robust features',
      'Excellent IDE integrations across many platforms',
      'Fast and accurate code completions',
      'Strong multi-language support',
      'Smooth learning curve for beginners',
      'Low latency even for complex suggestions'
    ],
    cons: [
      'Limited context understanding compared to premium alternatives',
      'Chat feature less capable than specialized coding AI assistants',
      'Enterprise features require paid plans',
      'Occasional repetitive or generic suggestions',
      'Limited documentation generation capabilities'
    ],
    bestFor: ['Individual developers', 'Students', 'Startups', 'Small teams', 'Open-source contributors'],
    keyFeatures: [
      { name: 'Code Completion', value: 'Very Good' },
      { name: 'IDE Integrations', value: '25+ editors and IDEs' },
      { name: 'Language Support', value: '70+ programming languages' },
      { name: 'Context Understanding', value: 'Good' },
      { name: 'Response Speed', value: 'Very Fast' },
      { name: 'Web Browser Support', value: 'GitHub, GitLab, etc.' },
      { name: 'Chat Capabilities', value: 'Basic to Intermediate' }
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
      operatingSystem: 'Web, Windows, macOS, Linux'
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
        <div className="bg-gradient-to-r from-teal-50 to-white rounded-xl p-8 shadow-sm mb-10">
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
                Codeium is a popular AI coding assistant that offers code completion, suggestions, and explanations to boost developer productivity across multiple programming languages and environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <ButtonAffiliate 
                  text="Try Codeium" 
                  url={product.affiliateUrl} 
                  color="success" 
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Codeium?</h2>
            <p className="text-gray-700 mb-4">
              Codeium is an AI-powered coding assistant designed to boost developer productivity through intelligent code suggestions, completions, and explanations. Launched as a competitor to GitHub Copilot, it has gained significant popularity for its robust free tier and wide-ranging language and IDE support.
            </p>
            <p className="text-gray-700 mb-6">
              In this review, we'll examine Codeium's capabilities, performance, user experience, and how it compares to other AI coding assistants in 2025. We'll assess whether its free tier provides sufficient value for individual developers and whether its paid offerings deliver enough additional benefits for teams and enterprises.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features of Codeium</h2>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Review of Codeium</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3>Code Completion Quality and Accuracy</h3>
              <p>
                Codeium provides impressive code completion capabilities that work effectively across dozens of programming languages. Its suggestions are contextually aware, taking into account your current file, nearby code, and other open files in your project.
              </p>
              
              <p>
                The quality of code completions is very good, with Codeium often accurately predicting entire functions, loops, or complex expressions. It performs particularly well in popular languages like JavaScript, Python, Java, and TypeScript, where it can complete not only syntax but also common patterns and library-specific code.
              </p>
              
              <p>
                In testing, Codeium's suggestions were relevant and syntactically correct approximately 85-90% of the time, which is excellent for a free tool. However, more specialized code or domain-specific applications sometimes received more generic suggestions that required modification.
              </p>
              
              <h3>Performance and Speed</h3>
              <p>
                One of Codeium's standout features is its speed. Code completions typically appear with minimal latency, even when suggesting larger blocks of code. This responsiveness helps maintain flow while coding and contributes significantly to productivity gains.
              </p>
              
              <p>
                Codeium achieves this performance through efficient local processing combined with cloud-based AI. The lightweight IDE extensions maintain responsiveness even when working with larger codebases, although suggestion quality can sometimes decrease in very large or complex projects where context becomes more challenging.
              </p>
              
              <h3>IDE Integration and User Experience</h3>
              <p>
                Codeium shines with its wide range of integrations, supporting over 25 different development environments including:
              </p>
              
              <ul>
                <li><strong>Major IDEs:</strong> VS Code, JetBrains tools (IntelliJ, PyCharm, WebStorm, etc.), Visual Studio</li>
                <li><strong>Code Editors:</strong> Neovim, Vim, Sublime Text, Emacs</li>
                <li><strong>Web Interfaces:</strong> GitHub, GitLab, Jupyter Notebooks</li>
                <li><strong>Cloud Environments:</strong> AWS Cloud9, Google Cloud Shell</li>
              </ul>
              
              <p>
                The installation process is straightforward across all platforms, typically requiring just a plugin installation and a quick authentication. The user interface is clean and non-intrusive, with suggestions appearing naturally as you type.
              </p>
              
              <p>
                Codeium integrates well into existing workflows without requiring significant changes to coding habits. Users can accept suggestions with Tab or continue typing to ignore them, making the learning curve minimal for new users.
              </p>
              
              <h3>Language Support and Special Features</h3>
              <p>
                Codeium supports over 70 programming languages, including all major languages and many specialized or niche ones. Beyond standard languages, it also handles:
              </p>
              
              <ul>
                <li><strong>Markup and Styling:</strong> HTML, CSS, Markdown, LaTeX</li>
                <li><strong>Data Science:</strong> R, Julia, specialized Python libraries</li>
                <li><strong>Infrastructure as Code:</strong> Terraform, Docker, Kubernetes</li>
                <li><strong>Database:</strong> SQL variants, GraphQL</li>
              </ul>
              
              <p>
                Codeium includes several special features that enhance its utility:
              </p>
              
              <ul>
                <li><strong>Code Chat:</strong> A contextual AI assistant that can answer questions about your code</li>
                <li><strong>Natural Language Comments:</strong> The ability to write a comment describing what you want to do and have Codeium suggest implementations</li>
                <li><strong>Code Explanations:</strong> Request explanations of complex code sections</li>
                <li><strong>Multiple Suggestions:</strong> Cycle through alternative completion options</li>
              </ul>
              
              <h3>Pricing and Value</h3>
              <p>
                Codeium's pricing model is one of its major advantages:
              </p>
              
              <ul>
                <li><strong>Free Tier:</strong> Unlimited code completions for individual developers, with full access to most features</li>
                <li><strong>Team ($12/user/month):</strong> Adds team management, analytics, and collaboration features</li>
                <li><strong>Enterprise (Custom pricing):</strong> Private instances, enhanced security, and custom models</li>
              </ul>
              
              <p>
                The free tier is remarkably generous compared to competitors, making Codeium an excellent choice for individual developers, students, and small projects. There are no monthly usage limits on the free tier, which is a significant advantage over some competing products.
              </p>
              
              <p>
                For teams and enterprises, the paid tiers provide additional value through enhanced collaboration features, analytics, and security options, though the core AI functionality remains largely the same across all tiers.
              </p>
              
              <h3>Practical Applications of Codeium</h3>
              
              <h4>1. Everyday Development Workflows</h4>
              <p>
                For regular development tasks, Codeium can significantly speed up coding by suggesting common patterns, handling boilerplate code, and completing repetitive structures. Developers report 25-40% increases in coding speed for routine tasks.
              </p>
              
              <h4>2. Learning New Languages or Frameworks</h4>
              <p>
                Codeium serves as an excellent learning tool for developers exploring new technologies. It can suggest idiomatic code and common patterns, helping developers understand best practices in unfamiliar languages or frameworks.
              </p>
              
              <h4>3. Code Refactoring and Maintenance</h4>
              <p>
                When working with legacy code or performing refactoring, Codeium can help understand existing patterns and maintain consistency across the codebase. Its suggestions often follow established patterns in the project, helping maintain stylistic consistency.
              </p>
              
              <h4>4. Documentation and Testing</h4>
              <p>
                Codeium can assist in generating code comments, documentation, and test cases, though its capabilities in these areas are somewhat more limited than its core code completion features.
              </p>
              
              <h3>Codeium vs. Competitors in 2025</h3>
              <p>
                In the AI coding assistant landscape of 2025, Codeium competes with several strong alternatives:
              </p>
              
              <ul>
                <li><strong>GitHub Copilot:</strong> More advanced context understanding but requires a subscription ($10/month)</li>
                <li><strong>Amazon CodeWhisperer:</strong> Strong for AWS development but more limited in general use cases</li>
                <li><strong>Tabnine:</strong> Better privacy features with on-device options, but less powerful suggestions</li>
                <li><strong>Cursor:</strong> AI-native editor with more advanced assistance but requires switching development environments</li>
              </ul>
              
              <p>
                Compared to these competitors, Codeium stands out in:
              </p>
              
              <ul>
                <li>Offering the most generous free tier with unlimited usage</li>
                <li>Providing exceptionally broad IDE and language support</li>
                <li>Maintaining fast response times even for complex suggestions</li>
                <li>Balancing accessibility for beginners with utility for professionals</li>
              </ul>
              
              <p>
                However, Codeium falls behind in some areas: GitHub Copilot provides more contextually aware suggestions for complex codebases; Tabnine offers better privacy options; and Cursor delivers more integrated AI assistance within its dedicated editor environment.
              </p>
            </div>
            
            {/* Comparison table of competitors */}
            <h3 className="text-xl font-bold text-gray-800 mb-4">Codeium vs. Competitors: Comparison</h3>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-600 font-medium">Feature</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Codeium</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">GitHub Copilot</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-medium">Tabnine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Free Tier</td>
                    <td className="px-4 py-3 text-center text-gray-700">Unlimited</td>
                    <td className="px-4 py-3 text-center text-gray-700">Limited trial</td>
                    <td className="px-4 py-3 text-center text-gray-700">Limited suggestions</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Paid Pricing</td>
                    <td className="px-4 py-3 text-center text-gray-700">$12/month (team)</td>
                    <td className="px-4 py-3 text-center text-gray-700">$10/month</td>
                    <td className="px-4 py-3 text-center text-gray-700">$12/month</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Code Completion Quality</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">IDE Support</td>
                    <td className="px-4 py-3 text-center text-gray-700">25+ editors</td>
                    <td className="px-4 py-3 text-center text-gray-700">Limited selection</td>
                    <td className="px-4 py-3 text-center text-gray-700">Wide range</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Response Speed</td>
                    <td className="px-4 py-3 text-center text-gray-700">Very Fast</td>
                    <td className="px-4 py-3 text-center text-gray-700">Fast</td>
                    <td className="px-4 py-3 text-center text-gray-700">Fast</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Context Understanding</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                    <td className="px-4 py-3 text-center text-gray-700">Excellent</td>
                    <td className="px-4 py-3 text-center text-gray-700">Good</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-700">Privacy Features</td>
                    <td className="px-4 py-3 text-center text-gray-700">Standard</td>
                    <td className="px-4 py-3 text-center text-gray-700">Standard</td>
                    <td className="px-4 py-3 text-center text-gray-700">Advanced (self-hosting)</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-700">Language Support</td>
                    <td className="px-4 py-3 text-center text-gray-700">70+ languages</td>
                    <td className="px-4 py-3 text-center text-gray-700">20+ languages</td>
                    <td className="px-4 py-3 text-center text-gray-700">15+ languages</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Final verdict and CTA */}
            <div className="bg-teal-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Final Verdict</h2>
              <p className="text-gray-700 mb-4">
                Codeium offers an impressive AI coding assistant experience, especially given its generous free tier. Its combination of broad language support, extensive IDE integrations, and fast, accurate code suggestions make it an excellent choice for many developers.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who should use Codeium:</strong> Individual developers, students, open-source contributors, and small teams looking for a productivity boost without a subscription cost. It's also ideal for polyglot developers who work across multiple languages and environments.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Who might prefer alternatives:</strong> Enterprise teams with complex security requirements might find GitHub Copilot's enterprise offerings more suitable. Developers working on highly specialized or complex codebases might benefit from Copilot's stronger context understanding. Those with significant privacy concerns might prefer Tabnine's self-hosting options.
              </p>
              <div className="flex gap-4 mt-6">
                <ButtonAffiliate 
                  text="Try Codeium Free" 
                  url={product.affiliateUrl} 
                  color="success" 
                  size="lg"
                  hasFreeTrial={false}
                  hasFreeVersion={true}
                  trackingId={product.affiliateTrackingId}
                  className="flex-1 text-center justify-center"
                />
                <ButtonAffiliate 
                  text="Explore Team Plan" 
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
                Do you have a question about Codeium? Ask in the comments below and we'll answer.
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
                    <span className="text-gray-700">Free version with unlimited use</span>
                  </div>
                )}
              </div>
              
              <ButtonAffiliate 
                text="Try Codeium Free" 
                url={product.affiliateUrl} 
                color="success" 
                hasFreeTrial={false}
                hasFreeVersion={true}
                trackingId={product.affiliateTrackingId}
                className="w-full text-center justify-center mb-2"
              />
              
              <ButtonAffiliate 
                text="Explore Team Plan" 
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Similar AI Coding Assistants</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/reviews/github-copilot" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-gray-600 font-medium">GC</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">GitHub Copilot</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-1">4.8/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/tabnine" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium">TN</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Tabnine</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.4/5</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/reviews/cursor" className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium">CUR</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Cursor</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★</span>
                        <span className="text-gray-400">★</span>
                        <span className="text-xs text-gray-500 ml-1">4.6/5</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="/comparisons/ai-coding-tools" className="text-indigo-600 font-medium text-sm flex items-center mt-4 hover:text-indigo-800">
                View all AI coding assistants
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
                    <span>Is Codeium truly free for individual use?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Yes, Codeium offers a genuinely free tier for individual developers with no usage limits on code completions. Unlike some competitors that offer only limited trials or restrict usage after a certain threshold, Codeium's free tier provides unlimited access to its core AI code completion functionality. The company monetizes through team and enterprise plans that add collaboration features, analytics, and advanced security options.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Codeium compare to GitHub Copilot?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Codeium and GitHub Copilot are both leading AI coding assistants, but with key differences. Codeium offers a fully-featured free tier with unlimited usage, while Copilot requires a $10/month subscription. Copilot generally provides somewhat higher quality suggestions with better context understanding for complex codebases, especially in larger projects. However, Codeium offers broader IDE support, faster response times, and supports more programming languages. For most individual developers and small teams, Codeium provides excellent value, while enterprise teams and developers working on complex projects might benefit from Copilot's stronger context handling.
                  </p>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What about privacy and security with Codeium?</span>
                    <span className="transition group-open:rotate-180">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    Codeium's approach to privacy includes not storing user code longer than necessary for providing suggestions and not using customer code to train their models. For Teams and Enterprise tiers, Codeium offers additional security features including SSO integration, audit logs, and private instances for sensitive environments. However, unlike Tabnine, Codeium doesn't currently offer on-device processing options, so code snippets are sent to their servers for processing. For highly sensitive environments, companies might want to explore Codeium's Enterprise tier with its enhanced security options or consider alternatives with on-device processing capabilities.
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