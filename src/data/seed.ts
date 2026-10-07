import type { CommerceProductList, ProductContent } from '@/lib/types';

/** Product order is chosen by merchandising, independently of price order. */
export const commerceProducts: CommerceProductList = [
  { id: 'alder-sideboard', brand: 'Cedar & Row', name: 'Alder Sideboard', category: 'Storage', price: '680.00', rating: 4.8 },
  { id: 'wren-dining-chair', brand: 'Cedar & Row', name: 'Wren Dining Chair', category: 'Seating', price: '220.00', rating: 4.6 },
  { id: 'mesa-linen-throw', brand: 'Morrow Studio', name: 'Mesa Linen Throw', category: 'Textiles', price: '84.00', rating: 4.7 },
  { id: 'solace-coffee-table', brand: 'Morrow Studio', name: 'Solace Coffee Table', category: 'Tables', price: '540.00', rating: 4.9 },
];

/** Editorial content is joined to commerce by productId. */
export const productContent: ProductContent[] = [
  {
    productId: 'alder-sideboard',
    slug: 'alder-sideboard',
    description: 'A low, warm-grain sideboard for the dining room, entryway, or anywhere that needs calm storage.',
    features: ['Soft-close drawers', 'Solid oak pulls', 'Cable management'],
    accent: '#d9e9e5',
  },
  {
    productId: 'wren-dining-chair',
    slug: 'wren-dining-chair',
    description: 'A shaped dining chair with a relaxed profile for long meals and everyday use.',
    features: ['Hand-finished ash frame', 'Woven seat', 'Stackable design'],
    accent: '#dae1f0',
  },
  {
    productId: 'mesa-linen-throw',
    slug: 'mesa-linen-throw',
    description: 'A washed linen throw that adds texture to a sofa, guest room, or slow Sunday morning.',
    features: ['European flax linen', 'Fringed edge', 'Machine washable'],
    accent: '#eee4d7',
  },
  {
    productId: 'solace-coffee-table',
    slug: 'solace-coffee-table',
    description: 'A quiet coffee table with a rounded silhouette and enough presence for the center of the room.',
    features: ['Travertine top', 'Rounded edge', 'Hidden levelers'],
    accent: '#e9dfee',
  },
];
