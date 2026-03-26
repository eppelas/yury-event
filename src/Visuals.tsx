
import React from 'react';
import { motion } from 'framer-motion';
import { VisualProps } from './types';

// ============================================================================
// 🔒 BASELINE CONFIGURATION - DO NOT REDUCE 🔒
// ============================================================================
// STATUS: GOLD STANDARD (51 Metaphors)
// STYLE: Cinematic / Operational Swiss (High Fidelity)
// LAYERS: BlurObject, Atmosphere, ParticleSystem, CinemaDefs (Glow/Noise)
//
// RULE: Future updates may ADD new metaphors or TWEAK styling, 
// but MUST NOT reduce the metaphor count or remove the complex rendering layers.
// This file represents the minimum acceptable quality bar.
// ============================================================================

// --- PHYSICS CONFIG ---
const SPIN_SLOW = { duration: 40, repeat: Infinity, ease: "linear" as const };
const SPIN_MID = { duration: 15, repeat: Infinity, ease: "linear" as const };
const SPIN_FAST = { duration: 4, repeat: Infinity, ease: "linear" as const };
const PULSE_FAST = { duration: 0.8, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const }; 
const PULSE_SLOW = { duration: 3, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
const FLOAT = { duration: 6, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
const SCAN_X = { duration: 3, repeat: Infinity, repeatType: "mirror" as const, ease: "linear" as const };
const SCAN_Y = { duration: 4, repeat: Infinity, repeatType: "mirror" as const, ease: "linear" as const };

const RED = "#DC2626"; 
const BLUE = "#0055FF";

// --- CINEMATIC UTILS ---

const ParticleSystem: React.FC<{ count: number; spread: number; color?: string }> = ({ count, spread, color = RED }) => (
    <g className="particles" style={{ mixBlendMode: 'screen' }}>
        {Array.from({ length: count }).map((_, i) => {
            const r = Math.random() * 1.5 + 0.5; 
            const x = 50 + (Math.random() - 0.5) * spread;
            const y = 50 + (Math.random() - 0.5) * spread;
            return (
                <motion.circle 
                    key={i} cx={x} cy={y} r={r} fill={Math.random() > 0.8 ? color : "currentColor"}
                    opacity={Math.random() * 0.5}
                    animate={{ y: [y, y - 10, y], opacity: [0, 0.8, 0] }}
                    transition={{ duration: 3 + Math.random() * 4, delay: Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
                />
            );
        })}
    </g>
);

const BlurObject: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <g filter="url(#blur-heavy)" opacity="0.4" style={{ mixBlendMode: 'screen' }}>
        {children}
    </g>
);

const AtmosphereLayer: React.FC<{ color?: string }> = ({ color = RED }) => {
    const colorId = color.replace('#', '');
    return (
        <g className="atmosphere" pointerEvents="none">
            <motion.circle cx="50" cy="50" r="45" fill={`url(#grad-glow-radial-${colorId})`} opacity="0.4" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={PULSE_SLOW} />
            <rect x="0" y="0" width="100" height="100" fill="url(#grad-corner)" opacity="0.3" />
        </g>
    );
};

const CinemaDefs: React.FC<{ color?: string }> = ({ color = RED }) => {
    const colorId = color.replace('#', '');
    return (
        <defs>
            <filter id="glow-layer" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="blur-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
            </filter>
            
            <linearGradient id={`grad-radar-${colorId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} stopOpacity="0" />
                <stop offset="100%" stopColor={color} stopOpacity="0.5" />
            </linearGradient>
            
            <radialGradient id={`grad-glow-radial-${colorId}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            
            <radialGradient id="grad-corner" cx="0%" cy="0%" r="90%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            
            <pattern id="grid-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" opacity="0.1"/>
            </pattern>
        </defs>
    );
};

const VisualWrapper: React.FC<{ children: React.ReactNode; variant?: 'simple'|'complex'; accentColor?: string }> = ({ children, variant, accentColor = RED }) => {
    const isComplex = variant === 'complex';

    if (!isComplex) {
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(50 50) scale(0.9) translate(-50 -50)">
                    {children}
                </g>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
            <CinemaDefs color={accentColor} />
            <AtmosphereLayer color={accentColor} />
            <g transform="translate(50 50) scale(0.85) translate(-50 -50)">
                {children}
            </g>
            <ParticleSystem count={15} spread={90} color={accentColor} />
            <rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)" opacity="0.15" pointerEvents="none" />
        </svg>
    );
};

// ============================================================================
// NEW EXPANSION VISUALS
// ============================================================================

export const BalanceVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="10" y="55" width="80" height="4" fill={RED} opacity="0.2" animate={{ rotate: [5, -5, 5] }} transition={FLOAT} style={{ originX: "50px", originY: "57px" }} /></BlurObject>}
        <polygon points="50,55 45,70 55,70" fill="currentColor" />
        <motion.g animate={{ rotate: [5, -5, 5] }} transition={FLOAT} style={{ originX: "50px", originY: "55px" }}>
             <rect x="10" y="53" width="80" height="4" fill="currentColor" />
             <motion.circle cx="15" cy="48" r="8" fill={RED} animate={{ x: [0, 5, 0] }} transition={PULSE_SLOW} />
             <rect x="75" y="43" width="10" height="10" fill="currentColor" />
        </motion.g>
    </VisualWrapper>
);

export const PerspectiveVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="2" fill={RED} animate={{ scale: [1, 3, 1] }} transition={PULSE_FAST} /></BlurObject>}
        <circle cx="50" cy="50" r="2" fill={RED} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rot, i) => (
             <motion.line 
                key={i} x1="50" y1="50" x2="50" y2="10" 
                stroke="currentColor" strokeWidth="0.5" 
                transform={`rotate(${rot} 50 50)`}
                opacity="0.5"
             />
        ))}
        <motion.rect 
            x="40" y="40" width="20" height="20" 
            stroke="currentColor" strokeWidth="1" fill="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect 
            x="40" y="40" width="20" height="20" 
            stroke={RED} strokeWidth="1" fill="none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "linear" }}
        />
    </VisualWrapper>
);

