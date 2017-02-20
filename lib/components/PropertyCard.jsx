import React from 'react';
import properties from '../properties.js';
import ToggleSwitch from './ToggleSwitch.jsx';

export default class PropertyCard extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: 'income',
    };
  }

  toggleMode(e) {
    debugger;
    e.preventDefault();
    if (this.state.mode === 'income') {
      this.setState({
        mode: 'debt',
      });
    } else {
      this.setState({
        mode: 'income',
      });
    }
  }

  render() {
    const propertyCard = properties.map((property) =>
      <div className='property-card' key={property.id}>
        <h2>{property.name}</h2>
        <h3>${property.monthToDate} MTD</h3>
        <h3>${property.currentPrincipal}</h3>
        <h3>${property.currentInterest}</h3>)
      </div>
    );
    return (
      <div>
        <div className='property-container'>
          <ToggleSwitch toggleMode={this.toggleMode.bind(this)}/>
          {propertyCard}
        </div>
      </div>
    );
  }
}
