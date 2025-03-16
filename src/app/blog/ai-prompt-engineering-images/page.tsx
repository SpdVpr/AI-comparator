import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How to Optimize Prompts for AI Image Generation',
  description: 'Learn how to craft perfect prompts for AI image generators like Midjourney, DALL-E, and Stable Diffusion. Get practical tips, examples, and comparisons.',
};

export default function AiPromptEngineeringImages() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        📸 How to Optimize Prompts for AI Image Generation
      </h1>

      <p className="text-gray-600 mb-8">
        Crafting effective prompts for AI image generation tools like Midjourney, DALL-E, and Stable Diffusion can dramatically improve the quality of your outputs. In this article, you'll learn detailed techniques to write optimized prompts and see practical examples of how prompt engineering transforms generated images.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why Prompt Engineering Matters</h2>
        <p className="text-gray-700">
          AI image generators interpret prompts literally. Poorly written or vague prompts typically produce disappointing results. A carefully structured prompt, however, can generate vivid, detailed, and precisely crafted images. This makes mastering prompt engineering crucial for artists, marketers, and content creators.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Essential Elements of a Good Prompt</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Clear Subject:</strong> Clearly define the main object or character.</li>
          <li><strong>Detailed Descriptions:</strong> Specify details like colors, style, environment, and emotions.</li>
          <li><strong>Artistic Style:</strong> Mention specific styles (e.g., watercolor, 3D rendering, photography).</li>
          <li><strong>Lighting & Composition:</strong> Clearly state lighting conditions and framing.</li>
          <li><strong>Negative Prompts:</strong> Indicate what you don't want to see.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Practical Prompt Examples (Before & After)</h2>
        
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Example 1: Basic vs. Detailed</h3>
          <p><strong>Basic Prompt:</strong> "a landscape"</p>
          <p><strong>Optimized Prompt:</strong> "A beautiful sunset landscape with mountains, dramatic golden-hour lighting, vibrant colors, hyperrealistic, 4K resolution."</p>
          <Image src="/images/landscape-comparison.jpg" alt="Landscape comparison" width={800} height={400} className="rounded-xl shadow-lg mt-4" />
        </div>

        <div className="mb-8">
          <h3 className="font-semibold mb-2">Example 2: Character Design</h3>
          <p><strong>Basic Prompt:</strong> "robot character"</p>
          <p><strong>Optimized Prompt:</strong> "A futuristic humanoid robot character, sleek metallic surface, glowing neon blue accents, cinematic lighting, digital art style, detailed, 8K."</p>
          <Image src="/images/robot-comparison.jpg" alt="Robot character comparison" width={800} height={400} className="rounded-xl shadow-lg mt-4" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Common Mistakes to Avoid</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Using vague or subjective terms like "beautiful" or "nice."</li>
          <li>Overloading the prompt with conflicting details.</li>
          <li>Ignoring style and lighting specifications.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Comparing Popular AI Image Generators</h2>
        <p className="text-gray-700 mb-4">
          Let's quickly compare how different popular tools interpret the same optimized prompt:
        </p>
        <p className="italic font-medium mb-4">"An ancient magical forest, glowing mushrooms, misty atmosphere, fantasy art, vibrant colors, cinematic lighting, highly detailed, 8K."</p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Midjourney:</strong> Artistic, dreamlike style with high-quality fantasy aesthetics.</li>
          <li><strong>DALL-E 3:</strong> Realistic interpretation with clear, accurate details.</li>
          <li><strong>Stable Diffusion XL:</strong> Highly customizable with impressive detail and color accuracy, slightly more technical.</li>
        </ul>
        <Image src="/images/tool-comparison.jpg" alt="AI tool comparison" width={800} height={400} className="rounded-xl shadow-lg mt-4" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Final Thoughts & Recommendations</h2>
        <p className="text-gray-700">
          Effective prompt engineering is an art form that combines clarity, creativity, and precision. Continuously experimenting and refining your prompts will significantly enhance your AI-generated content, giving you professional-grade results every time.
        </p>
      </section>
    </main>
  );
}