import type { Metadata } from 'next';
import ITSolutionsClientView from './ITSolutionsClientView';

export const metadata: Metadata = {
  title: 'IT Solutions — Web, Mobile, Custom Software & Maintenance',
  description:
    'Dedicated engineering teams building and maintaining modern websites, mobile apps, enterprise CRMs, and custom software for high-growth businesses.',
  alternates: {
    canonical: '/it-solutions',
  },
  openGraph: {
    title: 'Nexus IT Solutions — Engineering & Software Maintenance',
    description:
      'Dedicated engineering teams building and maintaining modern websites, mobile apps, enterprise CRMs, and custom software for high-growth businesses.',
    url: 'https://nexusdig.in/it-solutions',
  },
};

export default function ITSolutionsPage() {
  return <ITSolutionsClientView />;
}
