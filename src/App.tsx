import React, { useState, useEffect } from 'react';
import { PortfolioMode } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EngineeringSection } from './components/EngineeringSection';
import { ArtSection } from './components/ArtSection';
import { ReadingSection } from './components/ReadingSection';
import { MusicSection } from './components/MusicSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [mode, setMode] = useState<PortfolioMode>(() => {
    const saved = localStorage.getItem('mrinaldo_portfolio_mode');
    return (saved === 'artist' || saved === 'engineer') ? saved : 'engineer';
  });

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mrinaldo_portfolio_mode', mode);
  }, [mode]);

  // Keyboard shortcut: 'E' for engineer, 'A' for artist
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
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
    <div className={`min-h-screen transition-all duration-700 ${
      isEngineer 
        ? 'bg-grid-blueprint text-stone-200' 
        : 'bg-paper-texture text-stone-900'
    }`}>
      {/* Keyboard shortcut hint banner */}
      <div className={`py-1 text-center text-[10px] tracking-wider uppercase font-mono transition-colors duration-500 border-b ${
        isEngineer 
          ? 'bg-[#060a12] border-cyan-950 text-cyan-600' 
          : 'bg-[#ede6d8] border-amber-900/10 text-stone-600'
      }`}>
        Dual Frequency Mode • Press <kbd className="px-1 py-0.5 rounded bg-black/20 font-bold">E</kbd> for Engineer • <kbd className="px-1 py-0.5 rounded bg-black/20 font-bold">A</kbd> for Artisan
      </div>

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

        {/* Dynamic section ordering according to active mode */}
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
