import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImageIcon, Maximize2 } from 'lucide-react';

interface ImageFrameProps {
  src: string;
  hoverSrc?: string;
  alt: string;
  caption: string;
  aspectRatio?: string;
  placeholderTip?: string;
  dimensions?: string;
  category?: string;
  className?: string;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  src,
  hoverSrc,
  alt,
  caption,
  aspectRatio = 'aspect-[16/10]',
  placeholderTip,
  dimensions = '1600 × 1000 px',
  category = 'IMAGE',
  className = ''
}) => {
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  return (
    <>
      <div className={`space-y-2.5 ${className}`}>
        {/* Frame Box */}
        <div 
          data-cursor={hasLoaded && !hasError ? "EXPAND" : "IMAGE"}
          onClick={() => {
            if (hasLoaded && !hasError) setIsZoomed(true);
          }}
          className={`relative ${aspectRatio} w-full rounded-xl sm:rounded-2xl border border-editorial overflow-hidden bg-[var(--bg-card)] transition-all duration-300 group ${
            hasLoaded && !hasError ? 'cursor-pointer hover:border-[var(--accent)]' : ''
          }`}
        >
          {/* Subtle Corner Crosshairs */}
          <span className="absolute top-2 left-2 text-[10px] font-mono text-[var(--accent)] select-none opacity-60 z-10">+</span>
          <span className="absolute top-2 right-2 text-[10px] font-mono text-[var(--accent)] select-none opacity-60 z-10">+</span>
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[var(--accent)] select-none opacity-60 z-10">+</span>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[var(--accent)] select-none opacity-60 z-10">+</span>

          {/* Actual Image Tag */}
          <img
            src={src}
            alt={alt}
            onLoad={() => setHasLoaded(true)}
            onError={() => {
              setHasError(true);
              setHasLoaded(false);
            }}
            className={`w-full h-full object-cover transition-all duration-700 ${
              hasLoaded && !hasError 
                ? `opacity-100 group-hover:scale-[1.02] ${hoverSrc ? 'group-hover:opacity-0' : ''}` 
                : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          />

          {/* Secondary Hover Image Layer (e.g. Color reveal on hover) */}
          {hoverSrc && hasLoaded && !hasError && (
            <img
              src={hoverSrc}
              alt={`${alt} (Color view)`}
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-[1.02] pointer-events-none"
            />
          )}

          {/* Architectural Placeholder / Blueprint state if image is missing */}
          {(!hasLoaded || hasError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-[var(--bg-card)]/80">
              <div className="w-12 h-12 rounded-full border border-editorial flex items-center justify-center text-[var(--accent)] mb-3 bg-[var(--bg-page)]/50 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5 opacity-80" />
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
                [{category}]
              </span>

              <h4 className="text-sm font-display font-bold uppercase text-[var(--text-primary)]">
                {alt}
              </h4>

              <div className="mt-3 flex flex-col items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                <span className="px-2.5 py-0.5 rounded border border-editorial bg-[var(--bg-page)] text-[var(--text-secondary)]">
                  {placeholderTip || `Drop file: /public${src}`}
                </span>
                <span className="opacity-75 text-[10px] mt-0.5">
                  Target: {dimensions}
                </span>
              </div>
            </div>
          )}

          {/* Hover zoom indicator */}
          {hasLoaded && !hasError && (
            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-[var(--bg-page)]/80 backdrop-blur-sm border border-editorial text-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        {/* Editorial Caption Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] px-1">
          <span className="truncate max-w-[80%]">
            {caption}
          </span>
          <span className="opacity-60 hidden sm:inline">
            {dimensions}
          </span>
        </div>
      </div>

      {/* Lightbox Modal when Zoomed */}
      {isZoomed && hasLoaded && !hasError && createPortal(
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md p-4 sm:p-10 flex flex-col items-center justify-center cursor-zoom-out animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-editorial shadow-2xl bg-[var(--bg-page)]"
          >
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-full object-contain max-h-[75vh]" 
            />
            <div className="p-3 bg-[var(--bg-card)] border-t border-editorial text-xs font-mono text-[var(--text-secondary)] flex justify-between items-center">
              <span>{caption}</span>
              <button 
                type="button"
                onClick={() => setIsZoomed(false)}
                className="text-[var(--accent)] font-bold uppercase tracking-wider hover:underline"
              >
                Close (Esc)
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
