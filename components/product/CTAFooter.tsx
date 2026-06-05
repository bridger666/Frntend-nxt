'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

interface CTAFooterProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTAFooter({ title, subtitle, primaryCta, secondaryCta }: CTAFooterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`animate-on-scroll ${
        isVisible ? 'is-visible' : ''
      } w-full py-24 bg-black bg-grid-pattern relative border-b border-white/5`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
        {/* Monospaced tag */}
        <div
          className="text-[9px] text-[#939393] tracking-[0.25em] uppercase mb-4 font-light"
          style={{ fontFamily: "'Doto', 'Courier New', monospace" }}
        >
          // GET STARTED NOW
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-white leading-tight"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-white/60 text-base md:text-lg font-light mb-10 max-w-xl leading-relaxed"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {subtitle}
        </p>

        {/* Pill buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
          <Link
            href={primaryCta.href}
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-none bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/95"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 rounded-none border border-white/20 text-white font-light text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/40"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
