import React from 'react';

/**
 * KineticText — Professional masked typography reveal component.
 * Splits lines and phrases into overflow-hidden wrappers for smooth editorial reveals.
 */
export function KineticLine({ children, className = '', lineClassName = '' }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <span className={`block translate-y-0 will-change-transform ${lineClassName}`}>
        {children}
      </span>
    </span>
  );
}

export function KineticWord({ children, className = '', wordClassName = '' }) {
  return (
    <span className={`inline-block overflow-hidden align-top ${className}`}>
      <span className={`inline-block translate-y-0 will-change-transform ${wordClassName}`}>
        {children}
      </span>
    </span>
  );
}
