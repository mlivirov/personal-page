import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mlivirov.me',
  integrations: [sitemap({ lastmod: new Date(), changefreq: 'monthly', priority: 1.0 })],
});
