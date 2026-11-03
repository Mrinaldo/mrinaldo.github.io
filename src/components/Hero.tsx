import React from 'react';
import { PortfolioMode } from '../types';
import { SOCIAL_LINKS } from '../data/socials';
import { 
  Terminal, Feather, ArrowUpRight, 
  BookOpen, Sparkles, Cpu, Layers, Music 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, SpotifyIcon } from './BrandIcons';

interface HeroProps {
  mode: PortfolioMode;
  onOpenContact: () => void;
  onToggleMode: (mode: PortfolioMode) => void;
}

export const Hero: React.FC<HeroProps> = ({ mode, onOpenContact, onToggleMode }) => {
  const isEngineer = mode === 'engineer';

  const linkedin = SOCIAL_LINKS.find(s => s.name === 'LinkedIn')?.url;
  const instagram = SOCIAL_LINKS.find(s => s.name === 'Instagram')?.url;
  const goodreads = SOCIAL_LINKS.find(s => s.name === 'Goodreads')?.url;
  const spotify = SOCIAL_LINKS.find(s => s.name === 'Spotify')?.url;
  const github = SOCIAL_LINKS.find(s => s.name === 'GitHub')?.url;

  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Status Capsule */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
            <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent)]" />
            <span>{isEngineer ? 'Kernel status: Active & Available for systems engineering' : 'Studio open: Writing short stories & inking drafts'}</span>
          </div>

          <button 
            onClick={() => onToggleMode(isEngineer ? 'artist' : 'engineer')}
            className="text-xs flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-mono border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Switch to {isEngineer ? 'Artisan View' : 'Engineer View'}</span>
          </button>
        </div>

        {/* Main Hero Card */}
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-md overflow-hidden transition-colors duration-300">
          
          {/* Top Card Bar */}
          <div className="px-4 sm:px-6 py-3 border-b border-[var(--border-color)] bg-[var(--bg-card-muted)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 opacity-60">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
              </div>
              <span className="ml-2 font-medium">
                {isEngineer ? 'mrinal@architect: ~/systems' : 'Notebook Folio • Autumn 2026'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] text-[var(--accent)] font-semibold">
                {isEngineer ? 'React 19 / TS 5.7 / Electron' : 'Sakura Micron 0.1mm • Cold Press'}
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10 md:p-12">
            {isEngineer ? (
              /* ENGINEER HERO */
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[var(--accent)] font-mono text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 font-semibold">
                    <Terminal className="w-4 h-4" />
                    <span>Software Engineer & Systems Architect</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] font-heading leading-tight">
                    Engineering tools with <br className="hidden sm:inline" />
                    <span className="text-[var(--accent)]">
                      craft, speed & precision.
                    </span>
                  </h1>
                </div>

                <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans">
                  By day, I architect and build robust digital systems—spanning local-first desktop studios like{' '}
                  <strong className="text-[var(--text-primary)] font-mono">Mriter</strong>, recommendation feeds like{' '}
                  <strong className="text-[var(--text-primary)] font-mono">Mrews</strong>, long-form e-reading engines like{' '}
                  <strong className="text-[var(--text-primary)] font-mono">Mreader</strong>, and enterprise risk analytics portals like{' '}
                  <a href="https://mrinaldo.gitlab.io/" target="_blank" rel="noreferrer" className="text-[var(--accent)] underline underline-offset-4 hover:opacity-80 font-mono font-medium">
                    Auronova
                  </a>.
                </p>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                  {['TypeScript', 'React 19', 'Next.js 15', 'Electron', 'Supabase / PostgreSQL', 'TipTap Engine', 'Tailwind CSS'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[var(--bg-card-muted)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#systems"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:opacity-90 text-[var(--accent-fg)] font-semibold text-sm font-mono transition-all shadow-sm hover:scale-[1.01]"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Explore Systems</span>
                  </a>
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-card-muted)] hover:bg-[var(--border-color)] text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-mono transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub: @Mrinaldo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-[var(--bg-card-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-mono transition-all"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Initiate Contact</span>
                  </button>
                </div>
              </div>
            ) : (
              /* ARTIST HERO */
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-[var(--accent)] font-serif italic text-sm tracking-wide flex items-center gap-2 font-semibold">
                    <Feather className="w-4 h-4" />
                    <span>The Artisan's Atelier • Pen, Ink, Prose & Strings</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] font-heading leading-tight">
                    Where ink flows, <br className="hidden sm:inline" />
                    <span className="italic font-normal text-[var(--accent)]">
                      stories germinate & melody breathes.
                    </span>
                  </h1>
                </div>

                <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-serif">
                  When the screens dim, I retreat to analog quietude. An inktober sketcher fascinated by the discipline of pen on paper, an avid reader currently immersed in the complete works of <em>Fyodor Dostoevsky</em> and <em>Jane Austen</em>, an aspiring fiction writer exploring the craft of the short story, and a guitar enthusiast chasing chords.
                </p>

                {/* Murakami Quote Card */}
                <div className="p-4 rounded-xl bg-[var(--bg-card-muted)] border border-[var(--border-color)] text-[var(--text-secondary)] text-sm font-serif italic leading-relaxed relative">
                  <span className="text-2xl text-[var(--accent)]/50 font-serif absolute top-1 left-2">“</span>
                  <p className="pl-4">
                    “Sometimes your short stories can evolve into a novel. Storytelling is a gradual process which takes time to shape itself into a short story, novella, or a novel.”
                  </p>
                  <p className="text-right text-xs not-italic font-mono text-[var(--accent)] font-semibold mt-1">
                    — The Haruki Murakami Principle
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#inkwell"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:opacity-90 text-[var(--accent-fg)] font-medium text-sm font-serif transition-all shadow-sm hover:scale-[1.01]"
                  >
                    <Feather className="w-4 h-4" />
                    <span>Visit The Inkwell</span>
                  </a>
                  <a
                    href="#library"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-card-muted)] hover:bg-[var(--border-color)] text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-serif transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>The Library & Canons</span>
                  </a>
                  <a
                    href="#fretboard"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-card-muted)] hover:bg-[var(--border-color)] text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-serif transition-all"
                  >
                    <Music className="w-4 h-4" />
                    <span>Guitar & Acoustics</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Social Dock Bar */}
          <div className="px-6 py-4 border-t border-[var(--border-color)] bg-[var(--bg-card-muted)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Verified Signals:
            </span>

            <div className="flex flex-wrap items-center gap-4">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              )}
              {goodreads && (
                <a href={goodreads} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Goodreads</span>
                </a>
              )}
              {spotify && (
                <a href={spotify} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors">
                  <SpotifyIcon className="w-3.5 h-3.5" />
                  <span>Spotify</span>
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
