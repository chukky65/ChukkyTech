import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../i18n';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isArabic, language, toggleLanguage } = useLanguage();

  const navItems = isArabic
    ? [
        { name: 'نبذة', href: '#about' },
        { name: 'الخدمات', href: '#services' },
        { name: 'الأعمال', href: '#work' },
        { name: 'المسيرة', href: '#timeline' },
        { name: 'الأسئلة', href: '#faq' },
      ]
    : [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'FAQ', href: '#faq' },
      ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-neutral-200 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-100 transition-colors shadow-sm">
            <Terminal size={18} className="text-blue-600" />
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">Emmanuel.ai</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-2 pl-4 border-l border-neutral-200">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 rounded-full transition-colors border border-neutral-200 shadow-sm"
              title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
              aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Globe size={16} className="text-blue-600" />
              <span className="font-semibold w-6 text-center">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors shadow-md font-semibold"
            >
              {isArabic ? 'تواصل معي' : "Let's Talk"}
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 rounded-full transition-colors border border-neutral-200 shadow-sm"
            title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe size={14} className="text-blue-600" />
            <span className="font-semibold text-xs">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button
            className="text-neutral-600 hover:text-neutral-900 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 md:hidden p-6 flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-neutral-600 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
