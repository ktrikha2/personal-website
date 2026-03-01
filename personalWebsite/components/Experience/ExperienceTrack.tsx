'use client';

import Image from 'next/image';
import { experienceData } from '@/data/experience';
import { getProjectById } from '@/data/projects';

export function ExperienceTrack() {
  return (
    <section
      id="experience"
      className="py-12 md:py-section px-8 md:px-16 bg-sharp-black"
      aria-label="Experience"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header - 2 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[120px] mb-20">
          {/* Left column */}
          <div>
            <p className="text-small font-medium font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-6">
              01
            </p>
            <h2 className="text-3xl md:text-h2 lg:text-h1 font-bold font-primary text-white">
              Experience
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:pt-12">
            <p className="text-lg leading-[1.7] font-secondary text-sharp-text-muted">
              From building data pipelines to shipping production ML models, I've worked across the full stack of modern AI systems.
            </p>
          </div>
        </div>

        {/* Experience cards - 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((experience) => (
            <div
              key={experience.id}
              className="p-6 md:p-10 bg-white hover:-translate-y-1 transition-transform duration-normal relative"
            >
              {/* Company logo - top right */}
              {experience.logo && (
                <div className="absolute top-6 right-6 w-20 h-20 flex items-center justify-center">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              )}

              {/* Company */}
              <p className="text-micro font-semibold font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-4 pr-24">
                {experience.company}
              </p>

              {/* Role */}
              <h3 className="text-2xl font-bold font-primary text-sharp-black mb-3">
                {experience.role}
              </h3>

              {/* Period */}
              <p className="text-small font-secondary text-sharp-text-muted mb-4">
                {experience.startDate} – {experience.endDate}
              </p>

              {/* Related projects */}
              {experience.projectIds && experience.projectIds.length > 0 && (
                <div className="pt-4 border-t border-sharp-border">
                  <p className="text-micro font-semibold font-secondary text-sharp-text-muted uppercase tracking-wide mb-2">
                    Related projects
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2">
                    {experience.projectIds.map((projectId, i) => {
                      const project = getProjectById(projectId);
                      if (!project) return null;
                      return (
                        <span key={projectId}>
                          {i > 0 && (
                            <span className="text-sharp-text-muted mr-2">·</span>
                          )}
                          <a
                            href={`#project-${projectId}`}
                            className="text-small font-medium font-secondary text-sharp-primary hover:text-sharp-primary-hover underline underline-offset-4 transition-colors"
                          >
                            {project.title} ↗
                          </a>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
