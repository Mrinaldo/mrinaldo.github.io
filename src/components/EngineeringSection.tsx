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

export const EngineeringSection: React.FC<EngineeringSectionProps> = ({ mode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const isEngineer = mode === 'engineer';

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'desktop': return <Monitor className="w-4 h-4 text-cyan-400" />;
      case 'web': return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'extension': return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'enterprise': return <Briefcase className="w-4 h-4 text-amber-400" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="systems" className={`py-16 transition-colors duration-500 ${
      isEngineer ? 'bg-transparent text-stone-200' : 'bg-transparent text-stone-800'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`flex items-center gap-2 text-xs uppercase font-mono tracking-widest mb-2 ${
              isEngineer ? 'text-cyan-400' : 'text-amber-800'
            }`}>
              <Layers className="w-4 h-4" />
              <span>Architectural Index // 01</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-bold tracking-tight ${
              isEngineer ? 'font-mono text-white' : 'font-serif text-stone-900'
            }`}>
              Engineered Software & Systems
            </h2>
            <p className={`text-sm sm:text-base mt-2 max-w-2xl ${
              isEngineer ? 'text-stone-400 font-sans' : 'text-stone-600 font-serif'
            }`}>
              Local-first applications, intelligent ranking feeds, reader runtimes, and high-stakes enterprise analytics architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {['all', 'desktop', 'web', 'extension', 'enterprise'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg border transition-all capitalize ${
                  selectedCategory === category
                    ? isEngineer
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm'
                      : 'bg-stone-900 text-white font-bold border-stone-800 shadow-sm'
                    : isEngineer
                      ? 'bg-cyan-950/30 text-stone-400 border-cyan-900/40 hover:text-cyan-300'
                      : 'bg-white text-stone-600 border-stone-300 hover:text-stone-900'
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
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isEngineer
                    ? 'bg-[#0f172a]/90 border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/50'
                    : 'bg-white border-stone-300/80 hover:border-amber-600/50 hover:shadow-xl hover:shadow-stone-200'
                }`}
              >
                {/* Top Card Bar */}
                <div className={`p-6 sm:p-8 space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono uppercase tracking-wider font-semibold ${
                      isEngineer
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                        : 'bg-stone-100 text-stone-800 border border-stone-200'
                    }`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`p-2 rounded-lg transition-colors ${
                            isEngineer 
                              ? 'text-stone-400 hover:text-cyan-300 hover:bg-cyan-950' 
                              : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                          }`}
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
                          className={`p-2 rounded-lg transition-colors ${
                            isEngineer 
                              ? 'text-cyan-400 hover:text-cyan-200 hover:bg-cyan-950' 
                              : 'text-amber-800 hover:text-amber-950 hover:bg-amber-100'
                          }`}
                          title="Open Live Platform"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                      isEngineer ? 'font-mono text-white group-hover:text-cyan-300 transition-colors' : 'font-serif text-stone-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium mt-0.5 ${
                      isEngineer ? 'text-cyan-400/80 font-mono' : 'text-amber-800 font-serif italic'
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    isEngineer ? 'text-stone-300 font-sans' : 'text-stone-700 font-sans'
                  }`}>
                    {project.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2">
                    <div className={`text-xs font-mono uppercase font-semibold tracking-wider ${
                      isEngineer ? 'text-stone-400' : 'text-stone-500'
                    }`}>
                      Architectural Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isEngineer ? 'text-cyan-400' : 'text-amber-700'
                          }`} />
                          <span className={isEngineer ? 'text-stone-300 font-mono' : 'text-stone-700 font-sans'}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className={`px-6 sm:px-8 py-4 border-t flex flex-wrap items-center gap-1.5 transition-colors ${
                  isEngineer ? 'bg-[#0b101c] border-cyan-950/80' : 'bg-[#faf7f2] border-stone-200'
                }`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                        isEngineer 
                          ? 'bg-slate-900 text-stone-300 border border-slate-800' 
                          : 'bg-white text-stone-700 border border-stone-200'
                      }`}
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
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl border transition-all ${
          isEngineer
            ? 'bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border-cyan-800/40'
            : 'bg-gradient-to-r from-amber-50 via-white to-amber-50/60 border-amber-900/15'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className={`text-xs uppercase font-mono tracking-wider font-semibold ${
                  isEngineer ? 'text-cyan-300' : 'text-amber-900'
                }`}>
                  Live Client Deployment
                </span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${
                isEngineer ? 'font-mono text-white' : 'font-serif text-stone-900'
              }`}>
                Auronova Risk Consulting Platform
              </h3>
              <p className={`text-sm max-w-2xl ${
                isEngineer ? 'text-stone-300' : 'text-stone-600 font-serif'
              }`}>
                Engineered for specialized analytics, credit risk modeling, and regulatory compliance (Basel III, IFRS 9). Hosted and maintained live.
              </p>
            </div>

            <a
              href="https://mrinaldo.gitlab.io/"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md ${
                isEngineer
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold'
                  : 'bg-stone-900 hover:bg-stone-800 text-white font-serif'
              }`}
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
