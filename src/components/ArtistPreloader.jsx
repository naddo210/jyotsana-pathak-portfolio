import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ArtistPreloader({ onComplete }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mainStrokeRef = useRef(null);
  const secondaryStrokeRef = useRef(null);
  const inkDotRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const locationRef = useRef(null);
  const signatureRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }

    const mainStroke = mainStrokeRef.current;
    const secondaryStroke = secondaryStrokeRef.current;
    if (!mainStroke || !secondaryStroke) return;

    // Measure total path lengths
    const mainLength = mainStroke.getTotalLength();
    const secondaryLength = secondaryStroke.getTotalLength();

    // Set initial dasharray & dashoffset for the drawing effect
    gsap.set(mainStroke, {
      strokeDasharray: mainLength,
      strokeDashoffset: mainLength,
      opacity: 0,
    });

    gsap.set(secondaryStroke, {
      strokeDasharray: secondaryLength,
      strokeDashoffset: secondaryLength,
      opacity: 0,
    });

    gsap.set(inkDotRef.current, {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center',
    });

    gsap.set([nameRef.current, roleRef.current, locationRef.current, signatureRef.current], {
      opacity: 0,
      y: 8,
    });

    // Master Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        if (onComplete) onComplete();
      },
    });

    // =========================================================================
    // STAGE 01 — THE CANVAS: Warm ivory appears, subtle first whisper
    // =========================================================================
    tl.to(nameRef.current, {
      opacity: 0.35,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    });

    // =========================================================================
    // STAGE 02 — THE FIRST MARK: Tiny handmade charcoal mark appears
    // =========================================================================
    tl.to(inkDotRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: 'back.out(2)',
    }, '-=0.15');

    // =========================================================================
    // STAGE 03 — THE BRUSH STROKE: Hand-drawn circular brush stroke draws around
    // =========================================================================
    tl.to(mainStroke, {
      opacity: 0.95,
      strokeDashoffset: 0,
      duration: 1.25,
      ease: 'power2.inOut',
    }, '-=0.1');

    tl.to(secondaryStroke, {
      opacity: 0.45,
      strokeDashoffset: 0,
      duration: 1.1,
      ease: 'power1.inOut',
    }, '-=1.15');

    // Fade the initial start dot into the flowing line
    tl.to(inkDotRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power1.out',
    }, '-=1.0');

    // =========================================================================
    // STAGE 04 — THE ARTIST REVEAL: Full typography and terracotta seal
    // =========================================================================
    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
    }, '-=0.65');

    tl.to([roleRef.current, locationRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.45');

    tl.to(signatureRef.current, {
      opacity: 0.85,
      y: 0,
      duration: 0.35,
      ease: 'power2.out',
    }, '-=0.25');

    // Brief poetic hold (0.3s)
    tl.to({}, { duration: 0.3 });

    // =========================================================================
    // STAGE 05 — TRANSITION INTO THE WEBSITE: Organic expansion & reveal
    // =========================================================================
    tl.to([mainStroke, secondaryStroke], {
      scale: 1.08,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      transformOrigin: 'center center',
    });

    tl.to([nameRef.current, roleRef.current, locationRef.current, signatureRef.current], {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: 'power2.in',
    }, '-=0.4');

    // Smooth canvas slide/lift reveal
    tl.to(containerRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.65,
      ease: 'power3.inOut',
    }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-label="Loading Jyotsana Pathak visual artist archive"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gallery-100 select-none overflow-hidden"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      {/* Subtle Fine-Art Paper Texture Filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="charcoal-tooth">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center p-6">
        
        {/* ===================================================================
            ORGANIC HAND-DRAWN BRUSH CIRCLE (Asymmetric, Imperfect, Handmade)
            =================================================================== */}
        <svg
          ref={canvasRef}
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          style={{ filter: 'url(#charcoal-tooth)' }}
        >
          {/* Initial Charcoal Mark (Stage 02) */}
          <circle
            ref={inkDotRef}
            cx="248"
            cy="78"
            r="4.5"
            fill="#161513"
          />

          {/* Primary Hand-Drawn Circular Stroke */}
          <path
            ref={mainStrokeRef}
            d="M 248,78 
               C 160,76 82,148 76,242 
               C 70,338 142,422 240,424 
               C 342,426 424,346 422,246 
               C 420,154 348,82 258,80 
               C 220,79 184,94 156,116"
            fill="none"
            stroke="#161513"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Secondary Bristle / Dry-Brush Whisper Stroke */}
          <path
            ref={secondaryStrokeRef}
            d="M 252,74 
               C 170,72 88,142 82,238 
               C 76,330 148,418 244,420 
               C 338,422 418,340 416,248 
               C 414,162 344,88 264,84"
            fill="none"
            stroke="#6E6960"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 2"
          />

          {/* Tiny Terracotta Studio Accent Dot (Natural mineral seal touch) */}
          <circle
            cx="256"
            cy="428"
            r="2.5"
            fill="#A84D32"
            opacity="0.85"
          />
        </svg>

        {/* ===================================================================
            EDITORIAL TYPOGRAPHY: Nested inside the organic brush circle
            =================================================================== */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-3 px-8">
          {/* Subtle Archival Classification */}
          <span
            ref={locationRef}
            className="text-[9px] sm:text-2xs font-mono uppercase tracking-archival text-gallery-600"
          >
            Mumbai • Archive 2026
          </span>

          {/* Artist Masthead Name */}
          <div ref={nameRef} className="space-y-0.5">
            <h1 className="font-editorial text-3xl sm:text-4xl text-gallery-900 tracking-tight leading-[0.96]">
              JYOTSANA
            </h1>
            <h1 className="font-editorial text-3xl sm:text-4xl text-gallery-900 tracking-tight leading-[0.96]">
              PATHAK
            </h1>
          </div>

          {/* Separation Hairline & Role */}
          <div ref={roleRef} className="pt-2 flex flex-col items-center space-y-1">
            <span className="w-8 h-[1px] bg-terracotta/70 mb-1" />
            <span className="text-[10px] sm:text-2xs uppercase tracking-widest-editorial text-gallery-700 font-medium">
              Visual Artist
            </span>
          </div>
        </div>

        {/* ===================================================================
            ALTERNATIVE CREATIVE DETAIL: Subtle artist stroke at corner
            =================================================================== */}
        <div
          ref={signatureRef}
          className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 flex items-center space-x-2 text-gallery-500 pointer-events-none"
        >
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none" className="opacity-60">
            <path
              d="M 2,10 C 8,4 16,11 26,3"
              stroke="#A84D32"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-mono text-[9px] tracking-widest uppercase">
            JP Studio
          </span>
        </div>

      </div>
    </div>
  );
}

