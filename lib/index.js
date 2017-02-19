const React = require('react');
const ReactDOM = require('react-dom');
import Application from '../lib/components/Application.jsx';
import Home from '../lib/components/Home.jsx';
import Login from '../lib/components/Login.jsx';
import AuthService from '../lib/utils/AuthService';
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router';


ReactDOM.render(<Application />, document.querySelector('.application'));
