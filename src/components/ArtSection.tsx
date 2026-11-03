import React from 'react';
import { InkCanvas } from './InkCanvas';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { SOCIAL_LINKS } from '../data/socials';

export const ArtSection: React.FC = () => {
  const instagram = SOCIAL_LINKS.find(s => s.name === 'Instagram')?.url;

  return (
    <section id="studio" className="py-20 md:py-32 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Folio / 02
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
              The Inkwell & Studio
            </h2>
          </div>
          <p className="text-sm font-serif italic text-[var(--text-secondary)] max-w-md">
            The discipline of the irreversible line. Exploring Inktober drawings, nib gauges, and pen-and-wash compositions on cold-press paper.
          </p>
        </div>

        {/* Two-Column Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Canvas */}
          <div className="lg:col-span-7">
            <InkCanvas />
          </div>

          {/* Right: Studio Monograph */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-editorial bg-[var(--bg-card)] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                Artist Statement
              </span>
              <h3 className="text-2xl font-serif italic text-[var(--text-primary)]">
                “In software we refactor. In ink, every stroke is a permanent commitment.”
              </h3>
              <p className="text-sm font-sans text-[var(--text-secondary)] leading-relaxed">
                Drawing with pigment liners and India ink removes the safety net of undo buffers. It forces a deliberate pacing: observing negative space, calibrating hatching density, and letting raw accidents become integral to the texture.
              </p>

              <div className="pt-4 border-t border-editorial text-xs font-mono text-[var(--text-muted)] space-y-1.5">
                <div className="flex justify-between">
                  <span>MEDIUM:</span>
                  <span className="text-[var(--text-primary)] font-medium">Sakura Pigma Micron 0.05mm–0.8mm</span>
                </div>
                <div className="flex justify-between">
                  <span>PAPER:</span>
                  <span className="text-[var(--text-primary)] font-medium">Arches 300gsm Grain Fin</span>
                </div>
                <div className="flex justify-between">
                  <span>EXHIBITION:</span>
                  <span className="text-[var(--text-primary)] font-medium">Inktober Series & Life Studies</span>
                </div>
              </div>
            </div>

            {/* Instagram Archive Link */}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-2xl border border-editorial bg-[var(--bg-card)] hover:border-[var(--accent)] flex items-center justify-between transition-all block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-editorial bg-[var(--bg-page)] text-[var(--accent)]">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      Instagram Folio @mrinaldo7
                    </h4>
                    <p className="text-xs font-serif italic text-[var(--text-secondary)]">
                      Explore ongoing sketchbooks, ink studies, and visual experiments
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
