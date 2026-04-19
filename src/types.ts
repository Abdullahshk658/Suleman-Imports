export type OriginType = 'international' | 'domestic';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  origin: OriginType;
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  isFlashSale?: boolean;
  sizes: string[];
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
