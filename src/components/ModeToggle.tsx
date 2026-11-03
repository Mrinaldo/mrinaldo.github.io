import React from 'react';
import { PortfolioMode } from '../types';
import { Terminal, Feather } from 'lucide-react';

interface ModeToggleProps {
  mode: PortfolioMode;
  onToggle: (mode: PortfolioMode) => void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <div className="inline-flex items-center p-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-card-muted)] transition-all duration-300 shadow-sm select-none">
      <button
        onClick={() => onToggle('engineer')}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
          mode === 'engineer'
            ? 'bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm font-semibold'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
        title="Engineer Perspective (Logic, Systems, Compilers)"
      >
        <Terminal className="w-3.5 h-3.5" />
        <span>Engineer</span>
      </button>

      <button
        onClick={() => onToggle('artist')}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
          mode === 'artist'
            ? 'bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm font-semibold'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
        title="Artisan Perspective (Ink, Prose, Strings)"
      >
        <Feather className="w-3.5 h-3.5" />
        <span>Artisan</span>
      </button>
    </div>
  );
};
