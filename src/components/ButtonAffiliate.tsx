// src/components/ButtonAffiliate.tsx
'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ButtonAffiliateProps {
  text?: string;
  url: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  isExternal?: boolean;
  trackingId?: string;
  hasFreeVersion?: boolean;
  hasFreeTrial?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ButtonAffiliate: React.FC<ButtonAffiliateProps> = ({
  text = 'Try for Free',
  url,
  color = 'primary',
  isExternal = true,
  trackingId,
  hasFreeVersion,
  hasFreeTrial,
  size = 'md',
  className = '',
}) => {
  // Function to add affiliate tracking ID if it exists
  const getUrl = () => {
    try {
      const urlObj = new URL(url);
      
      // Add tracking ID if it exists
      if (trackingId) {
        urlObj.searchParams.append('ref', trackingId);
      }
      
      return urlObj.toString();
    } catch (e) {
      // If URL is not valid, return original URL
      return url;
    }
  };

  // Logs for click tracking (you could implement analytics here)
  const handleClick = () => {
    console.log(`Affiliate link clicked: ${url}`);
    
    // You can add Google Analytics or other analytics code here
    // if (window.gtag) {
    //   window.gtag('event', 'click', {
    //     event_category: 'affiliate',
    //     event_label: url,
    //     value: 1
    //   });
    // }
  };

  // Color styles based on button type
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-indigo-600 hover:bg-indigo-700 text-white';
      case 'secondary':
        return 'bg-purple-600 hover:bg-purple-700 text-white';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'info':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 text-white';
    }
  };

  // Size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-1 px-3 text-sm';
      case 'lg':
        return 'py-3 px-6 text-lg';
      default:
        return 'py-2 px-4 text-base';
    }
  };

  // Compose final CSS classes
  const buttonClasses = `
    ${getColorClasses()} 
    ${getSizeClasses()} 
    rounded-full 
    font-medium 
    inline-flex 
    items-center 
    transition-colors 
    shadow-sm 
    hover:shadow-md
    ${className}
  `;

  // Badge for "Free" or "Free Trial"
  const renderBadge = () => {
    if (hasFreeVersion) {
      return <span className="ml-2 bg-white bg-opacity-20 text-white text-xs py-0.5 px-1.5 rounded-full">Free</span>;
    }
    if (hasFreeTrial) {
      return <span className="ml-2 bg-white bg-opacity-20 text-white text-xs py-0.5 px-1.5 rounded-full">Free Trial</span>;
    }
    return null;
  };

  // Render button with conditional external link
  if (isExternal) {
    return (
      <a 
        href={getUrl()} 
        className={buttonClasses}
        onClick={handleClick}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {text}
        {renderBadge()}
        <ExternalLink size={16} className="ml-1.5" />
      </a>
    );
  }

  return (
    <Link 
      href={getUrl()} 
      className={buttonClasses}
      onClick={handleClick}
    >
      {text}
      {renderBadge()}
    </Link>
  );
};

export default ButtonAffiliate;