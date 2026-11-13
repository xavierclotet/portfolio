import { slugOf, type Project } from './projects.ts';

export interface Stop {
  label: string;
  /** Clave para casar la misma estación en varias líneas. */
  key: string;
  ai: boolean;
  /** Otras líneas que pasan por esta estación (correspondencia). */
  also: number[];
  /** Columna en el plano: una correspondencia ocupa la misma columna en todas sus líneas. */
  col: number;
  /** Columnas hasta la estación siguiente (0 en la última). */
  span: number;
}

export interface Line {
  /** Número de línea: el `order` del proyecto. */
  n: number;
  code: string;
  slug: string;
  project: Project;
  stops: Stop[];
}

const keyOf = (label: string): string => label.toLowerCase().trim();

/** Estaciones por línea: el plano tiene que leerse de un vistazo. */
const MAX_STOPS = 7;

/** Cada proyecto es una línea; sus usos de IA y sus decisiones, estaciones; lo compartido, correspondencias. */
export function buildLines(projects: Project[]): Line[] {
  const lines: Line[] = projects.map((project) => {
    const n = project.data.order;
    const raw = [
      ...project.data.ai.map((label) => ({ label, ai: true })),
      ...project.data.decisions.map((label) => ({ label, ai: false })),
    ];
    const seen = new Set<string>();
    const stops = raw
      .map((s) => ({ ...s, key: keyOf(s.label), also: [] as number[], col: 0, span: 0 }))
      .filter((s) => !seen.has(s.key) && seen.add(s.key))
      .slice(0, MAX_STOPS);
    return { n, code: `L${n}`, slug: slugOf(project), project, stops };
  });

  const byKey = new Map<string, number[]>();
  for (const line of lines) {
    for (const stop of line.stops) byKey.set(stop.key, [...(byKey.get(stop.key) ?? []), line.n]);
  }
  for (const line of lines) {
    for (const stop of line.stops) stop.also = (byKey.get(stop.key) ?? []).filter((n) => n !== line.n);
  }

  placeColumns(lines);
  return lines;
}

/**
 * Alinea las correspondencias: dentro de cada línea, las estaciones compartidas van en un orden común
 * (el de su primera aparición) y cada una toma la columna más a la derecha que necesite alguna de sus
 * líneas. El resto de estaciones va seguido.
 */
function placeColumns(lines: Line[]): void {
  const order: string[] = [];
  for (const line of lines) {
    for (const s of line.stops) if (s.also.length > 0 && !order.includes(s.key)) order.push(s.key);
  }
  for (const line of lines) {
    const shared = line.stops.filter((s) => s.also.length > 0).sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    let i = 0;
    line.stops = line.stops.map((s) => (s.also.length > 0 ? shared[i++] : s));
  }

  const col = new Map<string, number>();
  for (const key of order) {
    let need = 0;
    for (const line of lines) {
      const at = line.stops.findIndex((s) => s.key === key);
      if (at === -1) continue;
      let prevCol = -1;
      let between = 0;
      for (let j = at - 1; j >= 0; j--) {
        const placed = col.get(line.stops[j].key);
        if (line.stops[j].also.length > 0 && placed !== undefined) {
          prevCol = placed;
          break;
        }
        between++;
      }
      need = Math.max(need, prevCol + 1 + between);
    }
    col.set(key, need);
  }

  for (const line of lines) {
    let c = -1;
    for (const s of line.stops) {
      c = s.also.length > 0 ? (col.get(s.key) ?? c + 1) : c + 1;
      s.col = c;
    }
    line.stops.forEach((s, j) => (s.span = j < line.stops.length - 1 ? line.stops[j + 1].col - s.col : 0));
  }
}

/** Número de columnas que necesita el plano entero. */
export const columnsOf = (lines: Line[]): number => Math.max(1, ...lines.flatMap((l) => l.stops.map((s) => s.col + 1)));

/** Número de línea de un proyecto publicado, si lo está. */
export const lineOf = (lines: Line[], slug: string): number | undefined => lines.find((l) => l.slug === slug)?.n;
