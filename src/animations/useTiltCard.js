import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { isReducedMotion } from './motionTokens';

/**
 * useTiltCard — Interactive 3D glass card tilt & dynamic cursor spotlight.
 * Modifies rotateX, rotateY in 3D perspective and updates CSS vars --mouse-x, --mouse-y.
 */
export default function useTiltCard(maxTilt = 7) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof window === 'undefined') return;
    if (isReducedMotion() || ('ontouchstart' in window && window.innerWidth < 1024)) {
      return;
    }

    const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.45, ease: 'power2.out' });
    const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.45, ease: 'power2.out' });
    const zTo = gsap.quickTo(el, 'z', { duration: 0.45, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update spotlight CSS variables
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);

      // Normalized coordinates (-1 to 1)
      const normX = (x / rect.width) * 2 - 1;
      const normY = (y / rect.height) * 2 - 1;

      rotX(-normY * maxTilt);
      rotY(normX * maxTilt);
      zTo(8);
    };

    const handleMouseLeave = () => {
      rotX(0);
      rotY(0);
      zTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(el, { rotationX: 0, rotationY: 0, z: 0 });
    };
  }, [maxTilt]);

  return cardRef;
}
