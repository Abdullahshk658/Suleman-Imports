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

  const filteredProducts = activeTab === 'all' 
    ? products.slice(0, 8) 
    : products.filter(p => p.origin === activeTab).slice(0, 8);

  const categories = [
    { name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=800', count: 120, size: 'large' },
    { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', count: 245, size: 'wide' },
    { name: 'Kids', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e9?auto=format&fit=crop&q=80&w=800', count: 85, size: 'small' },
    { name: 'Elite Heritage', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800', count: 56, size: 'small' },
  ];

  return (
    <main className="flex-grow">
      <Hero />
      <TrustBar />

      {/* Modern Featured Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-[1px] bg-primary-indigo" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-indigo">Featured Objects</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.8] mb-4">
                Curated <span className="text-white bg-onyx px-4 -skew-x-6 inline-block">Supply.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg font-medium leading-relaxed">
                Our twin-engine sourcing model brings you high-fidelity imports and the raw heritage of local exports.
              </p>
            </div>
            
            <div className="flex bg-gray-50 p-2 rounded-2xl border border-gray-100 self-end">
              {[
                { id: 'all', label: 'All', icon: <Target size={14} /> },
                { id: 'international', label: 'Imported', icon: <Globe size={14} /> },
                { id: 'domestic', label: 'Heritage', icon: <HomeIcon size={14} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-3 px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                    activeTab === tab.id 
                      ? 'bg-onyx text-white shadow-2xl shadow-black/20' 
                      : 'text-gray-400 hover:text-onyx'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          >
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>

          <div className="mt-32 text-center">
            <Link 
              to="/products"
              className="btn-premium btn-outline mx-auto group"
            >
              <span>Explore Full Supply</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Category Section (Recipe 5 inspiration) */}
      <section className="bg-onyx py-40 text-white selection:bg-primary-indigo selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.8]">
                 <span className="text-white/20 italic font-serif lowercase pr-4">shop by</span>
                 Universe
              </h2>
              <div className="h-[2px] w-48 bg-primary-indigo" />
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] mt-8 md:mt-0">
               Direct Sourcing Architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
             {/* Men - Large */}
             <Link 
               to="/products?category=Men"
               className="md:col-span-2 md:row-span-2 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5"
             >
               <img src={categories[0].image} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Men" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                 <div>
                   <span className="text-primary-indigo text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Elite Supply</span>
                   <h3 className="text-5xl font-bold uppercase tracking-tighter">Essential<br />Men</h3>
                 </div>
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-onyx group-hover:bg-primary-indigo group-hover:text-white transition-all duration-500">
                    <ArrowRight size={24} />
                 </div>
               </div>
             </Link>

             {/* Women - Wide */}
             <Link 
               to="/products?category=Women"
               className="md:col-span-2 md:row-span-1 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5"
             >
               <img src={categories[1].image} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Women" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-r from-onyx/60 via-transparent to-transparent" />
               <div className="absolute inset-0 p-12 flex flex-col justify-center">
                 <span className="text-primary-indigo text-[10px] font-black uppercase tracking-[0.3em] mb-4">Boutique</span>
                 <h3 className="text-4xl font-bold uppercase tracking-tighter">Women's Premium</h3>
               </div>
             </Link>

             {/* Kids - Small */}
             <Link 
               to="/products?category=Kids"
               className="md:col-span-1 md:row-span-1 group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/5"
             >
               <div className="absolute inset-0 p-10 flex flex-col items-center justify-center text-center">
                 <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">The Kids<br />Hub</h3>
                 <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-onyx transition-all">
                    <ChevronRight size={20} />
                 </div>
               </div>
             </Link>

             {/* Heritage - Small */}
             <Link 
               to="/products?origin=domestic"
               className="md:col-span-1 md:row-span-1 group relative rounded-[3rem] overflow-hidden bg-heritage-amber/10 border border-heritage-amber/20"
             >
               <div className="absolute inset-0 p-10 flex flex-col items-center justify-center text-center">
                 <span className="text-heritage-amber text-[10px] font-black uppercase tracking-[0.2em] mb-4">Heritage</span>
                 <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">Factory<br />Overruns</h3>
                 <div className="w-10 h-10 rounded-full bg-heritage-amber text-white flex items-center justify-center shadow-xl shadow-heritage-amber/30">
                    <Zap size={16} fill="white" />
                 </div>
               </div>
             </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Divider - Marquee (Recipe 5) */}
      <div className="bg-primary-indigo py-6 overflow-hidden border-y border-white/10">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white text-xs font-black uppercase tracking-[0.5em] px-12">
              Imported Luxury • Local Heritage • Factory Direct • 100% Genuine • Lightning Fast •
            </span>
          ))}
        </div>
      </div>

      {/* High-Contrast Flash Sale Segment */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative bg-onyx rounded-[4rem] p-16 md:p-32 overflow-hidden">
              {/* Abstract Glass shapes */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-indigo/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-heritage-amber/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <div className="flex items-center space-x-6">
                    <span className="w-20 h-[2px] bg-heritage-amber" />
                    <span className="text-heritage-amber text-[10px] font-black uppercase tracking-[0.4em]">Limited Run Ops</span>
                  </div>
                  <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.8] uppercase">
                     Blast <br /> <span className="text-white/20">Archive.</span>
                  </h2>
                  <p className="text-white/40 text-xl max-w-sm leading-relaxed">
                    Exclusive leftovers from Europe's top textile exports. Priced for the community.
                  </p>
                  <Link to="/products?sale=true" className="btn-premium bg-white text-black hover:bg-primary-indigo hover:text-white inline-flex">
                    <span>Access Flash Inventory</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-6 rotate-3">
                   {products.filter(p => p.isFlashSale).slice(0, 4).map((p, i) => (
                     <motion.div 
                       key={p.id}
                       whileHover={{ y: -20, rotate: -2 }}
                       className={`aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative ${i % 2 !== 0 ? 'translate-y-12' : ''}`}
                     >
                        <img src={p.image} className="w-full h-full object-cover" alt={p.name} referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent flex flex-col justify-end p-8">
                           <p className="text-white text-xs font-bold leading-tight line-clamp-1">{p.name}</p>
                           <p className="text-heritage-amber font-mono font-bold">-{Math.round((p.originalPrice! - p.price) / p.originalPrice! * 100)}%</p>
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
