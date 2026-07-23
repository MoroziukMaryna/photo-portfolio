import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import project from './src/schemas/project';
import siteSettings from './src/schemas/siteSettings';

export default defineConfig({
  name: 'default',
  title: 'Адмінка Фотографа',

  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'oms3vs69',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: [project, siteSettings], 
  },
});