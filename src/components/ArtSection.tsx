import React, { useState } from 'react';
import { InkCanvas } from './InkCanvas';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { ART_INSTAGRAM_URL } from '../data/socials';
import { ImageFrame } from './ImageFrame';

type ArtFilter = 'all' | 'graphite' | 'ink';

interface Artwork {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: 'graphite' | 'ink';
  badge: string;
  medium: string;
  dimensions: string;
  aspectRatio: string;
  description: string;
  highlight?: boolean;
}

const ARTWORKS: Artwork[] = [
  {
    id: 'still-life',
    src: '/images/art/still-life.jpg',
    alt: 'Still Life Study — Parachute Oil & Measuring Tape',
    title: 'Still Life with Parachute & Tape Measure',
    caption: 'STILL LIFE · PARACHUTE & TAPE MEASURE (LIGHT & SHADOW)',
    category: 'graphite',
    badge: 'ORIGINAL LIFE STUDY',
    medium: 'Graphite on Cartridge Paper (2B–6B)',
    dimensions: '1200 × 1600 px',
    aspectRatio: 'aspect-[3/4]',
    description:
      'Observational desk still life exploring cylindrical light curvature and reflections on the Parachute oil bottle, glass jar facets, and receding perspective on the unspooled measuring tape. Original hand-signed pencil study by Mrinal Dharmik.',
    highlight: true,
  },
  {
    id: 'portrait-sketch',
    src: '/images/art/portrait-sketch.jpg',
    alt: 'Self-Portrait Study — Graphite on Paper',
    title: 'Self-Portrait Study in Graphite',
    caption: 'SELF-PORTRAIT STUDY · GRAPHITE & LINE WEIGHT',
    category: 'graphite',
    badge: 'ORIGINAL LIFE STUDY',
    medium: 'Graphite Pencil on Heavyweight Paper',
    dimensions: '1200 × 1600 px',
    aspectRatio: 'aspect-[3/4]',
    description:
      'Frontal self-portrait capturing eyeglasses framing, facial anatomy, beard contouring, and layered hair crosshatching. Original hand-signed pencil study by Mrinal.',
    highlight: true,
  },
  {
    id: 'inktober-ghost',
    src: '/images/art/inktober-ghost.jpg',
    alt: 'Inktober Study — Ghost',
    title: 'Inktober · Ghost',
    caption: 'INKTOBER · GHOST (PEN & INDIA INK)',
    category: 'ink',
    badge: 'INK STUDY',
    medium: 'Sakura Pigma Micron 0.1mm–0.5mm',
    dimensions: '1440 × 1440 px',
    aspectRatio: 'aspect-square',
    description:
      'Figure and drapery study exploring the tension between dark negative space and fluid pen strokes on cold-press paper.',
  },
  {
    id: 'inktober-treasure',
    src: '/images/art/inktober-treasure.jpg',
    alt: 'Inktober Study — Treasure',
    title: 'Inktober · Treasure',
    caption: 'INKTOBER · TREASURE (CROSSHATCHING)',
    category: 'ink',
    badge: 'INK STUDY',
    medium: 'Crosshatching & Chiaroscuro Wash',
    dimensions: '1440 × 1440 px',
    aspectRatio: 'aspect-square',
    description:
      'Texture study calibrated with directional crosshatching density to render metallic luster and volumetric depth.',
  },
  {
    id: 'inktober-ancient',
    src: '/images/art/inktober-ancient.jpg',
    alt: 'Inktober Study — Ancient',
    title: 'Inktober · Ancient',
    caption: 'INKTOBER · ANCIENT (COMPOSITION)',
    category: 'ink',
    badge: 'INK STUDY',
    medium: 'Architectural Pen & India Ink Wash',
    dimensions: '1300 × 1300 px',
    aspectRatio: 'aspect-square',
    description:
      'Architectural composition balanced between fine stippling and solid ink blocks on 300gsm Arches grain fin paper.',
  },
  {
    id: 'inktober-dark',
    src: '/images/art/inktober-dark.jpg',
    alt: 'Inktober Study — Dark',
    title: 'Inktober · Dark',
    caption: 'INKTOBER · DARK (NEGATIVE SPACE)',
    category: 'ink',
    badge: 'INK STUDY',
    medium: 'High-contrast India Ink Wash',
    dimensions: '1302 × 1302 px',
    aspectRatio: 'aspect-square',
    description:
      'High-contrast chiaroscuro piece studying pure black negative space and delicate graphite highlights.',
  },
];

