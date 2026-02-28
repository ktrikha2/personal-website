'use client';

import { hobbiesData } from '@/data/hobbies';

export function Hobbies() {
  return (
    <section id="hobbies" className="py-section px-8 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold font-primary mb-6 text-sharp-black">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-sharp-text-secondary font-secondary max-w-2xl">
            What I enjoy outside of work.
          </p>
        </div>

        {/* Hobbies grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbiesData.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-white border border-sharp-border p-6 text-center hover:-translate-y-1 transition-transform duration-normal"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-lg font-bold font-primary text-sharp-black mb-2">{hobby.name}</h3>
              <p className="text-small text-sharp-text-secondary font-secondary">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
