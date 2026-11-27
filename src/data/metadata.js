import { breadcrumbs, missing, organizationDescription, origin, titleFor } from './pages';
import { serviceQuestions } from './serviceQuestions';

const absolute = path => new URL(path, origin).href;
const ref = id => ({ '@id': id });
export function metadata(record) {
  const title = titleFor(record);
  const { description } = record;
  const indexed = record !== missing;
  const url = absolute(record.path);
  const image = absolute(record.image || '/nexus-logo.png');
  const tags = [
    ['title', {}, title],
    ['meta', { name: 'description', content: description }],
    ['meta', { name: 'robots', content: indexed ? 'index, follow' : 'noindex, follow' }],
  ];
  if (!indexed) return tags;
  tags.push(['link', { rel: 'canonical', href: url }]);
  for (const [key, value] of Object.entries({
    'og:type': record.person ? 'profile' : 'website', 'og:site_name': 'Nexus',
    'og:title': title, 'og:description': description, 'og:url': url, 'og:image': image,
    'twitter:card': 'summary', 'twitter:title': title, 'twitter:description': description, 'twitter:image': image,
  })) tags.push(['meta', { [key.startsWith('og:') ? 'property' : 'name']: key, content: value }]);

  const org = absolute('/#organization');
  const site = absolute('/#website');
  const page = { '@id': url + '#page', '@type': record.type || 'WebPage', url, name: title, description, isPartOf: ref(site) };
  const graph = [
    { '@id': org, '@type': 'Organization', name: 'Nexus', url: absolute('/'), logo: absolute('/nexus-logo.png'), description: organizationDescription },
    { '@id': site, '@type': 'WebSite', name: 'Nexus', url: absolute('/'), publisher: ref(org) }, page,
  ];
  const trail = breadcrumbs(record);
  if (trail.length) {
    page.breadcrumb = ref(url + '#breadcrumbs');
    graph.push({ ...page.breadcrumb, '@type': 'BreadcrumbList', itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem', position: i + 1, name: item.label, item: absolute(item.path),
    })) });
  }
  if (record.person) {
    const { name, role, bio } = record.person;
    page.mainEntity = ref(url + '#person');
    graph.push({ ...page.mainEntity, '@type': 'Person', name, jobTitle: role, description: bio, image, url, affiliation: ref(org) });
  }
  if (record.pillar) {
    const product = record.pillar.kind === 'product';
    page.mainEntity = ref(url + (product ? '#product' : '#service'));
    graph.push({ ...page.mainEntity, '@type': product ? 'Product' : 'Service', name: record.pillar.name,
      url, description, [product ? 'brand' : 'provider']: ref(org) });
  }
  if (record.path === '/it-solutions') {
    graph.push({ '@type': 'FAQPage', '@id': url + '#questions', isPartOf: ref(page['@id']),
      mainEntity: serviceQuestions.map(({question, answer}) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  }
  tags.push(['script', { type: 'application/ld+json' }, JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')]);
  return tags;
}

