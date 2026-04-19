import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] overflow-hidden bg-onyx">
      {/* Background with Depth */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2000"
          alt="Atmospheric Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-onyx/20 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-transparent to-transparent opacity-80" />
      </div>

      {/* Floating Modern Accents */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-64 h-64 bg-primary-indigo/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-heritage-amber/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="bg-primary-indigo text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                   Collection 2026
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                  The New Standard in Raw Sourcing
                </span>
              </div>

              <h1 className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                <span className="block">Global</span>
                <span className="flex items-center">
                  <span className="text-primary-indigo italic font-light lowercase font-serif pr-4">premium</span>
                  <span>Supply</span>
                </span>
              </h1>

              <p className="text-xl text-white/50 mb-12 leading-relaxed max-w-xl font-medium">
                SULEMAN IMPORT'S connects you to international luxury hubs and the raw excellence of local heritage manufacturing. 
                <span className="block mt-4 text-white/80 font-bold">Unfiltered. Authentic. Exclusive.</span>
              </p>

              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
                <Link to="/products?origin=international" className="btn-premium btn-primary group">
                  <Zap size={18} className="fill-current" />
                  <span>Shop Imported Hub</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
                <Link to="/products?origin=domestic" className="btn-premium bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black transition-all">
                  <span>Elite Heritage Collection</span>
                </Link>
              </div>
            </motion.div>

            {/* Micro Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 py-10 border-t border-white/5"
            >
              {[
                { label: 'Imported', val: '12K+', color: 'text-primary-indigo' },
                { label: 'Heritage', val: '800+', color: 'text-heritage-amber' },
                { label: 'Locations', val: '24', color: 'text-white' },
                { label: 'Uptime', val: '99.9%', color: 'text-white' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className={`text-2xl font-bold font-mono tracking-tighter ${stat.color}`}>{stat.val}</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Side Visual - Large Numbers (Recipe 9 inspiration) */}
          <div className="hidden lg:flex flex-col items-end justify-center lg:col-span-4 h-full relative">
            <span className="text-[15rem] font-black text-white/5 leading-none absolute right-0 pointer-events-none select-none italic font-serif">
               01
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 z-30 flex flex-col items-center"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
