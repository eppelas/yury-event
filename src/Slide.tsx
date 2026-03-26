import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData } from './types';
import { VISUAL_MAP } from './Visuals';
import { Quote, ArrowRight, Brain, Zap, Layers, User, Cpu, TriangleAlert, Waypoints, ArrowUpRight, CheckSquare, Square, Share2, ExternalLink, FileText, Database, Shield, File, Globe, Link2, Copy, Check } from 'lucide-react';

interface SlideProps {
  data: SlideData;
}

// --- LAYOUTS ---

// 0. COVER LAYOUT
const CoverLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    const Visual = VISUAL_MAP[data.visual];
    return (
        <div className="h-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
             {/* Background Element */}
             <div className="absolute right-[-10%] bottom-[-10%] w-[70vw] h-[70vw] opacity-[0.03] text-black dark:text-white pointer-events-none">
                <Visual />
             </div>

             {/* Top Status Bar */}
             <div className="flex justify-between items-start border-b border-black text-xs font-mono uppercase pb-4">
                <div>AI MINDSET + COMMUNITY</div>
                <div className="text-right">
                    <div>ARTIFACT_2025</div>
                    <div className="text-[#D80000] animate-pulse">STATUS: BUFFERING</div>
                </div>
             </div>

             {/* Main Title Area */}
             <div className="flex flex-col justify-center flex-grow z-10">
                <motion.h1 
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mb-8"
                >
                    THE<br/>
                    <span className="text-transparent stroke-text">CONTEXT</span><br/>
                    <span className="text-[#D80000]">GAP</span>
                </motion.h1>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl border-l-4 border-[#D80000] pl-6 py-2"
                >
                    <p className="text-2xl md:text-4xl font-bold uppercase leading-tight mb-2">
                        AI IS ACCELERATING.<br/>HUMANS ARE BUFFERING.
                    </p>
                    <p className="font-mono text-sm md:text-base opacity-60">
                        A sovereignty reset for people running their own life.
                    </p>
                </motion.div>
             </div>

             {/* Footer */}
             <div className="flex justify-between items-end">
                <div className="text-xs font-mono opacity-40 max-w-[200px]">
                    INTERACTIVE REPORT<br/>USE ARROW KEYS TO NAVIGATE
                </div>
                <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowRight size={32} />
                </motion.div>
             </div>
        </div>
    );
};

