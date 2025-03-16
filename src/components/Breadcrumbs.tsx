'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

type BreadcrumbsProps = {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listItemClasses?: string;
  activeItemClasses?: string;
  capitalizeItems?: boolean;
};

const defaultProps: BreadcrumbsProps = {
  homeElement: <Home size={16} />,
  separator: <ChevronRight size={16} />,
  containerClasses: "flex py-4 text-sm text-gray-500",
  listItemClasses: "hover:text-indigo-600 flex items-center",
  activeItemClasses: "text-indigo-600 font-medium",
  capitalizeItems: true,
};

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const pathname = usePathname();
  
  const {
    homeElement,
    separator,
    containerClasses,
    listItemClasses,
    activeItemClasses,
    capitalizeItems,
  } = { ...defaultProps, ...props };

  // Split and decode the path segments
  let segments = pathname
    .split('/')
    .filter(segment => segment !== '')
    .map(segment => decodeURIComponent(segment));

  // Don't show breadcrumbs on the homepage
  if (segments.length === 0) {
    return null;
  }

  // Function to convert paths to readable names
  const getReadableName = (path: string) => {
    // Replace dashes and underscores with spaces
    let name = path.replace(/[-_]/g, ' ');
    
    // Special case transformations
    const specialCases: Record<string, string> = {
      'ai': 'AI',
      'chatgpt': 'ChatGPT',
      'dall-e': 'DALL-E',
      'midjourney': 'Midjourney',
      'seo': 'SEO',
    };

    for (const [key, value] of Object.entries(specialCases)) {
      const regex = new RegExp(`\\b${key}\\b`, 'gi');
      name = name.replace(regex, value);
    }
    
    // Capitalize first letter of each word if enabled
    if (capitalizeItems) {
      name = name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    return name;
  };

  // Build paths for each segment
  const paths = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    const name = getReadableName(segment);
    const isLast = index === segments.length - 1;
    
    return { path, name, isLast };
  });

  return (
    <nav aria-label="Breadcrumbs" className={containerClasses}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className={listItemClasses}>
            {homeElement}
          </Link>
        </li>
        
        {paths.map(({ path, name, isLast }) => (
          <React.Fragment key={path}>
            <li className="flex items-center text-gray-400">
              {separator}
            </li>
            <li>
              {isLast ? (
                <span className={activeItemClasses}>{name}</span>
              ) : (
                <Link href={path} className={listItemClasses}>
                  {name}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}