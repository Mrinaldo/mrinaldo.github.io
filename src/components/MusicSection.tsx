import React, { useState } from 'react';
import { PortfolioMode } from '../types';
import { Music, Disc3, ExternalLink, Volume2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socials';

interface MusicSectionProps {
  mode: PortfolioMode;
}

export const MusicSection: React.FC<MusicSectionProps> = () => {
  const spotify = SOCIAL_LINKS.find(s => s.name === 'Spotify')?.url;
  const [activeString, setActiveString] = useState<number | null>(null);

  // Guitar strings frequencies (Standard E Tuning: E2, A2, D3, G3, B3, E4)
  const strings = [
    { note: 'E', stringName: '1st (High E)', freq: 329.63, gauge: '0.010' },
    { note: 'B', stringName: '2nd (B)', freq: 246.94, gauge: '0.013' },
    { note: 'G', stringName: '3rd (G)', freq: 196.00, gauge: '0.017' },
    { note: 'D', stringName: '4th (D)', freq: 146.83, gauge: '0.026' },
    { note: 'A', stringName: '5th (A)', freq: 110.00, gauge: '0.036' },
    { note: 'E', stringName: '6th (Low E)', freq: 82.41, gauge: '0.046' },
  ];

  const playStringNote = (freq: number, index: number) => {
    setActiveString(index);
    setTimeout(() => setActiveString(null), 800);

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle'; // Smooth acoustic-like timbre
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio might be prevented before user interaction
    }
  };

  return (
    <section id="fretboard" className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest mb-2 text-[var(--accent)] font-semibold">
              <Music className="w-4 h-4" />
              <span>Sonic Spectrum // 04</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
              The Fretboard & Acoustics
            </h2>
            <p className="text-sm sm:text-base mt-2 max-w-2xl text-[var(--text-secondary)] font-sans">
              Guitar is where rhythm and muscle memory take over. When software problems hit a wall, twenty minutes on six strings resets the mind.
            </p>
          </div>

          {spotify && (
            <a
              href={spotify}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all self-start md:self-auto border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent)] shadow-sm"
            >
              <Disc3 className="w-4 h-4 text-[var(--accent)]" />
              <span>Spotify Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          )}
        </div>

        {/* Two-Column Grid: Interactive Fretboard + Spotify Vibe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Guitar Strings */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm text-[var(--text-primary)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-color)]">
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-[var(--accent)]" />
                <h4 className="font-heading font-bold text-lg">
                  Interactive Soundboard • Standard Tuning (E A D G B E)
                </h4>
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline">
                Click a string to strum
              </span>
            </div>

            {/* Fretboard strings */}
            <div className="space-y-4 py-2">
              {strings.map((str, idx) => {
                const isPlucked = activeString === idx;
                return (
                  <div
                    key={str.stringName}
                    onClick={() => playStringNote(str.freq, idx)}
                    className="group cursor-pointer flex items-center gap-4 select-none"
                  >
                    <div className="w-16 text-xs font-mono font-bold text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                      {str.note} <span className="opacity-60 text-[10px]">({str.gauge})</span>
                    </div>

                    <div className="flex-1 relative flex items-center h-8">
                      {/* String line */}
                      <div
                        className={`w-full rounded-full transition-all duration-300 ${
                          isPlucked 
                            ? 'bg-[var(--accent)] h-1.5 shadow-md scale-y-125' 
                            : 'bg-[var(--border-color)] group-hover:bg-[var(--accent)]/70 h-[2px]'
                        }`}
                      />

                      {/* Strum wave readout */}
                      {isPlucked && (
                        <span className="absolute right-0 text-xs font-mono font-bold text-[var(--accent)] animate-pulse">
                          {str.freq.toFixed(1)} Hz ♫
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-[var(--text-muted)] font-mono mt-6 text-center">
              Synthesized through Web Audio API. Fingerstyle acoustic patterns & electric tone experiments.
            </p>
          </div>

          {/* Right Column: Spotify & Sonic Corner */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spotify Card */}
            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)]">
                  <Disc3 className="w-6 h-6 animate-spin-slow" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[var(--text-primary)]">
                    The Soundtrack to Code & Words
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    Curated on Spotify by @mrinaldo
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)] font-sans mb-6">
                Deep acoustic fingerpicking, classic rock riffs, and atmospheric instrumental textures that accompany late-night coding sessions and early morning drafts.
              </p>

              {spotify && (
                <a
                  href={spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-sm bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90"
                >
                  <Disc3 className="w-4 h-4" />
                  <span>Open Spotify Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>
              )}
            </div>

            {/* Quick Quote on Music */}
            <div className="p-5 rounded-xl border border-dashed border-[var(--border-color)] text-xs font-serif italic text-[var(--text-muted)] leading-relaxed bg-[var(--bg-card-muted)]/50">
              “Music is the architecture of time. Just as good code needs structure and a novel needs cadence, a guitar chord anchors the present moment.”
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
