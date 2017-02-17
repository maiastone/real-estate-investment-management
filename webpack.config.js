const path = require('path');


module.exports = {
  entry: {
    main: './lib/index.js',
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: '/lib/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass', include: path.join(__dirname, 'lib', 'styles') },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
};
