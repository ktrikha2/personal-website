'use client';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
      id="hero"
    >
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
        {/* Starting lights indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-red-500 opacity-60"
              style={{
                animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">{siteConfig.name.split(' ')[0]}</span>
          <span className="text-red-500">.</span>
          <span className="text-white"> {siteConfig.name.split(' ')[1]}</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
          {siteConfig.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" asChild>
            <a href="#experience">Experience</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href={siteConfig.links.resume} download>
              Resume
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 text-sm animate-bounce">
        Scroll ↓
      </div>
    </section>
  );
}
