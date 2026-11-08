import React from 'react';
import { AUTHOR_STUDIES, MURAKAMI_PHILOSOPHY } from '../data/reading';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, SUBSTACK_URL } from '../data/socials';

export const ReadingSection: React.FC = () => {
  const goodreads = SOCIAL_LINKS.find(s => s.name === 'Goodreads')?.url;

  return (
    <section id="reading" className="py-20 md:py-32 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Literary Canon
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
              The Library & Prose
            </h2>
          </div>
          <p className="text-sm font-serif italic text-[var(--text-secondary)] max-w-md">
            Dissecting the nineteenth-century psychological and social canons to cultivate the architecture of emerging short fiction.
          </p>
        </div>

        {/* Featured Murakami Principle Editorial Callout */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl border border-editorial bg-[var(--bg-card)]">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold block mb-4">
            Storycraft Philosophy • Haruki Murakami
          </span>
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[var(--text-primary)] leading-tight max-w-4xl">
            “{MURAKAMI_PHILOSOPHY.quote}”
          </blockquote>
          
          <div className="mt-8 pt-6 border-t border-editorial grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base font-serif text-[var(--text-secondary)] leading-relaxed">
            <p>
              In software, modular components assemble into complex distributed engines. In prose, short stories serve the identical role. They allow a writer to test voice, calibrate psychological subtext, and follow a mysterious character into the fog.
            </p>
            <p>
              Given patience and craft discipline, that kernel naturally gathers weight, historical texture, and philosophical depth until it commands the expansive canvas of a novel.
            </p>
          </div>
        </div>

        {/* Substack Feature Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl border border-editorial bg-[var(--bg-card)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-[var(--accent)] transition-all">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>Published Prose & Craft Essays</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              Mrinal Dharmik on Substack
            </h3>
            <p className="text-sm font-serif italic text-[var(--text-secondary)] leading-relaxed">
              Dispatches on storycraft, nineteenth-century literary architecture, character psychology, and emerging short fiction.
            </p>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor="READ"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white text-xs font-mono uppercase tracking-wider font-bold hover:opacity-90 transition-all shadow-sm shrink-0"
          >
            <span>Read on Substack</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Author Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUTHOR_STUDIES.map((study) => (
            <div
              key={study.author}
              className="p-8 rounded-2xl border border-editorial bg-[var(--bg-card)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--accent)] uppercase font-semibold">
                    Canon in Progress
                  </span>
                  <span className="text-[var(--text-muted)]">
                    {study.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-[var(--text-primary)]">
                    {study.author}
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent)] mt-0.5">
                    Focus: {study.focus}
                  </p>
                </div>

                <p className="text-sm font-serif leading-relaxed text-[var(--text-secondary)]">
                  {study.reflection}
                </p>

                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase text-[var(--text-muted)] mb-2 tracking-wider">
                    Works Under Study:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.keyWorks.map((work) => (
                      <span
                        key={work}
                        className="text-xs font-serif px-2.5 py-1 rounded-md border border-editorial text-[var(--text-primary)] bg-[var(--bg-page)]"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {study.quote && (
                <div className="pt-4 border-t border-editorial text-xs font-serif italic text-[var(--text-muted)]">
                  “{study.quote}”
                </div>
              )}
            </div>
          ))}
        </div>

        {/* External Literary Registers */}
        <div className="mt-12 pt-6 border-t border-editorial flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider">
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-semibold"
          >
            <span>mrinaldharmik.substack.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {goodreads && (
            <a
              href={goodreads}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:underline transition-colors"
            >
              <span>Reading Register on Goodreads</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

      </div>
    </section>
  );
};
