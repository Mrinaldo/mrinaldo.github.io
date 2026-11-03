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
    <footer className="py-12 border-t border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Philosophy */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold font-heading text-[var(--text-primary)]">
              {isEngineer ? <Terminal className="w-4 h-4 text-[var(--accent)]" /> : <Feather className="w-4 h-4 text-[var(--accent)]" />}
              <span>MRINAL DHARMIK</span>
              <span className="opacity-50">•</span>
              <span className="text-xs font-normal text-[var(--text-muted)] font-mono">
                Logic by daylight, ink & strings by night
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] font-sans">
              Disciplined single-palette architecture. React 19, Tailwind CSS & Vite.
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
                className="hover:text-[var(--accent)] transition-colors"
              >
                {s.name}
              </a>
            ))}
            <button
              onClick={onOpenContact}
              className="text-[var(--accent)] font-bold hover:underline"
            >
              Contact
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all shadow-sm"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-color)] text-center text-[11px] font-mono text-[var(--text-muted)]">
          © {new Date().getFullYear()} Mrinal Dharmik. All code, prose, and artwork original.
        </div>
      </div>
    </footer>
  );
};
