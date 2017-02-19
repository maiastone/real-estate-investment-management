import React, { PropTypes as T } from 'react';

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
        <h2>Hello Other World</h2>
        {children}
      </div>
    );
  }
}

export default Container;
