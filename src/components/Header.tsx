import React from 'react';
import { PortfolioMode } from '../types';
import { ModeToggle } from './ModeToggle';
import { Terminal, Feather, Send, BookOpen, Music, Code2, Palette } from 'lucide-react';

interface HeaderProps {
  mode: PortfolioMode;
  onToggleMode: (mode: PortfolioMode) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, onToggleMode, onOpenContact }) => {
  const isEngineer = mode === 'engineer';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg-card)]/90 border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm bg-[var(--bg-card-muted)] border border-[var(--border-color)] text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:scale-105">
            {isEngineer ? <Terminal className="w-5 h-5" /> : <Feather className="w-5 h-5" />}
          </div>
          <div>
            <div className="font-bold tracking-tight text-base md:text-lg flex items-center gap-2 font-heading text-[var(--text-primary)]">
              MRINAL DHARMIK
              <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-mono font-medium tracking-wider hidden sm:inline-block bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30">
                folio
              </span>
            </div>
            <div className="text-xs text-[var(--text-muted)] hidden sm:block font-mono">
              {isEngineer ? '// software engineer by day' : '— artist & scribe otherwise'}
            </div>
          </div>
        </a>

        {/* Center Mode Switcher */}
        <div className="flex items-center">
          <ModeToggle mode={mode} onToggle={onToggleMode} />
        </div>

        {/* Desktop Quick Nav & Action */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden lg:flex items-center gap-5 text-xs md:text-sm font-medium text-[var(--text-secondary)]">
            <a href="#systems" className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Systems</span>
            </a>
            <a href="#inkwell" className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 font-mono">
              <Palette className="w-3.5 h-3.5" />
              <span>Inkwell</span>
            </a>
            <a href="#library" className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Library</span>
            </a>
            <a href="#fretboard" className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 font-mono">
              <Music className="w-3.5 h-3.5" />
              <span>Acoustics</span>
            </a>
          </nav>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all shadow-sm bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 font-mono"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
};
