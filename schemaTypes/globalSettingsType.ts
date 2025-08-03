import {defineField, defineType} from 'sanity'

export const globalSettingsType = defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'websiteTitle',
      title: 'Website Title',
      description: 'This field controls the text in the web browser tab',
      type: 'string',
    }),
    defineField({
      name: 'websiteDescription',
      title: 'Website Description',
      description: 'This field is the metadata description for when you share the site',
      type: 'string',
    }),
    defineField({
      name: 'metadataImage',
      title: 'Metadata Image',
      type: 'image',
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Url',
      type: 'string',
    }),
  ],
})
