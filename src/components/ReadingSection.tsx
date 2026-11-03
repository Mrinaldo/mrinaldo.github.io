import React from 'react';
import { AUTHOR_STUDIES, MURAKAMI_PHILOSOPHY } from '../data/reading';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

export const ReadingSection: React.FC = () => {
  const goodreads = SOCIAL_LINKS.find(s => s.name === 'Goodreads')?.url;

  return (
    <section id="reading" className="py-20 md:py-32 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Canon / 03
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

        {/* Goodreads Link Card */}
        {goodreads && (
          <div className="mt-8 text-right">
            <a
              href={goodreads}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline"
            >
              <span>View complete reading register on Goodreads</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
