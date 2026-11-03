import React, { useState, useEffect } from 'react';
import { PortfolioMode, ThemeId } from './types';
import { ThemeSelector } from './components/ThemeSelector';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EngineeringSection } from './components/EngineeringSection';
import { ArtSection } from './components/ArtSection';
import { ReadingSection } from './components/ReadingSection';
import { MusicSection } from './components/MusicSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state: 'atelier' (default) | 'obsidian' | 'gazette'
  const [theme, setTheme] = useState<ThemeId>(() => {
    const saved = localStorage.getItem('mrinaldo_portfolio_theme');
    return (saved === 'atelier' || saved === 'obsidian' || saved === 'gazette') 
      ? (saved as ThemeId) 
      : 'atelier';
  });

  // Perspective mode: 'engineer' | 'artist'
  const [mode, setMode] = useState<PortfolioMode>(() => {
    const saved = localStorage.getItem('mrinaldo_portfolio_mode');
    return (saved === 'artist' || saved === 'engineer') ? saved : 'engineer';
  });

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mrinaldo_portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('mrinaldo_portfolio_mode', mode);
  }, [mode]);

  // Keyboard shortcut: 'E' for engineer, 'A' for artist
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key.toLowerCase() === 'e') {
        setMode('engineer');
      } else if (e.key.toLowerCase() === 'a') {
        setMode('artist');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isEngineer = mode === 'engineer';

  return (
    <div className={`theme-${theme} min-h-screen bg-subtle-grain transition-colors duration-300 font-sans`}>
      {/* Design System & Palette Selector Banner */}
      <ThemeSelector 
        currentTheme={theme} 
        onSelectTheme={setTheme} 
      />

      <Header 
        mode={mode} 
        onToggleMode={setMode} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <main>
        <Hero 
          mode={mode} 
          onOpenContact={() => setIsContactOpen(true)} 
          onToggleMode={setMode} 
        />

        {/* Dynamic section ordering according to active perspective */}
        {isEngineer ? (
          <>
            <EngineeringSection mode={mode} />
            <ArtSection mode={mode} />
            <ReadingSection mode={mode} />
            <MusicSection mode={mode} />
          </>
        ) : (
          <>
            <ArtSection mode={mode} />
            <ReadingSection mode={mode} />
            <MusicSection mode={mode} />
            <EngineeringSection mode={mode} />
          </>
        )}
      </main>

      <Footer 
        mode={mode} 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        mode={mode} 
      />
    </div>
  );
};

export default App;
