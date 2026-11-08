import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'mriter',
    title: 'Mriter',
    subtitle: 'The Novelist & Publishing Studio',
    description: 'A distraction-free desktop manuscript writing and self-publishing studio for novelists and storytellers. Engineered for deep focus with William Shunn industry-standard manuscript format export (.docx) and valid EPUB 3 ebook generation ready for Amazon KDP & Apple Books. 100% free and open source for everyone.',
    tags: ['Free & Open Source', 'Electron', 'React 19', 'TypeScript', 'Tailwind CSS', 'TipTap', 'EPUB 3 / DOCX'],
    highlights: [
      'Free and open source for everyone on GitHub',
      'Zen distraction-free typewriter scrolling with warm paper themes',
      'William Shunn standard manuscript (.docx) & EPUB 3 exporter',
      'Deep Story Bible & world-building lore database',
      'Outliner matrix with scene status tracking & POV synopses'
    ],
    githubUrl: 'https://github.com/Mrinaldo/mriter',
    category: 'desktop',
    icon: 'Feather'
  },
  {
    id: 'mrews',
    title: 'Mrews',
    subtitle: 'Knowledge-First Curated News Feed',
    description: 'An intelligent news aggregator transforming chaotic information into an engaging, visual Instagram-style feed. Powered by dynamic multi-factor affinity scoring that balances user dwell time, interaction vectors, and recency decay to serve high-density bullet summaries.',
    tags: ['Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'RLS', 'Recommendation Engine'],
    highlights: [
      'Multi-factor affinity ranking (dwell time, clicks, bookmarks, recency decay)',
      'High-density bullet summary cards for rapid knowledge absorption',
      'Google OAuth with PKCE flow & mobile-ready monorepo architecture',
      'Automated RSS feed ingestion & sync pipelines'
    ],
    githubUrl: 'https://github.com/Mrinaldo',
    category: 'web',
    icon: 'Sparkles'
  },
  {
    id: 'mreader',
    title: 'Mreader',
    subtitle: 'Distraction-Free E-Reader Engine',
    description: 'A minimalist Chromium extension and web e-reader engineered to provide an immaculate reading sanctuary for long-form literature. Features Foliate-js parsing engine and Dexie IndexedDB for instant, zero-latency offline book caching.',
    tags: ['React 19', 'Foliate-js', 'Dexie IndexedDB', 'Vite', 'Tailwind v4'],
    highlights: [
      'Offline-first architecture powered by IndexedDB',
      'Standards-compliant EPUB reflow & pagination',
      'Custom typography controls designed for prolonged reading comfort',
      'Lightweight extension package with confetti milestones'
    ],
    githubUrl: 'https://github.com/Mrinaldo',
    category: 'extension',
    icon: 'BookOpen'
  },
  {
    id: 'auronova',
    title: 'Auronova Consulting',
    subtitle: 'Enterprise Risk & Financial Analytics Portal',
    description: 'Production web platform developed for a specialized analytics and risk management consultancy in the banking and fintech sectors. Highlights deep domain frameworks including Basel II/III compliance, IFRS 9, FRTB, credit risk modeling, and RAROC systems.',
    tags: ['Corporate Analytics', 'Fintech', 'Risk Modeling', 'Responsive Architecture'],
    highlights: [
      'Interactive risk modeling & analytics domain index',
      'Comprehensive regulatory compliance framework mapping',
      'Clean enterprise navigation and high-fidelity presentation',
      'Live deployment accessible globally'
    ],
    liveUrl: 'https://mrinaldo.gitlab.io/',
    category: 'enterprise',
    icon: 'Briefcase'
  },
  {
    id: 'events-journal',
    title: 'EventsJournal',
    subtitle: 'Event-Driven Social Community Platform',
    description: 'A Next.js & Supabase social platform engineered for private events and communities. Features host tier administration, dynamic multi-photo social feeds with engagement ranking, friend relationship graphs, and row-level privacy controls.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL Triggers', 'Tailwind CSS', 'Social Graph'],
    highlights: [
      'Social feeds supporting multi-photo posts with SQL-based traction ranking',
      'Unified host store with tiered guest limits and join-request queues',
      'Global friends graph and comprehensive user blocking controls',
      'Robust Row Level Security (RLS) enforcement'
    ],
    liveUrl: 'https://events-journal.vercel.app',
    githubUrl: 'https://github.com/Mrinaldo',
    category: 'web',
    icon: 'Users'
  }
];
