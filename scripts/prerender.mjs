import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pages, missing, origin, metadata, render } from '../node_modules/.cache/nexus-render/prerender.js';

const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const template = await readFile('dist/index.html', 'utf8');
const paths = new Set();
for (const record of [...pages, missing]) {
  if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(record.path) || paths.has(record.path)) {
    throw new Error('Invalid or duplicate public path: ' + record.path);
  }
  paths.add(record.path);
  const head = metadata(record).map(([tag, attrs, content]) => {
    const attributes = Object.entries(attrs).map(([key, value]) => ` ${key}="${escape(value)}"`).join('');
    const start = `<${tag} data-page-head${attributes}>`;
    if (tag === 'script') return start + content + '</script>';
    if (tag === 'title') return start + escape(content) + '</title>';
    return start;
  }).join('\n');
  const body = render(record.path);
  if (!body.includes('<h1') || !template.includes('<!--page-head-->') || !template.includes('<!--page-body-->')) {
    throw new Error('Incomplete prerender for ' + record.path);
  }
  const file = join('dist', record.path === '/' ? 'index.html' : record.path.slice(1) + '.html');
  await mkdir(dirname(file), {recursive: true});
  await writeFile(file, template.replace('<!--page-head-->', () => head).replace('<!--page-body-->', () => body));
}
const urls = pages.map(({path, updatedAt}) => {
  let lastmod = '';
  if (updatedAt) {
    const date = new Date(updatedAt);
    if (Number.isNaN(date.valueOf())) throw new Error('Invalid modification timestamp for ' + path);
    lastmod = '<lastmod>' + date.toISOString() + '</lastmod>';
  }
  return '  <url><loc>' + escape(new URL(path, origin).href) + '</loc>' + lastmod + '</url>';
});
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n');
await writeFile('dist/robots.txt', 'User-agent: Googlebot\nUser-agent: Bingbot\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ' + origin + '/sitemap.xml\n');
console.log('Prerendered ' + pages.length + ' public pages, 404, robots.txt and sitemap.xml.');

