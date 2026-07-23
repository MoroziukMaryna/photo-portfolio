// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['sanity', 'sanity/structure', '@sanity/astro', 'styled-components'],
    },
    ssr: {
      noExternal: ['styled-components'],
    },
  },
  integrations: [
    react(),
    sanity({
      projectId: 'oms3vs69',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin', 
    }),
  ],
});