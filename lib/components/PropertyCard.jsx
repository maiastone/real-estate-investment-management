import React from 'react';
import properties from '../properties.js'

export default class PropertyCard extends React.Component {

  render() {
    const propertyCard = properties.map((property) =>
      <div class='property-card' key={property.id}>
        <h2>{property.name}</h2>
        <h3>${property.monthToDate}</h3>
      </div>
    );
    return (
      <div>
        {propertyCard}
      </div>
    );
  }
}
