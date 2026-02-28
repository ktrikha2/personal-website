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
        'flex flex-wrap gap-2 p-1 bg-sharp-bg-tertiary border border-sharp-border',
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
            'px-4 py-2 text-small font-medium font-secondary transition-colors duration-normal',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-sharp-primary',
            activeFilter === option.id
              ? 'bg-sharp-black text-white'
              : 'text-sharp-text-secondary hover:text-sharp-black hover:bg-sharp-bg-secondary'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
