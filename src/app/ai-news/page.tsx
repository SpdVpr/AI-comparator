'use client';

import React, { useState, useEffect } from 'react';
import { Clock, RefreshCw, Search, Filter, ExternalLink, Calendar } from 'lucide-react';

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

export default function AiNewsPage() {
  const [news, setNews] = useState<AINewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<AINewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Funkce pro formátování data
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', { 
        year: 'numeric',
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(date);
    } catch (e) {
      return "Unknown date";
    }
  };

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

  // Maximálně vylepšená funkce pro čištění textu - odstraní úplně všechno nežádoucí
  const extractCleanText = (text: string): string => {
    if (!text || typeof text !== 'string') return '';

    // Pokud jde o HTML, který obsahuje běžné značky, extrahujeme jen čistý text
    if (text.includes('<') && text.includes('>')) {
      // Nejprve se zbavíme HTML komentářů a jejich obsahu
      let cleaned = text.replace(/<!--[\s\S]*?-->/g, '');
      
      // Zbavit se celých div bloků a jejich obsahu
      cleaned = cleaned.replace(/<div[^>]*>[\s\S]*?<\/div>/gi, '');
      
      // Zbavit se tabulek a jejich obsahu
      cleaned = cleaned.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, '');
      
      // Zbavit se odkazů ale zachovat jejich text
      cleaned = cleaned.replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, '$1');
      
      // Odstranit všechny zbývající HTML tagy
      cleaned = cleaned.replace(/<[^>]*>/g, '');
      
      // Odstranit Markdown odkazy [text](url)
      cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      
      // Odstranit URL adresy
      cleaned = cleaned.replace(/https?:\/\/\S+/g, '');
      cleaned = cleaned.replace(/www\.\S+/g, '');
      
      // Odstranit atributy HTML tagů které mohly zůstat
      cleaned = cleaned.replace(/(\w+)=(["'])[^"']*\2/g, '');
      
      // Odstranit HTML entity
      cleaned = cleaned.replace(/&quot;/g, '"')
                      .replace(/&amp;/g, '&')
                      .replace(/&lt;/g, '<')
                      .replace(/&gt;/g, '>')
                      .replace(/&nbsp;/g, ' ')
                      .replace(/&#39;/g, "'")
                      .replace(/&rsquo;/g, "'")
                      .replace(/&ldquo;/g, '"')
                      .replace(/&rdquo;/g, '"');
      
      // Odstranit nadbytečné mezery
      cleaned = cleaned.replace(/\s+/g, ' ').trim();
      
      // Odstranit specifické fragmenty které se opakují
      cleaned = cleaned.replace(/SC_OFF/g, '')
                      .replace(/SC_ON/g, '')
                      .replace(/href=/g, '')
                      .replace(/target=_blank/g, '')
                      .replace(/font color=#f6f6f6/g, '')
                      .replace(/font/g, '');
      
      // Výsledný vyčištěný text
      return cleaned;
    }
    
    // Pokud nejde o HTML, vrátíme původní text (pro jistotu také lehce vyčištěný)
    return text.replace(/\s+/g, ' ').trim();
  };

  // Funkce pro vytvoření kratšího popisu z textu
  const createSummary = (text: string, length: number = 150): string => {
    if (!text || text.length <= length) return text;
    
    // Najdeme vhodné místo pro ukončení textu (ideálně na konci věty nebo za čárkou)
    let cutoff = text.lastIndexOf('.', length);
    if (cutoff === -1 || cutoff < length - 30) {
      cutoff = text.lastIndexOf(' ', length);
    }
    
    if (cutoff === -1) cutoff = length;
    
    return text.substring(0, cutoff) + '...';
  };

  // Funkce pro načtení novinek
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Začneme s mock daty pro zajištění rychlého vykreslení stránky
      const mockData: AINewsItem[] = [
        {
          id: 'mock-1',
          title: 'OpenAI Releases GPT-5 with Enhanced Reasoning Capabilities',
          summary: 'The new model demonstrates significant improvements in logical reasoning and problem-solving abilities compared to its predecessors.',
          source: 'AI Insider',
          sourceUrl: 'https://example.com/news/1',
          publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          category: 'research'
        },
        {
          id: 'mock-2',
          title: 'Google DeepMind Announces Breakthrough in Protein Folding Prediction',
          summary: 'New AI system can predict protein structures with unprecedented accuracy, potentially revolutionizing drug discovery.',
          source: 'Tech Chronicle',
          sourceUrl: 'https://example.com/news/2',
          publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
          category: 'research'
        },
        {
          id: 'mock-3',
          title: 'Microsoft Acquires AI Startup for $2.5 Billion',
          summary: 'The acquisition aims to enhance Microsoft\'s AI capabilities in natural language processing and computer vision.',
          source: 'Business Tech',
          sourceUrl: 'https://example.com/news/3',
          publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
          category: 'business'
        },
        {
          id: 'mock-4',
          title: 'New AI Tool Helps Writers Overcome Creative Blocks',
          summary: 'The tool uses advanced language models to provide contextually relevant suggestions for writers struggling with creative blocks.',
          source: 'Creative Tech',
          sourceUrl: 'https://example.com/news/4',
          publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
          category: 'tools'
        },
        {
          id: 'mock-5',
          title: 'AI Ethics Board Proposes New Guidelines for Responsible AI Development',
          summary: 'The proposed guidelines focus on transparency, fairness, and accountability in AI systems.',
          source: 'AI Ethics Journal',
          sourceUrl: 'https://example.com/news/5',
          publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          category: 'general'
        }
      ];
      
      // Nastavíme mock data pro rychlé zobrazení
      setNews(mockData);
      setFilteredNews(mockData);
      setLastUpdated(new Date());
      
      // Poté se pokusíme načíst skutečná data
      try {
        const response = await fetch('/api/ai-news');
        
        if (response.ok) {
          const data = await response.json();
          
          if (Array.isArray(data) && data.length > 0) {
            // Zpracování dat a čištění textů s mnohem lepším algoritmem
            const processedData = data.map((item: any, index: number) => {
              // Nejprve vyčistíme titulky a popisky
              const cleanTitle = extractCleanText(item.title || '');
              const cleanSummary = extractCleanText(item.summary || '');
              
              // Vytvoříme oříznutý popisek vhodné délky
              const formattedSummary = createSummary(cleanSummary, 200);
              
              return {
                id: item.id || `news-${index}-${Date.now()}`,
                title: cleanTitle || 'Untitled Article',
                summary: formattedSummary || 'No description available',
                source: item.source || 'Unknown Source',
                sourceUrl: item.sourceUrl || '#',
                publishedAt: item.publishedAt || new Date().toISOString(),
                category: item.category || 'general'
              };
            });
            
            // Filtrujeme nevalidní položky
            const validData = processedData.filter(item => 
              item.title && 
              item.title.length > 5 && 
              item.title !== 'Untitled Article' &&
              !item.title.includes("undefined") &&
              !item.title.includes("SC_OFF") &&
              !item.title.includes("SC_ON") &&
              !item.title.includes("<") &&
              !item.title.includes(">") &&
              !item.summary.includes("<") &&
              !item.summary.includes(">")
            );
            
            if (validData.length > 0) {
              setNews(validData);
              setFilteredNews(validData);
              setLastUpdated(new Date());
            }
          }
        }
      } catch (apiErr) {
        console.error("Error fetching from API, using mock data:", apiErr);
        // Pokud se načítání skutečných dat nezdaří, ponecháme mock data
      }
    } catch (err) {
      console.error('Error in fetchNews:', err);
      setError('Failed to fetch news. Using demo content instead.');
    } finally {
      setLoading(false);
    }
  };

  // Filtrování zpráv
  useEffect(() => {
    if (!news.length) return;
    
    let result = [...news];
    
    // Filtrování podle vyhledávání
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        item => 
          (item.title?.toLowerCase() || '').includes(query) || 
          (item.summary?.toLowerCase() || '').includes(query)
      );
    }
    
    // Filtrování podle kategorie
    if (selectedCategory) {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    setFilteredNews(result);
  }, [news, searchQuery, selectedCategory]);

  // Načtení novinek při prvním vykreslení komponenty
  useEffect(() => {
    fetchNews();
  }, []);

  // Manuální obnovení novinek
  const handleRefresh = () => {
    fetchNews();
  };

  // Reset filtrů
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
              <span className="text-gray-700">📰</span>
            </div>
            Latest AI News & Updates
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Stay updated with the latest developments in artificial intelligence. 
            From groundbreaking research to industry trends and new AI tool releases, 
            we bring you fresh AI news daily.
          </p>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="flex items-center flex-1 relative">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI news..."
                className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="text-gray-500 flex items-center whitespace-nowrap">
                <Filter size={16} className="mr-1" /> Filter:
              </span>
              {['research', 'business', 'tools', 'general'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                    selectedCategory === category
                      ? getCategoryColor(category)
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={resetFilters}
                  className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 whitespace-nowrap"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Latest Updated Info */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-500 flex items-center">
            {lastUpdated && (
              <>
                <Calendar size={16} className="mr-1" />
                <span>Updated: {lastUpdated.toLocaleString()}</span>
              </>
            )}
          </div>
          <button 
            onClick={handleRefresh} 
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition text-sm"
            disabled={loading}
          >
            <RefreshCw size={16} className={`mr-1 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        {/* News Count */}
        <div className="mb-6 text-sm text-gray-500">
          Showing {filteredNews.length} {filteredNews.length === 1 ? 'article' : 'articles'}
          {(searchQuery || selectedCategory) ? ' based on filters' : ''}
        </div>
        
        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 h-64 animate-pulse">
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
        ) : (
          <>
            {/* No Results */}
            {filteredNews.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No matching articles found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria.</p>
                <button 
                  onClick={resetFilters}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* News Grid */
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredNews.map((item, index) => (
                  <article
                    key={item.id || `article-${index}`}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col h-full"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(item.category)}`}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                        <span className="text-xs text-gray-500">{getRelativeTime(item.publishedAt)}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2 leading-snug">
                        {item.title || "Untitled Article"}
                      </h3>
                      {item.summary && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {item.summary}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto text-sm">
                      <span className="text-gray-500 text-xs">{formatDate(item.publishedAt)}</span>
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
          </>
        )}
      </div>
    </div>
  );
}