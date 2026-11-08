import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'DIRECTOR @ FINMECHANICS',
    'PRODUCT JOURNEY & GROWTH',
    'SYSTEMS ARCHITECTURE',
    'LOCAL-FIRST DESKTOP',
    'INKTOBER ARTISAN',
    'RECOMMENDATION ENGINES',
    'RUSSIAN REALISM',
    'WILLIAM SHUNN COMPILERS',
    'FINGERSTYLE ACOUSTIC',
    'SUPABASE POSTGRESQL',
    'STORYCRAFT INCUBATION',
    'REACT 19 & ELECTRON'
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-editorial py-4 bg-[var(--bg-card)]/40 select-none">
      <div className="flex w-max animate-marquee">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
