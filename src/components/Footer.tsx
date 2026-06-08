import { Terminal, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const { isArabic } = useLanguage();

  const content = isArabic
    ? {
        shareTitle: 'تشوكس أوكافور إيمانويل | مهندس ذكاء اصطناعي',
        shareText: 'اطّلع على ملف تشوكس أوكافور إيمانويل، مهندس ذكاء اصطناعي متخصص في البنى الوكيلة ونماذج اللغة.',
        rights: 'تشوكس أوكافور إيمانويل. جميع الحقوق محفوظة.',
        copied: 'تم نسخ الرابط',
        share: 'مشاركة الملف',
      }
    : {
        shareTitle: 'Chuks Okafor Emmanuel | AI Engineer',
        shareText: 'Check out the portfolio of Chuks Okafor Emmanuel, an AI Engineer specializing in agentic architectures and LLMs.',
        rights: 'Chuks Okafor Emmanuel. All rights reserved.',
        copied: 'Link Copied',
        share: 'Share Portfolio',
      };

  const handleShare = async () => {
    const shareData = {
      title: content.shareTitle,
      text: content.shareText,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <footer className="py-8 border-t border-neutral-800 bg-neutral-950 text-center md:text-left">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <Terminal size={16} className="text-blue-400" />
            <span className="font-display font-semibold text-white">Emmanuel.ai</span>
            <span className="text-sm">(c) {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-neutral-500">{content.rights}</div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-4 text-sm font-semibold text-neutral-400">
            <a href="https://www.linkedin.com/in/chuks-emmanuel-2a1739225" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/chukky65" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>

          <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all font-mono text-xs uppercase tracking-wider group">
            {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} className="group-hover:-translate-y-0.5 transition-transform text-blue-400" />}
            <span>{copied ? content.copied : content.share}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
