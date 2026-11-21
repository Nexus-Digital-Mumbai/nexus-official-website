import { MetadataRoute } from 'next';
import { brands } from '../data/brands';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexusdig.in';

  const routes = [
    '',
    '/it-solutions',
    '/nexlock',
    '/nexwarrenty',
    '/brands',
    '/about',
    '/careers',
    '/collaborate',
    '/contact',
    '/nexlock/privacy',
    '/nexlock/terms',
    '/nexwarrenty/privacy',
    '/nexwarrenty/terms',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route === '/it-solutions' || route === '/nexlock' || route === '/nexwarrenty') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.includes('privacy') || route.includes('terms')) {
      priority = 0.3;
      changeFrequency = 'yearly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  const brandEntries: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${baseUrl}/brands/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...brandEntries];
}
