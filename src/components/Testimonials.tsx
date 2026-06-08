import { motion } from 'motion/react';
import { BriefcaseBusiness, GraduationCap, Landmark } from 'lucide-react';
import { useLanguage } from '../i18n';

export function Testimonials() {
  const { isArabic } = useLanguage();

  const highlights = isArabic
    ? [
        {
          icon: Landmark,
          title: 'عمليات التكنولوجيا المالية',
          company: 'Moniepoint',
          summary: 'عمليات ائتمان ميدانية، وتحليل محافظ، وفهم عملي لدمج الذكاء الاصطناعي داخل بيئات إقراض حية.',
        },
        {
          icon: GraduationCap,
          title: 'أنظمة البيانات والتعلم',
          company: 'ALX Nigeria',
          summary: 'متابعة المتعلمين، وتحليل التفاعل، وبناء أنظمة دعم قائمة على قياس الأداء الفعلي.',
        },
        {
          icon: BriefcaseBusiness,
          title: 'البنية التشغيلية لتقنية المعلومات',
          company: 'Client Delivery',
          summary: 'تسليم أنظمة ERP وتجارب تجارة إلكترونية ومنصات إدارة مدرسية تدعم التشغيل والمتابعة اليومية.',
        },
      ]
    : [
        {
          icon: Landmark,
          title: 'Fintech Operations',
          company: 'Moniepoint',
          summary: 'Field credit operations, portfolio analysis, and practical AI integration thinking grounded in live lending workflows.',
        },
        {
          icon: GraduationCap,
          title: 'Data & Learning Systems',
          company: 'ALX Nigeria',
          summary: 'Learner tracking, engagement analysis, and support systems built around measurable follow-through.',
        },
        {
          icon: BriefcaseBusiness,
          title: 'Operational Software Delivery',
          company: 'Client Delivery',
          summary: 'ERP implementation, ecommerce builds, and school management platforms designed for daily business use.',
        },
      ];

  return (
    <section className="py-32 relative bg-neutral-950 text-white border-b border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-sm font-mono text-blue-400 mb-4 uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue-400"></span>
            {isArabic ? 'محطات مهنية' : 'Professional Highlights'}
            <span className="w-4 h-px bg-blue-400"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
            {isArabic ? 'أين وصل هذا ' : 'Where the work has '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{isArabic ? 'العمل' : 'landed'}</span>
            {isArabic ? '.' : '.'}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.company + item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              >
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <p className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-3">{item.company}</p>
                <h4 className="text-2xl font-display font-medium text-white mb-4">{item.title}</h4>
                <p className="text-neutral-300 leading-relaxed">{item.summary}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
