'use client';

import { useState, useMemo } from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterBar } from '@/components/ui/FilterBar';

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research / AI' },
  { id: 'cloud', label: 'Cloud / Data' },
  { id: 'systems', label: 'Systems' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'side', label: 'Side Projects' },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-neutral-950 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A comprehensive collection of my work across AI/ML, cloud infrastructure, and systems development.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar
            options={filterOptions}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-neutral-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
