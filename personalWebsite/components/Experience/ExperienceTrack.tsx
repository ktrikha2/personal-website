'use client';

import { useState } from 'react';
import { experienceData } from '@/data/experience';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils';

export function ExperienceTrack() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-8 bg-neutral-950"
      aria-label="Experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            EXPERIENCE <span className="text-red-500">TRACK</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            My career journey. Each role has accelerated my skills.
          </p>
        </div>

        {/* Horizontal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceData.map((experience) => {
            const isExpanded = expandedId === experience.id;

            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => toggleExpand(experience.id)}
                className={cn(
                  'text-left bg-neutral-900/50 border border-neutral-800 border-t-2 border-t-red-500 rounded-xl p-6',
                  'hover:border-neutral-700 transition-all duration-300 cursor-pointer',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
                  isExpanded && 'border-neutral-700'
                )}
                aria-expanded={isExpanded}
              >
                {/* Summary - always visible */}
                <div>
                  <div className="flex items-start justify-between mb-1 gap-2">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {experience.role}
                    </h3>
                    <svg
                      className={cn(
                        'w-4 h-4 text-neutral-500 shrink-0 mt-1 transition-transform duration-300',
                        isExpanded && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <p className="text-red-400 font-medium text-sm">
                    {experience.company}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-neutral-500">
                    <span className="font-mono">
                      {experience.startDate} – {experience.endDate}
                    </span>
                    <span className="text-neutral-700">·</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Expandable content */}
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isExpanded
                      ? 'grid-rows-[1fr] opacity-100 mt-4'
                      : 'grid-rows-[0fr] opacity-0 mt-0'
                  )}
                >
                  <div className="overflow-hidden">
                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {experience.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-300 flex items-start gap-2"
                        >
                          <span className="text-red-500 mt-0.5 shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                      {experience.techTags.map((tech) => (
                        <Tag key={tech} size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
