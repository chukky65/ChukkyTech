import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isArabic } = useLanguage();

  const faqs = isArabic
    ? [
        {
          question: 'كيف يبدو التعاون في مشروع استشارات ذكاء اصطناعي؟',
          answer: 'كل تعاون يبدأ بمكالمة اكتشاف تقنية لفهم البنية البيانية والأهداف التجارية. بعد ذلك أقترح معمارية مناسبة، سواء كانت RAG مخصصة أو وكيل ذكي أو نماذج تنبؤية، مع جدول زمني ومخرجات واضحة.',
        },
        {
          question: 'هل تبني الواجهات الأمامية أيضاً؟',
          answer: 'نعم. أتخصص في التطوير المتكامل. أبني منطق الذكاء نفسه، وأبني أيضاً الواجهات التي تجعل هذا الذكاء قابلاً للاستخدام عبر React وReact Native وKotlin.',
        },
        {
          question: 'كيف تضمن أمان البيانات الخاصة؟',
          answer: 'الأمان أساسي. للعملاء المؤسسيين أعمل على نشر النماذج ضمن البنية السحابية الخاصة بكم أو إعداد ضوابط وصول صارمة للشبكات والخدمات المدارة.',
        },
        {
          question: 'هل أنت متاح لوظائف دائمة أم للمشاريع فقط؟',
          answer: 'أعمل حالياً بشكل أساسي كمستقل ومتعاقد على مستوى المشاريع، مع انفتاح على مناقشة أدوار قيادية جزئية أو كاملة إذا كان السياق مناسباً.',
        },
        {
          question: 'ما هو الجدول الزمني المعتاد للمشروع؟',
          answer: 'المدة تعتمد على النطاق. قد يستغرق نموذج أولي لنظام RAG من أسبوعين إلى أربعة أسابيع، بينما قد يستغرق منتج ذكاء اصطناعي متكامل وجاهز للإنتاج من ثلاثة إلى ستة أشهر.',
        },
      ]
    : [
        {
          question: 'What does an AI consulting engagement look like?',
          answer: "Every engagement starts with a technical discovery call to understand your data infrastructure and business goals. From there, I propose a targeted architecture - whether that's a custom RAG pipeline, a fine-tuned agent, or predictive models - along with a clear timeline and deliverables.",
        },
        {
          question: 'Do you build the frontend applications as well?',
          answer: 'Yes. I specialize in full-stack development. I build the underlying neural architectures and the user-facing wrappers (React, React Native, Kotlin) to ensure the intelligence is accessible and easy to interact with.',
        },
        {
          question: 'How do you ensure the security of proprietary data?',
          answer: 'Security is foundational. For enterprise clients, I specialize in deploying models within private cloud infrastructure or configuring strict access controls for managed APIs and internal systems.',
        },
        {
          question: 'Are you available for full-time roles or just contract projects?',
          answer: 'Currently, I operate primarily as an independent consultant and contractor on a project basis. However, I am open to discussing fractional leadership or full-time AI engineering roles for the right team.',
        },
        {
          question: 'What is your typical project timeline?',
          answer: 'Timelines vary based on scope. A proof-of-concept RAG system might take 2-4 weeks, while a production-ready, full-stack AI platform with fine-tuned models can take 3-6 months.',
        },
      ];

  return (
    <section id="faq" className="py-24 relative bg-white border-y border-neutral-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-50/80 rounded-full mix-blend-multiply opacity-50 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-50/80 rounded-full mix-blend-multiply opacity-50 blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-blue-600 mb-4 uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-blue-300"></span>
            FAQ
            <span className="w-4 h-px bg-blue-300"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-neutral-900 mb-6">
            {isArabic ? 'الأسئلة ' : 'Frequently Asked '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{isArabic ? 'المتكررة' : 'Questions'}</span>
          </h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-neutral-900 pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-50 border-blue-200 text-blue-600' : 'text-neutral-500'}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-neutral-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
