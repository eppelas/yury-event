import fs from 'fs';
const file = '/Users/viola/All/Yandex.Disk.localized/3 Process/8 Vibe Coding/AI Mindset/src/components/ProgramShowcasePage.tsx';
let content = fs.readFileSync(file, 'utf8');

// The "Идея:" block starts with `<p className="mb-12 text-sm opacity-60 uppercase max-w-2xl">`
// Replace all those paragraphs.
content = content.replace(/<p className="mb-[0-9]+ text-sm[^>]*>[\s\S]*?Идея:[\s\S]*?<\/p>/g, '');

// Prepend ProgramSectionHeader to EditorialSectionHeader
content = content.replace(/<EditorialSectionHeader eyebrow="([^"]+)" title="([^"]+)" \/>/g, '<ProgramSectionHeader />\n       <EditorialSectionHeader eyebrow="$1" title="$2" />\n       <div className="flex flex-wrap gap-2 mb-12 justify-center w-full max-w-3xl mx-auto">\n          {["Лекция", "Воркшоп", "Коворкинг", "Q&A сессия"].map(tag => (\n             <div key={tag} className="flex items-center gap-1.5 bg-[#f5f5f7] px-3 py-1.5 rounded-full border border-black/5">\n               <div className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />\n               <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">{tag}</span>\n             </div>\n          ))}\n       </div>');

// Ensure C5 workload is updated.
// Workload array changes.
content = content.replace(
  /const weekSchedule = \[\s*\{ day: 'ПН'[\s\S]*?\],\s*/,
  `const weekSchedule = [
    { day: 'ПН', event: 'Лекция', type: 'main' },
    { day: 'ВТ', event: 'Сессия', type: 'practice' },
    { day: 'СР', event: 'Advanced', type: 'pro' },
    { day: 'ЧТ', event: '', type: 'empty' },
    { day: 'ПТ', event: 'Лекция', type: 'main' },
    { day: 'СБ', event: 'Q&A', type: 'practice' }
  ];\n`
);

// Workload grid columns
content = content.replace(/grid-cols-7/g, 'grid-cols-3');
content = content.replace(/min-w-\[500px\]/g, 'min-w-[300px]');
content = content.replace(/h-20 md:h-24/g, 'h-16 md:h-20');

// D3 color update
// Front card
content = content.replace(
  /className=\{`w-full bg-\[#fcfcfc\] border border-black\/10/g,
  'className={`w-full bg-gradient-to-br from-[#f2fbec] to-[#dcf1c4] border border-[#8DC63F]/20'
);

// D3 Reveal PRO button
content = content.replace(
  /<div className="flex flex-col items-center justify-center shrink-0 w-[0-9]+ h-[0-9]+ md:w-[0-9]+ md:h-[0-9]+ rounded-full border border-black\/5 bg-black\/5 group-hover:bg-black\/10 transition-colors">\s*<RotateCcw className="w-5 h-5 opacity-40 mb-2 group-hover:opacity-80 transition-opacity" \/>\s*<span className="text-\[8px\] font-bold uppercase tracking-widest text-center opacity-40">Reveal<br\/>PRO<\/span>\s*<\/div>/g,
  '<div className="flex items-center gap-2 self-start md:self-center bg-black/5 text-black group-hover:bg-black/10 px-4 py-2 rounded-full transition-colors"><RotateCcw className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">Flip to PRO</span></div>'
);

// D3 Back card B/W
content = content.replace(
  /className=\{`absolute inset-0 w-full h-full bg-\[#fbfbfb\] text-black border border-black\/5/g,
  'className={`absolute inset-0 w-full h-full bg-black text-white border border-white/10'
);

content = content.replace(
  /<div className="absolute top-0 right-0 w-[0-9]+ h-[0-9]+ bg-\[#8DC63F\]\/10 rounded-full blur-\[60px\] pointer-events-none" \/>/g,
  '<div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none" />'
);

content = content.replace(
  /bg-\[#8DC63F\] text-black font-black px-2 py-0\.5/g,
  'bg-white text-black font-black px-2 py-0.5'
);

content = content.replace(
  /shadow-\[0_0_10px_#8DC63F\]/g,
  'shadow-[0_0_10px_rgba(255,255,255,0.5)]'
);

content = content.replace(
  /bg-\[#8DC63F\] shadow-\[0_2px_10px_rgba\(141,198,63,0\.3\)\]/g,
  'bg-white shadow-none'
);

// In D3, fix text colors on back purely by replacing text-black to text-white for children of back card.
// We can do this with a simpler specific replace for D3 back section.
const parts = content.split('/* BACK SIDE (Advanced Track) */');
if (parts.length === 2) {
   let d3BackAndAfter = parts[1];
   // Find the end of D3
   const d3EndIndex = d3BackAndAfter.indexOf('// Demo Day Node');
   if (d3EndIndex > -1) {
       let d3Back = d3BackAndAfter.substring(0, d3EndIndex);
       let rest = d3BackAndAfter.substring(d3EndIndex);

       // Replace text colors in d3Back
       d3Back = d3Back.replace(/text-black/g, 'text-white');
       d3Back = d3Back.replace(/bg-black/g, 'bg-white');
       d3Back = d3Back.replace(/border-black/g, 'border-white');
       // Reverse the PRO badge bg and text
       d3Back = d3Back.replace(/bg-white text-white/g, 'bg-white text-black');

       content = parts[0] + '/* BACK SIDE (Advanced Track) */' + d3Back + rest;
   }
}


fs.writeFileSync(file, content);
