import {defineField, defineType} from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'The landing page will fallback to this color if no image is provided.',
      options: {
        list: ['Primary', 'Secondary', 'Tertiary'],
      },
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub-Headline',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'studioContentTitle',
    },
  },
})
