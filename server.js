const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const http = require('http');
const path = require('path');
const environment = process.env.NODE_ENV || 'development';


const port = process.env.PORT || 8080;

const server = http.createServer(app)
  .listen(port, () => {
    console.log(`listening on port {port}`);
  })

const compiler = webpack(webpackConfig);
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

module.exports = app;
