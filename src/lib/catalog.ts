import type { Product } from './types';

/** Commerce order is the merchandising order shown in the catalogue. */
export function leadProduct(products: Product[]): Product {
  return products[0];
}

export function productForSlug(products: Product[], slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
