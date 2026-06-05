'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`animate-on-scroll ${
        isVisible ? 'is-visible' : ''
      } relative min-h-screen flex items-center justify-center overflow-hidden bg-black bg-grid-pattern border-b border-white/10`}
    >
      {/* Light gradient highlight to mimic x.ai top screen shine */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 0%, #0ae8af 0%, transparent 80%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Monospaced Top Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 border border-white/15 bg-white/5 rounded-full mb-8"
          style={{ fontFamily: "'Doto', 'Courier New', monospace" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] text-white/80 uppercase font-light">
            Aivory Suite | Architecture to Production
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 leading-[1.15] tracking-tight max-w-3xl"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#showcase"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-none bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 active:scale-98"
          >
            Start Free Diagnostic
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-none border border-white/25 text-white font-light text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/40 active:scale-98"
          >
            Consultation Blueprint
          </a>
        </div>
      </div>

      {/* Wireframe Scroll Guide (Vertical line showing page flow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white/15" />
        <div
          className="text-[9px] tracking-[0.15em] text-white/30 uppercase my-3 font-light"
          style={{ fontFamily: "'Doto', 'Courier New', monospace" }}
        >
          SCROLL TO EXPLORE
        </div>
        <div className="w-[1px] h-12 bg-white/20" />
      </div>
    </section>
  );
}
