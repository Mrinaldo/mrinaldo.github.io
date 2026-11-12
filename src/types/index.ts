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

export interface ArchivedSite {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  tags: string[];
  liveUrl: string;
  image: string;
  caption: string;
  highlights: string[];
  badge?: string;
  stats?: { label: string; value: string }[];
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
