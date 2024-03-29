/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// require('dotenv').config();

// uncomment to make dev vars work again 
/*
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: ".env.development",
  });
}
*/

require('dotenv').config({
  path: process.env.NODE_ENV === 'Production' ? '.env.production' : '.env.development',
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Noah Kittinger',
    siteUrl: `https://noahkittinger.co`,
    description: `Producer / Musician / Audio Engineer`,
    twitterUsername: `@noah_kittinger`,
    image: `https://noahkittinger.co/preview.jpg`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    {
      resolve: 'gatsby-source-filesystem', // using for static contact images
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-image',
      options: {
        // This is important for gatsby-plugin-image
        defaultQuality: 75,
      },
    },
    'gatsby-plugin-postcss', // Added gatsby-plugin-postcss
  ],
}
