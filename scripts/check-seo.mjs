import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { pages, missing, origin, metadata } from '../node_modules/.cache/nexus-render/prerender.js';

const read = name => readFileSync('dist/' + name, 'utf8');
const urls = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(urls, pages.map(record => new URL(record.path, origin).href));
assert.equal(new Set(urls).size, urls.length);
assert.ok(read('robots.txt').includes('Sitemap: ' + origin + '/sitemap.xml'));
const titles = new Set();
const descriptions = new Set();
for (const record of [...pages, missing]) {
  const html = read(record.path === '/' ? 'index.html' : record.path.slice(1) + '.html');
  const head = html.split('</head>')[0];
  assert.equal((html.match(/<h1\b/g) || []).length, 1, record.path);
  assert.equal((html.match(/<main\b/g) || []).length, 1, record.path);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) assert.match(match[0], / alt="/, record.path);
  for (const [, asset] of html.matchAll(/\bsrc="(\/[^"]+)"/g)) assert.ok(existsSync('dist' + asset), asset);
  const title = head.match(/<title[^>]*>([^<]+)<\/title>/)[1];
  assert.ok(!titles.has(title), title);
  titles.add(title);
  const description = metadata(record).find(([, attrs]) => attrs.name === 'description')[1].content;
  assert.ok(!descriptions.has(description), description);
  descriptions.add(description);
  if (record === missing) {
    assert.match(head, /noindex, follow/);
    assert.doesNotMatch(head, /rel="canonical"/);
    continue;
  }
  const canonical = new URL(record.path, origin).href;
  assert.equal((head.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(head.includes('rel="canonical" href="' + canonical + '"'));
  assert.match(head, /property="og:image"/);
  assert.match(head, /name="twitter:card"/);
  const graph = JSON.parse(head.match(/type="application\/ld\+json">([^<]+)<\/script>/)[1])['@graph'];
  const types = graph.map(node => node['@type']);
  assert.ok(types.includes(record.type || 'WebPage'));
  assert.ok(types.includes('Organization') && types.includes('WebSite'));
  if (record.person) assert.ok(types.includes('Person') && html.includes(record.person.role));
  if (record.pillar) assert.ok(types.includes(record.pillar.kind === 'product' ? 'Product' : 'Service'));
  for (const [, href] of html.matchAll(/<a\b[^>]*?href="(\/[^"]*)"/g)) {
    assert.ok(urls.includes(new URL(href, origin).href.split(/[?#]/)[0]), record.path + ' links to ' + href);
  }
}
console.log('SEO checks passed for ' + urls.length + ' public pages and the error page.');

