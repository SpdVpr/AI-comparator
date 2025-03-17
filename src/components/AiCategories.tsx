'use client';

import { motion } from 'framer-motion';
import { Code, Pencil, Video, ImageIcon, Mic, BookOpen, Briefcase, Gamepad } from 'lucide-react';

const categories = [
  { icon: Pencil, title: 'AI for Writing', link: '/comparisons/ai-writing-tools' },
  { icon: Code, title: 'AI for Coding', link: '/comparisons/ai-for-coding' },
  { icon: Video, title: 'AI for Video Creation', link: '/comparisons/ai-for-video-creation' },
  { icon: ImageIcon, title: 'AI for Image Generation', link: '/comparisons/ai-for-image-generation' },
  { icon: Mic, title: 'AI for Voice Generation', link: '/comparisons/ai-for-voice-generation' },
  { icon: BookOpen, title: 'AI for Education', link: '/comparisons/ai-for-education' },
  { icon: Briefcase, title: 'AI for Business & Marketing', link: '/comparisons/ai-for-business-marketing' },
  { icon: Gamepad, title: 'AI for Gaming', link: '/comparisons/ai-for-gaming' },
];

export default function AiCategories() {
  return (
    <section {...{
      class: "py-16 bg-gradient-to-br from-indigo-50 to-white"
    }}>
      <div {...{
        class: "container mx-auto px-4 text-center"
      }}>
        <motion.h2
          {...{
            class: "text-4xl font-bold text-gray-800 mb-10",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          }}
        >
          🔥 Choose the Best AI by Use Case
        </motion.h2>

        <div {...{
          class: "grid grid-cols-2 md:grid-cols-4 gap-4"
        }}>
          {categories.map(({ icon: Icon, title, link }, index) => (
            <a href={link}>
              <motion.div
                key={index}
                {...{
                  class: "bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col items-center justify-center",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: index * 0.1 }
                }}
              >
              <Icon {...{
                class: "text-indigo-500 mb-2",
                size: 36,
                strokeWidth: 1.5
              }} />
              <span {...{
                class: "font-medium text-gray-700"
              }}>{title}</span>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}