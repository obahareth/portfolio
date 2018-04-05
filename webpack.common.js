/* eslint import/no-extraneous-dependencies: 0 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssnext = require('postcss-cssnext');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    vendor: [
      './assets/vendor/bootstrap.scss',
      'jquery',
    ],
    common: [
      './assets/scss/styles.scss',
      './assets/js/main.js',
      'babel-polyfill',
    ],
    homePage: [
      './assets/scss/home-page.scss',
      './assets/js/home-page.js',
    ],
  },
  output: {
    path: path.resolve('./assets/'),
    filename: '[name]-[hash].js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets/fonts', to: 'fonts' },
      { from: 'assets/img', to: 'img' },
      { from: 'assets/svg', to: 'svg' },
    ]),
    new StyleLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-runtime'],
              presets: ['env'],
            },
          },
          'eslint-loader',
        ],
        include: [
          path.resolve('./assets'),
        ],
        exclude: [
          path.resolve('./node_modules'),
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                cssnext(),
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve('./assets/scss'),
              ],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./assets'),
    ],
    extensions: ['.js'],
  },
};
