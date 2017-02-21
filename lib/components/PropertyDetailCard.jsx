import React from 'react';
import AllPropertyContainer from './AllPropertyContainer.jsx';

export default class PropertyDetailCard extends React.Component {

  render() {
    const propertyID = this.props.propertyID;

    return (
      <div className='graph-container'>
        {propertyID}
      </div>
    );
  }
}
