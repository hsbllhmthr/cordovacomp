import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'flex flex-col max-w-3xl mb-10 sm:mb-14',
          alignStyles[align],
          className
        )
      )}
    >
      {badge && (
        <span
          className={clsx(
            'inline-block px-3.5 py-1 mb-3 text-xs font-bold tracking-widest uppercase rounded-full',
            light
              ? 'bg-white/10 text-blue-200 border border-white/20'
              : 'bg-primary-light text-primary border border-primary/20'
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={clsx(
          'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            'mt-3.5 text-base sm:text-lg leading-relaxed text-balance',
            light ? 'text-blue-100/90' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={clsx(
          'h-1 w-16 rounded-full mt-4',
          light ? 'bg-blue-400' : 'bg-primary',
          align === 'center' && 'mx-auto'
        )}
      />
    </div>
  );
};

