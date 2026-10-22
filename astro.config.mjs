import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real domain before deploying
export default defineConfig({
  site: 'https://example.dev',
  integrations: [sitemap({ lastmod: new Date(), changefreq: 'monthly', priority: 1.0 })],
});
