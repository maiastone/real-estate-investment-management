const express = require('express');
const app = express();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const http = require('http');

const compiler = webpack(webpackConfig);

const environment = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8080;

const server = http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });


app.use(express.static(path.resolve(__dirname, '..', 'public')));


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/lib',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
