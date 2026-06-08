import { useLanguage } from '../i18n';

const aiTools = [
  'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI',
  'Hugging Face', 'Pinecone', 'LlamaIndex',
  'Anthropic API', 'Midjourney', 'Keras',
  'Scikit-Learn', 'NLTK', 'Spacy',
];

const frameworks = [
  'Python', 'React', 'TypeScript', 'Kotlin',
  'Android', 'Docker', 'AWS', 'GCP',
  'FastAPI', 'Node.js', 'Express', 'Vite',
];

export function TechStack() {
  const { isArabic } = useLanguage();

  return (
    <section className="py-24 relative bg-slate-50 border-y border-neutral-200 overflow-hidden text-neutral-900 z-10">
      <div className="container mx-auto px-6 max-w-6xl relative z-10 mb-16">
        <div className="text-center">
          <h2 className="text-sm font-mono text-blue-600 mb-4 uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue-300"></span>
            {isArabic ? 'التقنيات' : 'Tech Stack'}
            <span className="w-4 h-px bg-blue-300"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-neutral-900">
            {isArabic ? 'الأدوات التي أعتمد عليها' : 'Tools of the Trade'}
          </h3>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 overflow-hidden z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20"></div>

        <div className="flex w-full">
          <div className="flex whitespace-nowrap shrink-0 animate-marquee items-center gap-16 px-8">
            {[...aiTools, ...aiTools].map((tech, i) => (
              <span key={i} className="text-3xl md:text-5xl font-display font-semibold text-neutral-300 hover:text-blue-500 transition-colors cursor-default select-none">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex whitespace-nowrap shrink-0 animate-marquee-reverse items-center gap-16 px-8">
            {[...frameworks, ...frameworks].map((tech, i) => (
              <span key={i} className="text-3xl md:text-5xl font-display font-semibold text-neutral-300 hover:text-purple-500 transition-colors cursor-default select-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
