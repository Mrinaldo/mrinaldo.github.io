import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../data/projects';
import { ARCHIVED_SITES } from '../data/archivedSites';
import { ArrowUpRight, Plus, Minus, Check, Code2, Sparkles, Terminal } from 'lucide-react';
import { GitlabIcon } from './BrandIcons';
import { ImageFrame } from './ImageFrame';
import { ComingSoonFrame } from './ComingSoonFrame';

export const EngineeringSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(PROJECTS[0].id);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mriterTab, setMriterTab] = useState<'write' | 'outline' | 'bible' | 'publish'>('write');
  const [archiveTab, setArchiveTab] = useState<'hub' | string>('hub');

  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const clickedProjectRef = useRef<string | null>(null);

  const handleToggleProject = (id: string) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      clickedProjectRef.current = id;
      setActiveProject(id);
    }
  };

  useEffect(() => {
    if (clickedProjectRef.current && activeProject === clickedProjectRef.current) {
      const targetId = clickedProjectRef.current;
      clickedProjectRef.current = null;

      // Use a brief timeout to let DOM mutations (collapse of previous item) complete
      const timeoutId = window.setTimeout(() => {
        const el = projectRefs.current[targetId];
        if (el) {
          const headerOffset = 96; // comfortable headroom below the sticky header (h-16 to h-20)
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementPosition - headerOffset),
            behavior: 'smooth',
          });
        }
      }, 40);

      return () => window.clearTimeout(timeoutId);
    }
  }, [activeProject]);

  const getMetricBadge = (id: string) => {
    switch (id) {
      case 'mriter': return 'Free & Open Source / William Shunn DOCX';
      case 'mrews': return 'In The Works // Coming Soon';
      case 'mreader': return 'In The Works // Coming Soon';
      case 'web-archive':
      case 'auronova': return `Web Works Archive // ${ARCHIVED_SITES.length} Production Platforms`;
      case 'events-journal': return 'Rapid Full-Stack Prototype / Mobile in Progress';
      default: return 'Architectural Build';
    }
  };

  const getProjectImagePath = (id: string) => {
    switch (id) {
      case 'mriter': 
        if (mriterTab === 'outline') return '/images/projects/mriter-outline.png';
        if (mriterTab === 'bible') return '/images/projects/mriter-bible.png';
        if (mriterTab === 'publish') return '/images/projects/mriter-publish.png';
        return '/images/projects/mriter.png';
      case 'mrews': return '/images/projects/mrews.png';
      case 'mreader': return '/images/projects/mreader.png';
      case 'web-archive':
      case 'auronova':
        if (archiveTab === 'hub') return '/images/projects/web-archive.png';
        const site = ARCHIVED_SITES.find(s => s.id === archiveTab);
        return site ? site.image : '/images/projects/web-archive.png';
      case 'events-journal': return '/images/projects/events-journal.png';
      default: return `/images/projects/${id}.png`;
    }
  };

  const getMriterCaption = () => {
    switch (mriterTab) {
      case 'outline': return 'MRITER · CHAPTER OUTLINER & BEATS MATRIX';
      case 'bible': return 'MRITER · STORY BIBLE & LORE REPOSITORY';
      case 'publish': return 'MRITER · BOOK TYPESETTER & EPUB 3 / DOCX EXPORTER';
      default: return 'MRITER · MANUSCRIPT CANVAS & SCENE SPEC';
    }
  };

  const getProjectCaption = (id: string) => {
    if (id === 'mriter') return getMriterCaption();
    if (id === 'web-archive' || id === 'auronova') {
      if (archiveTab === 'hub') return 'WEB WORKS ARCHIVE · PORTFOLIO AGGREGATION & LIVE PLATFORMS HUB';
      const site = ARCHIVED_SITES.find(s => s.id === archiveTab);
      return site ? site.caption : 'WEB WORKS ARCHIVE · PRESERVED PRODUCTION PLATFORM';
    }
    return `${id.toUpperCase()} · SYSTEM INTERFACE`;
  };

  return (
    <section id="works" className="py-20 md:py-32 border-b border-editorial relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-editorial">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Engineering & Systems
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase text-[var(--text-primary)] mt-1">
              Selected Works
            </h2>
          </div>
          <p className="text-sm font-serif italic text-[var(--text-secondary)] max-w-md">
            Shaping product journey and scale as Director at{' '}
            <a 
              href="https://www.finmechanics.com/" 
              target="_blank" 
              rel="noreferrer" 
              data-cursor="VISIT"
              className="text-[var(--text-primary)] underline decoration-[var(--accent)]/50 underline-offset-2 hover:text-[var(--accent)] transition-colors not-italic font-sans font-medium"
            >
              Finmechanics
            </a>. High-fidelity software tools, local-first environments, and enterprise platforms.
          </p>
        </div>

        {/* Editorial Project Index Table */}
        <div className="divide-y divide-editorial">
          {PROJECTS.map((project) => {
            const isOpen = activeProject === project.id;
            const isHovered = hoveredProject === project.id;

            return (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[project.id] = el; }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group py-5 sm:py-7 md:py-8 transition-all duration-300 ${
                  isHovered ? 'bg-[var(--accent-subtle)] px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl' : ''
                } ${isOpen ? 'pb-8 sm:pb-10' : ''}`}
              >
                {/* Main Row Bar */}
                <div 
                  data-cursor={isOpen ? "CLOSE" : "EXPAND"}
                  onClick={() => handleToggleProject(project.id)}
                  className="cursor-pointer flex items-center justify-between gap-4 select-none"
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      {project.status === 'coming-soon' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-bold shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                          <span>Coming Soon</span>
                        </span>
                      )}
                      {/* Hover Metric Pill */}
                      <span className={`hidden md:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-editorial text-[var(--accent)] transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}>
                        {getMetricBadge(project.id)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif italic text-[var(--text-secondary)] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-6 lg:gap-10 shrink-0">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] hidden md:inline-block">
                      {project.category}
                    </span>

                    <button
                      type="button"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-editorial group-hover:border-[var(--accent)] flex items-center justify-center text-[var(--text-primary)] transition-all group-hover:scale-105 shrink-0"
                      title={isOpen ? "Collapse" : "Expand details"}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Architectural Dossier */}
                {isOpen && (
                  <div className="mt-6 pt-6 border-t border-editorial-subtle space-y-6 sm:space-y-8 animate-fade-in">
                    
                    {/* Top Row: Description + Highlights */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                          <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>Architectural Overview</span>
                        </div>
                        <p className="text-base sm:text-lg font-serif leading-relaxed text-[var(--text-primary)] font-light">
                          {project.description}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-2">
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

                        <div className="pt-4 border-t border-editorial flex flex-wrap items-center gap-3">
                          {project.status === 'coming-soon' && (
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-mono uppercase tracking-wider font-semibold">
                              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                              <span>In Active Development // Coming Soon</span>
                            </div>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="VISIT"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-xs font-mono uppercase tracking-wider font-bold hover:opacity-90 transition-all shadow-sm"
                            >
                              <span>{(project.id === 'web-archive' || project.id === 'auronova') ? 'Launch Archive Hub' : 'Live Platform'}</span>
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
                              {(project.id === 'web-archive' || project.id === 'auronova') ? (
                                <GitlabIcon className="w-3.5 h-3.5 text-[#fc6d26]" />
                              ) : (
                                <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                              )}
                              <span>
                                {(project.id === 'web-archive' || project.id === 'auronova')
                                  ? 'GitLab Source'
                                  : project.id === 'mriter'
                                  ? 'Free on GitHub'
                                  : 'View Source'}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Interface Screenshot or Coming Soon Blueprint */}
                    <div className="pt-2 space-y-4">
                      {project.status === 'coming-soon' ? (
                        <ComingSoonFrame
                          project={project}
                          aspectRatio="aspect-[16/10]"
                        />
                      ) : (
                        <>
                          {project.id === 'mriter' && (
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                                Studio Module Views:
                              </span>
                              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[var(--bg-card)] border border-editorial">
                                {[
                                  { id: 'write', label: 'Write Canvas' },
                                  { id: 'outline', label: 'Outliner' },
                                  { id: 'bible', label: 'Story Bible' },
                                  { id: 'publish', label: 'Publishing (EPUB 3 / DOCX)' },
                                ].map((tab) => (
                                  <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setMriterTab(tab.id as 'write' | 'outline' | 'bible' | 'publish')}
                                    className={`px-3 py-1 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                                      mriterTab === tab.id
                                        ? 'bg-[var(--accent)] text-white font-bold shadow-sm'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)]'
                                    }`}
                                  >
                                    {tab.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {(project.id === 'web-archive' || project.id === 'auronova') && (
                            <div className="space-y-3">
                              {/* View Switcher Bar */}
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                                    Archived Platforms:
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-semibold">
                                    {ARCHIVED_SITES.length} Preserved
                                  </span>
                                </div>

                                <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[var(--bg-card)] border border-editorial">
                                  <button
                                    type="button"
                                    onClick={() => setArchiveTab('hub')}
                                    className={`px-3 py-1 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                                      archiveTab === 'hub'
                                        ? 'bg-[var(--accent)] text-white font-bold shadow-sm'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)]'
                                    }`}
                                  >
                                    Archive Hub (Overview)
                                  </button>
                                  {ARCHIVED_SITES.map((site) => (
                                    <button
                                      key={site.id}
                                      type="button"
                                      onClick={() => setArchiveTab(site.id)}
                                      className={`px-3 py-1 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                                        archiveTab === site.id
                                          ? 'bg-[var(--accent)] text-white font-bold shadow-sm'
                                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-page)]'
                                      }`}
                                    >
                                      {site.title} ({site.year})
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Active Platform Quick Launch Strip */}
                              {archiveTab !== 'hub' && (() => {
                                const activeSite = ARCHIVED_SITES.find(s => s.id === archiveTab);
                                if (!activeSite) return null;
                                return (
                                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent)]/30">
                                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                                      <span className="font-bold text-[var(--accent)]">{activeSite.title}</span>
                                      <span className="text-[var(--text-muted)]">•</span>
                                      <span className="text-[var(--text-secondary)]">{activeSite.category}</span>
                                      <span className="text-[var(--text-muted)]">•</span>
                                      <span className="text-[var(--text-muted)]">{activeSite.role}</span>
                                    </div>
                                    <a
                                      href={activeSite.liveUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      data-cursor="VISIT"
                                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--accent)] text-white text-[11px] font-mono uppercase tracking-wider font-bold hover:opacity-90 transition-all shadow-sm"
                                    >
                                      <span>Launch {activeSite.title} ↗</span>
                                    </a>
                                  </div>
                                );
                              })()}
                            </div>
                          )}

                          <ImageFrame
                            src={getProjectImagePath(project.id)}
                            alt={`${project.title} — System Interface Screenshot`}
                            caption={getProjectCaption(project.id)}
                            aspectRatio="aspect-[16/10]"
                            placeholderTip={`Drop screenshot into: /public${getProjectImagePath(project.id)}`}
                            dimensions="1600 × 1000 px"
                            category="PROJECT INTERFACE SPEC"
                          />

                          {/* Preserved Systems Directory Cards */}
                          {(project.id === 'web-archive' || project.id === 'auronova') && (
                            <div className="pt-4 space-y-3">
                              <div className="flex items-center justify-between border-b border-editorial pb-2">
                                <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                                  Preserved Systems Directory ({ARCHIVED_SITES.length} Platforms)
                                </span>
                                <span className="text-xs font-mono text-[var(--text-muted)] hidden sm:inline-block">
                                  Standalone Zero-Backend Deployments
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {ARCHIVED_SITES.map((site) => (
                                  <div
                                    key={site.id}
                                    className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all ${
                                      archiveTab === site.id
                                        ? 'border-[var(--accent)] bg-[var(--accent-subtle)]/30 shadow-sm'
                                        : 'border-editorial bg-[var(--bg-card)] hover:border-[var(--accent)]/50'
                                    }`}
                                  >
                                    <div className="space-y-3">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                                          {site.category} // {site.year}
                                        </span>
                                        {site.badge && (
                                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-editorial text-[var(--text-muted)] shrink-0">
                                            {site.badge}
                                          </span>
                                        )}
                                      </div>

                                      <div>
                                        <h4 className="text-lg font-display font-bold uppercase text-[var(--text-primary)]">
                                          {site.title}
                                        </h4>
                                        <p className="text-xs font-serif italic text-[var(--text-secondary)] mt-0.5 line-clamp-2">
                                          {site.subtitle}
                                        </p>
                                      </div>

                                      <p className="text-xs font-sans text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                                        {site.summary}
                                      </p>

                                      <div className="flex flex-wrap gap-1.5 pt-1">
                                        {site.tags.slice(0, 3).map((tag) => (
                                          <span
                                            key={tag}
                                            className="text-[10px] font-mono px-2 py-0.5 rounded border border-editorial text-[var(--text-muted)] bg-[var(--bg-page)]"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="pt-4 mt-3 border-t border-editorial flex items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        onClick={() => setArchiveTab(site.id)}
                                        className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors underline decoration-dotted cursor-pointer"
                                      >
                                        Preview
                                      </button>
                                      <a
                                        href={site.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-cursor="VISIT"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] hover:underline"
                                      >
                                        <span>Launch Site</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
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
