import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Sparkles, Volume2, VolumeX, Download } from 'lucide-react';
import { useLanguage } from '../i18n';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        badge: 'خبير ذكاء اصطناعي معتمد (AiCE)',
        titlePrefix: 'أبني',
        titleHighlight: 'ذكاءً',
        titleSuffix: 'يتوسع بثقة.',
        intro:
          'أنا تشوكس أوكافور إيمانويل - مهندس ذكاء اصطناعي أصمم البنى الوكيلة، وأهيئ نماذج اللغة، وأنشر خطوط بيانات قوية.',
        work: 'شاهد الأعمال',
        capabilities: 'القدرات',
        resume: 'تنزيل السيرة الذاتية',
        listen: 'استمع إلى نبذتي',
        stop: 'أوقف الصوت',
        cardTitle: 'حلول ذكاء اصطناعي متكاملة',
        cardSubtitle: 'متاح للمشاريع',
        speech:
          'مرحباً، أنا تشوكس أوكافور إيمانويل، مهندس ذكاء اصطناعي. أتخصص في تصميم البنى الوكيلة، وتهيئة نماذج اللغة، ونشر خطوط بيانات قوية. أعمل عند نقطة التقاء الشبكات العصبية والبيانات والمنفعة البشرية.',
      }
    : {
        badge: 'Certified AI Expert (AiCE)',
        titlePrefix: 'Building',
        titleHighlight: 'intelligence',
        titleSuffix: 'that scales.',
        intro:
          "I'm Chuks Okafor Emmanuel - an AI Engineer designing agentic architectures, fine-tuning LLMs, and deploying robust data pipelines.",
        work: 'See the work',
        capabilities: 'Capabilities',
        resume: 'Download Resume',
        listen: 'Listen to my Intro',
        stop: 'Stop Intro',
        cardTitle: 'Full-Stack AI Integrations',
        cardSubtitle: 'Available for projects',
        speech:
          "Hi, I'm Chuks Okafor Emmanuel, an AI Engineer. I specialize in designing agentic architectures, fine-tuning LLMs, and deploying robust data pipelines. I work where neural networks, data, and human utility meet.",
      };

  const handleListen = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(content.speech);
    utterance.lang = isArabic ? 'ar-OM' : 'en-US';
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-32 pb-20 text-slate-950 md:pt-48 md:pb-32">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-100"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src="/hero-overlay.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,rgba(255,255,255,0.95),rgba(255,255,255,0.8)_23%,rgba(255,255,255,0.22)_46%,transparent_60%),linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.8)_28%,rgba(255,255,255,0.26)_50%,transparent_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_82%_78%,rgba(148,163,184,0.12),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 [mask-image:linear-gradient(to_right,#000_0%,#000_48%,transparent_82%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/82 px-5 py-2 text-sm font-mono tracking-wide text-slate-700 shadow-sm backdrop-blur-md">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300"></span>
                </span>
                {content.badge}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mb-8 text-5xl leading-[1.06] font-bold tracking-tight text-slate-950 md:text-7xl lg:text-[5.5rem]"
            >
              {content.titlePrefix}{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-slate-700 bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>{' '}
              {content.titleSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mb-10 max-w-2xl text-lg leading-relaxed font-light text-slate-600 md:text-2xl"
            >
              {content.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 font-medium text-white shadow-lg transition-colors hover:bg-slate-800"
              >
                {content.work}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/82 px-8 py-4 font-medium text-slate-800 shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white"
              >
                <Cpu size={18} className="text-cyan-500" />
                {content.capabilities}
              </a>
              <a
                href="/Chuks_Okafor_Resume.pdf"
                download="Chuks_Okafor_Resume.pdf"
                className="group flex items-center gap-3 rounded-full border border-slate-200 bg-white/82 px-6 py-4 font-medium text-slate-800 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-300/60 hover:bg-white"
              >
                <Download
                  size={18}
                  className="text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:text-cyan-500"
                />
                <span>{content.resume}</span>
              </a>
              <button
                onClick={handleListen}
                className={`flex items-center gap-3 rounded-full border px-6 py-4 font-medium shadow-sm backdrop-blur-sm transition-all ${
                  isPlaying
                    ? 'border-cyan-400/60 bg-cyan-50 text-cyan-600'
                    : 'border-slate-200 bg-white/82 text-slate-800 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {isPlaying ? (
                  <>
                    <VolumeX size={18} className="text-cyan-500" />
                    <span>{content.stop}</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={18} className="text-cyan-500" />
                    <span>{content.listen}</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:col-span-5"
          >
            <div className="absolute top-[22%] left-8 -z-10 h-56 w-56 rounded-full bg-cyan-200/65 blur-[110px]" />
            <div className="absolute top-1/2 right-0 -z-10 h-64 w-48 -translate-y-1/2 rounded-full bg-slate-200/55 blur-[90px]" />

            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-2 shadow-[0_30px_80px_rgba(148,163,184,0.28)] backdrop-blur-md">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src="/profile.jpg"
                  alt={isArabic ? 'تشوكس أوكافور إيمانويل' : 'Chuks Okafor Emmanuel'}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/56 via-transparent to-transparent opacity-70" />
                <div className="absolute right-6 bottom-6 left-6">
                  <div className="flex items-center gap-3 rounded-xl border border-white/75 bg-white/72 px-4 py-3 shadow-lg backdrop-blur-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50">
                      <Sparkles size={18} className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{content.cardTitle}</p>
                      <p className="text-xs font-medium text-slate-500">{content.cardSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
