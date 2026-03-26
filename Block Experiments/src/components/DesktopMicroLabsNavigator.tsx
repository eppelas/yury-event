import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

// --- Animated Icon Components ---

const IconSpring = () => (
  <div className="flex items-end gap-2.5 h-12 w-12">
    <div className="flex flex-col justify-between h-[36px] w-[26px]">
      <motion.div 
         variants={{ initial: { width: "100%", backgroundColor: "rgba(0,0,0,1)" }, hover: { width: "60%", backgroundColor: "#8DC63F" } }} 
         className="h-px origin-left" 
      />
      <div className="flex gap-1.5 mb-1">
          <motion.div variants={{ initial: { y: 0 }, hover: { y: -8, backgroundColor: "#8DC63F" } }} transition={{ duration: 0.2 }} className="w-[4px] h-[4px] bg-black" />
          <motion.div variants={{ initial: { y: 0 }, hover: { y: -16, backgroundColor: "#8DC63F" } }} transition={{ duration: 0.3 }} className="w-[4px] h-[4px] bg-black" />
          <motion.div variants={{ initial: { y: 0 }, hover: { y: -10, backgroundColor: "#8DC63F" } }} transition={{ duration: 0.25 }} className="w-[4px] h-[4px] bg-black" />
      </div>
    </div>
    <motion.div 
      variants={{ initial: { height: 36, backgroundColor: "#3B5F19" }, hover: { height: 48, backgroundColor: "#8DC63F" } }} 
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="w-[6px]" 
    />
  </div>
);

const IconPersonal = () => (
  <div className="flex flex-col gap-[6px] justify-center h-12 w-12 pl-1 relative">
    <motion.div variants={{ initial: { width: 36, x: 0, backgroundColor: "#3B5F19" }, hover: { width: 44, x: 6, backgroundColor: "#8DC63F" } }} transition={{ type: "spring" }} className="h-[6px]" />
    <motion.div variants={{ initial: { width: 36, x: 0, backgroundColor: "rgba(0,0,0,1)" }, hover: { width: 24, x: 0, backgroundColor: "rgba(0,0,0,0.2)" } }} transition={{ type: "spring", delay: 0.05 }} className="h-[6px]" />
    <motion.div variants={{ initial: { width: 36, x: 0, backgroundColor: "rgba(0,0,0,1)" }, hover: { width: 40, x: 4, backgroundColor: "rgba(0,0,0,0.6)" } }} transition={{ type: "spring", delay: 0.1 }} className="h-[6px]" />
  </div>
);

const IconAiNative = () => (
  <motion.div 
    variants={{ initial: { rotate: 0 }, hover: { rotate: 90 } }} 
    transition={{ type: "spring", stiffness: 200, damping: 20 }} 
    className="relative w-12 h-12 flex items-center justify-center"
  >
    <motion.div variants={{ initial: { scale: 1, borderColor: "rgba(0,0,0,0.15)", borderStyle: "solid" }, hover: { scale: 1.15, borderColor: "#8DC63F", borderStyle: "dashed" } }} className="absolute inset-1.5 rounded-full border" />
    <div className="absolute w-[85%] h-[1.5px] bg-black/10" />
    <div className="absolute h-[85%] w-[1.5px] bg-black/10" />
    <motion.div variants={{ initial: { scale: 1, backgroundColor: "#3B5F19" }, hover: { scale: 1.8, backgroundColor: "#8DC63F" } }} className="w-1.5 h-1.5 rounded-full z-10" />
    <motion.div variants={{ initial: { scale: 1, x: 0, y: 0 }, hover: { scale: 1.5, x: -2, y: -2, backgroundColor: "#8DC63F" } }} className="absolute top-0.5 left-0.5 w-[2.5px] h-[2.5px] bg-black" />
    <motion.div variants={{ initial: { scale: 1, x: 0, y: 0 }, hover: { scale: 1.5, x: 2, y: -2, backgroundColor: "#8DC63F" } }} className="absolute top-0.5 right-0.5 w-[2.5px] h-[2.5px] bg-black" />
    <motion.div variants={{ initial: { scale: 1, x: 0, y: 0 }, hover: { scale: 1.5, x: -2, y: 2, backgroundColor: "#8DC63F" } }} className="absolute bottom-0.5 left-0.5 w-[2.5px] h-[2.5px] bg-black" />
    <motion.div variants={{ initial: { scale: 1, x: 0, y: 0 }, hover: { scale: 1.5, x: 2, y: 2, backgroundColor: "#8DC63F" } }} className="absolute bottom-0.5 right-0.5 w-[2.5px] h-[2.5px] bg-black" />
  </motion.div>
);

