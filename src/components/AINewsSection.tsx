'use client';

import React, { useState, useEffect } from 'react';
import { Clock, RefreshCw, ExternalLink } from 'lucide-react';

// Typ pro zprávu/článek
type AINewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  imageUrl?: string;
  category: 'research' | 'business' | 'tools' | 'general';
};

export default function AINewsSection() {
  const [news, setNews] = useState<AINewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Funkce pro získání relativního času
  const getRelativeTime = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
      
      if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
      }
      
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
      }
      
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
      }
      
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    } catch (e) {
      return "Recently";
    }
  };

  // Funkce pro získání barvy kategorie
  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'research':
        return 'bg-indigo-100 text-indigo-800';
      case 'business':
        return 'bg-green-100 text-green-800';
      case 'tools':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Hluboké čištění textu
  const sanitizeText = (text: string): string => {
    if (!text || typeof text !== 'string') return '';
    
    // Odstraníme HTML tagy
    let cleaned = text.replace(/<[^>]*>/g, ' ');
    
    // Odstraníme HTML entity
    cleaned = cleaned.replace(/&quot;/g, '"')
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&nbsp;/g, ' ')
                    .replace(/&#39;/g, "'")
                    .replace(/\\"/g, '"')
                    .replace(/\\'/g, "'")
                    .replace(/\\n/g, ' ');
    
    // Odstraníme nadbytečné mezery a další nepotřebné znaky
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    
    // Odstraníme zbytky JSON a URL struktury
    cleaned = cleaned.replace(/{|}|\[|\]|\\|\//g, ' ');
    cleaned = cleaned.replace(/(\w+:)|(")/g, ' ');
    
    return cleaned;
  };

  // Funkce pro načtení novinek
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/ai-news');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      
      let data = await response.json();
      
      // Ověření a čištění dat
      if (!Array.isArray(data)) {
        console.error("Data is not an array:", data);
        data = [];
      }
      
      // Čištění textů
      const processedData = data.map((item: AINewsItem) => ({
        ...item,
        title: sanitizeText(item.title || ''),
        summary: sanitizeText(item.summary || '')
      }));
      
      // Filtrujeme položky s prázdnými titulky
      const validData = processedData.filter(item => item.title && item.title.length > 3);
      
      setNews(validData);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Načtení novinek při prvním vykreslení komponenty
  useEffect(() => {
    fetchNews();
    
    // Automatické obnovení každých 30 minut
    const refreshInterval = setInterval(() => {
      fetchNews();
    }, 30 * 60 * 1000);
    
    return () => clearInterval(refreshInterval);
  }, []);

  // Manuální obnovení novinek
  const handleRefresh = () => {
    fetchNews();
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center mr-3">
              <span className="text-gray-700">📰</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Latest AI News & Updates
            </h2>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            {lastUpdated && (
              <div className="flex items-center mr-4">
                <Clock size={16} className="mr-1" />
                <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
            )}
            <button 
              onClick={handleRefresh} 
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
              disabled={loading}
            >
              <RefreshCw size={16} className={`mr-1 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 h-64 animate-pulse">
                <div className="bg-gray-200 h-6 w-3/4 rounded mb-4"></div>
                <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-2/3 rounded mb-4"></div>
                <div className="flex justify-between mt-auto">
                  <div className="bg-gray-200 h-4 w-20 rounded"></div>
                  <div className="bg-gray-200 h-4 w-24 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : news.length === 0 ? (
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No news available</h3>
            <p className="text-gray-500 mb-4">Try refreshing or check back later.</p>
            <button 
              onClick={handleRefresh}
              className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600"
            >
              Refresh News
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 6).map((item, index) => (
              <article
                key={item.id || index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col h-full"
              >
                <div>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-3 ${getCategoryColor(item.category)}`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2 leading-tight">
                    {item.title || "Untitled Article"}
                  </h3>
                  {item.summary && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.summary}
                    </p>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-auto text-sm">
                  <span className="text-gray-500">{getRelativeTime(item.publishedAt)}</span>
                  <a 
                    href={item.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
                  >
                    {item.source || 'Read More'} <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="text-center mt-10">
          <a href="/ai-news" className="inline-block bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition">
            View All AI News
          </a>
        </div>
      </div>
    </section>
  );
}