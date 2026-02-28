'use client';

import { cn } from '@/lib/utils';
import { Project, projectCategories } from '@/data/projects';
import { Tag } from './Tag';
import { Card } from './Card';

interface ProjectCardProps {
  project: Project;
  isExpanded?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function ProjectCard({ project, isExpanded = false, onToggle, className }: ProjectCardProps) {
  const category = projectCategories[project.category];

  return (
    <div
      id={`project-${project.id}`}
      className={cn('scroll-mt-24', className)}
    >
      <div onClick={onToggle} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onToggle?.()}>
      <Card
        hover
        className="h-full group cursor-pointer"
      >
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              'px-3 py-1 text-micro font-semibold uppercase tracking-[0.1em] text-white',
              category.color
            )}
          >
            {category.label}
          </span>
          {project.featured && (
            <span className="text-xs text-sharp-primary font-medium font-secondary">Featured</span>
          )}
        </div>

        {/* Title and tagline */}
        <h3 className="text-xl font-bold font-primary text-sharp-black group-hover:text-sharp-primary transition-colors duration-normal">
          {project.title}
        </h3>
        <p className="mt-2 text-small text-sharp-text-secondary font-secondary line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Tag key={tech} size="sm">
              {tech}
            </Tag>
          ))}
          {project.techStack.length > 4 && (
            <Tag size="sm" variant="default">
              +{project.techStack.length - 4}
            </Tag>
          )}
        </div>

        {/* Toggle indicator */}
        <div className="mt-4 pt-4 border-t border-sharp-border flex items-center justify-between text-small text-sharp-text-secondary font-secondary">
          <span className="group-hover:text-sharp-black transition-colors duration-normal">
            {isExpanded ? 'Hide details' : 'View details'}
          </span>
          <span className={cn(
            'transition-transform duration-normal',
            isExpanded && 'rotate-180'
          )}>
            ▼
          </span>
        </div>

        {/* Expandable details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-sharp-border space-y-6" onClick={(e) => e.stopPropagation()}>
            <p className="text-body text-sharp-text-secondary font-secondary leading-relaxed">
              {project.description}
            </p>

            <div className="grid gap-4">
              <div>
                <h4 className="text-small font-semibold font-primary text-sharp-black uppercase tracking-wide mb-2">Problem</h4>
                <p className="text-small text-sharp-text-secondary font-secondary">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-small font-semibold font-primary text-sharp-black uppercase tracking-wide mb-2">Approach</h4>
                <p className="text-small text-sharp-text-secondary font-secondary">{project.approach}</p>
              </div>
              <div>
                <h4 className="text-small font-semibold font-primary text-sharp-black uppercase tracking-wide mb-2">Results</h4>
                <p className="text-small text-sharp-text-secondary font-secondary">{project.results}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech} size="sm">
                  {tech}
                </Tag>
              ))}
            </div>

            {(project.links.github || project.links.demo || project.links.paper) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.links.github && !project.links.github.startsWith('TODO') && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small font-medium text-sharp-primary hover:text-sharp-primary-hover underline underline-offset-4"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.demo && !project.links.demo.startsWith('TODO') && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small font-medium text-sharp-primary hover:text-sharp-primary-hover underline underline-offset-4"
                  >
                    Demo ↗
                  </a>
                )}
                {project.links.paper && !project.links.paper.startsWith('TODO') && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small font-medium text-sharp-primary hover:text-sharp-primary-hover underline underline-offset-4"
                  >
                    Paper ↗
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </Card>
      </div>
    </div>
  );
}
