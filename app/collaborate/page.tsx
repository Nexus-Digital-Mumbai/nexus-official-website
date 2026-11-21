import type { Metadata } from 'next';
import CollaborateClientView from './CollaborateClientView';

export const metadata: Metadata = {
  title: 'Partner & Collaborate — B2B Alliances',
  description:
    'Work with Nexus on a software project, bring NexLock to your device-finance business, or offer NexWarranty to your customers.',
  alternates: {
    canonical: '/collaborate',
  },
  openGraph: {
    title: 'Collaborate with Nexus Digital Services',
    description:
      'Work with Nexus on a software project, bring NexLock to your device-finance business, or offer NexWarranty to your customers.',
    url: 'https://nexusdig.in/collaborate',
  },
};

export default function CollaboratePage() {
  return <CollaborateClientView />;
}
