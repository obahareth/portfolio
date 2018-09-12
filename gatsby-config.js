const cssnext = require('postcss-cssnext');

module.exports = {
  siteMetadata: {
    title: 'Daniel Spajic | Passionate React.js engineer',
    siteUrl: 'https://danieljs.tech',
    description:
      'Front-end engineer specialising in building robust web apps with React.js',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
