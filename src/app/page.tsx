import type { Metadata } from 'next';
import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/data/storefront';

export const metadata: Metadata = { title: 'Home goods | Hearth & Field' };

export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <header className="mb-9 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-500">Cedar &amp; Row &amp; Morrow Studio</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Find the piece that fits the room</h1>
        <p className="mt-4 leading-7 text-stone-600">Explore furniture and textiles from two considered home brands.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </>
  );
}
