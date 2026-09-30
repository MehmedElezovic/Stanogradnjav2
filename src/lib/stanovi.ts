import data from '../data/stanovi.json';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export type Stan = {
  lamela: 'A' | 'B';
  stan: number;
  sprat: number;
  tip: string;
  povrsina: number;
  status: 'dostupan' | 'prodato';
};

export const stanovi = data as Stan[];
export const dostupni = stanovi.filter((s) => s.status === 'dostupan');
export const prodato = stanovi.length - dostupni.length;
export const prodatoPct = Math.round((prodato / stanovi.length) * 100);

export const id = (s: Stan) => `${s.lamela}-${s.stan}`;
export const m2 = (n: number) => n.toFixed(2).replace('.', ',');

/** Vraća putanju slike ako fajl postoji u /public, inače null (prikazuje se placeholder). */
export function publicImage(path: string): string | null {
  return existsSync(join(process.cwd(), 'public', path)) ? path : null;
}

/** Tlocrt stana: /tlocrti/A-30.jpg (ili .png / .webp) */
export function tlocrt(s: Stan): string | null {
  for (const ext of ['jpg', 'png', 'webp']) {
    const p = publicImage(`/tlocrti/${id(s)}.${ext}`);
    if (p) return p;
  }
  return null;
}
