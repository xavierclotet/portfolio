export const LANGS = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof LANGS;
export const DEFAULT_LANG: Lang = 'es';

/** Segmento de la ruta de proyectos en cada idioma. */
export const PROJECTS_SEGMENT: Record<Lang, string> = { es: 'proyectos', en: 'projects' };

/** Segmento de la página «Cómo trabajo con IA». */
export const HOWIWORK_SEGMENT: Record<Lang, string> = { es: 'como-trabajo', en: 'how-i-work' };

export const UI = {
  es: {
    'meta.title': 'Ingeniero frontend y AI engineering',
    'meta.description': 'Ingeniero frontend senior que construye producto con IA: casos de estudio, decisiones técnicas y cómo trabajo con agentes.',
    'nav.projects': 'Proyectos',
    'nav.howiwork': 'Cómo trabajo',
    'nav.contact': 'Contacto',
    'nav.skip': 'Saltar al contenido',
    'lang.switch': 'English',
    'hero.title': 'Ingeniero frontend senior que construye producto con IA.',
    'hero.lead': 'Hago webs desde 1999 y me especialicé en frontend en 2015, con Angular 2. Ahora estoy dando el paso a AI engineering: llevo funciones con LLM a producción con el coste, los permisos y los fallos bajo control, y desarrollo a diario con agentes.',
    'hero.write': 'Escríbeme',
    'hero.projects': 'Ver los proyectos',
    'projects.title': 'Proyectos',
    'projects.lead': 'Cada uno con el problema, las decisiones y por qué las tomé.',
    'map.legend': 'Cómo leer el plano',
    'map.legend.lines': 'Un color por proyecto',
    'map.legend.marks': 'Qué significa cada punto',
    'map.line': 'Línea: un proyecto.',
    'map.stop': 'Decisión del proyecto',
    'map.ai': 'Uso de IA',
    'map.interchange': 'Compartido con otros proyectos: las placas dicen con cuáles',
    'map.stops': 'Decisiones e IA',
    'map.also': 'También en',
    'map.line.name': 'Línea',
    'howiwork.title': 'Cómo trabajo con IA',
    'howiwork.lead': 'Cada repo tiene sus reglas para agentes en un único AGENTS.md. Uso skills de otros y escribo las mías, y nada se da por bueno sin tests o e2e que lo verifiquen.',
    'howiwork.more': 'Ver cómo trabajo',
    'now.title': 'Ahora mismo',
    'skills.title': 'Skills',
    'skills.lead': 'Las tecnologías que uso; la placa indica en qué proyecto.',
    'experience.title': 'Experiencia',
    'project.stack': 'Stack',
    'project.links': 'Enlaces',
    'project.repo': 'Código',
    'project.demo': 'Ver en marcha',
    'project.private': 'El código es privado: aquí explico las decisiones.',
    'project.back': 'Todos los proyectos',
    'project.read': 'Leer el caso',
    'project.draft': 'Borrador',
    'project.next': 'Siguiente proyecto',
    'link.newtab': 'se abre en una pestaña nueva',
    'theme.dark': 'Cambiar a tema oscuro',
    'theme.light': 'Cambiar a tema claro',
    'contact.title': 'Contacto',
    'contact.end': '¿Hablamos?',
    'contact.lead': 'No estoy buscando activamente, pero me interesan los puestos de AI engineering en equipos de producto. Si tenéis uno, escribidme.',
    'notfound.title': 'Página no encontrada',
    'notfound.lead': 'Esta estación no existe o está fuera de servicio.',
    'notfound.back': 'Volver al inicio',
  },
  en: {
    'meta.title': 'Frontend engineer and AI engineering',
    'meta.description': 'Senior frontend engineer building AI products: case studies, technical decisions and how I work with agents.',
    'nav.projects': 'Projects',
    'nav.howiwork': 'How I work',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Español',
    'hero.title': 'Senior frontend engineer building AI products.',
    'hero.lead': 'I have been building for the web since 1999 and specialised in frontend in 2015, with Angular 2. Now I am moving into AI engineering: I ship LLM features to production with cost, permissions and failures under control, and I develop with agents every day.',
    'hero.write': 'Write to me',
    'hero.projects': 'See the projects',
    'projects.title': 'Projects',
    'projects.lead': 'Each one with the problem, the decisions and why I made them.',
    'map.legend': 'How to read the map',
    'map.legend.lines': 'One colour per project',
    'map.legend.marks': 'What each dot means',
    'map.line': 'Line: one project.',
    'map.stop': 'Decision in the project',
    'map.ai': 'Use of AI',
    'map.interchange': 'Shared with other projects: the plaques show which',
    'map.stops': 'Decisions and AI',
    'map.also': 'Also on',
    'map.line.name': 'Line',
    'howiwork.title': 'How I work with AI',
    'howiwork.lead': 'Every repo keeps its rules for agents in a single AGENTS.md. I use other people’s skills and write my own, and nothing counts as done until tests or e2e verify it.',
    'howiwork.more': 'See how I work',
    'now.title': 'Right now',
    'skills.title': 'Skills',
    'skills.lead': 'The technologies I use; the plaque shows in which project.',
    'experience.title': 'Experience',
    'project.stack': 'Stack',
    'project.links': 'Links',
    'project.repo': 'Code',
    'project.demo': 'Live',
    'project.private': 'The code is private: here I explain the decisions.',
    'project.back': 'All projects',
    'project.read': 'Read the case study',
    'project.draft': 'Draft',
    'project.next': 'Next project',
    'link.newtab': 'opens in a new tab',
    'theme.dark': 'Switch to dark theme',
    'theme.light': 'Switch to light theme',
    'contact.title': 'Contact',
    'contact.end': 'Shall we talk?',
    'contact.lead': 'I am not actively looking, but I am open to AI engineering roles in product teams. If you have one, write to me.',
    'notfound.title': 'Page not found',
    'notfound.lead': 'This station does not exist or is out of service.',
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

export const howIWorkPath = (lang: Lang): string => `${homePath(lang)}${HOWIWORK_SEGMENT[lang]}/`;
