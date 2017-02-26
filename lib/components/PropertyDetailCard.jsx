import React from 'react';
import AllPropertyContainer from './AllPropertyContainer.jsx';
import Victory from './Victory.jsx'

export default class PropertyDetailCard extends React.Component {


  render() {
    const propertyID = this.props.propertyID;
    return (
      <div className='graph-container'>
        <Victory
          propertyID={propertyID}
        />
        {propertyID}
      </div>
    );
  }
}
