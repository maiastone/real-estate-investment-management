require('babel-register')({
  presets: ["react", "es2015"]
});
require('babel-polyfill')

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>Real Estate Dashboard</title>
  </head>
  <body>
    <div class='application'></div>
  </body>`);
global.window = document.defaultView
global.navigator = window.navigator
