import { defineConfig } from 'astro/config';

// Update `site` once this is deployed to Vercel (and again if a custom
// domain is attached later) — Astro uses it for canonical URLs and
// Rich Pin / Open Graph metadata.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
});
