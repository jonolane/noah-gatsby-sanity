/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config()

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'h9sl2tbd',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-source-filesystem', // using for static about and contact images
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
