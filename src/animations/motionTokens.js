import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely in browser environment
let registered = false;
export function registerGsapPlugins() {
  if (typeof window !== 'undefined' && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export const MOTION_COLORS = {
  navy: '#061A40',
  midnight: '#03112B',
  royal: '#0057D9',
  electric: '#007BFF',
  cyan: '#00C8FF',
  ice: '#DDF5FF',
  white: '#FFFFFF',
};

export const MOTION_DURATIONS = {
  fast: 0.22,
  standard: 0.4,
  reveal: 0.85,
  hero: 1.1,
  ambient: 7.0,
};

export const MOTION_EASES = {
  smooth: 'power3.out',
  snappy: 'power2.out',
  cinematic: 'expo.out',
  float: 'sine.inOut',
};

export function isReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
