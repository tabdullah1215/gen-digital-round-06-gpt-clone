import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Price } from './Price';

export function ProductView({ product }: { product: Product }) {
  return (
    <article className="grid gap-10 lg:grid-cols-[1fr_22rem]">
      <section aria-labelledby="product-title" className="space-y-7">
        <header>
          <p className="text-sm uppercase tracking-wide text-stone-500">{product.brand}</p>
          <h1 id="product-title" className="mt-2 text-3xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-4 max-w-xl leading-7 text-stone-600">{product.description}</p>
        </header>
        <div className="rounded-xl p-5" style={{ backgroundColor: product.accent }}>
          <h2 className="font-medium">Made for the home</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {product.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
          </ul>
        </div>
        <Link href="/" className="text-sm font-medium text-stone-700 underline">Back to all products</Link>
      </section>
      <aside className="self-start rounded-xl border border-stone-200 bg-stone-50 p-6">
        <p className="text-sm text-stone-500">{product.category} · {product.rating} / 5 rating</p>
        <div className="mt-4"><Price product={product} /></div>
        <button type="button" className="mt-6 w-full rounded-lg bg-stone-900 px-4 py-3 text-sm font-medium text-white">Add to room list</button>
      </aside>
    </article>
  );
}
