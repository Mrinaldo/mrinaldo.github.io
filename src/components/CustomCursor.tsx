import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Check for hover target data-cursor attributes
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      const interactiveTarget = target?.closest('a, button, [role="button"], input, textarea, .cursor-pointer') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
        document.body.classList.add('has-custom-cursor-text');
      } else if (interactiveTarget) {
        setCursorText('');
        setIsHovered(true);
        document.body.classList.remove('has-custom-cursor-text');
      } else {
        setCursorText('');
        setIsHovered(false);
        document.body.classList.remove('has-custom-cursor-text');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove('has-custom-cursor-text');
    };

    // Smooth lerp loop for the trailing ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.3;
      ringY += (mouseY - ringY) * 0.3;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('has-custom-cursor-text');
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot (scaled to 0 when badge text is active to avoid covering text) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--accent)] pointer-events-none z-[9999] transition-all duration-150 ${
          cursorText ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Fluid Ring / Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-[width,height,background-color,border-color,opacity,box-shadow] duration-200 ease-out flex items-center justify-center ${
          cursorText
            ? 'w-20 h-20 bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20'
            : isHovered
              ? 'w-12 h-12 border border-[var(--accent)] bg-[var(--accent)]/10'
              : 'w-9 h-9 border border-[var(--accent)]/40'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[10px] font-mono font-bold tracking-widest uppercase animate-fade-in select-none pointer-events-none whitespace-nowrap px-1"
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
