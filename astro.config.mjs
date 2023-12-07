import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  "experimental.contentCollectionCache": true,
  site: "https://build-a-blog-work.netlify.app/"
});
