import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[210] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <ShoppingBag size={24} />
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>
                <h2 className="text-xl font-bold tracking-tighter uppercase">Your Shopping Bag</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-3 hover:bg-gray-100 rounded-2xl transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                    <ShoppingBag size={48} />
                  </div>
                  <div>
                    <p className="text-lg font-bold tracking-tight mb-2">YOUR BAG IS EMPTY</p>
                    <p className="text-sm text-gray-500 max-w-xs">Looks like you haven't added any of our premium imports or heritage pieces yet.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-6 group">
                    <div className="w-28 h-36 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute top-2 left-2">
                        {item.origin === 'international' ? (
                          <div className="bg-black text-white p-1 rounded-full shadow-lg">
                            <Globe size={10} />
                          </div>
                        ) : (
                          <div className="bg-orange-600 text-white p-1 rounded-full shadow-lg">
                            <HomeIcon size={10} />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col pt-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-bold text-gray-900 leading-tight pr-4 line-clamp-2">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors p-1">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-auto">
                        Size: {item.selectedSize} / {item.selectedColor}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:text-orange-600 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold font-mono">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:text-orange-600 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-sm font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-gray-100 bg-gray-50/50 space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Subtotal</span>
                    <span className="text-2xl font-bold font-mono">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-[10px] items-center flex space-x-1 uppercase tracking-widest">
                      <Truck size={14} className="mr-2" />
                      <span>Estimated Shipping</span>
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Calculated at next step</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-6 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-black/10 flex items-center justify-center space-x-3 group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] text-center font-bold">
                  Secure checkout powered by Shopify Plus
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper for local icon
import { Home as HomeIcon, ArrowRight, Truck, Globe } from 'lucide-react';
