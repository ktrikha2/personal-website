'use client';

import { cn } from '@/lib/utils';

interface TimelineMarkerProps {
  year: number;
  position: number;
  isActive: boolean;
  onClick: () => void;
}

export function TimelineMarker({
  year,
  position,
  isActive,
  onClick,
}: TimelineMarkerProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
        'transition-all duration-300'
      )}
      style={{ left: `${position}%` }}
      aria-label={`Jump to year ${year}`}
      aria-pressed={isActive}
    >
      {/* Marker dot */}
      <div
        className={cn(
          'w-4 h-4 rounded-full border-2 transition-all duration-300',
          isActive
            ? 'bg-red-500 border-red-500 scale-125 shadow-lg shadow-red-500/50'
            : 'bg-neutral-900 border-neutral-600 hover:border-neutral-400'
        )}
      />
      {/* Year label */}
      <span
        className={cn(
          'text-xs font-medium transition-colors duration-300 whitespace-nowrap',
          isActive ? 'text-white' : 'text-neutral-500'
        )}
      >
        {year}
      </span>
    </button>
  );
}
