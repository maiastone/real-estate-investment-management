import React from 'react';
import PropertyList from './PropertyList.jsx';
import Header from './Header.jsx';
import ToggleSwitch from './ToggleSwitch.jsx';
import PropertyDetailCard from './PropertyDetailCard.jsx';
import { Link } from 'react-router';

export default class AllPropertyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      incomeView: true,
      incomeBgColor: '#6df281',
      debtBgColor: 'gray',
      propertyID: 1,
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
    return (
      <div>
        <div className='site-title header'>
          <h2>Real Estate Dashboard</h2>
        </div>
        <section className="detail-links-and-buttons">
          <Link to='/home' className='back'>
            <img src='/lib/images/arrow.svg'/>
            <button id='home'>Property Overview</button>
          </Link>
          <ToggleSwitch
            className='toggle'
            incomeBgColor={this.state.incomeBgColor}
            debtBgColor={this.state.debtBgColor}
            toggleModeIncome={this.toggleModeIncome.bind(this)}
            toggleModeDebt={this.toggleModeDebt.bind(this)}
          />
        </section>
        <div className='detail-view'>
          <PropertyList
            propertyID={this.state.propertyID}
          />
          <PropertyDetailCard
            propertyID={this.props.params.id}
            incomeView={this.state.incomeView}
          />
        </div>
      </div>
    );
  }
}
