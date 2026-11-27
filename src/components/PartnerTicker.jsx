import { Link } from 'react-router-dom';
import { brands } from '../data/brands';

export default function PartnerTicker() {
  const items = brands.map((b) => ({
    key: b.slug,
    to: `/brands/${b.slug}`,
    text: `Nexus has collaborated with ${b.name} for ${b.partner}`,
  }));

  if (!items.length) return null;

  const REPEATS = 4;
  const copy = (hidden) =>
    Array.from({ length: REPEATS }, (_, r) =>
      items.map((it) => (
        <Link
          key={`${hidden ? 'b' : 'a'}-${r}-${it.key}`}
          to={it.to}
          aria-hidden={hidden || r > 0 || undefined}
          tabIndex={hidden || r > 0 ? -1 : undefined}
          className="inline-flex items-center gap-4 whitespace-nowrap px-4 sm:px-6 text-[0.76rem] font-medium tracking-[0.03em] text-white/90 transition hover:text-cyan-300"
        >
          <span className="text-[10px] text-cyan-400 font-mono" aria-hidden="true">&#9670;</span>
          <span>{it.text}</span>
        </Link>
      ))
    );

  return (
    <section aria-label="Partner news" className="w-full overflow-hidden border-y border-cyan-500/25 bg-[#061A40] py-3">
      <div className="marquee-track min-w-[200%] items-center focus-within:[animation-play-state:paused] motion-reduce:animate-none">
        <div className="flex flex-1 justify-around">{copy(false)}</div>
        <div className="flex flex-1 justify-around">{copy(true)}</div>
      </div>
    </section>
  );
}
