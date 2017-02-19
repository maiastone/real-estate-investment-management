import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Application from './components/Application.jsx';
import makeRoutes from './routes.js';

import '../lib/styles/main.scss';

const routes = makeRoutes()

const mountNode = document.querySelector('.application');
ReactDOM.render(
  <Application history={browserHistory}
        routes={routes} />,
mountNode);
