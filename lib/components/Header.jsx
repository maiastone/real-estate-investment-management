import React from 'react';


export default class Header extends React.Component {

  render() {
    return (
      <div id='site-title'className='header'>
        <h2>Real Estate Dashboard</h2>
        <button id='logout' onClick={this. props.logout}>Logout</button>
      </div>
    );
  }
}
