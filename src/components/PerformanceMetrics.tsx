import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n';

function AnimatedCounter({ value, suffix = '', prefix = '', decimalLength = 0 }: { value: number; suffix?: string; prefix?: string; decimalLength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimalLength)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimalLength]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export function PerformanceMetrics() {
  const { isArabic } = useLanguage();

  const metrics = isArabic
    ? [
        { progress: 94, value: 94, suffix: '%', prefix: '+', label: 'تحسين الدقة', desc: 'متوسط تحسن الأداء في النماذج المهيأة للمهام المتخصصة.', color: 'text-blue-400', glow: 'bg-blue-500/20', delay: 0.1 },
        { progress: 65, value: 65, suffix: '%', prefix: '-', label: 'خفض زمن الاستجابة', desc: 'زمن استدلال أسرع بفضل الضغط والتخزين المؤقت.', color: 'text-purple-400', glow: 'bg-purple-500/20', delay: 0.3 },
        { progress: 100, value: 10, suffix: 'x', prefix: '', label: 'سعة النموذج', desc: 'زيادة في عدد الطلبات المتزامنة التي تتعامل معها الوكلاء.', color: 'text-pink-400', glow: 'bg-pink-500/20', delay: 0.5 },
        { progress: 80, value: 80, suffix: '%', prefix: '-', label: 'تحسين التكلفة', desc: 'خفض في تكلفة واجهات البرمجة والحوسبة لخطوط البيانات.', color: 'text-emerald-400', glow: 'bg-emerald-500/20', delay: 0.7 },
      ]
    : [
        { progress: 94, value: 94, suffix: '%', prefix: '+', label: 'Accuracy Improvement', desc: 'Average performance jump in fine-tuned task-specific models.', color: 'text-blue-400', glow: 'bg-blue-500/20', delay: 0.1 },
        { progress: 65, value: 65, suffix: '%', prefix: '-', label: 'Latency Reduction', desc: 'Faster inference times achieved via quantization and caching.', color: 'text-purple-400', glow: 'bg-purple-500/20', delay: 0.3 },
        { progress: 100, value: 10, suffix: 'x', prefix: '', label: 'Model Throughput', desc: 'Increase in concurrent request handling for LLM agents.', color: 'text-pink-400', glow: 'bg-pink-500/20', delay: 0.5 },
        { progress: 80, value: 80, suffix: '%', prefix: '-', label: 'Cost Optimization', desc: 'Reduction in API and compute expenditure for data pipelines.', color: 'text-emerald-400', glow: 'bg-emerald-500/20', delay: 0.7 },
      ];

  return (
    <section className="py-24 relative bg-neutral-900 border-b border-neutral-800 text-white overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-blue-500/5 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-purple-500/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-blue-400 mb-4 uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue-400"></span>
            {isArabic ? 'مؤشرات الأداء' : 'Performance Metrics'}
            <span className="w-4 h-px bg-blue-400"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
            {isArabic ? 'ذكاء ' : 'Optimized '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{isArabic ? 'مُحسَّن' : 'Intelligence'}</span>
          </h3>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            {isArabic
              ? 'الأمر لا يتعلق ببناء النماذج فقط، بل بجعلها سريعة ودقيقة وفعالة من حيث التكلفة في بيئات الإنتاج.'
              : "It's not just about building models; it's about making them fast, accurate, and cost-effective for production environments."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: metric.delay, ease: 'easeOut' }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center text-center relative overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-full ${metric.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] -z-10`} />

              <div className="relative w-32 h-32 mb-6 pointer-events-none">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-neutral-800" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className={metric.color}
                    strokeDasharray={276.5}
                    strokeDashoffset={276.5}
                    whileInView={{ strokeDashoffset: 276.5 - (276.5 * (metric.progress / 100)) }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 2, delay: metric.delay + 0.2, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-display font-semibold text-white tracking-tight">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-medium text-white mb-3">{metric.label}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
