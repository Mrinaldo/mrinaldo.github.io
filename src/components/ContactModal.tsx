import React, { useState } from 'react';
import { PortfolioMode } from '../types';
import { SOCIAL_LINKS, EMAIL_CONTACT } from '../data/socials';
import { 
  X, Mail, Check, Copy, ExternalLink, Send, 
  BookOpen, Globe, Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, SpotifyIcon } from './BrandIcons';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: PortfolioMode;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, mode }) => {
  const [copied, setCopied] = useState(false);
  const [noteText, setNoteText] = useState('');

  if (!isOpen) return null;

  const isEngineer = mode === 'engineer';

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
      case 'LinkedIn': return <LinkedinIcon className="w-4 h-4 text-sky-500" />;
      case 'Instagram': return <InstagramIcon className="w-4 h-4 text-pink-500" />;
      case 'Goodreads': return <BookOpen className="w-4 h-4 text-amber-700" />;
      case 'Spotify': return <SpotifyIcon className="w-4 h-4 text-emerald-500" />;
      case 'GitHub': return <GithubIcon className="w-4 h-4 text-stone-300" />;
      case 'Auronova Portal': return <Globe className="w-4 h-4 text-cyan-400" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden z-10 transition-all ${
        isEngineer 
          ? 'bg-[#0f172a] border-cyan-900/60 text-stone-200' 
          : 'bg-[#faf7f2] border-stone-300 text-stone-900'
      }`}>
        {/* Top Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isEngineer ? 'bg-[#0b101c] border-cyan-950 text-cyan-400 font-mono text-xs' : 'bg-white border-stone-200 text-stone-800 font-serif'
        }`}>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="font-semibold text-sm">Initiate Communication // Mrinal Dharmik</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          
          {/* Email Direct Box */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            isEngineer ? 'bg-cyan-950/30 border-cyan-900/50' : 'bg-white border-stone-200 shadow-sm'
          }`}>
            <div>
              <div className="text-xs uppercase font-mono text-stone-500 font-semibold">
                Direct Email:
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-cyan-400 dark:text-cyan-300 mt-0.5">
                {EMAIL_CONTACT}
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : isEngineer
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-800 hover:bg-cyan-900'
                      : 'bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-amber-700 hover:bg-amber-800 text-white transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mailer</span>
              </a>
            </div>
          </div>

          {/* Typewriter Scratchpad / Fast Message Form */}
          <form onSubmit={handleSendDraft} className="space-y-3">
            <label className={`block text-xs font-semibold uppercase tracking-wider ${
              isEngineer ? 'font-mono text-cyan-400' : 'font-serif text-stone-700'
            }`}>
              Draft a Note directly to Mrinal:
            </label>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Hi Mrinal, I came across your systems and artwork..."
              rows={3}
              className={`w-full p-3.5 rounded-xl border text-sm leading-relaxed outline-none transition-colors ${
                isEngineer
                  ? 'bg-[#090d16] border-cyan-900 text-stone-200 focus:border-cyan-400 font-mono'
                  : 'bg-white border-stone-300 text-stone-900 focus:border-amber-700 font-serif'
              }`}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!noteText.trim()}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  noteText.trim()
                    ? isEngineer
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold'
                      : 'bg-stone-900 hover:bg-stone-800 text-white font-serif'
                    : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Send Note via Mail</span>
              </button>
            </div>
          </form>

          {/* Social Channels Matrix */}
          <div>
            <div className="text-xs uppercase font-mono text-stone-500 font-semibold mb-3">
              Verified Social Channels & Presence:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all hover:scale-[1.01] ${
                    isEngineer
                      ? 'bg-[#090d16] border-cyan-950 hover:border-cyan-700/60'
                      : 'bg-white border-stone-200 hover:border-amber-600/40 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-stone-500/10">
                      {getSocialIcon(link.name)}
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-stone-800 dark:text-stone-200">
                        {link.name}
                      </div>
                      <div className="text-[11px] text-stone-500 font-mono">
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
