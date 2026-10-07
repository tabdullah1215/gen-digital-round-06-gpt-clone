import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { commerceProducts, productContent } from '@/data/seed';
import { toProduct } from '@/data/storefront';
import { ProductView } from './ProductView';

const product = toProduct(commerceProducts[1], productContent[1]);

describe('product page', () => {
  it('shows the product details and price', () => {
    render(<ProductView product={product} />);
    expect(screen.getByRole('heading', { name: 'Wren Dining Chair' })).toBeInTheDocument();
    expect(screen.getByText('$220.00')).toBeInTheDocument();
    expect(screen.getByText(/Woven seat/)).toBeInTheDocument();
  });

  it('keeps the trip-list action available without changing the product link contract', () => {
    render(<ProductView product={product} />);
    expect(screen.getByRole('button', { name: 'Add to room list' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to all products' })).toHaveAttribute('href', '/');
  });
});
