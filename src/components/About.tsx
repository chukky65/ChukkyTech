import { motion } from 'motion/react';
import { Database, Code, BrainCircuit, LineChart, Clock } from 'lucide-react';
import { useLanguage } from '../i18n';

export function About() {
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        section: 'عن المهندس',
        readTime: 'قراءة دقيقة',
        headingPrefix: 'أعمل حيث تلتقي',
        headingHighlight: 'الشبكات العصبية',
        headingSuffix: 'والبيانات والمنفعة البشرية.',
        paragraphOne: 'بدأت رحلتي في قاعات تقنية المعلومات في أسابا وأبوجا. ثم قادني هذا الحس بحل المشكلات إلى عملي في التكنولوجيا المالية داخل Moniepoint، حيث أقيّم مخاطر الائتمان المعتمدة على البيانات.',
        paragraphTwo: 'اليوم، وبصفتي خبير ذكاء اصطناعي معتمد، أركز على هندسة الذكاء - من الوكلاء المعتمدين على نماذج اللغة إلى النماذج التنبؤية. أهتم بذكاء اصطناعي يحترم المستخدم: موثوق بهدوء، وصريح بشأن حدوده، وفعّال بدرجة عالية.',
        labels: {
          location: 'الموقع',
          locationValue: 'مسقط، عُمان',
          reach: 'نطاق العمل',
          reachValue: 'حول العالم',
          credentials: 'المؤهلات',
          credentialsValue: 'AiCE، بكالوريوس علوم الحاسوب',
          affiliations: 'العضويات',
          affiliationsValue: 'جمعية الحاسوب النيجيرية',
        },
        cards: [
          { title: 'التعلم العميق', description: 'تصميم البنى العصبية وتهيئة النماذج بدقة.', icon: <BrainCircuit size={24} className="text-blue-400" />, tone: 'bg-blue-500/20' },
          { title: 'علم البيانات', description: 'خطوط بيانات قوية وتحليلات تنبؤية قابلة للتنفيذ.', icon: <Database size={24} className="text-purple-400" />, tone: 'bg-purple-500/20' },
          { title: 'برمجيات تُسلَّم فعلياً', description: 'بناء واجهات وأنظمة تشغيلية باستخدام Python وReact وKotlin.', icon: <Code size={24} className="text-pink-400" />, tone: 'bg-pink-500/20' },
          { title: 'نماذج الائتمان', description: 'تطبيق الذكاء الاصطناعي على تقييم المخاطر وتحويل البيانات إلى قرارات.', icon: <LineChart size={24} className="text-emerald-400" />, tone: 'bg-emerald-500/20' },
        ],
      }
    : {
        section: 'About The Engineer',
        readTime: '1 min read',
        headingPrefix: 'I work where',
        headingHighlight: 'neural networks',
        headingSuffix: 'data, and human utility meet.',
        paragraphOne: 'My journey started in ICT classrooms in Asaba and Abuja. That same problem-solving instinct later drove my work in fintech at Moniepoint, assessing data-driven credit risk.',
        paragraphTwo: 'Today, as a Certified AI Expert, I focus on the architecture of intelligence - from LLM-backed reasoning agents to predictive models. I care about AI that respects the user: quietly reliable, honest about its limits, and highly effective.',
        labels: {
          location: 'Located in',
          locationValue: 'Muscat, Oman',
          reach: 'Working with',
          reachValue: 'Worldwide',
          credentials: 'Credentials',
          credentialsValue: 'AiCE, B.Sc. CompSci',
          affiliations: 'Affiliations',
          affiliationsValue: 'Nigeria Computer Society',
        },
        cards: [
          { title: 'Deep Learning', description: 'Architecting neural structures and fine-tuning models.', icon: <BrainCircuit size={24} className="text-blue-400" />, tone: 'bg-blue-500/20' },
          { title: 'Data Science', description: 'Robust data pipelines and predictive analytics.', icon: <Database size={24} className="text-purple-400" />, tone: 'bg-purple-500/20' },
          { title: 'Code that Ships', description: 'Building wrapped UIs with Python, React, and Kotlin.', icon: <Code size={24} className="text-pink-400" />, tone: 'bg-pink-500/20' },
          { title: 'Credit Models', description: 'Applying AI to evaluate finance risk and turn data into decisions.', icon: <LineChart size={24} className="text-emerald-400" />, tone: 'bg-emerald-500/20' },
        ],
      };

  return (
    <section id="about" className="py-32 relative bg-neutral-950 text-white border-y border-neutral-800 overflow-hidden">
      <div className="absolute top-0 -left-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob z-0"></div>
      <div className="absolute top-0 -right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-8 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob animation-delay-4000 z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between mb-4 pr-12 md:pr-0">
              <h2 className="text-sm font-mono text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-4 h-px bg-blue-400"></span>
                {content.section}
              </h2>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400">
                <Clock size={12} />
                <span>{content.readTime}</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6 mt-4 text-white">
              {content.headingPrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{content.headingHighlight}</span>, {content.headingSuffix}
            </h3>
            <p className="text-neutral-400 text-xl mb-6 leading-relaxed font-light">
              {content.paragraphOne}
            </p>
            <p className="text-neutral-400 text-xl mb-8 leading-relaxed font-light">
              {content.paragraphTwo}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-800">
              <div>
                <p className="text-sm text-neutral-500 mb-1">{content.labels.location}</p>
                <p className="font-medium text-white">{content.labels.locationValue}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">{content.labels.reach}</p>
                <p className="font-medium text-white">{content.labels.reachValue}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">{content.labels.credentials}</p>
                <p className="font-medium text-white">{content.labels.credentialsValue}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">{content.labels.affiliations}</p>
                <p className="font-medium text-white">{content.labels.affiliationsValue}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            {content.cards.map((card, index) => (
              <div
                key={card.title}
                className={`space-y-4 ${index >= 2 ? 'md:mt-12' : ''}`}
              >
                <div className="p-8 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 flex flex-col items-start min-h-[220px] transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20">
                  <div className={`w-12 h-12 rounded-full ${card.tone} flex items-center justify-center mb-6`}>
                    {card.icon}
                  </div>
                  <h4 className="font-medium text-lg text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-neutral-400">{card.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
