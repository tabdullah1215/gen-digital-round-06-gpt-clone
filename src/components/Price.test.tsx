import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { commerceProducts, productContent } from '@/data/seed';
import { toProduct } from '@/data/storefront';
import { ProductCard } from './ProductCard';
import { Price } from './Price';

const product = toProduct(commerceProducts[0], productContent[0]);

describe('price and catalogue cards', () => {
  it('shows a formatted one-time price', () => {
    render(<Price product={product} />);
    expect(screen.getByText('$680.00')).toBeInTheDocument();
    expect(screen.getByText('One-time price')).toBeInTheDocument();
  });

  it('uses the product identity and keeps its page link', () => {
    render(<ProductCard product={product} />);
    const card = within(screen.getByRole('article', { name: 'Alder Sideboard' }));
    expect(card.getByText('Cedar & Row')).toBeInTheDocument();
    expect(card.getByRole('link', { name: 'View Alder Sideboard' })).toHaveAttribute('href', '/products/alder-sideboard');
  });

  it('renders the rating as accessible text', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByLabelText('4.8 out of 5 stars')).toBeInTheDocument();
  });
});
