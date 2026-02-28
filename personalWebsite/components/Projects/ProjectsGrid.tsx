'use client';

import { useState, useMemo, useEffect } from 'react';
import { projectsData } from '@/data/projects';
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
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Handle hash-based expansion (e.g. from Experience section links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.slice(9); // Remove '#project-'
        if (projectsData.some((p) => p.id === projectId)) {
          setExpandedProjectId(projectId);
          setActiveFilter('all'); // Show all so the project is visible
          // Scroll is handled by scroll-mt and the hash
        }
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="projects" className="py-section px-8 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-small font-medium font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-6">
            02
          </p>
          <h2 className="text-h1 font-bold font-primary mb-6 text-sharp-black">
            Projects
          </h2>
          <p className="text-lg text-sharp-text-secondary font-secondary max-w-2xl">
            Featured work and projects I've built.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-12">
          <FilterBar
            options={allCategories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjectId === project.id}
              onToggle={() =>
                setExpandedProjectId((prev) => (prev === project.id ? null : project.id))
              }
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-sharp-text-muted font-secondary">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
