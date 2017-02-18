const React = require('react');
const ReactDOM = require('react-dom');
import Application from '../lib/components/Application.jsx';
import Home from '../lib/components/Home.jsx';
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Application} >
        </Route>
        <Route path='/home' component={Home} >
        </Route>
    </Router>

, document.querySelector('.application'));
