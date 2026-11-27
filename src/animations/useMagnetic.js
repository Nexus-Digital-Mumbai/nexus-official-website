import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { isReducedMotion } from './motionTokens';

/**
 * useMagnetic — Magnetic button micro-interaction hook.
 * Attracts the button element subtly towards cursor position within its bounding box,
 * and springs smoothly back on mouse leave.
 * Automatically disabled on touch screens and prefers-reduced-motion.
 */
export default function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;
    if (isReducedMotion() || ('ontouchstart' in window && window.innerWidth < 1024)) {
      return;
    }

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      xTo(distanceX * strength);
      yTo(distanceY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [strength]);

  return ref;
}
