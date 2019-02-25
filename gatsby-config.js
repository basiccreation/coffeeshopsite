module.exports = {
  siteMetadata: {
    title: `Cup-a-Joe`,
    description: `Coffee from your neighborhood artisan coffee shop`,
    author: `Pia Smith`,
  },

  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["CONTENTFUL_ACCESS_TOKEN", "CONTENTFUL_SPACE_ID"],
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8siclufvotzr`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `0db2587a1dee761e4cb2c64a2db9afc0097668c625c8da9851a6f90cf5b1bb32`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
