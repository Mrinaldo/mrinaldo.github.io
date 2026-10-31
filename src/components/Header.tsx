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
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
      isEngineer 
        ? 'bg-[#0b0f19]/85 border-cyan-900/30 text-stone-200' 
        : 'bg-[#faf7f2]/90 border-amber-900/10 text-stone-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${
            isEngineer 
              ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105' 
              : 'bg-amber-100 border border-amber-700/20 text-amber-900 group-hover:border-amber-700 group-hover:scale-105'
          }`}>
            {isEngineer ? <Terminal className="w-5 h-5" /> : <Feather className="w-5 h-5" />}
          </div>
          <div>
            <div className={`font-bold tracking-tight text-base md:text-lg flex items-center gap-2 ${
              isEngineer ? 'font-mono text-cyan-300' : 'font-serif text-stone-900'
            }`}>
              MRINAL DHARMIK
              <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded font-mono font-medium tracking-wider hidden sm:inline-block ${
                isEngineer ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' : 'bg-amber-100 text-amber-800 border border-amber-300'
              }`}>
                {isEngineer ? 'v2.6' : 'ink & quill'}
              </span>
            </div>
            <div className={`text-xs opacity-75 hidden sm:block ${isEngineer ? 'font-mono text-cyan-500/80' : 'font-serif italic text-stone-600'}`}>
              {isEngineer ? '// systems architect by day' : '— artist & scribe otherwise'}
            </div>
          </div>
        </a>

        {/* Center Mode Switcher */}
        <div className="flex items-center">
          <ModeToggle mode={mode} onToggle={onToggleMode} />
        </div>

        {/* Desktop Quick Nav & Action */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden lg:flex items-center gap-5 text-xs md:text-sm font-medium">
            {isEngineer ? (
              <>
                <a href="#systems" className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Systems</span>
                </a>
                <a href="#auronova" className="hover:text-cyan-400 transition-colors font-mono">
                  Enterprise
                </a>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors font-mono">
                  Stack
                </a>
              </>
            ) : (
              <>
                <a href="#inkwell" className="hover:text-amber-800 transition-colors flex items-center gap-1 font-serif">
                  <Palette className="w-3.5 h-3.5 text-amber-700" />
                  <span>The Inkwell</span>
                </a>
                <a href="#library" className="hover:text-amber-800 transition-colors flex items-center gap-1 font-serif">
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>The Library</span>
                </a>
                <a href="#fretboard" className="hover:text-amber-800 transition-colors flex items-center gap-1 font-serif">
                  <Music className="w-3.5 h-3.5 text-amber-700" />
                  <span>Acoustics</span>
                </a>
              </>
            )}
          </nav>

          <button
            onClick={onOpenContact}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all shadow-sm ${
              isEngineer
                ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 font-mono'
                : 'bg-stone-900 hover:bg-stone-800 text-stone-50 border border-stone-800 font-serif'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
};
