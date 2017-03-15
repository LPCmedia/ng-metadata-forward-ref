var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].js',
    path: helpers.appendToContextRoot('www'),
    chunkFilename: '[name]_[chunkhash].js'
  },
  externals: {
    'jquery': 'jQuery',
    'angular': 'angular'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json'],
    alias: {
      'npm': helpers.appendToContextRoot('node_modules'),
      'jquery': helpers.appendToContextRoot('node_modules/jquery/dist/jquery.js'),
      'angular': helpers.appendToContextRoot('/node_modules/angular/angular.js')
    },
    modulesDirectories: [
      helpers.appendToContextRoot('node_modules'),
      helpers.appendToContextRoot('src'),
    ]
  },
  module: {
    noParse: [helpers.ctxRoot + '/node_modules/angular/angular.min.js'],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          /node_modules\/ng-metadata/,
          /node_modules\/rxjs/,
          // helpers.root( 'node_modules/@angular2-material' )
        ]
      }
    ],
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/\.DS_Store/),
  ],
  bail: true,
  devserver: {
    stats: {
      warnings: false,
      chunks: false,
      errors: true,
      errorDetails: false
    }
  }
};
