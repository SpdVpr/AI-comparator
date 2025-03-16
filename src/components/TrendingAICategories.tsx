'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Pencil, Code, Image, Video, 
  Mic, Bot, BookOpen, Briefcase, 
  Brain, ChevronRight
} from 'lucide-react';

// Define categories with all necessary info
const categories = [
  {
    id: 'ai-writing-tools',
    title: 'AI Writing Tools',
    description: 'Content creation, blogging, marketing copy, and creative writing assistants',
    shortDesc: 'Create engaging content faster',
    icon: Pencil,
    color: 'from-indigo-500 to-blue-500',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    count: 8,
    topTools: ['Jasper AI', 'Grammarly Business', 'Writesonic', 'Copy.ai'],
    url: '/comparisons/ai-writing-tools'
  },
  {
    id: 'ai-for-coding',
    title: 'AI Coding Tools',
    description: 'Code completion, bug fixing, and programming assistants for developers',
    shortDesc: 'Accelerate development workflows',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
    count: 7,
    topTools: ['GitHub Copilot', 'Cursor', 'Codeium', 'Tabnine'],
    url: '/comparisons/ai-for-coding'
  },
  {
    id: 'ai-for-image-generation',
    title: 'AI Image Generation',
    description: 'Create stunning visuals, art, and graphics from simple text prompts',
    shortDesc: 'Turn text into stunning visuals',
    icon: Image,
    color: 'from-pink-500 to-purple-500',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    bgColor: 'bg-pink-50',
    count: 6,
    topTools: ['Midjourney', 'DALL-E 3', 'Stable Diffusion XL', 'Adobe Firefly'],
    url: '/comparisons/ai-for-image-generation'
  },
  {
    id: 'ai-for-video-creation',
    title: 'AI Video Creation',
    description: 'Generate, edit, and enhance videos with artificial intelligence',
    shortDesc: 'Create professional videos easily',
    icon: Video,
    color: 'from-red-500 to-orange-500',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    bgColor: 'bg-red-50',
    count: 5,
    topTools: ['Pictory AI', 'Synthesia', 'Runway ML Gen-3', 'InVideo AI'],
    url: '/comparisons/ai-for-video-creation'
  },
  {
    id: 'ai-chatbots-assistants',
    title: 'AI Chatbots & Assistants',
    description: 'Conversational AI, virtual assistants, and intelligent chat interfaces',
    shortDesc: 'Intelligent conversational assistants',
    icon: Bot,
    color: 'from-violet-500 to-purple-500',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    bgColor: 'bg-violet-50',
    count: 6,
    topTools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
    url: '/comparisons/ai-chatbots-assistants'
  },
  {
    id: 'ai-for-voice-generation',
    title: 'AI Voice Generation',
    description: 'Text-to-speech and voice synthesis tools for natural-sounding audio',
    shortDesc: 'Create natural-sounding voiceovers',
    icon: Mic,
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    count: 4,
    topTools: ['ElevenLabs', 'Play.ht', 'Murf.ai', 'Resemble.ai'],
    url: '/comparisons/ai-for-voice-generation'
  },
  {
    id: 'ai-for-business-marketing',
    title: 'AI for Business',
    description: 'AI solutions for marketing, analytics, and business operations',
    shortDesc: 'Optimize your marketing & operations',
    icon: Briefcase,
    color: 'from-amber-500 to-yellow-500',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50',
    count: 4,
    topTools: ['Jasper AI', 'Surfer AI', 'HubSpot Content Assistant', 'Copysmith'],
    url: '/comparisons/ai-for-business-marketing'
  },
  {
    id: 'ai-for-education',
    title: 'AI for Education',
    description: 'Learning tools, tutoring assistants, and educational resources',
    shortDesc: 'Enhance learning experiences',
    icon: BookOpen,
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    bgColor: 'bg-emerald-50',
    count: 4,
    topTools: ['Khanmigo', 'Quizlet Q-Chat', 'Duolingo AI Tutor'],
    url: '/comparisons/ai-for-education'
  }
];

export default function TrendingAICategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  
  // Get active category details
  const activeCategoryData = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',     // text-center
            marginBottom: '3rem'     // mb-12
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🔥 Trending AI Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular AI tools by category. We've tested and reviewed the best options for your specific needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Left side category selection */}
          <div className="md:col-span-1">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-700">Popular Categories</h3>
              </div>
              <div className="p-2">
                {categories.map((category) => (
                    <motion.div
  key={category.id}
  variants={itemVariants}
  whileTap={{ scale: 0.95 }}
>
  <button
    onClick={() => setActiveCategory(category.id)}
    className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition ${
      activeCategory === category.id 
        ? `${category.bgColor} ${category.textColor} font-medium` 
        : 'hover:bg-gray-50 text-gray-700'
    }`}
  >
    <category.icon size={18} className="mr-3" />
    <span>{category.title}</span>
  </button>
</motion.div>
                ))}
                
                <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    paddingLeft: '1rem',     // px-4
                    paddingRight: '1rem',    // px-4
                    paddingTop: '1rem',      // pt-4
                    paddingBottom: '0.5rem', // pb-2
                    marginTop: '0.5rem',     // mt-2
                    borderTopWidth: '1px',   // border-t
                    borderColor: '#f3f4f6'   // border-gray-100
                  }}
                >
                  <a 
                    href="/comparisons" 
                    className="text-indigo-600 text-sm flex items-center hover:text-indigo-800 transition"
                  >
                    View all categories
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side category details */}
          <div className="md:col-span-2 lg:col-span-3">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '1.5rem',         // p-6
                borderRadius: '0.75rem',   // rounded-xl
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
                backgroundColor: activeCategoryData.bgColor,  // dynamická barva pozadí
                height: '100%'             // h-full
              }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activeCategoryData.color} flex items-center justify-center text-white mr-4`}>
                  <activeCategoryData.icon size={24} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${activeCategoryData.textColor}`}>
                    {activeCategoryData.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {activeCategoryData.count} tools compared
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {activeCategoryData.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-gray-700 font-medium mb-3">Top Tools in This Category:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {activeCategoryData.topTools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-100"
                    >
                      {index === 0 && <span className="text-amber-500 mr-1">🥇</span>}
                      {index === 1 && <span className="text-gray-400 mr-1">🥈</span>}
                      {index === 2 && <span className="text-amber-700 mr-1">🥉</span>}
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href={activeCategoryData.url}
                className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${activeCategoryData.color} text-white hover:shadow-md transition`}
              >
                Compare All {activeCategoryData.title}
                <ChevronRight size={18} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}