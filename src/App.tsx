import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { BackgroundAnimation } from './components/background-animation';
import { HomePage } from './components/pages/home';
import { AboutPage } from './components/pages/about';
import { ServicesPage } from './components/pages/services';
import { WhyUsPage } from './components/pages/why-us';

import { ContactPage } from './components/pages/contact';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'why-us':
        return <WhyUsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundAnimation />
      
      <div className="relative z-10">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderPage()}
        </main>
        
        <Footer />
      </div>
      
      <Toaster position="top-right" />
    </div>
  );
}