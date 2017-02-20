import React, { PropTypes as T } from 'react';
import Login from './Login.jsx';

export class Container extends React.Component {

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth,
      });
    }
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Container;
