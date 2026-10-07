import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductView } from '@/components/ProductView';
import { getProduct } from '@/data/storefront';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct((await params).slug);
  return { title: product ? product.name : 'Product not found' };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct((await params).slug);
  if (!product) notFound();
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
        <Link href="/" className="hover:underline">All pieces</Link> / {product.name}
      </nav>
      <ProductView product={product} />
    </>
  );
}