export const KnotVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
         {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="30" stroke={RED} strokeWidth="4" fill="none" animate={{ rotate: -360 }} transition={SPIN_SLOW} /></BlurObject>}
         <motion.path 
            d="M50 20 C 80 20, 80 80, 50 80 C 20 80, 20 20, 50 20" 
            fill="none" stroke="currentColor" strokeWidth="1" 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
            transition={SPIN_SLOW}
            style={{ originX: "50px", originY: "50px" }}
         />
         <motion.path 
            d="M20 50 C 20 20, 80 20, 80 50 C 80 80, 20 80, 20 50" 
            fill="none" stroke={RED} strokeWidth="2" 
            animate={{ rotate: -360, scale: [1.1, 1, 1.1] }} 
            transition={SPIN_SLOW}
            style={{ originX: "50px", originY: "50px" }}
         />
         <circle cx="50" cy="50" r="5" fill="currentColor" />
    </VisualWrapper>
);

export const VelocityVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
         {variant==='complex' && <BlurObject><motion.rect x="0" y="40" width="100" height="20" fill={RED} opacity="0.1" animate={{ x: [-10, 10] }} transition={PULSE_FAST} /></BlurObject>}
         <circle cx="50" cy="50" r="8" fill="currentColor" />
         {[10, 30, 70, 90].map((y, i) => (
             <motion.line 
                key={i} x1="-20" y1={y} x2="20" y2={y} 
                stroke={i % 2 === 0 ? "currentColor" : RED} strokeWidth="2"
                initial={{ x: -50 }}
                animate={{ x: 150 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
             />
         ))}
    </VisualWrapper>
);


// ============================================================================
// BODY & MOVEMENT (BLUE SERIES)
// ============================================================================

export const OriginVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.rect x="40" y="20" width="20" height="40" rx="10" fill={BLUE} opacity="0.3" animate={{ height: [40, 50, 40] }} transition={PULSE_SLOW} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.rect x="-5" y="-30" width="10" height="40" rx="5" fill={BLUE} animate={{ height: [40, 45, 40], y: [-30, -35, -30] }} transition={PULSE_FAST} />
            <circle cx="-10" cy="15" r="10" fill="currentColor" opacity="0.8" />
            <circle cx="10" cy="15" r="10" fill="currentColor" opacity="0.8" />
            <motion.circle r="3" fill="white" animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        </g>
    </VisualWrapper>
);

export const PostureVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.path d="M50 10 Q 70 50 50 90" stroke={BLUE} strokeWidth="6" fill="none" opacity="0.4" animate={{ d: ["M50 10 Q 70 50 50 90", "M50 10 Q 30 50 50 90", "M50 10 Q 70 50 50 90"] }} transition={FLOAT} />
            </BlurObject>
        )}
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
        <motion.line x1="50" y1="10" x2="50" y2="90" stroke={BLUE} strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={PULSE_SLOW} />
        <motion.circle cx="50" cy="10" r="4" fill={BLUE} animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} />
        <motion.circle cx="50" cy="90" r="4" fill={BLUE} animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const RhythmVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
             <BlurObject>
                <motion.rect x="0" y="40" width="100" height="20" fill={BLUE} opacity="0.2" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={PULSE_FAST} />
             </BlurObject>
        )}
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        {[20, 35, 50, 65, 80].map((x, i) => (
            <motion.rect 
                key={i} 
                x={x-3} y={50} width="6" height="0" 
                fill={BLUE} 
                animate={{ y: [50, 50 - (i % 2 === 0 ? 30 : 15), 50], height: [0, (i % 2 === 0 ? 60 : 30), 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }} 
            />
        ))}
    </VisualWrapper>
);

export const TensionVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.line x1="10" y1="50" x2="90" y2="50" stroke={BLUE} strokeWidth="4" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={PULSE_FAST} />
            </BlurObject>
        )}
        <motion.circle cx="10" cy="50" r="8" fill={BLUE} animate={{ x: [0, -5, 0] }} transition={PULSE_FAST} />
        <motion.circle cx="90" cy="50" r="8" fill={BLUE} animate={{ x: [0, 5, 0] }} transition={PULSE_FAST} />
        <motion.line 
            x1="18" y1="50" x2="82" y2="50" 
            stroke="currentColor" strokeWidth="2" 
            animate={{ strokeWidth: [2, 1, 2] }} 
            transition={PULSE_FAST} 
        />
    </VisualWrapper>
);

export const FlowVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
             <BlurObject>
                <motion.path d="M10 80 C 40 80, 40 20, 90 20" stroke={BLUE} strokeWidth="8" fill="none" opacity="0.3" />
             </BlurObject>
        )}
        <path d="M10 80 C 40 80, 40 20, 90 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        {[0, 1, 2].map(i => (
            <motion.circle 
                key={i} r="4" fill={BLUE}
                animate={{ offsetDistance: "100%" }}
                style={{ offsetPath: "path('M10 80 C 40 80, 40 20, 90 20')" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
            />
        ))}
    </VisualWrapper>
);

