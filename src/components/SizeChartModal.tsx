import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export default function SizeChartModal({ isOpen, onClose, category }: SizeChartModalProps) {
  const chartData = [
    { us: 'S', uk: '36', eu: '46', chest: '36-38"' },
    { us: 'M', uk: '38', eu: '48', chest: '38-40"' },
    { us: 'L', uk: '40', eu: '50', chest: '40-42"' },
    { us: 'XL', uk: '42', eu: '52', chest: '42-44"' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl bg-white z-[210] rounded-3xl shadow-2xl overflow-hidden p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter">SIZE GUIDE</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{category} Measurements</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-gray-400">US Size</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-gray-400">UK Size</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-gray-400">EU Size</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Chest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {chartData.map((row) => (
                    <tr key={row.us}>
                      <td className="py-4 text-sm font-bold">{row.us}</td>
                      <td className="py-4 text-sm text-gray-600">{row.uk}</td>
                      <td className="py-4 text-sm text-gray-600">{row.eu}</td>
                      <td className="py-4 text-sm text-gray-600">{row.chest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
              <p className="text-[10px] text-gray-500 leading-relaxed italic">
                * Please note that these measurements are intended as a guide only. Actual sizing may vary between brands and models, especially between imported and local heritage pieces.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
