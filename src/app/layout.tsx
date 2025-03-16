import './globals.css';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AI Comparator 2025',
  description: 'Discover the best AI tools and independent reviews.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}