import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

export function Projects() {
  const { isArabic } = useLanguage();

  const projects = isArabic
    ? [
        {
          title: 'نظام ERP لشركة Atwar Al Mustaqbal Enterprise',
          desc: 'بنيت نظام ERP للشركة وأتولى إدارة البرنامج وتحسين تشغيله باستمرار بما يدعم العمليات اليومية والمتابعة الداخلية.',
          tags: ['ERP', 'أنظمة أعمال', 'تشغيل'],
          year: 'مستمر',
        },
        {
          title: 'حلول تجارة إلكترونية وأنظمة مدرسية',
          desc: 'عملت كمستقل على بناء برامج تجارة إلكترونية لعدة عملاء، إلى جانب تطوير أنظمة إدارة مدرسية تتوافق مع سير العمل والتقارير.',
          tags: ['تجارة إلكترونية', 'إدارة مدارس', 'عمل حر'],
          year: 'مستمر',
        },
        {
          title: 'تحليلات محفظة ائتمانية في Moniepoint',
          desc: 'نظام لإدارة المحفظة النشطة يحلل دوران الشركات الصغيرة والمخزون والالتزام بالسداد لتحقيق أهداف الربحية.',
          tags: ['تحليل بيانات', 'تقييم قروض', 'تحليل أعمال'],
          year: '2025',
        },
        {
          title: 'متعقب أداء متعلمي ALX',
          desc: 'سير عمل لمتابعة تقدم المتعلمين والاختبارات والجلسات التعاونية من أجل الحفاظ على التفاعل.',
          tags: ['تحليل بيانات', 'تقارير', 'متابعة الأداء'],
          year: '2024',
        },
        {
          title: 'تطبيق أندرويد لتأجير المنازل',
          desc: 'تطبيق أندرويد تم تطويره باستخدام Kotlin وAndroid Studio للعقارات السكنية، مع اختبار وتصحيح عبر logcat وواجهات أندرويد الحديثة.',
          tags: ['أندرويد', 'Kotlin', 'تطوير جوال'],
          year: '2022',
        },
      ]
    : [
        {
          title: 'Atwar Al Mustaqbal Enterprise ERP System',
          desc: 'Built an ERP system for the company and currently manage the ERP software, operations flow, and ongoing improvements.',
          tags: ['ERP', 'Business Systems', 'Operations'],
          year: 'Ongoing',
        },
        {
          title: 'Freelance Ecommerce & School Systems',
          desc: 'Worked as a freelancer building ecommerce software for several clients, alongside school management systems tailored to operations and reporting.',
          tags: ['Ecommerce', 'School Management', 'Freelance'],
          year: 'Ongoing',
        },
        {
          title: 'Moniepoint Credit Portfolio Analytics',
          desc: 'Active portfolio management system analyzing SME turnover, inventory, and repayment compliance using financial data to hit profitability targets.',
          tags: ['Data Analytics', 'Loan Evaluation', 'Business Analysis'],
          year: '2025',
        },
        {
          title: 'ALX Learner Performance Tracker',
          desc: 'A tracking workflow to assist ALX learners, monitoring module progress, quizzes, and peer learning sessions to maintain engagement.',
          tags: ['Data Analytics', 'Reporting', 'Performance Tracking'],
          year: '2024',
        },
        {
          title: 'House Rental Android App',
          desc: 'An Android application developed using Kotlin and Android Studio for property rentals. Tested and debugged via logcat and latest Android APIs.',
          tags: ['Android', 'Kotlin', 'Mobile Dev'],
          year: '2022',
        },
      ];

  return (
    <section id="work" className="py-32 relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-blue-400 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-px bg-blue-400"></span>
              {isArabic ? 'أعمال مختارة' : 'Selected Work'}
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">
              {isArabic ? 'أعمال أنجزتها فعلياً.' : "Things I've deployed."}
            </h3>
          </div>
          <a href="#contact" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors border-b border-neutral-700 pb-1 self-start md:self-end">
            {isArabic ? 'اطلب عرض تفاصيل المشاريع' : 'Request project breakdown'} <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8 gap-4">
                <span className="text-sm font-mono text-neutral-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">{p.year}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 text-right">{isArabic ? 'عرض تفصيلي عند الطلب' : 'Case study on request'}</span>
              </div>
              <h4 className="text-3xl font-display font-medium text-white mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h4>
              <p className="text-neutral-400 mb-8 leading-relaxed flex-grow text-lg font-light">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                    {t}
                  </span>
                ))}
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                {isArabic ? 'ناقش هذا المشروع' : 'Discuss this project'}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
