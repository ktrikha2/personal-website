'use client';

import { courseworkData, courseCategories } from '@/data/coursework';
import { Tag } from '@/components/ui/Tag';

export function Coursework() {
  // Group courses by category
  const coursesByCategory = {
    ml: courseworkData.filter((c) => c.category === 'ml'),
    systems: courseworkData.filter((c) => c.category === 'systems'),
    data: courseworkData.filter((c) => c.category === 'data'),
    theory: courseworkData.filter((c) => c.category === 'theory'),
  };

  return (
    <section id="coursework" className="py-section px-8 md:px-16 bg-sharp-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-h1 font-bold font-primary mb-6 text-sharp-black">
            Coursework
          </h2>
          <p className="text-lg text-sharp-text-secondary font-secondary max-w-2xl">
            Academic courses grouped by theme.
          </p>
        </div>

        {/* Course groups */}
        <div className="space-y-16">
          {Object.entries(coursesByCategory).map(([category, courses]) => {
            if (courses.length === 0) return null;
            const categoryInfo = courseCategories[category as keyof typeof courseCategories];

            return (
              <div key={category}>
                <h3 className={`text-h3 font-bold font-primary mb-8 ${categoryInfo.color}`}>
                  {categoryInfo.label}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white border border-sharp-border p-6 hover:-translate-y-1 transition-transform duration-normal"
                    >
                      <h4 className="text-lg font-bold font-primary text-sharp-black mb-1">{course.name}</h4>
                      {course.code && (
                        <p className="text-xs text-sharp-text-muted font-secondary mb-2">{course.code}</p>
                      )}
                      {course.description && (
                        <p className="text-small text-sharp-text-secondary font-secondary mb-4">{course.description}</p>
                      )}
                      {course.project && (
                        <div className="pt-4 border-t border-sharp-border">
                          <p className="text-xs text-sharp-text-muted font-secondary mb-2">Project:</p>
                          <p className="text-small text-sharp-black font-medium font-secondary mb-2">
                            {course.project.title}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {course.project.tech.map((tech) => (
                              <Tag key={tech} size="sm" variant="info">
                                {tech}
                              </Tag>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
