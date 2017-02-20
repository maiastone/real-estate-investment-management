import React from 'react';
import properties from '../properties.js';
import ToggleSwitch from './ToggleSwitch.jsx';

export default class PropertyCard extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeView: 'true',
    };
  }

  toggleModeIncome(e) {
    e.preventDefault();
    if (this.state.incomeView === 'false') {
      this.setState({
        incomeView: 'true',
      });
    }
  }

  toggleModeDebt(e) {
    e.preventDefault();
    if (this.state.incomeView === 'true') {
      this.setState({
        incomeView: 'false',
      });
    }
  }

  //     properties.map((property) => {
  //       return <div className='property-card' key={property.id}>
  //         <h2>{property.name}</h2>
  //         <div>
  //           <h3>${property.currentPrincipal}</h3>
  //           <h3>${property.currentInterest}</h3>
  //         </div>
  //       </div>; });
  //   }
  // }

  render() {
    const propertyIncomeCard = properties.map((property) => {
      return <div className='property-card' key={property.id}>
        <h2>{property.name}</h2>
        <h3>${property.monthToDate} MTD</h3>
      </div>;
    });

    return (
        <div className='property-container'>
          <ToggleSwitch
            toggleModeIncome={this.toggleModeIncome.bind(this)}
            toggleModeDebt={this.toggleModeDebt.bind(this)}
            />
          {propertyIncomeCard}
        </div>
    );
  }
}
