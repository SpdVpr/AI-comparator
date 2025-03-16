import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';  // Ujisti se, že zde je správná cesta
import { Mail, Globe, MapPin, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - AI Comparator',
  description: 'Get in touch with the AI Comparator team. Questions, feedback, partnership inquiries, or concerns - were here to help.',
};

// Contact information
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'info@aicomparator.com',
    link: 'mailto:info@aicomparator.com'
  },
  {
    icon: Globe,
    title: 'Website',
    details: 'www.aicomparator.com',
    link: 'https://www.aicomparator.com'
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'Prague, Czech Republic',
    link: 'https://maps.google.com'
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mb-6">
            Have questions about AI tools? Want to suggest a tool for review? 
            Interested in partnering with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact form and info section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - Contact info */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="mr-2 text-indigo-600" size={24} />
                Get In Touch
              </h2>
              
              <p className="text-gray-700 mb-8">
                We're here to help with any questions you might have about AI tools 
                or our reviews. Reach out to us using the contact form or any of the 
                methods below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <item.icon className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-indigo-600 transition"
                        target={item.title === 'Office' ? '_blank' : undefined}
                        rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 bg-indigo-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Business Hours</h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM CET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM CET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  We typically respond to inquiries within 24-48 business hours.
                </p>
              </div>
            </div>
            
            {/* Right column - Contact form */}
            <div className="lg:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-xl shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-800">How do you select AI tools to review?</h3>
                <span className="transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                <p>
                  We select tools based on several criteria: popularity, innovation, unique features, and market impact. 
                  We aim to cover a diverse range of AI tools across different categories and use cases. 
                  We also take user requests into consideration — if there's a tool you'd like us to review, 
                  feel free to suggest it via our contact form.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-xl shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-800">Do you accept sponsored reviews or paid promotions?</h3>
                <span className="transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                <p>
                  We maintain strict editorial independence. While we do use affiliate links that may generate commission, 
                  our reviews and ratings are never influenced by financial incentives. We do not accept payment for 
                  positive reviews or higher ratings. Any sponsored content is clearly labeled as such and is kept 
                  separate from our impartial reviews.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-xl shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-800">How often do you update your reviews?</h3>
                <span className="transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                <p>
                  We regularly update our reviews as AI tools evolve and new features are released. 
                  Major updates typically trigger a full re-review. We aim to keep our content current, 
                  especially for rapidly developing tools. Each review includes the date of the most recent update, 
                  so you know how current the information is.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-xl shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-800">Can we collaborate on a project or partnership?</h3>
                <span className="transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                <p>
                  We're open to partnerships that align with our mission of providing valuable, unbiased information 
                  about AI tools. This could include joint research, educational content, webinars, or other collaborative projects. 
                  Please use our contact form and select "Partnership Inquiry" to start the conversation.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-xl shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-800">I found an error in one of your reviews. How can I report it?</h3>
                <span className="transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                <p>
                  We strive for accuracy in all our content. If you've found an error or outdated information, 
                  please let us know through our contact form by selecting "Content Feedback" as the subject. 
                  Please provide specific details about the error and any supporting information. 
                  We appreciate your help in keeping our reviews accurate and up-to-date.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

    </main>
  );
}