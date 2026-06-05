import type { Metadata } from 'next';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/product/HeroSection';
import { InteractiveShowcase } from '@/components/product/InteractiveShowcase';
import { InteractiveGrid } from '@/components/product/InteractiveGrid';
import { CTAFooter } from '@/components/product/CTAFooter';

export const metadata: Metadata = {
  title: 'Products — Aivory',
  description:
    'Discover AI-powered tools for business transformation: diagnostics, blueprints, workflow automation, and intelligent agents.',
};

export default function ProductPage() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Sticky navigation bar */}
      <Navbar />

      {/* Hero Header */}
      <HeroSection
        title="AI-Powered Business Transformation"
        subtitle="From diagnostic to deployment — everything you need to integrate AI into your business operations."
      />

      {/* Sticky Scroll Interactive Showcase (Diagnostic, Blueprint, Roadmap, Console, Workflows) */}
      <InteractiveShowcase />

      {/* Spotlight Hover Utility Grid (Agents, Templates, Connectors, Telemetry) */}
      <InteractiveGrid />

      {/* Call to Action Conversion Block */}
      <CTAFooter
        title="Ready to transform your business with AI?"
        subtitle="Start with a free AI readiness diagnostic and discover your potential."
        primaryCta={{ label: 'Get Started Free', href: '/free-diagnostic' }}
        secondaryCta={{ label: 'Talk to Us', href: '#contact' }}
      />

      {/* Standard Footer */}
      <Footer />
    </main>
  );
}
