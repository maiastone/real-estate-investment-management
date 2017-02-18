import React, { Component, PropTypes as T } from 'react';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }
    return (
      <div>
        <h2>Hello Other World</h2>
        {children}
      </div>
    );
  }
}
