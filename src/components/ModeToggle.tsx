import React from 'react';
import { PortfolioMode } from '../types';
import { Terminal, Feather } from 'lucide-react';

interface ModeToggleProps {
  mode: PortfolioMode;
  onToggle: (mode: PortfolioMode) => void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <div className="inline-flex items-center p-1.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-lg select-none bg-stone-900/80 border-cyan-500/30 text-white">
      <button
        onClick={() => onToggle('engineer')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
          mode === 'engineer'
            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-mono font-semibold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
        title="Switch to Engineer Mode (Logic, Architecture, Compilers)"
      >
        <Terminal className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-300" />
        <span>Engineer</span>
      </button>

      <button
        onClick={() => onToggle('artist')}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
          mode === 'artist'
            ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 shadow-md shadow-amber-900/30 font-serif italic font-semibold'
            : 'text-stone-400 hover:text-stone-200'
        }`}
        title="Switch to Artist Mode (Ink, Storytelling, Guitar)"
      >
        <Feather className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-300" />
        <span>Artisan</span>
      </button>
    </div>
  );
};
