const path = require('path');


module.exports = {
  entry: {
    main: './lib/index.js',
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '/lib/bundle.js',
    publicPath: '/home/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
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
