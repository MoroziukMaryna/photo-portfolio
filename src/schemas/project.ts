export default {
  name: 'project',
  title: 'Фотопроєкт / Серія',
  type: 'document',
  fields: [
    {
      name: 'title',
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
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Обкладинка проєкту',
      type: 'image',
      options: {
        hotspot: true, // Дозволяє кадрувати обличчя/фокусні точки
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
          { title: 'Фешн / Lifestlye', value: 'fashion' },
          { title: 'Репортаж / Події', value: 'events' },
          { title: 'Пейзажі / Архітектура', value: 'landscape' },
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
      name: 'description',
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