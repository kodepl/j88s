import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://j88s.life',
  output: 'static',
  integrations: [],
  vite: { css: { postcss: true } },
});
