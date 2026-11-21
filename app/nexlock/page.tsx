import type { Metadata } from 'next';
import NexlockClientView from './NexlockClientView';

export const metadata: Metadata = {
  title: 'NexLock — Device Security & EMI Enforcement Platform',
  description:
    'Hardware-level remote device locking, zero-touch QR onboarding, and tamper detection for consumer electronics retailers and consumer financiers.',
  alternates: {
    canonical: '/nexlock',
  },
  openGraph: {
    title: 'NexLock — EMI Security & Remote Device Lock',
    description:
      'Hardware-level remote device locking, zero-touch QR onboarding, and tamper detection for consumer electronics retailers and consumer financiers.',
    url: 'https://nexusdig.in/nexlock',
    images: [
      {
        url: '/nexlock-logo.png',
        width: 600,
        height: 600,
        alt: 'NexLock',
      },
    ],
  },
};

export default function NexlockPage() {
  return <NexlockClientView />;
}
