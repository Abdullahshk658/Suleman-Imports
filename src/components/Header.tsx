import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, User, Menu, X, Globe, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import { products } from '../data/mockData';
import { Product } from '../types';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#', hasMegaMenu: true },
    { name: 'Imported Premium', href: '/products?origin=international', highlight: true },
    { name: 'Local Heritage', href: '/products?origin=domestic', highlight: true },
    { name: 'Flash Sale', href: '/products?sale=true' },
  ];

  const handleSuggestionClick = (id: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSuggestions([]);
    navigate(`/product/${id}`);
  };

  return (
    <header 
      className="sticky top-0 z-50 glass-header"
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-onyx hover:text-primary-indigo transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter text-onyx uppercase">
              Suleman <span className="text-primary-indigo italic font-light lowercase font-serif border-l border-onyx/10 ml-3 pl-3">Import's</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12 items-center h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="h-full flex items-center group relative"
                onMouseEnter={() => link.hasMegaMenu && setIsMegaMenuOpen(true)}
              >
                <Link
                  to={link.href}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-primary-indigo flex items-center space-x-2 ${
                    link.highlight ? 'text-primary-indigo hover:text-onyx' : 'text-onyx/40'
                  }`}
                  onClick={(e) => link.hasMegaMenu && e.preventDefault()}
                >
                  <span>{link.name}</span>
                  {link.hasMegaMenu && <div className="w-1 h-1 bg-primary-indigo rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />}
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-indigo group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-onyx hover:text-primary-indigo transition-all transform hover:scale-110"
            >
              <Search size={18} />
            </button>
            <Link to="/account" className="text-onyx hover:text-primary-indigo transition-all transform hover:scale-110 hidden sm:block">
              <User size={18} />
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-onyx hover:text-primary-indigo transition-all relative transform hover:scale-110"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-indigo text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 shadow-xl z-50"
          >
            <div className="max-w-3xl mx-auto relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for brands, products (e.g. 'Polo', 'Ralph Lauren')..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black transition-all text-sm"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Predictive Suggestions */}
              <AnimatePresence>
                {suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="p-4 border-b border-gray-50">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Suggestions</p>
                    </div>
                    {suggestions.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSuggestionClick(p.id)}
                        className="w-full text-left p-4 hover:bg-gray-50 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <img src={p.image} className="w-10 h-10 rounded-lg object-cover" alt={p.name} referrerPolicy="no-referrer" />
                          <div>
                            <p className="text-sm font-bold text-gray-900 line-clamp-1">{p.name}</p>
                            <p className="text-xs text-gray-500">{p.brand} • {p.origin === 'international' ? 'Imported' : 'Local'}</p>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden bg-white"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold tracking-tighter">SULEMAN IMPORT'S</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-2xl font-bold tracking-tighter ${
                      link.highlight ? 'text-orange-600' : 'text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-10 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-gray-500 mb-6">
                  <Globe size={20} />
                  <span className="text-sm">International Shipping</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-500">
                  <MapPin size={20} />
                  <span className="text-sm">Track Order</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
