// src/data/aiTools/writingTools.ts
import { AITool } from '@/components/ComparisonTable';

export const writingTools: AITool[] = [
  // pouze Jasper AI
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    description: 'Enterprise-grade AI writing assistant with advanced content generation capabilities',
    logoUrl: '/images/logos/jasper.png',
    price: {
      startingAt: '$49/month',
      hasFreeVersion: false,
      hasFreeTrialVersion: true,
    },
    bestFor: ['Marketing Teams', 'Content Agencies', 'Blog Writers', 'SEO Specialists'],
    rating: 4.8,
    features: {
      'Long-form Content': { name: 'Long-form Content', value: true, info: 'Supports documents up to 100,000 words' },
      // další vlastnosti...
    },
    affiliateUrl: 'https://www.jasper.ai',
    websiteUrl: 'https://www.jasper.ai',
  },
  // další nástroje...
];