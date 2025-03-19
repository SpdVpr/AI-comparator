// src/app/reviews/layout.tsx
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ReviewsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            containerClasses="flex py-2 text-sm text-gray-500 mb-6"
            listItemClasses="hover:text-indigo-600 flex items-center"
            activeItemClasses="text-indigo-600 font-medium"
          />
        </div>
        {children}
      </div>
    );
  }