import { Suspense, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { breadcrumbs, byPath, missing } from '../data/pages';
import { metadata } from '../data/metadata';
const pillarViews = { 'it-solutions': 'ITSolutions', nexlock: 'Nexlock', nexwarranty: 'Nexwarrenty' };
function Pillar({ pillar }) {
  return <article className="mx-auto max-w-4xl px-6 pt-36 pb-16"><h1>{pillar.name}</h1><p>{pillar.summary}</p>
    <ul>{pillar.points.map(point => <li key={point}>{point}</li>)}</ul></article>;
}
function Missing() {
  return <section className="mx-auto max-w-4xl px-6 pt-36 pb-16"><h1>Page not found</h1><Link to="/">Return to Nexus home</Link></section>;
}
const legalViews = {
  'nexlock-privacy': 'NexlockPrivacy', 'nexlock-terms': 'NexlockTerms',
  'nexwarranty-privacy': 'NexwarrentyPrivacy', 'nexwarranty-terms': 'NexwarrentyTerms',
};

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function PageContent({ views }) {
  const { pathname, search, hash } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const record = byPath.get(path) || missing;
  useEffect(() => {
    const fragment = document.createDocumentFragment();
    for (const [tag, attrs, value] of metadata(record)) {
      const node = document.createElement(tag);
      node.setAttribute('data-page-head', '');
      Object.entries(attrs).forEach(([key, val]) => node.setAttribute(key, val));
      if (value) node.textContent = value;
      fragment.appendChild(node);
    }
    document.head.querySelectorAll('[data-page-head]').forEach(node => node.remove());
    document.head.append(fragment);
  }, [record]);
  if (path === '/nexwarranty') return <Navigate replace to={'/nexwarrenty' + search + hash} />;
  const name = record.pillar ? pillarViews[record.pillar.id] : legalViews[record.view] || record.view;
  const View = views[name] || (record.pillar ? Pillar : Missing);
  const trail = breadcrumbs(record);
  return <main id="main-content" tabIndex={-1}>
    <Suspense fallback={<p role="status" className="px-6 pt-36">Loading page?</p>}>
      <View key={path} {...record} />
      <ScrollToTop />
    </Suspense>
    {trail.length > 0 && <nav aria-label="Breadcrumb" className="mx-auto max-w-[1180px] px-6 py-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2">{trail.map((item, i) => <li key={item.path}>
        {i > 0 && <span aria-hidden="true" className="mr-2">/</span>}
        {item === record ? <span aria-current="page">{item.label}</span> : <Link className="underline" to={item.path}>{item.label}</Link>}
      </li>)}</ol>
    </nav>}
  </main>;
}

