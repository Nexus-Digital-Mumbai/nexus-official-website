import React from 'react';

export type ContainerSize = 'default' | 'narrow' | 'wide' | 'full';

export interface ContainerProps {
  as?: React.ElementType;
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  as: Component = 'div',
  size = 'default',
  className = '',
  children,
}: ContainerProps) {
  const sizeClasses: Record<ContainerSize, string> = {
    narrow: 'max-w-[860px]',
    default: 'max-w-[1180px]',
    wide: 'max-w-[1320px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-6 md:px-8 ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
