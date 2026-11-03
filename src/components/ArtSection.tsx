import React from 'react';
import { PortfolioMode } from '../types';
import { InkCanvas } from './InkCanvas';
import { Feather, ArrowUpRight, PenTool, Image as ImageIcon } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { SOCIAL_LINKS } from '../data/socials';

interface ArtSectionProps {
  mode: PortfolioMode;
}

export const ArtSection: React.FC<ArtSectionProps> = () => {
  const instagram = SOCIAL_LINKS.find(s => s.name === 'Instagram')?.url;

  return (
    <section id="inkwell" className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest mb-2 text-[var(--accent)] font-semibold">
              <Feather className="w-4 h-4" />
              <span>Visual Craft // 02</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
              The Inkwell & Inktober Chronicles
            </h2>
            <p className="text-sm sm:text-base mt-2 max-w-2xl text-[var(--text-secondary)] font-sans">
              Pen on paper demands absolute intentionality. Without an undo button, every stroke, hatching density, and ink bleed becomes a permanent truth.
            </p>
          </div>

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all self-start md:self-auto border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent)] shadow-sm"
            >
              <InstagramIcon className="w-4 h-4 text-[var(--accent)]" />
              <span>Follow @mrinaldo7</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}
        </div>

        {/* Two-Column Grid: Interactive Canvas + Gallery Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Canvas */}
          <div className="lg:col-span-7">
            <InkCanvas />
          </div>

          {/* Right Column: Ink Studies & Aesthetic Previews */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Discipline Card */}
            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] shadow-sm">
              <div className="flex items-center gap-2 text-[var(--accent)] mb-2 font-serif text-sm font-bold">
                <PenTool className="w-4 h-4" />
                <span>The Art of the Irreversible Line</span>
              </div>
              <p className="text-sm leading-relaxed font-serif">
                In software, we write tests and refactor with git. In ink drawing, you live with your initial marks. Inktober is an exercise in focus, line weight control, and embracing happy accidents on 300gsm cold-press paper.
              </p>

              <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-muted)]">Favorite Medium:</span>
                <span className="font-semibold text-[var(--accent)]">Sakura Micron + Pentel Pocket Brush</span>
              </div>
            </div>

            {/* Gallery Placeholder Frame */}
            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[var(--text-muted)]">
                  Portfolio Gallery Showcase
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-card-muted)] text-[var(--accent)] font-mono font-medium border border-[var(--border-color)]">
                  Curating Ink Pieces
                </span>
              </div>

              <div className="rounded-xl border border-dashed border-[var(--border-color)] p-8 text-center space-y-3 bg-[var(--bg-card-muted)]/50">
                <div className="w-12 h-12 mx-auto rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)]">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[var(--text-primary)]">
                    High-Res Ink Scans In Preparation
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-serif mt-1 max-w-xs mx-auto">
                    New Inktober studies, character sketches, and pen-and-wash works will be exhibited here shortly.
                  </p>
                </div>

                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] hover:underline pt-2"
                  >
                    <span>Catch live sketches on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
