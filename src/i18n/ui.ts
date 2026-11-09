export const LANGS = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof LANGS;
export const DEFAULT_LANG: Lang = 'es';

/** Segmento de la ruta de proyectos en cada idioma. */
export const PROJECTS_SEGMENT: Record<Lang, string> = { es: 'proyectos', en: 'projects' };

export const UI = {
  es: {
    'meta.description': 'Ingeniero frontend senior que construye productos con IA: casos de estudio, decisiones técnicas y cómo trabajo con agentes.',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.skip': 'Saltar al contenido',
    'lang.switch': 'English',
    'hero.title': 'Construyo productos web con IA, de la idea a producción.',
    'hero.lead': 'Ingeniero frontend senior. Diseño y mantengo aplicaciones reales que usa gente real, y ahora me centro en producto con LLM y desarrollo con agentes.',
    'projects.title': 'Proyectos',
    'projects.lead': 'Cada uno con el problema, las decisiones y por qué las tomé.',
    'project.stack': 'Stack',
    'project.links': 'Enlaces',
    'project.repo': 'Código',
    'project.demo': 'Ver en marcha',
    'project.private': 'Código privado: se muestra con diagramas y fragmentos.',
    'project.back': 'Todos los proyectos',
    'project.read': 'Leer el caso',
    'project.draft': 'Borrador',
    'contact.title': 'Contacto',
    'contact.lead': '¿Buscas a alguien que lleve IA a producto con criterio? Hablemos.',
    'notfound.title': 'Página no encontrada',
    'notfound.back': 'Volver al inicio',
  },
  en: {
    'meta.description': 'Senior frontend engineer building AI-powered products: case studies, technical decisions and how I work with agents.',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Español',
    'hero.title': 'I build AI-powered web products, from idea to production.',
    'hero.lead': 'Senior frontend engineer. I design and maintain real applications used by real people, and I now focus on LLM products and agentic development.',
    'projects.title': 'Projects',
    'projects.lead': 'Each one with the problem, the decisions and why I made them.',
    'project.stack': 'Stack',
    'project.links': 'Links',
    'project.repo': 'Code',
    'project.demo': 'Live',
    'project.private': 'Private code: shown through diagrams and snippets.',
    'project.back': 'All projects',
    'project.read': 'Read the case study',
    'project.draft': 'Draft',
    'contact.title': 'Contact',
    'contact.lead': 'Looking for someone who brings AI into products with sound judgement? Let’s talk.',
    'notfound.title': 'Page not found',
    'notfound.back': 'Back to home',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof UI)['es'];

export const t = (lang: Lang) => (key: UIKey): string => UI[lang][key];

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

/** Ruta de inicio de un idioma (el español no lleva prefijo). */
export const homePath = (lang: Lang): string => (lang === DEFAULT_LANG ? '/' : `/${lang}/`);

export const projectsPath = (lang: Lang): string => `${homePath(lang)}#${PROJECTS_SEGMENT[lang]}`;

export const projectPath = (lang: Lang, slug: string): string =>
  `${homePath(lang)}${PROJECTS_SEGMENT[lang]}/${slug}/`;
