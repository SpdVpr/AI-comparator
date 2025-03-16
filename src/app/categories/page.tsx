// src/app/comparisons/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { 
  Pencil, Code, ImageIcon, Video, 
  Mic, Bot, BookOpen, Briefcase, 
  Brain, BarChart, School, Gamepad 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tool Comparisons & Categories - Find the Best AI Solutions (2025)',
  description: 'Compare the top AI tools by category. Discover the best AI writing, coding, image generation, chatbot, and other AI tools with our detailed comparisons.',
};

// Define categories with their details (same as in categories-index.tsx)
const categories = [
  {
    id: 'ai-writing-tools',
    title: 'AI Writing Tools',
    description: 'AI tools for content creation, copywriting, blogs, and marketing materials',
    icon: Pencil,
    color: 'from-indigo-500 to-blue-500',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    count: 15,
  },
  {
    id: 'ai-for-coding',
    title: 'AI Coding Tools',
    description: 'AI-powered coding assistants, code completion, and development tools',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    count: 12,
  },
  {
    id: 'ai-for-image-generation',
    title: 'AI Image Generation',
    description: 'Create stunning images, art, and graphics with AI generators',
    icon: ImageIcon,
    color: 'from-pink-500 to-purple-500',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    count: 10,
  },
  {
    id: 'ai-for-video-creation',
    title: 'AI Video Creation',
    description: 'Generate, edit and enhance videos with artificial intelligence',
    icon: Video,
    color: 'from-red-500 to-orange-500',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    count: 8,
  },
  {
    id: 'ai-for-voice-generation',
    title: 'AI Voice Generation',
    description: 'Text-to-speech and voice synthesis tools powered by AI',
    icon: Mic,
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    count: 7,
  },
  {
    id: 'ai-chatbots-assistants',
    title: 'AI Chatbots & Assistants',
    description: 'Conversational AI, chatbots, and general-purpose AI assistants',
    icon: Bot,
    color: 'from-violet-500 to-purple-500',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    count: 9,
  },
  {
    id: 'ai-for-education',
    title: 'AI for Education',
    description: 'Learning tools, tutoring assistants, and educational resources',
    icon: BookOpen,
    color: 'from-yellow-500 to-amber-500',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    count: 6,
  },
  {
    id: 'ai-for-business-marketing',
    title: 'AI for Business & Marketing',
    description: 'Tools for marketing, analytics, customer service, and business operations',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    count: 14,
  },
  {
    id: 'ai-for-productivity',
    title: 'AI for Productivity',
    description: 'Tools to automate tasks, enhance workflows, and boost productivity',
    icon: BarChart,
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    count: 11,
  },
  {
    id: 'ai-for-research',
    title: 'AI Research Tools',
    description: 'Tools for academic research, data analysis, and information synthesis',
    icon: Brain,
    color: 'from-teal-500 to-cyan-500',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    count: 5,
  },
  {
    id: 'ai-for-learning',
    title: 'AI Learning Platforms',
    description: 'Platforms to learn about AI, machine learning, and data science',
    icon: School,
    color: 'from-orange-500 to-amber-500',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    count: 4,
  },
  {
    id: 'ai-for-gaming',
    title: 'AI for Gaming',
    description: 'AI tools for game development, procedural generation, and gaming enhancements',
    icon: Gamepad,
    color: 'from-purple-500 to-fuchsia-500',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    count: 3,
  },
];

