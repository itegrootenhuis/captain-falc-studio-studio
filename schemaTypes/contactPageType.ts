import {defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
  ],
  preview: {
    select: {
      title: 'studioContentTitle',
    },
  },
})
