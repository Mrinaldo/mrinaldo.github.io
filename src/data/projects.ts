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
    icon: 'Feather',
    status: 'released'
  },
  {
    id: 'mrews',
    title: 'Mrews',
    subtitle: 'Knowledge-First Curated News Feed',
    description: 'An intelligent news aggregator transforming chaotic information into an engaging, visual Instagram-style feed. Powered by dynamic multi-factor affinity scoring that balances user dwell time, interaction vectors, and recency decay to serve high-density bullet summaries. Currently in active development.',
    tags: ['Coming Soon', 'Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'RLS', 'Recommendation Engine'],
    highlights: [
      'Multi-factor affinity ranking (dwell time, clicks, bookmarks, recency decay)',
      'High-density bullet summary cards for rapid knowledge absorption',
      'Google OAuth with PKCE flow & mobile-ready monorepo architecture',
      'Automated RSS feed ingestion & sync pipelines'
    ],
    githubUrl: 'https://github.com/Mrinaldo',
    category: 'web',
    icon: 'Sparkles',
    status: 'coming-soon'
  },
  {
    id: 'mreader',
    title: 'Mreader',
    subtitle: 'Distraction-Free E-Reader Engine',
    description: 'A minimalist Chromium extension and web e-reader engineered to provide an immaculate reading sanctuary for long-form literature. Features Foliate-js parsing engine and Dexie IndexedDB for instant, zero-latency offline book caching. Currently in active development.',
    tags: ['Coming Soon', 'React 19', 'Foliate-js', 'Dexie IndexedDB', 'Vite', 'Tailwind v4'],
    highlights: [
      'Offline-first architecture powered by IndexedDB',
      'Standards-compliant EPUB reflow & pagination',
      'Custom typography controls designed for prolonged reading comfort',
      'Lightweight extension package with confetti milestones'
    ],
    githubUrl: 'https://github.com/Mrinaldo',
    category: 'extension',
    icon: 'BookOpen',
    status: 'coming-soon'
  },
  {
    id: 'web-archive',
    title: 'Web Works Archive',
    subtitle: 'Curated Production Web Platforms & Interactive Systems',
    description: 'A central portfolio aggregation hub and companion digital archive preserving standalone production web platforms, single-page React applications, and interactive digital interfaces engineered across the years. Curates live deployments including SARC IIT Bombay (React 19 SPA), Auronova Consulting (Fintech & Lottie Motion), and Alumination \'17 (Skrollr Parallax) with zero-backend static architectures and live in-browser playback.',
    tags: ['Portfolio Archive', 'React 19 & SPAs', 'Parallax Motion', 'Corporate Fintech', 'GitLab Pages', 'Zero Backend'],
    highlights: [
      'SARC IIT Bombay: Pure React 19 single-page app with 3D tilt cards, dynamic carousels & zero backend',
      'Auronova Consulting: 40+ page enterprise risk consultancy portal with bespoke Lottie & SVG motion UX',
      'Alumination \'17: Flagship IIT Bombay convention portal with Skrollr parallax mechanics & vector animation',
      'Central aggregation engine featuring category filters, search indexing, full-resolution lightboxes & direct launches'
    ],
    liveUrl: 'https://mrinaldo.gitlab.io/',
    githubUrl: 'https://gitlab.com/Mrinaldo/mrinaldo.gitlab.io',
    category: 'web',
    icon: 'Layers',
    status: 'live'
  },
  {
    id: 'events-journal',
    title: 'EventsJournal',
    subtitle: 'Rapid Social Community Prototype',
    description: 'Conceived during a conversation with a friend and rapidly prototyped into a fully functional web platform for private events and communities. Features host tier administration, dynamic multi-photo event feeds with engagement ranking, and row-level privacy controls. Currently iterating on UI refinements and engineering a dedicated mobile application.',
    tags: ['Rapid Prototype', 'Next.js', 'Supabase', 'Mobile App in Progress', 'PostgreSQL Triggers', 'Tailwind CSS'],
    highlights: [
      'Rapidly prototyped from idea to live full-stack web application',
      'Multi-photo event feeds with SQL traction ranking triggers',
      'Granular Row-Level Security (RLS) and event guest management',
      'Upcoming roadmap: UI overhaul and dedicated functional mobile application'
    ],
    liveUrl: 'https://events-journal.vercel.app',
    githubUrl: 'https://github.com/Mrinaldo',
    category: 'web',
    icon: 'Users',
    status: 'live'
  }
];
