import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EngineeringSection } from './components/EngineeringSection';
import { ArtSection } from './components/ArtSection';
import { ReadingSection } from './components/ReadingSection';
import { MusicSection } from './components/MusicSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('mrinaldo_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mrinaldo_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${theme === 'light' ? 'theme-light' : ''} min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300 font-sans selection:bg-[var(--accent)]/30`}>
      <Header 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <main>
        <Hero 
          onOpenContact={() => setIsContactOpen(true)} 
        />
        <EngineeringSection />
        <ArtSection />
        <ReadingSection />
        <MusicSection />
      </main>

      <Footer 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        mode="engineer"
      />
    </div>
  );
};

export default App;
