import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

// Brutalist Wireframe Cube Animation
const WireframeCube = () => {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="-100 -100 200 200"
      className="mx-auto"
      animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 180] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <rect x="-40" y="-40" width="80" height="80" fill="none" stroke="black" strokeWidth="2" />
      <motion.rect 
        x="-40" y="-40" width="80" height="80" fill="none" stroke="#8DC63F" strokeWidth="4"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M-40,-40 L-20,-60 L60,-60 L40,-40 Z" fill="none" stroke="black" strokeWidth="2" />
      <path d="M40,-40 L60,-60 L60,20 L40,40 Z" fill="none" stroke="black" strokeWidth="2" />
    </motion.svg>
  );
};

// Brutalist Radar Pulsar Animation
const RadarPulse = () => {
  return (
    <div className="relative w-[120px] h-[120px] mx-auto flex items-center justify-center">
      <motion.div 
        className="absolute w-full h-full border-[4px] border-black rounded-full"
        animate={{ scale: [0.8, 1.5], opacity: [1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute w-full h-full border-[4px] border-[#8DC63F] rounded-full"
        animate={{ scale: [0.2, 1.2], opacity: [1, 0] }}
        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
      />
      <div className="w-8 h-8 bg-black rounded-full shadow-[0_0_15px_rgba(141,198,63,0.5)]"></div>
    </div>
  );
};

// ASCII Loading Text Effect
const AsciiLoader = () => {
  const frames = ['|', '/', '-', '\\'];
  const [frameIdx, setFrameIdx] = useState(0);
  
  useEffect(() => {
    const i = setInterval(() => setFrameIdx(f => (f + 1) % frames.length), 100);
    return () => clearInterval(i);
  }, []);
  
  return <span className="font-mono text-[#8DC63F] font-bold">[{frames[frameIdx]}]</span>;
};

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesktopPaymentPopup = ({ isOpen, onClose }: PaymentPopupProps) => {
  const [selectedMethod, setSelectedMethod] = useState('card_intl');
  const [showQR, setShowQR] = useState(false);
  const [successState, setSuccessState] = useState<'none' | 'card' | 'usdt'>('none');

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent backdrop-blur-[4px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        className="w-full max-w-[540px] bg-white border-[3px] border-black shadow-[12px_12px_0_0_#e5e5e5] relative flex flex-col font-mono text-black overflow-y-auto max-h-[90vh]"
      >
        {/* Top Header Bar */ }
        <div className="w-full h-14 border-b-[3px] border-black flex items-center justify-between px-6 bg-[#f4f4f4] flex-shrink-0">
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/70 flex items-center gap-3">
            <span className="w-2 h-2 bg-black inline-block animate-pulse rounded-full"></span>
            SYSTEM NOTICE
          </div>
          <button 
            onClick={handleClose}
            className="text-black font-black text-3xl md:text-4xl hover:text-[#8DC63F] hover:scale-110 transition-all leading-none focus:outline-none mb-1"
          >
            ×
          </button>
        </div>

        <div className="p-8 md:p-10 relative">
          {/* Decorative Glitchy Element */}
          <div className="absolute top-10 right-0 w-32 h-[2px] bg-black/5" />
          <div className="absolute top-12 right-0 w-16 h-[2px] bg-[#8DC63F]/20" />

          <AnimatePresence mode="wait">
            {successState !== 'none' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-2"
              >
                <div className="mb-10 w-full h-32 flex items-center justify-center">
                  {successState === 'usdt' ? <WireframeCube /> : <RadarPulse />}
                </div>
                
                <h3 className="text-[16px] md:text-[18px] font-black mb-8 uppercase tracking-tighter text-black bg-[#e5e5e5] inline-block px-4 py-2 border-[2px] border-black shadow-[4px_4px_0_0_#8DC63F]">
                  {successState === 'usdt' ? '// ОЖИДАНИЕ ТРАНЗАКЦИИ USDT' : '// ОПЛАТА УСПЕШНО ПРИНЯТА'}
                </h3>
                
                <div className="text-[12px] md:text-[13px] leading-relaxed font-bold mb-10 w-full border-l-4 border-black pl-5 text-left bg-[#f4f4f4] py-4 pr-4">
                  {successState === 'usdt' ? (
                     <>
                        <div className="flex items-center gap-2 mb-3">
                           <AsciiLoader /> <span className="text-black text-[14px]">Ожидаем подтверждения сети. Без паники.</span>
                        </div>
                        <span className="text-black/60 block mb-2">Мы установим связь по Telegram в течение 24ч для полной синхронизации протокола.</span>
                        <span className="text-black font-black bg-white px-2 py-1 border border-black inline-block tracking-[0.1em]">ID ЗАКАЗА: #1042X_SYS</span>
                     </>
                  ) : (
                     <>
                        <div className="flex items-center gap-2 mb-3">
                           <AsciiLoader /> <span className="text-black text-[14px]">Средства получены. Инструкции загружаются.</span>
                        </div>
                        <span className="text-black/60">Все дальнейшие инструкции и доступ будут отправлены в ваш Telegram. Ожидайте сообщения.</span>
                     </>
                  )}
                </div>

                <button 
                  onClick={handleClose}
                  className="w-full py-4 bg-black text-white text-[13px] font-black uppercase tracking-[0.2em] border-[2px] border-black hover:bg-white hover:text-black hover:shadow-[6px_6px_0_0_#8DC63F] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#8DC63F] transition-all"
                >
                  ЗАКРЫТЬ
                </button>
              </motion.div>

            ) : !showQR ? (
              <motion.div
                key="payment-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col"
              >
                {/* Header Sequence */}
                <div className="mb-10 text-center relative border-b-[2px] border-black/10 pb-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-[#8DC63F]">&gt; ОФОРМЛЕНИЕ ЗАКАЗА</div>
                  <h2 className="text-[22px] md:text-[26px] font-black leading-tight uppercase tracking-tighter text-black">
                    ЛАБОРАТОРИЯ<br/>ADVANCED X26
                  </h2>
                </div>

                {/* Methods Group */}
                <div className="mb-10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 text-black">СПОСОБ ОПЛАТЫ:</div>
                  <div className="grid grid-cols-2 gap-3">
                    {methods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={cn(
                          "relative p-4 border-[2px] text-[11px] font-black transition-all uppercase tracking-widest h-14 flex items-center justify-center text-center",
                          method.id === 'card_intl' ? 'col-span-2' : '',
                          selectedMethod === method.id 
                            ? "bg-[#8DC63F] border-black text-black shadow-[4px_4px_0_0_#000] scale-[1.02]" 
                            : "bg-white border-black/20 text-black/40 hover:border-black hover:text-black hover:shadow-[4px_4px_0_0_#e5e5e5]"
                        )}
                      >
                        {method.label}
                        {method.id === 'usdt' && (
                          <div className="absolute -top-3 left-[-8px] -rotate-3 bg-black border-[2px] border-black text-[#8DC63F] text-[9px] font-black px-2 py-0.5 shadow-[2px_2px_0_0_rgba(141,198,63,1)] whitespace-nowrap z-10">
                            СКИДКА 5%
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Group */}
                <div className="flex flex-col md:flex-row gap-5 mb-8">
                  <div className="flex-1 flex flex-col gap-2 relative">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black flex items-center gap-1 w-max">E-MAIL:</div>
                    <div className="bg-transparent border-b-[3px] border-black/20 h-10 flex items-end pb-2 focus-within:border-[#8DC63F] transition-all">
                      <input 
                        type="email" 
                        placeholder="example@mail.com"
                        className="w-full text-[13px] font-bold outline-none bg-transparent placeholder:text-black/30 text-black px-1"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 relative">
                    <div className="text-[10px] font-bold uppercase tracking-widest w-max p-0 text-black">
                      * НИК В TELEGRAM:
                    </div>
                    <div className="bg-transparent border-b-[3px] border-black/20 h-10 flex items-end pb-2 focus-within:border-[#8DC63F] transition-all">
                      <input 
                        type="text" 
                        placeholder="@username"
                        required
                        className="w-full text-[13px] font-bold outline-none bg-transparent placeholder:text-black/30 text-black px-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Comment Field */}
                <div className="mb-10 flex flex-col gap-2">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">КОММЕНТАРИЙ:</div>
                  <div className="bg-transparent border-b-[3px] border-black/20 h-10 flex items-end pb-2 focus-within:border-[#8DC63F] transition-all">
                    <input 
                      type="text" 
                      placeholder="..."
                      className="w-full text-[13px] font-bold outline-none bg-transparent placeholder:text-black/30 text-black px-1"
                    />
                  </div>
                </div>

                {/* Brutalist Footer */}
                <div className="flex items-end justify-between mt-auto pt-2">
                  <div className="flex flex-col">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-black/40 mb-1 uppercase">ИТОГО К ОПЛАТЕ:</div>
                    <div className="text-[26px] md:text-[30px] font-black tracking-tighter text-black leading-none bg-[#e5e5e5] px-3 py-1 border-[2px] border-black shadow-[4px_4px_0_0_#8DC63F]">
                      {getPrice()}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handlePay}
                    className="px-8 py-4 bg-black text-[#8DC63F] text-[13px] font-black uppercase tracking-[0.2em] border-[2px] border-black shadow-[4px_4px_0_0_#8DC63F] hover:shadow-[6px_6px_0_0_#8DC63F] hover:bg-[#8DC63F] hover:text-black hover:-translate-y-1 active:translate-y-[2px] active:shadow-[2px_2px_0_0_#8DC63F] transition-all"
                  >
                    ОПЛАТИТЬ
                  </button>
                </div>
              </motion.div>

            ) : (
              <motion.div
                key="qr-code"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col border-[3px] border-black p-6 bg-[#f9f9f9] shadow-[6px_6px_0_0_#e5e5e5]"
              >
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#8DC63F]">&gt; USDT_TRC20_PROTOCOL</div>
                <h3 className="text-[18px] font-black mb-6 leading-tight uppercase">ПЕРЕВЕДИТЕ {getPrice()} ПО АДРЕСУ:</h3>
                
                <div className="w-full bg-white p-6 border-[2px] border-black mb-6 flex justify-center shadow-inner">
                  <div className="w-40 h-40 flex items-center justify-center relative font-mono text-black/30 text-sm border-2 border-dashed border-black/30">
                     [ RENDER_QR ]
                     <div className="absolute top-0 left-0 w-2 h-2 bg-black"></div>
                     <div className="absolute top-0 right-0 w-2 h-2 bg-black"></div>
                     <div className="absolute bottom-0 left-0 w-2 h-2 bg-black"></div>
                     <div className="absolute bottom-0 right-0 w-2 h-2 bg-black"></div>
                  </div>
                </div>

                {/* Wallet Address */}
                <div className="w-full bg-black text-[#8DC63F] p-4 font-mono text-[11px] font-bold tracking-tight flex items-center justify-between mb-8 cursor-pointer hover:bg-black/80 transition-colors border-[2px] border-black">
                  <span>T9yF8hQpA5vW2xZ1sE4dC7bN0mK3jL6uI9oP</span>
                  <div className="bg-white/10 text-white px-2 py-1 text-[9px] hover:bg-white/30">СКОПИРОВАТЬ</div>
                </div>

                <div className="flex flex-col w-full gap-4">
                  <button 
                    onClick={() => setSuccessState('usdt')}
                    className="w-full py-4 bg-[#8DC63F] border-[2px] border-black text-black text-[13px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:bg-white hover:-translate-y-1 active:translate-y-[2px] active:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
                  >
                    Я ОПЛАТИЛ
                  </button>
                  <button 
                    onClick={() => setShowQR(false)}
                    className="w-full text-center text-[10px] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black hover:underline mt-2"
                  >
                    {'//'} ВЕРНУТЬСЯ НАЗАД
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

