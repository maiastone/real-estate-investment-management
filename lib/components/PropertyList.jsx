import React from 'react';
import properties from '../properties.js';
import AllPropertyContainer from './AllPropertyContainer.jsx';

export default class PropertyList extends React.Component {


  render() {
    const setProperty = this.props.setProperty;
    const propertyList = properties.map((property) => {
      return <ul>
                <li key={property.id}
                  className='property-list'
                  onClick={() => setProperty(property.id)}
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
