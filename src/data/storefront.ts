import { cache } from 'react';
import { toCents } from '@/lib/money';
import type { CommerceProduct, Product, ProductContent } from '@/lib/types';
import { commerceProducts, productContent } from './seed';

/** Normalizes the commerce/CMS join into the model used by every storefront view. */
export function toProduct(commerce: CommerceProduct, content: ProductContent): Product {
  if (commerce.id !== content.productId) throw new Error('Mismatched product content');
  return {
    slug: content.slug,
    name: commerce.name,
    brand: commerce.brand,
    category: commerce.category,
    description: content.description,
    features: [...content.features],
    accent: content.accent,
    price: toCents(commerce.price),
    rating: commerce.rating,
  };
}

async function readCatalogue(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 60));
  return commerceProducts.flatMap((commerce) => {
    const content = productContent.find((entry) => entry.productId === commerce.id);
    return content ? [toProduct(commerce, content)] : [];
  });
}

export const getProducts = cache(readCatalogue);

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((product) => product.slug === slug);
}
