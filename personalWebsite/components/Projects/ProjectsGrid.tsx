'use client';

import { useState, useMemo } from 'react';
import { projectsData, projectCategories } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterBar } from '@/components/ui/FilterBar';

const allCategories = [
  { id: 'all', label: 'All' },
  { id: 'side', label: 'Side Projects' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'research', label: 'ML / NLP' },
  { id: 'cloud', label: 'Cloud / Data' },
  { id: 'systems', label: 'Systems' },
];

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            STARTING <span className="text-red-500">GRID</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Projects and work I've built.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-8">
          <FilterBar
            options={allCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="transition-transform duration-200 hover:-translate-y-1">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-neutral-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
