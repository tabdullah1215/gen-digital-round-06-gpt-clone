/** Amount in integer cents, USD. */
export type Money = number;

export type Brand = 'Cedar & Row' | 'Morrow Studio';

export type ProductCategory = 'Seating' | 'Storage' | 'Textiles' | 'Tables';

export type Product = {
  slug: string;
  brand: Brand;
  name: string;
  category: ProductCategory;
  description: string;
  features: string[];
  accent: string;
  price: Money;
  rating: number;
};

/** The commerce service uses decimal dollar strings, not storefront cents. */
export type CommerceProduct = {
  id: string;
  brand: Brand;
  name: string;
  category: ProductCategory;
  price: string;
  rating: number;
};

export type CommerceProductList = CommerceProduct[];

export type ProductContent = {
  productId: string;
  slug: string;
  description: string;
  features: string[];
  accent: string;
};
