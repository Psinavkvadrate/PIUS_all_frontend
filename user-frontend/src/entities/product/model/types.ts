export type ProductCategory =
  | "electronics"
  | "clothing"
  | "food"
  | "home"
  | "beauty"
  | "sports"
  | "books"
  | "other";

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  available: number;
  category: ProductCategory;
  description?: string;
}