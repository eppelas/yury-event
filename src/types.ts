export interface VisualProps {
  variant?: 'simple' | 'complex';
}

export interface SlideData {
  id: string;
  type: 'cover' | 'section' | 'quote' | 'metaphor' | 'loop' | 'manifesto' | 'text-density' | 'grid-stats' | 'comparative' | 'statement' | 'checklist' | 'blueprint' | 'gallery';
  title: string;
  subtitle?: string;
  body?: string;
  visual: string;
  dark?: boolean;
  loopData?: {
    machine: string;
    human: string;
    gap: string;
    sources?: { text: string; url: string }[];
  };
  gridStats?: { value: string; label: string; desc: string }[];
  comparative?: { header: string; sub: string; points: string[]; footer?: string }[];
  checklist?: { label: string; text: string; checked: boolean }[];
}
