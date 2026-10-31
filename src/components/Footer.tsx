import React from 'react';
import { PortfolioMode } from '../types';
import { Feather, Terminal, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

interface FooterProps {
  mode: PortfolioMode;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ mode, onOpenContact }) => {
  const isEngineer = mode === 'engineer';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${
      isEngineer 
        ? 'bg-[#090d16] border-cyan-950 text-stone-400' 
        : 'bg-[#f4efe6] border-stone-300 text-stone-700'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Philosophy */}
          <div className="text-center md:text-left space-y-1">
            <div className={`flex items-center justify-center md:justify-start gap-2 text-sm font-bold ${
              isEngineer ? 'font-mono text-cyan-400' : 'font-serif text-stone-900'
            }`}>
              {isEngineer ? <Terminal className="w-4 h-4" /> : <Feather className="w-4 h-4" />}
              <span>MRINAL DHARMIK</span>
              <span className="opacity-50">•</span>
              <span className="text-xs font-normal opacity-80">
                Logic by daylight, ink & strings by night
              </span>
            </div>
            <p className="text-xs text-stone-500 font-sans">
              Designed & engineered with React 19, Tailwind CSS & Vite. Hosted on GitHub Pages.
            </p>
          </div>

          {/* Socials quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-600 dark:hover:text-cyan-400 transition-colors"
              >
                {s.name}
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="text-amber-800 dark:text-cyan-300 font-bold hover:underline"
            >
              Contact
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className={`p-2.5 rounded-xl border transition-all ${
              isEngineer
                ? 'bg-cyan-950/40 border-cyan-800/40 text-cyan-400 hover:bg-cyan-900/60'
                : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-100 shadow-sm'
            }`}
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-stone-300/60 dark:border-stone-800/60 text-center text-[11px] text-stone-500">
          © {new Date().getFullYear()} Mrinal Dharmik. All code, prose, and artwork original.
        </div>
      </div>
    </footer>
  );
};
