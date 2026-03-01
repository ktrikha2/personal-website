'use client';

import { courseworkData, courseCategories } from '@/data/coursework';

export function Coursework() {
  const coursesByCategory = {
    ml: courseworkData.filter((c) => c.category === 'ml'),
    systems: courseworkData.filter((c) => c.category === 'systems'),
    data: courseworkData.filter((c) => c.category === 'data'),
    theory: courseworkData.filter((c) => c.category === 'theory'),
  };

  return (
    <section id="coursework" className="py-12 md:py-section px-8 md:px-16 bg-sharp-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <p className="text-small font-medium font-secondary text-sharp-primary uppercase tracking-[0.15em] mb-6">
            03
          </p>
          <h2 className="text-3xl md:text-h2 lg:text-h1 font-bold font-primary mb-6 text-sharp-black">
            Coursework
          </h2>
          <p className="text-lg text-sharp-text-secondary font-secondary max-w-2xl">
            Academic courses grouped by theme.
          </p>
        </div>

        <div className="space-y-10">
          {Object.entries(coursesByCategory).map(([category, courses]) => {
            if (courses.length === 0) return null;
            const categoryInfo = courseCategories[category as keyof typeof courseCategories];

            return (
              <div key={category}>
                <h3 className={`text-h4 font-bold font-primary mb-4 ${categoryInfo.color}`}>
                  {categoryInfo.label}
                </h3>
                <ul className="space-y-2">
                  {courses.map((course) => (
                    <li
                      key={course.id}
                      className="text-body text-sharp-text-secondary font-secondary"
                    >
                      <span className="font-medium text-sharp-black">{course.name}</span>
                      {course.description && (
                        <span> — {course.description}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
