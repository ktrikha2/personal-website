import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      secondary:
        'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 focus-visible:ring-neutral-500',
      ghost:
        'text-neutral-300 hover:text-white hover:bg-neutral-800/50 focus-visible:ring-neutral-500',
      outline:
        'border border-neutral-700 text-neutral-300 hover:border-red-500/50 hover:text-white focus-visible:ring-red-500',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
      md: 'h-10 px-4 text-sm rounded-lg gap-2',
      lg: 'h-12 px-6 text-base rounded-lg gap-2',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    // If asChild is true, render the child with button styles
    if (asChild && children) {
      const child = children as React.ReactElement<{ className?: string; children?: ReactNode }>;
      if (child && typeof child === 'object' && 'props' in child) {
        return (
          <span className={combinedClassName}>
            {child}
          </span>
        );
      }
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
