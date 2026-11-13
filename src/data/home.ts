import type { Lang } from '../i18n/ui.ts';

/** Una skill; `project` es el slug del caso de estudio donde se usa. */
export interface Skill {
  label: string;
  project?: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

interface HomeData {
  now: string[];
  skills: SkillGroup[];
  /** Cronología: año (o «Ahora») y qué hacía. */
  experience: { when: string; what: string }[];
}

export const HOME: Record<Lang, HomeData> = {
  es: {
    now: [
      'Evals del coach vocal en Python: comparar modelos en calidad, coste y latencia.',
      'RAG con permisos por rol en Gospel Vallès: que cada persona solo reciba respuestas de lo que puede hacer.',
      'Servidor MCP de solo lectura para consultar torneos de Scorekinole desde un agente.',
    ],
    skills: [
      {
        title: 'IA aplicada',
        items: [
          { label: 'APIs de LLM (OpenRouter, Gemini)', project: 'coach-vocal-ia' },
          { label: 'LLM multimodal (audio)', project: 'coach-vocal-ia' },
          { label: 'Salida estructurada', project: 'coach-vocal-ia' },
          { label: 'Control de coste y límites', project: 'coach-vocal-ia' },
          { label: 'Selección de modelos', project: 'coach-vocal-ia' },
          { label: 'Desarrollo con agentes' },
          { label: 'MCP / WebMCP', project: 'scorekinole' },
          { label: 'RAG y evals (aprendiendo)', project: 'gospelvalles' },
        ],
      },
      {
        title: 'Frontend',
        items: [
          { label: 'Angular (de la 2 a la 21, signals, zoneless)' },
          { label: 'Svelte 5 / SvelteKit', project: 'scorekinole' },
          { label: 'Astro', project: 'gospelvalles' },
          { label: 'TypeScript' },
          { label: 'PWA offline-first', project: 'scorekinole' },
          { label: 'Librerías de componentes' },
          { label: 'Accesibilidad y mobile first', project: 'gospelvalles' },
        ],
      },
      {
        title: 'Backend y datos',
        items: [
          { label: 'Supabase / Postgres (RLS, Edge Functions, pg_cron)', project: 'gospelvalles' },
          { label: 'Firebase (Firestore, Cloud Functions)', project: 'scorekinole' },
          { label: 'Node.js', project: 'hipotecas' },
          { label: 'Stripe', project: 'scorekinole' },
        ],
      },
      {
        title: 'Calidad y entrega',
        items: [
          { label: 'Vitest', project: 'scorekinole' },
          { label: 'Playwright e2e', project: 'gospelvalles' },
          { label: 'CI (GitHub Actions, Azure DevOps)' },
          { label: 'Cloudflare Pages', project: 'gospelvalles' },
          { label: 'Publicación en npm' },
        ],
      },
    ],
    experience: [
      { when: '1999', what: 'Empiezo a hacer webs.' },
      { when: '2015', what: 'Me especializo en frontend, con Angular 2.' },
      { when: 'Ahora', what: 'En empresa: librería de componentes Angular 21 que usan varios equipos de producto (diseño de API, tests y publicación en npm). Por mi cuenta, funciones con LLM en producción.' },
    ],
  },
  en: {
    now: [
      'Evals for the vocal coach in Python: comparing models on quality, cost and latency.',
      'Role-aware RAG in Gospel Vallès: each person only gets answers about what they can do.',
      'A read-only MCP server to query Scorekinole tournaments from an agent.',
    ],
    skills: [
      {
        title: 'Applied AI',
        items: [
          { label: 'LLM APIs (OpenRouter, Gemini)', project: 'coach-vocal-ia' },
          { label: 'Multimodal LLM (audio)', project: 'coach-vocal-ia' },
          { label: 'Structured output', project: 'coach-vocal-ia' },
          { label: 'Cost control and limits', project: 'coach-vocal-ia' },
          { label: 'Model selection', project: 'coach-vocal-ia' },
          { label: 'Agentic development' },
          { label: 'MCP / WebMCP', project: 'scorekinole' },
          { label: 'RAG and evals (learning)', project: 'gospelvalles' },
        ],
      },
      {
        title: 'Frontend',
        items: [
          { label: 'Angular (from 2 to 21, signals, zoneless)' },
          { label: 'Svelte 5 / SvelteKit', project: 'scorekinole' },
          { label: 'Astro', project: 'gospelvalles' },
          { label: 'TypeScript' },
          { label: 'Offline-first PWA', project: 'scorekinole' },
          { label: 'Component libraries' },
          { label: 'Accessibility and mobile first', project: 'gospelvalles' },
        ],
      },
      {
        title: 'Backend and data',
        items: [
          { label: 'Supabase / Postgres (RLS, Edge Functions, pg_cron)', project: 'gospelvalles' },
          { label: 'Firebase (Firestore, Cloud Functions)', project: 'scorekinole' },
          { label: 'Node.js', project: 'hipotecas' },
          { label: 'Stripe', project: 'scorekinole' },
        ],
      },
      {
        title: 'Quality and delivery',
        items: [
          { label: 'Vitest', project: 'scorekinole' },
          { label: 'Playwright e2e', project: 'gospelvalles' },
          { label: 'CI (GitHub Actions, Azure DevOps)' },
          { label: 'Cloudflare Pages', project: 'gospelvalles' },
          { label: 'npm publishing' },
        ],
      },
    ],
    experience: [
      { when: '1999', what: 'I start building websites.' },
      { when: '2015', what: 'I specialise in frontend, with Angular 2.' },
      { when: 'Now', what: 'At work: an Angular 21 component library used by several product teams (API design, tests and npm publishing). On my own, LLM features in production.' },
    ],
  },
};
