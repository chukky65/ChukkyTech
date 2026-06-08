import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n';

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2a9.96 9.96 0 0 0-8.6 14.98L2 22l5.2-1.36A9.95 9.95 0 0 0 12.02 22 9.99 9.99 0 0 0 22 12c0-2.67-1.04-5.18-2.95-7.06ZM12.02 20.3a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.08.8.82-3-.2-.31a8.27 8.27 0 1 1 6.96 3.84Zm4.54-6.18c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.24-.75-.67-1.26-1.49-1.4-1.74-.15-.25-.02-.38.11-.5.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.69.32-.23.25-.89.87-.89 2.12 0 1.25.91 2.46 1.03 2.63.13.17 1.79 2.73 4.34 3.83.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.46-.6 1.67-1.18.21-.57.21-1.06.15-1.17-.06-.1-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        section: 'التواصل',
        title: 'لنبرمج المستقبل.',
        body: 'سواء كنت تريد نشر وكيل ذكاء اصطناعي، أو إصلاح خطوط البيانات، أو الاستشارة في استراتيجية الذكاء الاصطناعي - ابدأ برسالة.',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        location: 'الموقع',
        locationValue: 'مسقط، عُمان',
        name: 'الاسم',
        emailLabel: 'البريد الإلكتروني',
        inquiry: 'نوع الطلب',
        message: 'الرسالة',
        namePlaceholder: 'أدخل اسمك',
        emailPlaceholder: 'name@example.com',
        messagePlaceholder: 'أخبرني عن التحدي الذي تعمل عليه...',
        options: ['استشارات وتكاملات ذكاء اصطناعي', 'تحليل بيانات', 'تطوير تطبيقات متكاملة', 'أخرى / تواصل عام'],
        submit: 'إرسال الرسالة',
        success: 'تم تجهيز الرسالة',
        error: 'تعذر إرسال الرسالة. حاول مرة أخرى لاحقاً.',
      }
    : {
        section: 'Contact',
        title: "Let's code the future.",
        body: "Whether it's deploying an LLM agent, fixing your data pipelines, or consulting on AI strategy - start with a message.",
        email: 'EMAIL',
        phone: 'PHONE',
        whatsapp: 'WHATSAPP',
        location: 'LOCATION',
        locationValue: 'Muscat, Oman',
        name: 'Name',
        emailLabel: 'Email',
        inquiry: 'Inquiry Type',
        message: 'Message',
        namePlaceholder: 'Alan Turing',
        emailPlaceholder: 'alan@enigma.com',
        messagePlaceholder: 'Tell me about your challenges...',
        options: ['AI Consulting & Integrations', 'Data Analytics', 'Full-Stack App Development', 'Other / General Chat'],
        submit: 'Initialize Connection',
        success: 'Message Prepared',
        error: 'Failed to send message. Please try again later.',
      };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/ogachuchu65@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: 'New Portfolio Message: ' + data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch (error) {
      console.error(error);
      alert(content.error);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-neutral-800 bg-neutral-950 py-32 text-white">
      <div className="absolute top-1/2 right-1/4 h-[600px] w-[600px] animate-blob rounded-full bg-blue-500/20 opacity-40 mix-blend-screen blur-[120px] pointer-events-none" />
      <div className="animation-delay-2000 absolute bottom-0 left-1/4 h-[600px] w-[600px] animate-blob rounded-full bg-purple-500/20 opacity-40 mix-blend-screen blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="mb-4 flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-blue-400">
              <span className="h-px w-4 bg-blue-400"></span>
              {content.section}
            </h2>
            <h3 className="mb-8 text-4xl font-display font-medium tracking-tight text-white md:text-5xl lg:text-7xl">{content.title}</h3>
            <p className="mb-12 max-w-md text-xl leading-relaxed font-light text-neutral-400">{content.body}</p>

            <div className="space-y-8">
              <a href="mailto:ogachuchu65@gmail.com" className="group flex items-center gap-6 text-neutral-400 transition-colors hover:text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-sm transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                  <Mail size={24} className="transition-colors group-hover:text-blue-400" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-mono text-neutral-500">{content.email}</div>
                  <div className="text-lg font-medium text-white">ogachuchu65@gmail.com</div>
                </div>
              </a>

              <a href="tel:+2347068929914" className="group flex items-center gap-6 text-neutral-400 transition-colors hover:text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-sm transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                  <Phone size={24} className="transition-colors group-hover:text-blue-400" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-mono text-neutral-500">{content.phone}</div>
                  <div className="text-lg font-medium text-white">+234 7068929914</div>
                </div>
              </a>

              <a href="https://wa.me/96890714540" target="_blank" rel="noreferrer" className="group flex items-center gap-6 text-neutral-400 transition-colors hover:text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-sm transition-all group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                  <WhatsAppIcon className="h-6 w-6 transition-colors group-hover:text-emerald-400" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-mono text-neutral-500">{content.whatsapp}</div>
                  <div className="text-lg font-medium text-white">+968 9071 4540</div>
                </div>
              </a>

              <div className="group flex items-center gap-6 text-neutral-400">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-sm transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                  <MapPin size={24} className="transition-colors group-hover:text-blue-400" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-mono text-neutral-500">{content.location}</div>
                  <div className="text-lg font-medium text-white">{content.locationValue}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/80 p-8 shadow-2xl backdrop-blur-xl md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">{content.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all duration-300 hover:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500"
                    placeholder={content.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">{content.emailLabel}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all duration-300 hover:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500"
                    placeholder={content.emailPlaceholder}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">{content.inquiry}</label>
                <select
                  name="subject"
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all duration-300 hover:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500"
                >
                  {content.options.map((option) => (
                    <option key={option} className="bg-neutral-900">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">{content.message}</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white transition-all duration-300 hover:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500"
                  placeholder={content.messagePlaceholder}
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white py-4 font-medium text-black transition-all hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98]"
              >
                <span className={`flex items-center gap-2 transition-transform duration-300 ${isSubmitted ? '-translate-y-12' : 'translate-y-0'}`}>
                  {content.submit}
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className={`absolute flex items-center gap-2 text-green-600 transition-transform duration-300 ${isSubmitted ? 'translate-y-0' : 'translate-y-12'}`}>
                  {content.success}
                  <CheckCircle2 size={18} />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
