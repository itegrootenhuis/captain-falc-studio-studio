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
      name: 'favicon',
      title: 'Favicon',
      type: 'file',
      options: {
        accept: 'image/*',
      },
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Url',
      type: 'string',
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify Url',
      type: 'string',
    }),
  ],
})
