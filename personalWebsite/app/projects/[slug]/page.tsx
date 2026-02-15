import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData, getProjectBySlug, projectCategories } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

// Generate static params for all project slugs
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const category = projectCategories[project.category];

  return (
    <main className="min-h-screen bg-neutral-950 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 text-sm font-medium rounded-full text-white ${category.color}`}>
              {category.label}
            </span>
            {project.featured && (
              <span className="text-sm text-amber-400 font-medium">Featured</span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-400">{project.tagline}</p>
        </div>

        {/* Description */}
        <Card padding="lg" className="mb-8">
          <p className="text-neutral-300 leading-relaxed">{project.description}</p>
        </Card>

        {/* Problem / Approach / Results */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card padding="md">
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
              Problem
            </h3>
            <p className="text-sm text-neutral-300">{project.problem}</p>
          </Card>
          <Card padding="md">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Approach
            </h3>
            <p className="text-sm text-neutral-300">{project.approach}</p>
          </Card>
          <Card padding="md">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Results
            </h3>
            <p className="text-sm text-neutral-300">{project.results}</p>
          </Card>
        </div>

        {/* Tech Stack */}
        <Card padding="lg" className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Tag key={tech} variant="info" size="md">
                {tech}
              </Tag>
            ))}
          </div>
        </Card>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.links.github && (
            <Button variant="secondary" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                View on GitHub
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="primary" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </Button>
          )}
          {project.links.paper && (
            <Button variant="outline" asChild>
              <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Read Paper
              </a>
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
