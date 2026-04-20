import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold tracking-tighter">
                SULEMAN <span className="text-gray-500 font-light italic">IMPORT'S</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your refreshed footwear storefront built from the uploaded catalog, mixing local stock angles with imported studio drops.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="lg:pl-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/products?category=Sneaker" className="hover:text-white transition-colors">Sneaker Stacks</Link></li>
              <li><Link to="/products?category=Runner" className="hover:text-white transition-colors">Runner Drops</Link></li>
              <li><Link to="/products?origin=international" className="hover:text-white transition-colors">Imported Drops</Link></li>
              <li><Link to="/products?origin=domestic" className="hover:text-white transition-colors">Local Stock</Link></li>
              <li><Link to="/products?sale=true" className="hover:text-white transition-colors text-orange-600">Flash Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-white/40">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">7-Day Returns</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Newsletter</h4>
            <p className="text-gray-400 text-sm">Subscribe to get special offers and first look at new arrivals.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-orange-600/50 transition-all outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2.5 rounded-xl hover:bg-orange-600 hover:text-white transition-all transform active:scale-95 shadow-xl">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              (C) 2026 SULEMAN IMPORT'S. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center space-x-6 text-[9px] text-gray-600 font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-white">Privacy Policy</Link>
              <Link to="/" className="hover:text-white">Terms of Service</Link>
              <Link to="/" className="hover:text-white">Cookies</Link>
            </div>
          </div>
          <div className="flex items-center space-x-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <span className="text-[10px] font-bold">JAZZCASH</span>
            <span className="text-[10px] font-bold">EASYPAISA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

