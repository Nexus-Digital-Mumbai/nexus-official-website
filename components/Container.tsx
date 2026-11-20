import React from 'react';

interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export default function Container({ as: Tag = 'div', className = '', children }: ContainerProps) {
  return <Tag className={`mx-auto max-w-[1180px] px-6 ${className}`}>{children}</Tag>;
}
