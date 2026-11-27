import SpecularButton from './SpecularButton';
import GradientText from './GradientText';
import { useEffect, useState } from 'react';
import devMarketingLogo from '../assets/dev-marketing-logo.png';

const SHOW_DELAY_MS = 2500;

/* Highlight shown on the homepage, dismissable and saved in sessionStorage */
export default function DevMarketingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      (sessionStorage.getItem('dev_marketing_seen') ||
        new URLSearchParams(window.location.search).has('no_modal'))
    ) {
      return;
    }
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dev_marketing_seen', 'true');
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-[#061A40]/60 p-5 backdrop-blur-md transition-opacity duration-300"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="devmarketing-title"
        onClick={(e) => e.stopPropagation()}
        className="glass-popover relative w-full max-w-[460px] overflow-hidden rounded-[24px] border border-cyan-400/30 bg-white/95 text-center shadow-[0_30px_90px_rgba(3,17,43,0.4)] backdrop-blur-2xl animate-fade-up"
      >
        <div className="h-1.5 bg-gradient-to-r from-[#0057D9] via-[#00C8FF] to-[#0057D9]" />
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#061A40]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 pt-10 pb-8">
          <p className="mb-4 font-mono text-[0.7rem] tracking-[0.16em] text-[#007BFF] uppercase font-semibold">
            New partnership
          </p>
          <img src={devMarketingLogo} alt="Dev Marketing" className="mx-auto mb-6 h-auto w-[140px] object-contain" />
          <h2 id="devmarketing-title" className="mb-3 font-serif text-[1.65rem] font-bold leading-tight text-[#061A40]"><GradientText>
            We've collaborated with <span className="italic font-serif text-[#007BFF]">Dev Marketing</span> for NexLock
          </GradientText></h2>
          <p className="mx-auto mb-7 max-w-[38ch] text-[0.92rem] text-[#52627A]">
            NexLock training has been delivered to the Top 10 stores across Mumbai.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <SpecularButton
              to="/brands/dev-marketing"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#061A40] px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#0057D9] transition-all"
            >
              See the partnership &rarr;
            </SpecularButton>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
