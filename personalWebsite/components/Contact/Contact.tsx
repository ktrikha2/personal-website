'use client';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-neutral-900/50">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          PIT <span className="text-red-500">LANE</span>
        </h2>
        <p className="text-neutral-400 mb-8">
          Let's connect. Open to opportunities, projects, or just a chat.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button variant="primary" size="lg" asChild>
            <a href={`mailto:${siteConfig.links.email}`}>Email Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>

        <p className="text-sm text-neutral-500">
          Based in {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
