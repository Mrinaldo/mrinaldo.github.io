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
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Editorial Sub-header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Folio Catalogue / 2026 Edition</span>
            <span className="hidden sm:inline-block text-[var(--text-muted)] opacity-40">·</span>
            <a
              href="https://www.finmechanics.com/"
              target="_blank"
              rel="noreferrer"
              data-cursor="VISIT"
              className="hidden sm:inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors normal-case"
            >
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--accent)]">Director</span>
              <span className="text-[var(--text-muted)]">@</span>
              <span className="font-semibold text-[var(--text-primary)]">Finmechanics</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
            </a>
          </div>
          <span className="hidden sm:inline-block text-[var(--text-muted)]">
            Loc: 21.1458° N, 79.0882° E
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)] uppercase leading-[1.08]">
            Systems Architect
          </h1>
          <p className="text-xl sm:text-3xl lg:text-4xl font-serif italic font-light text-[var(--accent)] leading-snug">
            & artisan by night.
          </p>
        </div>

        {/* Editorial Narrative & Bio with Portrait Placeholder */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-editorial grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-2xl font-serif leading-relaxed text-[var(--text-primary)] font-light">
              I am a Director at <a href="https://www.finmechanics.com/" target="_blank" rel="noreferrer" data-cursor="VISIT" className="font-normal text-[var(--text-primary)] underline decoration-[var(--accent)]/50 underline-offset-4 hover:decoration-[var(--accent)] hover:text-[var(--accent)] transition-colors">Finmechanics</a>, where I lead product journey and growth. By discipline, I am a systems architect engineering enterprise financial platforms, local-first tools, and intelligent data systems. Beyond engineering, I have a deep passion for writing and literature, and spend my nights dedicated to fiction craft, pen-and-ink drawing, the nineteenth-century novel canon, and fingerstyle guitar.
            </p>

            {/* Professional Role Callout */}
            <div className="p-4 sm:p-5 rounded-xl border border-editorial bg-[var(--bg-card)]/70 hover:border-[var(--accent)] transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                      Professional Leadership
                    </span>
                    <span className="text-[var(--text-muted)] text-[10px] font-mono">· CURRENT</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-[var(--text-primary)]">
                    Director — Product Journey & Growth
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)]">
                    Finmechanics · Steering platform roadmap, product evolution, and strategic growth.
                  </p>
                </div>
                <a
                  href="https://www.finmechanics.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="VISIT"
                  className="shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--accent)] text-white text-xs font-mono uppercase tracking-wider font-bold hover:opacity-90 transition-all shadow-sm"
                >
                  <span>Finmechanics</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="text-xs font-mono text-[var(--text-secondary)] space-y-2.5 leading-relaxed pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 border-b border-editorial pb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold shrink-0 sm:w-20">ROLE</span>
                <a
                  href="https://www.finmechanics.com/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="VISIT"
                  className="text-[var(--text-primary)] font-medium hover:text-[var(--accent)] inline-flex items-center gap-1.5 transition-colors group sm:text-right"
                >
                  <span>Director (Product Journey & Growth) @ Finmechanics</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--accent)] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 border-b border-editorial pb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold shrink-0 sm:w-20">CRAFT</span>
                <span className="text-[var(--text-primary)] font-medium sm:text-right">Electron · React 19 · Next.js · Supabase</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 border-b border-editorial pb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold shrink-0 sm:w-20">CANON</span>
                <span className="text-[var(--text-primary)] font-medium sm:text-right">Dostoevsky · Austen · Murakami</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 border-b border-editorial pb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold shrink-0 sm:w-20">ANALOG</span>
                <span className="text-[var(--text-primary)] font-medium sm:text-right">Graphite · Sakura Micron · Acoustic EADGBE</span>
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
          <div className="lg:col-span-5">
            <ImageFrame
              src="/images/bio/portrait.jpg"
              hoverSrc="/images/bio/portrait-color.jpg"
              alt="Mrinal Dharmik — Studio Portrait"
              caption="MRINAL DHARMIK · STUDIO PORTRAIT"
              aspectRatio="aspect-[4/3]"
              placeholderTip="Drop portrait: /public/images/bio/portrait.jpg"
              dimensions="1200 × 900 px"
              category="STUDIO PORTRAIT"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
