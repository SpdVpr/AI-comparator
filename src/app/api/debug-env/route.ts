// src/app/api/debug-env/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Bezpečná verze - nezveřejňuje celý klíč
  const apiKeyStatus = {
    NEWS_API_KEY: {
      exists: !!process.env.NEWS_API_KEY,
      firstFiveChars: process.env.NEWS_API_KEY ? process.env.NEWS_API_KEY.substring(0, 5) : null,
      length: process.env.NEWS_API_KEY ? process.env.NEWS_API_KEY.length : 0
    }
  };
  
  return NextResponse.json({
    environment: process.env.NODE_ENV,
    apiKeys: apiKeyStatus,
    timestamp: new Date().toISOString()
  });
}