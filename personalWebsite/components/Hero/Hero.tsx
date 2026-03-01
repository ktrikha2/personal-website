'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/site';

export function Hero() {
  return (
    <section
      className="relative bg-white pt-[200px] pb-section px-8 md:px-16"
      id="hero"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        {/* Text content */}
        <div className="flex-1">
          {/* Intro */}
          <p className="text-h4 font-medium font-secondary text-sharp-text-muted mb-4">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-display font-bold font-primary text-sharp-black mb-2">
            Keshav Trikha.
          </h1>

          {/* Title line with red accent */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-1 bg-sharp-primary" />
            <p className="text-lg md:text-2xl font-medium font-secondary text-sharp-text-secondary">
              AI/ML Engineer & Builder
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-8">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-small font-medium font-secondary text-sharp-black underline underline-offset-4 hover:text-sharp-primary transition-colors duration-normal"
          >
            LinkedIn ↗
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-small font-medium font-secondary text-sharp-black underline underline-offset-4 hover:text-sharp-primary transition-colors duration-normal"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="text-small font-medium font-secondary text-sharp-black underline underline-offset-4 hover:text-sharp-primary transition-colors duration-normal"
          >
            Email ↗
          </a>
        </div>
        </div>

        {/* Headshot */}
        <div className="flex-shrink-0 mt-12 lg:mt-0 border-2 border-sharp-primary">
          <Image
            src="/images/grad_headshot.jpg"
            alt="Keshav Trikha"
            width={340}
            height={510}
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}