// Define head-to-head specific comparisons
const headToHeadComparisons = [
  {
    id: 'chatgpt-vs-claude',
    title: 'ChatGPT vs Claude',
    description: 'A detailed comparison of OpenAI\'s and Anthropic\'s leading AI assistants',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    textColor: 'text-indigo-600',
    category: 'AI Assistants',
  },
  {
    id: 'midjourney-vs-dalle',
    title: 'Midjourney vs DALL-E 3',
    description: 'Which AI image generator creates better images? A side-by-side comparison',
    color: 'bg-gradient-to-r from-pink-500 to-purple-500',
    textColor: 'text-pink-600',
    category: 'AI Image Generation',
  },
  {
    id: 'jasper-vs-copyai',
    title: 'Jasper AI vs Copy.ai',
    description: 'Compare the top two AI writing assistants for content creation',
    color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    textColor: 'text-blue-600',
    category: 'AI Writing',
  },
  {
    id: 'github-copilot-vs-codeium',
    title: 'GitHub Copilot vs Codeium',
    description: 'Paid vs free: which AI coding assistant offers better value?',
    color: 'bg-gradient-to-r from-green-500 to-teal-500',
    textColor: 'text-green-600',
    category: 'AI Coding',
  },
  {
    id: 'gemini-vs-gpt4',
    title: 'Gemini vs GPT-4',
    description: 'Google vs OpenAI: comparing the most advanced AI models',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    textColor: 'text-cyan-600',
    category: 'AI Models',
  },
  {
    id: 'stable-diffusion-vs-firefly',
    title: 'Stable Diffusion vs Adobe Firefly',
    description: 'Open-source vs commercial: comparing the leading image generators',
    color: 'bg-gradient-to-r from-orange-500 to-red-500',
    textColor: 'text-orange-600',
    category: 'AI Image Generation',
  },
];

export default function ComparisonsPage() {
  return (
    <main>
      {/* Header section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            containerClasses="flex py-2 text-sm text-white/70 mb-6"
            listItemClasses="hover:text-white flex items-center"
            activeItemClasses="text-white font-medium"
          />
          <h1 className="text-4xl font-bold mb-4">AI Tool Comparisons</h1>
          <p className="text-xl max-w-3xl mb-6">
            Find the perfect AI solution with our comprehensive comparisons. 
            Explore tools by category or view head-to-head comparisons of popular options.
          </p>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">AI Tool Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/comparisons/${category.id}`}
                className={`bg-white rounded-xl border ${category.borderColor} p-6 shadow-sm hover:shadow-md transition flex flex-col h-full`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mr-4`}>
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold ${category.textColor}`}>{category.title}</h2>
                    <span className="text-xs text-gray-500">{category.count} tools compared</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {category.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Updated March 2025</span>
                  <span className={`inline-flex items-center ${category.textColor} font-medium text-sm`}>
                    Explore Category
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Head-to-head comparisons */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Head-to-Head Comparisons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headToHeadComparisons.map((comparison) => (
              <Link 
                key={comparison.id} 
                href={`/comparisons/${comparison.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col h-full"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                    {comparison.category}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${comparison.textColor}`}>{comparison.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {comparison.description}
                </p>
                <div className="flex justify-end mt-auto">
                  <span className={`inline-flex items-center ${comparison.textColor} font-medium text-sm`}>
                    View Comparison
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we test section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Test AI Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Testing Methodology</h3>
              <p className="text-gray-700 mb-4">
                We use a rigorous testing methodology to ensure our comparisons are fair, 
                accurate, and valuable to our readers. Each AI tool is evaluated across 
                multiple dimensions including performance, ease of use, features, and value.
              </p>
              <p className="text-gray-700">
                All comparisons are conducted by our team of AI specialists who have 
                expertise in the relevant domains. We regularly update our reviews as 
                tools evolve and new features are released.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Evaluation Criteria</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Performance:</strong> Output quality, accuracy, and speed</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>User Experience:</strong> Interface design, ease of use, and learning curve</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Features:</strong> Available capabilities and their implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Value:</strong> Pricing relative to features and performance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Integration:</strong> Compatibility with other tools and ecosystems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right AI Tool?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our comprehensive comparisons will help you find the perfect AI solution for your specific needs.
          </p>
          <Link 
            href="#top" 
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-block"
          >
            Explore All Categories
          </Link>
        </div>
      </section>
    </main>
  );
}