// src/app/api/ai-news/route.ts
import { NextResponse } from 'next/server';

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

// AI klíčová slova pro filtraci obsahu
const AI_KEYWORDS = [
  'artificial intelligence', 'machine learning', 'deep learning', 
  'neural network', 'language model', 'llm', 'gpt', 'chatgpt', 
  'claude', 'gemini', 'anthropic', 'openai', 'midjourney', 
  'stable diffusion', 'dall-e', 'ai model', 'generative ai', 
  'large language model', 'ai assistant', 'ai tool', 'ai research'
];

// Funkce pro kontrolu, zda je obsah relevantní pro AI
function isAIRelated(title: string, description: string = ''): boolean {
  const content = (title + ' ' + description).toLowerCase();
  return AI_KEYWORDS.some(keyword => content.includes(keyword.toLowerCase()));
}

// Pomocná funkce pro kategorizaci článků
function categorizeArticle(title: string, description: string): 'research' | 'business' | 'tools' | 'general' {
  const content = ((title || '') + ' ' + (description || '')).toLowerCase();
  
  if (!content) return 'general';
  
  if (content.includes('research') || content.includes('study') || content.includes('paper') || 
      content.includes('algorithm') || content.includes('model') || content.includes('technical') ||
      content.includes('scientists') || content.includes('researchers') || 
      content.includes('breakthrough') || content.includes('conference')) {
    return 'research';
  }
  
  if (content.includes('startup') || content.includes('funding') || content.includes('million') || 
      content.includes('billion') || content.includes('acquire') || content.includes('market') ||
      content.includes('investment') || content.includes('company') || content.includes('business') ||
      content.includes('partnership') || content.includes('revenue') || 
      content.includes('launch') || content.includes('announce')) {
    return 'business';
  }
  
  if (content.includes('tool') || content.includes('software') || content.includes('platform') || 
      content.includes('product') || content.includes('app') || content.includes('application') ||
      content.includes('feature') || content.includes('release') || content.includes('update') ||
      content.includes('version') || content.includes('available') || 
      content.includes('users') || content.includes('interface')) {
    return 'tools';
  }
  
  return 'general';
}

// Funkce pro získání dat z Google News RSS - pouze AI zprávy
async function fetchFromGoogleNews(): Promise<AINewsItem[]> {
  try {
    // Vyhledávací dotazy specifické pro AI
    const queries = [
      'artificial intelligence',
      'machine learning news',
      'chatgpt openai',
      'generative ai news',
      'ai technology'
    ];

    // Vezme všechny dotazy pro maximální pokrytí AI zpráv
    const results = await Promise.all(
      queries.map(async (query) => {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(
          `https://news.google.com/rss/search?q=${encodedQuery}&hl=en-US&gl=US&ceid=US:en`
        );
        
        if (!response.ok) {
          throw new Error(`Google News RSS responded with status: ${response.status}`);
        }
        
        return response.text();
      })
    );
    
    // Funkce pro zpracování XML
    const articles: AINewsItem[] = [];
    
    for (const xml of results) {
      const getValueBetweenTags = (xml: string, tag: string) => {
        const regex = new RegExp(`<${tag}[^>]*>(.*?)<\\/${tag}>`, 's');
        const match = xml.match(regex);
        return match ? match[1] : '';
      };
      
      // Najdeme všechny <item> tagy
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      const items = [...xml.matchAll(itemRegex)].map(match => match[1]);
      
      for (let i = 0; i < Math.min(items.length, 8); i++) {
        const item = items[i];
        const title = getValueBetweenTags(item, 'title').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        const link = getValueBetweenTags(item, 'link');
        const pubDate = getValueBetweenTags(item, 'pubDate');
        const description = getValueBetweenTags(item, 'description').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        const source = getValueBetweenTags(item, 'source') || 'Google News';
        
        // Přidáme článek pouze pokud se týká AI
        if (isAIRelated(title, description)) {
          articles.push({
            id: `gnews-${Date.now()}-${articles.length}`,
            title: title || 'No title available',
            summary: description || 'No description available',
            source: source,
            sourceUrl: link || '#',
            publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
            category: categorizeArticle(title, description)
          });
        }
      }
    }
    
    return articles;
  } catch (error) {
    console.error('Error fetching from Google News RSS:', error);
    return [];
  }
}

