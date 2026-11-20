/*
 * Brands Nexus partners with. Each entry gets its own page at /brands/<slug>
 * and appears in the navbar's Brands menu and on the /brands index.
 *
 *   slug:    URL segment
 *   name:    brand name as shown
 *   tagline: the brand's own tagline
 *   logo:    imported image path
 *   partner: which Nexus product the partnership is for
 *   summary: short description of the partnership
 *   stores:  optional list of branch photos (see trainingStores.js)
 */
import { trainingStores, TrainingStore } from './trainingStores';

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  partner: string;
  summary: string;
  stores?: TrainingStore[];
}

export const brands: Brand[] = [
  {
    slug: 'dev-marketing',
    name: 'Dev Marketing',
    tagline: 'redefining distribution',
    logo: '/assets/dev-marketing-logo.png',
    partner: 'NexLock',
    summary:
      'Nexus has collaborated with Dev Marketing to bring NexLock to retailers. NexLock training has been delivered to all of the Top 10 stores across Mumbai.',
    stores: trainingStores,
  },
];

export const brandBySlug = (slug: string): Brand | undefined => brands.find((b) => b.slug === slug);
