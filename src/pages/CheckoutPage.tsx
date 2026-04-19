import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import { ShieldCheck, Truck, ArrowLeft, ChevronRight, CreditCard, ShoppingBag, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState('Standard Shipping (3-5 Days) - $10.00');
  const [city, setCity] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const cityName = city.trim().toLowerCase();
    if (cityName.includes('karachi') || cityName.includes('lahore')) {
      setShippingMethod('Local Heritage Express (1-2 Days) - FREE');
    } else {
      setShippingMethod('National Priority (3-5 Days) - Calculated');
    }
  }, [city]);

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="text-gray-300" size={32} />
        </div>
        <h2 className="text-2xl font-bold tracking-tighter mb-4">Your bag is empty</h2>
        <Link to="/products" className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
          Shop our collection
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 text-green-600 shadow-xl shadow-green-100">
          <ShieldCheck size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">ORDER CONFIRMED</h1>
        <p className="text-gray-500 mb-10 max-w-sm">
          Thank you for shopping with SULEMAN IMPORT'S. We've sent your order confirmation and tracking details to your email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link to="/" className="flex-grow bg-black text-white px-8 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all">
            Return to Home
          </Link>
          <button className="flex-grow border-2 border-gray-100 px-8 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
            Track My Order
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-20">
        
        {/* Left Column: Form */}
        <div className="flex-grow">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-12">
            <Link to="/cart" className="hover:text-black">Cart</Link>
            <ChevronRight size={10} />
            <span className="text-black">Information</span>
            <ChevronRight size={10} />
            <span className="text-gray-300">Shipping</span>
            <ChevronRight size={10} />
            <span className="text-gray-300">Payment</span>
          </div>

          <form onSubmit={handlePlaceOrder} className="space-y-12">
            {/* Contact Info */}
            <section>
              <h2 className="text-xl font-bold tracking-tighter mb-6 uppercase flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-black text-white text-xs flex items-center justify-center">1</span>
                <span>Contact Information</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="email" 
                  placeholder="Email or Mobile Phone Number" 
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
                <div className="flex items-center space-x-2 px-2 mt-2">
                  <input type="checkbox" id="newsletter" className="rounded-sm checked:bg-black" />
                  <label htmlFor="newsletter" className="text-xs text-gray-500 font-medium">Keep me up to date on news and exclusive offers</label>
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-xl font-bold tracking-tighter mb-6 uppercase flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-black text-white text-xs flex items-center justify-center">2</span>
                <span>Shipping Address</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  required
                  className="col-span-1 md:col-span-2 w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="col-span-1 md:col-span-2 w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition-all text-sm"
                />
              </div>
            </section>

            {/* Shipping Method */}
            <section className="bg-gray-50 rounded-[2.5rem] p-10">
              <h2 className="text-xl font-bold tracking-tighter mb-6 uppercase flex items-center space-x-3">
                <Truck size={20} />
                <span>Shipping Method</span>
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-900">{shippingMethod}</span>
                <span className="text-xs font-bold text-gray-400">Calculated based on city</span>
              </div>
              {city.toLowerCase().includes('karachi') && (
                <p className="mt-4 text-[10px] text-orange-600 font-bold uppercase tracking-widest pl-2">
                  ✓ Exclusive Local Heritage Delivery Benefit Applied
                </p>
              )}
            </section>

            {/* Actions */}
            <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
              <Link to="/products" className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                <ArrowLeft size={16} />
                <span>Return to shopping</span>
              </Link>
              <button 
                type="submit"
                disabled={isProcessing}
                className="bg-black text-white px-12 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-black/10 flex items-center space-x-3"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    <span>Complete Purchase</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-[450px]">
          <div className="sticky top-32 bg-gray-50 rounded-[3rem] p-10 md:p-12">
            <h2 className="text-xl font-bold tracking-tighter mb-10 uppercase border-b border-gray-200 pb-6">Your Summary</h2>
            
            <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-6 relative group">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-2xl border border-gray-100"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-gray-900 mb-1 leading-tight">{item.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      Size: {item.selectedSize} / {item.selectedColor}
                    </p>
                  </div>
                  <p className="text-sm font-bold font-mono text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Coupon Code */}
            <div className="flex space-x-4 mb-10 pt-10 border-t border-gray-200">
              <input 
                type="text" 
                placeholder="Discount Code" 
                className="flex-grow px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-black outline-none text-sm"
              />
              <button className="bg-gray-200 text-gray-500 px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Apply
              </button>
            </div>

            <div className="space-y-4 pt-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium tracking-tight">Subtotal</span>
                <span className="font-bold font-mono">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium tracking-tight">Estimated Shipping</span>
                <span className="font-bold uppercase text-[10px] tracking-widest">
                    {city.toLowerCase().includes('karachi') || city.toLowerCase().includes('lahore') ? 'FREE' : '$10.00'}
                </span>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-lg font-bold tracking-tighter">TOTAL</span>
                <div className="text-right">
                  <p className="text-2xl font-bold font-mono">
                    ${(totalPrice + (city.toLowerCase().includes('karachi') || city.toLowerCase().includes('lahore') ? 0 : 10)).toFixed(2)}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Including Taxes</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-3xl border border-dashed border-gray-200 flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <CreditCard size={18} />
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                Secure 256-bit SSL encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
