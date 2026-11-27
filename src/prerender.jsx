import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
export { pages, missing, origin } from './data/pages';
export { metadata } from './data/metadata';

const modules = import.meta.glob('./pages/*.jsx', { eager: true, import: 'default' });
const views = Object.fromEntries(Object.entries(modules).map(([path, View]) => [path.slice('./pages/'.length, -'.jsx'.length), View]));

export function render(path) {
  return renderToString(<StaticRouter location={path}><App views={views} /></StaticRouter>);
}

