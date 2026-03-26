import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesktopPaymentPopupV4 = ({ isOpen, onClose }: PaymentPopupProps) => {
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[600px] bg-white border-8 border-black p-12 relative flex flex-col font-sans text-black"
      >
        <button onClick={onClose} className="absolute top-6 right-8 text-black text-4xl hover:opacity-50 transition-opacity">×</button>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div key="success-v4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-left">
              <h2 className="text-[60px] leading-[0.85] font-black uppercase tracking-tighter mb-8">
                PAYMENT<br/>COMPLETE
              </h2>
              <p className="text-xl font-medium max-w-[400px] leading-tight mb-16">
                Your transmission was successful. Check Telegram for further instructions.
              </p>
              <button 
                onClick={onClose}
                className="text-4xl font-black uppercase tracking-tighter hover:underline underline-offset-8"
              >
                RETURN
              </button>
            </motion.div>
          ) : (
            <motion.div key="form-v4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
              <h2 className="text-[72px] md:text-[84px] leading-[0.8] font-black uppercase tracking-tighter mb-10">
                CHECK<br/>OUT
              </h2>

              <div className="flex flex-col gap-6 mb-12">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                  className="w-full text-2xl font-black uppercase tracking-tighter outline-none border-b-4 border-black pb-2 placeholder:text-black/20 focus:border-[#8DC63F] transition-colors" 
                />
                <input 
                  type="text" 
                  placeholder="TELEGRAM ID"
                  className="w-full text-2xl font-black uppercase tracking-tighter outline-none border-b-4 border-black pb-2 placeholder:text-black/20 focus:border-[#8DC63F] transition-colors" 
                />
              </div>

              <div className="flex items-end justify-between border-t-8 border-black pt-8">
                <div>
                  <div className="text-xl font-bold uppercase tracking-widest mb-1">TOTAL</div>
                  <div className="text-5xl font-black tracking-tighter">160 USDT</div>
                </div>
                <button 
                  onClick={() => setSuccess(true)}
                  className="px-8 py-4 bg-[#8DC63F] text-black text-3xl font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-colors"
                >
                  PAY
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
