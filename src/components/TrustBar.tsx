import React from 'react';
import { Truck, RotateCcw, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const features = [
    {
      icon: <Truck size={20} />,
      title: 'Global Logistics',
      desc: 'Tier-1 Shipping'
    },
    {
      icon: <Sparkles size={20} />,
      title: '7-Day Policy',
      desc: 'Seamless Returns'
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Verified Supply',
      desc: '100% Authentic'
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Encrypted Pay',
      desc: 'Secure Checkout'
    }
  ];

  return (
    <div className="bg-onyx py-8 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex items-center space-x-6 group">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-primary-indigo group-hover:bg-primary-indigo group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                {f.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{f.title}</h4>
                <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
