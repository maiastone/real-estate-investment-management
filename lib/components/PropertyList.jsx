import React from 'react';
import properties from '../properties.js';
import AllPropertyContainer from './AllPropertyContainer.jsx';
import { Link } from 'react-router';

export default class PropertyList extends React.Component {


  render() {
    const setProperty = this.props.setProperty;
    const propertyList = properties.map((property) => {
      return <ul>
        <Link to={'/detail/'+property.id }>
                <li key={property.id}
                  className='property-list'
                >
                {property.name}
              </li></Link>
            </ul>;
    });

    return (
      <div>
        {propertyList}
      </div>
    );
  }
}
