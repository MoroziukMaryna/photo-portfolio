import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Послуги та Прайс',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Шаблон/Пресет послуги (або введіть свою назву нижче)',
      type: 'string',
      options: {
        list: [
          { title: 'Портретна зйомка / Portrait Session', value: 'portrait' },
          { title: 'Content / Fashion', value: 'fashion' },
          { title: 'Love Story / Парна / Couple', value: 'lovestory' },
          { title: 'Студійна зйомка / Studio Session', value: 'studio' },
          { title: 'Весільна зйомка / Wedding Session', value: 'wedding' },
          { title: 'Своя назва (заповніть поля нижче)', value: 'custom' },
        ],
      },
      initialValue: 'portrait',
    }),
    defineField({
      name: 'customTitleUa',
      title: 'Власна назва послуги (UA) (якщо обрано "Своя назва")',
      type: 'string',
      hidden: ({ document }) => document?.preset !== 'custom',
    }),
    defineField({
      name: 'customTitleEn',
      title: 'Власна назва послуги (EN) (якщо обрано "Своя назва")',
      type: 'string',
      hidden: ({ document }) => document?.preset !== 'custom',
    }),
    defineField({
      name: 'isPopular',
      title: 'Позначити як "Популярний" (Popular)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'options',
      title: 'Варіанти тривалості та ціни',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'priceOption',
          title: 'Варіант часу',
          fields: [
            { 
              name: 'hours', 
              title: 'Кількість годин (число, наприклад: 1, 1.5, 2)', 
              type: 'number',
              initialValue: 1 
            },
            { 
              name: 'priceUah', 
              title: 'Ціна в гривнях (просто число, наприклад: 2500)', 
              type: 'number',
              initialValue: 2500
            },
            { 
              name: 'priceUsd', 
              title: 'Ціна в доларах $ (просто число, наприклад: 65)', 
              type: 'number',
              initialValue: 65
            },
            { 
              name: 'photoCount', 
              title: 'Кількість фото (число, наприклад: 30 чи 50)', 
              type: 'number',
              initialValue: 30
            },
            { 
              name: 'daysCount', 
              title: 'Готовність у робочих днях (число, наприклад: 7 чи 10)', 
              type: 'number',
              initialValue: 7 
            },
          ],
          preview: {
            select: {
              hours: 'hours',
              priceUah: 'priceUah',
            },
            prepare({ hours, priceUah }) {
              return {
                title: `${hours || 1} год — ${priceUah || 0} ₴`,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'featuresUa',
      title: 'Що додатково входить у вартість (список UA)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featuresEn',
      title: 'Що додатково входить у вартість (список EN)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Порядок відображення (1, 2, 3...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'За порядком',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});