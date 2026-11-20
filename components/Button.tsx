import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'dark-pill' | 'primary' | 'outline-glass' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  arrow?: boolean;
  icon?: React.ReactNode;
  external?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'dark-pill',
  size = 'md',
  href,
  arrow = true,
  icon,
  external,
  children,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  const baseClasses =
    'group inline-flex items-center justify-center font-medium transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-xs tracking-wide px-4 py-2 gap-2 rounded-full',
    md: 'text-sm tracking-wide px-5.5 py-3 gap-2.5 rounded-full',
    lg: 'text-base tracking-wide px-7 py-3.5 gap-3 rounded-full',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    'dark-pill':
      'bg-navy text-white shadow-md hover:bg-navy-dark hover:shadow-lg active:scale-[0.98] border border-white/10',
    primary:
      'bg-primary-electric text-white shadow-md hover:bg-primary-hover hover:shadow-[0_0_24px_rgba(37,99,235,0.45)] active:scale-[0.98] border border-white/15',
    'outline-glass':
      'glass-pill text-navy hover:bg-white/90 hover:shadow-lg active:scale-[0.98] font-semibold',
    ghost:
      'text-navy hover:bg-navy/5 active:bg-navy/10 rounded-full',
  };

  const arrowIcon = arrow ? (
    <svg
      className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ) : null;

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          target={external || href.startsWith('http') ? '_blank' : undefined}
          rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {arrowIcon}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...rest}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {arrowIcon}
    </button>
  );
}
