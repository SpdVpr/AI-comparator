import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { headers } from 'next/headers';

export async function generateMetadata({ params }) {
  // Získání aktuální cesty
  const headersList = headers();
  const url = headersList.get('x-url') || '';
  const pathname = url.split('aimodelsrank.com')[1] || '';
  
  return {
    title: 'AI Comparator 2025',
    description: 'Discover the best AI tools and independent reviews.',
    icons: {
      icon: '/favicon.ico', // základní favicon
      apple: '/apple-icon.png', // pro Apple zařízení
      shortcut: '/favicon-16x16.png', // malá ikona pro některé prohlížeče
    },
    alternates: {
      canonical: `https://www.aimodelsrank.com${pathname}`,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}