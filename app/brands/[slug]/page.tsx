import { notFound } from 'next/navigation';
import { brandBySlug } from '../../../data/brands';
import BrandClientView from './BrandClientView';

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
