'use client';

import { TimelineEntry } from '@/data/timeline';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils';

interface TimelineDetailPanelProps {
  entry: TimelineEntry;
  className?: string;
}

export function TimelineDetailPanel({ entry, className }: TimelineDetailPanelProps) {
  const dateRange = entry.endMonth
    ? `${entry.month} – ${entry.endMonth} ${entry.year}`
    : `${entry.month} ${entry.year}`;

  return (
    <div
      className={cn(
        'mt-8 p-6 bg-neutral-900/80 border border-neutral-800 rounded-xl backdrop-blur-sm',
        'animate-in fade-in slide-in-from-bottom-4 duration-300',
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={cn(
                'px-2 py-0.5 text-xs font-semibold rounded uppercase tracking-wider',
                entry.type === 'internship'
                  ? 'bg-blue-500/20 text-blue-400'
                  : entry.type === 'education'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-amber-500/20 text-amber-400'
              )}
            >
              {entry.type}
            </span>
            <span className="text-sm text-neutral-500">{dateRange}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{entry.role}</h3>
          <p className="text-neutral-400">
            {entry.company} • {entry.location}
          </p>
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-2 mb-4">
        {entry.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-neutral-300">
            <span className="text-red-500 mt-1">▸</span>
            {highlight}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
        {entry.techTags.map((tag) => (
          <Tag key={tag} variant="info" size="sm">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}
