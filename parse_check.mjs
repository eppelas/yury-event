import fs from 'fs';
import * as babel from '@babel/parser';

const code = fs.readFileSync('/Users/viola/All/Yandex.Disk.localized/3 Process/8 Vibe Coding/AI Mindset/src/components/CommunityPage.tsx', 'utf8');

try {
  babel.parse(code, {
    sourceType: "module",
    plugins: [
      "jsx",
      "typescript"
    ]
  });
  console.log("Parse Success!");
} catch (e) {
  console.error("Parse Error at Line:", e.loc.line, "Column:", e.loc.column);
  console.error("Message:", e.message);
  
  // Show the actual line the error occurred on
  const lines = code.split('\n');
  console.log("-->", lines[e.loc.line - 1]);
}
