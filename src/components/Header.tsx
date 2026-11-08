import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

const NAV_ITEMS = [
  { id: 'works', label: 'Works', href: '#works' },
  { id: 'studio', label: 'Studio', href: '#studio' },
  { id: 'reading', label: 'Library', href: '#reading' },
  { id: 'acoustics', label: 'Chords', href: '#acoustics' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page threshold
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection('acoustics');
        return;
      }

      // Check sections from bottom to top
      const scrollPosition = scrollY + 160;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }

      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-page)]/85 border-b border-editorial transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-6">
          <a href="#" className="group">
            <span className="font-display font-bold text-sm tracking-widest text-[var(--text-primary)] uppercase group-hover:text-[var(--accent)] transition-colors">
              MRINAL DHARMIK
            </span>
          </a>
        </div>

        {/* Minimal Navigation & Actions */}
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-xs font-mono tracking-wider uppercase">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[var(--accent)] font-bold bg-[var(--accent-subtle)] border border-[var(--accent)]/30 shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] border border-transparent'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-[var(--accent)] transition-all duration-200 ${
                    isActive ? 'scale-100 opacity-100 animate-pulse' : 'scale-0 opacity-0 -mr-1.5 w-0'
                  }`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[var(--accent)] text-white font-bold hover:opacity-90 transition-all shadow-sm"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
