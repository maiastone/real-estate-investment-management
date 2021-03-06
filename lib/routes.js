const React = require('react');
const ReactDOM = require('react-dom');
import Container from '../lib/components/Container.jsx';
import Home from '../lib/components/Home.jsx';
import Login from '../lib/components/Login.jsx';
import AllPropertyContainer from '../lib/components/AllPropertyContainer.jsx';
import AuthService from '../lib/utils/AuthService';
import { Router, Route, Link, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

const auth = new AuthService('nbIc15zEIt5r1tz5FWk75bvdo5TFKI6S', 'maiastone.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth} >
      <IndexRoute component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/detail" component={AllPropertyContainer} />
      <Route path="/detail/:id" component={AllPropertyContainer} />
    </Route>
  );
};

export default makeMainRoutes;
