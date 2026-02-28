'use client';

import { siteConfig } from '@/data/site';

export function About() {
  return (
    <section id="about" className="py-section px-8 md:px-16 bg-sharp-bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h2 font-bold font-primary mb-8 text-sharp-black">
          About Me
        </h2>
        <p className="text-lg text-sharp-text-secondary leading-relaxed mb-6 font-secondary">
          {siteConfig.description}
        </p>
        <p className="text-sharp-text-muted font-secondary">
          {siteConfig.tagline}
        </p>
      </div>
    </section>
  );
}
