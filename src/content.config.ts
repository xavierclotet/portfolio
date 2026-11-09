import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un caso de estudio por idioma: src/content/projects/<es|en>/<slug>.md.
// El slug (nombre del fichero) es el mismo en los dos idiomas.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    stack: z.array(z.string()).min(1),
    /** Etiquetas de AI que destaca el caso (p. ej. «LLM multimodal», «Evals»). */
    ai: z.array(z.string()).default([]),
    links: z.object({ repo: z.url().optional(), demo: z.url().optional() }).default({}),
    /** El código no se puede enseñar: se explica con diagramas y fragmentos. */
    privateCode: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number(),
    /** Los borradores solo se ven en desarrollo. */
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects };
