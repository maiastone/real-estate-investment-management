import React from 'react';
import properties from '../properties.js';
import ToggleSwitch from './ToggleSwitch.jsx';
import { Link } from 'react-router';

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

  render() {
    let component;
    if (this.state.incomeView === 'true') {
      component = properties.map((property) => {
        return <div className='property-card' key={property.id}>
        <Link to='/detail'><img className='chart-img'
          src='/lib/images/chart_line.png'></img></Link>
        <h2>{property.name}</h2>
        <h3>${property.monthToDate} mtd</h3>
      </div>;
      });
    } else {
      component =
        properties.map((property) => {
          return <div className='property-card' key={property.id}>
            <Link to='/detail'><img className='chart-img'
              src='/lib/images/chart_line.png'></img></Link>
            <h2>{property.name}</h2>
            <div>
              <h4>${property.currentPrincipal} Principal</h4>
              <h4>${property.currentInterest} Interest</h4>
            </div>
          </div>; });
    }

    return (
        <div className='property-container'>
          <ToggleSwitch
            toggleModeIncome={this.toggleModeIncome.bind(this)}
            toggleModeDebt={this.toggleModeDebt.bind(this)}
            />
          {component}
        </div>
    );
  }
}
