import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  default: 'bg-sharp-bg-tertiary text-sharp-black border-sharp-border',
  primary: 'bg-sharp-primary text-white border-sharp-primary',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  info: 'bg-sharp-bg-secondary text-sharp-black border-sharp-border',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export function Tag({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border font-medium font-secondary',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
