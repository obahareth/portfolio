/* eslint import/no-extraneous-dependencies: 0 */
const BundleTracker = require('webpack-bundle-tracker');
const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

const devServerPort = 8080;
const devServerHost = '0.0.0.0';
const devServerUrl = `http://${devServerHost}:${devServerPort}`;
const devServerPublicPath = `${devServerUrl}/static/`;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    publicPath: devServerPublicPath,
    hot: true,
    hotOnly: true,
    host: '0.0.0.0',
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: devServerPort,
  },
  output: {
    publicPath: devServerPublicPath,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({ filename: './webpack-stats.json' }),
  ],
});
