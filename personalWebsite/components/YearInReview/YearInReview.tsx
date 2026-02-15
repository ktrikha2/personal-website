'use client';

const yearSummaries = [
  { year: 2022, summary: 'SWE intern — automation + ETL exposure' },
  { year: 2023, summary: 'DS + SWE — forecasting, CI/CD, Azure' },
  { year: 2024, summary: 'Consulting — Power Platform, Copilot, UAT' },
  { year: 2025, summary: 'Advanced DS — NLP, Airflow, agentic systems' },
  { year: 2026, summary: 'MS AI track — systems + ML focus (current)' },
];

export function YearInReview() {
  return (
    <section id="year-review" className="py-20 px-4 md:px-8 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            LAP <span className="text-red-500">COUNTER</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Career progression year by year.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line (desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-neutral-800" />

          {/* Year markers */}
          <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between gap-8 md:gap-4">
            {yearSummaries.map(({ year, summary }, index) => {
              const isCurrent = year === 2026;
              return (
                <div key={year} className="flex-1 relative">
                  {/* Marker */}
                  <div className="flex md:flex-col items-center md:items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm font-bold transition-all ${
                        isCurrent
                          ? 'border-red-500 bg-red-500/20 text-red-400'
                          : 'border-neutral-700 bg-neutral-900 text-neutral-500'
                      }`}
                    >
                      {year}
                    </div>
                    <p className={`text-sm text-center md:mt-4 max-w-[150px] ${
                      isCurrent ? 'text-neutral-200' : 'text-neutral-500'
                    }`}>
                      {summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
