import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` again if/when you attach a custom domain in Vercel — Astro
// uses it for canonical URLs and Rich Pin / Open Graph metadata.
export default defineConfig({
  site: 'https://vonguulian-clarity.vercel.app',
  output: 'static',
  integrations: [sitemap()],
});
