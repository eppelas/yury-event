import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesktopPaymentPopupV0 = ({ isOpen, onClose }: PaymentPopupProps) => {
  const [selectedMethod, setSelectedMethod] = useState('card_ru');
  const [showQR, setShowQR] = useState(false);
  const [successState, setSuccessState] = useState<'none' | 'card' | 'usdt'>('none');

  const methods = [
    { id: 'usdt', label: 'USDT' },
    { id: 'card_ru', label: 'РУ-КАРТЫ' },
    { id: 'card_intl', label: 'ЗАРУБЕЖНЫЕ КАРТЫ' },
  ];

  const getPrice = () => {
    if (selectedMethod === 'usdt') return '160 USDT';
    if (selectedMethod === 'card_intl') return '$160';
    return '15 000 ₽';
  };

  const handlePay = () => {
    if (selectedMethod === 'usdt') {
      setShowQR(true);
    } else {
      setSuccessState('card');
    }
  };

  const handleClose = () => {
    setShowQR(false);
    setSuccessState('none');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-[500px] bg-[#fdfdfc] border border-black/10 rounded-[2px] shadow-2xl relative overflow-hidden flex flex-col p-8 md:p-10 font-mono text-black"
      >
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-2xl hover:bg-black/5 transition-colors rounded-sm z-50 text-black/40 hover:text-black"
        >
          ×
        </button>

        <AnimatePresence mode="wait">
          {successState !== 'none' ? (
            <motion.div key="success-v0" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-center py-6">
              <div className="text-[#8DC63F] mb-6">
                 {successState === 'usdt' ? (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                 ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                 )}
              </div>
              <h3 className="text-[24px] font-black mb-6 uppercase tracking-tighter text-black/90 font-sans">
                {successState === 'card' ? 'СПАСИБО ЗА ЗАКАЗ!' : 'СПАСИБО ЗА ПОКУПКУ!'}
              </h3>
              <p className="text-[13px] text-black/50 leading-relaxed font-sans mb-10 max-w-[340px]">
                {successState === 'usdt' ? (
                  <>Мы с вами свяжемся в Telegram в течение суток с подтверждением. Мы проверим поступление и вернемся к вам.<br/><br/><span className="font-bold text-black/70">ВАШ ЗАКАЗ ПРИНЯТ, НОМЕР #1042X</span></>
                ) : (
                  'Оплата прошла успешно. Мы скоро свяжемся с вами.'
                )}
              </p>
              <button 
                onClick={handleClose}
                className="w-full py-4 bg-[#8DC63F] text-white text-[12px] font-black uppercase tracking-widest rounded-[1px]"
              >
                ЗАКРЫТЬ
              </button>
            </motion.div>
          ) : !showQR ? (
            <motion.div key="form-v0" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex flex-col">
              <div className="mb-8 text-center">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 opacity-40">ОПЛАТА ЗАКАЗА</div>
                <h2 className="text-[22px] font-black leading-tight uppercase tracking-tighter text-black/90 font-sans">
                  ADVANCED TRACK MAIN LAB X26
                </h2>
              </div>
              <div className="mb-10 pt-4 flex flex-col items-center border-t border-black/5">
                <div className="text-[11px] font-bold tracking-[0.2em] text-black/40 mb-1 uppercase">ИТОГО К ОПЛАТЕ</div>
                <div className="text-[28px] font-black tracking-tighter text-black font-sans">{getPrice()}</div>
              </div>
              <div className="mb-10">
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] mb-4 opacity-40 text-center">СПОСОБ ОПЛАТЫ</div>
                <div className="grid grid-cols-2 gap-2">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        "relative p-4 border text-[10px] font-black transition-all uppercase tracking-widest h-14 flex items-center justify-center text-center rounded-[1px]",
                        method.id === 'card_intl' ? 'col-span-2' : '',
                        selectedMethod === method.id 
                          ? "bg-[#8DC63F] border-[#8DC63F] text-white shadow-[0_4px_12px_rgba(141,198,63,0.2)]" 
                          : "bg-white border-black/5 hover:border-black/20 text-black/40 hover:text-black/60"
                      )}
                    >
                      {method.label}
                      {method.id === 'usdt' && (
                        <div className="absolute -top-3 left-[-8px] -rotate-6 bg-[#8DC63F] text-white text-[7px] font-black px-2 py-1 rounded-sm shadow-sm z-10 whitespace-nowrap">
                          СКИДКА 5%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">E-MAIL:</div>
                  <div className="bg-white border border-black/10 px-4 h-12 flex items-center focus-within:border-[#8DC63F] transition-colors rounded-[1px]">
                    <input type="email" placeholder="example@mail.com" className="w-full text-[11px] font-sans outline-none bg-transparent placeholder:text-black/30" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">* НИК В TELEGRAM:</div>
                  <div className="bg-white border border-black/10 px-4 h-12 flex items-center focus-within:border-[#8DC63F] transition-colors rounded-[1px]">
                    <input type="text" placeholder="@username" className="w-full text-[11px] font-sans outline-none bg-transparent placeholder:text-black/30" />
                  </div>
                </div>
              </div>
              <div className="mb-12 flex flex-col gap-2">
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">КОММЕНТАРИЙ:</div>
                <div className="bg-transparent border-b border-black/10 py-2 flex items-center focus-within:border-[#8DC63F] transition-colors">
                  <input type="text" placeholder="..." className="w-full text-[11px] font-sans outline-none bg-transparent placeholder:text-black/30" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-transparent">
                <button className="text-[9px] uppercase font-bold text-black/30 border-b border-black/10 hover:border-black/50 hover:text-black/60 transition-all pb-0.5 tracking-[0.1em]">СВЯЖИТЕСЬ С НАМИ</button>
                <button onClick={handlePay} className="px-10 py-4 bg-[#8DC63F] text-white text-[12px] font-black uppercase tracking-widest rounded-[1px]">ОПЛАТИТЬ</button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="qr-v0" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex flex-col items-center text-center py-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-40">USDT (TRC20) PAYMENT</div>
              <h3 className="text-[20px] font-sans font-black mb-8 leading-tight text-black/90">ПЕРЕВЕДИТЕ {getPrice()} ПО АДРЕСУ:</h3>
              <div className="bg-white p-6 border border-black/5 rounded-xl mb-8 shadow-sm">
                <div className="w-48 h-48 flex items-center justify-center font-mono text-black/20 text-sm border-2 border-dashed border-black/10">QR CODE</div>
              </div>
              <div className="w-full bg-[#f5f5f5] p-4 rounded-sm font-mono text-[12px] font-bold text-black flex items-center justify-between mb-8">
                <span>T9yF8hQpA5vW2xZ1sE4dC7bN0mK3jL6uI9oP</span>
              </div>
              <div className="flex items-center justify-between w-full mt-4 pt-6 mt-auto">
                <button onClick={() => setShowQR(false)} className="text-[9px] font-bold uppercase tracking-[0.1em] text-black/40 hover:text-black border-b border-black/10 pb-0.5">ВЕРНУТЬСЯ К ВЫБОРУ</button>
                <button onClick={() => setSuccessState('usdt')} className="px-10 py-4 bg-[#8DC63F] text-white text-[12px] font-black uppercase tracking-widest">Я ОПЛАТИЛ</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
