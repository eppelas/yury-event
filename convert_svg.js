const fs = require('fs');
const svgPath = '/Users/viola/Downloads/Morph Animation.svg';
const targetPath = './Block Experiments/src/components/WireframePulse.tsx';

let svg = fs.readFileSync(svgPath, 'utf8');

// Strip XML declaration
svg = svg.replace(/<\?xml.*?\?>/i, '');

// Remove background styles
svg = svg.replace(/style="background:\s*#[a-fA-F0-9]+"/gi, '');

// The user wanted green. Change stroke to currentColor, so parent classes apply
svg = svg.replace(/stroke="#00ffff"/gi, 'stroke="currentColor"');
svg = svg.replace(/stroke="#[0-9a-fA-F]{6}"/gi, 'stroke="currentColor"');

// Remove texts if any
svg = svg.replace(/<text[\s\S]*?<\/text>/gi, '');

// Escape for template string
const escapedSvg = svg.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const componentCode = `
export const WireframePulse = ({ className = "" }: { className?: string }) => {
  return (
    <div 
      className={className} 
      dangerouslySetInnerHTML={{ __html: \`${escapedSvg}\` }} 
    />
  );
};
`;

fs.writeFileSync(targetPath, componentCode.trim(), 'utf8');
console.log('Successfully generated WireframePulse.tsx');
