const fs = require('fs');
const files = [
  '../Morph Week 1 (1).svg',
  '../Morph Week 2.svg',
  '../Morph Week 3.svg',
  '../Morph Week 4.svg'
];

const frames = files.map((f, i) => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<line\s+x1="([^"]+)"\s+y1="([^"]+)"\s+x2="([^"]+)"\s+y2="([^"]+)"(?:\s+stroke="[^"]+")?(?:\s+stroke-width="[^"]+")?(?:\s+stroke-linecap="[^"]+")?(?:\s+opacity="([^"]+)")?/g;
  let match;
  const lines = [];
  while ((match = regex.exec(content)) !== null) {
    lines.push({
      x1: parseFloat(match[1]),
      y1: parseFloat(match[2]),
      x2: parseFloat(match[3]),
      y2: parseFloat(match[4]),
      opacity: match[5] ? parseFloat(match[5]) : 1
    });
  }
  return lines;
});

console.log('Week 1 lines:', frames[0].length);
console.log('Week 2 lines:', frames[1].length);
console.log('Week 3 lines:', frames[2].length);
console.log('Week 4 lines:', frames[3].length);

const maxLines = Math.max(...frames.map(f => f.length));

// Pad frames that have fewer lines with invisible lines
frames.forEach(frame => {
  while(frame.length < maxLines) {
    frame.push({ x1: 50, y1: 50, x2: 50, y2: 50, opacity: 0 }); // Center, invisible
  }
});

// Write to a TS file
const tsContent = `export const MORPH_FRAMES = ${JSON.stringify(frames, null, 2)};`;
fs.writeFileSync('./Block Experiments/src/components/MorphFrames.ts', tsContent);
console.log('Saved parsing output to MorphFrames.ts');
