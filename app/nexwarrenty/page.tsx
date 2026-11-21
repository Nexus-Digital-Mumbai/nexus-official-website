import type { Metadata } from 'next';
import NexwarrentyClientView from './NexwarrentyClientView';

export const metadata: Metadata = {
  title: 'NexWarranty — Electronics & Appliance Protection Plans',
  description:
    'Comprehensive extended warranty plans for home appliances and consumer electronics. 100% parts & labour covered, zero depreciation, and doorstep service.',
  alternates: {
    canonical: '/nexwarrenty',
  },
  openGraph: {
    title: 'NexWarranty — Comprehensive Extended Warranty',
    description:
      'Comprehensive extended warranty plans for home appliances and consumer electronics. 100% parts & labour covered, zero depreciation, and doorstep service.',
    url: 'https://nexusdig.in/nexwarrenty',
  },
};

export default function NexwarrentyPage() {
  return <NexwarrentyClientView />;
}
