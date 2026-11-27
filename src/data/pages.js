import { leadership } from './team';
import { brands } from './brands';
import { PILLARS } from './pillars';

export const origin = 'https://nexusdig.in';
export const organizationDescription = 'Nexus builds and maintains software for businesses and operates NexLock and NexWarranty.';
const page = (path, label, description, view, extra = {}) => ({ path, label, description, view, ...extra });

export const pages = [
  page('/', 'Nexus | IT Solutions, NexLock and NexWarranty', organizationDescription, 'Home'),
  page('/about', 'About Nexus', 'Meet the industry operators and engineers behind Nexus IT Solutions, NexLock and NexWarranty.', 'About', { type: 'AboutPage' }),
  page('/team', 'Nexus team directory', 'Explore the roles and biographies of the people behind Nexus.', 'Team', { type: 'CollectionPage' }),
  ...leadership.map(person => page(`/team/${person.slug}`, person.name, `${person.name}, ${person.role} at Nexus. ${person.bio}`, 'Team', { type: 'ProfilePage', person, image: person.photo, updatedAt: person.updatedAt, parent: '/team' })),
  page('/careers', 'Careers at Nexus', 'Explore Nexus job openings and find out how to apply by email.', 'Careers'),
  page('/contact', 'Contact Nexus', 'Contact the Nexus team about software projects, NexLock, NexWarranty and support.', 'Contact', { type: 'ContactPage' }),
  page('/collaborate', 'Partner with Nexus', 'Enquire about a software project, NexLock integration or a NexWarranty retail partnership.', 'Collaborate'),
  page('/brands', 'Nexus brand partners', 'Explore partnerships bringing Nexus products to retailers and customers.', 'Brands', { type: 'CollectionPage' }),
  ...brands.map(brand => page(`/brands/${brand.slug}`, `${brand.name} and ${brand.partner}`, brand.summary, 'Brand', { parent: '/brands', updatedAt: brand.updatedAt, brand })),
  ...PILLARS.map(pillar => page(pillar.to, pillar.name, pillar.summary, 'Pillar', { pillar, updatedAt: pillar.updatedAt })),
  ...PILLARS.filter(p => ['nexlock', 'nexwarranty'].includes(p.id)).flatMap(p => [
    page(p.to + '/privacy', p.name + ' Privacy Policy', `Read the privacy policy for ${p.name}, including data handling and contact information.`, p.id + '-privacy', { parent: p.to }),
    page(p.to + '/terms', p.name + ' Terms of Use', `Read the terms governing access to and use of ${p.name} ${p.id === 'nexlock' ? 'by finance agents, lenders and retailers' : 'and the Nexus Digital website'}.`, p.id + '-terms', { parent: p.to }),
  ]),
];

export const missing = page('/404', 'Page not found', 'Find your way back to the Nexus website.', 'Missing');
export const byPath = new Map(pages.map(record => [record.path, record]));
export const titleFor = record => /\bNexus\b/i.test(record.label) ? record.label : record.label + ' | Nexus';
export function breadcrumbs(record) {
  if (record === missing || record.path === '/') return [];
  return [{ path: '/', label: 'Home' }, ...(record.parent ? [byPath.get(record.parent)] : []), record];
}

