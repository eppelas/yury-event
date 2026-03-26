import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingBlob = () => (
  <motion.div 
    className="w-32 h-32 mx-auto bg-gradient-to-tr from-[#8DC63F] to-[#b3e66f] rounded-[40%] blur-[2px] shadow-2xl mix-blend-multiply"
    animate={{ 
      borderRadius: ["40%", "60%", "30%", "40%"],
      rotate: [0, 90, 180, 0],
      scale: [1, 1.1, 0.9, 1]
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
);

export const DesktopPaymentPopupV3 = ({ isOpen, onClose }: PaymentPopupProps) => {
  const [selectedMethod, setSelectedMethod] = useState('card_ru');
  const [successState, setSuccessState] = useState<'none' | 'card' | 'usdt'>('none');
  const [showQR, setShowQR] = useState(false);

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#EAEAEA]/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
        className="w-full max-w-[500px] max-h-[95vh] overflow-y-auto overflow-x-hidden bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative p-10 flex flex-col font-sans text-black"
      >
        <button onClick={handleClose} className="absolute top-8 right-8 w-10 h-10 bg-black/5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors z-50">×</button>

        <AnimatePresence mode="wait">
          {successState !== 'none' ? (
            <motion.div key="succ" className="text-center py-6" initial={{opacity:0}} animate={{opacity:1}}>
              <FloatingBlob />
              <h3 className="text-3xl font-black tracking-tighter mt-12 mb-4 text-[#8DC63F]">
                {successState === 'usdt' ? 'СПАСИБО ЗА ПОКУПКУ!' : 'СПАСИБО ЗА ЗАКАЗ!'}
              </h3>
              <p className="text-black/50 text-sm leading-relaxed mb-10 px-4">
                {successState === 'usdt' ? (
                  <>Мы с вами свяжемся в Telegram в течение суток с подтверждением. Мы проверим поступление и вернемся к вам.<br/><br/><span className="font-bold text-black/80">ВАШ ЗАКАЗ ПРИНЯТ, НОМЕР #1042X_SYS</span></>
                ) : 'Оплата прошла успешно. Мы скоро свяжемся с вами. Инструкции отправлены в Telegram.'}
              </p>
              <button 
                onClick={handleClose}
                className="w-full py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black/80 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
              >
                ЗАКРЫТЬ
              </button>
            </motion.div>
          ) : !showQR ? (
            <motion.div key="form" initial={{opacity:0}} animate={{opacity:1}}>
               <div className="mb-8 pl-2">
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 opacity-40 text-[#8DC63F]">ОПЛАТА ЗАКАЗА</div>
                 <h2 className="text-3xl font-black tracking-tighter leading-none pr-8">ADVANCED TRACK MAIN LAB X26</h2>
               </div>

               <div className="mb-8 pt-4 pb-2">
                 <div className="text-[11px] font-bold tracking-[0.2em] mb-1 uppercase text-black/40 pl-2">ИТОГО К ОПЛАТЕ</div>
                 <div className="text-4xl font-black tracking-tighter pl-2">{getPrice()}</div>
               </div>

               <div className="mb-8">
                 <div className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 opacity-40 pl-2">СПОСОБ ОПЛАТЫ</div>
                 <div className="flex bg-black/5 p-1 rounded-[24px] gap-1 flex-wrap shadow-inner">
                   {methods.map((method) => (
                     <button
                       key={method.id}
                       onClick={() => setSelectedMethod(method.id)}
                       className={cn(
                         "relative flex-1 py-4 px-2 rounded-[20px] text-[10px] font-black tracking-widest transition-all min-w-[30%] whitespace-nowrap",
                         selectedMethod === method.id 
                           ? "bg-white text-black shadow-[0_4px_15px_rgba(0,0,0,0.05)]" 
                           : "text-black/50 hover:text-black hover:bg-black/5"
                       )}
                     >
                       {method.label}
                       {method.id === 'usdt' && (
                         <div className="absolute -top-3 left-[-4px] rotate-3 bg-[#8DC63F] text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-sm">
                           -5%
                         </div>
                       )}
                     </button>
                   ))}
                 </div>
               </div>

               <div className="space-y-4 mb-8">
                 <div className="relative">
                    <div className="absolute top-4 left-6 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">E-MAIL</div>
                    <input type="email" placeholder="example@mail.com" className="w-full pl-6 pr-6 pt-10 pb-4 bg-[#f5f5f5] rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-[#8DC63F]/20 transition-all font-medium text-[13px] border border-transparent focus:border-black/5" />
                 </div>
                 <div className="relative">
                    <div className="absolute top-4 left-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8DC63F]">* НИК В TELEGRAM</div>
                    <input type="text" placeholder="@username" className="w-full pl-6 pr-6 pt-10 pb-4 bg-[#f5f5f5] rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-[#8DC63F]/20 transition-all font-medium text-[13px] border border-transparent focus:border-black/5" />
                 </div>
                 <div className="relative">
                    <div className="absolute top-4 left-6 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">КОММЕНТАРИЙ</div>
                    <input type="text" placeholder="..." className="w-full pl-6 pr-6 pt-10 pb-4 bg-[#f5f5f5] rounded-3xl outline-none focus:bg-white focus:ring-4 focus:ring-[#8DC63F]/20 transition-all font-medium text-[13px] border border-transparent focus:border-black/5" />
                 </div>
               </div>

               <div className="flex items-center justify-between pl-4">
                 <button className="text-[10px] uppercase font-bold text-black/40 hover:text-black transition-all tracking-[0.1em]">
                   СВЯЖИТЕСЬ С НАМИ
                 </button>
                 <button 
                   onClick={handlePay}
                   className="px-10 py-5 bg-[#8DC63F] text-white rounded-full font-black text-[12px] tracking-widest shadow-[0_15px_30px_rgba(141,198,63,0.3)] hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(141,198,63,0.4)] transition-all uppercase"
                 >
                   ОПЛАТИТЬ
                 </button>
               </div>
            </motion.div>
          ) : (
            <motion.div key="qr" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center">
              <div className="text-[10px] text-[#8DC63F] tracking-[0.3em] mb-4 font-bold uppercase bg-[#8DC63F]/10 px-4 py-2 rounded-full">USDT (TRC20) PAYMENT</div>
              <h3 className="text-[22px] font-sans font-black mb-8 leading-tight">ПЕРЕВЕДИТЕ {getPrice()}<br/>ПО АДРЕСУ:</h3>
              <div className="bg-white p-6 rounded-3xl mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5">
                 <div className="w-48 h-48 flex items-center justify-center font-mono text-black/20 text-sm border-2 border-dashed border-black/10 rounded-2xl">QR CODE</div>
              </div>
              <div className="w-full bg-[#f5f5f5] p-5 rounded-2xl font-mono text-[12px] font-bold text-black border border-black/5 flex items-center justify-between mb-8">
                 <span className="truncate">T9y...6uI9oP</span>
                 <div className="bg-white text-black px-3 py-1.5 text-[10px] rounded-full shadow-sm hover:shadow-md cursor-pointer transition-shadow">СКОПИРОВАТЬ</div>
              </div>
              <div className="flex items-center justify-between w-full mt-4 pt-6 border-t border-black/5">
                 <button onClick={() => setShowQR(false)} className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40 hover:text-black transition-colors px-2">НАЗАД</button>
                 <button onClick={() => setSuccessState('usdt')} className="px-10 py-5 bg-[#8DC63F] text-white text-[12px] font-black uppercase tracking-widest rounded-full shadow-[0_15px_30px_rgba(141,198,63,0.3)] hover:shadow-[0_20px_40px_rgba(141,198,63,0.4)] transition-all">Я ОПЛАТИЛ</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
