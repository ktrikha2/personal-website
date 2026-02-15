'use client';

import { cn } from '@/lib/utils';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  className?: string;
}

export function FilterBar({
  options,
  activeFilter,
  onFilterChange,
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-2 p-1 bg-neutral-900/50 rounded-lg border border-neutral-800',
        className
      )}
      role="tablist"
      aria-label="Filter options"
    >
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          role="tab"
          aria-selected={activeFilter === option.id}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
            activeFilter === option.id
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
