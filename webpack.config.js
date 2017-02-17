const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: ['babel-polyfill', 'mocha!./test/index.js'],
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: '/lib/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass', include: path.join(__dirname, 'lib', 'styles') },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
};
