import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ArrowUpRight, Plus, Minus, Check, Code2, Sparkles, Terminal } from 'lucide-react';

export const EngineeringSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(PROJECTS[0].id);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const getMetricBadge = (id: string) => {
    switch (id) {
      case 'mriter': return '100% Local-First / William Shunn DOCX';
      case 'mrews': return 'Multi-Factor Vector Affinity Engine';
      case 'mreader': return 'Foliate.js / IndexedDB 0ms Latency';
      case 'auronova': return 'Basel III & IFRS 9 Production Portal';
      case 'events-journal': return 'PostgreSQL Triggers & Social Graph';
      default: return 'Architectural Build';
    }
  };

  return (
    <section id="works" className="py-20 md:py-32 border-b border-editorial relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Index / 01
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
              Selected Works
            </h2>
          </div>
          <p className="text-sm font-serif italic text-[var(--text-secondary)] max-w-md">
            Architected for focus, scale, and local-first data ownership. High-fidelity software tools and enterprise risk modeling platforms.
          </p>
        </div>

        {/* Editorial Project Index Table */}
        <div className="divide-y divide-editorial">
          {PROJECTS.map((project, idx) => {
            const isOpen = activeProject === project.id;
            const isHovered = hoveredProject === project.id;
            const indexNumber = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group py-8 sm:py-10 transition-all duration-300 ${
                  isHovered ? 'bg-[var(--accent-subtle)] px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl' : ''
                }`}
              >
                {/* Main Row Bar */}
                <div 
                  data-cursor={isOpen ? "CLOSE" : "EXPAND"}
                  onClick={() => setActiveProject(isOpen ? null : project.id)}
                  className="cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-xs sm:text-sm font-mono text-[var(--accent)] font-semibold">
                      {indexNumber}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>
                        {/* Hover Metric Pill */}
                        <span className={`hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-editorial text-[var(--accent)] transition-opacity duration-300 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          {getMetricBadge(project.id)}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)] mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 lg:gap-10 self-end lg:self-auto">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] hidden sm:inline-block">
                      {project.category}
                    </span>

                    <button
                      className="w-10 h-10 rounded-full border border-editorial group-hover:border-[var(--accent)] flex items-center justify-center text-[var(--text-primary)] transition-all group-hover:scale-110"
                      title={isOpen ? "Collapse" : "Expand details"}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Architectural Dossier */}
                {isOpen && (
                  <div className="mt-8 pt-8 border-t border-editorial/50 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span>Architectural Overview</span>
                      </div>
                      <p className="text-base sm:text-lg font-serif leading-relaxed text-[var(--text-primary)] font-light">
                        {project.description}
                      </p>

                      <div className="pt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1 rounded-full border border-editorial text-[var(--text-secondary)] bg-[var(--bg-page)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[var(--bg-card)] p-6 rounded-2xl border border-editorial shadow-sm">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 font-semibold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Engineering Highlights</span>
                        </div>
                        <ul className="space-y-2.5 text-xs font-mono text-[var(--text-secondary)]">
                          {project.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent)]" />
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-editorial flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="VISIT"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--bg-page)] text-xs font-mono uppercase tracking-wider font-bold hover:opacity-90 transition-all shadow-sm"
                          >
                            <span>Live Platform</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="SOURCE"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-editorial text-[var(--text-primary)] text-xs font-mono uppercase tracking-wider hover:border-[var(--accent)] transition-all bg-[var(--bg-page)]"
                          >
                            <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                            <span>View Source</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