export const ResistanceVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.rect x="30" y="20" width="40" height="20" fill={BLUE} opacity="0.4" animate={{ y: [0, 5, 0] }} transition={PULSE_SLOW} />
            </BlurObject>
        )}
        <motion.rect x="30" y="20" width="40" height="20" fill={BLUE} animate={{ y: [20, 35, 20] }} transition={PULSE_SLOW} />
        <motion.circle cx="50" cy="80" r="20" fill="none" stroke="currentColor" strokeWidth="2" animate={{ ry: [20, 15, 20], cy: [80, 85, 80] }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const SymmetryVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <circle cx="50" cy="50" r="40" stroke={BLUE} strokeWidth="1" fill="none" />
            </BlurObject>
        )}
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
        <motion.path d="M50 50 L 30 30 L 30 70 Z" fill={BLUE} animate={{ x: [-10, 0, -10] }} transition={PULSE_SLOW} />
        <motion.path d="M50 50 L 70 30 L 70 70 Z" stroke="currentColor" strokeWidth="2" fill="none" animate={{ x: [10, 0, 10] }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const RangeVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.path d="M20 50 A 30 30 0 0 1 80 50" stroke={BLUE} strokeWidth="10" fill="none" opacity="0.2" />
            </BlurObject>
        )}
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <motion.line x1="50" y1="50" x2="80" y2="50" stroke={BLUE} strokeWidth="4" animate={{ rotate: 180 }} style={{ originX: "50px", originY: "50px" }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
        <path d="M20 50 A 30 30 0 0 1 80 50" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.5" />
    </VisualWrapper>
);

export const RespirationVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                 <motion.circle cx="50" cy="50" r="30" fill={BLUE} opacity="0.3" animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} />
            </BlurObject>
        )}
        <motion.circle cx="50" cy="50" r="20" stroke={BLUE} strokeWidth="2" fill="none" animate={{ r: [20, 35, 20], opacity: [1, 0.5, 1] }} transition={PULSE_SLOW} />
        <motion.circle cx="50" cy="50" r="10" fill={BLUE} animate={{ r: [10, 15, 10] }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const ContractionVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
             <BlurObject>
                <rect x="30" y="20" width="40" height="60" fill={BLUE} opacity="0.1" />
             </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.line x1="-15" y1="-30" x2="-5" y2="30" stroke={BLUE} strokeWidth="4" strokeLinecap="round" animate={{ x1: [-20, -10, -20], x2: [-10, -5, -10] }} transition={PULSE_FAST} />
            <motion.line x1="0" y1="-30" x2="0" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <motion.line x1="15" y1="-30" x2="5" y2="30" stroke={BLUE} strokeWidth="4" strokeLinecap="round" animate={{ x1: [20, 10, 20], x2: [10, 5, 10] }} transition={PULSE_FAST} />
        </g>
    </VisualWrapper>
);

export const GaitVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.circle cx="50" cy="50" r="20" stroke={BLUE} strokeWidth="2" fill="none" strokeDasharray="10 5" animate={{ rotate: 360 }} transition={SPIN_SLOW} />
            </BlurObject>
        )}
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
        <motion.circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" fill="none" animate={{ rotate: 360 }} transition={SPIN_MID} />
        <motion.circle cx="65" cy="50" r="5" fill={BLUE} animate={{ rotate: 360 }} style={{ originX: "-15px", originY: "0px" }} transition={SPIN_MID} />
    </VisualWrapper>
);

// ============================================================================
// VISUALS (RED SERIES - UTILITIES & LOOPS)
// ============================================================================

export const OrbitVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="30" stroke={RED} strokeWidth="1" fill="none" animate={{ rotate: 360 }} transition={SPIN_SLOW} /></BlurObject>}
        <motion.circle cx="50" cy="50" r="10" fill={RED} animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} />
        <motion.circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" animate={{ rotate: 360 }} transition={SPIN_MID} />
        <motion.circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" animate={{ rotate: -360 }} transition={SPIN_SLOW} />
        <motion.circle cx="75" cy="50" r="4" fill="currentColor" animate={{ rotate: 360 }} style={{ originX: "-25px", originY: "0px" }} transition={SPIN_MID} />
    </VisualWrapper>
);

export const FilterVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><polygon points="20,20 80,20 55,60 55,90 45,90 45,60" fill={RED} opacity="0.2" /></BlurObject>}
        <polygon points="20,20 80,20 55,60 55,90 45,90 45,60" stroke="currentColor" strokeWidth="2" fill="none" />
        {[0, 1, 2].map(i => (
             <motion.circle key={i} cx="50" cy="20" r="2" fill={RED} animate={{ y: [0, 40, 70], opacity: [1, 1, 0] }} transition={{ duration: 3, delay: i, repeat: Infinity }} />
        ))}
    </VisualWrapper>
);

export const TargetVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="40" stroke={RED} strokeWidth="4" fill="none" animate={{ scale: [1, 0.9, 1] }} transition={PULSE_FAST} /></BlurObject>}
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <motion.circle cx="50" cy="50" r="20" stroke={RED} strokeWidth="2" fill="none" animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.5, 1, 0.5] }} transition={PULSE_FAST} />
    </VisualWrapper>
);

