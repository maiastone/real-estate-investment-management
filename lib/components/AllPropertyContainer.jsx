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
      incomeBgColor: 'white',
      debtBgColor: 'gray',
      propertyID: 1,
    };
  }

  toggleModeIncome(e) {
    e.preventDefault();
    if (this.state.incomeView === false) {
      this.setState({
        incomeView: true,
        incomeBgColor: 'white',
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
        debtBgColor: 'white',
      });
    }
  }


  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <ToggleSwitch
          incomeBgColor={this.state.incomeBgColor}
          debtBgColor={this.state.debtBgColor}
          toggleModeIncome={this.toggleModeIncome.bind(this)}
          toggleModeDebt={this.toggleModeDebt.bind(this)}
        />
        <Link to='/home'>
          <button id='home'>Property Overview</button>
        </Link>
        <div className='detail-view'>
          <PropertyList />
          <PropertyDetailCard
            propertyID={this.props.params.id}
          />
        </div>
      </div>
    );
  }
}
