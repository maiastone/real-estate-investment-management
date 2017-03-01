import React from 'react';
import properties from '../properties.js';
import AllPropertyContainer from './AllPropertyContainer.jsx';
import { Link } from 'react-router';

export default class PropertyList extends React.Component {


  render() {
    const propertyList = properties.map((property) => {
      return (
        <button
          key={property.id}
          className='properties'>
          <li key={property.id}>
          <Link to={'/detail/' + property.id}
            activeClassName='active'
          >
              {property.name}
          </Link>
            </li>
        </button>
      );
    });

    return (
      <div>
        <ul>{propertyList}</ul>
      </div>
    );
  }
}
