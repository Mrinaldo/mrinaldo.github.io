import React from 'react';
import { SOCIAL_LINKS } from '../data/socials';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ImageFrame } from './ImageFrame';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const github = SOCIAL_LINKS.find(s => s.name === 'GitHub')?.url;
  const linkedin = SOCIAL_LINKS.find(s => s.name === 'LinkedIn')?.url;

  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-28 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Editorial Sub-header Tag */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Folio Catalogue / 2026 Edition</span>
          </div>
          <span className="hidden sm:inline-block text-[var(--text-muted)]">
            Loc: 21.1458° N, 79.0882° E
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight text-[var(--text-primary)] uppercase leading-[0.95]">
            Systems <br className="hidden sm:inline" />
            Architect
          </h1>
          <div className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif italic font-light text-[var(--accent)] leading-tight">
            & artisan by night.
          </div>
        </div>

        {/* Editorial Narrative & Bio with Portrait Placeholder */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-2xl font-serif leading-relaxed text-[var(--text-primary)] font-light">
              Senior software engineer specializing in local-first desktop environments, recommendation systems, and high-stakes enterprise analytics architectures. Otherwise dedicated to pen-and-ink drawing, the nineteenth-century novel canon, and fingerstyle guitar.
            </p>

            <div className="text-xs font-mono text-[var(--text-secondary)] space-y-2 leading-relaxed pt-2">
              <div className="flex justify-between border-b border-editorial pb-1.5">
                <span className="text-[var(--text-muted)]">CRAFT:</span>
                <span className="text-[var(--text-primary)] font-medium">Electron · React 19 · Next.js · Supabase</span>
              </div>
              <div className="flex justify-between border-b border-editorial pb-1.5">
                <span className="text-[var(--text-muted)]">CANON:</span>
                <span className="text-[var(--text-primary)] font-medium">Dostoevsky · Austen · Murakami</span>
              </div>
              <div className="flex justify-between border-b border-editorial pb-1.5">
                <span className="text-[var(--text-muted)]">ANALOG:</span>
                <span className="text-[var(--text-primary)] font-medium">Sakura Micron · Acoustic EADGBE</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline"
              >
                <span>Scroll to Works</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </button>

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Studio Portrait Frame */}
          <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full">
            <ImageFrame
              src="/images/bio/portrait.jpg"
              hoverSrc="/images/bio/portrait-color.jpg"
              alt="Mrinal Dharmik — Studio Portrait"
              caption="[FIGURE 00: MRINAL DHARMIK / STUDIO PORTRAIT · HOVER FOR COLOR]"
              aspectRatio="aspect-[4/5]"
              placeholderTip="Drop portrait: /public/images/bio/portrait.jpg"
              dimensions="1600 × 2000 px (4:5)"
              category="STUDIO PORTRAIT"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
