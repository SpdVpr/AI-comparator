'use client';

import React, { useState } from 'react';
import { Star, Check, X, Info } from 'lucide-react';
import Link from 'next/link';
import { JSX } from 'react';

// Types for table data
type FeatureValue = boolean | string | number | null;

interface AIToolFeature {
  name: string;
  value: FeatureValue;
  info?: string;
}

interface AIToolRating {
  category: string;
  score: number;
  maxScore: number;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  price: {
    startingAt: string;
    hasFreeVersion: boolean;
    hasFreeTrialVersion: boolean;
  };
  bestFor: string[];
  rating: number;
  detailedRatings?: AIToolRating[];
  features: Record<string, AIToolFeature>;
  affiliateUrl?: string;
  websiteUrl: string;
}

interface ComparisonTableProps {
  tools: AITool[];
  title?: string;
  description?: string;
  compareFeatures: string[];
  className?: string;
  categoryName?: string;
  maxVisibleFeatures?: number; // New prop to control number of visible features
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  tools,
  title = 'Tools Comparison',
  description,
  compareFeatures,
  className = '',
  categoryName = 'AI Tools',
  maxVisibleFeatures = 4, // Default to showing 4 features to keep the table compact
}) => {
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  // Get all unique features from tools
  const getAllFeatures = (): string[] => {
    const featuresSet = new Set<string>();
    
    tools.forEach(tool => {
      Object.keys(tool.features).forEach(feature => {
        featuresSet.add(feature);
      });
    });
    
    return Array.from(featuresSet);
  };
  
  // Filter and sort tools
  const getSortedTools = (): AITool[] => {
    return [...tools].sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else {
        // Sort by price - tools with "free" first
        if (a.price.hasFreeVersion && !b.price.hasFreeVersion) return -1;
        if (!a.price.hasFreeVersion && b.price.hasFreeVersion) return 1;
        
        // If both have or don't have free versions, try to compare startingAt
        const aPrice = parseInt(a.price.startingAt.replace(/\D/g, '')) || 0;
        const bPrice = parseInt(b.price.startingAt.replace(/\D/g, '')) || 0;
        return aPrice - bPrice;
      }
    });
  };
  
  const sortedTools = getSortedTools();
  const allFeatures = getAllFeatures();
  
  // Get features to display
  const getDisplayFeatures = () => {
    if (showAllFeatures) {
      return allFeatures;
    } else {
      // Only show a limited number of features to prevent horizontal scrolling
      return compareFeatures.slice(0, maxVisibleFeatures);
    }
  };
  
  const displayFeatures = getDisplayFeatures();
  
  // Helper to render feature value
  const renderFeatureValue = (feature: AIToolFeature | undefined): JSX.Element => {
    if (!feature) {
      return <X {...{ class: "text-gray-300", size: 18 }} />;
    }
    
    if (typeof feature.value === 'boolean') {
      return feature.value ? 
        <Check {...{ class: "text-green-500", size: 20 }} /> : 
        <X {...{ class: "text-red-400", size: 18 }} />;
    }
    
    if (feature.value === null || feature.value === '') {
      return <X {...{ class: "text-gray-300", size: 18 }} />;
    }
    
    return <span {...{ class: "text-sm" }}>{String(feature.value)}</span>;
  };
  
  // Render rating stars
  const renderStars = (rating: number): JSX.Element => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div {...{ class: "flex" }}>
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            {...{
              size: 18,
              class: `
                ${i < fullStars ? 'text-yellow-400 fill-yellow-400' : ''}
                ${i === fullStars && hasHalfStar ? 'text-yellow-400 fill-yellow-400 half-star' : ''}
                ${i >= fullStars && !(i === fullStars && hasHalfStar) ? 'text-gray-300' : ''}
              `
            }}
          />
        ))}
        <span {...{ class: "text-sm font-medium ml-1" }}>{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div {...{ class: `bg-white rounded-xl shadow-md ${className}` }}>
      {title && <h2 {...{ class: "text-2xl font-bold px-6 pt-6" }}>{title}</h2>}
      {description && <p {...{ class: "text-gray-600 px-6 pt-2 pb-4" }}>{description}</p>}
      
      {/* Table controls */}
      <div {...{ class: "border-b border-gray-200 px-6 pb-4 flex flex-wrap justify-between items-center" }}>
        <div {...{ class: "flex items-center space-x-4" }}>
          <span {...{ class: "text-sm text-gray-500" }}>Sort by:</span>
          <div {...{ class: "flex bg-gray-100 rounded-lg p-1" }}>
            <button
              onClick={() => setSortBy('rating')}
              {...{ class: `px-3 py-1 text-sm rounded-md ${sortBy === 'rating' ? 'bg-white shadow-sm' : 'text-gray-500'}` }}
            >
              Rating
            </button>
            <button
              onClick={() => setSortBy('price')}
              {...{ class: `px-3 py-1 text-sm rounded-md ${sortBy === 'price' ? 'bg-white shadow-sm' : 'text-gray-500'}` }}
            >
              Price
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          {...{ class: "text-indigo-600 hover:text-indigo-800 text-sm font-medium" }}
        >
          {showAllFeatures ? 'Show key features only' : 'Show all features'}
        </button>
      </div>
      
      {/* Comparison table */}
      <div {...{ class: "overflow-x-auto" }}>
        <table {...{ class: "w-full text-sm" }}>
          <thead>
            <tr {...{ class: "border-b border-gray-200" }}>
              <th {...{ class: "py-4 px-6 text-left font-medium text-gray-500" }}>Tool</th>
              <th {...{ class: "py-4 px-4 text-left font-medium text-gray-500" }}>Best For</th>
              <th {...{ class: "py-4 px-4 text-left font-medium text-gray-500" }}>Rating</th>
              <th {...{ class: "py-4 px-4 text-left font-medium text-gray-500" }}>Starting Price</th>
              {displayFeatures.map((feature) => (
                <th key={feature} {...{ class: "py-4 px-4 text-center font-medium text-gray-500 whitespace-nowrap" }}>
                  {feature}
                </th>
              ))}
              <th {...{ class: "py-4 px-4 text-center font-medium text-gray-500 sticky right-0 bg-white" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedTools.map((tool, index) => (
              <tr 
                key={tool.id} 
                {...{ class: `border-b border-gray-200 hover:bg-gray-50 ${index === 0 ? 'bg-indigo-50' : ''}` }}
              >
                <td {...{ class: "py-4 px-6" }}>
                  <div {...{ class: "flex items-center" }}>
                    {index === 0 && (
                      <span {...{ class: "text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full px-2 py-1 mr-2" }}>
                        #1
                      </span>
                    )}
                    <div>
                      <div {...{ class: "font-medium text-gray-900" }}>{tool.name}</div>
                      <div {...{ class: "text-xs text-gray-500 mt-1" }}>{tool.description}</div>
                    </div>
                  </div>
                </td>
                <td {...{ class: "py-4 px-4" }}>
                  <div {...{ class: "flex flex-wrap gap-1" }}>
                    {tool.bestFor.slice(0, 2).map((tag, i) => (
                      <span 
                        key={i} 
                        {...{ class: "inline-block bg-gray-100 rounded-full px-2 py-1 text-xs" }}
                      >
                        {tag}
                      </span>
                    ))}
                    {tool.bestFor.length > 2 && (
                      <span {...{ class: "text-xs text-gray-500" }}>+{tool.bestFor.length - 2}</span>
                    )}
                  </div>
                </td>
                <td {...{ class: "py-4 px-4" }}>
                  {renderStars(tool.rating)}
                </td>
                <td {...{ class: "py-4 px-4 whitespace-nowrap" }}>
                  <div>
                    <span {...{ class: "font-medium" }}>{tool.price.startingAt}</span>
                    {tool.price.hasFreeVersion && (
                      <span {...{ class: "block text-xs text-green-600 font-medium" }}>Free version</span>
                    )}
                    {!tool.price.hasFreeVersion && tool.price.hasFreeTrialVersion && (
                      <span {...{ class: "block text-xs text-blue-600 font-medium" }}>Free Trial</span>
                    )}
                  </div>
                </td>
                
                {displayFeatures.map((feature) => (
                  <td key={`${tool.id}-${feature}`} {...{ class: "py-4 px-4 text-center" }}>
                    <div {...{ class: "flex justify-center items-center relative group" }}>
                      {renderFeatureValue(tool.features[feature])}
                      
                      {tool.features[feature]?.info && (
                        <div {...{ class: "ml-1 cursor-help" }}>
                          <Info {...{ size: 14, class: "text-gray-400" }} />
                          <div {...{ class: "hidden group-hover:block absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 w-48" }}>
                            {tool.features[feature]?.info}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
                
                <td {...{ class: "py-4 px-4 text-right sticky right-0 bg-white shadow-sm" }}>
                  <Link 
                    href={tool.affiliateUrl || tool.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    {...{ class: "inline-block bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-xs font-medium transition-colors" }}
                  >
                    Try it
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div {...{ class: "px-6 py-4 text-xs text-gray-500" }}>
        {categoryName} compared based on features, user ratings, and pricing. Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default ComparisonTable;