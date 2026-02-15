'use client';

import { hobbiesData } from '@/data/hobbies';

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            BEYOND <span className="text-red-500">THE TRACK</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            What drives me outside of work.
          </p>
        </div>

        {/* Hobbies grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbiesData.map((hobby) => (
            <div
              key={hobby.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 text-center hover:border-neutral-700 transition-colors"
            >
              <div className="text-4xl mb-4">{hobby.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{hobby.name}</h3>
              <p className="text-sm text-neutral-400">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
