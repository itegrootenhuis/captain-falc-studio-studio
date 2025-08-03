import {defineField, defineType} from 'sanity'

export const audioType = defineType({
  name: 'audio',
  title: 'Audio',
  type: 'document',
  fields: [
    defineField({
      name: 'songName',
      title: 'Song Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'audioFile',
      title: 'Upload Audio File (.wav / .flac / .x-flac)',
      type: 'file',
      options: {
        accept: 'audio/wav, audio/flac, audio/x-flac',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      description:
        'This will determine the order in which the tracks display in the player from top to bottom',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'songName',
      subtitle: 'artistName',
    },
  },
})
