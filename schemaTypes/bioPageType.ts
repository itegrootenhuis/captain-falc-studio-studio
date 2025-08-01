import {defineField, defineType} from 'sanity'

export const bioPageType = defineType({
  name: 'bioPage',
  title: 'Bio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'studioContentTitle',
      title: 'Studio Content Title',
      description: 'This field is used only for naming the content item in the Studio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: ['Primary', 'Secondary', 'Tertiary'],
      },
    }),
    defineField({
      name: 'bioContent',
      title: 'Bio Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'bioImage',
      title: 'Bio Image',
      type: 'image',
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'bioImageAlt',
      title: 'Bio Image Alt Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'studioContentTitle',
    },
  },
})
