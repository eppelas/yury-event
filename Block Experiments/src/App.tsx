import { DesktopTechUi } from './components/DesktopTechUi';
import { DesktopTechUiV2 } from './components/DesktopTechUiV2';
import { DesktopTechUiV4 } from './components/DesktopTechUiV4';
import { DesktopTechUiV5 } from './components/DesktopTechUiV5';
import { DesktopTimeline } from './components/DesktopTimeline';
import { DesktopTimelineV2 } from './components/DesktopTimelineV2';
import { DesktopReviews } from './components/DesktopReviews';
import { DesktopFaq } from './components/DesktopFaq';
import { DesktopEcosystemNavigatorV2 } from './components/DesktopEcosystemNavigatorV2';
import { DesktopMiniLabsNavigator } from './components/DesktopMiniLabsNavigator';
import { DesktopMiniLabsNavigatorV2 } from './components/DesktopMiniLabsNavigatorV2';
import { DesktopMicroLabsNavigator } from './components/DesktopMicroLabsNavigator';
import { DesktopWidgetLabsNavigator } from './components/DesktopWidgetLabsNavigator';
import { DesktopSidebar } from './components/DesktopSidebar';
import { DesktopPaymentPopup } from './components/DesktopPaymentPopup';
import { DesktopPaymentPopupV0 } from './components/DesktopPaymentPopupV0';
import { DesktopPaymentPopupV2 } from './components/DesktopPaymentPopupV2';
import { DesktopPaymentPopupV3 } from './components/DesktopPaymentPopupV3';
import { DesktopPaymentPopupV4 } from './components/DesktopPaymentPopupV4';
import { DesktopTechUiV6 } from './components/DesktopTechUiV6';
import { DesktopTechUiV7 } from './components/DesktopTechUiV7';
import { DesktopTechUiV8 } from './components/DesktopTechUiV8';
import { DesktopTechUiV9 } from './components/DesktopTechUiV9';
import { DesktopTechUiV10 } from './components/DesktopTechUiV10';
import { DesktopTechUiV12 } from './components/DesktopTechUiV12';
import { DesktopTechUiV13 } from './components/DesktopTechUiV13';
import { useState, useEffect } from 'react';