// 1. INTRO NOTE (Editorial Style)
const IntroNoteLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col p-8 md:p-16 bg-white dark:bg-[#050505]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
                {/* Left Col: Meta */}
                <div className="md:col-span-4 flex flex-col justify-between border-r border-gray-100 dark:border-white/10 pr-8">
                    <div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-[#D80000] uppercase mb-8">
                            {data.subtitle}
                        </h2>
                        <h1 className="text-4xl font-black uppercase tracking-tight leading-none mb-12">
                            {data.title}
                        </h1>
                        <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-sm">
                            <Quote className="text-[#D80000] mb-4" size={24} />
                            <p className="font-serif italic text-lg leading-relaxed opacity-80">
                                "If you only share one thing: share the slide that named your friction."
                            </p>
                        </div>
                    </div>
                    <div className="font-mono text-xs opacity-40">
                        READ TIME: 5 MIN
                    </div>
                </div>

                {/* Right Col: Content */}
                <div className="md:col-span-8 flex flex-col justify-center pl-4">
                     <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-2xl md:text-3xl font-medium leading-tight mb-8">
                            We made this because 2025 didn’t feel like a year. <span className="bg-[#D80000]/10 text-[#D80000] px-1">It felt like the year context became expensive.</span>
                        </p>
                        <div className="space-y-6 text-lg opacity-80 leading-relaxed whitespace-pre-line">
                            <p>Machines got faster at producing outputs.<br/>Humans got slower at holding meaning, attention, and coherent direction.</p>
                            
                            <div className="pl-6 border-l-2 border-black dark:border-white">
                                <p>This isn’t a “trends” deck. It’s closer to a navigation tool.</p>
                            </div>

                            <p>We’re not trying to predict the future with confidence theater. We’re trying to show <strong>what changed</strong>, <strong>why it matters</strong>, and <strong>what the human layer can do</strong> — so you can make better calls in 2026.</p>

                            <p className="font-mono text-sm pt-8">— AI Mindset (Research + Labs Team)</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

// 2. BLUEPRINT / MAP LAYOUT (Schematic Style)
const BlueprintLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col p-8 md:p-12 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
             {/* Grid Background */}
             <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

             <div className="relative z-10 flex flex-col h-full">
                <div className="mb-12 text-center">
                    <h2 className="font-mono text-xs text-[#D80000] tracking-widest uppercase mb-2">STRUCTURE</h2>
                    <h1 className="text-4xl md:text-5xl font-black uppercase">{data.title}</h1>
                </div>

                <div className="flex-grow flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-stretch">
                        
                        {/* Machine Block */}
                        <motion.div 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-white/5 border-2 border-black dark:border-white p-6 flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
                        >
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full mb-2"><Cpu size={20}/></div>
                            <h3 className="text-xl font-black uppercase">MACHINE SIGNAL</h3>
                            <p className="font-mono text-sm opacity-60">Capability / Deployment / Economics</p>
                        </motion.div>

                        {/* Gap Block */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center justify-center text-center relative"
                        >
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black dark:bg-white/20 -z-10 border-t-2 border-dashed border-gray-400"></div>
                            <div className="bg-[#D80000] text-white p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-xl z-20">
                                <TriangleAlert size={32} className="mb-2" />
                                <div className="font-black text-sm leading-none">THE<br/>CONTEXT<br/>GAP</div>
                            </div>
                            <div className="mt-8 bg-white dark:bg-black px-4 py-2 font-mono text-xs border border-gray-200">Where coordination breaks</div>
                        </motion.div>

                        {/* Human Block */}
                        <motion.div 
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-white/5 border-2 border-black dark:border-white p-6 flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] text-right items-end"
                        >
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full mb-2"><User size={20}/></div>
                            <h3 className="text-xl font-black uppercase">HUMAN SIGNAL</h3>
                            <p className="font-mono text-sm opacity-60">Cognition / Identity / Culture</p>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-4 font-mono text-[10px] opacity-50 text-center uppercase">
                    <div>NOT A HYPE DECK</div>
                    <div>NOT A MORAL PANIC</div>
                    <div>NOT A CONSULTING PDF</div>
                </div>
             </div>
        </div>
    );
};

// 3. DEFINITION LAYOUT (Equation Style)
const DefinitionLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col justify-center p-8 md:p-20 bg-white dark:bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto w-full">
                <div className="mb-8 font-mono text-[#D80000] uppercase tracking-widest">Core Definition</div>
                
                <div className="flex flex-col gap-0 border-l-8 border-black dark:border-white pl-8 md:pl-16 py-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-5xl font-black uppercase mb-2"
                    >
                        CONTEXT NEEDED <span className="text-gray-300 mx-2 font-light">BY SYSTEM</span>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl text-[#D80000] font-black my-2"
                    >
                        —
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-3xl md:text-5xl font-black uppercase mb-8"
                    >
                        CONTEXT CAPACITY <span className="text-gray-300 mx-2 font-light">OF HUMAN</span>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-6xl md:text-8xl font-black uppercase text-[#D80000] flex items-center gap-4"
                    >
                        = THE GAP
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-8"
                >
                    <div>
                        <div className="font-bold uppercase text-lg mb-1">TIME</div>
                        <div className="font-mono text-sm opacity-60">The non-renewable one</div>
                    </div>
                    <div>
                        <div className="font-bold uppercase text-lg mb-1">MONEY</div>
                        <div className="font-mono text-sm opacity-60">Busy ≠ Effective</div>
                    </div>
                    <div>
                        <div className="font-bold uppercase text-lg mb-1">REPUTATION</div>
                        <div className="font-mono text-sm opacity-60">Sloppy decisions</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// --- LOOP METAPHOR LAYOUT (Updated) ---
const MetaphorLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    const Visual = VISUAL_MAP[data.visual];
    return (
        <div className="h-full flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gray-50 dark:bg-[#050505]">
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
                 <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #D80000 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full max-w-[350px] aspect-square text-[#D80000] mb-12 relative"
            >
                <Visual />
            </motion.div>
            
            <div className="z-10 text-center max-w-4xl relative">
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-6"
                >
                    <span className="w-8 h-[1px] bg-gray-400"></span>
                    {data.subtitle}
                    <span className="w-8 h-[1px] bg-gray-400"></span>
                </motion.div>

                <motion.h1 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black dark:text-white"
                >
                    {data.title}
                </motion.h1>

                <motion.p 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.4 }}
                     className="text-xl md:text-2xl font-medium opacity-60 max-w-2xl mx-auto"
                >
                    {data.body}
                </motion.p>
            </div>
        </div>
    );
};


