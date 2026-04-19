import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../CartContext';
import { Skeleton } from '../components/Skeleton';
import SizeChartModal from '../components/SizeChartModal';
import { Star, Globe, Home, ShieldCheck, Truck, RotateCcw, ShoppingBag, Heart, Share2, Plus, Minus, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(products.find(p => p.id === id));
  const [mainImage, setMainImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
    setMainImage(foundProduct?.image);
    setSelectedSize(foundProduct?.sizes[0]);
    setSelectedColor(foundProduct?.colors[0]);
    setQuantity(1);
    
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (!product && !loading) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-black">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-black line-clamp-1">{product?.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* Gallery Section */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 relative group">
              {loading ? (
                <Skeleton className="w-full h-full" />
              ) : (
                <>
                  <motion.img
                    key={mainImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={mainImage}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {product?.isFlashSale && (
                    <div className="absolute top-8 left-8 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl">
                      Flash Sale
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {loading ? (
                [...Array(4)].map((_, i) => <Skeleton key={i} className="aspect-square rounded-2xl" />)
              ) : (
                product?.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      mainImage === img ? 'border-black scale-95' : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} referrerPolicy="no-referrer" />
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            {loading ? (
              <div className="space-y-6">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-32 w-full mt-10" />
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    {product?.origin === 'international' ? (
                      <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center space-x-2">
                        <Globe size={12} />
                        <span>Imported Premium</span>
                      </span>
                    ) : (
                      <span className="bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center space-x-2">
                        <Home size={12} />
                        <span>Local Heritage</span>
                      </span>
                    )}
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{product?.brand}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 leading-[1.1]">{product?.name}</h1>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-1 text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(product!.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                      {product?.reviews} REVIEWS
                    </span>
                  </div>

                  <div className="flex items-baseline space-x-4">
                    <span className="text-4xl font-bold text-black font-mono">${product?.price}</span>
                    {product?.originalPrice && (
                      <span className="text-xl text-gray-400 line-through font-mono">${product?.originalPrice}</span>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 text-base leading-relaxed mb-10 border-t border-gray-100 pt-8">
                  {product?.description}
                </p>

                {/* Selection Options */}
                <div className="space-y-10 mb-12">
                  {/* Sizes */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Select Size</label>
                      <button 
                        onClick={() => setIsSizeChartOpen(true)}
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 hover:text-black border-b border-orange-600 transition-colors"
                      >
                        Size Guide
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {product?.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-14 h-14 rounded-2xl border-2 text-sm font-bold transition-all flex items-center justify-center ${
                            selectedSize === size 
                              ? 'border-black bg-black text-white' 
                              : 'border-gray-100 hover:border-gray-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 block mb-4">Select Color</label>
                    <div className="flex flex-wrap gap-3">
                      {product?.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-6 py-3 rounded-2xl border-2 text-xs font-bold uppercase tracking-widest transition-all ${
                            selectedColor === color 
                              ? 'border-black bg-black text-white' 
                              : 'border-gray-100 hover:border-gray-300'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center justify-between border-2 border-gray-100 rounded-2xl p-2 sm:w-40">
                      <button 
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="p-3 hover:text-orange-600 transition-colors"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="text-lg font-bold w-10 text-center font-mono">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(q => q + 1)}
                        className="p-3 hover:text-orange-600 transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <button 
                      onClick={() => addToCart(product!, selectedSize!, selectedColor!)}
                      className="flex-grow bg-black text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-black/10 flex items-center justify-center space-x-3 group"
                    >
                      <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                      <span>Add to Shopping Bag</span>
                    </button>
                    <button className="p-5 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                      <Heart size={20} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Additional Perks */}
                <div className="grid grid-cols-2 gap-4 py-8 border-t border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-xl text-black">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-widest">Guaranteed</p>
                      <p className="text-[10px] text-gray-500 leading-tight">100% Original Products Sourced Directly.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-50 rounded-xl text-black">
                      <Truck size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-widest">Express</p>
                      <p className="text-[10px] text-gray-500 leading-tight">Shipping available international & local.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {!loading && relatedProducts.length > 0 && (
          <div className="mt-40">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-2 uppercase">YOU MAY ALSO LIKE</h2>
                <p className="text-gray-500 text-sm">Specially curated for your taste</p>
              </div>
              <Link to="/products" className="text-xs font-bold uppercase tracking-widest hover:text-orange-600 border-b border-black hover:border-orange-600 pb-1 transition-all">
                See collection
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <SizeChartModal 
        isOpen={isSizeChartOpen} 
        onClose={() => setIsSizeChartOpen(false)} 
        category={product?.category || ''} 
      />
    </div>
  );
}
