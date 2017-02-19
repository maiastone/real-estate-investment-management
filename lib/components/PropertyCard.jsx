import React from 'react';
import properties from '../properties.js';
import ToggleSwitch from './ToggleSwitch.jsx';

export default class PropertyCard extends React.Component {

  render() {
    const propertyCard = properties.map((property) =>
      <div className='property-card' key={property.id}>
        <h2>{property.name}</h2>
        <h3>${property.monthToDate} MTD</h3>
      </div>
    );
    return (
      <div>
        <div className='property-container'>
          <ToggleSwitch />
          {propertyCard}
        </div>
      </div>
    );
  }
}
