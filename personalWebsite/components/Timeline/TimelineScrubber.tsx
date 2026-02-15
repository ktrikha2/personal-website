'use client';

import { useCallback, useEffect, useRef } from 'react';
import { timelineData, timelineYears } from '@/data/timeline';
import { useTimeline } from '@/hooks/useTimeline';
import { TimelineMarker } from './TimelineMarker';
import { TimelineDetailPanel } from './TimelineDetailPanel';
import { cn } from '@/lib/utils';

interface TimelineScrubberProps {
  className?: string;
  onYearChange?: (year: number) => void;
}

export function TimelineScrubber({ className, onYearChange }: TimelineScrubberProps) {
  const { activeIndex, activeEntry, setActiveIndex, next, prev, canGoNext, canGoPrev } =
    useTimeline();
  const trackRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      }
    };

    const track = trackRef.current;
    track?.addEventListener('keydown', handleKeyDown);
    return () => track?.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  // Notify parent of year changes
  useEffect(() => {
    onYearChange?.(activeEntry.year);
  }, [activeEntry.year, onYearChange]);

  const handleMarkerClick = useCallback(
    (year: number) => {
      const index = timelineData.findIndex((e) => e.year === year);
      if (index !== -1) {
        setActiveIndex(index);
      }
    },
    [setActiveIndex]
  );

  return (
    <div className={cn('w-full', className)}>
      {/* Track container */}
      <div
        ref={trackRef}
        className="relative py-8 px-8 md:px-16"
        tabIndex={0}
        role="slider"
        aria-label="Career timeline"
        aria-valuemin={timelineYears[0]}
        aria-valuemax={timelineYears[timelineYears.length - 1]}
        aria-valuenow={activeEntry.year}
        aria-valuetext={`${activeEntry.year}: ${activeEntry.role} at ${activeEntry.company}`}
      >
        {/* Background track */}
        <div className="relative h-1 bg-neutral-800 rounded-full">
          {/* Progress fill */}
          <div
            className="absolute h-full rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${activeEntry.trackPosition}%` }}
          />

          {/* Year markers */}
          {timelineYears.map((year) => {
            const entry = timelineData.find((e) => e.year === year);
            return (
              <TimelineMarker
                key={year}
                year={year}
                position={entry?.trackPosition ?? 0}
                isActive={activeEntry.year === year}
                onClick={() => handleMarkerClick(year)}
              />
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center px-4 md:px-8 mt-4">
        <button
          onClick={prev}
          disabled={!canGoPrev}
          className={cn(
            'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
            canGoPrev
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              : 'text-neutral-600 cursor-not-allowed'
          )}
          aria-label="Previous entry"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>

        <div className="text-center">
          <span className="text-2xl font-bold text-white">{activeEntry.year}</span>
          <span className="block text-sm text-neutral-500">
            {activeIndex + 1} of {timelineData.length}
          </span>
        </div>

        <button
          onClick={next}
          disabled={!canGoNext}
          className={cn(
            'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
            canGoNext
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
              : 'text-neutral-600 cursor-not-allowed'
          )}
          aria-label="Next entry"
        >
          Next
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Detail panel */}
      <TimelineDetailPanel entry={activeEntry} />
    </div>
  );
}
