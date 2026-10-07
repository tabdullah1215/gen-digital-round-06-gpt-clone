import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Price } from './Price';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article aria-labelledby={`title-${product.slug}`} className="flex h-full flex-col rounded-xl border border-stone-200 bg-white p-6">
      <div className="mb-5 flex items-center justify-between rounded-lg p-4" style={{ backgroundColor: product.accent }}>
        <span className="text-sm font-medium">{product.category}</span>
        <span aria-hidden="true" className="text-2xl">{product.name.charAt(0)}</span>
      </div>
      <p className="text-xs uppercase tracking-wide text-stone-500">{product.brand}</p>
      <h2 id={`title-${product.slug}`} className="mt-1 text-xl font-semibold">{product.name}</h2>
      <p className="mt-3 text-sm leading-6 text-stone-600">{product.description}</p>
      <ul className="my-5 space-y-2 text-sm">
        {product.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
      </ul>
      <div className="mt-auto border-t border-stone-100 pt-5">
        <div className="flex items-end justify-between gap-3">
          <Price product={product} />
          <span className="text-sm text-stone-600" aria-label={`${product.rating} out of 5 stars`}>★ {product.rating}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="mt-5 block rounded-lg bg-stone-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-stone-700">
          View {product.name}
        </Link>
      </div>
    </article>
  );
}
