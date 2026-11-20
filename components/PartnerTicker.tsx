import Link from 'next/link';
import { brands } from '../data/brands';

export default function PartnerTicker() {
  const items = brands.map((b) => ({
    key: b.slug,
    to: `/brands/${b.slug}`,
    text: `Nexus has collaborated with ${b.name} for ${b.partner}`,
  }));
  if (!items.length) return null;

  const REPEATS = 4;
  const copy = (hidden: boolean) =>
    Array.from({ length: REPEATS }, (_, r) =>
      items.map((it) => (
        <Link
          key={`${hidden ? 'b' : 'a'}-${r}-${it.key}`}
          href={it.to}
          aria-hidden={hidden || undefined}
          tabIndex={hidden ? -1 : undefined}
          className="flex items-center gap-6 whitespace-nowrap px-6 text-[0.8rem] font-semibold tracking-[0.06em] text-white transition hover:text-cyan-300 sm:px-10"
        >
          {it.text}
          <span className="text-[10px] text-cyan-400" aria-hidden="true">&#9670;</span>
        </Link>
      ))
    );

  return (
    <div className="absolute inset-x-0 top-[104px] z-[500] h-9 overflow-hidden border-y border-white/10 bg-navy" role="region" aria-label="Partner news">
      <div className="marquee-track h-full items-center">
        {copy(false)}
        {copy(true)}
      </div>
    </div>
  );
}
