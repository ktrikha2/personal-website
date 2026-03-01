'use client';

import { useState, useMemo, useEffect } from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterBar } from '@/components/ui/FilterBar';

const projectTabs = [
  { id: 'experience', label: 'Experience Projects' },
  { id: 'side', label: 'Side Projects / Coursework' },
];

export function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState<'experience' | 'side'>('experience');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => project.source === activeTab);
  }, [activeTab]);

  // Handle hash-based expansion (e.g. from Experience section links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.slice(9); // Remove '#project-'
        if (projectsData.some((p) => p.id === projectId)) {
          setExpandedProjectId(projectId);
          const project = projectsData.find((p) => p.id === projectId);
          if (project) setActiveTab(project.source);
          // Scroll is handled by scroll-mt and the hash
        }
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="projects" className="py-12 md:py-section px-8 md:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-small font-medium font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-6">
            02
          </p>
          <h2 className="text-3xl md:text-h2 lg:text-h1 font-bold font-primary mb-6 text-sharp-black">
            Projects
          </h2>
          <p className="text-lg text-sharp-text-secondary font-secondary max-w-2xl">
            Featured work and projects I've built.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <FilterBar
            options={projectTabs}
            activeFilter={activeTab}
            onFilterChange={(id) => setActiveTab(id as 'experience' | 'side')}
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
            No projects in this section yet.
          </div>
        )}
      </div>
    </section>
  );
}
