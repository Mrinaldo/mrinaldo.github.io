import React, { useState } from 'react';
import { PortfolioMode } from '../types';
import { SOCIAL_LINKS, EMAIL_CONTACT } from '../data/socials';
import { 
  X, Mail, Check, Copy, ExternalLink, Send, 
  BookOpen, Sparkles, Building2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, SpotifyIcon, SubstackIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: PortfolioMode;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [noteText, setNoteText] = useState('');

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL_CONTACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    const subject = encodeURIComponent('Connecting with Mrinal Dharmik');
    const body = encodeURIComponent(noteText);
    window.location.href = `mailto:${EMAIL_CONTACT}?subject=${subject}&body=${body}`;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Finmechanics': return <Building2 className="w-4 h-4 text-[var(--accent)]" />;
      case 'LinkedIn': return <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" />;
      case 'Substack': return <SubstackIcon className="w-4 h-4 text-[var(--accent)]" />;
      case 'Art Folio': return <InstagramIcon className="w-4 h-4 text-[var(--accent)]" />;
      case 'Instagram': return <InstagramIcon className="w-4 h-4 text-[var(--accent)]" />;
      case 'Goodreads': return <BookOpen className="w-4 h-4 text-[var(--accent)]" />;
      case 'Spotify': return <SpotifyIcon className="w-4 h-4 text-[var(--accent)]" />;
      case 'GitHub': return <GithubIcon className="w-4 h-4 text-[var(--accent)]" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl max-h-[82dvh] sm:max-h-[88vh] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-2xl overflow-hidden z-10 flex flex-col transition-all my-auto">
        {/* Top Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--border-color)] bg-[var(--bg-card-muted)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] shrink-0">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-semibold text-xs sm:text-sm text-[var(--text-primary)]">Initiate Communication // Mrinal Dharmik</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[var(--border-color)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto max-h-[70dvh] sm:max-h-[76vh]">
          
          {/* Email Direct Box */}
          <div className="p-3 sm:p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-muted)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="text-xs uppercase font-mono text-[var(--text-muted)] font-semibold">
                Direct Email:
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-[var(--accent)] mt-0.5">
                {EMAIL_CONTACT}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border-color)] hover:border-[var(--accent)]'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mailer</span>
              </a>
            </div>
          </div>

          {/* Typewriter Scratchpad / Fast Message Form */}
          <form onSubmit={handleSendDraft} className="space-y-2.5 sm:space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider font-mono text-[var(--text-secondary)]">
              Draft a Note directly to Mrinal:
            </label>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Hi Mrinal, I came across your systems and artwork..."
              rows={2}
              className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-muted)] text-[var(--text-primary)] focus:border-[var(--accent)] outline-none transition-colors text-sm font-sans"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!noteText.trim()}
                className={`flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  noteText.trim()
                    ? 'bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 cursor-pointer shadow-sm'
                    : 'bg-[var(--bg-card-muted)] text-[var(--text-muted)] border border-[var(--border-color)] cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Send Note via Mail</span>
              </button>
            </div>
          </form>

          {/* Social Channels Matrix */}
          <div>
            <div className="text-xs uppercase font-mono text-[var(--text-muted)] font-semibold mb-2.5 sm:mb-3">
              Verified Social Channels & Presence:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card-muted)] hover:border-[var(--accent)] flex items-center justify-between gap-3 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
                      {getSocialIcon(link.name)}
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-[var(--text-primary)]">
                        {link.name}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-mono">
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
