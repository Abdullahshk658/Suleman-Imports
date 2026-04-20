import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, storeCategories } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { ProductCardSkeleton } from '../components/Skeleton';
import { Filter, SlidersHorizontal, ChevronDown, LayoutGrid, List } from 'lucide-react';

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const [priceRange, setPriceRange] = useState(2000);
  const [sortBy, setSortBy] = useState('newest');

  const categoryFilter = searchParams.get('category');
  const originFilter = searchParams.get('origin');
  const brandFilter = searchParams.get('brand');
  const saleFilter = searchParams.get('sale');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [categoryFilter, originFilter, brandFilter, saleFilter]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = !categoryFilter || p.category === categoryFilter;
        const matchesOrigin = !originFilter || p.origin === originFilter;
        const matchesBrand = !brandFilter || p.brand === brandFilter;
        const matchesSale = !saleFilter || p.isFlashSale;
        const matchesPrice = p.price <= priceRange;

        return matchesCategory && matchesOrigin && matchesBrand && matchesSale && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [categoryFilter, originFilter, brandFilter, saleFilter, priceRange, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 border-b border-gray-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            {categoryFilter
              ? categoryFilter.toUpperCase()
              : originFilter === 'international'
                ? 'IMPORTED DROPS'
                : originFilter === 'domestic'
                  ? 'LOCAL STOCK'
                  : 'ALL FOOTWEAR'}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 uppercase tracking-widest font-bold">
            <span className="hover:text-black cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-black">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-64 space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center space-x-2">
                <SlidersHorizontal size={14} />
                <span>Filters</span>
              </h3>

              <div className="space-y-4 mb-10">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Origin</p>
                <div className="flex flex-col space-y-2">
                  {['all', 'international', 'domestic'].map((origin) => (
                    <button
                      key={origin}
                      onClick={() => {
                        if (origin === 'all') {
                          searchParams.delete('origin');
                        } else {
                          searchParams.set('origin', origin);
                        }
                        setSearchParams(searchParams);
                      }}
                      className={`text-sm text-left font-medium transition-colors ${
                        (origin === 'all' && !originFilter) || originFilter === origin ? 'text-black' : 'text-gray-400 hover:text-black'
                      }`}
                    >
                      {origin === 'all' ? 'All Origins' : origin === 'international' ? 'Imported Drops' : 'Local Stock'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price Range</p>
                  <span className="text-sm font-bold text-black">${priceRange}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black"
                />
                <div className="flex justify-between text-[10px] font-bold text-gray-300 uppercase">
                  <span>$0</span>
                  <span>$2000+</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-10 border-t border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Categories</p>
              <div className="flex flex-col space-y-2">
                {storeCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      searchParams.set('category', cat);
                      setSearchParams(searchParams);
                    }}
                    className={`text-sm text-left font-medium transition-colors ${
                      categoryFilter === cat ? 'text-black' : 'text-gray-400 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
              <p className="text-sm text-gray-400 font-medium">
                Showing {displayedProducts.length} of {filteredProducts.length} results
              </p>

              <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-2 border-r border-gray-100 pr-6 mr-6">
                  <button className="p-2 text-black hover:bg-gray-50 rounded-lg"><LayoutGrid size={16} /></button>
                  <button className="p-2 text-gray-300 hover:text-black hover:bg-gray-50 rounded-lg"><List size={16} /></button>
                </div>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest hover:text-orange-600 transition-colors">
                    <span>Sort By</span>
                    <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 hidden group-hover:block overflow-hidden">
                    {[
                      { id: 'newest', name: 'Newest First' },
                      { id: 'price-low', name: 'Price: Low to High' },
                      { id: 'price-high', name: 'Price: High to Low' },
                      { id: 'rating', name: 'Best Rating' },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`w-full text-left px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors ${
                          sortBy === option.id ? 'bg-gray-50 text-orange-600' : 'text-gray-600'
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => <ProductCardSkeleton key={i} />)}
              </div>
            ) : filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {displayedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>

                {visibleCount < filteredProducts.length && (
                  <div className="mt-20 text-center">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 8)}
                      className="bg-black text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-black/10"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="text-gray-300" size={32} />
                </div>
                <h3 className="text-xl font-bold tracking-tighter mb-2">NO PRODUCTS FOUND</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  We couldn't find any footwear listings matching your current filters. Try adjusting your price range or category.
                </p>
                <button
                  onClick={() => {
                    setSearchParams({});
                    setPriceRange(2000);
                  }}
                  className="mt-8 text-sm font-bold uppercase tracking-widest text-orange-600 hover:text-black border-b-2 border-orange-600 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
