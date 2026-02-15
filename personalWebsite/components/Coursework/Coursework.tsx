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
    <section id="coursework" className="py-20 px-4 md:px-8 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            COURSEWORK <span className="text-red-500">GRID</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Academic courses grouped by theme.
          </p>
        </div>

        {/* Course groups */}
        <div className="space-y-12">
          {Object.entries(coursesByCategory).map(([category, courses]) => {
            if (courses.length === 0) return null;
            const categoryInfo = courseCategories[category as keyof typeof courseCategories];

            return (
              <div key={category}>
                <h3 className={`text-2xl font-bold mb-6 ${categoryInfo.color}`}>
                  {categoryInfo.label}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
                    >
                      <h4 className="text-lg font-semibold text-white mb-1">{course.name}</h4>
                      {course.code && (
                        <p className="text-xs text-neutral-500 font-mono mb-2">{course.code}</p>
                      )}
                      {course.description && (
                        <p className="text-sm text-neutral-400 mb-4">{course.description}</p>
                      )}
                      {course.project && (
                        <div className="pt-4 border-t border-neutral-800">
                          <p className="text-xs text-neutral-500 mb-2">Project:</p>
                          <p className="text-sm text-neutral-300 font-medium mb-2">
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
