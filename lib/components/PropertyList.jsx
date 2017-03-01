import React from 'react';
import properties from '../properties.js';
import AllPropertyContainer from './AllPropertyContainer.jsx';
import { Link } from 'react-router';

export default class PropertyList extends React.Component {


  render() {
    const propertyID = this.props.currentProperty;
    const propertyList = properties.map((property) => {
      return (
      <ul>
        <button className='properties'>
          <li key={property.id}>
          <Link to={'/detail/' + property.id}
            activeClassName='active'
          >
              {property.name}
          </Link>
            </li>
        </button>
      </ul>);
    });

    return (
      <div>
        {propertyList}
      </div>
    );
  }
}
