module.exports = {
  siteMetadata: {
    title: `MyBlueBackpack`,
    description: `Welcome to MyBlueBackpack.`,
    author: `Lauren Ebidia`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-content`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-content`,
        path: `${__dirname}/src/content/personal`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MyBlueBackpack`,
        short_name: `bluebackpack`,
        start_url: `/`,
        background_color: `#2F2FA2`,
        theme_color: `#2F2FA2`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: "bd98d847-d029-42cd-8a97-d5373d5c8e29",
        server: "https://knownothinackee.herokuapp.com",
        ignoreLocalhost: true,
        detailed: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
