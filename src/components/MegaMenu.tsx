import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Package, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const columns = [
    {
      title: 'Shop by Category',
      items: [
        { name: 'Formal', href: '/products?category=Formal' },
        { name: 'Slip-On', href: '/products?category=Slip-On' },
        { name: 'Runner', href: '/products?category=Runner' },
        { name: 'Sneaker', href: '/products?category=Sneaker' },
        { name: 'Warehouse', href: '/products?category=Warehouse' },
      ],
    },
    {
      title: 'Shop by Brand',
      items: [
        { name: 'StreetForm', href: '/products?brand=StreetForm' },
        { name: 'MotionLab', href: '/products?brand=MotionLab' },
        { name: 'CourtLine', href: '/products?brand=CourtLine' },
        { name: 'Suleman Classics', href: '/products?brand=Suleman%20Classics' },
        { name: 'Warehouse Picks', href: '/products?brand=Warehouse%20Picks' },
      ],
    },
    {
      title: 'Imported Hub',
      icon: <Globe className="text-black" size={16} />,
      items: [
        { name: 'Studio Sneaker Drops', href: '/products?origin=international' },
        { name: 'Runner Capsule', href: '/products?category=Runner&origin=international' },
        { name: 'Court Styles', href: '/products?brand=CourtLine' },
        { name: 'View Imported', href: '/products?origin=international', bold: true },
      ],
    },
    {
      title: 'Local Stock',
      icon: <Package className="text-orange-600" size={16} />,
      items: [
        { name: 'Raw Angle Listings', href: '/products?origin=domestic' },
        { name: 'Warehouse Lots', href: '/products?category=Warehouse' },
        { name: 'Comfort Slip-Ons', href: '/products?category=Slip-On&origin=domestic' },
        { name: 'View Local', href: '/products?origin=domestic', bold: true },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      transition={{ duration: 0.2 }}
      className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl z-50 overflow-hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-4 gap-12">
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center space-x-2">
                {col.icon}
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{col.title}</h4>
              </div>
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`text-sm tracking-tight transition-colors flex items-center group ${
                        item.bold ? 'font-bold text-black border-t border-gray-50 pt-4 mt-2' : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.bold && <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-3xl flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-bold text-black">WEEKEND FLASH SALE</p>
              <p className="text-xs text-gray-500">Featured runners, loafers, and sneaker stacks from the refreshed uploaded catalog.</p>
            </div>
          </div>
          <Link
            to="/products?sale=true"
            onClick={onClose}
            className="text-xs font-bold uppercase tracking-widest text-black hover:text-orange-600 transition-colors"
          >
            Shop the Sale
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
