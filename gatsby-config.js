module.exports = {
  siteMetadata: {
    title: 'Daniel Spajic',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
  ],
};
