const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const http = require('http');
const path = require('path');

const compiler = webpack(webpackConfig);

const environment = process.env.PORT || 8080;

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

const server = app.listen(environment, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