// Funkce pro získání dat ze specializovaných AI RSS zdrojů
async function fetchFromAISpecificSources(): Promise<AINewsItem[]> {
  try {
    // Specializované RSS zdroje o AI
    const sources = [
      {
        url: 'https://www.reddit.com/r/artificial/.rss',
        name: 'r/artificial'
      },
      {
        url: 'https://www.reddit.com/r/MachineLearning/.rss',
        name: 'r/MachineLearning'
      },
      {
        url: 'https://medium.com/feed/topic/artificial-intelligence',
        name: 'Medium AI'
      }
    ];

    const results = await Promise.all(
      sources.map(async (source) => {
        try {
          const response = await fetch(source.url);
          
          if (!response.ok) {
            throw new Error(`Source ${source.name} responded with status: ${response.status}`);
          }
          
          const xml = await response.text();
          return { xml, source: source.name };
        } catch (error) {
          console.error(`Error fetching from ${source.name}:`, error);
          return { xml: '', source: source.name };
        }
      })
    );
    
    // Funkce pro zpracování XML
    const articles: AINewsItem[] = [];
    
    for (const { xml, source } of results) {
      if (!xml) continue;
      
      const getValueBetweenTags = (xml: string, tag: string) => {
        const regex = new RegExp(`<${tag}[^>]*>(.*?)<\\/${tag}>`, 's');
        const match = xml.match(regex);
        return match ? match[1] : '';
      };
      
      // Najdeme všechny <item> nebo <entry> tagy (RSS nebo Atom)
      const itemRegex = /<(?:item|entry)>([\s\S]*?)<\/(?:item|entry)>/g;
      const items = [...xml.matchAll(itemRegex)].map(match => match[1]);
      
      for (let i = 0; i < Math.min(items.length, 5); i++) {
        const item = items[i];
        
        // Zpracování různých formátů (RSS vs Atom)
        const title = getValueBetweenTags(item, 'title').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        const link = getValueBetweenTags(item, 'link') || getValueBetweenTags(item, 'guid');
        const pubDateRaw = getValueBetweenTags(item, 'pubDate') || getValueBetweenTags(item, 'published') || getValueBetweenTags(item, 'updated');
        const description = (getValueBetweenTags(item, 'description') || getValueBetweenTags(item, 'content') || getValueBetweenTags(item, 'summary')).replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        
        // Přidáme článek (už nemusíme filtrovat, protože zdroje jsou AI-specifické)
        articles.push({
          id: `aispecific-${Date.now()}-${articles.length}`,
          title: title || 'No title available',
          summary: description || 'No description available',
          source: source,
          sourceUrl: link || '#',
          publishedAt: pubDateRaw ? new Date(pubDateRaw).toISOString() : new Date().toISOString(),
          category: categorizeArticle(title, description)
        });
      }
    }
    
    return articles;
  } catch (error) {
    console.error('Error fetching from AI specific sources:', error);
    return [];
  }
}

