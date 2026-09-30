// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Promijeniti u pravu domenu prije objave
  site: 'https://www.stanogradnja.ba',
  vite: { plugins: [tailwindcss()] },
});
