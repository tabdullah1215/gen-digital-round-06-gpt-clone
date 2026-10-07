import { describe, expect, it } from 'vitest';
import { commerceProducts, productContent } from '@/data/seed';
import { toProduct } from '@/data/storefront';
import { leadProduct, productForSlug } from './catalog';
import { formatPrice, toCents } from './money';

const products = commerceProducts.map((commerce, index) => toProduct(commerce, productContent[index]));

describe('commerce mapping and money', () => {
  it('joins commerce and editorial content without exposing the feed shape', () => {
    expect(products[0]).toMatchObject({ slug: 'alder-sideboard', name: 'Alder Sideboard', price: 68000 });
    expect(products[0].features).toEqual(productContent[0].features);
    expect(products[0].features).not.toBe(productContent[0].features);
  });

  it('rejects a mismatched join', () => {
    expect(() => toProduct(commerceProducts[0], productContent[1])).toThrow('Mismatched');
  });

  it('converts decimal amounts and formats cents', () => {
    expect(toCents('129.00')).toBe(12900);
    expect(toCents('0.00')).toBe(0);
    expect(formatPrice(5499)).toBe('$54.99');
  });

  it('rejects malformed and unsafe commerce amounts', () => {
    for (const value of ['29.9', 'hello', '-1.00', '9007199254740992.00']) {
      expect(() => toCents(value)).toThrow();
    }
  });
});

describe('catalogue selection', () => {
  it('keeps the merchandising order for the lead product', () => {
    expect(leadProduct(products).slug).toBe('alder-sideboard');
  });

  it('returns a product for a known slug and undefined otherwise', () => {
    expect(productForSlug(products, 'wren-dining-chair')?.name).toBe('Wren Dining Chair');
    expect(productForSlug(products, 'missing')).toBeUndefined();
  });
});