// Funkce pro získání dat z GitHub - AI open source projekty
async function fetchFromGitHub(): Promise<AINewsItem[]> {
  try {
    // Získáme trending AI repozitáře
    const response = await fetch(
      'https://api.github.com/search/repositories?q=topic:artificial-intelligence+topic:machine-learning&sort=updated&order=desc',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'AI-News-Aggregator'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Zpracujeme výsledky
    return data.items.slice(0, 5).map((repo: any) => ({
      id: `github-${repo.id}`,
      title: `${repo.name}: ${repo.description || 'New AI project on GitHub'}`,
      summary: `${repo.description || 'No description available'} | Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count}`,
      source: 'GitHub',
      sourceUrl: repo.html_url,
      publishedAt: repo.updated_at,
      category: 'tools'
    }));
  } catch (error) {
    console.error('Error fetching from GitHub:', error);
    return [];
  }
}

// Funkce pro získání dat z AI specializovaných webů
async function fetchFromAIWebsites(): Promise<AINewsItem[]> {
  try {
    // Seznam webů specializovaných na AI zprávy, které poskytují RSS
    const websites = [
      { url: 'https://www.marktechpost.com/category/latest-ai-technology-news/feed/', source: 'MarkTechPost' },
      { url: 'https://www.infoworld.com/category/artificial-intelligence/index.rss', source: 'InfoWorld AI' },
      { url: 'https://www.artificialintelligence-news.com/feed/', source: 'AI News' }
    ];
    
    // Náhodně vybere dva weby, abychom měli pestrou škálu zdrojů
    const selectedWebsites = websites.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    const results = await Promise.all(
      selectedWebsites.map(async (website) => {
        try {
          const response = await fetch(website.url);
          
          if (!response.ok) {
            throw new Error(`${website.source} responded with status: ${response.status}`);
          }
          
          const xml = await response.text();
          return { xml, source: website.source };
        } catch (error) {
          console.error(`Error fetching from ${website.source}:`, error);
          return { xml: '', source: website.source };
        }
      })
    );
    
    // Funkce pro zpracování XML
    const articles: AINewsItem[] = [];
    
    for (const { xml, source } of results) {
      if (!xml) continue;
      
      const getValueBetweenTags = (xml: string, tag: string) => {
        const regex = new RegExp(`<${tag}[^>]*>(.*?)<\\/${tag}>`, 's');
        const match = xml.match(regex);
        return match ? match[1] : '';
      };
      
      // Extract image from content
      const getImageFromContent = (content: string): string | undefined => {
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const match = content.match(imgRegex);
        return match ? match[1] : undefined;
      };
      
      // Najdeme všechny <item> tagy
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      const items = [...xml.matchAll(itemRegex)].map(match => match[1]);
      
      for (let i = 0; i < Math.min(items.length, 5); i++) {
        const item = items[i];
        const title = getValueBetweenTags(item, 'title').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        const link = getValueBetweenTags(item, 'link');
        const pubDate = getValueBetweenTags(item, 'pubDate');
        const content = getValueBetweenTags(item, 'content:encoded') || getValueBetweenTags(item, 'description');
        const description = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        const imageUrl = getImageFromContent(content);
        
        // Přidáme články, které se týkají AI (většina by měla být, ale pro jistotu filtrujeme)
        if (isAIRelated(title, description)) {
          articles.push({
            id: `aisite-${Date.now()}-${articles.length}`,
            title: title || 'No title available',
            summary: description.substring(0, 200) + (description.length > 200 ? '...' : '') || 'No description available',
            source: source,
            sourceUrl: link || '#',
            publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
            imageUrl: imageUrl,
            category: categorizeArticle(title, description)
          });
        }
      }
    }
    
    return articles;
  } catch (error) {
    console.error('Error fetching from AI websites:', error);
    return [];
  }
}

// Ukázková data jako fallback
function getMockData(): AINewsItem[] {
  return [
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
}

// Hlavní handler pro API endpoint
export async function GET() {
  try {
    // Pokusíme se získat data z více AI-specifických zdrojů současně
    const [googleNewsData, aiSpecificData, githubData, aiWebsitesData] = await Promise.all([
      fetchFromGoogleNews().catch(() => []),
      fetchFromAISpecificSources().catch(() => []),
      fetchFromGitHub().catch(() => []),
      fetchFromAIWebsites().catch(() => [])
    ]);
    
    // Sloučíme data ze všech zdrojů
    let allArticles = [...googleNewsData, ...aiSpecificData, ...githubData, ...aiWebsitesData];
    
    // Ještě jednou se ujistíme, že články se týkají AI
    allArticles = allArticles.filter(article => 
      isAIRelated(article.title, article.summary)
    );
    
    // Pokud nemáme žádné články, vrátíme ukázková data
    if (allArticles.length === 0) {
      console.log("No AI related news found, returning mock data");
      allArticles = getMockData();
    }
    
    // Seřadíme podle data publikování (od nejnovějších)
    allArticles.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    // Odstraníme duplikáty podle titulků (někdy stejná zpráva přichází z více zdrojů)
    const seen = new Set();
    const uniqueArticles = allArticles.filter(article => {
      const normalizedTitle = article.title.toLowerCase().replace(/\W+/g, ' ').trim();
      const duplicate = seen.has(normalizedTitle);
      seen.add(normalizedTitle);
      return !duplicate;
    });
    
    // Vrátíme data jako JSON
    return NextResponse.json(uniqueArticles);
  } catch (error) {
    console.error('Error in AI news API route:', error);
    // V případě chyby vrátíme mock data
    return NextResponse.json(getMockData());
  }
}