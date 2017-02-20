import React from 'react';
import properties from '../properties.js';

export default class PropertyList extends React.Component {


  render() {
    const propertyList = properties.map((property) => {
      return <ul>
                <li key={property.id}
                  className='property-list'
                >
                {property.name}
                </li>
            </ul>;
    });

    return (
      <div>
        {propertyList}
      </div>
    );
  }
}
