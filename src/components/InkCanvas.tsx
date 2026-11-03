import React, { useRef, useState, useEffect } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penSize, setPenSize] = useState<number>(2);
  const [inkColor, setInkColor] = useState<string>('#141416');
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = inkColor;
    ctx.lineWidth = penSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, rect.width, rect.height);
    setHasDrawn(false);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `inktober-folio-mrinaldo.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="rounded-2xl border border-editorial bg-[var(--bg-card)] p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-editorial text-xs font-mono">
        <div>
          <span className="text-[var(--accent)] uppercase font-semibold">
            Drafting Sheet // 300gsm cold-press
          </span>
          <p className="text-[var(--text-muted)] mt-0.5 font-sans">
            Draw across the cotton weave below.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Pen sizes */}
          <div className="flex items-center gap-1 bg-[var(--bg-page)] p-1 rounded-lg border border-editorial">
            {[
              { label: '0.1', size: 1.5 },
              { label: '0.3', size: 3 },
              { label: '0.5', size: 5 },
              { label: '0.8', size: 8 }
            ].map(nib => (
              <button
                key={nib.label}
                data-cursor={nib.label}
                onClick={() => setPenSize(nib.size)}
                className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                  penSize === nib.size 
                    ? 'bg-[var(--accent)] text-[var(--bg-page)] font-bold' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {nib.label}
              </button>
            ))}
          </div>

          {/* Ink swatches */}
          <div className="flex items-center gap-1.5 px-2 py-1 bg-[var(--bg-page)] rounded-lg border border-editorial">
            {[
              { color: '#141416', title: 'Carbon Black' },
              { color: '#8a5026', title: 'Burnt Umber' }
            ].map(shade => (
              <button
                key={shade.color}
                data-cursor="COLOR"
                onClick={() => setInkColor(shade.color)}
                style={{ backgroundColor: shade.color }}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  inkColor === shade.color ? 'scale-125 ring-2 ring-[var(--accent)] border-white' : 'border-stone-400'
                }`}
                title={shade.title}
              />
            ))}
          </div>

          <button
            onClick={clearCanvas}
            data-cursor="CLEAR"
            className="p-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded-lg border border-editorial transition-colors"
            title="Clear canvas"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {hasDrawn && (
            <button
              onClick={downloadCanvas}
              data-cursor="SAVE"
              className="flex items-center gap-1 px-3 py-1 bg-[var(--accent)] text-[var(--bg-page)] rounded-lg text-xs font-mono font-bold hover:opacity-90 transition-all shadow-sm"
              title="Save drawing"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save</span>
            </button>
          )}
        </div>
      </div>

      <div 
        data-cursor="DRAW"
        className="relative rounded-xl border border-editorial overflow-hidden cursor-crosshair touch-none bg-[#faf8f5]"
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-64 sm:h-80 block"
        />
        {!hasDrawn && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-stone-400 text-xs sm:text-sm font-serif italic select-none">
            Test the nib here. Every stroke on paper is permanent...
          </div>
        )}
      </div>
    </div>
  );
};
