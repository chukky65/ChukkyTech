import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

export function Timeline() {
  const { isArabic } = useLanguage();

  const timeline = isArabic
    ? [
        { year: '2025 - الآن', role: 'مسؤول ائتمان ميداني / تكاملات ذكاء اصطناعي', company: 'Moniepoint, Asaba', desc: 'تقييم جدوى الشركات الصغيرة وربط بيانات الميدان بمنصات الإقراض المؤتمتة.' },
        { year: 'مستمر', role: 'مطوّر ومدير نظام ERP', company: 'Atwar Al Mustaqbal Enterprise', desc: 'بناء نظام ERP للشركة وإدارة تشغيله وتحسيناته المستمرة.' },
        { year: 'مستمر', role: 'مطوّر برمجيات مستقل', company: 'Freelance', desc: 'تطوير حلول تجارة إلكترونية وأنظمة إدارة مدرسية لعدة عملاء بحسب متطلبات التشغيل والتقارير.' },
        { year: '2024', role: 'خبير ذكاء اصطناعي معتمد (AiCE)', company: 'Certification', desc: 'تدريب تطبيقي صارم على التعلم العميق ونماذج اللغة ومسارات العمل الوكيلة.' },
        { year: '2024', role: 'سفير تحليلات بيانات', company: 'ALX Nigeria', desc: 'إرشاد المتعلمين وبناء نماذج أداء تنبؤية لمتابعة التفاعل.' },
        { year: '2019 - 2022', role: 'دعم تقني ومدرب', company: 'Elyon Comprehensive High School', desc: 'دعم شامل لتقنية المعلومات وإدارة الأنظمة من البداية إلى النهاية.' },
      ]
    : [
        { year: '2025 - Now', role: 'Field Credit Officer / AI Integrations', company: 'Moniepoint, Asaba', desc: 'Assessing SME viability and bridging gaps between field data and automated lending platforms.' },
        { year: 'Ongoing', role: 'ERP Systems Developer & Administrator', company: 'Atwar Al Mustaqbal Enterprise', desc: 'Built the company ERP system and continue managing the software, operations flow, and improvements.' },
        { year: 'Ongoing', role: 'Freelance Software Developer', company: 'Freelance', desc: 'Built ecommerce software for several clients and delivered school management systems tailored to operational reporting and daily use.' },
        { year: '2024', role: 'Certified AI Expert (AiCE)', company: 'Certification', desc: 'Rigorous training and application of deep learning models, LLMs, and agentic workflows.' },
        { year: '2024', role: 'Data Analytics Ambassador', company: 'ALX Nigeria', desc: 'Mentored cohorts and built predictive performance models to track learner engagement.' },
        { year: '2019 - 2022', role: 'IT Support & Instructor', company: 'Elyon Comprehensive High School', desc: 'End-to-end ICT support and systems management.' },
      ];

  return (
    <section id="timeline" className="py-24 relative bg-white overflow-hidden">
      <div className="absolute top-1/4 -right-1/4 w-[40rem] h-[40rem] bg-blue-50/80 rounded-full mix-blend-multiply opacity-70 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[40rem] h-[40rem] bg-purple-50/80 rounded-full mix-blend-multiply opacity-70 blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl pt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-blue-600 mb-4 uppercase tracking-wider text-center flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue-300"></span>
            {isArabic ? 'المسيرة' : 'Timeline'}
            <span className="w-4 h-px bg-blue-300"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-center text-neutral-900">
            {isArabic ? 'سنوات من ' : 'Six years. '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{isArabic ? 'التطور المستمر' : 'Constant evolution.'}</span>
          </h3>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-blue-100 before:via-purple-200 before:to-pink-100">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative flex flex-col md:flex-row items-start justify-between md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-blue-50 shadow-md shrink-0 absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-all duration-500 group-hover:border-blue-200 group-hover:bg-blue-100 group-hover:scale-110">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 transition-shadow group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
              </div>

              <div className="ml-16 md:ml-0 md:w-[calc(50%-3rem)] bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex flex-col mb-4 gap-2 border-b border-neutral-100 pb-4">
                    <time className="text-sm font-mono font-semibold text-blue-600 bg-blue-50 self-start px-2 py-1 rounded-md">{item.year}</time>
                    <h4 className="font-semibold text-xl text-neutral-900">{item.role}</h4>
                  </div>
                  <div className="text-sm font-semibold text-neutral-500 mb-3 uppercase tracking-wider">{item.company}</div>
                  <p className="text-neutral-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