export const EchoVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="40" stroke={RED} strokeWidth="2" fill="none" animate={{ opacity: [0, 0.5, 0] }} transition={PULSE_SLOW} /></BlurObject>}
        <circle cx="50" cy="50" r="5" fill={RED} />
        {[1, 2, 3].map(i => (
             <motion.circle key={i} cx="50" cy="50" r={i * 12} stroke="currentColor" strokeWidth="1" fill="none" animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }} />
        ))}
    </VisualWrapper>
);

export const LayerVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="30" y="30" width="40" height="40" fill={RED} opacity="0.2" animate={{ y: [-5, 5] }} transition={FLOAT} /></BlurObject>}
        {[0, 1, 2].map(i => (
             <motion.rect key={i} x={30 - i*5} y={50 - i*10} width="40" height="20" fill="none" stroke={i===2 ? RED : "currentColor"} strokeWidth="2" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }} />
        ))}
    </VisualWrapper>
);

export const CycleVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="35" stroke={RED} strokeWidth="4" fill="none" animate={{ rotate: 360 }} transition={SPIN_SLOW} /></BlurObject>}
        <motion.path d="M50 15 A 35 35 0 1 1 15 50" stroke="currentColor" strokeWidth="2" fill="none" />
        <motion.path d="M15 50 A 35 35 0 0 1 50 15" stroke={RED} strokeWidth="2" fill="none" strokeDasharray="5 5" animate={{ rotate: 360 }} transition={SPIN_MID} style={{ originX: "50px", originY: "50px" }} />
        <polygon points="50,10 50,20 60,15" fill={RED} />
    </VisualWrapper>
);

export const GrowthVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="70" y="20" width="15" height="60" fill={RED} opacity="0.3" animate={{ height: [60, 70, 60], y: [20, 10, 20] }} transition={PULSE_SLOW} /></BlurObject>}
        <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="2" />
        {[0, 1, 2, 3].map(i => (
             <motion.rect key={i} x={20 + i*18} y={80} width="10" height={0} fill={i===3 ? RED : "currentColor"} animate={{ height: [0, 20 + i*15], y: [80, 80 - (20 + i*15)] }} transition={{ duration: 1.5, delay: i*0.2, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }} />
        ))}
    </VisualWrapper>
);

export const GlobeVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                 <motion.circle cx="50" cy="50" r="35" fill="none" stroke={RED} strokeWidth="4" animate={{ rotate: -360 }} transition={SPIN_SLOW} />
             </BlurObject>
        )}
        <motion.path d="M50 50 L50 5 A45 45 0 0 1 95 50 Z" fill={`url(#grad-radar-${RED.replace('#', '')})`} opacity="0.4" animate={{ rotate: 360 }} transition={SPIN_FAST} style={{ originX: "50px", originY: "50px" }} />
        <motion.circle cx="50" cy="50" r="34.6" fill={RED} opacity="0.1" filter={variant==='complex'?"url(#glow-layer)":""} animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }} transition={PULSE_FAST} />
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="32" ry="10" stroke="currentColor" strokeWidth="0.2" fill="none" opacity="0.3" />
        <motion.path d="M50 18 A 32 32 0 0 1 82 50" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ originX: "50px", originY: "50px" }} />
        <motion.path d="M50 82 A 32 32 0 0 1 18 50" stroke={RED} strokeWidth="1.5" fill="none" filter={variant==='complex'?"url(#glow-layer)":""} opacity="0.8" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ originX: "50px", originY: "50px" }} />
    </VisualWrapper>
);

export const NetworkVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                 <motion.circle cx="50" cy="50" r="25" fill={RED} opacity="0.3" animate={{ scale: [0.8, 1.5, 0.8] }} transition={PULSE_SLOW} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.circle r="10" fill="none" stroke={RED} strokeWidth="0.5" animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle r="20" fill="none" stroke={RED} strokeWidth="0.5" animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            <line x1="-30" y1="-20" x2="30" y2="20" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
            <line x1="-30" y1="20" x2="30" y2="-20" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
            <motion.circle cx="-30" cy="-20" r="2" fill="currentColor" animate={{ x: [-2, 2], y: [-2, 2] }} transition={FLOAT} />
            <motion.circle cx="30" cy="20" r="2" fill="currentColor" animate={{ x: [2, -2], y: [2, -2] }} transition={{ ...FLOAT, delay: 0.5 }} />
            <motion.circle cx="-30" cy="20" r="2" fill="currentColor" animate={{ x: [-2, 2], y: [2, -2] }} transition={{ ...FLOAT, delay: 1 }} />
            <motion.circle cx="30" cy="-20" r="2" fill="currentColor" animate={{ x: [2, -2], y: [-2, 2] }} transition={{ ...FLOAT, delay: 1.5 }} />
            <circle cx="0" cy="0" r="5" fill={RED} filter={variant==='complex'?"url(#glow-layer)":""}/>
        </g>
    </VisualWrapper>
);

export const WhisperVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                <motion.path d="M20 50 Q 50 10 80 50" stroke={RED} strokeWidth="4" fill="none" opacity="0.5" animate={{ d: ["M20 50 Q 50 10 80 50", "M20 50 Q 50 90 80 50", "M20 50 Q 50 10 80 50"] }} transition={FLOAT} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.circle r="10" fill="none" stroke={RED} strokeWidth="0.5" animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 4, repeat: Infinity }} />
            <motion.circle r="15" fill="none" stroke="currentColor" strokeWidth="0.2" animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 4, delay: 0.8, repeat: Infinity }} />
            <circle r="5" fill={RED} opacity="0.5" filter={variant==='complex'?"url(#glow-layer)":""} />
            <path d="M-10 0 Q0 10 10 0" stroke="currentColor" fill="none" strokeWidth="0.5" />
        </g>
    </VisualWrapper>
);

