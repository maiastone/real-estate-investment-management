const React = require('react');
const ReactDOM = require('react-dom');
import Container from '../lib/components/Container.jsx';
import Home from '../lib/components/Home.jsx';
import Login from '../lib/components/Login.jsx';
import AuthService from '../lib/utils/AuthService';
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

const auth = new AuthService('qHCAwXwsNocsS60Lq96fs7H6qTs3osQD', 'maiastone.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth} >
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Route>
  );
};

export default makeMainRoutes;