// --- LOOP DETAIL LAYOUT (Revised Footer) ---
const LoopLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    const { loopData } = data;
    if (!loopData) return null;

    return (
        <div className="h-full flex flex-col relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
            {/* Top Content Area */}
            <div className="flex-grow flex flex-col p-6 md:p-10 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-8 border-b border-gray-200 dark:border-white/10 pb-4 shrink-0">
                    <div>
                        <h2 className="text-xs font-bold tracking-widest text-[#D80000] uppercase mb-1 flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#D80000] rounded-full"></div>
                            PAIRED LOOP
                        </h2>
                        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">{data.title}</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* MACHINE */}
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-gray-400 border-b border-dashed border-gray-200 dark:border-white/20 pb-2">
                            <Cpu size={16} />
                            <span className="font-mono text-xs uppercase tracking-widest">MACHINE SIGNAL</span>
                        </div>
                        <div className="text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-200">
                            {loopData.machine.split('\n').map((line, i) => (
                                <p key={i} className="mb-4">{line}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* HUMAN */}
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="md:border-l md:border-gray-100 dark:border-white/5 md:pl-12"
                    >
                        <div className="flex items-center gap-2 mb-6 text-gray-400 border-b border-dashed border-gray-200 dark:border-white/20 pb-2">
                            <User size={16} />
                            <span className="font-mono text-xs uppercase tracking-widest">HUMAN SIGNAL</span>
                        </div>
                        <div className="text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-200">
                            {loopData.human.split('\n').map((line, i) => (
                                 <p key={i} className="mb-4">{line}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* THE RED FOOTER (Re-architected) */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-[#D80000] text-white p-6 md:p-8 shrink-0 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: GAP */}
                    <div className="md:col-span-8 flex flex-col gap-3">
                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60">
                            <TriangleAlert size={14} /> THE CONTEXT GAP
                        </div>
                        <p className="text-xl md:text-2xl font-bold leading-tight uppercase max-w-4xl">
                            {loopData.gap}
                        </p>
                    </div>

                    {/* Right: EVIDENCE LOG */}
                    <div className="md:col-span-4 md:border-l md:border-white/20 md:pl-8 flex flex-col gap-3">
                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
                            <Database size={14} /> EVIDENCE LOG
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            {loopData.sources?.map((src, i) => {
                                let Icon = Link2;
                                if (src.text.toLowerCase().includes('pdf') || src.text.toLowerCase().includes('arxiv')) Icon = FileText;
                                else if (src.text.toLowerCase().includes('report')) Icon = File;
                                else if (src.text.toLowerCase().includes('mindset')) Icon = Brain;
                                
                                return (
                                    <a 
                                        key={i} 
                                        href={src.url} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="group flex items-start gap-3 p-2 rounded hover:bg-black/20 transition-colors border border-transparent hover:border-white/10"
                                    >
                                        <div className="mt-1 opacity-60 group-hover:opacity-100"><Icon size={14} /></div>
                                        <div>
                                            <div className="text-xs md:text-sm font-bold leading-tight underline decoration-white/30 hover:decoration-white transition-all">
                                                {src.text}
                                            </div>
                                            {/* Show shortened domain or type if possible, else just 'Source' */}
                                            <div className="text-[10px] font-mono opacity-50 mt-1 uppercase">Source 0{i+1}</div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


// --- GALLERY LAYOUT (Click to Copy Tool) ---
const GalleryLayout: React.FC = () => {
    const allVisuals = Object.keys(VISUAL_MAP).filter(k => k !== 'none');
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (key: string, e: React.MouseEvent) => {
        // Find the SVG element within the clicked container
        const svgElement = e.currentTarget.querySelector('svg');
        if (svgElement) {
            const svgCode = svgElement.outerHTML;
            navigator.clipboard.writeText(svgCode).then(() => {
                setCopied(key);
                setTimeout(() => setCopied(null), 2000);
            });
        }
    };

    return (
      <div className="w-full h-full p-8 md:p-16 overflow-y-auto bg-white dark:bg-[#0a0a0a]">
        <div className="mb-12 border-l-4 border-[#D80000] pl-6 flex justify-between items-end">
            <div>
                <h1 className="text-4xl font-black uppercase">VISUAL METAPHOR INDEX</h1>
                <p className="text-xl mt-2 font-mono opacity-60">Click any component to copy SVG code.</p>
            </div>
            <div className="hidden md:block text-xs font-mono uppercase opacity-40">
                {allVisuals.length} COMPONENTS LOADED
            </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-24">
            {allVisuals.map(key => {
                const V = VISUAL_MAP[key];
                const isCopied = copied === key;
                
                return (
                    <motion.div 
                        key={key} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        onClick={(e) => handleCopy(key, e)}
                        className={`group relative flex flex-col items-center bg-gray-50 dark:bg-white/5 p-6 rounded transition-all cursor-pointer border ${isCopied ? 'border-[#D80000] ring-2 ring-[#D80000]' : 'border-gray-200 dark:border-white/10 hover:border-[#D80000]'}`}
                    >
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {isCopied ? <Check size={16} className="text-[#D80000]" /> : <Copy size={16} className="text-gray-400" />}
                        </div>

                        <div className="w-full aspect-square mb-4 text-gray-800 dark:text-gray-200 group-hover:scale-105 transition-transform duration-300">
                            <V />
                        </div>
                        <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${isCopied ? 'text-[#D80000] font-bold' : 'opacity-60 group-hover:text-[#D80000] group-hover:opacity-100'}`}>
                            {isCopied ? 'COPIED!' : key}
                        </span>
                    </motion.div>
                );
            })}
        </div>
      </div>
    );
};


// ... [Keep other Standard Layouts: GridStats, Comparative, Checklist, Statement - they work well] ...

const ComparativeLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col p-8 md:p-12 bg-white dark:bg-[#0a0a0a]">
            <div className="mb-8 border-l-4 border-[#D80000] pl-6">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{data.title}</h1>
                <p className="text-lg mt-2 opacity-60">{data.body}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
                {data.comparative?.map((col, i) => (
                    <motion.div 
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.2 }}
                        className="border-t-4 border-black dark:border-white pt-6 flex flex-col bg-gray-50 dark:bg-white/5 p-6"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-black uppercase leading-none mb-2">{col.header}</h3>
                            <span className="text-xs font-mono text-[#D80000] uppercase tracking-widest">{col.sub}</span>
                        </div>
                        
                        <div className="space-y-4 flex-grow">
                            {col.points.map((pt, j) => (
                                <p key={j} className="text-sm md:text-base leading-relaxed border-l-2 border-gray-200 dark:border-white/10 pl-3">
                                    {pt}
                                </p>
                            ))}
                        </div>

                        {col.footer && (
                            <div className="mt-8 pt-4 border-t border-gray-200 dark:border-white/10">
                                <span className="text-[10px] font-bold uppercase opacity-50 block mb-1">BLINDSPOT</span>
                                <span className="text-sm font-bold text-[#D80000]">{col.footer}</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const GridStatsLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col p-8 md:p-16 bg-white dark:bg-[#0a0a0a]">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">{data.title}</h1>
                <p className="text-xl opacity-60 max-w-2xl">{data.body}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex-grow">
                {data.gridStats?.map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                        <div className="text-4xl md:text-7xl font-black text-[#D80000] mb-4 tracking-tighter leading-none">
                            {stat.value}
                        </div>
                        <div className="h-1 w-12 bg-black dark:bg-white mb-6 group-hover:w-full transition-all duration-500 bg-opacity-20"></div>
                        <h3 className="text-lg md:text-xl font-bold uppercase mb-2">{stat.label}</h3>
                        <p className="text-sm md:text-base opacity-60 font-mono leading-relaxed">{stat.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const ChecklistLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col p-8 md:p-20 bg-gray-50 dark:bg-[#050505]">
            <div className="mb-12 flex justify-between items-end border-b border-gray-200 dark:border-white/10 pb-6">
                <div>
                     <span className="font-mono text-[#D80000] tracking-widest uppercase text-sm mb-2 block">{data.subtitle}</span>
                     <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">{data.title}</h1>
                </div>
                <div className="hidden md:block opacity-30">
                    <Share2 size={48} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 flex-grow overflow-y-auto">
                 {data.checklist?.map((item, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 border-b border-gray-200 dark:border-white/10 group hover:bg-white dark:hover:bg-white/5 transition-colors"
                     >
                        <div className="mt-1 text-[#D80000]">
                            {item.checked ? <CheckSquare size={24} /> : <Square size={24} />}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold uppercase mb-1">{item.label}</h3>
                            <p className="font-mono text-sm opacity-60">{item.text}</p>
                        </div>
                     </motion.div>
                 ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-xs font-mono uppercase opacity-50">
                <span>System v0.1</span>
                <span>AI Mindset Artifact</span>
            </div>
        </div>
    );
};

const StatementLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    const Visual = VISUAL_MAP[data.visual];
    return (
        <div className="h-full flex flex-col justify-center p-8 md:p-24 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
            <div className="absolute right-[-10%] top-[-10%] w-[60vh] h-[60vh] opacity-5 pointer-events-none">
                <Visual />
            </div>
            
            <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "120px" }} 
                transition={{ duration: 1, delay: 0.2 }}
                className="h-3 bg-[#D80000] mb-12" 
            />
            
            <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter max-w-6xl"
            >
                {data.title}
            </motion.h1>
            
            {data.body && (
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-2xl md:text-3xl font-medium opacity-60 max-w-4xl leading-tight"
                >
                    {data.body}
                </motion.p>
            )}
        </div>
    );
};

const ManifestoLayout: React.FC<{ data: SlideData }> = ({ data }) => {
    return (
        <div className="h-full flex flex-col justify-center p-8 md:p-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03]" 
                 style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}} 
            />
            
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-5xl"
            >
                <div className="w-16 h-2 bg-[#D80000] mb-8"></div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                    {data.title}
                </h1>
                <div className="text-xl md:text-3xl font-medium leading-relaxed opacity-80 whitespace-pre-line border-l-4 border-gray-200 dark:border-white/10 pl-6 md:pl-8">
                    {data.body}
                </div>
            </motion.div>
        </div>
    );
};

// --- MAIN COMPONENT ---

export const Slide: React.FC<SlideProps> = ({ data }) => {
  const isDark = data.dark;

  return (
    <div className={`w-full h-full transition-colors duration-700 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={data.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          {data.type === 'cover' && <CoverLayout data={data} />}
          {data.type === 'section' && <CoverLayout data={data} />}
          {data.type === 'quote' && <StatementLayout data={data} />} 
          {data.type === 'metaphor' && <MetaphorLayout data={data} />}
          {data.type === 'loop' && <LoopLayout data={data} />}
          {data.type === 'manifesto' && <ManifestoLayout data={data} />}
          
          {/* New Specific Layout Mappings */}
          {data.id === 'slide-1-note' && <IntroNoteLayout data={data} />}
          {data.id === 'slide-2-what-this-is' && <BlueprintLayout data={data} />}
          {data.id === 'slide-3-definition' && <DefinitionLayout data={data} />}
          
          {/* Fallbacks */}
          {data.type === 'text-density' && data.id !== 'slide-1-note' && <IntroNoteLayout data={data} />} 
          {data.type === 'grid-stats' && <GridStatsLayout data={data} />}
          {data.type === 'comparative' && <ComparativeLayout data={data} />}
          {data.type === 'statement' && data.id !== 'slide-3-definition' && <StatementLayout data={data} />}
          {data.type === 'checklist' && <ChecklistLayout data={data} />}
          {data.type === 'blueprint' && data.id !== 'slide-2-what-this-is' && <BlueprintLayout data={data} />}
          {data.type === 'gallery' && <GalleryLayout />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
