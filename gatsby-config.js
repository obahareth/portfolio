const cssnext = require('postcss-cssnext');

module.exports = {
  siteMetadata: {
    title: 'Daniel Spajic | Front-end engineer with a full-stack skillset',
    siteUrl: 'https://danieljs.tech',
    description:
      `Passionate front-end developer with a deep, yet diverse skillset. I
      specialise in building elegant, robust web apps with fluid user experiences.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Daniel Spajic',
        short_name: 'Daniel Spajic',
        start_url: '/',
        background_color: '#f8f9fa',
        theme_color: '#1c013b',
        display: 'minimal-ui',
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        addSassLoader: false,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [cssnext()],
        precision: 8,
        includePaths: ['src/scss'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125642949-1',
        respectDNT: true,
      },
    },
  ],
};