export const BatteryVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                <motion.path d="M10 90 L30 30 L60 60 L90 10" stroke={RED} strokeWidth="6" fill="none" animate={{ opacity: [0.2, 0.6, 0.2] }} transition={PULSE_FAST} />
             </BlurObject>
        )}
        <g transform="translate(50 50) scale(0.65)">
            <path d="M-100 100 L-50 0 L0 50 L50 -50 L100 0" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <motion.path 
                d="M-100 100 L-50 0 L0 50 L50 -50 L100 0" fill="none" stroke={RED} strokeWidth="2"
                filter={variant==='complex'?"url(#glow-layer)":""}
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle cx="0" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" animate={{ rotate: 360 }} transition={SPIN_SLOW} />
            <rect x="-110" y="-70" width="220" height="140" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="0" y="100" fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace">GRID_LOAD: 160%</text>
        </g>
    </VisualWrapper>
);

export const ScaleVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                <motion.rect x="60" y="20" width="30" height="60" fill={RED} animate={{ y: [20, 25, 20] }} transition={PULSE_SLOW} />
             </BlurObject>
        )}
        <g transform="translate(50 50)">
            <circle cx="-30" cy="0" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
            <motion.circle cx="30" cy="0" r="25" fill="none" stroke={RED} strokeWidth="2" animate={{ scale: [1, 1.1, 1] }} transition={PULSE_SLOW} filter={variant==='complex'?"url(#glow-layer)":""} />
            <g transform="translate(30, 0)">
                <path d="M-10 0 L10 0 M0 -10 L0 10" stroke={RED} strokeWidth="2" />
            </g>
            <motion.line x1="-30" y1="0" x2="30" y2="0" stroke="currentColor" strokeDasharray="4 4" animate={{ strokeDashoffset: -20 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        </g>
    </VisualWrapper>
);

export const ShieldVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                 <motion.path d="M20 20 L50 50 L80 20" stroke={RED} strokeWidth="4" fill="none" animate={{ y: [-10, 0, -10] }} transition={PULSE_SLOW} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <circle cx="0" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" opacity="0.5" />
            <path d="M0 -60 L0 60" stroke={RED} strokeWidth="2" filter={variant==='complex'?"url(#glow-layer)":""} />
            <path d="M-60 0 L60 0" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <motion.rect x="-40" y="-40" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" animate={{ y: [-5, 5] }} transition={FLOAT} />
            <motion.rect x="10" y="10" width="30" height="30" fill="none" stroke={RED} strokeWidth="1" animate={{ y: [5, -5] }} transition={{ ...FLOAT, delay: 1 }} />
            <text x="-40" y="-50" fill="currentColor" fontSize="8" textAnchor="middle" fontFamily="monospace">US</text>
            <text x="10" y="50" fill={RED} fontSize="8" textAnchor="middle" fontFamily="monospace">EU</text>
        </g>
    </VisualWrapper>
);

export const AuditVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                 <motion.path d="M20 80 L50 40 L80 80" stroke={RED} strokeWidth="8" fill="none" opacity="0.3" animate={{ opacity: [0.1, 0.4, 0.1] }} transition={PULSE_FAST} />
             </BlurObject>
        )}
        <g transform="translate(50 50) scale(0.8)">
            <circle cx="0" cy="0" r="8" fill={RED} filter={variant==='complex'?"url(#glow-layer)":""} />
            <path d="M0 8 L -30 50" stroke="currentColor" strokeWidth="1" />
            <path d="M0 8 L 30 50" stroke="currentColor" strokeWidth="1" />
            <path d="M-30 50 L -50 90" stroke="currentColor" strokeWidth="1" />
            <path d="M-30 50 L -10 90" stroke="currentColor" strokeWidth="1" />
            <motion.circle cx="-30" cy="50" r="4" fill="none" stroke="currentColor" animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }} transition={PULSE_SLOW} />
            <motion.circle cx="30" cy="50" r="4" fill="none" stroke="currentColor" animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }} transition={{ ...PULSE_SLOW, delay: 0.5 }} />
            
            <motion.path 
                d="M-5 0 L0 5 L10 -5" stroke={RED} strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }}
                transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 1 }}
            />
            
            <text x="0" y="110" fill="currentColor" fontSize="8" textAnchor="middle" fontFamily="monospace">CHAIN_OF_THOUGHT</text>
        </g>
    </VisualWrapper>
);

export const FactoryVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                <motion.rect x="0" y="0" width="100" height="100" fill={`url(#grad-radar-${RED.replace('#', '')})`} opacity="0.3" animate={{ y: [-10, 10, -10] }} transition={FLOAT} />
            </BlurObject>
        )}
        <g transform="translate(50 50) scale(0.8)">
            <rect x="-40" y="-60" width="80" height="120" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="-30" y1="-40" x2="30" y2="-40" stroke="currentColor" strokeWidth="2" />
            <line x1="-30" y1="-20" x2="10" y2="-20" stroke="currentColor" strokeWidth="2" />
            <line x1="-30" y1="0" x2="30" y2="0" stroke="currentColor" strokeWidth="2" />
            <motion.rect x="-50" y="-10" width="100" height="20" fill={RED} opacity="0.2" animate={{ y: [-50, 50] }} transition={SCAN_Y} />
            <motion.line x1="-60" y1="0" x2="60" y2="0" stroke={RED} strokeWidth="1" filter={variant==='complex'?"url(#glow-layer)":""} animate={{ y: [-50, 50] }} transition={SCAN_Y} />
        </g>
    </VisualWrapper>
);

