import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui.ts';

export type Project = CollectionEntry<'projects'>;

/** El id del loader es `<lang>/<slug>`. */
export const slugOf = (p: Project): string => p.id.split('/').slice(1).join('/');

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !p.data.draft));
  return all.sort((a, b) => a.data.order - b.data.order);
}
