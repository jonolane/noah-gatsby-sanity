export default {
    name: 'release',
    type: 'document',
    title: 'Release',
    fields: [
      {
        name: 'artist',
        type: 'reference',
        title: 'Artist',
        to: {type: 'artist'},
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'can either be an album or single title',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'workDone',
        type: 'string',
        title: 'Work Done',
        description: 'i.e. "Mixing", "Production", "Mix / Production"',
        validation: (Rule) => Rule.required(),
      },

      {
        name: 'spotifyLink',
        title: 'Spotify Link',
        type: 'url',
        description: 'has to be an album or track url or cover art image will not load. also if it is a single track, make sure "track" is selected at the bottom',
        validation: (Rule) => Rule.required(),
      },

      /*
      {
        name: 'year',
        title: 'Year',
        type: 'number',
        description: 'i.e 2021',
        validation: (Rule) => [
          Rule.required(),
          Rule.integer().min(1000).max(9999),
          Rule.custom((year) => {
            if (year.toString().length !== 4) {
              return 'Year must be 4 characters long';
            }
            return true;
          }).warning(),
        ],
      },
      */
     
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
        description: 'just hit generate here, it populates a unique url domain tag for each release = )',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'singleTrack',
        title: 'Single Track?',
        type: 'boolean',
        description: 'Only select this as true if the song link you added was with "Copy Song Link", not "Copy Album Link". this will also make sure the correct song tile is displayed',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'displayOrNo',
        title: 'Do you want this release displayed on the home page?',
        type: 'boolean',
        validation: (Rule) => Rule.required(),
      }
    ]
  }