import { Link } from 'react-router-dom';
import './GlassButton.css';

function trackPointer(event) {
  if (event.pointerType === 'touch' || !window.matchMedia('(any-hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;
  const { currentTarget: target, clientX, clientY } = event;
  const bounds = target.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, 2 * (clientX - bounds.left) / bounds.width - 1));
  const y = Math.max(-1, Math.min(1, 2 * (clientY - bounds.top) / bounds.height - 1));
  const face = target.firstElementChild;
  face.style.transform = `perspective(520px) translate3d(${x * 6}px, ${y * 3}px, 0) rotateX(${-y * 8}deg) rotateY(${x * 7}deg)`;
  face.style.setProperty('--shine-x', `${50 + x * 50}%`);
  face.style.setProperty('--shine-y', `${50 + y * 50}%`);
}

function releasePointer(event) {
  event.currentTarget.firstElementChild.removeAttribute('style');
}

export default function GlassButton({ to, href, children, className = '', ...props }) {
  const Control = to ? Link : href ? 'a' : 'button';
  const destination = to ? { to } : href ? { href } : {};
  return (
    <Control {...destination} {...props} className={`glass-action ${className}`}
      onPointerMove={trackPointer} onPointerLeave={releasePointer} onPointerCancel={releasePointer} onBlur={releasePointer}>
      <span className="glass-action__face">{children}</span>
    </Control>
  );
}
