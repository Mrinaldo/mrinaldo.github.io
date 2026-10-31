import React from 'react';
import { PortfolioMode } from '../types';
import { AUTHOR_STUDIES, MURAKAMI_PHILOSOPHY } from '../data/reading';
import { BookOpen, ExternalLink, Quote, Feather } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

interface ReadingSectionProps {
  mode: PortfolioMode;
}

export const ReadingSection: React.FC<ReadingSectionProps> = ({ mode }) => {
  const isEngineer = mode === 'engineer';
  const goodreads = SOCIAL_LINKS.find(s => s.name === 'Goodreads')?.url;

  return (
    <section id="library" className={`py-16 transition-colors duration-500 ${
      isEngineer ? 'bg-transparent text-stone-200' : 'bg-transparent text-stone-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs uppercase font-mono tracking-widest mb-2 ${
              isEngineer ? 'text-cyan-400' : 'text-amber-800'
            }`}>
              <BookOpen className="w-4 h-4" />
              <span>Literary Canon & Storycraft // 03</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isEngineer ? 'font-mono text-white' : 'font-serif text-stone-900'
            }`}>
              The Library & The Written Word
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-2xl ${
              isEngineer ? 'text-stone-400 font-sans' : 'text-stone-700 font-serif'
            }`}>
              Avid reader and aspiring novelist. Dissecting masterworks of psychological drama and social irony to inform the gradual birth of new short stories.
            </p>
          </div>

          {goodreads && (
            <a
              href={goodreads}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all self-start md:self-auto border ${
                isEngineer
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800 hover:border-cyan-400 font-mono'
                  : 'bg-white text-stone-800 border-stone-300 hover:border-amber-700 font-serif shadow-sm'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Goodreads Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}
        </div>

        {/* Featured Murakami Essay Card */}
        <div className={`mb-12 p-6 sm:p-10 rounded-2xl border transition-all ${
          isEngineer 
            ? 'bg-[#0f172a]/90 border-cyan-900/30' 
            : 'bg-white border-stone-300 shadow-md'
        }`}>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-amber-600 dark:text-cyan-400 mb-3">
            <Feather className="w-4 h-4" />
            <span>Storytelling Principle • Haruki Murakami Influence</span>
          </div>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-stone-900 dark:text-stone-100 leading-snug border-l-4 border-amber-600 dark:border-cyan-400 pl-4 sm:pl-6 my-4">
            “{MURAKAMI_PHILOSOPHY.quote}”
          </blockquote>

          <div className="mt-6 text-sm sm:text-base leading-relaxed space-y-4 font-serif text-stone-700 dark:text-stone-300">
            <p>
              In both engineering systems and literary prose, you don't always build the monolith all at once. Haruki Murakami observed how many of his grandest narratives emerged from the quiet crucible of short stories.
            </p>
            <p>
              My goal is to first craft distinct short stories—sharpening dialogue, discovering authentic voices, and setting distinct atmospheric moods. Storytelling is not rushed; it is an incubation where a small, potent idea naturally compounds until it commands the canvas of a novel.
            </p>
          </div>
        </div>

        {/* Authors in Progress Grid: Dostoevsky & Austen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUTHOR_STUDIES.map((study) => (
            <div
              key={study.author}
              className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                isEngineer 
                  ? 'bg-[#0f172a]/70 border-cyan-900/30 text-stone-300' 
                  : 'bg-white border-stone-300/80 text-stone-800 shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-amber-700 dark:text-cyan-400">
                    Canon Study
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-sans">
                    {study.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-serif text-stone-900 dark:text-white">
                    {study.author}
                  </h3>
                  <p className="text-xs font-serif italic text-stone-500 dark:text-stone-400 mt-0.5">
                    Focus: {study.focus}
                  </p>
                </div>

                <p className="text-sm leading-relaxed font-serif text-stone-700 dark:text-stone-300">
                  {study.reflection}
                </p>

                {/* Key Works Pills */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase font-semibold text-stone-500 mb-2">
                    Key Works In Progress:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.keyWorks.map((work) => (
                      <span
                        key={work}
                        className="text-xs px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-serif"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {study.quote && (
                <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs italic font-serif text-stone-500 dark:text-stone-400 flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-cyan-400" />
                  <span>“{study.quote}”</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
