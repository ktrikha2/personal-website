'use client';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-section px-8 md:px-16 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <p className="text-small font-medium font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-6">
          06
        </p>
        <h2 className="text-h1 font-bold font-primary mb-6 text-sharp-black">
          Get in Touch
        </h2>
        <p className="text-lg text-sharp-text-secondary font-secondary mb-12">
          Let's connect. Open to opportunities, projects, or just a chat.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Button variant="outline" size="lg" asChild>
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

        <p className="text-small text-sharp-text-muted font-secondary">
          Based in {siteConfig.location}
        </p>
      </div>
    </section>
  );
}
