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
      name: 'contactFromTitle',
      title: 'Contatct From Title',
      description: 'This field is the text above the contact form',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactFromSubTitle',
      title: 'Contatct From Sub-Title',
      description: 'This field is the text above the contact form',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'studioContentTitle',
    },
  },
})
