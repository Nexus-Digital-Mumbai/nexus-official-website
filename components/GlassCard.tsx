import React from 'react';

export type GlassCardVariant = 'default' | 'elevated' | 'dark' | 'flat';
export type GlassCardGlow = 'none' | 'cyan' | 'blue' | 'teal' | 'pink';
export type GlassCardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  variant?: GlassCardVariant;
  glow?: GlassCardGlow;
  padding?: GlassCardPadding;
  hoverLift?: boolean;
  children: React.ReactNode;
  className?: string;
}

const paddingClasses: Record<GlassCardPadding, string> = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-11',
};

const glowClasses: Record<GlassCardGlow, string> = {
  none: '',
  cyan: 'relative after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-accent-cyan/15 after:blur-2xl after:content-[""]',
  blue: 'relative after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-primary-electric/15 after:blur-2xl after:content-[""]',
  teal: 'relative after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-accent-teal/15 after:blur-2xl after:content-[""]',
  pink: 'relative after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:bg-accent-pink/15 after:blur-2xl after:content-[""]',
};

export default function GlassCard({
  as: Component = 'div',
  variant = 'default',
  glow = 'none',
  padding = 'md',
  hoverLift = true,
  children,
  className = '',
  ...rest
}: GlassCardProps) {
  const variantClass =
    variant === 'dark'
      ? 'glass-dark text-white rounded-2xl'
      : variant === 'flat'
      ? 'glass-panel rounded-2xl'
      : 'glass-card';

  const liftClass = hoverLift ? '' : 'hover:transform-none hover:shadow-glass';

  return (
    <Component
      className={`${variantClass} ${paddingClasses[padding]} ${glowClasses[glow]} ${liftClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
