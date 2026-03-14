import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://universitat.studio',
  output: 'server',
  adapter: cloudflare(),
  integrations: [mdx(), keystatic(), react()],
});