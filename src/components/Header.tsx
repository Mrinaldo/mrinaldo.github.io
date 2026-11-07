import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
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
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-[var(--text-secondary)] uppercase">
            <a href="#works" className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors">
              (01) Works
            </a>
            <a href="#studio" className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors">
              (02) Studio
            </a>
            <a href="#reading" className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors">
              (03) Library
            </a>
            <a href="#acoustics" className="hover:text-[var(--text-primary)] hover:underline underline-offset-8 transition-colors">
              (04) Chords
            </a>
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
