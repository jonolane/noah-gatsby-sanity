export default {
    name: 'release',
    type: 'document',
    title: 'Release',
    fields: [
      {
        name: 'artist',
        type: 'reference',
        title: 'Artist',
        to: {type: 'artist'}
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'can either be an album or single title'
      },
      {
        name: 'workDone',
        type: 'string',
        title: 'Work Done',
        description: 'i.e. "Mixing", "Production", "Mix / Production"'
      },

      /*
      {
        name: 'coverArt',
        title: 'Cover Art',
        type: 'image',
        options: {
            hotspot: true,
        },
      }, 
      */

      {
        name: 'spotityLink',
        title: 'Spotify Link',
        type: 'url',
        description: 'has to be an album or track url or cover art image will not load. also if it is a single track, make sure "track" is selected at the bottom'
      },
      {
        name: 'year',
        title: 'Year',
        type: 'number',
        description: 'i.e 2021'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
        description: 'just hit generate here, it populates a unique url domain tag for each release = )'
      },
      {
        name: 'singleTrack',
        title: 'Single Track?',
        type: 'boolean',
        description: 'Check this box only if this is a single track release. If it is multiple tracks on an album, pick false so that we use the album cover art'
      }
    ]
  }