export default function App() {
  const [isPaymentOpenV0, setIsPaymentOpenV0] = useState(false);
  const [isPaymentOpenV1, setIsPaymentOpenV1] = useState(false);
  const [isPaymentOpenV2, setIsPaymentOpenV2] = useState(false);
  const [isPaymentOpenV3, setIsPaymentOpenV3] = useState(false);
  const [isPaymentOpenV4, setIsPaymentOpenV4] = useState(false);

  const [activeTab, setActiveTab] = useState('program');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#program-new') {
        setActiveTab('program_main');
      }
    };
    
    // Check initially
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const TABS = [
    { id: 'program', label: 'Программа до 24.03' },
    { id: 'program_main', label: 'Программа NEW' },
    { id: 'reviews', label: 'Отзывы участников' },
    { id: 'faq', label: 'FAQ' },
    { id: 'navigator', label: 'Labs Navigator' }
  ];

  return (
    <div className="flex min-h-screen bg-[#EAEAEA] font-sans">
      
      {/* Global Sidebar Menu */}
      <DesktopSidebar />

      {/* Main Scrollable Content */}
      <main className="flex-1 w-full min-w-0 py-12">
        <div className="max-w-[1340px] mx-auto px-8 mb-12">
          {/* Payment Popups Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black/95 mb-8">ПРИМЕРЫ ПОП-АПОВ ОПЛАТЫ</h2>
          <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setIsPaymentOpenV0(true)} className="px-6 py-4 bg-white border border-black/10 text-black/60 hover:text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all outline-none">
            [V0] ORIGINAL
          </button>
          <button onClick={() => setIsPaymentOpenV1(true)} className="px-6 py-4 bg-white border border-black/10 text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-md">
            [V1] BRUTALIST TECH
          </button>
          <button onClick={() => setIsPaymentOpenV2(true)} className="px-6 py-4 bg-black text-[#8DC63F] text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_#8DC63F]">
            [V2] NEON GLASSMORPHIC
          </button>
          <button onClick={() => setIsPaymentOpenV3(true)} className="px-6 py-4 bg-gradient-to-r from-white to-[#f5f5f5] rounded-full text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            [V3] SOFT 3D ANIMATED
          </button>
          <button onClick={() => setIsPaymentOpenV4(true)} className="px-6 py-4 bg-black border-4 border-white text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">
            [V4] SWISS MINIMAL
          </button>
        </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-black/10 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-bold text-xs uppercase tracking-widest transition-colors ${
                activeTab === tab.id 
                  ? 'bg-black text-white' 
                  : 'bg-transparent text-black/50 hover:bg-black/5 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === 'program' && (
          <div className="pt-8">
            <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">ПРОГРАММА ДО 24.03</h2>
            <DesktopTechUiV5 />
            
            <div className="flex flex-col gap-32 pt-32">
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 2</h2>
                <DesktopTechUi />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 3</h2>
                <DesktopTechUiV4 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 4</h2>
                <DesktopTechUiV2 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 5</h2>
                <DesktopTimeline />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 6</h2>
                <DesktopTimelineV2 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 8 (B1)</h2>
                <DesktopTechUiV8 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 9 (C3)</h2>
                <DesktopTechUiV9 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 10 (C2 / VARIANT 5 ANIMATED)</h2>
                <DesktopTechUiV10 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 12 (E1)</h2>
                <DesktopTechUiV12 />
              </div>
              <div>
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 13 (D4)</h2>
                <DesktopTechUiV13 />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'program_main' && (
          <div className="flex flex-col gap-32 pt-8 w-full items-center">
            
            <div className="w-full flex justify-center flex-col items-center">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">VERSION 6 (COMPACT LIST)</h2>
              <div className="w-full max-w-[1440px] flex justify-center">
                <DesktopTechUiV6 />
              </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">VERSION 7 (INNER SCROLL CARD)</h2>
              <div className="w-full max-w-[1200px] flex justify-center">
                <DesktopTechUiV7 />
              </div>
            </div>

          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="pt-8">
            <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">7. REVIEWS BLOCK (NEW)</h2>
            <DesktopReviews />
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="pt-8">
            <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">8. FAQ BLOCK (NEW)</h2>
            <DesktopFaq />
          </div>
        )}

        {activeTab === 'navigator' && (
          <div className="flex flex-col gap-32 pt-8">
            <div className="max-w-[800px] mx-auto text-center px-6">
              <p className="font-mono text-sm text-black/60 bg-black/5 p-4 rounded-md">
                Здесь собраны все итерации блока «Labs Navigator» от самого первого до новейшего компактного виджета. Пролистай вниз, чтобы увидеть их все!
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-black px-8 pb-12 text-black/30 uppercase tracking-tighter text-center">1. ECOSYSTEM NAVIGATOR (ORIGINAL)</h2>
              <DesktopEcosystemNavigatorV2 />
            </div>
            
            <div>
              <h2 className="text-3xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">2. MINI LABS NAVIGATOR (SCROLL)</h2>
              <DesktopMiniLabsNavigator />
            </div>
            
            <div>
              {/* No external title: requested internal title */}
              <DesktopMiniLabsNavigatorV2 />
            </div>
            
            <div>
              <h2 className="text-3xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">4. MICRO LABS GALLERY (ANIMATED ICONS)</h2>
              <DesktopMicroLabsNavigator />
            </div>
            
            <div>
              <h2 className="text-3xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">5. WIDGET LABS NAVIGATOR (IFRAME STYLE)</h2>
              <DesktopWidgetLabsNavigator />
            </div>
          </div>
        )}
      </div>

      <DesktopPaymentPopupV0 isOpen={isPaymentOpenV0} onClose={() => setIsPaymentOpenV0(false)} />
      <DesktopPaymentPopup isOpen={isPaymentOpenV1} onClose={() => setIsPaymentOpenV1(false)} />
        <DesktopPaymentPopupV2 isOpen={isPaymentOpenV2} onClose={() => setIsPaymentOpenV2(false)} />
        <DesktopPaymentPopupV3 isOpen={isPaymentOpenV3} onClose={() => setIsPaymentOpenV3(false)} />
        <DesktopPaymentPopupV4 isOpen={isPaymentOpenV4} onClose={() => setIsPaymentOpenV4(false)} />
      </main>
    </div>
  );
}
