export default {
  name: 'project',
  title: 'Фотопроєкт / Серія',
  type: 'document',
  fields: [
    {
      name: 'titleUa',
      title: 'Назва проєкту (UA)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Назва проєкту (EN)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL-адреса (Slug)',
      type: 'slug',
      options: {
        source: 'titleUa',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isFeatured',
      title: 'Показувати в "Обраних роботах" на головній?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'coverImage',
      title: 'Обкладинка проєкту',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          { title: 'Портрети', value: 'portrait' },
          { title: 'Фешн / Lifestyle', value: 'fashion' },
          { title: 'Студійна', value: 'studio' },
          { title: 'Love Story', value: 'lovestory' },
          { title: 'Весільна', value: 'wedding' },
          { title: 'Репортаж / Події', value: 'events' },
        ],
      },
    },
    {
      name: 'gallery',
      title: 'Галерея фотографій',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'descriptionUa',
      title: 'Опис проєкту (UA)',
      type: 'text',
    },
    {
      name: 'descriptionEn',
      title: 'Опис проєкту (EN)',
      type: 'text',
    },
  ],
};