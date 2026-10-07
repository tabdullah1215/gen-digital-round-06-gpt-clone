import { formatPrice } from '@/lib/money';
import type { Product } from '@/lib/types';

export function Price({ product }: { product: Product }) {
  return (
    <div className="space-y-1">
      <p className="text-2xl font-semibold tracking-tight">{formatPrice(product.price)}</p>
      <p className="text-sm text-stone-600">One-time price</p>
    </div>
  );
}
