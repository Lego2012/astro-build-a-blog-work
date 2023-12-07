import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  "experimental.contentCollectionCache": true,
  site: "https://build-a-blog-work.netlify.app/",
  integrations: [preact()]
});