export const ArtSection: React.FC = () => {
  const [filter, setFilter] = useState<ArtFilter>('all');
  const instagram = ART_INSTAGRAM_URL;

  const graphiteWorks = ARTWORKS.filter(a => a.category === 'graphite');
  const inkWorks = ARTWORKS.filter(a => a.category === 'ink');

  return (
    <section id="studio" className="py-20 md:py-32 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Studio Folio
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
              The Inkwell & Studio
            </h2>
          </div>
          <p className="text-sm font-serif italic text-[var(--text-secondary)] max-w-md">
            The discipline of the irreversible line & observational form. Exploring graphite life studies, Inktober inkwork, and pen-and-wash compositions on cold-press paper.
          </p>
        </div>

        {/* Top: Interactive Canvas + Monograph */}
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
                Drawing with graphite and pigment liners removes the safety net of undo buffers. It forces a deliberate pacing: observing negative space, calibrating hatching density, and letting raw accidents become integral to the texture.
              </p>

              <div className="pt-4 border-t border-editorial text-xs font-mono text-[var(--text-muted)] space-y-1.5">
                <div className="flex justify-between">
                  <span>MEDIUM:</span>
                  <span className="text-[var(--text-primary)] font-medium">Sakura Micron 0.05mm–0.8mm & Graphite (2B–6B)</span>
                </div>
                <div className="flex justify-between">
                  <span>PAPER:</span>
                  <span className="text-[var(--text-primary)] font-medium">Arches 300gsm Grain Fin & Heavyweight Cartridge</span>
                </div>
                <div className="flex justify-between">
                  <span>EXHIBITION:</span>
                  <span className="text-[var(--text-primary)] font-medium">Observational Life Studies & Inktober Series</span>
                </div>
              </div>
            </div>

            {/* Instagram Archive Link */}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                data-cursor="INSTA"
                className="group p-6 rounded-2xl border border-editorial bg-[var(--bg-card)] hover:border-[var(--accent)] flex items-center justify-between transition-all block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-editorial bg-[var(--bg-page)] text-[var(--accent)]">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      Instagram Folio @pretentious_joey
                    </h4>
                    <p className="text-xs font-serif italic text-[var(--text-secondary)]">
                      Explore authentic Inktober archives, pen sketches, and daily analog studies
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            )}
          </div>

        </div>

        {/* Bottom: The Exhibition Gallery Wall */}
        <div className="pt-8 border-t border-editorial space-y-10">
          
          {/* Gallery Header with Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                Artwork Archive
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
                Featured Studies & Artwork
              </h3>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                Original graphite drawings & authentic Inktober archives
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[var(--accent)] text-white font-bold shadow-sm'
                    : 'border border-editorial bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                All Works ({ARTWORKS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('graphite')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'graphite'
                    ? 'bg-[var(--accent)] text-white font-bold shadow-sm'
                    : 'border border-editorial bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Graphite & Life Studies ({graphiteWorks.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter('ink')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'ink'
                    ? 'bg-[var(--accent)] text-white font-bold shadow-sm'
                    : 'border border-editorial bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                Inktober Archive ({inkWorks.length})
              </button>
            </div>
          </div>

          {/* Tier 1: Original Graphite & Life Studies (Show if 'all' or 'graphite') */}
          {(filter === 'all' || filter === 'graphite') && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-editorial pb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Original Graphite & Life Studies</span>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  Hand-Drawn · Pencil on Paper
                </span>
              </div>

              {/* 2-Column Showcase for the 3:4 Original Drawings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {graphiteWorks.map((art) => (
                  <div
                    key={art.id}
                    className="p-5 sm:p-6 rounded-2xl border border-editorial bg-[var(--bg-card)] space-y-4 hover:border-[var(--accent)]/60 transition-all duration-300"
                  >
                    <ImageFrame
                      src={art.src}
                      alt={art.alt}
                      caption={art.caption}
                      aspectRatio={art.aspectRatio}
                      dimensions={art.dimensions}
                      category={art.badge}
                    />

                    <div className="space-y-2 pt-2 border-t border-editorial">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[var(--accent)] uppercase font-semibold">
                          [{art.badge}]
                        </span>
                        <span className="text-[var(--text-muted)]">
                          {art.medium}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg uppercase text-[var(--text-primary)]">
                        {art.title}
                      </h4>

                      <p className="text-xs font-serif italic text-[var(--text-secondary)] leading-relaxed">
                        {art.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tier 2: Inktober Archival Series (Show if 'all' or 'ink') */}
          {(filter === 'all' || filter === 'ink') && (
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-editorial pb-3">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                  <span>Inktober Archival Series · Sakura Micron</span>
                </div>
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <span>View full archive on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* 4-Column Grid for the Square Inktober Plates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {inkWorks.map((art) => (
                  <div
                    key={art.id}
                    className="p-4 rounded-xl border border-editorial bg-[var(--bg-card)] space-y-3 hover:border-[var(--accent)]/60 transition-all duration-300"
                  >
                    <ImageFrame
                      src={art.src}
                      alt={art.alt}
                      caption={art.caption}
                      aspectRatio={art.aspectRatio}
                      dimensions={art.dimensions}
                      category={art.badge}
                    />

                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="font-semibold text-[var(--text-primary)]">
                          {art.title}
                        </span>
                        <span className="text-[10px] text-[var(--accent)]">
                          {art.badge}
                        </span>
                      </div>
                      <p className="text-[11px] font-serif italic text-[var(--text-secondary)] line-clamp-2">
                        {art.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
