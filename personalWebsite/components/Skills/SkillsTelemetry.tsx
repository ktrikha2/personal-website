'use client';

import { skillsData } from '@/data/skills';

export function SkillsTelemetry() {
  return (
    <section id="skills" className="py-12 md:py-section px-8 md:px-16 bg-sharp-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-small font-medium font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-6">
            04
          </p>
          <h2 className="text-3xl md:text-h2 lg:text-h1 font-bold font-primary mb-6 text-sharp-black">
            Skills
          </h2>
          <p className="text-lg text-sharp-text-secondary font-secondary max-w-2xl">
            Technical skills grouped by domain.
          </p>
        </div>

        {/* Skills panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-sharp-border p-8 hover:-translate-y-1 transition-transform duration-normal"
            >
              <h3 className="text-xl font-bold font-primary text-sharp-black mb-2">{category.name}</h3>
              <p className="text-small text-sharp-text-secondary font-secondary mb-4">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-small font-secondary bg-sharp-bg-tertiary text-sharp-black border border-sharp-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
