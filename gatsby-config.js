const cssnext = require('postcss-cssnext');

module.exports = {
  siteMetadata: {
    title: 'Daniel Spajic',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
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
        path: `${__dirname}/src/page-content`,
        name: 'page-content',
      },
    },
  ],
};
