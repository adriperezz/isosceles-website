import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), sitemap(), partytown()],
  devToolbar: {
    enabled: false,
  },
  site: 'https://www.isoscelesglobal.com',
});