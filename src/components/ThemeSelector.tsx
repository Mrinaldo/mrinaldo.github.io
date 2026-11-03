import React from 'react';
import { ThemeId } from '../types';
import { Palette, Check } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
}

export const THEMES_META: {
  id: ThemeId;
  name: string;
  subtitle: string;
  bgPreview: string;
  accentPreview: string;
}[] = [
  {
    id: 'atelier',
    name: 'The Atelier',
    subtitle: 'Ivory & Terracotta',
    bgPreview: '#FAF7F2',
    accentPreview: '#C2410C',
  },
  {
    id: 'obsidian',
    name: 'Obsidian Forge',
    subtitle: 'Graphite & Amber',
    bgPreview: '#0B0E14',
    accentPreview: '#F59E0B',
  },
  {
    id: 'gazette',
    name: 'Broadside Gazette',
    subtitle: 'Newsprint & Pine',
    bgPreview: '#F4F0E6',
    accentPreview: '#1B4332',
  },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onSelectTheme }) => {
  return (
    <div className="w-full bg-[var(--bg-card)] border-b border-[var(--border-color)] py-2.5 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Label */}
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
          <Palette className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span className="font-semibold uppercase tracking-wider">Design System:</span>
          <span className="hidden md:inline opacity-75">Select a locked-in palette to preview</span>
        </div>

        {/* 3 Theme Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
          {THEMES_META.map((t) => {
            const isSelected = currentTheme === t.id;

            return (
              <button
                key={t.id}
                onClick={() => onSelectTheme(t.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[var(--accent-muted)] border-[var(--accent)] text-[var(--text-primary)] shadow-sm'
                    : 'bg-[var(--bg-page)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                }`}
                title={`Preview ${t.name} (${t.subtitle})`}
              >
                {/* Micro Color Dots */}
                <div className="flex items-center -space-x-1">
                  <span
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: t.bgPreview }}
                  />
                  <span
                    className="w-3 h-3 rounded-full shadow-sm"
                    style={{ backgroundColor: t.accentPreview }}
                  />
                </div>

                <span className="font-mono">{t.name}</span>
                {isSelected && <Check className="w-3 h-3 text-[var(--accent)]" />}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
