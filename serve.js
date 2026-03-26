import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

// Main project is in ./dist
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the isolated styles from the sibling directory
const subprojects = [
    "AI Mindset Visual Research - 03 Ascii Mono Ticket",
    "AI Mindset Visual Research - 12 Typographic Poster Impact",
    "AI Mindset Visual Research - 221 Noir Wire Metaphors",
    "AI Mindset Visual Research - 25 Future System Signals",
    "AI Mindset Visual Research - 28 Pixel Music Interface",
    "AI Mindset Visual Research - 29 Kampong Organic Type",
    "AI Mindset Visual Research - 36 Data Arch Blueprint",
    "AI Mindset Visual Research - 43 Rectangular Modular Contrast",
    "AI Mindset Visual Research - 48 Wireframe Tech Editorial",
    "AI Mindset Visual Research - 50 Obys Dark Orbit",
    "AI Mindset Visual Research - 54 Minimal Ru Grid",
    "AI Mindset Visual Research - 57 Dark Orange Hero",
];

for (const p of subprojects) {
    const match = p.match(/ - (\d+)/);
    if (match) {
        const code = match[1];
        app.use(`/${code}`, express.static(path.join(__dirname, '../Antigravity aim website visual research', p, 'dist')));
    }
}

app.listen(PORT, () => {
    console.log(`Server successfully started on http://localhost:${PORT}`);
});
