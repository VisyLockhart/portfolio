import { GITHUB, content, pathFor, type Lang } from './content';

const SITE = 'https://portfolio.aequoreranos.com';
const abs = (lang: Lang, slug = '') => new URL(pathFor(lang, slug), SITE).href;

export function personGraph(lang: Lang): Record<string, unknown>[] {
  const c = content[lang];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Visy Lockhart',
      url: abs(lang),
      jobTitle: lang === 'en' ? 'Full-stack developer' : '全端開發者',
      description: c.home.description,
      sameAs: [GITHUB],
      knowsAbout: ['.NET', 'ASP.NET Core', 'Angular', 'TypeScript', 'Node.js', 'Docker', 'Unity'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Visy Lockhart',
      url: abs(lang),
      inLanguage: c.htmlLang,
      publisher: { '@id': `${SITE}/#person` },
    },
  ];
}

export function breadcrumb(lang: Lang, slug: string, label: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: content[lang].common.breadcrumbHome, item: abs(lang) },
      { '@type': 'ListItem', position: 2, name: label, item: abs(lang, slug) },
    ],
  };
}

export function softwareCode(lang: Lang, slug: string, name: string, description: string, repo: string, language: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name,
    description,
    url: abs(lang, slug),
    codeRepository: repo,
    programmingLanguage: language,
    author: { '@id': `${SITE}/#person` },
    inLanguage: content[lang].htmlLang,
  };
}

export function profilePage(lang: Lang): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: abs(lang, 'about'),
    inLanguage: content[lang].htmlLang,
    mainEntity: { '@id': `${SITE}/#person` },
  };
}
