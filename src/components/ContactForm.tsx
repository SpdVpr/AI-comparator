'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Check for simulated success (email contains "success")
      if (formData.email.toLowerCase().includes('success')) {
        setFormStatus('success');
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Simulate error for testing
        setFormStatus('error');
        setFormError('There was an error submitting your message. Please try again later or contact us directly via email.');
      }
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
      
      {/* Success message */}
      {formStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start">
          <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h3 className="font-medium text-green-800">Message sent successfully!</h3>
            <p className="text-green-700">Thank you for contacting us. We'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}
      
      {/* Error message */}
      {formStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
          <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h3 className="font-medium text-red-800">There was a problem</h3>
            <p className="text-red-700">{formError}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="John Doe"
            />
          </div>
          
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        {/* Subject field */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="">Select a topic...</option>
            <option value="General Question">General Question</option>
            <option value="Tool Review Request">Tool Review Request</option>
            <option value="Partnership Inquiry">Partnership Inquiry</option>
            <option value="Content Feedback">Content Feedback</option>
            <option value="Career Opportunity">Career Opportunity</option>
            <option value="Media Inquiry">Media Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        {/* Message field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        
        {/* Privacy policy agreement */}
        <div className="mb-6">
          <div className="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <Link href="/privacy-policy" className="text-indigo-600 hover:text-indigo-800">
                privacy policy
              </Link>
              . We'll never share your information with third parties.
            </label>
          </div>
        </div>
        
        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className={`flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition ${
              formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {formStatus === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}