import React from 'react';
import { PortfolioMode } from '../types';
import { InkCanvas } from './InkCanvas';
import { Feather, ArrowUpRight, PenTool, Image as ImageIcon } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';
import { SOCIAL_LINKS } from '../data/socials';

interface ArtSectionProps {
  mode: PortfolioMode;
}

export const ArtSection: React.FC<ArtSectionProps> = ({ mode }) => {
  const isEngineer = mode === 'engineer';
  const instagram = SOCIAL_LINKS.find(s => s.name === 'Instagram')?.url;

  return (
    <section id="inkwell" className={`py-16 transition-colors duration-500 ${
      isEngineer ? 'bg-transparent text-stone-200' : 'bg-transparent text-stone-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs uppercase font-mono tracking-widest mb-2 ${
              isEngineer ? 'text-cyan-400' : 'text-amber-800'
            }`}>
              <Feather className="w-4 h-4" />
              <span>Visual Craft // 02</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isEngineer ? 'font-mono text-white' : 'font-serif text-stone-900'
            }`}>
              The Inkwell & Inktober Chronicles
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-2xl ${
              isEngineer ? 'text-stone-400 font-sans' : 'text-stone-700 font-serif'
            }`}>
              Pen on paper demands absolute intentionality. Without an undo button, every stroke, hatching density, and ink bleed becomes a permanent truth.
            </p>
          </div>

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all self-start md:self-auto border ${
                isEngineer
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800 hover:border-cyan-400 font-mono'
                  : 'bg-white text-stone-800 border-stone-300 hover:border-amber-700 font-serif shadow-sm'
              }`}
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
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
            <div className={`p-6 rounded-2xl border transition-all ${
              isEngineer 
                ? 'bg-[#0f172a]/80 border-cyan-900/30 text-stone-300' 
                : 'bg-white border-stone-300/80 text-stone-800 shadow-md'
            }`}>
              <div className="flex items-center gap-2 text-amber-700 mb-2 font-serif text-sm font-bold">
                <PenTool className="w-4 h-4" />
                <span>The Art of the Irreversible Line</span>
              </div>
              <p className="text-sm leading-relaxed font-serif">
                In software, we write tests and refactor with git. In ink drawing, you live with your initial marks. Inktober is an exercise in focus, line weight control, and embracing happy accidents on 300gsm cold-press paper.
              </p>

              <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                <span className="text-stone-500">Favorite Medium:</span>
                <span className="font-semibold text-amber-800 dark:text-amber-400">Sakura Pigma Micron + Pentel Pocket Brush</span>
              </div>
            </div>

            {/* Gallery Placeholder Frame */}
            <div className={`p-6 rounded-2xl border transition-all relative overflow-hidden ${
              isEngineer 
                ? 'bg-[#0b101c] border-cyan-900/40 text-stone-300' 
                : 'bg-[#faf7f2] border-stone-300 text-stone-800'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-wider font-semibold opacity-75">
                  Portfolio Gallery Showcase
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-serif italic border border-amber-300">
                  Curating Ink Pieces
                </span>
              </div>

              <div className="rounded-xl border-2 border-dashed border-stone-300 dark:border-stone-700 p-8 text-center space-y-3 bg-white/50 dark:bg-black/20">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 dark:bg-stone-800 flex items-center justify-center text-amber-800 dark:text-amber-400">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100">
                    High-Res Ink Scans In Preparation
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-serif mt-1 max-w-xs mx-auto">
                    New Inktober studies, character sketches, and pen-and-wash works will be exhibited here shortly.
                  </p>
                </div>

                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 pt-2"
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
