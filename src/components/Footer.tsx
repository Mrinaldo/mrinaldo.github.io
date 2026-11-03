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
    <footer id="contact" className="py-24 sm:py-36 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Giant Direct Contact Prompt */}
        <div className="pb-20 border-b border-editorial space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
            Inquiries & Collaborations
          </div>
          
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold uppercase leading-[0.95] max-w-5xl">
            Have a system or story in mind?
          </h2>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              data-cursor="EMAIL"
              className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-[var(--accent)] hover:underline decoration-1 underline-offset-8 transition-all"
            >
              {EMAIL_CONTACT}
            </a>

            <button
              onClick={copyEmail}
              data-cursor={copied ? "COPIED" : "COPY"}
              className="px-3.5 py-1.5 rounded-full border border-editorial hover:border-[var(--accent)] text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Directory of Verified Links */}
        <div className="py-12 border-b border-editorial grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs font-mono uppercase tracking-wider">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              className="group flex flex-col justify-between p-4 rounded-xl border border-editorial/60 hover:border-[var(--accent)] transition-all bg-[var(--bg-card)]/40 hover:bg-[var(--bg-card)]"
            >
              <span className="text-[10px] text-[var(--text-muted)]">
                [0{idx + 1}]
              </span>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {link.name}
                </span>
                <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
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
