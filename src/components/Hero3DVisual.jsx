import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import './Hero3DVisual.css';

const ORBITS = [
  { tilt: -28, depth: 0.39, radius: 46, phase: 0.78, period: 17, size: 7 },
  { tilt: 18, depth: 0.46, radius: 48, phase: 0.12, period: 22, size: 9 },
  { tilt: -53, depth: 0.51, radius: 43, phase: 0.55, period: 26, size: 5 },
];
const spring = { stiffness: 120, damping: 20 };
const radians = Math.PI / 180;

export default function Hero3DVisual() {
  const root = useRef(null);
  const emblem = useRef(null);
  const satellites = useRef([]);
  const inView = useInView(root);
  const pitch = useMotionValue(0);
  const yaw = useMotionValue(0);
  const rotateX = useSpring(pitch, spring);
  const rotateY = useSpring(yaw, spring);

  useEffect(() => {
    if (!inView) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(emblem.current, { yPercent: 1, rotationY: -8, rotationZ: -2 }, {
        yPercent: -2.5, rotationY: 8, rotationZ: 2,
        duration: 3.7, ease: 'sine.inOut', repeat: -1, yoyo: true,
      });

      ORBITS.forEach(({ tilt, depth, radius, phase, period }, i) => {
        const node = satellites.current[i];
        const orbit = { angle: phase * Math.PI * 2 };
        const setX = gsap.quickSetter(node, 'left', '%');
        const setY = gsap.quickSetter(node, 'top', '%');
        const draw = () => {
          const x = radius * Math.cos(orbit.angle);
          const z = Math.sin(orbit.angle);
          const y = radius * depth * z;
          setX(50 + x * Math.cos(tilt * radians) - y * Math.sin(tilt * radians));
          setY(50 + x * Math.sin(tilt * radians) + y * Math.cos(tilt * radians));
          node.style.scale = String(0.84 + z * 0.23);
          node.style.zIndex = z > 0 ? '3' : '1';
        };
        draw();
        gsap.to(orbit, { angle: orbit.angle + Math.PI * 2, duration: period,
          repeat: -1, ease: 'none', onUpdate: draw });
      });

      return () => {
        pitch.set(0);
        yaw.set(0);
      };
    }, root);
    return () => media.revert();
  }, [inView, pitch, yaw]);

  function tilt(event) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    yaw.set(((event.clientX - rect.left) / rect.width - 0.5) * 19);
    pitch.set((0.5 - (event.clientY - rect.top) / rect.height) * 15);
  }

  return (
    <div ref={root} className="hero-emblem" data-visible={inView} aria-hidden="true"
      onPointerMove={tilt} onPointerLeave={() => { pitch.set(0); yaw.set(0); }}>
      <div className="hero-emblem__aura" />
      <motion.div className="hero-emblem__scene" style={{ rotateX, rotateY }}>
        {ORBITS.map(({ tilt, depth, radius }) => (
          <div key={tilt} className="hero-emblem__track" style={{
            width: radius * 2 + '%', height: radius * depth * 2 + '%',
            transform: 'translate(-50%, -50%) rotate(' + tilt + 'deg)',
          }} />
        ))}
        {ORBITS.map(({ tilt, size }, i) => (
          <span key={tilt} ref={node => { satellites.current[i] = node; }}
            className={'hero-emblem__satellite satellite-' + i} style={{ width: size + '%' }} />
        ))}
        <div ref={emblem} className="hero-emblem__mark">
          <div className="hero-emblem__silhouette">
            <img src="/nexus-emblem.png" alt="" draggable="false" />
            <span className="hero-emblem__finish"><span /></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
