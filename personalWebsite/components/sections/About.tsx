'use client';

import { siteConfig } from '@/data/site';

export function About() {
  return (
    <section id="about" className="py-12 md:py-section px-8 md:px-16 bg-sharp-bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-h2 font-bold font-primary mb-8 text-sharp-black">
          About Me
        </h2>
        <div className="space-y-6">
          {siteConfig.about.map((paragraph, i) => (
            <p key={i} className="text-lg text-sharp-text-secondary leading-relaxed font-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
