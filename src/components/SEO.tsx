import { useEffect } from 'react';
import { useLanguage } from '../i18n';

export function SEO() {
  const { isArabic } = useLanguage();

  useEffect(() => {
    const canonicalUrl = window.location.origin;
    const title = isArabic
      ? 'تشوكس أوكافور إيمانويل | مهندس ذكاء اصطناعي ومحلل بيانات'
      : 'Chuks Okafor Emmanuel | AI Engineer & Data Analyst';
    const description = isArabic
      ? 'ملف تشوكس أوكافور إيمانويل، متخصص في الذكاء الاصطناعي والبنى الوكيلة ونماذج اللغة وتحليل البيانات.'
      : 'Portfolio of Chuks Okafor Emmanuel, specializing in AI, agentic architectures, LLMs, and data analytics.';

    document.title = title;

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href.split('?')[0];

    const updateMeta = (selector: string, attribute: 'name' | 'property', key: string, value: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.content = value;
    };

    updateMeta("meta[name='description']", 'name', 'description', description);
    updateMeta("meta[property='og:title']", 'property', 'og:title', title);
    updateMeta("meta[property='og:description']", 'property', 'og:description', description);
    updateMeta("meta[name='twitter:title']", 'name', 'twitter:title', title);
    updateMeta("meta[name='twitter:description']", 'name', 'twitter:description', description);

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: 'Chuks Okafor Emmanuel',
          url: canonicalUrl,
          jobTitle: isArabic ? 'مهندس ذكاء اصطناعي ومحلل بيانات' : 'AI Engineer & Data Analyst',
          worksFor: {
            '@type': 'Organization',
            name: 'Moniepoint',
          },
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'University of Uyo',
            },
            {
              '@type': 'EducationalOrganization',
              name: 'ALX Africa',
            },
          ],
          sameAs: [
            'https://www.linkedin.com/in/chuks-emmanuel-2a1739225',
            'https://github.com/chukky65',
          ],
        },
        {
          '@type': 'ProfessionalService',
          name: 'Emmanuel.ai - AI Consulting & Integrations',
          description: isArabic
            ? 'متخصص في بنى الذكاء الاصطناعي والتطوير المتكامل ونماذج اللغة وتحليل البيانات'
            : 'Specializing in AI architectures, full-stack development, LLMs, and data analytics',
          url: canonicalUrl,
          telephone: '+2347068929914',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Muscat',
            addressCountry: 'OM',
          },
        },
      ],
    };

    let script = document.querySelector("script[type='application/ld+json']") as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdData);
  }, [isArabic]);

  return null;
}
