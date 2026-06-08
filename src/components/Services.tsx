import { motion } from 'motion/react';
import { Sparkles, Activity, Layers, Terminal as TermIcon } from 'lucide-react';
import { useLanguage } from '../i18n';

export function Services() {
  const { isArabic } = useLanguage();

  const services = isArabic
    ? [
        {
          title: 'تكامل نماذج اللغة وأنظمة RAG',
          description: 'تصميم مسارات استرجاع وتوليد ديناميكية تمنح النماذج وصولاً آمناً إلى بيانات المؤسسة دون كشف قواعد المعرفة الخام.',
          icon: <Sparkles className="text-blue-600" size={24} />,
          colSpan: 'md:col-span-2',
          delay: 0.1,
        },
        {
          title: 'التحليلات التنبؤية',
          description: 'تحويل البيانات التشغيلية والمالية إلى نماذج تنبؤية تدعم القرار الفعلي، بخبرة عملية في الإقراض التقني المالي.',
          icon: <Activity className="text-pink-600" size={24} />,
          colSpan: 'md:col-span-1',
          delay: 0.2,
        },
        {
          title: 'تطبيقات ذكاء اصطناعي متكاملة',
          description: 'بناء الواجهات والأنظمة المحيطة، من Android الأصلي باستخدام Kotlin إلى React وNode، لتبسيط الذكاء المعقد للمستخدم.',
          icon: <Layers className="text-neutral-800" size={24} />,
          colSpan: 'md:col-span-1',
          delay: 0.3,
        },
        {
          title: 'الأتمتة الوكيلة',
          description: 'نشر أطر عمل متعددة الوكلاء لأتمتة المهام متعددة الخطوات داخل العمليات الداخلية ودعم تقنية المعلومات.',
          icon: <TermIcon className="text-purple-600" size={24} />,
          colSpan: 'md:col-span-2',
          delay: 0.4,
        },
      ]
    : [
        {
          title: 'LLM Integration & RAG Systems',
          description: 'Designing dynamic retrieval-augmented generation workflows. Giving models secure access to enterprise data without exposing raw knowledge bases.',
          icon: <Sparkles className="text-blue-600" size={24} />,
          colSpan: 'md:col-span-2',
          delay: 0.1,
        },
        {
          title: 'Predictive Analytics',
          description: 'Turning operational and financial datasets into predictive models that move decisions, not dust. Field-tested in fintech lending.',
          icon: <Activity className="text-pink-600" size={24} />,
          colSpan: 'md:col-span-1',
          delay: 0.2,
        },
        {
          title: 'Full-Stack AI Apps',
          description: 'Building the wrappers and interfaces. From native Android with Kotlin to React and Node, creating UI that abstracts complex intelligence.',
          icon: <Layers className="text-neutral-800" size={24} />,
          colSpan: 'md:col-span-1',
          delay: 0.3,
        },
        {
          title: 'Agentic Automation',
          description: 'Deploying multi-agent frameworks to automate multi-step reasoning tasks across internal operations and IT support pipelines.',
          icon: <TermIcon className="text-purple-600" size={24} />,
          colSpan: 'md:col-span-2',
          delay: 0.4,
        },
      ];

  return (
    <section id="services" className="py-24 relative bg-white border-y border-neutral-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-bl from-blue-50/80 via-purple-50/50 to-transparent rounded-full mix-blend-multiply opacity-70 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-gradient-to-tr from-pink-50/80 via-rose-50/50 to-transparent rounded-full mix-blend-multiply opacity-70 blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-mono text-neutral-800 uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {isArabic ? 'القدرات' : 'Capabilities'}
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-neutral-900">
            {isArabic ? 'ما الذي يمكنني ' : 'What I can '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{isArabic ? 'إنجازه' : 'unblock'}</span>
            {isArabic ? ' معك.' : ' with you.'}
          </h3>
          <p className="text-neutral-600 text-lg">
            {isArabic
              ? 'يمكنك الاستعانة بي كمهندس ذكاء اصطناعي متخصص أو كمطور متكامل يربط بين النماذج الخام وتجربة المستخدم.'
              : 'Hire me as a specialized AI architect or as a full-stack engineer bridging the gap between raw models and user experiences.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: service.delay || (idx % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-white rounded-3xl p-10 min-h-[300px] flex flex-col justify-end group border border-neutral-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden ${service.colSpan}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl border border-neutral-100 flex items-center justify-center mb-10 group-hover:-translate-y-2 group-hover:border-blue-200 transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-semibold text-neutral-900 mb-4">{service.title}</h4>
                <p className="text-neutral-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