// --- Data ---

const TABS = ['CURRENT', 'FUTURE', 'ARCHIVE'];

const ALL_LABS = {
  CURRENT: [
    { id: 'c1', title: 'Spring Main Lab', desc: 'Набор открыт', icon: <IconSpring /> },
    { id: 'c2', title: '{personal OS}', desc: 'Операционная система внимания', icon: <IconPersonal /> },
    { id: 'c3', title: '{ai-native orgs}', desc: 'AI-практики для команд', icon: <IconAiNative /> }
  ],
  FUTURE: [
    { id: 'f1', title: 'Summer Agents', desc: 'Запуск в июне 2026', icon: <IconSpring /> },
    { id: 'f2', title: 'Data Arch', desc: 'Проектирование систем', icon: <IconPersonal /> },
    { id: 'f3', title: 'Automations', desc: 'No-code workflows', icon: <IconAiNative /> }
  ],
  ARCHIVE: [
    { id: 'a1', title: 'Winter Lab W25', desc: 'Успешно завершен', icon: <IconAiNative /> },
    { id: 'a2', title: 'Autumn MVP', desc: 'Архив', icon: <IconSpring /> },
    { id: 'a3', title: 'Genesis Lab', desc: 'Архив', icon: <IconPersonal /> }
  ]
};

export const DesktopMicroLabsNavigator = () => {
  const [activeTab, setActiveTab] = useState<string>('CURRENT');

  return (
    <div className="w-full bg-[#f3f3f5] py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-6">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/20 pb-4 gap-6">
          <div>
            <div className="text-[#8DC63F] font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#8DC63F] animate-pulse"></span>
              SYSTEM // ECOSYSTEM DIRECTORY
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black leading-none">
              LABS NAVIGATOR
            </h2>
          </div>
          
          <div className="flex gap-2 font-mono text-[10px] uppercase tracking-widest font-bold">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 border transition-colors",
                  activeTab === tab 
                    ? "bg-black text-[11px] text-[#8DC63F] border-black" 
                    : "bg-white text-black/50 border-black/15 hover:border-black/40 hover:text-black"
                )}
              >
                [{tab}]
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Slider */}
        <div className="w-full overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x outline-none min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex gap-6 w-max"
            >
              {ALL_LABS[activeTab as keyof typeof ALL_LABS].map((lab) => (
                <motion.a 
                  key={lab.id}
                  href="#"
                  initial="initial"
                  whileHover="hover"
                  variants={{
                    initial: { y: 0, borderColor: "rgba(0,0,0,0.15)", boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                    hover: { y: -4, borderColor: "rgba(0,0,0,0.3)", boxShadow: "0px 12px 24px rgba(0,0,0,0.06)" }
                  }}
                  className="w-[200px] h-[170px] bg-white border p-5 flex flex-col justify-between snap-start shrink-0 relative group"
                >
                  {/* Status */}
                  <div className="absolute top-5 right-5 font-mono text-[8px] uppercase tracking-[0.2em] text-black/30 group-hover:text-black/60 transition-colors">
                    {activeTab}
                  </div>

                  {/* Icon */}
                  <div className="mb-auto mt-0 origin-top-left">
                    {lab.icon}
                  </div>

                  {/* Text */}
                  <div className="mt-4">
                    <motion.h3 
                      variants={{ initial: { color: "#000" }, hover: { color: "#8DC63F" } }}
                      className="text-[16px] leading-[1.1] font-bold tracking-tight mb-1"
                    >
                      {lab.title}
                    </motion.h3>
                    <p className="text-[11px] leading-[1.2] text-black/50 font-medium font-sans">
                      {lab.desc}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Browse All Anchor */}
              <motion.a 
                href="#"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                className="w-[200px] h-[170px] bg-white/40 border border-black/5 p-5 flex flex-col justify-center items-center text-center snap-start shrink-0 border-dashed transition-colors"
              >
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                    className="text-black/20 font-mono text-[24px] mb-1"
                  >
                    +
                  </motion.div>
                  <div className="text-black/30 font-mono text-[8px] font-bold tracking-[0.3em] uppercase mt-2">
                    ALL {activeTab}
                  </div>
              </motion.a>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
