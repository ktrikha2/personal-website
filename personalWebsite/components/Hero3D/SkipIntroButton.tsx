'use client';

import { cn } from '@/lib/utils';

interface SkipIntroButtonProps {
  onSkip: () => void;
  className?: string;
}

export function SkipIntroButton({ onSkip, className }: SkipIntroButtonProps) {
  return (
    <button
      onClick={onSkip}
      className={cn(
        'absolute bottom-8 right-8 z-20',
        'px-4 py-2 text-sm font-medium',
        'bg-neutral-900/80 backdrop-blur-sm border border-neutral-700',
        'text-neutral-300 hover:text-white hover:border-neutral-500',
        'rounded-lg transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500',
        className
      )}
      aria-label="Skip 3D intro and jump to main content"
    >
      Skip Intro →
    </button>
  );
}
