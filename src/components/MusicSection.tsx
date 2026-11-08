import React, { useState } from 'react';
import { Disc3, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';
import { ImageFrame } from './ImageFrame';

export const MusicSection: React.FC = () => {
  const spotify = SOCIAL_LINKS.find(s => s.name === 'Spotify')?.url;
  const [activeString, setActiveString] = useState<number | null>(null);

  const strings = [
    { note: 'E', name: '1st (High E)', freq: 329.63, gauge: '.010' },
    { note: 'B', name: '2nd (B)', freq: 246.94, gauge: '.013' },
    { note: 'G', name: '3rd (G)', freq: 196.00, gauge: '.017' },
    { note: 'D', name: '4th (D)', freq: 146.83, gauge: '.026' },
    { note: 'A', name: '5th (A)', freq: 110.00, gauge: '.036' },
    { note: 'E', name: '6th (Low E)', freq: 82.41, gauge: '.046' },
  ];

  const playNote = (freq: number, idx: number) => {
    setActiveString(idx);
    setTimeout(() => setActiveString(null), 900);

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio might require user interaction
    }
  };

  return (
    <section id="acoustics" className="py-20 md:py-32 border-b border-editorial">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Acoustics & Sound
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
              Chords & Sound
            </h2>
          </div>
          <p className="text-sm font-serif italic text-[var(--text-secondary)] max-w-md">
            Six strings as the tactile counterweight to logic. Standard E-tuning harmonics and deep listening archives.
          </p>
        </div>

        {/* Soundboard & Spotify Sleeve */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Minimalist Guitar String Fretboard + Instrument Monograph */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Synthesized Fretboard Card */}
            <div className="p-6 sm:p-10 rounded-2xl border border-editorial bg-[var(--bg-card)]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-editorial text-xs font-mono">
                <span className="text-[var(--accent)] uppercase font-semibold">
                  Synthesized Fretboard // E2–E4 Standard
                </span>
                <span className="text-[var(--text-muted)] hidden sm:inline">
                  Hover & click a string to strum
                </span>
              </div>

              <div className="space-y-6 py-2">
                {strings.map((str, idx) => {
                  const isPlucked = activeString === idx;
                  return (
                    <div
                      key={str.name}
                      data-cursor="STRUM"
                      onClick={() => playNote(str.freq, idx)}
                      className="group cursor-pointer flex items-center gap-6 select-none py-1"
                    >
                      <div className="w-12 text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                        {str.note} <span className="opacity-50 text-[10px]">{str.gauge}</span>
                      </div>

                      <div className="flex-1 relative flex items-center h-8">
                        {/* String line */}
                        <div
                          className={`w-full rounded-full transition-all duration-150 ${
                            isPlucked 
                              ? 'bg-[var(--accent)] h-1 shadow-sm scale-y-150 animate-pulse' 
                              : 'bg-editorial group-hover:bg-[var(--accent)]/70 h-[1.5px]'
                          }`}
                        />
                        {isPlucked && (
                          <span className="absolute right-0 text-xs font-mono text-[var(--accent)] font-bold animate-pulse">
                            {str.freq.toFixed(1)} Hz ♫
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technical Specifications */}
              <div className="mt-8 pt-6 border-t border-editorial grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">INSTRUMENT</span>
                  <span className="text-[var(--text-primary)] font-medium">Fender Dreadnought</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">FINISH</span>
                  <span className="text-[var(--text-primary)] font-medium">Vintage Sunburst</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">STRINGS</span>
                  <span className="text-[var(--text-primary)] font-medium">Phosphor .010–.046</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">TUNING</span>
                  <span className="text-[var(--text-primary)] font-medium">Standard E440</span>
                </div>
              </div>
            </div>

            {/* Acoustic Philosophy Monograph */}
            <div className="p-6 sm:p-8 rounded-2xl border border-editorial bg-[var(--bg-card)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                Acoustic Discipline
              </span>
              <h3 className="text-xl font-serif italic text-[var(--text-primary)]">
                “Six strings tuned to concert pitch: resonance without an undo buffer.”
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[var(--text-secondary)] leading-relaxed">
                Fingerstyle acoustic guitar serves as the tactile counterweight to systems architecture — pure physical harmonics, open-tuning overtones, muscle memory, and the warm resonance of solid tonewoods.
              </p>
            </div>

          </div>

          {/* Right Column: Guitar Rig Frame + Spotify Archive */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Guitar Photo Frame */}
            <ImageFrame
              src="/images/music/guitar.jpg"
              alt="Fender Sunburst Dreadnought Acoustic Guitar"
              caption="FENDER SUNBURST DREADNOUGHT · ACOUSTIC RIG"
              aspectRatio="aspect-[3/4]"
              placeholderTip="Drop photo: /public/images/music/guitar.jpg"
              dimensions="1200 × 1600 px"
              category="ACOUSTIC RIG"
            />

            {/* Spotify Archive */}
            <div className="p-6 sm:p-8 rounded-2xl border border-editorial bg-[var(--bg-card)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
                  <Disc3 className="w-4 h-4 animate-spin-slow" />
                  <span>Audio Monograph</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase text-[var(--text-primary)]">
                  The Acoustic & Coding Archive
                </h3>
                <p className="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)] mt-1 leading-relaxed">
                  Acoustic fingerpicking, post-rock textures, and ambient minimalism that accompany early morning drafting and late-night compilation cycles.
                </p>
              </div>

              {spotify && (
                <a
                  href={spotify}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="LISTEN"
                  className="inline-flex items-center justify-between p-3.5 rounded-xl border border-editorial hover:border-[var(--accent)] transition-all group bg-[var(--bg-page)]"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent)] font-semibold">
                    Listen on Spotify (@mrinaldo)
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)]" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
