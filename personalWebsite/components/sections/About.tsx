'use client';

import { siteConfig } from '@/data/site';

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-neutral-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          ABOUT <span className="text-red-500">ME</span>
        </h2>
        <p className="text-lg text-neutral-300 leading-relaxed mb-4">
          {siteConfig.description}
        </p>
        <p className="text-neutral-400">
          {siteConfig.tagline}
        </p>
      </div>
    </section>
  );
}
