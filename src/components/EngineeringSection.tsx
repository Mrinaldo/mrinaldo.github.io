import React, { useState } from 'react';
import { Project, PortfolioMode } from '../types';
import { PROJECTS } from '../data/projects';
import { 
  Code2, ExternalLink, CheckCircle2, 
  Layers, Sparkles, BookOpen, 
  Briefcase, Monitor
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface EngineeringSectionProps {
  mode: PortfolioMode;
}

export const EngineeringSection: React.FC<EngineeringSectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'desktop': return <Monitor className="w-4 h-4 text-[var(--accent)]" />;
      case 'web': return <Sparkles className="w-4 h-4 text-[var(--accent)]" />;
      case 'extension': return <BookOpen className="w-4 h-4 text-[var(--accent)]" />;
      case 'enterprise': return <Briefcase className="w-4 h-4 text-[var(--accent)]" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="systems" className="py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest mb-2 text-[var(--accent)] font-semibold">
              <Layers className="w-4 h-4" />
              <span>Architectural Index // 01</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight font-heading text-[var(--text-primary)]">
              Engineered Software & Systems
            </h2>
            <p className="text-sm sm:text-base mt-2 max-w-2xl text-[var(--text-secondary)] font-sans">
              Local-first applications, intelligent ranking feeds, reader runtimes, and high-stakes enterprise analytics architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {['all', 'desktop', 'web', 'extension', 'enterprise'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg border transition-all capitalize font-mono ${
                  selectedCategory === category
                    ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-bold border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-md"
              >
                {/* Top Card Bar */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono uppercase tracking-wider font-semibold bg-[var(--bg-card-muted)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-muted)]"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg transition-colors text-[var(--accent)] hover:opacity-80 hover:bg-[var(--bg-card-muted)]"
                          title="Open Live Platform"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-heading text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium mt-0.5 font-mono text-[var(--text-muted)]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase font-semibold tracking-wider text-[var(--text-muted)]">
                      Architectural Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent)]" />
                          <span className="text-[var(--text-secondary)] font-sans">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="px-6 sm:px-8 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-card-muted)] flex flex-wrap items-center gap-1.5 transition-colors">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded font-mono bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Auronova Special Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[var(--accent)]">
                  Live Client Deployment
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
                Auronova Risk Consulting Platform
              </h3>
              <p className="text-sm max-w-2xl text-[var(--text-secondary)] font-sans">
                Engineered for specialized analytics, credit risk modeling, and regulatory compliance (Basel III, IFRS 9). Hosted and maintained live.
              </p>
            </div>

            <a
              href="https://mrinaldo.gitlab.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-sm bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90"
            >
              <span>Visit mrinaldo.gitlab.io</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
