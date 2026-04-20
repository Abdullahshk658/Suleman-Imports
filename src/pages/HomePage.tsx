import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';
import { ArrowRight, Zap, Target, Globe, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'international' | 'domestic'>('all');

  const filteredProducts =
    activeTab === 'all' ? products.slice(0, 8) : products.filter((p) => p.origin === activeTab).slice(0, 8);

  const categories = [
    { name: 'Formal', image: '/catalog/IMG_20260131_165508_594.jpg', href: '/products?category=Formal' },
    { name: 'Sneaker', image: '/catalog/IMG-20260209-WA0044.jpg', href: '/products?category=Sneaker' },
    { name: 'Runner', image: '/catalog/IMG-20260209-WA0047.jpg', href: '/products?category=Runner' },
    { name: 'Warehouse', image: '/catalog/IMG_20260131_170953_401.jpg', href: '/products?category=Warehouse' },
  ].map((item) => ({
    ...item,
    count: products.filter((product) => product.category === item.name).length,
  }));

  return (
    <main className="flex-grow">
      <Hero />
      <TrustBar />

      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-[1px] bg-primary-indigo" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-indigo">Featured Listings</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-4">
                Curated <span className="text-white bg-onyx px-4 -skew-x-6 inline-block">Footwear.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg font-medium leading-relaxed">
                Your uploaded catalog now powers a cleaner mix of studio sneaker drops, raw warehouse pairs, and local slip-on stock.
              </p>
            </div>

            <div className="flex bg-gray-50 p-2 rounded-2xl border border-gray-100 self-end">
              {[
                { id: 'all', label: 'All', icon: <Target size={14} /> },
                { id: 'international', label: 'Imported', icon: <Globe size={14} /> },
                { id: 'domestic', label: 'Local', icon: <HomeIcon size={14} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'all' | 'international' | 'domestic')}
                  className={`flex items-center space-x-3 px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                    activeTab === tab.id ? 'bg-onyx text-white shadow-2xl shadow-black/20' : 'text-gray-400 hover:text-onyx'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>

          <div className="mt-32 text-center">
            <Link to="/products" className="btn-premium btn-outline mx-auto group">
              <span>Explore Full Catalog</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-onyx py-40 text-white selection:bg-primary-indigo selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8]">
                <span className="text-white/20 italic font-serif lowercase pr-4">shop by</span>
                category
              </h2>
              <div className="h-[2px] w-48 bg-primary-indigo" />
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] mt-8 md:mt-0">
              Category-led catalog browse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
            <Link to={categories[0].href} className="md:col-span-2 md:row-span-2 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5">
              <img src={categories[0].image} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt={categories[0].name} />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <span className="text-primary-indigo text-[10px] font-black uppercase tracking-[0.3em] block mb-4">{categories[0].count} listings</span>
                  <h3 className="text-5xl font-bold uppercase tracking-tighter">Formal<br />Loafers</h3>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-onyx group-hover:bg-primary-indigo group-hover:text-white transition-all duration-500">
                  <ArrowRight size={24} />
                </div>
              </div>
            </Link>

            <Link to={categories[1].href} className="md:col-span-2 md:row-span-1 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5">
              <img src={categories[1].image} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt={categories[1].name} />
              <div className="absolute inset-0 bg-gradient-to-r from-onyx/60 via-transparent to-transparent" />
              <div className="absolute inset-0 p-12 flex flex-col justify-center">
                <span className="text-primary-indigo text-[10px] font-black uppercase tracking-[0.3em] mb-4">{categories[1].count} listings</span>
                <h3 className="text-4xl font-bold uppercase tracking-tighter">Studio Sneaker Stacks</h3>
              </div>
            </Link>

            <Link to={categories[2].href} className="md:col-span-1 md:row-span-1 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5">
              <img src={categories[2].image} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" alt={categories[2].name} />
              <div className="absolute inset-0 p-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Runner<br />Drops</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-4">{categories[2].count} listings</p>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-onyx transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            </Link>

            <Link to={categories[3].href} className="md:col-span-1 md:row-span-1 group relative rounded-[3rem] overflow-hidden bg-heritage-amber/10 border border-heritage-amber/20">
              <img src={categories[3].image} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-700" alt={categories[3].name} />
              <div className="absolute inset-0 p-10 flex flex-col items-center justify-center text-center">
                <span className="text-heritage-amber text-[10px] font-black uppercase tracking-[0.2em] mb-4">{categories[3].count} listings</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Warehouse<br />Lots</h3>
                <div className="w-10 h-10 rounded-full bg-heritage-amber text-white flex items-center justify-center shadow-xl shadow-heritage-amber/30">
                  <Zap size={16} fill="white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-primary-indigo py-6 overflow-hidden border-y border-white/10">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white text-xs font-black uppercase tracking-[0.5em] px-12">
              Real Uploaded Catalog / Imported Drops / Local Stock / Footwear Ready / Fast Browse /
            </span>
          ))}
        </div>
      </div>

      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-onyx rounded-[4rem] p-16 md:p-32 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-indigo/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-heritage-amber/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="flex items-center space-x-6">
                  <span className="w-20 h-[2px] bg-heritage-amber" />
                  <span className="text-heritage-amber text-[10px] font-black uppercase tracking-[0.4em]">Limited Run Ops</span>
                </div>
                <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.8] uppercase">
                  Flash <br /> <span className="text-white/20">Pairs.</span>
                </h2>
                <p className="text-white/40 text-xl max-w-sm leading-relaxed">
                  Quick-buy markdowns pulled from your uploaded catalog refresh.
                </p>
                <Link to="/products?sale=true" className="btn-premium bg-white text-black hover:bg-primary-indigo hover:text-white inline-flex">
                  <span>Access Flash Picks</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 rotate-3">
                {products.filter((p) => p.isFlashSale).slice(0, 4).map((p, i) => (
                  <motion.div
                    key={p.id}
                    whileHover={{ y: -20, rotate: -2 }}
                    className={`aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative ${i % 2 !== 0 ? 'translate-y-12' : ''}`}
                  >
                    <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent flex flex-col justify-end p-8">
                      <p className="text-white text-xs font-bold leading-tight line-clamp-1">{p.name}</p>
                      <p className="text-heritage-amber font-mono font-bold">-{Math.round(((p.originalPrice ?? p.price) - p.price) / (p.originalPrice ?? p.price) * 100)}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

