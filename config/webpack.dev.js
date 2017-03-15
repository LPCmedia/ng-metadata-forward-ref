var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var srcCtx = helpers.appendToContextRoot('src');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var jqueryVersion = require('./../package.json').dependencies.jquery;
var ngVersion = require('./../package.json').dependencies.angular;

module.exports = webpackMerge(commonConfig, {
  bail: true,
  context: srcCtx,
  debug: true,
  devtool: 'cheap-module-source-map',
  entry: {
    'app': [helpers.appendToContextRoot('src/main.module.ts')],
    'vendor': [helpers.appendToContextRoot('src/vendor.ts')],
  },
  module: {
    loaders: [
      {test: /\.ts$/, exclude: [/node_modules/], loader: 'ts-loader'},
    ],
  },
  node: {
    crypto: 'empty',
    fs: 'empty',
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: helpers.appendToContextRoot('/node_modules/jquery/dist/jquery.min.js'), to: 'lib'},
      {from: helpers.appendToContextRoot('/node_modules/angular/angular.min.js'), to: 'lib'},
    ]),
    new HtmlWebpackPlugin({
      chunks: ['app', 'vendor'],
      hash: true,
      inject: 'body',
      template: './index.html',
    }),
  ]
});
