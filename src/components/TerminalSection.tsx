import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useLanguage } from '../i18n';

export function TerminalSection() {
  const { isArabic } = useLanguage();

  const logLines = isArabic
    ? [
        'تهيئة المسارات العصبية...',
        'تحميل إعدادات المجزئ...',
        'تم تحميل الأوزان من checkpoint //model-v2.1',
        'تحسين آليات الانتباه...',
        'تم التحقق من حدود GPU. تم تفعيل CUDA cores.',
        'تجميع مسار RAG...',
        'الاتصال بقاعدة المتجهات [Pinecone]...',
        'عدد المتجهات المفهرسة: 14,020,391',
        'تم تهيئة إطار الوكلاء. LangChain نشط.',
        'النظام جاهز. في انتظار الإدخال...',
      ]
    : [
        'Initializing neural pathways...',
        'Loading tokenizer configuration...',
        'Weights loaded from checkpoint //model-v2.1',
        'Optimizing attention mechanisms...',
        'GPU limits verified. CUDA cores engaged.',
        'Compiling RAG pipeline...',
        'Connecting to vector database [Pinecone]...',
        'Vectors indexed: 14,020,391',
        'Agent framework initialized. LangChain active.',
        'System ready. Awaiting input...',
      ];

  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLines([]);
    setCurrentIndex(0);
  }, [isArabic]);

  useEffect(() => {
    if (currentIndex < logLines.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, logLines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 800 + 400);
      return () => clearTimeout(timeout);
    }

    const resetTimeout = setTimeout(() => {
      setLines([]);
      setCurrentIndex(0);
    }, 5000);
    return () => clearTimeout(resetTimeout);
  }, [currentIndex, logLines]);

  const timeString = new Date().toISOString().split('T')[1].slice(0, 8);

  return (
    <section className="py-24 relative bg-neutral-950 text-white border-y border-neutral-900 overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-40 animate-blob" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h2 className="text-sm font-mono text-emerald-400 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-px bg-emerald-400"></span>
              {isArabic ? 'قياس حي' : 'Live Telemetry'}
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 mt-4">
              {isArabic ? 'ما وراء ' : 'Behind the '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{isArabic ? 'الكواليس' : 'curtain'}</span>.
            </h3>
            <p className="text-neutral-400 text-xl leading-relaxed font-light mb-6">
              {isArabic
                ? 'هندسة الذكاء الاصطناعي هي انضباط يقوم على الدقة، من تهيئة الأوزان إلى إدارة المتجهات وتحسين زمن الاستدلال.'
                : 'AI engineering is a discipline of precision. From fine-tuning weights to managing vector embeddings and optimizing inference latency.'}
            </p>
            <p className="text-neutral-400 text-xl leading-relaxed font-light">
              {isArabic
                ? 'هذه الطرفية تحاكي تسلسل التهيئة المعتاد لوكيل RAG مخصص.'
                : 'This terminal simulates a typical initialization sequence for a custom retrieval-augmented generation (RAG) agent.'}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}>
            <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-[#050505]">
              <div className="flex items-center px-4 py-3 bg-neutral-900 border-b border-neutral-800 shadow-sm relative z-10">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 text-center font-mono text-xs text-neutral-500 flex items-center justify-center gap-2">
                  <TerminalIcon size={12} />
                  agent_init.sh
                </div>
              </div>
              <div className="p-6 font-mono text-sm md:text-base h-[320px] overflow-hidden flex flex-col justify-end relative shadow-inner">
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
                <div className="space-y-2.5 relative z-0 w-full flex flex-col items-start">
                  {lines.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className={`text-left w-full ${i === logLines.length - 1 ? 'text-emerald-400' : 'text-neutral-300'}`}>
                      <span className="text-neutral-600 mr-3 shrink-0">[{timeString}]</span>
                      <span className="font-medium">{line}</span>
                    </motion.div>
                  ))}
                  <motion.div animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2.5 h-5 bg-emerald-400 mt-2 inline-block align-middle ml-[2rem]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
