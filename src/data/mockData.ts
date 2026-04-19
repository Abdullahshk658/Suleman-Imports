import { Product } from '../types';

export const products: Product[] = [
  // --- INTERNATIONAL (10) ---
  {
    id: '1',
    name: 'Premium Leather Oxford Shoes',
    price: 120,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    origin: 'international',
    brand: 'Ralph Lauren',
    rating: 4.8,
    reviews: 124,
    description: 'Handcrafted premium leather oxfords imported from the UK. Perfect for formal occasions.',
    isFlashSale: true,
    sizes: ['8', '9', '10', '11'],
    colors: ['Brown', 'Black']
  },
  {
    id: '3',
    name: 'Silk Evening Gown',
    price: 450,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595777434624-997c55071191?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Women',
    origin: 'international',
    brand: 'Gucci',
    rating: 4.9,
    reviews: 45,
    description: 'Exquisite silk evening gown imported from Italy. A masterpiece of design.',
    sizes: ['XS', 'S', 'M'],
    colors: ['Emerald', 'Midnight Blue']
  },
  {
    id: '5',
    name: 'Smart Noise Cancelling Headphones',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Electronics',
    origin: 'international',
    brand: 'Sony',
    rating: 4.7,
    reviews: 560,
    description: 'Industry-leading noise cancellation. Imported premium tech.',
    sizes: ['Standard'],
    colors: ['Silver', 'Black']
  },
  {
    id: '7',
    name: 'Kids Luxury Winter Parka',
    price: 150,
    originalPrice: 210,
    image: 'https://images.unsplash.com/photo-1519457431-7e51cce07212?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1519457431-7e51cce07212?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Kids',
    origin: 'international',
    brand: 'Canada Goose',
    rating: 4.9,
    reviews: 34,
    description: 'Highly durable and warm winter parka for kids, imported from Canada.',
    sizes: ['XS', 'S', 'M'],
    colors: ['Red', 'Navy']
  },
  {
    id: '8',
    name: 'Modular Coffee Table',
    price: 320,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Home',
    origin: 'international',
    brand: 'IKEA Premium',
    rating: 4.6,
    reviews: 112,
    description: 'Scandinavian design modular coffee table, imported from Sweden.',
    sizes: ['Medium', 'Large'],
    colors: ['Oak', 'White']
  },
  {
    id: '9',
    name: 'Ultralight Running Shoes',
    price: 160,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    origin: 'international',
    brand: 'Nike Premium',
    rating: 4.8,
    reviews: 890,
    description: 'Elite performance running shoes, imported from USA.',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Red', 'Volt']
  },
  {
    id: '10',
    name: 'Smart Mirror 4K',
    price: 899,
    image: 'https://images.unsplash.com/photo-1616489953149-808605d84196?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1616489953149-808605d84196?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Electronics',
    origin: 'international',
    brand: 'TechStyle',
    rating: 4.5,
    reviews: 12,
    description: 'Futuristic smart mirror with embedded 4K display, imported from UAE.',
    sizes: ['32 inch', '42 inch'],
    colors: ['Chrome', 'Black']
  },
  {
    id: '11',
    name: 'Linen Summer Wrap Dress',
    price: 85,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Women',
    origin: 'international',
    brand: 'Zara Intl',
    rating: 4.4,
    reviews: 67,
    description: 'Breathable linen wrap dress, imported from Spain.',
    sizes: ['S', 'M', 'L'],
    colors: ['Beige', 'Sage']
  },
  {
    id: '12',
    name: 'Professional Espresso Machine',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Home',
    origin: 'international',
    brand: 'Breville',
    rating: 4.9,
    reviews: 245,
    description: 'Barista-quality espresso at home, imported from Australia.',
    sizes: ['Compact', 'Standard'],
    colors: ['Steel', 'Black']
  },
  {
    id: '13',
    name: 'Toddler Ergonomic Sneaker',
    price: 55,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Kids',
    origin: 'international',
    brand: 'New Balance Kids',
    rating: 4.7,
    reviews: 43,
    description: 'Premium toddler sneakers with extra support, imported from USA.',
    sizes: ['4C', '5C', '6C'],
    colors: ['Blue', 'Pink']
  },

  // --- DOMESTIC (10) ---
  {
    id: '2',
    name: 'Heritage Cotton Polo Shirt',
    price: 25,
    originalPrice: 35,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    origin: 'domestic',
    brand: 'Polo Republica',
    rating: 4.5,
    reviews: 89,
    description: 'High-quality local heritage cotton polo. Sourced directly from domestic factories.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'White', 'Grey']
  },
  {
    id: '4',
    name: 'Classic Denim Jacket',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1576905341939-422aa497585f?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1576905341939-422aa497585f?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    origin: 'domestic',
    brand: 'Local Overrun',
    rating: 4.2,
    reviews: 210,
    description: 'Authentic factory overrun denim jacket. Durable and stylish.',
    isFlashSale: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Blue', 'Black']
  },
  {
    id: '6',
    name: 'Artisanal Ceramic Vase',
    price: 35,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Home',
    origin: 'domestic',
    brand: 'Heritage Home',
    rating: 4.6,
    reviews: 32,
    description: 'Hand-painted ceramic vase by local artisans.',
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Terracotta', 'Cream']
  },
  {
    id: '14',
    name: 'Local Silk Kurta Pak',
    price: 65,
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    origin: 'domestic',
    brand: 'Junaid Jamshed',
    rating: 4.8,
    reviews: 156,
    description: 'Premium silk kurta, authentic Pakistani heritage.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Off-White', 'Black']
  },
  {
    id: '15',
    name: 'Factory Leftover Sweatpants',
    price: 15,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810abb1?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810abb1?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    origin: 'domestic',
    brand: 'Overrun Co',
    rating: 4.1,
    reviews: 540,
    description: 'Ultra-comfortable sweatpants from factory overruns.',
    isFlashSale: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Grey', 'Navy']
  },
  {
    id: '16',
    name: 'Home Grown Bamboo Towels',
    price: 20,
    image: 'https://images.unsplash.com/photo-1521449298711-821bb54af124?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1521449298711-821bb54af124?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Home',
    origin: 'domestic',
    brand: 'GreenPak',
    rating: 4.4,
    reviews: 88,
    description: 'Sustainable bamboo fiber towels, locally produced.',
    sizes: ['Standard'],
    colors: ['White', 'Sage']
  },
  {
    id: '17',
    name: 'Kids Cotton T-Shirt Set',
    price: 12,
    image: 'https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Kids',
    origin: 'domestic',
    brand: 'Heritage Kids',
    rating: 4.3,
    reviews: 124,
    description: 'Soft cotton T-shirts for kids, factory surplus prices.',
    sizes: ['2T', '3T', '4T'],
    colors: ['Multi']
  },
  {
    id: '18',
    name: 'Hand-Woven Rug',
    price: 180,
    image: 'https://images.unsplash.com/photo-1534889156217-d3c8ef4caac2?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1534889156217-d3c8ef4caac2?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Home',
    origin: 'domestic',
    brand: 'Heritage Rugs',
    rating: 4.9,
    reviews: 21,
    description: 'Authentic hand-woven rug from local artisans.',
    sizes: ['4x6 ft', '5x8 ft'],
    colors: ['Red/Blue Pattern']
  },
  {
    id: '19',
    name: 'Local Power Bank 20k',
    price: 30,
    image: 'https://images.unsplash.com/photo-1609091839311-d536819bc148?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1609091839311-d536819bc148?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Electronics',
    origin: 'domestic',
    brand: 'VoltPak',
    rating: 4.2,
    reviews: 320,
    description: 'High-capacity 20,000mAh power bank, locally assembled.',
    sizes: ['Standard'],
    colors: ['Black']
  },
  {
    id: '20',
    name: 'Heritage Silk Scarf',
    price: 40,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Women',
    origin: 'domestic',
    brand: 'Heritage Silk',
    rating: 4.7,
    reviews: 45,
    description: 'Beautifully patterned silk scarf, locally crafted.',
    sizes: ['Standard'],
    colors: ['Multicolor']
  }
];
