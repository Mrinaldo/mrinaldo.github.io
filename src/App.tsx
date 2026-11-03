import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { EngineeringSection } from './components/EngineeringSection';
import { ArtSection } from './components/ArtSection';
import { ReadingSection } from './components/ReadingSection';
import { MusicSection } from './components/MusicSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-300 font-sans selection:bg-[var(--accent)]/25 selection:text-[var(--accent)]">
      {/* Luxury Awwwards-grade Interactive Cursor */}
      <CustomCursor />

      <Header 
        onOpenContact={() => setIsContactOpen(true)} 
      />

      <main>
        <Hero 
          onOpenContact={() => setIsContactOpen(true)} 
        />
        <Marquee />
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
