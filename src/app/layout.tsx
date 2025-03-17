import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata = {
  title: 'AI Comparator 2025',
  description: 'Discover the best AI tools and independent reviews.',
  icons: {
    icon: '/favicon.ico', // základní favicon
    apple: '/apple-icon.png', // pro Apple zařízení
    shortcut: '/favicon-16x16.png', // malá ikona pro některé prohlížeče
  },
};

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