import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Налаштування сайту',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Головне фото банера (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutImage',
      title: 'Фото для блоку "Про автора"',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'photographerName',
      title: 'Ім\'я фотографа на банері',
      type: 'string',
    }),
    defineField({
      name: 'aboutTextUa',
      title: 'Текст "Про мене" (UA)',
      type: 'text',
    }),
    defineField({
      name: 'aboutTextEn',
      title: 'Текст "Про мене" (EN)',
      type: 'text',
    }),
  ],
});