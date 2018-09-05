exports.modifyWebpackConfig = ({ config }) => {
  config.loader('markdown', {
    test: /\.md$/,
    loaders: ['html-loader', 'markdown-loader'],
  });

  return config;
};
