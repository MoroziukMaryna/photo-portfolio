import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Налаштування сайту',
  type: 'document',
  fields: [
    defineField({
      name: 'photographerName',
      title: 'Ім\'я фотографа на банері',
      type: 'string',
    }),
    defineField({
      name: 'catchPhraseUa',
      title: 'Кетч-фраза / Афоризм на банері (UA)',
      type: 'string',
    }),
    defineField({
      name: 'catchPhraseEn',
      title: 'Кетч-фраза / Афоризм на банері (EN)',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Головне фото банера (Hero)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featuredPhotos',
      title: 'Обрані фотографії для головної сторінки',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'aboutImage',
      title: 'Фото для сторінки "Про автора"',
      type: 'image',
      options: { hotspot: true },
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
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Номер телефону',
      type: 'string',
    }),
  ],
});