const express = require('express');
const app = express();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV || 'production') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: '/lib/bundle.js',
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));

}

app.use(express.static(path.join(__dirname, 'public')));


app.get('/404', (request, response) => {
  response.sendFile(__dirname + '/public/not_found.html')
});

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
});


const server = http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });
