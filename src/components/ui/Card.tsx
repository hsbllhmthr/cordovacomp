import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'white' | 'soft' | 'navy';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  hoverable = true,
  className,
  ...props
}) => {
  const variantStyles = {
    white: 'bg-white border border-gray-100 shadow-sm text-ink',
    soft: 'bg-soft border border-blue-50 text-ink',
    navy: 'bg-navy text-white border border-navy-light',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-24 p-6 sm:p-8 transition-all duration-300',
          variantStyles[variant],
          hoverable && 'hover:shadow-md hover:-translate-y-1',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};

