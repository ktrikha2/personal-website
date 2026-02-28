import { redirect } from 'next/navigation';
import { getProjectBySlug } from '@/data/projects';

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  redirect(project ? `/#project-${project.id}` : '/#projects');
}
