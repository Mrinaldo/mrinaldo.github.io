import React from 'react';
import { Project } from '../types';
import { Sparkles, Terminal } from 'lucide-react';

interface ComingSoonFrameProps {
  project: Project;
  aspectRatio?: string;
}

export const ComingSoonFrame: React.FC<ComingSoonFrameProps> = ({
  project,
  aspectRatio = 'aspect-[16/10]'
}) => {
  const getArchitectureSpecs = () => {
    if (project.id === 'mrews') {
      return [
        {
          label: 'AFFINITY MATRIX',
          desc: 'Dynamic dwell-time, bookmark affinity & decay algorithm for Instagram-style news feed.'
        },
        {
          label: 'INGESTION WORKFLOW',
          desc: 'Automated RSS & API sync pipeline transforming raw feeds into high-density bullet cards.'
        },
        {
          label: 'MONOREPO ARCHITECTURE',
          desc: 'Cross-platform PWA & mobile app powered by Next.js 15, Supabase & PostgreSQL RLS.'
        }
      ];
    }

    if (project.id === 'mreader') {
      return [
        {
          label: 'FOLIATE.JS ENGINE',
          desc: 'Immaculate typography reflow, custom paper themes, and distraction-free layout control.'
        },
        {
          label: 'INDEXEDDB CACHE',
          desc: 'Dexie-backed zero-latency local storage. 100% private, local-first reading sanctuary.'
        },
        {
          label: 'MANIFEST V3 PACKAGE',
          desc: 'Optimized Chromium browser extension tailored for prolonged literary focus.'
        }
      ];
    }

    return project.highlights.slice(0, 3).map((h, i) => ({
      label: `PHASE ${i + 1}`,
      desc: h
    }));
  };

  const specs = getArchitectureSpecs();

  return (
    <div className="space-y-3 pb-4 sm:pb-2">
      {/* Blueprint Visual Box */}
      <div 
        className={`relative w-full min-h-[460px] sm:min-h-0 sm:${aspectRatio} rounded-xl sm:rounded-2xl border border-editorial overflow-hidden bg-[var(--bg-card)] p-5 sm:p-8 md:p-10 flex flex-col justify-between select-none shadow-sm group`}
      >
        {/* Corner Crosshairs */}
        <span className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[var(--accent)] select-none opacity-60">+</span>
        <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-[var(--accent)] select-none opacity-60">+</span>
        <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-[var(--accent)] select-none opacity-60">+</span>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-[var(--accent)] select-none opacity-60">+</span>

        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Architectural Build Spec</span>
            <span className="opacity-40">·</span>
            <span className="text-[var(--accent)] font-semibold">[{project.category.toUpperCase()}]</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-bold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span>In The Works // Coming Soon</span>
          </div>
        </div>

        {/* Center Architectural Blueprint Body */}
        <div className="my-auto py-4 sm:py-6 space-y-4 sm:space-y-6 max-w-3xl">
          <div>
            <h4 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h4>
            <p className="text-sm sm:text-base font-serif italic text-[var(--text-secondary)] mt-1.5 leading-relaxed">
              {project.subtitle} — System core currently in active staging. Interface previews and releases will be published upon public beta.
            </p>
          </div>

          {/* Three Architecture Spec Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {specs.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl border border-editorial/70 bg-[var(--bg-page)]/60 space-y-1.5"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/70" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Status Banner */}
        <div className="pt-4 border-t border-editorial/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
            <span className="text-[var(--text-secondary)]">Public deployment and UI preview upcoming.</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold">
            STATUS: ACTIVE DEVELOPMENT
          </span>
        </div>
      </div>

      {/* Editorial Caption Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-[var(--text-muted)] px-1 pt-0.5">
        <span className="truncate uppercase">
          {project.title} · ARCHITECTURAL SYSTEM BLUEPRINT // IN PROGRESS
        </span>
        <span className="text-[var(--accent)] font-semibold uppercase tracking-wider shrink-0">
          COMING SOON // STAGING
        </span>
      </div>
    </div>
  );
};
