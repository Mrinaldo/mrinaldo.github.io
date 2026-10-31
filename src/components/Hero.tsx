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
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Decorative background glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] rounded-full pointer-events-none transition-all duration-700 opacity-40 ${
        isEngineer ? 'bg-cyan-500/15' : 'bg-amber-500/20'
      }`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Status Capsule */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs transition-colors duration-300 ${
            isEngineer 
              ? 'bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 font-mono'
              : 'bg-amber-100/80 border border-amber-300/60 text-amber-900 font-serif'
          }`}>
            <span className={`w-2 h-2 rounded-full animate-ping ${isEngineer ? 'bg-cyan-400' : 'bg-amber-600'}`} />
            <span>{isEngineer ? 'Kernel status: Active & Available for systems engineering' : 'Studio open: Writing short stories & inking drafts'}</span>
          </div>

          {/* Quick Dual Switch prompt */}
          <button 
            onClick={() => onToggleMode(isEngineer ? 'artist' : 'engineer')}
            className={`text-xs flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
              isEngineer 
                ? 'text-cyan-400/80 hover:text-cyan-300 hover:bg-cyan-950/40 font-mono border border-cyan-900/40' 
                : 'text-amber-900/80 hover:text-amber-950 hover:bg-amber-200/50 font-serif italic border border-amber-300/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Switch to {isEngineer ? 'Artisan Mode' : 'Engineer Mode'}</span>
          </button>
        </div>

        {/* Main Hero Card / Terminal */}
        <div className={`rounded-2xl border transition-all duration-500 shadow-xl overflow-hidden ${
          isEngineer 
            ? 'bg-[#0f172a]/80 border-cyan-900/40 backdrop-blur-md text-stone-200' 
            : 'bg-white/80 border-amber-900/15 backdrop-blur-md text-stone-900'
        }`}>
          {/* Terminal / Notebook Top Bar */}
          <div className={`px-4 sm:px-6 py-3 border-b flex items-center justify-between transition-colors duration-500 ${
            isEngineer 
              ? 'bg-[#0b1120] border-cyan-950 text-cyan-500 font-mono text-xs' 
              : 'bg-[#f5efe6] border-amber-900/10 text-amber-950 font-serif italic text-xs'
          }`}>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 opacity-80">
                {isEngineer ? 'mrinal@terminal: ~/architect' : 'Field Notebook • Folio 2026'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isEngineer ? (
                <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-[10px] text-cyan-300">
                  TS 5.7 / React 19 / Electron
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-300 text-[10px] text-amber-800">
                  Sakura Micron 0.1mm • Cold Press
                </span>
              )}
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10 md:p-12">
            {isEngineer ? (
              /* ENGINEER HERO */
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>Software Engineer & Systems Architect</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-mono leading-tight">
                    Engineering tools with <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                      craft, speed & precision.
                    </span>
                  </h1>
                </div>

                <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans">
                  By day, I architect and build robust digital systems—spanning local-first desktop studios like{' '}
                  <strong className="text-cyan-300 font-medium font-mono">Mriter</strong>, recommendation feeds like{' '}
                  <strong className="text-cyan-300 font-medium font-mono">Mrews</strong>, long-form e-reading engines like{' '}
                  <strong className="text-cyan-300 font-medium font-mono">Mreader</strong>, and enterprise risk analytics portals like{' '}
                  <a href="https://mrinaldo.gitlab.io/" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200 font-mono font-medium">
                    Auronova
                  </a>.
                </p>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                  {['TypeScript', 'React 19', 'Next.js 15', 'Electron', 'Supabase / PostgreSQL', 'TipTap Engine', 'Tailwind CSS'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 hover:border-cyan-500/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#systems"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm font-mono transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02]"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Explore Systems</span>
                  </a>
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-sm font-mono transition-all hover:border-stone-500"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub: @Mrinaldo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-cyan-950/40 text-cyan-300 border border-cyan-800/50 text-sm font-mono transition-all"
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
                  <div className="text-amber-800 font-serif italic text-sm tracking-wide flex items-center gap-2">
                    <Feather className="w-4 h-4 text-amber-700" />
                    <span>The Artisan's Atelier • Pen, Ink, Prose & Strings</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 font-serif leading-tight">
                    Where ink flows, <br className="hidden sm:inline" />
                    <span className="italic font-normal text-amber-900">
                      stories germinate & melody breathes.
                    </span>
                  </h1>
                </div>

                <p className="text-stone-700 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-serif">
                  When the screens dim, I retreat to analog quietude. An inktober sketcher fascinated by the discipline of pen on paper, an avid reader currently immersed in the complete works of <em>Fyodor Dostoevsky</em> and <em>Jane Austen</em>, an aspiring fiction writer exploring the craft of the short story, and a guitar enthusiast chasing chords.
                </p>

                {/* Murakami Quote Card */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-900/10 text-stone-800 text-sm font-serif italic leading-relaxed relative">
                  <span className="text-2xl text-amber-700/40 font-serif absolute top-1 left-2">“</span>
                  <p className="pl-4">
                    “Sometimes your short stories can evolve into a novel. Storytelling is a gradual process which takes time to shape itself into a short story, novella, or a novel.”
                  </p>
                  <p className="text-right text-xs not-italic font-sans text-amber-900 font-semibold mt-1">
                    — The Haruki Murakami Principle
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#inkwell"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-amber-50 font-medium text-sm font-serif transition-all shadow-md shadow-amber-900/20 hover:scale-[1.02]"
                  >
                    <Feather className="w-4 h-4" />
                    <span>Visit The Inkwell</span>
                  </a>
                  <a
                    href="#library"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 text-sm font-serif transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>The Library & Canons</span>
                  </a>
                  <a
                    href="#fretboard"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 text-sm font-serif transition-all"
                  >
                    <Music className="w-4 h-4" />
                    <span>Guitar & Acoustics</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Social Dock Bar */}
          <div className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-4 transition-colors duration-500 ${
            isEngineer 
              ? 'bg-[#090d16] border-cyan-950 text-stone-400 font-mono text-xs' 
              : 'bg-[#faf6ee] border-amber-900/10 text-stone-600 font-serif text-xs'
          }`}>
            <span className="font-semibold uppercase tracking-wider text-[11px] opacity-75">
              Verified Signals:
            </span>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-400 transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              )}
              {goodreads && (
                <a href={goodreads} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-700 transition-colors">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Goodreads</span>
                </a>
              )}
              {spotify && (
                <a href={spotify} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
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
