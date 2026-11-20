import React from 'react';
import Eyebrow from './Eyebrow';

export type SectionHeadingAlign = 'left' | 'center';
export type SectionHeadingSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  code?: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  description?: React.ReactNode;
  align?: SectionHeadingAlign;
  size?: SectionHeadingSize;
  onDark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  code,
  title,
  accent,
  description,
  align = 'left',
  size = 'lg',
  onDark = false,
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  const sizeClasses: Record<SectionHeadingSize, string> = {
    sm: 'text-2xl md:text-3xl tracking-tight',
    md: 'text-3xl md:text-4xl tracking-tight',
    lg: 'text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.12]',
    xl: 'text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08]',
  };

  return (
    <div
      className={`flex flex-col ${
        isCentered ? 'items-center text-center max-w-3xl mx-auto' : 'items-start text-left'
      } ${className}`.trim()}
    >
      {eyebrow && (
        <Eyebrow onDark={onDark} code={code}>
          {eyebrow}
        </Eyebrow>
      )}

      <h2
        className={`font-serif font-semibold ${sizeClasses[size]} ${
          onDark ? 'text-white' : 'text-text-navy'
        }`}
      >
        <span>{title}</span>
        {accent && (
          <>
            {' '}
            <span className="serif-italic-accent">{accent}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            onDark ? 'text-slate-300' : 'text-text-muted'
          } ${isCentered ? 'max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
