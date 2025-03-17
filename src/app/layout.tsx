// src/app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: 'AI Comparator 2025',
  description: 'Discover the best AI tools and independent reviews.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add this meta tag to verify site in Google Search Console */}
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE" // Replace with your verification code from Google Search Console
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}