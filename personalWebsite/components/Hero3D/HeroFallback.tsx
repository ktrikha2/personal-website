'use client';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeroFallbackProps {
  className?: string;
}

export function HeroFallback({ className }: HeroFallbackProps) {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        'bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950',
        className
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                            linear-gradient(to bottom, #333 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Race control badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Race Control Active
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {siteConfig.name}
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" asChild>
            <a href="#experience">View Experience</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-neutral-500">
            <span className="text-xs">Scroll to explore</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
