import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, Globe, Home, X, Plus, Minus, Zap } from 'lucide-react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <Link to={`/product/${product.id}`} className="block group">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 rounded-[2.5rem]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Glassmorphic Badge System */}
            <div className="absolute top-6 left-6 space-y-2">
              {product.origin === 'international' ? (
                <div className="bg-primary-indigo/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center space-x-2 border border-white/20">
                  <Globe size={12} />
                  <span>Imported Hub</span>
                </div>
              ) : (
                <div className="bg-heritage-amber/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center space-x-2 border border-white/20">
                  <Zap size={12} fill="white" />
                  <span>Heritage Direct</span>
                </div>
              )}
              {product.isFlashSale && (
                <div className="bg-onyx/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                   <span>Flash Archvie</span>
                </div>
              )}
            </div>

            {/* Quick Actions Overlay */}
            <div className="absolute inset-0 bg-onyx/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-end p-8 pb-12">
               <div className="flex space-x-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                  <button 
                    onClick={handleAddToCart}
                    className="w-14 h-14 bg-white text-onyx rounded-full flex items-center justify-center hover:bg-primary-indigo hover:text-white transition-all shadow-2xl"
                  >
                    <Plus size={20} />
                  </button>
                  <button 
                    onClick={handleQuickView}
                    className="w-14 h-14 bg-white text-onyx rounded-full flex items-center justify-center hover:bg-primary-indigo hover:text-white transition-all shadow-2xl"
                  >
                    <Eye size={20} />
                  </button>
               </div>
            </div>
          </div>

          {/* Luxury Content Area */}
          <div className="pt-8 pb-4">
            <div className="flex justify-between items-start mb-4 px-2">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] font-mono">{product.brand}</p>
                <h3 className="text-xl font-bold text-onyx group-hover:text-primary-indigo transition-colors line-clamp-1 tracking-tight">
                  {product.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-black/5 pt-6 px-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl font-bold text-onyx font-mono tracking-tighter">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-300 line-through font-mono">${product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1.5 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                <Star size={12} className="text-heritage-amber" fill="currentColor" />
                <span className="text-[10px] font-black text-onyx">{product.rating}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Quick View Modal (Modernized) */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
              className="fixed inset-0 bg-onyx/80 backdrop-blur-xl z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-6xl md:h-auto max-h-[90vh] bg-white z-[110] rounded-[3rem] shadow-[0_100px_200px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-8 right-8 z-10 w-12 h-12 bg-onyx text-white rounded-full flex items-center justify-center hover:bg-primary-indigo transition-all shadow-xl"
              >
                <X size={20} />
              </button>

              {/* Image Gallery */}
              <div className="w-full md:w-[55%] bg-gray-50 relative group/img">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-10 left-10">
                   <span className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                      Preview Detail
                   </span>
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-[45%] p-12 md:p-16 overflow-y-auto bg-white flex flex-col">
                <div className="mb-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-black text-primary-indigo uppercase tracking-[0.4em] mb-1 block">{product.brand}</span>
                    <div className="h-[1px] flex-grow bg-black/5" />
                  </div>
                  <h2 className="text-5xl font-bold tracking-tighter uppercase leading-none">{product.name}</h2>
                  
                  <div className="flex items-baseline space-x-6">
                    <span className="text-5xl font-bold text-onyx font-mono tracking-tighter">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-2xl text-gray-300 line-through font-mono tracking-tighter">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="divider-hairline mb-10" />

                <p className="text-gray-400 text-lg leading-relaxed mb-12 font-medium">
                  {product.description}
                </p>

                {/* Options */}
                <div className="space-y-10 mb-auto">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Available Sizes</label>
                      <button className="text-[10px] font-bold text-onyx underline underline-offset-4 uppercase tracking-widest opacity-40">Size Guide</button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[56px] h-14 rounded-2xl border-2 text-xs font-black transition-all duration-300 ${
                            selectedSize === size 
                              ? 'border-onyx bg-onyx text-white shadow-xl shadow-black/20' 
                              : 'border-gray-100 hover:border-onyx text-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <button 
                    onClick={() => {
                      addToCart(product, selectedSize, selectedColor);
                      setIsQuickViewOpen(false);
                    }}
                    className="w-full btn-premium btn-primary py-6"
                  >
                    <Plus size={20} />
                    <span>Secure Item in Bag</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
