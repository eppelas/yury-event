import fs from 'fs';

let content = fs.readFileSync('/Users/viola/All/Yandex.Disk.localized/3 Process/8 Vibe Coding/AI Mindset/src/components/ProgramShowcasePage.tsx', 'utf8');

// The current order is:
// <ProgramSectionHeader />
// <EditorialSectionHeader eyebrow="VARIANT №X" ... />

// We want to swap them to:
// <EditorialSectionHeader eyebrow="VARIANT №X" ... />
// <ProgramSectionHeader />

const regex = /([ \t]*)<ProgramSectionHeader \/>\n([ \t]*<EditorialSectionHeader[^>]*\/>)/g;
content = content.replace(regex, '$2\n$1<ProgramSectionHeader />');

fs.writeFileSync('/Users/viola/All/Yandex.Disk.localized/3 Process/8 Vibe Coding/AI Mindset/src/components/ProgramShowcasePage.tsx', content);
console.log('Headers swapped successfully.');
