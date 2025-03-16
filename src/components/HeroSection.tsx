'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
      <section className="py-24 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ultimate AI Tools Comparison 2025
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Independent reviews, detailed tests, and objective comparisons of the best AI models. Find the perfect AI tool for your specific needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/comparisons/ai-tools" 
              className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition text-lg shadow-lg"
            >
              Compare AI Tools Now
            </Link>
          </motion.div>
        </div>
      </section>
  );
}