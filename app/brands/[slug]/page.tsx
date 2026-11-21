import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brands, brandBySlug } from '../../../data/brands';
import BrandClientView from './BrandClientView';

export async function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandBySlug(slug);

  if (!brand) {
    return {
      title: 'Brand Not Found',
    };
  }

  return {
    title: `${brand.name} × ${brand.partner}`,
    description: brand.summary,
    alternates: {
      canonical: `/brands/${brand.slug}`,
    },
    openGraph: {
      title: `${brand.partner} × ${brand.name} — Nexus Brand Partner`,
      description: brand.summary,
      url: `https://nexusdig.in/brands/${brand.slug}`,
      images: [
        {
          url: brand.logo,
          alt: brand.name,
        },
      ],
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return <BrandClientView brand={brand} />;
}
