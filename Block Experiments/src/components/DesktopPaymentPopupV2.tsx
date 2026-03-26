import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { WireframePulse } from './WireframePulse';
interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}


export const DesktopPaymentPopupV2 = ({ isOpen, onClose }: PaymentPopupProps) => {
  const [selectedMethod, setSelectedMethod] = useState('card_intl');
  const [successState, setSuccessState] = useState<'none' | 'card_input' | 'processing' | 'error' | 'card' | 'usdt'>('none');
  const [subMethod, setSubMethod] = useState('card');
  const [showQR, setShowQR] = useState(false);

  const methods = [
    { id: 'usdt', label: 'USDT' },
    { id: 'card_ru', label: 'РУ-КАРТЫ' },
    { id: 'card_intl', label: 'ЗАРУБЕЖНЫЕ КАРТЫ' },
  ];

  const getPrice = () => {
    if (selectedMethod === 'usdt') return '845 USDT';
    if (selectedMethod === 'card_intl') return '890 €';
    return '89 000 ₽';
  };

  const handleInitialPay = () => {
    if (selectedMethod === 'usdt') {
      setShowQR(true);
    } else {
      setSuccessState('card_input');
      setSubMethod('card');
    }
  };

  const handleClose = () => {
    setShowQR(false);
    setSuccessState('none');
    setSubMethod('card');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md"
      onClick={handleClose}
    >
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-full max-w-[500px] bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-lg shadow-[0_0_50px_rgba(141,198,63,0.15)] relative overflow-hidden overflow-y-auto max-h-[100dvh] flex flex-col p-5 pt-8 md:p-8 font-sans text-white text-left"
      >
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white/40 hover:text-white transition-opacity text-5xl font-light hover:scale-105 z-20 p-2 leading-none"
          aria-label="Закрыть"
        >
          ×
        </button>

        <AnimatePresence mode="wait">
          {successState === 'card' || successState === 'usdt' ? (
            <motion.div key="win" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6 md:py-10">
              <WireframePulse className="w-40 h-40 mx-auto text-[#8DC63F] drop-shadow-[0_0_15px_rgba(141,198,63,0.4)]" />
              <h3 className="text-xl md:text-2xl font-black mt-8 text-white uppercase tracking-tight">
                {successState === 'usdt' ? 'СПАСИБО ЗА ПОКУПКУ!' : 'СПАСИБО ЗА ЗАКАЗ!'}
              </h3>
              <p className="text-white/50 mt-4 text-sm font-normal">
                {successState === 'usdt' ? (
                  <>Мы с вами свяжемся в Telegram в течение суток с подтверждением. Мы проверим поступление и вернемся к вам.<br/><br/><span className="text-white/90">ВАШ ЗАКАЗ ПРИНЯТ, НОМЕР #1042X_SYS</span></>
                ) : 'Оплата прошла успешно. Мы скоро свяжемся с вами в Telegram с подтверждением и доступом.'}
              </p>
              <button 
                onClick={handleClose}
                className="mt-8 md:mt-10 w-full py-4 bg-[#8DC63F]/10 border border-[#8DC63F]/50 text-[#8DC63F] rounded-sm hover:bg-[#8DC63F] hover:text-black transition-colors font-bold tracking-[0.16em] text-xs uppercase font-mono"
              >
                ЗАКРЫТЬ
              </button>
            </motion.div>
          ) : successState === 'card_input' ? (
            <motion.div key="card_input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
              <div className="mb-5 md:mb-8">
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase leading-tight">БЕЗОПАСНАЯ ОПЛАТА</h2>
                <div className="text-[10px] text-[#8DC63F] font-mono font-bold tracking-[0.16em] mt-1.5 uppercase">
                  {selectedMethod === 'card_intl' ? 'ЗАРУБЕЖНЫЕ КАРТЫ' : 'РУ-КАРТЫ'}
                </div>
              </div>

              <div className="mb-5 md:mb-8 flex items-baseline gap-3">
                <div className="text-[10px] md:text-[11px] font-mono font-bold uppercase text-white/50 tracking-[0.16em]">К ОПЛАТЕ:</div>
                <div className="text-2xl md:text-3xl font-black tracking-tight text-[#8DC63F] drop-shadow-[0_0_15px_rgba(141,198,63,0.3)]">{getPrice()}</div>
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
                {(selectedMethod === 'card_intl' 
                  ? [{id:'revolut', label:'Revolut'}, {id:'link', label:'Link'}, {id:'card', label:'Карта'}]
                  : [{id:'sbp', label:'СБП'}, {id:'qr', label:'QR'}, {id:'card', label:'Карта'}]
                ).map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setSubMethod(opt.id)}
                    className={cn(
                      "p-3 rounded-sm border transition-all text-[10px] md:text-xs uppercase font-bold h-12 flex items-center justify-center text-center",
                      subMethod === opt.id 
                        ? "border-[#8DC63F] bg-[#8DC63F]/10 text-[#8DC63F] shadow-[0_0_20px_rgba(141,198,63,0.2)]" 
                        : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {subMethod === 'card' ? (
                <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-lg mb-6 flex flex-col gap-3 md:gap-4">
                  <input 
                    type="text" 
                    placeholder="Номер карты" 
                    className="w-full bg-black/50 border border-white/10 rounded-sm px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm text-white outline-none focus:border-[#8DC63F] transition-colors placeholder:text-white/30" 
                  />
                  <div className="flex gap-3 md:gap-4">
                    <input 
                      type="text" 
                      placeholder="ММ/ГГ" 
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm text-white outline-none focus:border-[#8DC63F] transition-colors placeholder:text-white/30" 
                    />
                    <input 
                      type="text" 
                      placeholder="CVC" 
                      className="w-full bg-black/50 border border-white/10 rounded-sm px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm text-white outline-none focus:border-[#8DC63F] transition-colors placeholder:text-white/30" 
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-lg mb-6 flex items-center justify-center h-[132px] md:h-[156px] text-white/40 text-[10px] md:text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-center leading-relaxed">
                  {subMethod === 'sbp' ? 'ОТКРЫТЬ ПРИЛОЖЕНИЕ БАНКА' : 
                   subMethod === 'qr' ? 'СКАНИРОВАТЬ QR-КОД' : 
                   subMethod === 'revolut' ? 'ПЕРЕЙТИ В REVOLUT APP' : 
                   subMethod === 'link' ? 'ПЕРЕЙТИ В LINK.COM' : 'ПЕРЕХОД К ОПЛАТЕ...'}
                </div>
              )}

              <div className="flex flex-col mt-auto pt-4 md:pt-6 gap-6 md:gap-8">
                <button 
                  onClick={() => setSuccessState('card')}
                  className="w-full py-3.5 md:py-4 bg-[#8DC63F] text-black text-xs md:text-sm font-black tracking-widest rounded-sm shadow-[0_0_20px_rgba(141,198,63,0.3)] hover:shadow-[0_0_40px_rgba(141,198,63,0.7)] hover:bg-[#9ded46] transition-all duration-300 uppercase hover:-translate-y-0.5 whitespace-nowrap"
                >
                  ОПЛАТИТЬ
                </button>
                <button 
                  onClick={() => setSuccessState('none')}
                  className="mx-auto pb-4 md:pb-6 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-white/40 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">←</span> ВЕРНУТЬСЯ НАЗАД
                </button>
              </div>
            </motion.div>
          ) : !showQR ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
              <div className="mb-5 md:mb-8 pr-6">
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase leading-tight">ОПЛАТА ЗАКАЗА</h2>
                <div className="text-[10px] text-[#8DC63F] font-mono font-bold tracking-[0.16em] mt-1.5 uppercase">ADVANCED TRACK MAIN LAB X26</div>
              </div>

              <div className="mb-5 md:mb-8 flex items-baseline gap-3">
                <div className="text-[10px] md:text-[11px] font-mono font-bold uppercase text-white/50 tracking-[0.16em]">ИТОГО К ОПЛАТЕ:</div>
                <div className="text-2xl md:text-3xl font-black tracking-tight text-[#8DC63F] drop-shadow-[0_0_15px_rgba(141,198,63,0.3)]">{getPrice()}</div>
              </div>

              <div className="mb-5 md:mb-8 text-left">
                <div className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.16em] mb-2 md:mb-3 text-white/50">СПОСОБ ОПЛАТЫ</div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        "relative p-3 md:p-4 rounded-sm border transition-all text-[10px] md:text-xs uppercase font-bold h-12 md:h-14 flex items-center justify-center text-center",
                        method.id === 'card_intl' ? 'col-span-2' : '',
                        selectedMethod === method.id 
                          ? "border-[#8DC63F] bg-[#8DC63F]/10 text-[#8DC63F] shadow-[0_0_20px_rgba(141,198,63,0.2)]" 
                          : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30"
                      )}
                    >
                      {method.label}
                      {method.id === 'usdt' && (
                        <div className="absolute -top-3 left-[-4px] bg-[#8DC63F] text-black text-[9px] uppercase font-black px-1.5 md:px-2 py-0.5 rounded-[2px] tracking-wider">
                          СКИДКА 5%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Force flex-row so they are ALWAYS side-by-side even on very small screens */}
              <div className="flex flex-row gap-2 md:gap-4 mb-3 md:mb-4">
                <div className="flex-1 flex flex-col gap-1.5 md:gap-2 min-w-0">
                  <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-white/60 truncate">E-MAIL:</div>
                  <input type="email" placeholder="mail@.com" className="w-full bg-white/5 border border-white/10 rounded-sm px-3 md:px-4 py-2.5 md:py-3.5 text-[11px] md:text-sm text-white outline-none focus:border-[#8DC63F] focus:bg-[#8DC63F]/5 transition-all placeholder:text-white/20" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5 md:gap-2 min-w-0">
                  <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#8DC63F] truncate">* ТЕЛЕГРАМ (@):</div>
                  <input type="text" placeholder="@user" className="w-full bg-white/5 border border-white/10 rounded-sm px-3 md:px-4 py-2.5 md:py-3.5 text-[11px] md:text-sm text-white outline-none focus:border-[#8DC63F] focus:bg-[#8DC63F]/5 transition-all placeholder:text-white/20" />
                </div>
              </div>

              <div className="mt-4 md:mt-2 mb-5 md:mb-8 flex flex-col gap-1.5 md:gap-2">
                <div className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-white/60 truncate">КОММЕНТАРИЙ:</div>
                <input type="text" placeholder="..." className="w-full bg-transparent border-b border-white/10 pb-1.5 md:pb-2 text-[11px] md:text-sm text-white outline-none focus:border-b-white focus:border-[#8DC63F] transition-all placeholder:text-white/20" />
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 md:pt-2 gap-4">
                <a 
                  href="https://join.aimindset.org/waitlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] md:text-[10px] font-mono uppercase font-bold text-white/40 hover:text-[#8DC63F] transition-colors tracking-[0.16em] underline decoration-transparent hover:decoration-[#8DC63F] underline-offset-4 flex-shrink-0"
                >
                  СВЯЖИТЕСЬ С НАМИ
                </a>
                <button 
                  onClick={handleInitialPay}
                  className="px-6 md:px-8 py-3.5 md:py-4 bg-[#8DC63F] text-black text-xs md:text-sm font-black tracking-widest rounded-sm shadow-[0_0_20px_rgba(141,198,63,0.3)] hover:shadow-[0_0_40px_rgba(141,198,63,0.7)] hover:bg-[#9ded46] transition-all duration-300 uppercase hover:-translate-y-0.5 whitespace-nowrap"
                >
                  ОПЛАТИТЬ
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="qr" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col text-left">
              <div className="mb-5 md:mb-8">
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase leading-tight">ПЕРЕВЕДИТЕ {getPrice()}<br/>ПО АДРЕСУ:</h2>
                <div className="text-[10px] text-[#8DC63F] font-mono font-bold tracking-[0.16em] mt-1.5 uppercase">USDT (TRC20) PAYMENT</div>
              </div>
              
              <div className="bg-white/5 p-5 md:p-6 border border-white/10 rounded-lg mb-6 shadow-lg flex justify-center">
                 <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center text-white/40 text-[10px] font-mono font-bold tracking-[0.16em] border-2 border-dashed border-white/20 rounded-md">QR CODE</div>
              </div>
              
              <div className="w-full bg-black/50 border border-white/10 p-3 md:p-4 rounded-sm text-xs md:text-sm font-mono font-bold text-[#8DC63F] flex items-center justify-between mb-8 cursor-pointer hover:bg-white/5 transition-colors">
                 <span className="truncate mr-4 tracking-[0.05em]">T9yF8hQpA5vW2xZ1sE4dC7bN0mK3jL6uI9oP</span>
                 <div className="bg-white/10 text-white/80 px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs rounded-sm hover:bg-white/20 uppercase font-black tracking-[0.1em]">Copy</div>
              </div>
              
              <div className="flex flex-col gap-3 md:gap-4 mt-auto">
                 <button onClick={() => setSuccessState('usdt')} className="w-full py-3 md:py-4 bg-[#8DC63F] text-black text-xs md:text-sm font-black uppercase tracking-[0.1em] rounded-sm shadow-[0_0_20px_rgba(141,198,63,0.3)] hover:shadow-[0_0_40px_rgba(141,198,63,0.7)] hover:bg-[#9ded46] transition-all duration-300 hover:-translate-y-0.5">Я ОПЛАТИЛ</button>
                 <button onClick={() => setShowQR(false)} className="w-full text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-white/40 hover:text-white transition-colors text-center">ВЕРНУТЬСЯ К ВЫБОРУ</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
