'use client';

import { skillsData } from '@/data/skills';

export function SkillsTelemetry() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            TELEMETRY <span className="text-emerald-400">DASHBOARD</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Skills grouped by domain.
          </p>
        </div>

        {/* Skills panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-neutral-400 mb-4">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-mono bg-neutral-800 text-neutral-300 rounded-md"
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