export const SearchVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                <motion.circle cx="50" cy="50" r="45" stroke={RED} strokeWidth="2" fill="none" strokeDasharray="10 20" animate={{ rotate: 360 }} transition={SPIN_SLOW} />
             </BlurObject>
        )}
        <g transform="translate(50 50)">
            <circle cx="0" cy="0" r="15" fill={RED} opacity="0.8" filter={variant==='complex'?"url(#glow-layer)":""} />
            <motion.g animate={{ rotate: 360 }} transition={SPIN_MID}>
               <circle cx="40" cy="0" r="5" fill="currentColor" />
               <circle cx="-40" cy="0" r="5" fill="currentColor" />
               <path d="M-40 0 A 40 40 0 0 1 40 0" fill="none" stroke="currentColor" strokeWidth="1" />
               <path d="M-40 0 A 40 40 0 0 0 40 0" fill="none" stroke="currentColor" strokeWidth="1" />
            </motion.g>
        </g>
    </VisualWrapper>
);

export const PenVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                 <motion.rect x="40" y="20" width="20" height="60" fill={RED} animate={{ opacity: [0.1, 0.4, 0.1] }} transition={PULSE_FAST} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <text x="-50" y="10" fontSize="60" fill="currentColor" textAnchor="end" fontFamily="monospace" opacity="0.8">&lt;</text>
            <text x="50" y="10" fontSize="60" fill="currentColor" textAnchor="start" fontFamily="monospace" opacity="0.8">&gt;</text>
            <motion.rect x="-10" y="-20" width="20" height="40" fill={RED} filter={variant==='complex'?"url(#glow-layer)":""} animate={{ opacity: [1, 0.5, 1] }} transition={PULSE_FAST} />
        </g>
    </VisualWrapper>
);

export const MeaningVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                <motion.rect x="30" y="30" width="40" height="40" fill={RED} animate={{ rotate: 360 }} transition={SPIN_SLOW} style={{ originX: "50px", originY: "50px" }} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.rect x="-40" y="-40" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2" animate={{ rotateX: 360, rotateY: 360 }} transition={SPIN_SLOW} />
            <motion.rect x="-30" y="-30" width="60" height="60" fill="none" stroke={RED} strokeWidth="1" transform="rotate(45)" animate={{ rotate: 360 }} transition={SPIN_MID} />
        </g>
    </VisualWrapper>
);

export const DefenseVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                <motion.circle cx="50" cy="50" r="50" stroke={RED} strokeWidth="4" fill="none" animate={{ opacity: [0, 0.5, 0] }} transition={PULSE_SLOW} />
             </BlurObject>
        )}
        <g transform="translate(50 50)">
            <path d="M0 -60 L40 -40 V10 C40 40 0 60 0 60 C0 60 -40 40 -40 10 V-40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <motion.path d="M0 -50 L30 -35 V5 C30 30 0 50 0 50 C0 50 -30 30 -30 5 V-35 Z" fill="none" stroke={RED} strokeWidth="1" opacity="0.5" filter={variant==='complex'?"url(#glow-layer)":""} animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }} transition={PULSE_FAST} />
        </g>
    </VisualWrapper>
);

export const TangleVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject>
                <motion.path d="M20 20 Q 50 80 80 20" stroke={RED} strokeWidth="6" fill="none" animate={{ d: ["M20 20 Q 50 80 80 20", "M20 30 Q 50 90 80 30", "M20 20 Q 50 80 80 20"] }} transition={FLOAT} />
             </BlurObject>
        )}
        <g transform="translate(50 50)">
            <circle cx="-30" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="30" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <motion.path d="M0 -25 Q 15 0 0 25 Q -15 0 0 -25" fill={RED} opacity="0.6" animate={{ d: ["M0 -25 Q 15 0 0 25 Q -15 0 0 -25", "M0 -20 Q 20 0 0 20 Q -20 0 0 -20"] }} transition={PULSE_FAST} />
        </g>
    </VisualWrapper>
);

export const MaskVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
            <BlurObject>
                <motion.path d="M10 40 L90 40" stroke={RED} strokeWidth="10" animate={{ y: [-5, 5, -5] }} transition={FLOAT} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.path 
                d="M0 10 C -20 -10 -40 -10 -40 10 C -40 30 -10 50 0 60 C 10 50 40 30 40 10 C 40 -10 20 -10 0 10" 
                fill="none" stroke={RED} strokeWidth="2" transform="translate(0, -10)"
                filter={variant==='complex'?"url(#glow-layer)":""}
                animate={{ scale: [1, 1.2, 1] }} transition={PULSE_FAST}
            />
        </g>
    </VisualWrapper>
);

export const BottleneckVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && (
             <BlurObject><motion.circle cx="50" cy="50" r="20" fill={RED} animate={{ scale: [1, 1.5, 1] }} transition={PULSE_FAST} /></BlurObject>
        )}
        <path d="M10 20 L30 45 L30 55 L10 80" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M90 20 L70 45 L70 55 L90 80" stroke="currentColor" strokeWidth="2" fill="none" />
        {[0, 1, 2].map((i) => (<motion.circle key={i} cx="50" cy="20" r="4" fill={i === 1 ? RED : "currentColor"} animate={{ y: [0, 25, 30, 60], opacity: [0, 1, 1, 0], scale: [1, 0.8, 0.8, 1.2] }} transition={{ duration: 6, times: [0, 0.2, 0.8, 1], delay: i * 2, repeat: Infinity, ease: "linear" }} />))}
    </VisualWrapper>
);

