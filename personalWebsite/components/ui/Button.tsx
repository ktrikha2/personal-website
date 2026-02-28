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
      'inline-flex items-center justify-center font-medium font-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-sharp-black text-white hover:bg-sharp-primary focus-visible:ring-sharp-primary duration-fast',
      secondary:
        'bg-sharp-border text-sharp-black hover:bg-sharp-text-secondary hover:text-white focus-visible:ring-sharp-text-secondary duration-normal',
      ghost:
        'text-sharp-text-secondary hover:text-sharp-black hover:bg-sharp-bg-tertiary focus-visible:ring-sharp-text-secondary duration-normal',
      outline:
        'border-2 border-sharp-border text-sharp-black hover:border-sharp-black focus-visible:ring-sharp-black duration-normal',
    };

    const sizes = {
      sm: 'h-8 px-3 text-small',
      md: 'h-10 px-4 text-small',
      lg: 'h-12 px-6 text-body',
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
