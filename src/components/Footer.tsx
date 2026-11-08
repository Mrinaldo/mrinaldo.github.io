import React, { useState } from 'react';
import { SOCIAL_LINKS, EMAIL_CONTACT } from '../data/socials';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL_CONTACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="pt-12 sm:pt-16 pb-8 sm:pb-12 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Giant Direct Contact Prompt */}
        <div className="pb-10 sm:pb-12 border-b border-editorial space-y-4 sm:space-y-5">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
            Inquiries & Collaborations
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase leading-tight max-w-2xl">
            Have a system or story in mind?
          </h2>

          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              data-cursor="EMAIL"
              className="text-xl sm:text-3xl md:text-4xl font-serif italic text-[var(--accent)] hover:underline decoration-1 underline-offset-6 transition-all"
            >
              {EMAIL_CONTACT}
            </a>

            <button
              onClick={copyEmail}
              data-cursor={copied ? "COPIED" : "COPY"}
              className="px-3 py-1.5 rounded-full border border-editorial hover:border-[var(--accent)] text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Directory of Verified Links */}
        <div className="py-8 sm:py-10 border-b border-editorial grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              className="group flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-xl border border-editorial/60 hover:border-[var(--accent)] transition-all bg-[var(--bg-card)]/40 hover:bg-[var(--bg-card)]"
            >
              <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {link.name}
              </span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} Mrinal Dharmik. All code, prose, and visual studies original.
          </div>
          <div>
            Built with React 19 & Tailwind CSS. Typography: Syne, Newsreader & JetBrains Mono.
          </div>
        </div>

      </div>
    </footer>
  );
};