export const AlignmentVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><rect x="40" y="0" width="20" height="100" fill={RED} opacity="0.2" /></BlurObject>}
        <motion.line x1="50" y1="5" x2="50" y2="95" stroke={RED} strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
        {[20, 50, 80].map((y, i) => (<motion.rect key={i} x="40" y={y} width="20" height="10" fill={i === 1 ? RED : "currentColor"} initial={{ x: i === 0 ? -40 : i === 2 ? 40 : 0 }} animate={{ x: 0 }} transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />))}
    </VisualWrapper>
);

export const FragmentationVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="30" stroke={RED} strokeWidth="2" fill="none" animate={{ rotate: 360 }} transition={SPIN_FAST} /></BlurObject>}
        <g transform="translate(50,50)">
            <motion.rect x="-15" y="-15" width="14" height="14" fill="currentColor" animate={{ x: [-15, -45, -15], y: [-15, -45, -15], rotate: [0, -45, 0], opacity: [1, 0.5, 1] }} transition={{ duration: 5, ease: "easeInOut", times: [0, 0.5, 1], repeat: Infinity }} />
            <motion.rect x="1" y="-15" width="14" height="14" fill={RED} animate={{ x: [1, 35, 1], y: [-15, -35, -15], rotate: [0, 90, 0], scale: [1, 1.2, 1] }} transition={{ duration: 5, ease: "easeInOut", times: [0, 0.6, 1], repeat: Infinity }} />
            <motion.rect x="-15" y="1" width="14" height="14" fill="currentColor" animate={{ x: [-15, -35, -15], y: [1, 35, 1], rotate: [0, -20, 0] }} transition={{ duration: 5, ease: "easeInOut", times: [0, 0.4, 1], repeat: Infinity }} />
            <motion.rect x="1" y="1" width="14" height="14" fill="currentColor" animate={{ x: [1, 55, 1], y: [1, 55, 1], rotate: [0, 180, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 5, ease: "easeInOut", times: [0, 0.7, 1], repeat: Infinity }} />
        </g>
    </VisualWrapper>
);

export const GapVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="0" y="80" width="100" height="20" fill={RED} animate={{ opacity: [0.1, 0.3, 0.1] }} transition={PULSE_SLOW} /></BlurObject>}
        <line x1="10" y1="80" x2="60" y2="80" stroke="currentColor" strokeWidth="2" />
        <motion.circle cx="75" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray="20 10" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        <motion.path 
            d="M10 80 Q 50 80 90 10" fill="transparent" stroke={RED} strokeWidth="4" 
            filter={variant==='complex' ? "url(#glow-layer)" : ""} 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: [0, 1, 0] }} 
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }} 
        />
    </VisualWrapper>
);

export const IntegrationVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="35" y="35" width="30" height="30" fill={RED} animate={{ rotate: 45 }} transition={SPIN_SLOW} /></BlurObject>}
        <motion.rect x="20" y="35" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" animate={{ x: [0, 15, 0] }} transition={PULSE_SLOW} />
        <motion.rect x="50" y="35" width="30" height="30" stroke={RED} strokeWidth="2" fill="none" animate={{ x: [0, -15, 0] }} transition={PULSE_SLOW} />
        <motion.rect x="42" y="42" width="16" height="16" fill={RED} opacity="0" animate={{ opacity: [0, 1, 0] }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const SyncVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.path d="M30 50 L 70 50" stroke={RED} strokeWidth="6" opacity="0.3" /></BlurObject>}
        <motion.circle cx="30" cy="50" r="10" fill="currentColor" animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} />
        <motion.circle cx="70" cy="50" r="10" fill={RED} animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} />
        <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" strokeDasharray="2 2" />
    </VisualWrapper>
);

export const SignalVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.path d="M10 50 Q 30 20 50 50 T 90 50" stroke={RED} strokeWidth="8" fill="none" opacity="0.2" /></BlurObject>}
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <motion.path d="M10 50 Q 30 20 50 50 T 90 50" fill="none" stroke={RED} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const PulseVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="30" fill={RED} opacity="0.2" animate={{ scale: [1, 1.2, 1] }} transition={PULSE_SLOW} /></BlurObject>}
        <motion.circle cx="50" cy="50" r="20" fill={RED} animate={{ scale: [1, 1.1, 1], opacity: [0.8, 0.4, 0.8] }} transition={PULSE_SLOW} />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
    </VisualWrapper>
);

export const BreathVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.circle cx="50" cy="50" r="40" fill={RED} opacity="0.2" animate={{ scale: [0.8, 1.2, 0.8] }} transition={PULSE_SLOW} /></BlurObject>}
        <motion.path d="M30 50 Q 50 30 70 50 Q 50 70 30 50" fill={RED} opacity="0.2" animate={{ d: ["M30 50 Q 50 30 70 50 Q 50 70 30 50", "M20 50 Q 50 10 80 50 Q 50 90 20 50", "M30 50 Q 50 30 70 50 Q 50 70 30 50"] }} transition={PULSE_SLOW} />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
    </VisualWrapper>
);

