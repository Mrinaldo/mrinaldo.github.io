export type ThemeId = 'atelier' | 'obsidian' | 'gazette';

export type PortfolioMode = 'engineer' | 'artist';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'desktop' | 'web' | 'extension' | 'enterprise';
  icon: string;
  status?: 'released' | 'coming-soon' | 'live' | 'enterprise';
}

export interface AuthorStudy {
  author: string;
  period: string;
  focus: string;
  keyWorks: string[];
  reflection: string;
  quote?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
  description: string;
}
