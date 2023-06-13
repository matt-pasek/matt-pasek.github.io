import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image({serviceEntryPoint: '@astrojs/image/sharp'}), vue({ appEntrypoint: '/src/pages/_app' }), mdx()]
});