'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Project, projectCategories } from '@/data/projects';
import { Tag } from './Tag';
import { Card } from './Card';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const category = projectCategories[project.category];

  return (
    <Link href={`/projects/${project.slug}`}>
      <Card
        hover
        className={cn(
          'h-full group transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10',
          className
        )}
      >
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              'px-2.5 py-1 text-xs font-medium rounded-full text-white',
              category.color
            )}
          >
            {category.label}
          </span>
          {project.featured && (
            <span className="text-xs text-amber-400 font-medium">Featured</span>
          )}
        </div>

        {/* Title and tagline */}
        <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">

          {project.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-400 line-clamp-2">
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

        {/* Links indicator */}
        <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center text-sm text-neutral-500">
          <span className="group-hover:text-neutral-300 transition-colors">
            View details →
          </span>
        </div>
      </Card>
    </Link>
  );
}
