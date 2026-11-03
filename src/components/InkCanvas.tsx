import React, { useRef, useState, useEffect } from 'react';
import { Download, Palette, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penSize, setPenSize] = useState<number>(2);
  const [inkColor, setInkColor] = useState<string>('#1c1917'); // Dark India ink
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Initial warm paper background
    ctx.fillStyle = '#faf7f2';
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
    ctx.fillStyle = '#faf7f2';
    ctx.fillRect(0, 0, rect.width, rect.height);
    setHasDrawn(false);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `inktober-sketch-mrinaldo.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[var(--border-color)]">
        <div>
          <h4 className="font-heading font-bold text-[var(--text-primary)] text-lg flex items-center gap-2">
            <Palette className="w-4 h-4 text-[var(--accent)]" />
            <span>Interactive Inkwell Scratchpad</span>
          </h4>
          <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
            Test the nib. Select pen gauge and sketch directly on paper.
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Nib Weights */}
          <div className="flex items-center gap-1 bg-[var(--bg-card-muted)] p-1 rounded-lg border border-[var(--border-color)] text-xs font-mono">
            {[
              { label: '0.1mm', size: 1.5 },
              { label: '0.3mm', size: 3 },
              { label: '0.5mm', size: 5 },
              { label: '0.8mm', size: 8 }
            ].map(nib => (
              <button
                key={nib.label}
                onClick={() => setPenSize(nib.size)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  penSize === nib.size 
                    ? 'bg-[var(--accent)] text-[var(--accent-fg)] font-bold' 
                    : 'text-[var(--text-secondary)] hover:bg-[var(--border-color)]'
                }`}
              >
                {nib.label}
              </button>
            ))}
          </div>

          {/* Ink Shades */}
          <div className="flex items-center gap-1.5 px-2 py-1 bg-[var(--bg-card-muted)] rounded-lg border border-[var(--border-color)]">
            {[
              { color: '#1c1917', title: 'India Ink' },
              { color: '#78350f', title: 'Sepia Ink' },
              { color: '#1b4332', title: 'Pine Ink' }
            ].map(shade => (
              <button
                key={shade.color}
                onClick={() => setInkColor(shade.color)}
                style={{ backgroundColor: shade.color }}
                className={`w-4 h-4 rounded-full border transition-transform ${
                  inkColor === shade.color ? 'scale-125 ring-2 ring-[var(--accent)] border-white' : 'border-stone-400'
                }`}
                title={shade.title}
              />
            ))}
          </div>

          {/* Action buttons */}
          <button
            onClick={clearCanvas}
            className="p-1.5 text-[var(--text-secondary)] hover:text-red-600 hover:bg-[var(--bg-card-muted)] rounded-lg transition-colors border border-[var(--border-color)]"
            title="Clear canvas"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {hasDrawn && (
            <button
              onClick={downloadCanvas}
              className="flex items-center gap-1 px-3 py-1 bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 rounded-lg text-xs font-mono transition-colors shadow-sm"
              title="Save your sketch"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save</span>
            </button>
          )}
        </div>
      </div>

      {/* Canvas Area */}
      <div className="relative rounded-xl border border-[var(--border-color)] overflow-hidden shadow-inner cursor-crosshair touch-none bg-[#faf7f2]">
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
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-stone-400 text-sm font-serif italic select-none">
            Click or draw with pen across the paper...
          </div>
        )}
      </div>
    </div>
  );
};
