import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://universitat.studio',
  adapter: cloudflare(),
  integrations: [mdx(), keystatic()],
});