export const StackVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="30" y="40" width="40" height="20" fill={RED} opacity="0.2" animate={{ scaleY: 1.5 }} transition={PULSE_SLOW} /></BlurObject>}
        {[0, 10, 20].map((y, i) => (
            <motion.rect key={i} x="30" y={60 - y} width="40" height="8" fill={i === 2 ? RED : "currentColor"} 
                animate={{ y: [60 - y, 50 - y, 60 - y] }} transition={{ duration: 4, delay: i * 0.4, repeat: Infinity }} 
            />
        ))}
    </VisualWrapper>
);

export const GridVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)" opacity="0.5" /></BlurObject>}
        <g fill="currentColor" opacity="0.3">
            {Array.from({ length: 16 }).map((_, i) => (
                <circle key={i} cx={20 + (i % 4) * 20} cy={20 + Math.floor(i / 4) * 20} r="2" />
            ))}
        </g>
        <motion.rect x="15" y="15" width="30" height="30" stroke={RED} strokeWidth="2" fill="none" 
            animate={{ x: [0, 40, 0], y: [0, 40, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
        />
    </VisualWrapper>
);

export const BridgeVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.rect x="30" y="45" width="40" height="4" fill={RED} animate={{ opacity: [0.5, 1, 0.5] }} transition={PULSE_FAST} /></BlurObject>}
        <rect x="10" y="40" width="20" height="40" fill="currentColor" />
        <rect x="70" y="40" width="20" height="40" fill="currentColor" />
        <motion.line x1="30" y1="45" x2="70" y2="45" stroke={RED} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const DivergenceVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant}>
        {variant==='complex' && <BlurObject><motion.path d="M40 50 Q 70 50 90 20" stroke={RED} strokeWidth="6" fill="none" opacity="0.3" /></BlurObject>}
        <line x1="10" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="3" />
        <motion.path d="M40 50 Q 70 50 90 20" fill="none" stroke={RED} strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={PULSE_SLOW} />
        <motion.path d="M40 50 Q 70 50 90 80" fill="none" stroke="currentColor" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={PULSE_SLOW} />
    </VisualWrapper>
);

export const VigorVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                 <motion.circle cx="50" cy="50" r="30" fill={BLUE} opacity="0.3" animate={{ scale: [1, 1.2, 1] }} transition={PULSE_FAST} />
            </BlurObject>
        )}
        <motion.circle cx="50" cy="50" r="15" fill={BLUE} animate={{ r: [15, 20, 15] }} transition={PULSE_FAST} />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
        <motion.line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="2" animate={{ scaleY: [1, 1.2, 1] }} transition={PULSE_FAST} />
        <motion.line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" animate={{ scaleX: [1, 1.2, 1] }} transition={PULSE_FAST} />
    </VisualWrapper>
);

export const DriveVisual: React.FC<VisualProps> = ({ variant }) => (
    <VisualWrapper variant={variant} accentColor={BLUE}>
        {variant==='complex' && (
            <BlurObject>
                <motion.path d="M20 50 L50 20 L50 80 Z" fill={BLUE} opacity="0.2" animate={{ x: [0, 10, 0] }} transition={PULSE_FAST} />
            </BlurObject>
        )}
        <g transform="translate(50 50)">
            <motion.path d="M-10 -20 L20 0 L-10 20" stroke={BLUE} strokeWidth="4" fill="none" strokeLinecap="round" animate={{ x: [-5, 5, -5] }} transition={PULSE_FAST} />
            <path d="M-20 -20 L10 0 L-20 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
            <line x1="-40" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        </g>
    </VisualWrapper>
);


// --- EXPORT MAP ---

export const VISUAL_MAP: Record<string, React.FC<VisualProps>> = {
  // Originals & Loops
  bottleneck: BottleneckVisual,
  alignment: AlignmentVisual,
  fragmentation: FragmentationVisual,
  integration: IntegrationVisual,
  network: NetworkVisual,
  divergence: DivergenceVisual,
  stack: StackVisual,
  grid: GridVisual,
  bridge: BridgeVisual,
  tangle: TangleVisual,
  shield: ShieldVisual,
  factory: FactoryVisual,
  whisper: WhisperVisual,
  battery: BatteryVisual,
  pen: PenVisual,
  globe: GlobeVisual,
  scale: ScaleVisual,
  mask: MaskVisual,
  audit: AuditVisual,
  gap: GapVisual,
  sync: SyncVisual,
  signal: SignalVisual,
  pulse: PulseVisual,
  breath: BreathVisual,
  search: SearchVisual,
  meaning: MeaningVisual,
  defense: DefenseVisual,
  
  // Classics
  origin: OriginVisual,
  orbit: OrbitVisual,
  filter: FilterVisual,
  target: TargetVisual,
  echo: EchoVisual,
  layer: LayerVisual,
  cycle: CycleVisual,
  growth: GrowthVisual,
  
  // New Additions
  balance: BalanceVisual,
  perspective: PerspectiveVisual,
  knot: KnotVisual,
  velocity: VelocityVisual,

  // Blue Series
  posture: PostureVisual,
  rhythm: RhythmVisual,
  tension: TensionVisual,
  flow: FlowVisual,
  resistance: ResistanceVisual,
  symmetry: SymmetryVisual,
  range: RangeVisual,
  respiration: RespirationVisual,
  contraction: ContractionVisual,
  gait: GaitVisual,
  
  // Anatomical
  vigor: VigorVisual,
  drive: DriveVisual,
  
  none: () => null
};
