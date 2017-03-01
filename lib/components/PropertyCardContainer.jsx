import React from 'react';
import properties from '../properties.js';
import ToggleSwitch from './ToggleSwitch.jsx';
import { Link } from 'react-router';

export default class PropertyCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeView: true,
      incomeBgColor: '#6df281',
      debtBgColor: 'gray',
    };
  }

  toggleModeIncome(e) {
    e.preventDefault();
    if (this.state.incomeView === false) {
      this.setState({
        incomeView: true,
        incomeBgColor: '#6df281',
        debtBgColor: 'gray',
      });
    }
  }

  toggleModeDebt(e) {
    e.preventDefault();
    if (this.state.incomeView === true) {
      this.setState({
        incomeView: false,
        incomeBgColor: 'gray',
        debtBgColor: '#6df281',
      });
    }
  }

  render() {
    let component;
    if (this.state.incomeView === true) {
      component = properties.map((property) => {
        return <div className='property-card' key={property.id}>
        <Link to={'/detail/' + property.id}
          activeClassName='active'
          >
          <img className='chart-img'
          src='/lib/images/chart.svg'></img></Link>
        <h2>{property.name}</h2>
        <h3>${property.monthToDate} mtd</h3>
      </div>;
      });
    } else {
      component =
        properties.map((property) => {
          return <div className='property-card' key={property.id}>
            <Link to='/detail'
              activeClassName='active'
            >
              <img className='chart-img'
              src='/lib/images/chart.svg'>
              </img>
            </Link>
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
            className='toggle'
            incomeBgColor={this.state.incomeBgColor}
            debtBgColor={this.state.debtBgColor}
            toggleModeIncome={this.toggleModeIncome.bind(this)}
            toggleModeDebt={this.toggleModeDebt.bind(this)}
          />
            {component}
        </div>
    );
  }
}
