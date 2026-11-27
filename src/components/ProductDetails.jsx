export function FeatureGrid({ items, accent }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f.title} className="glass-panel rounded-xl p-4 shadow-glass">
          <p className={`mb-1 flex items-center gap-2 font-display text-[0.98rem] font-semibold text-slate-900`}>
            <span className={`h-1.5 w-1.5 rounded-full ${accent.bg}`} />
            {f.title}
          </p>
          <p className="text-[0.85rem] leading-snug text-slate-600">{f.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export function ProblemSolution({ problem, solution, accent }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-navy/10 bg-white/50 p-4">
        <p className="mb-1.5 font-mono text-[0.66rem] tracking-[0.14em] text-slate-500 uppercase">The problem</p>
        <p className="text-[0.9rem] leading-snug text-slate-700">{problem}</p>
      </div>
      <div className={`rounded-xl border p-4 ${accent.border} ${accent.soft}`}>
        <p className={`mb-1.5 font-mono text-[0.66rem] tracking-[0.14em] uppercase ${accent.text}`}>What it does</p>
        <p className="text-[0.9rem] leading-snug text-slate-800">{solution}</p>
      </div>
    </div>
  );
}

export function Audience({ label, items }) {
  return (
    <p className="mt-6 text-[0.85rem] text-slate-600">
      <span className="mr-2 font-mono text-[0.66rem] tracking-[0.14em] text-slate-500 uppercase">{label}</span>
      {items.join(' · ')}
    </p>
  );
}
