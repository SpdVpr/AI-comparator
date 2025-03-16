// src/app/page.tsx
import AiCategories from '@/components/AiCategories';
import HeroSection from '@/components/HeroSection';
import ComparisonPreview from '@/components/ComparisonPreview';
import FeaturedReviews from '@/components/FeaturedReviews'; // Import the new component
import type { Metadata } from 'next';
import TrendingAICategories from '@/components/TrendingAICategories';

export const metadata: Metadata = {
  title: 'AI Comparator – Best AI Tools, Reviews & Comparisons (2025)',
  description: 'Discover and compare the top AI tools for writing, coding, video creation, image generation, and more. Independent reviews & exclusive offers.',
};

export default function Home() {
  return (
    <main>
      {/* Hero section with main heading and CTA */}
      <HeroSection />
      
      {/* Quick AI categories for easy navigation */}
      <AiCategories />
      
      {/* Featured Reviews Section */}
      <FeaturedReviews />
      
      {/* Preview of the comparison table */}
      <ComparisonPreview />
      
      {/* Trending AI Categories Section */}
      <TrendingAICategories />
      
      
    </main>
  );
}